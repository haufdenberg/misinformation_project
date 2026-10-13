/* ==========================================================================
   Fact or Fiction: How to Spot Misinformation
   This file runs the course. The lessons and quizzes are in content.js,
   which must be loaded before this file.
   Sections:
     1. Settings
     2. State and page elements
     3. Starting up and saving progress (localStorage)
     4. Header progress bar, switching pages, and home dashboard
     5. Lessons and quizzes
     6. Results and certificate
     7. Buttons
   ========================================================================== */

// 1. Settings
const PASSING_GRADE = 80;

// Result titles based on the score, used on the results page
function getScoreTitle(percent) {
    if (percent === 100) return "Misinformation Detective! 🕵️";
    if (percent >= PASSING_GRADE) return "Sharp Eyes! 👀";
    if (percent >= 60) return "Almost There...";
    return "Fake News Got You This Time!";
}

// 2. State and page elements
const appState = {
    activeUnitId: 1,
    completedUnits: new Set(),
    quizScores: {},          // best score per unit id
    quizAnswers: [],         // one entry per question (number, or array for "flags" questions)
    quizSubmitted: false,    // true once the page has been graded
    currentQuizScore: 0,     // correct answers in the current attempt
    studentName: ''
};

// Load all DOM elements
const elements = {
    views: document.querySelectorAll('.view'),
    appContainer: document.querySelector('.app-container'),
    headerTitle: document.getElementById('header-title'),
    progressContainer: document.querySelector('.progress-container'),
    btnHomeNav: document.getElementById('nav-home-btn'),
    btnStart: document.getElementById('start-btn'),
    btnToQuiz: document.getElementById('to-quiz-btn'),
    btnBackToHome: document.getElementById('back-to-home-btn'),
    btnRepeat: document.getElementById('repeat-learning-btn'),
    btnNext: document.getElementById('next-unit-btn'),
    btnReset: document.getElementById('reset-btn'),
    unitsGrid: document.getElementById('units-grid'),
    currentUnitTitle: document.getElementById('current-unit-title'),
    progressLine: document.getElementById('progress-line'),
    currentStatusBadge: document.getElementById('current-status-badge'),
    learningTitle: document.getElementById('learning-title'),
    learningUnitPill: document.getElementById('learning-unit-pill'),
    learningContent: document.getElementById('learning-content'),
    quizUnitPill: document.getElementById('quiz-unit-pill'),
    quizList: document.getElementById('quiz-questions'),
    quizStatus: document.getElementById('quiz-status'),
    btnQuizSubmit: document.getElementById('quiz-submit-btn'),
    btnQuizResults: document.getElementById('quiz-results-btn'),
    sessionScore: document.getElementById('session-score'),
    resultStatusIcon: document.getElementById('result-status-icon'),
    resultHeadline: document.getElementById('result-headline'),
    resultMessage: document.getElementById('result-message'),
    certRecipient: document.getElementById('cert-recipient'),
    certNameInput: document.getElementById('cert-name-input'),
    certSummaryList: document.getElementById('cert-summary-list'),
    certOverallAvg: document.getElementById('cert-overall-avg'),
    btnPrintCert: document.getElementById('print-cert-btn'),
    btnCertBackHome: document.getElementById('cert-back-home-btn')
};

// 3. Starting up and saving progress (localStorage)
function initApp() {
    loadSavedProgress();
    renderHomeView();
    setupEventListeners();
}

// Read saved progress
function loadSavedProgress() {
    try {
        const savedCompleted = localStorage.getItem('misinfo_completed_units');
        const savedScores = localStorage.getItem('misinfo_quiz_scores');
        const savedActive = localStorage.getItem('misinfo_active_unit');
        const savedName = localStorage.getItem('misinfo_student_name');
        if (savedCompleted) appState.completedUnits = new Set(JSON.parse(savedCompleted));
        if (savedScores) appState.quizScores = JSON.parse(savedScores);
        if (savedActive) appState.activeUnitId = parseInt(savedActive, 10) || 1;
        if (savedName) appState.studentName = savedName;
    } catch (err) {
        console.warn('Could not load saved progress:', err);
    }
}

