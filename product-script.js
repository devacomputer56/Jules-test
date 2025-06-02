document.addEventListener('DOMContentLoaded', function() {
    const julesData = {
        introduction: `Jules is an advanced, AI-powered coding agent developed by Google. Announced by Google Labs, it's designed to function as an asynchronous and autonomous assistant for software developers, aiming to automate and streamline various coding tasks. It is powered by Google's advanced Gemini family of models, specifically leveraging Gemini 2.5 Pro for many of its capabilities.<br><br>The core idea behind Jules is to go beyond simple code completion or suggestion. It's envisioned as an agent that can independently understand tasks, plan execution steps, and carry out complex coding operations, allowing developers to delegate work and focus on more critical or creative aspects of software development.`,
        capabilities: `
            <ul>
                <li><strong>Autonomous Task Execution:</strong>
                    <ul>
                        <li>New Feature Implementation: Jules can take a high-level description of a new feature and attempt to build it out. It can reason about the requirements, plan the necessary code changes, and generate the code.</li>
                        <li>Bug Fixing: Developers can assign bugs to Jules. It analyzes the bug report, examines the existing codebase, and attempts to implement a fix.</li>
                        <li>Writing Tests: Jules can automatically generate unit tests for existing code or new features it creates, helping to improve test coverage.</li>
                        <li>Dependency Management: It can assist with tasks like updating dependency versions in a project.</li>
                        <li>Code Refactoring: Jules can help refactor code according to specified guidelines or best practices (e.g., adhering to PEP8 for Python).</li>
                    </ul>
                </li>
                <li><strong>Deep Codebase Understanding & Context:</strong> Jules clones the user's codebase into a secure Google Cloud virtual machine (VM). This allows it to analyze and understand the entire context of the project, including existing code, dependencies, and project structure, rather than just isolated snippets.</li>
                <li><strong>Seamless GitHub Integration:</strong>
                    <ul>
                        <li>Jules works directly with GitHub repositories.</li>
                        <li>It can be triggered, for example, by assigning an issue to it (e.g., using an assign-to-jules label).</li>
                        <li>Once tasks are completed, Jules creates Pull Requests (PRs) on GitHub with the proposed changes, ready for human review and merging.</li>
                    </ul>
                </li>
                <li><strong>Asynchronous Operation:</strong> A key characteristic is its asynchronous nature. Developers can assign tasks to Jules, and it will work on them in the background. This allows developers to continue with other work without being blocked, similar to delegating tasks to a team member. It can handle multiple tasks concurrently.</li>
                <li><strong>Planning and Transparency:</strong> For complex tasks, Jules can break them down into smaller, manageable steps and devise a plan of action. It aims to provide transparency into its reasoning and the changes it makes, often outlining its plan before execution and detailing the changes in the PR.</li>
                <li><strong>Human-in-the-Loop and Control:</strong> While autonomous, Jules is designed to work under human supervision. A two-stage approval process is often highlighted: developers can first review Jules's proposed plan and then review the actual code changes in the PR before merging. This ensures developers maintain control and can verify the quality and correctness of the AI-generated work.</li>
                <li><strong>Audio Changelogs:</strong> An interesting feature mentioned is the ability to provide audio changelogs, offering another way for developers to quickly understand the modifications made.</li>
            </ul>
        `,
        howItWorks: `
            Jules leverages the capabilities of Google's Gemini 2.5 Pro model, which excels at complex reasoning, code understanding, and generation. Gemini 2.5 Flash may also be used for certain interactive features.<br><br>
            By cloning repositories into a dedicated and secure Google Cloud VM, Jules can operate on the codebase without affecting the developer's local environment directly. This also provides a controlled space for execution and testing.<br><br>
            The tight integration with GitHub is crucial, allowing Jules to fit into existing development practices.
        `,
        benefits: `
            <ul>
                <li><strong>Increased Productivity:</strong> Automates time-consuming and repetitive tasks (e.g., boilerplate code, simple bug fixes, test generation).</li>
                <li><strong>Focus on High-Impact Work:</strong> Frees up developers to concentrate on complex problem-solving, architectural design, and innovation.</li>
                <li><strong>Accelerated Development Cycles:</strong> Can potentially speed up the development process by handling tasks in parallel and providing quick turnarounds on assigned work.</li>
                <li><strong>Improved Code Quality (Potentially):</strong> Can assist in maintaining code standards, improving test coverage, and identifying/fixing bugs.</li>
                <li><strong>Task Delegation:</strong> Acts like an AI team member to whom tasks can be delegated, especially useful for tackling backlogs or routine maintenance.</li>
            </ul>
        `,
        statusAccess: `
            Jules was made available in public beta worldwide around May 2025. During the beta period, Jules is generally offered for free, though with certain usage limitations (e.g., a reported limit of 5 tasks per day and a cap on concurrent tasks).<br><br>
            Developers can typically sign up or access Jules through its dedicated website (jules.google.com) by connecting their GitHub account.<br><br>
            While free in beta, it's anticipated that a pricing model will be introduced after the beta period.
        `,
        considerations: `
            <ul>
                <li><strong>Human Oversight is Crucial:</strong> AI-generated code, even from advanced agents like Jules, requires careful review by human developers to ensure correctness, security, and alignment with project goals. It's an assistant, not a replacement for developers.</li>
                <li><strong>Prompt Engineering:</strong> The quality of Jules's output can depend significantly on the clarity and specificity of the instructions (prompts) provided by the developer.</li>
                <li><strong>Privacy and Security:</strong> Google emphasizes that user's private code is not used to train the general models and that data is isolated within the secure VM environment during processing. Users can typically configure data usage permissions.</li>
                <li><strong>Supported Languages:</strong> Initially, support is often focused on popular languages like Python and JavaScript, with plans to expand to more languages over time.</li>
                <li><strong>Learning Curve:</strong> While designed to be intuitive, developers may still need some time to learn how to best interact with Jules and formulate effective prompts.</li>
                <li><strong>Limitations of AI:</strong> Jules, like all AI, can make mistakes or produce suboptimal solutions. It's a tool to augment human capabilities, not an infallible oracle.</li>
            </ul>
        `,
        differentiation: `
            While tools like GitHub Copilot provide inline code suggestions and completions, Jules aims to be a more autonomous agent. The distinction is often described as:<br>
            <ul>
                <li>Coding Assistants (e.g., Copilot): Help you <em>write</em> code.</li>
                <li>Coding Agents (e.g., Jules): Can be delegated work to <em>perform tasks</em> more independently, from planning to PR creation.</li>
            </ul>
            Jules focuses on taking on entire tasks, understanding the broader context of a repository, and operating asynchronously, which represents a step towards more comprehensive AI involvement in the software development process.
        `,
        summary: `
            In summary, Jules represents Google's vision for a more powerful and autonomous AI coding partner, designed to take on a significant portion of the development workload, allowing human developers to be more productive and focus on higher-level challenges. Its integration with existing workflows and its ability to operate asynchronously are key aspects of its design.
        `
    };

    const introductionP = document.querySelector('#jules-introduction p');
    if (introductionP) introductionP.innerHTML = julesData.introduction;

    const capabilitiesDiv = document.querySelector('#jules-capabilities div');
    if (capabilitiesDiv) capabilitiesDiv.innerHTML = julesData.capabilities;

    const howItWorksP = document.querySelector('#jules-how-it-works p');
    if (howItWorksP) howItWorksP.innerHTML = julesData.howItWorks;

    const benefitsDiv = document.querySelector('#jules-benefits div');
    if (benefitsDiv) benefitsDiv.innerHTML = julesData.benefits;

    const statusAccessP = document.querySelector('#jules-status-access p');
    if (statusAccessP) statusAccessP.innerHTML = julesData.statusAccess;

    const considerationsDiv = document.querySelector('#jules-considerations div');
    if (considerationsDiv) considerationsDiv.innerHTML = julesData.considerations;

    const differentiationP = document.querySelector('#jules-differentiation p');
    if (differentiationP) differentiationP.innerHTML = julesData.differentiation;

    const summaryP = document.querySelector('#jules-summary p');
    if (summaryP) summaryP.innerHTML = julesData.summary;

    console.log('Product description page script loaded and content injected.');
});
