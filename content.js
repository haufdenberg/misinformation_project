/* ==========================================================================
   Fact or Fiction: COURSE CONTENT
   All lessons and quizzes live here.
   ========================================================================== */

// Course data
const TRUE_FALSE = ["True", "False"];

const courseUnits = [
    // ------------------------------------------------------------------ Unit 1
    {
        id: 1,
        title: "What Is Misinformation?",
        content: `
            <p>With our lives entrenched in social media, misinformation is a situation that is increasingly occurring in our lives and can have devastating effects on those who interact with it.</p>
            <p>According to the American Psychological Association's <a href="https://www.apa.org/topics/journalism-facts/misinformation-disinformation" target="_blank" rel="noopener">Misinformation and disinformation page</a>, <strong>misinformation</strong> is false or inaccurate information. In other words, it is getting the facts wrong.</p>
            <div class="callout-box">
                <h4>Two terms to know</h4>
                <ul>
                    <li><strong>Misinformation:</strong> false or inaccurate information, often shared by someone who honestly believes it (for example, re-sharing a storm warning that is years out of date).</li>
                    <li><strong>Disinformation:</strong> false information that is spread <em>on purpose</em> to mislead people.</li>
                </ul>
            </div>
            <p>The difference between the two is <span class="term" tabindex="0" data-tip="What the person sharing the information is trying to do: help, honestly mistaken, or deliberately mislead.">intent</span>. A person who spreads misinformation may mean well, while a person who spreads disinformation does not.</p>
            <p>APA notes that false information has harmed public health, efforts to address climate change, and democratic stability. That is why learning to spot it matters.</p>
            <h4>Sources</h4>
            <ul class="sources">
                <li><a href="https://www.apa.org/topics/journalism-facts/misinformation-disinformation" target="_blank" rel="noopener">American Psychological Association: Misinformation and disinformation</a></li>
            </ul>
        `,
        quiz: [
            {
                question: "According to the American Psychological Association, what is misinformation?",
                options: [
                    "False or inaccurate information",
                    "Information that is always shared on purpose to cause harm",
                    "Any news story you disagree with",
                    "Information that is true but boring"
                ],
                correctIndex: 0,
                explanation: "APA defines misinformation as false or inaccurate information: getting the facts wrong."
            },
            {
                scenario: "<p>Your aunt re-shares a storm warning from 2019, believing it is happening today. She has no idea it is outdated.</p>",
                question: "Which term best describes her post?",
                options: ["Misinformation", "Disinformation", "Satire", "A fact-check"],
                correctIndex: 0,
                explanation: "The information is out of date, but she shared it without any intent to deceive. That is misinformation."
            },
            {
                scenario: "<p>A group invents a fake quote from a candidate and pushes it out through hundreds of fake accounts.</p>",
                question: "Which term best describes this campaign?",
                options: ["Misinformation", "Satire", "A fact-check", "Disinformation"],
                correctIndex: 3,
                explanation: "The quote was made up on purpose to mislead people. Deliberate deception is disinformation."
            },
            {
                question: "True or False: The main difference between misinformation and disinformation is intent.",
                options: TRUE_FALSE,
                correctIndex: 0,
                explanation: "True. Disinformation is spread on purpose to mislead, while misinformation is often an honest mistake."
            },
            {
                question: "Which of these has APA linked to harm caused by false information?",
                options: ["Public health", "Fashion trends", "Sports scores", "Cooking times"],
                correctIndex: 0,
                explanation: "APA notes that false information has harmed public health, efforts to address climate change, and democratic stability."
            }
        ]
    },

    // ------------------------------------------------------------------ Unit 2
    {
        id: 2,
        title: "Clickbait",
        content: `
            <p>Have you ever clicked a headline that promised something amazing, only to land on a page that did not deliver?</p>
            <p><strong>Clickbait</strong> is a sensational headline designed to get you to click a link to an article, image, or video. Instead of giving you objective facts, it appeals to your <em>emotions and curiosity</em>, as explained by <a href="https://support.computerreach.org/what-is-clickbait" target="_blank" rel="noopener">Computer Reach</a>.</p>
            <p>Why do it? The website hosting the link earns advertising revenue from your click, and the content behind the headline is often of doubtful quality and accuracy. Sensational headlines are not new, since they date back to the 19th century, but they have spread widely online.</p>
            <div class="callout-box">
                <h4>Common clickbait patterns</h4>
                <ul>
                    <li>Hiding the key detail, such as a headline saying a public figure is threatening a lawsuit without saying who, so you have to click to find out.</li>
                    <li>Flattering quizzes that promise you are a genius if you score well.</li>
                    <li>Questions that shame a celebrity's appearance.</li>
                    <li>Dramatic promises like "The Secret They Don't Want You to Know!"</li>
                    <li>Headlines about a shocking celebrity death that never name the person.</li>
                </ul>
            </div>
            <p>The <a href="https://libguides.com.edu/c.php?g=649902&amp;p=4556543" target="_blank" rel="noopener">COM Library research guide</a> adds that clickbait often leads to a sensationalized story that misrepresents what the headline promised, and can lead to <span class="term" tabindex="0" data-tip="Newspapers or TV shows that are sensational, exaggerated, and often unsubstantiated, usually produced to make money.">tabloid</span> stories.</p>
            <figure class="lesson-figure">
                <img src="images/lesson-clickbait-post.svg" alt="A web article from WellnessWire NOW titled 'SHOCKING!!! Doctors are FURIOUS about this one weird trick that melts fat overnight!' with a stock photo, a teaser reading 'What they aren't telling you...', a link reading 'Click here to see the trick', and a byline reading 'Posted by Admin'.">
                <figcaption>A made-up example. Notice the ALL CAPS, the unnamed "doctors," the miracle promise, and the teaser that hides the details.
                    <span class="credit">Image: created by the author. The outlet and the claim are fictional.</span></figcaption>
            </figure>
            <p>When a headline makes you feel something strong, pause and read the full story before you share it.</p>
            <h4>Sources</h4>
            <ul class="sources">
                <li><a href="https://support.computerreach.org/what-is-clickbait" target="_blank" rel="noopener">Computer Reach: What is clickbait?</a></li>
                <li><a href="https://larrylambert269.medium.com/10-typical-examples-of-click-bait-on-the-internet-3531ccd0eb0a" target="_blank" rel="noopener">Larry Lambert on Medium: 10 Typical Examples of Click Bait on the Internet</a></li>
                <li><a href="https://libguides.com.edu/c.php?g=649902&amp;p=4556543" target="_blank" rel="noopener">COM Library research guide: fake news examples</a></li>
            </ul>
        `,
        quiz: [
            {
                question: "What is clickbait?",
                options: [
                    "A sensational headline meant to get you to click",
                    "A website that checks facts",
                    "A tool that blocks online ads",
                    "A headline written by a scientist"
                ],
                correctIndex: 0,
                explanation: "Clickbait is a sensational headline designed to get you to click a link to an article, image, or video."
            },
            {
                question: "Who usually earns money when you click on clickbait?",
                options: [
                    "The website hosting the link, through advertising",
                    "The person who fact-checks the story",
                    "The government",
                    "No one"
                ],
                correctIndex: 0,
                explanation: "The site hosting the link earns advertising revenue from your click, which is why headlines are written to attract clicks."
            },
            {
                scenario: "<p>A headline reads: \"A famous actor is threatening to sue. You will never guess who!\"</p>",
                question: "Which clickbait technique is this?",
                options: [
                    "Hiding the key detail so you have to click",
                    "Naming a trusted source",
                    "Linking to the original study",
                    "Printing the date"
                ],
                correctIndex: 0,
                explanation: "The headline leaves out the most important fact (who), so the only way to find out is to click."
            },
            {
                type: "flags",
                scenario: "<p><strong>Headline:</strong> \"SHOCKING!!! Doctors are FURIOUS about this one weird trick that melts fat overnight! Click to see what they aren't telling you...\"</p>",
                question: "Select EVERY clickbait sign in this headline.",
                items: [
                    "ALL CAPS and stacked exclamation marks",
                    "'Doctors are furious' with no named doctor",
                    "A link to the full published clinical trial",
                    "A miracle result promised overnight",
                    "Teaser language that hides the key details"
                ],
                correct: [0, 1, 3, 4],
                explanation: "Shouting, unnamed experts, miracle claims, and teasers are classic clickbait. A link to the original study would be a good sign."
            },
            {
                question: "True or False: Clickbait is a brand-new problem that only started with social media.",
                options: TRUE_FALSE,
                correctIndex: 1,
                explanation: "False. Sensational headlines date back to the 19th century, although they have spread much more widely online."
            }
        ]
    },

    // ------------------------------------------------------------------ Unit 3
    {
        id: 3,
        title: "Fake Headlines",
        content: `
            <p>A headline is the first thing you see, and sometimes the only thing you read. A <strong>fake headline</strong> says something that is false, or promises far more than the story actually delivers.</p>
            <div class="callout-box">
                <h4>Kinds of fake headlines</h4>
                <ul>
                    <li><strong>Made-up stories:</strong> the headline and the article are invented, sometimes on <span class="term" tabindex="0" data-tip="A fake news site designed to look like a real, credible outlet.">imposter sites</span> built to look like real news outlets. One example in the library guide below is a site at abcnews.com.co.</li>
                    <li><strong>Exaggerated headlines:</strong> the headline claims more than the article supports. FactCheck.org advises reading beyond the headline because the full text can reveal that the headline exaggerates.</li>
                    <li><strong>Satire mistaken for news:</strong> some sites, like The Onion, write jokes in a news style. Shared without context, they can look real.</li>
                    <li><strong>Made-up endorsements:</strong> a false story claims a famous person supports something.</li>
                </ul>
            </div>
            <h4>How to check a headline</h4>
            <ul>
                <li>Read the full story, not just the headline.</li>
                <li>Check the web address. <a href="https://www.mindtools.com/a0g6bjj/how-to-spot-real-and-fake-news/" target="_blank" rel="noopener">MindTools</a> notes that misspelled company names or unusual endings can signal a suspect site.</li>
                <li>See whether reputable outlets are reporting the same story.</li>
            </ul>
            <h4>Sources</h4>
            <ul class="sources">
                <li><a href="https://www.factcheck.org/2016/11/how-to-spot-fake-news/" target="_blank" rel="noopener">FactCheck.org: How to Spot Fake News</a></li>
                <li><a href="https://www.mindtools.com/a0g6bjj/how-to-spot-real-and-fake-news/" target="_blank" rel="noopener">MindTools: How to Spot Real and Fake News</a></li>
                <li><a href="https://library-nd.libguides.com/fakenews/examples" target="_blank" rel="noopener">ND library guide: Fake news examples</a></li>
            </ul>
        `,
        quiz: [
            {
                question: "Which headline is more trustworthy?",
                options: [
                    "SHOCKING: What the council is HIDING about your water!!!",
                    "City council approves $2 million pipe repair plan after public hearing"
                ],
                correctIndex: 1,
                explanation: "The second headline is specific and calm and says who did what. The first shouts and hides the facts."
            },
            {
                scenario: "<p>A headline says \"Scientists confirm...\" but the article never names a scientist or a study.</p>",
                question: "What does this suggest?",
                options: [
                    "The headline may be exaggerated or fake",
                    "It must be true because it mentions scientists",
                    "It is a fact-check",
                    "It is a government report"
                ],
                correctIndex: 0,
                explanation: "When the story does not support the headline, the headline is exaggerating. Read beyond the headline."
            },
            {
                scenario: "<p>You see a story on a site whose address is abcnews.com.co.</p>",
                question: "What should you check first?",
                options: [
                    "The web address, because look-alike sites imitate real outlets",
                    "How many shares it has",
                    "The font used on the page",
                    "Nothing. A .co ending is the same as .com"
                ],
                correctIndex: 0,
                explanation: "Imposter sites copy the names of real outlets. Misspelled names or unusual endings are a warning sign."
            },
            {
                question: "True or False: If a website looks professional, its headlines must be true.",
                options: TRUE_FALSE,
                correctIndex: 1,
                explanation: "False. Imposter sites are built to look like credible outlets, so design alone proves nothing."
            },
            {
                scenario: "<p>A headline says a city is clearing snow with flamethrowers. It appears on a website known for jokes written in a news style.</p>",
                question: "What is it most likely to be?",
                options: ["Satire", "A government alert", "A scientific study", "A fact-check"],
                correctIndex: 0,
                explanation: "Satire mocks the news on purpose. It can look real if you see it without its context."
            }
        ]
    },

    // ------------------------------------------------------------------ Unit 4
    {
        id: 4,
        title: "Manipulated Images",
        content: `
            <p>Have you ever heard the phrase "a picture is worth a thousand words"? In the case of manipulated images, those words can be false, and an edited picture can feel more convincing than a false sentence.</p>
            <p>Even before social media, photographers were already staging, retouching, and combining pictures. Faked photographs have a long history, and BBC Culture collects examples in <a href="https://www.bbc.com/culture/article/20260216-10-early-photographic-fakes-that-trick-the-eye" target="_blank" rel="noopener">10 early photographic fakes that trick the eye</a>. A well-known example is a photo of Theodore Roosevelt riding a moose, which a library guide lists as a doctored photo and which <a href="https://www.wired.com/story/teddy-roosevelt-on-a-moose-fake-news-or-fake-fake-news/" target="_blank" rel="noopener">Wired</a> has examined.</p>
            <div class="callout-box">
                <h4>Three ways an image can mislead</h4>
                <ul>
                    <li><strong>It was edited:</strong> parts were added, removed, or changed.</li>
                    <li><strong>It was used in the wrong context:</strong> the photo is real, but it is from a different place or from years earlier. MindTools warns about real images "used in the wrong context."</li>
                    <li><strong>It was made or changed by AI:</strong> a <span class="term" tabindex="0" data-tip="Video, audio, or images made or altered by AI to show something that never happened.">deepfake</span> can copy a face or a voice.</li>
                </ul>
            </div>
            <p>HyperVerge's <a href="https://hyperverge.co/blog/examples-of-deepfakes/" target="_blank" rel="noopener">examples of deepfakes</a> include a Hong Kong finance worker who was tricked into wiring about $25 million after a deepfake video call (2024) and a fake Tom Hanks dental ad (2023). The Guardian also explains <a href="https://www.theguardian.com/technology/2020/jan/13/what-are-deepfakes-and-how-can-you-spot-them" target="_blank" rel="noopener">what deepfakes are and how to spot them</a>.</p>
            <h4>What you can do</h4>
            <p>MindTools advises you to look for signs of editing and to use a reverse image search to find where a picture really came from. Upload the picture to a tool like Google Images or TinEye and see where else, and how long ago, it appeared.</p>
            <h4>Sources</h4>
            <ul class="sources">
                <li><a href="https://www.bbc.com/culture/article/20260216-10-early-photographic-fakes-that-trick-the-eye" target="_blank" rel="noopener">BBC Culture: 10 early photographic fakes that trick the eye</a></li>
                <li><a href="https://www.wired.com/story/teddy-roosevelt-on-a-moose-fake-news-or-fake-fake-news/" target="_blank" rel="noopener">Wired: Teddy Roosevelt on a moose: fake news or fake fake news?</a></li>
                <li><a href="https://www.theguardian.com/technology/2020/jan/13/what-are-deepfakes-and-how-can-you-spot-them" target="_blank" rel="noopener">The Guardian (Jan. 13, 2020): What are deepfakes and how can you spot them?</a></li>
                <li><a href="https://hyperverge.co/blog/examples-of-deepfakes/" target="_blank" rel="noopener">HyperVerge: Examples of deepfakes</a></li>
                <li><a href="https://www.mindtools.com/a0g6bjj/how-to-spot-real-and-fake-news/" target="_blank" rel="noopener">MindTools: How to Spot Real and Fake News</a></li>
                <li><a href="https://library-nd.libguides.com/fakenews/examples" target="_blank" rel="noopener">ND library guide: Fake news examples</a></li>
            </ul>
        `,
        quiz: [
            {
                question: "Which of these can make an image misleading?",
                options: [
                    "It was edited",
                    "A real photo is shown with the wrong caption or date",
                    "It was made or changed by AI",
                    "All of the above"
                ],
                correctIndex: 3,
                explanation: "Images can mislead because they were edited, because they are real but used out of context, or because AI made or changed them."
            },
            {
                scenario: "<p>A photo of flooding is shared as \"happening today.\" A reverse image search shows it appeared in news articles six years ago.</p>",
                question: "What is going on?",
                options: [
                    "A real photo is being used out of context",
                    "The photo is brand new",
                    "The photo is a deepfake video",
                    "The date does not matter"
                ],
                correctIndex: 0,
                explanation: "A much earlier first appearance shows an old photo is being reused with a false caption."
            },
            {
                type: "flags",
                scenario: "<p><strong>Post:</strong> A photo captioned \"Protest happening RIGHT NOW downtown (July).\"</p>",
                question: "Select EVERY red flag about this post.",
                items: [
                    "The earliest web results for the photo are from 2019",
                    "Everyone in the photo wears heavy winter coats, but the caption says July",
                    "It was posted at 2:14 PM",
                    "There is no photographer credit or location",
                    "It was posted by an account that joined this week"
                ],
                correct: [0, 1, 3, 4],
                explanation: "An old first appearance, weather that does not match, no credit, and a brand-new account are red flags. The time of day proves nothing."
            },
            {
                question: "True or False: Photo manipulation only became possible with AI.",
                options: TRUE_FALSE,
                correctIndex: 1,
                explanation: "False. Photographers were staging and retouching pictures long before digital tools or social media."
            },
            {
                question: "What is a good first step with a dramatic photo that claims to show breaking news?",
                options: [
                    "Run a reverse image search and see whether reputable outlets report it",
                    "Share it quickly so others see it",
                    "Trust it because it has many likes",
                    "Assume it is fake because it is dramatic"
                ],
                correctIndex: 0,
                explanation: "A reverse image search shows where the picture came from, and reputable coverage helps confirm the event."
            }
        ]
    },

    // ------------------------------------------------------------------ Unit 5
    {
        id: 5,
        title: "Unreliable Sources",
        content: `
            <p>Not every website that looks like news is a good place to learn the facts. Unreliable sources:</p>
            <ul>
                <li>Do not present information in a fair and unbiased manner</li>
                <li>Present one side of an issue or have an agenda</li>
            </ul>
            <p>A website that is trying to sell a product or promote a cause may show only the facts that help it and leave out the rest.</p>
            <div class="callout-box">
                <h4>Clues to check</h4>
                <ul>
                    <li><strong>Purpose:</strong> look at the site's mission and contact information. The <a href="https://library.csi.cuny.edu/misinformation/spotfakenews" target="_blank" rel="noopener">CUNY CSI library guide</a> suggests checking the website's purpose.</li>
                    <li><strong>Web address:</strong> misspelled company names or unusual endings can signal a suspect site (MindTools).</li>
                    <li><strong>Look-alike pages:</strong> fake pages can imitate trusted organizations, so check the organization's own website.</li>
                    <li><strong>Who shared it:</strong> a friend who forwards a story may not have checked it either.</li>
                    <li><strong>Bias:</strong> no outlet is perfectly unbiased, so compare several.</li>
                </ul>
            </div>
            <h4>Sources</h4>
            <ul class="sources">
                <li><a href="https://library.csi.cuny.edu/misinformation/spotfakenews" target="_blank" rel="noopener">CUNY CSI Library: Spot fake news</a></li>
                <li><a href="https://www.factcheck.org/2016/11/how-to-spot-fake-news/" target="_blank" rel="noopener">FactCheck.org: How to Spot Fake News</a></li>
                <li><a href="https://www.mindtools.com/a0g6bjj/how-to-spot-real-and-fake-news/" target="_blank" rel="noopener">MindTools: How to Spot Real and Fake News</a></li>
                <li><a href="https://library-nd.libguides.com/fakenews/examples" target="_blank" rel="noopener">ND library guide: Fake news examples</a></li>
            </ul>
        `,
        quiz: [
            {
                question: "Which of these is a sign of an unreliable source?",
                options: [
                    "It presents only one side and has an agenda",
                    "It presents information fairly",
                    "It cites government publications",
                    "It names its authors"
                ],
                correctIndex: 0,
                explanation: "Unreliable sources do not present information in a fair and unbiased manner, and they often push one side."
            },
            {
                scenario: "<p>A website that sells dietary supplements publishes an article saying its own supplement is the answer to everything.</p>",
                question: "What should you keep in mind?",
                options: [
                    "The site may show only the facts that help it sell the product",
                    "It is reliable because it explains the product so well",
                    "A company would never leave out facts",
                    "Product sites are always unbiased"
                ],
                correctIndex: 0,
                explanation: "A site trying to sell something has an agenda and may leave out facts that hurt its cause."
            },
            {
                question: "Where can you learn about a website's purpose?",
                options: [
                    "Its About and Contact pages",
                    "The color scheme",
                    "The number of ads on the page",
                    "The length of the headline"
                ],
                correctIndex: 0,
                explanation: "Fact-checking guides suggest looking at a site's mission, About page, and contact information."
            },
            {
                question: "True or False: A story must be reliable if a friend shared it.",
                options: TRUE_FALSE,
                correctIndex: 1,
                explanation: "False. A friend who forwards a story may not have checked it either."
            },
            {
                type: "flags",
                scenario: "<p><strong>Website:</strong> \"Daily Vitality Report,\" which sells herbal supplements.</p>",
                question: "Select EVERY warning sign about this website.",
                items: [
                    "It presents only one side of the issue",
                    "It has no About page or contact information",
                    "Its web address imitates a well-known outlet and ends in .com.co",
                    "It cites government publications and links to them",
                    "Every article ends with a link to buy the sponsor's product"
                ],
                correct: [0, 1, 2, 4],
                explanation: "One-sided content, no contact information, an imitation address, and a sales push are warning signs. Citing real government publications is a good sign."
            }
        ]
    },

    // ------------------------------------------------------------------ Unit 6
    {
        id: 6,
        title: "Checking Authors",
        content: `
            <p>Behind every article is someone who wrote it. Checking the author is one of the quickest ways to decide whether to trust a story.</p>
            <p>Reliable information usually comes from:</p>
            <ul>
                <li>Professionals, academics, or journalists (experts)</li>
                <li>Sources affiliated with reputable organizations</li>
            </ul>
            <div class="callout-box">
                <h4>What to look for</h4>
                <ul>
                    <li><strong>Look up the byline.</strong> FactCheck.org says fake stories often use invented or unverifiable writers, or have no byline at all.</li>
                    <li><strong>Confirm the writer is real and credible</strong>, as the <a href="https://library.csi.cuny.edu/misinformation/spotfakenews" target="_blank" rel="noopener">CUNY CSI library guide</a> advises.</li>
                    <li><strong>Think about expertise.</strong> <a href="https://www.mindtools.com/a0g6bjj/how-to-spot-real-and-fake-news/" target="_blank" rel="noopener">MindTools</a> suggests considering the author's reputation, whether they know the topic, and whether they tend to exaggerate.</li>
                </ul>
            </div>
            <h4>Sources</h4>
            <ul class="sources">
                <li><a href="https://www.factcheck.org/2016/11/how-to-spot-fake-news/" target="_blank" rel="noopener">FactCheck.org: How to Spot Fake News</a></li>
                <li><a href="https://library.csi.cuny.edu/misinformation/spotfakenews" target="_blank" rel="noopener">CUNY CSI Library: Spot fake news</a></li>
                <li><a href="https://www.mindtools.com/a0g6bjj/how-to-spot-real-and-fake-news/" target="_blank" rel="noopener">MindTools: How to Spot Real and Fake News</a></li>
            </ul>
        `,
        quiz: [
            {
                question: "Who is the most reliable author for an article about a medical topic?",
                options: [
                    "A doctor or researcher at a reputable medical center",
                    "An anonymous account",
                    "Whoever has the most followers",
                    "A person paid to sell the treatment"
                ],
                correctIndex: 0,
                explanation: "Professionals, academics, and journalists with real expertise are more reliable than anonymous or interested authors."
            },
            {
                scenario: "<p>An article's byline says \"Admin\" and the site gives no way to contact the writer.</p>",
                question: "What is the best response?",
                options: [
                    "Be cautious and look for the same story from reliable sources",
                    "Trust it because the page looks professional",
                    "Share it and ask your friends",
                    "Assume the author is an expert"
                ],
                correctIndex: 0,
                explanation: "A missing or unverifiable author is a warning sign, so look for other sources before believing the story."
            },
            {
                question: "According to FactCheck.org, what do fake stories often use?",
                options: [
                    "Invented or unverifiable writers, or no byline at all",
                    "Real reporters with long careers",
                    "Links to scholarly journals",
                    "Named experts at universities"
                ],
                correctIndex: 0,
                explanation: "Fake stories often have invented or unverifiable writers, or no byline at all."
            },
            {
                question: "True or False: Anyone who writes a blog about a subject is an expert on it.",
                options: TRUE_FALSE,
                correctIndex: 1,
                explanation: "False. Check the author's reputation and expertise instead of assuming it."
            },
            {
                question: "Besides the author, what else suggests a source is reliable?",
                options: [
                    "It is affiliated with a reputable organization",
                    "The page is full of ads",
                    "It uses many exclamation marks",
                    "It was shared a lot"
                ],
                correctIndex: 0,
                explanation: "Sources affiliated with reputable organizations are more reliable than sources with no accountability."
            }
        ]
    },

    // ------------------------------------------------------------------ Unit 7
    {
        id: 7,
        title: "Checking Dates",
        content: `
            <p>A story that was true when it was written can still mislead you today. To be reliable, information must be current, especially in fields that change quickly, like science and technology.</p>
            <div class="callout-box">
                <h4>Why dates matter</h4>
                <ul>
                    <li>Old stories are sometimes recycled with a new headline to make them seem related to current events (FactCheck.org).</li>
                    <li>Real images can be "used in the wrong context," such as a photo from years earlier presented as new (<a href="https://www.mindtools.com/a0g6bjj/how-to-spot-real-and-fake-news/" target="_blank" rel="noopener">MindTools</a>).</li>
                    <li>Civic Nebraska's advice includes checking publication dates, since old stories presented as current can mislead.</li>
                </ul>
            </div>
            <p>Before you trust or share a story, find the date. Then ask yourself whether the information could have changed since then.</p>
            <h4>Sources</h4>
            <ul class="sources">
                <li><a href="https://www.mindtools.com/a0g6bjj/how-to-spot-real-and-fake-news/" target="_blank" rel="noopener">MindTools: How to Spot Real and Fake News</a></li>
                <li><a href="https://www.factcheck.org/2016/11/how-to-spot-fake-news/" target="_blank" rel="noopener">FactCheck.org: How to Spot Fake News</a></li>
                <li><a href="https://civicnebraska.org/20-ways-to-fight-disinformation/" target="_blank" rel="noopener">Civic Nebraska: 20 Ways to Fight Disinformation</a></li>
            </ul>
        `,
        quiz: [
            {
                question: "Why does the date of an article matter?",
                options: [
                    "Old information may be outdated, especially in science and technology",
                    "Dates make articles longer",
                    "Newer articles are always wrong",
                    "Dates are only decoration"
                ],
                correctIndex: 0,
                explanation: "Information must be current to be reliable, especially in fast-changing fields."
            },
            {
                scenario: "<p>A page about \"the newest smartphone\" shows a publication date of 2012.</p>",
                question: "What does this tell you?",
                options: [
                    "The information is probably out of date",
                    "It is the newest phone available",
                    "The page is more trustworthy because it is old",
                    "Dates cannot be trusted"
                ],
                correctIndex: 0,
                explanation: "Technology changes quickly, so an article from 2012 cannot describe what is new today."
            },
            {
                scenario: "<p>A story looks current, but a search finds the same story from years ago under a different headline.</p>",
                question: "What is probably happening?",
                options: [
                    "An old story is being recycled to look current",
                    "The story is brand new",
                    "The story has been fact-checked",
                    "The author is an expert"
                ],
                correctIndex: 0,
                explanation: "FactCheck.org warns that old stories are sometimes recycled with new headlines."
            },
            {
                question: "True or False: A news story that was accurate when written is always accurate years later.",
                options: TRUE_FALSE,
                correctIndex: 1,
                explanation: "False. In fields like science and technology, information can become outdated."
            },
            {
                question: "You see a shocking story. What should you look for early on?",
                options: [
                    "The publication date",
                    "How many likes it has",
                    "Only the headline",
                    "Whether it uses exclamation marks"
                ],
                correctIndex: 0,
                explanation: "Checking the publication date is a quick way to see whether the story is current."
            }
        ]
    },

    // ------------------------------------------------------------------ Unit 8
    {
        id: 8,
        title: "Fact-Checking",
        content: `
            <p>Reliable sources <strong>cite information</strong>. They include references to scholarly journals, credible news outlets, or government publications to support their claims.</p>
            <p><strong>Fact-checking</strong>, also known as <strong>debunking</strong>, is used after misinformation is shared. According to the American Psychological Association's page on <a href="https://www.apa.org/topics/journalism-facts/misinformation-interventions" target="_blank" rel="noopener">misinformation interventions</a>:</p>
            <ul>
                <li>A good correction gives a detailed explanation: it refutes the incorrect information and replaces it with facts.</li>
                <li>Fact-checking is time-consuming, may not fully reverse the effects of misinformation, fades over time, and may require repeated correction.</li>
            </ul>
            <p>That is why it helps to <strong>use multiple sources</strong> instead of checking just one. <a href="https://civicnebraska.org/20-ways-to-fight-disinformation/" target="_blank" rel="noopener">Civic Nebraska</a> calls comparing several reputable sources "reading horizontally."</p>
            <div class="callout-box">
                <h4>Fact-checking organizations</h4>
                <p>Fact-check using reliable fact-checking organizations like <a href="https://www.snopes.com/" target="_blank" rel="noopener">Snopes</a>, <a href="https://www.factcheck.org/" target="_blank" rel="noopener">FactCheck.org</a>, and <a href="https://www.politifact.com/" target="_blank" rel="noopener">PolitiFact</a>.</p>
            </div>
            <p>APA also describes <span class="term" tabindex="0" data-tip="Warning people about a false claim or a manipulation technique before they see it, so they are harder to fool.">prebunking</span>, which tries to stop people from being fooled in the first place rather than correcting them afterward.</p>
            <h4>Sources</h4>
            <ul class="sources">
                <li><a href="https://www.factcheck.org/2016/11/how-to-spot-fake-news/" target="_blank" rel="noopener">FactCheck.org: How to Spot Fake News</a></li>
                <li><a href="https://civicnebraska.org/20-ways-to-fight-disinformation/" target="_blank" rel="noopener">Civic Nebraska: 20 Ways to Fight Disinformation</a></li>
                <li><a href="https://library.csi.cuny.edu/misinformation/spotfakenews" target="_blank" rel="noopener">CUNY CSI Library: Spot fake news</a></li>
                <li><a href="https://www.apa.org/topics/journalism-facts/misinformation-interventions" target="_blank" rel="noopener">American Psychological Association: Misinformation interventions</a></li>
            </ul>
        `,
        quiz: [
            {
                question: "Fact-checking, also called debunking, is used when?",
                options: [
                    "After misinformation has been shared",
                    "Before anything is published",
                    "Only by governments",
                    "Never"
                ],
                correctIndex: 0,
                explanation: "Debunking responds to misinformation after it has already spread."
            },
            {
                question: "According to APA, what makes a correction work best?",
                options: [
                    "A thorough explanation of why the claim is wrong, plus accurate facts to replace it",
                    "Repeating the false claim as often as possible",
                    "A short insult",
                    "Deleting all comments"
                ],
                correctIndex: 0,
                explanation: "Debunking works best when it thoroughly explains why the false claim is wrong and supplies accurate facts to replace it."
            },
            {
                question: "True or False: A single fact-check permanently erases the effects of misinformation.",
                options: TRUE_FALSE,
                correctIndex: 1,
                explanation: "False. Fact-checking may not fully reverse the effects, fades over time, and may need repeating."
            },
            {
                question: "Which of these are reliable fact-checking organizations?",
                options: [
                    "Snopes, FactCheck.org, and PolitiFact",
                    "Anonymous forum threads",
                    "Sponsored ads",
                    "Chain messages from friends"
                ],
                correctIndex: 0,
                explanation: "Snopes, FactCheck.org, and PolitiFact are established fact-checking organizations."
            },
            {
                scenario: "<p>Only one website reports a surprising claim, and no other outlet mentions it.</p>",
                question: "What is the best next step?",
                options: [
                    "Check several other reputable sources before believing it",
                    "Share it right away",
                    "Trust the website because it is the only one",
                    "Ignore fact-checking sites"
                ],
                correctIndex: 0,
                explanation: "Do not rely on just one source. Compare the claim against several reputable ones."
            }
        ]
    },

    // ------------------------------------------------------------------ Unit 9
    {
        id: 9,
        title: "Social Media Misinformation",
        content: `
            <p>Social media makes it possible to share something in a second, often before we have stopped to think about whether it is true.</p>
            <h4>Why misinformation spreads</h4>
            <p>A <a href="https://insights.som.yale.edu/insights/how-social-media-rewards-misinformation" target="_blank" rel="noopener">Yale School of Management study</a> by Gizem Ceylan, Ian Anderson, and Wendy Wood found that social media reward systems encourage habitual sharing, which spreads misinformation.</p>
            <ul>
                <li>The most habitual Facebook users in the experiment (about the top 15%) were linked to 37% of the false headlines shared.</li>
                <li>These users shared true and false headlines at nearly the same rate, which suggests habit, not politics, drove their sharing.</li>
                <li>Platforms reward any engagement with likes, comments, and reshares, so users come to care more about attention than accuracy.</li>
                <li>When people were rewarded for sharing accurate headlines, they mostly shared true content, and they kept doing so after the reward was removed.</li>
            </ul>
            <div class="callout-box">
                <h4>Kinds of misleading posts</h4>
                <p>A <a href="https://library-nd.libguides.com/fakenews/examples" target="_blank" rel="noopener">library guide</a> lists several: satire, hoaxes, manipulated images, misleading context, biased reporting, conspiracy theories, imposter sites, and made-up endorsements.</p>
            </div>
            <h4>Before you share</h4>
            <p>MindTools suggests holding off on sharing a story that seems fake, partial, or malicious, even if you only want to ask others to check it. Remember that a friend who shared something may not have checked it either.</p>
            <h4>Sources</h4>
            <ul class="sources">
                <li><a href="https://insights.som.yale.edu/insights/how-social-media-rewards-misinformation" target="_blank" rel="noopener">Yale Insights: How social media rewards misinformation</a></li>
                <li><a href="https://library-nd.libguides.com/fakenews/examples" target="_blank" rel="noopener">ND library guide: Fake news examples</a></li>
                <li><a href="https://www.mindtools.com/a0g6bjj/how-to-spot-real-and-fake-news/" target="_blank" rel="noopener">MindTools: How to Spot Real and Fake News</a></li>
            </ul>
        `,
        quiz: [
            {
                type: "imagechoice",
                question: "Can you spot the fake? Which news story is not trustworthy?",
                options: [
                    { img: "images/fake-hyde-park.png", alt: "A post with the headline 'Absolutely shocking scenes from Hyde Park'", label: "Story A" },
                    { img: "images/real-notre-dame.png", alt: "A post about the Notre Dame fire in Paris from CNN", label: "Story B" }
                ],
                correctIndex: 0,
                credit: "1: https://www.snopes.com/fact-check/protesters-hyde-park-rubbish/, 2: https://www.facebook.com/cnn/posts/just-in-there-is-a-fire-at-the-notre-dame-cathedral-in-paris/10159395659831509/.",
                explanation: "Story B comes from a reputable news outlet (CNN) and has the blue verified checkmark next to its poster. Story A shows an unverified image with a sensational headline."
            },
            
            {
                question: "In the Yale study, what drove the most habitual users to share false headlines?",
                options: [
                    "Habit encouraged by platform rewards",
                    "Their political beliefs",
                    "Not having internet access",
                    "Being paid to share"
                ],
                correctIndex: 0,
                explanation: "These users shared true and false headlines at nearly the same rate, which suggests habit, not ideology, drove their sharing."
            },
            {
                question: "According to the study, what do social media platforms reward?",
                options: [
                    "Any engagement, like likes, comments, and reshares",
                    "Only accurate posts",
                    "Only long posts",
                    "Only posts with citations"
                ],
                correctIndex: 0,
                explanation: "Platforms reward any engagement, so users come to care more about attention than accuracy."
            },
            {
                scenario: "<p>A real photo from a 2015 protest is reshared with a caption claiming it shows a brand-new event.</p>",
                question: "Which kind of misleading content is this?",
                options: ["Misleading context", "Satire", "A fact-check", "A prebunk"],
                correctIndex: 0,
                explanation: "The photo is real, but it is being used in the wrong context. The library guide lists this as misleading context."
            },
            {
                question: "True or False: If a friend shares a story, you can assume they have already checked it.",
                options: TRUE_FALSE,
                correctIndex: 1,
                explanation: "False. A friend who forwards a story may not have checked it either."
            }
        ]
    },

    // ------------------------------------------------------------------ Unit 10
    {
        id: 10,
        title: "Can You Spot the Fake?",
        content: `
            <p>You have reached the final challenge! Before you start, here is the checklist you have built over the last nine units.</p>
            <div class="callout-box">
                <h4>Your misinformation checklist</h4>
                <ul>
                    <li><strong>Pause</strong> before sharing, especially when a post makes you feel something strong.</li>
                    <li><strong>Watch for clickbait</strong> and read beyond the headline.</li>
                    <li><strong>Check the source:</strong> its purpose, its web address, and whether it is fair.</li>
                    <li><strong>Check the author:</strong> are they real, and do they know the topic?</li>
                    <li><strong>Check the date:</strong> is the information current?</li>
                    <li><strong>Look closely at images,</strong> and use a reverse image search when something seems off.</li>
                    <li><strong>Use multiple sources</strong> and reliable fact-checking organizations.</li>
                </ul>
            </div>
            <p>In this challenge you will compare two news stories, hunt for red flags in a post, and decide what to do in a few everyday situations.</p>
            <h4>Sources</h4>
            <ul class="sources">
                <li><a href="https://www.factcheck.org/2016/11/how-to-spot-fake-news/" target="_blank" rel="noopener">FactCheck.org: How to Spot Fake News</a></li>
                <li><a href="https://www.mindtools.com/a0g6bjj/how-to-spot-real-and-fake-news/" target="_blank" rel="noopener">MindTools: How to Spot Real and Fake News</a></li>
                <li><a href="https://civicnebraska.org/20-ways-to-fight-disinformation/" target="_blank" rel="noopener">Civic Nebraska: 20 Ways to Fight Disinformation</a></li>
            </ul>
        `,
        quiz: [
            {
                type: "imagechoice",
                question: "Can you spot the fake? Which news story is more trustworthy?",
                options: [
                    { img: "images/story-untrustworthy.svg", alt: "A web page headed 'Truth Today!!!' with the all-caps headline 'You won't believe what the council is hiding about your water!!!', no author or date, a banner saying 'Experts are furious', advertisements, and a line urging readers to share before it is deleted.", label: "Story A" },
                    { img: "images/story-trustworthy.svg", alt: "A news article from the Riverton Gazette titled 'City council approves $2 million pipe repair plan after public hearing', with a named reporter, a publication date and update time, a sources line listing council minutes and a hearing transcript, and a corrections contact.", label: "Story B" }
                ],
                correctIndex: 1,
                credit: "mock-ups created by the author. Both outlets are fictional.",
                explanation: "Story B names its reporter, shows when it was published and updated, cites its sources, and gives a corrections contact. Story A has no author or date, shouts in all caps, is surrounded by ads, and pressures you to share."
            },
            {
                type: "flags",
                scenario: "<p><strong>Post:</strong> \"BREAKING: 97% of doctors agree this will wreck your health!\"</p>",
                question: "Select EVERY red flag in this post.",
                items: [
                    "An anonymous account with no profile photo or bio",
                    "A statistic with no named source",
                    "It was posted two hours ago",
                    "Wording written to make you furious",
                    "A link to the original government report"
                ],
                correct: [0, 1, 3],
                explanation: "An anonymous account, an unsourced statistic, and rage-bait wording are red flags. A link to the original report and a recent post time are fine."
            },
            {
                scenario: "<p>An article has no author listed and no date.</p>",
                question: "What is the best response?",
                options: [
                    "Be cautious and look for the same story from reliable sources",
                    "Share it right away",
                    "Assume it is recent",
                    "Assume it is true"
                ],
                correctIndex: 0,
                explanation: "A missing author and date are warning signs. Look for reliable sources before you believe or share it."
            },
            {
                question: "What is the best first step before you share a shocking post?",
                options: [
                    "Pause, then check the source, author, date, and other reports",
                    "Share it so your friends can decide",
                    "Count how many likes it has",
                    "Delete the app"
                ],
                correctIndex: 0,
                explanation: "Pausing and checking the source, author, date, and other reports protects you and your friends from false claims."
            },
            {
                scenario: "<p>A surprising claim appears on only one website.</p>",
                question: "Which is the best way to check it?",
                options: [
                    "Search fact-checking sites like Snopes, FactCheck.org, and PolitiFact, and compare several sources",
                    "Ask the website if it is true",
                    "Trust it because it sounds believable",
                    "Wait to see if it gets more likes"
                ],
                correctIndex: 0,
                explanation: "Reliable fact-checking organizations and several reputable sources are the best checks."
            }
        ]
    }
];