// Save progress to localStorage
function saveProgress() {
    try {
        localStorage.setItem('misinfo_completed_units', JSON.stringify([...appState.completedUnits]));
        localStorage.setItem('misinfo_quiz_scores', JSON.stringify(appState.quizScores));
        localStorage.setItem('misinfo_active_unit', appState.activeUnitId.toString());
        localStorage.setItem('misinfo_student_name', appState.studentName);
    } catch (err) {
        console.warn('Could not save progress:', err);
    }
}

// Wipe all saved data
function resetProgress() {
    if (!confirm('Reset all progress, scores, and your certificate name? This cannot be undone.')) return;
    try {
        ['misinfo_completed_units', 'misinfo_quiz_scores', 'misinfo_active_unit', 'misinfo_student_name']
            .forEach(key => localStorage.removeItem(key));
    } catch (err) {
        console.warn('Could not clear saved progress:', err);
    }
    appState.completedUnits = new Set();
    appState.quizScores = {};
    appState.activeUnitId = 1;
    appState.studentName = '';
    renderHomeView();
}

// Verify that every unit is completed with a passing score
function isCourseFullyPassed() {
    return courseUnits.every(unit => {
        const score = appState.quizScores[unit.id];
        return appState.completedUnits.has(unit.id) && score !== undefined && score >= PASSING_GRADE;
    });
}

// 4. Header progress bar, switching pages, and home dashboard
// Update the header progress bar or replace it with a certificate link if course is completed
function updateGlobalHeader() {
    const totalUnits = courseUnits.length;
    const passedCount = courseUnits.filter(unit =>
        appState.completedUnits.has(unit.id) && appState.quizScores[unit.id] >= PASSING_GRADE
    ).length;
    const progressPercent = Math.round((passedCount / totalUnits) * 100);
    if (isCourseFullyPassed()) {
        elements.progressContainer.innerHTML = `
            <button id="view-cert-header-btn" class="cert-header-link" type="button">
                🎓 View Certificate of Achievement
            </button>
        `;
        document.getElementById('view-cert-header-btn').addEventListener('click', renderCertificateView);
    } else {
        elements.progressContainer.innerHTML = `
            <span>Overall Progress:</span>
            <div class="progress-bar-bg">
                <div id="global-progress" class="progress-bar-fill" style="width: ${progressPercent}%"></div>
            </div>
            <span id="progress-text">${progressPercent}%</span>
        `;
    }
}

