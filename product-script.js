function initializeAccordions(containerSelector, dataArray) {
    const container = document.querySelector(containerSelector);
    if (!container) {
        console.error("Accordion container not found:", containerSelector);
        return;
    }

    container.innerHTML = ""; // Clear existing content

    dataArray.forEach(item => {
        const accordionItem = document.createElement("div");
        accordionItem.classList.add("accordion-item");

        const titleButton = document.createElement("button");
        titleButton.classList.add("accordion-title");
        titleButton.innerHTML = item.title; // Allow HTML in title, e.g. for <strong>

        const contentDiv = document.createElement("div");
        contentDiv.classList.add("accordion-content");
        contentDiv.innerHTML = item.content; // Assuming content is HTML

        accordionItem.appendChild(titleButton);
        accordionItem.appendChild(contentDiv);
        container.appendChild(accordionItem);

        titleButton.addEventListener("click", () => {
            titleButton.classList.toggle("active");
            const contentPanel = titleButton.nextElementSibling;
            if (titleButton.classList.contains("active")) {
                contentPanel.style.maxHeight = contentPanel.scrollHeight + "px";
                contentPanel.style.padding = "15px";
            } else {
                contentPanel.style.maxHeight = null;
                // Adjust padding after transition
                setTimeout(() => {
                    if (!titleButton.classList.contains("active")) {
                        contentPanel.style.padding = "0 15px";
                    }
                }, 200); // Match transition duration if possible
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const julesData = {
        introduction: `Jules is an advanced, AI-powered coding agent developed by Google. Announced by Google Labs, it's designed to function as an asynchronous and autonomous assistant for software developers, aiming to automate and streamline various coding tasks. It is powered by Google's advanced Gemini family of models, specifically leveraging Gemini 2.5 Pro for many of its capabilities.<br><br>The core idea behind Jules is to go beyond simple code completion or suggestion. It's envisioned as an agent that can independently understand tasks, plan execution steps, and carry out complex coding operations, allowing developers to delegate work and focus on more critical or creative aspects of software development.`,
        capabilities: [
            {
                title: "<strong>Autonomous Task Execution</strong>",
                content: `<ul>
                            <li><strong>New Feature Implementation:</strong> Jules takes high-level descriptions to build features. It reasons about requirements, plans code changes, and generates the necessary code.</li>
                            <li><strong>Bug Fixing:</strong> Assign bugs to Jules. It analyzes reports, examines the codebase, and attempts to implement fixes.</li>
                            <li><strong>Writing Tests:</strong> Automatically generates unit tests for existing or new code, improving test coverage.</li>
                            <li><strong>Dependency Management:</strong> Assists with updating project dependency versions.</li>
                            <li><strong>Code Refactoring:</strong> Helps refactor code based on specified guidelines or best practices (e.g., PEP8 for Python).</li>
                        </ul>`
            },
            {
                title: "<strong>Deep Codebase Understanding & Context</strong>",
                content: "Jules clones the user's codebase into a secure Google Cloud virtual machine (VM). This provides full project context (code, dependencies, structure) beyond isolated snippets."
            },
            {
                title: "<strong>Seamless GitHub Integration</strong>",
                content: `<ul>
                            <li>Works directly with GitHub repositories.</li>
                            <li>Triggered by actions like assigning an issue (e.g., via an \`assign-to-jules\` label).</li>
                            <li>Creates Pull Requests (PRs) on GitHub with proposed changes for human review and merging.</li>
                        </ul>`
            },
            {
                title: "<strong>Asynchronous Operation</strong>",
                content: "Operates asynchronously, allowing developers to delegate tasks and continue other work without being blocked. Can handle multiple tasks concurrently."
            },
            {
                title: "<strong>Planning and Transparency</strong>",
                content: "For complex tasks, Jules breaks them into smaller steps and devises a plan. It aims for transparency in its reasoning and changes, often outlining plans and detailing modifications in PRs."
            },
            {
                title: "<strong>Human-in-the-Loop and Control</strong>",
                content: "Designed for human supervision. A two-stage approval process is common: 1. Review Jules's proposed plan. 2. Review code changes in the PR. This ensures developer control and quality verification."
            },
            {
                title: "<strong>Audio Changelogs</strong>",
                content: "Offers audio changelogs as an alternative way for developers to quickly understand code modifications."
            }
        ],
        howItWorks: `
            Jules leverages <strong>Google's Gemini 2.5 Pro model</strong> for complex reasoning, code understanding, and generation. Gemini 2.5 Flash may assist with interactive features.<br><br>
            By cloning repositories into a dedicated, secure <strong>Google Cloud VM</strong>, Jules operates on the codebase without impacting local environments, providing a controlled space for execution and testing.<br><br>
            Tight <strong>GitHub integration</strong> is crucial, fitting Jules into existing development practices.
        `,
        benefits: [
            { title: "<strong>Increased Productivity</strong>", content: "Automates time-consuming tasks like boilerplate code, simple bug fixes, and test generation." },
            { title: "<strong>Focus on High-Impact Work</strong>", content: "Frees developers for complex problem-solving, architectural design, and innovation." },
            { title: "<strong>Accelerated Development Cycles</strong>", content: "Potentially speeds up development by handling tasks in parallel and offering quick turnarounds." },
            { title: "<strong>Improved Code Quality</strong> (Potentially)", content: "Assists in maintaining code standards, enhancing test coverage, and fixing bugs." },
            { title: "<strong>Effective Task Delegation</strong>", content: "Acts as an AI team member for backlogs or routine maintenance tasks." }
        ],
        statusAccess: `
            Jules entered <strong>public beta worldwide around May 2025</strong>. During beta, it's generally free with usage limits (e.g., 5 tasks/day, capped concurrent tasks).<br><br>
            Access is typically via its website (jules.google.com) by connecting a GitHub account.<br><br>
            A pricing model is anticipated post-beta.
        `,
        considerations: [
            { title: "<strong>Human Oversight is Crucial</strong>", content: "AI-generated code needs careful human review for correctness, security, and project alignment. Jules is an assistant, not a replacement." },
            { title: "<strong>Effective Prompt Engineering</strong>", content: "Output quality depends on clear, specific instructions (prompts) from the developer." },
            { title: "<strong>Privacy and Security</strong>", content: "Google states user's private code isn't used for general model training. Data is isolated in secure VMs. Users can typically configure data permissions." },
            { title: "<strong>Supported Languages</strong>", content: "Initial support often focuses on popular languages (e.g., Python, JavaScript), with plans for expansion." },
            { title: "<strong>Learning Curve</strong>", content: "While intuitive, developers may need time to learn optimal interaction and prompt formulation." },
            { title: "<strong>Limitations of AI</strong>", content: "Like all AI, Jules can err or produce suboptimal solutions. It's a tool to augment human capabilities." }
        ],
        differentiation: `
            While tools like GitHub Copilot offer inline code suggestions, Jules aims for greater autonomy:<br>
            <ul>
                <li><strong>Coding Assistants (e.g., Copilot):</strong> Help you <em>write</em> code.</li>
                <li><strong>Coding Agents (e.g., Jules):</strong> Can be delegated work to <em>perform tasks</em> more independently, from planning to PR creation.</li>
            </ul>
            Jules focuses on entire tasks, repository-wide context, and asynchronous operation, moving towards more comprehensive AI involvement in software development.
        `,
        summary: `
            Jules represents Google's vision for a powerful, autonomous AI coding partner. It's designed to handle significant development workloads, enabling human developers to be more productive and focus on higher-level challenges. Key aspects include its integration with existing workflows and asynchronous operation.
        `
    };

    // Populate non-accordion sections
    const introductionP = document.querySelector('#jules-introduction p');
    if (introductionP) introductionP.innerHTML = julesData.introduction;

    const howItWorksP = document.querySelector('#jules-how-it-works p');
    if (howItWorksP) howItWorksP.innerHTML = julesData.howItWorks;
    
    const statusAccessP = document.querySelector('#jules-status-access p');
    if (statusAccessP) statusAccessP.innerHTML = julesData.statusAccess;

    const differentiationP = document.querySelector('#jules-differentiation p');
    if (differentiationP) differentiationP.innerHTML = julesData.differentiation;

    const summaryP = document.querySelector('#jules-summary p');
    if (summaryP) summaryP.innerHTML = julesData.summary;

    // Initialize accordions for the relevant sections
    initializeAccordions("#jules-capabilities div", julesData.capabilities);
    initializeAccordions("#jules-benefits div", julesData.benefits);
    initializeAccordions("#jules-considerations div", julesData.considerations);

    console.log('Product description page script loaded and content injected; accordions initialized with refined content.');
});