// Show one page and hide the others, swap title and home button
function switchView(targetViewId) {
    elements.views.forEach(view => {
        view.classList.toggle('hidden', view.id !== targetViewId);
    });
    elements.appContainer.classList.toggle('hidden', targetViewId === 'view-certificate');
    if (targetViewId === 'view-home') {
        elements.headerTitle.classList.remove('hidden');
        elements.btnHomeNav.classList.add('hidden');
    } else {
        elements.headerTitle.classList.add('hidden');
        elements.btnHomeNav.classList.remove('hidden');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show the main unit hub with current unit highlighted, progress, and locked/unlocked units
function renderHomeView() {
    const currentUnit = courseUnits.find(u => u.id === appState.activeUnitId) || courseUnits[0];
    elements.currentUnitTitle.textContent = `Unit ${currentUnit.id}: ${currentUnit.title}`;
    const isCurrentPassed = appState.quizScores[currentUnit.id] >= PASSING_GRADE;
    elements.currentStatusBadge.textContent = isCurrentPassed ? "Passed" : "In Progress";
    elements.currentStatusBadge.className = isCurrentPassed ? "badge badge-completed" : "badge badge-active";
    const passedCount = courseUnits.filter(u => appState.quizScores[u.id] >= PASSING_GRADE).length;
    elements.progressLine.textContent = `${passedCount} of ${courseUnits.length} complete`;
    elements.unitsGrid.innerHTML = '';
    courseUnits.forEach(unit => {
        const score = appState.quizScores[unit.id];
        const isPassed = score !== undefined && score >= PASSING_GRADE;
        // A unit is unlocked if it's first or the previous unit was passed
        const isUnlocked = unit.id === 1 || (appState.quizScores[unit.id - 1] >= PASSING_GRADE);
        const card = document.createElement('div');
        card.className = `unit-card ${!isUnlocked ? 'locked' : ''} ${isPassed ? 'passed' : ''} ${unit.id === currentUnit.id && !isPassed ? 'current' : ''}`;
        let statusBadgeHTML = '<span class="badge badge-locked">🔒 Locked</span>';
        if (isPassed) {
            statusBadgeHTML = `<span class="badge badge-completed">✓ Passed (${score}%)</span>`;
        } else if (isUnlocked) {
            statusBadgeHTML = `<span class="badge badge-active">${score !== undefined ? `Best: ${score}%` : 'Available'}</span>`;
        }
        card.innerHTML = `
            <div>
                <div class="unit-card-header">
                    <span class="unit-number">Unit ${unit.id}</span>
                    ${statusBadgeHTML}
                </div>
                <h4 class="unit-card-title">${unit.title}</h4>
            </div>
            <button class="btn-secondary select-unit-btn" type="button" ${!isUnlocked ? 'disabled' : ''}>
                ${isPassed ? 'Review' : 'Start'} →
            </button>
        `;
        if (isUnlocked) {
            card.querySelector('.select-unit-btn').addEventListener('click', () => startUnit(unit.id));
        }
        elements.unitsGrid.appendChild(card);
    });
    updateGlobalHeader();
    switchView('view-home');
}

// 5. Lessons and quizzes
// Show the "lesson" page for the unit and set up the quiz button
function startUnit(unitId) {
    appState.activeUnitId = unitId;
    saveProgress();
    const unit = courseUnits.find(u => u.id === unitId);
    elements.learningUnitPill.textContent = `Unit ${unit.id} of ${courseUnits.length}`;
    elements.learningTitle.textContent = unit.title;
    elements.learningContent.innerHTML = unit.content;
    switchView('view-learning');
}

// Start the quiz for the current unit
function startQuiz() {
    const unit = courseUnits.find(u => u.id === appState.activeUnitId);
    elements.quizUnitPill.textContent = `Quiz — Unit ${unit.id}`;
    renderQuiz();
    switchView('view-quiz');
}

// Load the quiz questions
function renderQuiz() {
    const unit = courseUnits.find(u => u.id === appState.activeUnitId);
    appState.currentQuizScore = 0;
    appState.quizSubmitted = false;
    appState.quizAnswers = unit.quiz.map(q => (q.type === 'flags' ? [] : null));
    elements.quizList.innerHTML = '';
    unit.quiz.forEach((q, index) => {
        elements.quizList.appendChild(buildQuestion(q, index, unit.quiz.length));
    });
    elements.btnQuizSubmit.classList.remove('hidden');
    elements.btnQuizResults.classList.add('hidden');
    updateQuizStatus();
}

// Build a question card with a number, optional scenario, question text, answers, and hidden feedback
function buildQuestion(q, index, total) {
    const card = document.createElement('div');
    card.className = 'quiz-container';
    card.id = `quiz-q-${index}`;
    const number = document.createElement('div');
    number.className = 'quiz-progress-text';
    number.textContent = `Question ${index + 1} of ${total}`;
    card.appendChild(number);
    if (q.scenario) {
        const scenario = document.createElement('div');
        scenario.className = 'quiz-scenario';
        scenario.innerHTML = q.scenario;
        card.appendChild(scenario);
    }
    const text = document.createElement('p');
    text.className = 'question-text';
    text.textContent = q.question;
    card.appendChild(text);
    const answers = document.createElement('div');
    if (q.type === 'flags') {
        buildFlags(q, index, answers);
    } else {
        buildChoice(q, index, answers);
    }
    card.appendChild(answers);
    const feedback = document.createElement('div');
    feedback.className = 'quiz-feedback hidden';
    card.appendChild(feedback);
    return card;
}

// Record the answer picked (choice or imagechoice) and highlight it
function selectOne(index, choice, buttons) {
    if (appState.quizSubmitted) return;
    appState.quizAnswers[index] = choice;
    buttons.forEach((btn, i) => {
        btn.classList.toggle('selected', i === choice);
        btn.setAttribute('aria-pressed', i === choice);
    });
    updateQuizStatus();
}

// Build the "Source: ..." line shown under a question
function makeCredit(text) {
    const credit = document.createElement('p');
    credit.className = 'quiz-credit';
    credit.textContent = `Source: ${text}`;
    return credit;
}

// Build a single-answer question (choice or imagechoice)
function buildChoice(q, index, container) {
    const withPictures = q.type === 'imagechoice';
    const group = document.createElement('div');
    group.className = withPictures ? 'quiz-options image-options' : 'quiz-options';
    const buttons = [];
    q.options.forEach((option, optionIndex) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = withPictures ? 'option-btn image-option' : 'option-btn';
        btn.setAttribute('aria-pressed', 'false');
        if (withPictures) {
            const img = document.createElement('img');
            img.src = option.img;
            img.alt = option.alt;
            const label = document.createElement('span');
            label.className = 'image-option-label';
            label.textContent = option.label;
            btn.appendChild(img);
            btn.appendChild(label);
        } else {
            btn.textContent = option;
        }
        btn.addEventListener('click', () => selectOne(index, optionIndex, buttons));
        buttons.push(btn);
        group.appendChild(btn);
    });
    container.appendChild(group);
    if (q.credit) container.appendChild(makeCredit(q.credit));
}

// Build a red-flag question (select all that apply)
function buildFlags(q, index, container) {
    const group = document.createElement('div');
    group.className = 'quiz-options flag-list';
    q.items.forEach((itemText, itemIndex) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'flag-item';
        btn.textContent = itemText;
        btn.setAttribute('aria-pressed', 'false');
        btn.addEventListener('click', () => {
            if (appState.quizSubmitted) return;
            const picked = appState.quizAnswers[index];
            if (picked.includes(itemIndex)) {
                picked.splice(picked.indexOf(itemIndex), 1);
            } else {
                picked.push(itemIndex);
            }
            btn.classList.toggle('picked', picked.includes(itemIndex));
            btn.setAttribute('aria-pressed', picked.includes(itemIndex));
            updateQuizStatus();
        });
        group.appendChild(btn);
    });
    container.appendChild(group);
}

// Determine if a question has been answered
function isAnswered(q, answer) {
    return q.type === 'flags' ? answer.length > 0 : answer !== null;
}

// Show how many questions are answered, and only after all done enable the submit button
function updateQuizStatus() {
    const unit = courseUnits.find(u => u.id === appState.activeUnitId);
    const total = unit.quiz.length;
    if (appState.quizSubmitted) {
        elements.quizStatus.textContent = `You got ${appState.currentQuizScore} of ${total} correct.`;
        return;
    }
    const answered = unit.quiz.filter((q, i) => isAnswered(q, appState.quizAnswers[i])).length;
    elements.quizStatus.textContent = `Answered ${answered} of ${total}`;
    elements.btnQuizSubmit.disabled = answered < total;
}

// Mark a single answer question right or wrong, return true if correct
function gradeChoice(q, answer, card) {
    const buttons = card.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.disabled = true);
    if (answer === q.correctIndex) {
        buttons[answer].classList.add('selected-correct');
        return true;
    }
    buttons[answer].classList.add('selected-incorrect');
    buttons[q.correctIndex].classList.add('selected-correct');
    return false;
}

// For "flags" questions, only correct if every correct flag was picked and no others
function gradeFlags(q, picked, card) {
    let allCorrect = true;
    card.querySelectorAll('.flag-item').forEach((btn, itemIndex) => {
        btn.disabled = true;
        const isRedFlag = q.correct.includes(itemIndex);
        const wasPicked = picked.includes(itemIndex);
        if (isRedFlag && wasPicked) {
            btn.classList.add('flag-correct');
        } else if (!isRedFlag && wasPicked) {
            btn.classList.add('flag-wrong');
            allCorrect = false;
        } else if (isRedFlag && !wasPicked) {
            btn.classList.add('flag-missed');
            allCorrect = false;
        }
    });
    return allCorrect;
}

// Grade every question when quiz is submitted and show feedback
function submitQuiz() {
    if (appState.quizSubmitted) return;
    const unit = courseUnits.find(u => u.id === appState.activeUnitId);
    appState.quizSubmitted = true;
    appState.currentQuizScore = 0;
    unit.quiz.forEach((q, index) => {
        const card = document.getElementById(`quiz-q-${index}`);
        const answer = appState.quizAnswers[index];
        let isCorrect;
        if (q.type === 'flags') {
            isCorrect = gradeFlags(q, answer, card);
        } else {
            isCorrect = gradeChoice(q, answer, card);
        }
        if (isCorrect) appState.currentQuizScore++;
        const feedback = card.querySelector('.quiz-feedback');
        feedback.textContent = `${isCorrect ? '✓ Correct!' : '✗ Not quite.'} ${q.explanation}`;
        feedback.className = `quiz-feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    });
    elements.btnQuizSubmit.classList.add('hidden');
    elements.btnQuizResults.classList.remove('hidden');
    updateQuizStatus();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 6. Results and certificate
// Score quiz attempt, keep the best score, and set up results screen
function finishQuiz() {
    const unit = courseUnits.find(u => u.id === appState.activeUnitId);
    const finalPercent = Math.round((appState.currentQuizScore / unit.quiz.length) * 100);
    const isPassed = finalPercent >= PASSING_GRADE;
    elements.sessionScore.textContent = finalPercent;
    // Keep the best score so a worse retake never lowers progress
    const previousBest = appState.quizScores[unit.id];
    if (previousBest === undefined || finalPercent > previousBest) {
        appState.quizScores[unit.id] = finalPercent;
    }
    if (appState.quizScores[unit.id] >= PASSING_GRADE) {
        appState.completedUnits.add(unit.id);
    }
    saveProgress();
    if (isPassed) {
        const isLastUnit = unit.id === courseUnits.length;
        elements.resultStatusIcon.textContent = "🎉";
        elements.resultHeadline.textContent = `${getScoreTitle(finalPercent)} Unit ${unit.id} Passed!`;
        elements.resultMessage.textContent = `Great job! You scored ${finalPercent}%, meeting the ${PASSING_GRADE}% passing requirement.`;
        // onclick (not addEventListener) so result replaces the previous button action
        if (!isLastUnit) {
            elements.btnNext.textContent = "Advance to Next Unit →";
            elements.btnNext.onclick = () => startUnit(unit.id + 1);
        } else if (isCourseFullyPassed()) {
            elements.btnNext.textContent = "View My Certificate 🎓";
            elements.btnNext.onclick = () => renderCertificateView();
        } else {
            elements.btnNext.textContent = "Back to Dashboard →";
            elements.btnNext.onclick = () => renderHomeView();
        }
    } else {
        elements.resultStatusIcon.textContent = "⚠️";
        elements.resultHeadline.textContent = `${getScoreTitle(finalPercent)} Passing Score Not Met`;
        elements.resultMessage.textContent = `You scored ${finalPercent}%. A score of ${PASSING_GRADE}% or higher is required to continue to the next unit. Please review the lesson and try again.`;
        elements.btnNext.textContent = "Retake Quiz 🔄";
        elements.btnNext.onclick = () => startQuiz();
    }
    updateGlobalHeader();
    switchView('view-results');
}

// Fill in and show the certificate page
function renderCertificateView() {
    elements.certSummaryList.innerHTML = '';
    let totalScoreSum = 0;
    courseUnits.forEach(unit => {
        const score = appState.quizScores[unit.id] || 0;
        totalScoreSum += score;
        const item = document.createElement('div');
        item.className = 'cert-summary-item';
        item.innerHTML = `
            <span>Unit ${unit.id}: ${unit.title}</span>
            <strong>${score}%</strong>
        `;
        elements.certSummaryList.appendChild(item);
    });
    const averageScore = Math.round(totalScoreSum / courseUnits.length);
    elements.certOverallAvg.textContent = `${averageScore}%`;
    elements.certNameInput.value = appState.studentName;
    elements.certRecipient.textContent = appState.studentName || 'Expert Misinformation Analyst';
    switchView('view-certificate');
}

// 7. Buttons
function setupEventListeners() {
    elements.btnHomeNav.addEventListener('click', () => renderHomeView());
    elements.btnStart.addEventListener('click', () => startUnit(appState.activeUnitId));
    elements.btnBackToHome.addEventListener('click', () => renderHomeView());
    elements.btnToQuiz.addEventListener('click', () => startQuiz());
    elements.btnQuizSubmit.addEventListener('click', () => submitQuiz());
    elements.btnQuizResults.addEventListener('click', () => finishQuiz());
    elements.btnRepeat.addEventListener('click', () => startUnit(appState.activeUnitId));
    elements.btnReset.addEventListener('click', () => resetProgress());
    elements.btnPrintCert.addEventListener('click', () => window.print());
    elements.btnCertBackHome.addEventListener('click', () => renderHomeView());
    elements.certNameInput.addEventListener('input', () => {
        appState.studentName = elements.certNameInput.value.trim();
        elements.certRecipient.textContent = appState.studentName || 'Expert Misinformation Analyst';
        saveProgress();
    });
}

// Run the initializer once the DOM is ready
document.addEventListener('DOMContentLoaded', initApp);