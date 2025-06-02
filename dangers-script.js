document.addEventListener('DOMContentLoaded', function() {
    const dangersContent = {
        introduction: "The rapid advancements in Artificial Intelligence (AI) have revolutionized many industries, and software development is no exception. AI-powered coding assistants and code generation tools are becoming increasingly sophisticated, promising to boost productivity and accelerate development cycles. However, an over-reliance on AI for all coding tasks presents several significant risks and challenges that warrant careful consideration.",
        dangerPoints: [
            {
                id: "danger-point-1",
                title: "1. Over-reliance and Skill Erosion",
                text: "One of the primary concerns is the potential for human developers to become overly reliant on AI. As AI tools handle more complex coding tasks, there's a risk that fundamental programming skills, problem-solving abilities, and deep understanding of system architecture might erode among human developers. This could lead to a generation of developers who are proficient at prompting AI but lack the foundational knowledge to debug intricate issues, optimize performance, or innovate beyond AI's current capabilities."
            },
            {
                id: "danger-point-2",
                title: "2. Lack of Understanding (The Black Box Problem)",
                text: "AI-generated code can sometimes feel like a "black box." Developers might not fully understand the underlying logic, design choices, or potential side effects of code produced by an AI. This lack of transparency makes debugging significantly more challenging, especially for subtle bugs or performance bottlenecks. It also hinders the ability to critically review, refactor, or extend the code effectively, potentially leading to a system that is difficult to maintain and evolve."
            },
            {
                id: "danger-point-3",
                title: "3. Bias and Fairness",
                text: "AI models are trained on vast datasets of existing code. If these datasets contain biases (e.g., reflecting historical coding practices that favor certain architectures, languages, or even perpetuate societal biases in how systems are designed), the AI can unwittingly replicate or amplify these biases in the code it generates. This could lead to software that performs unfairly for certain user groups or introduces unintended discriminatory outcomes, posing significant ethical and societal risks."
            },
            {
                id: "danger-point-4",
                title: "4. Security Vulnerabilities",
                text: "While AI can be used to identify security flaws, it can also inadvertently introduce them. An AI might generate code that is syntactically correct but contains subtle logical errors or overlooks best security practices, creating new vulnerabilities that are difficult for human reviewers to spot. Furthermore, if an AI is trained on insecure code, it might learn to reproduce those insecure patterns, making systems more susceptible to attacks."
            },
            {
                id: "danger-point-5",
                title: "5. Intellectual Property and Licensing Issues",
                text: "The legal landscape surrounding AI-generated content, including code, is still evolving. Questions arise regarding the ownership of AI-generated code: Does it belong to the developer who prompted the AI, the AI's creator, or is it considered public domain? Moreover, if the AI is trained on open-source or proprietary code, there's a risk of inadvertently incorporating licensed code without proper attribution or adherence to licensing terms, leading to potential legal disputes."
            },
            {
                id: "danger-point-6",
                title: "6. Contextual Misunderstanding and Hallucinations",
                text: "AI models, especially large language models, can sometimes "hallucinate" or generate plausible-looking but incorrect information. In coding, this translates to AI producing code that is syntactically valid but functionally flawed, inappropriate for the specific business logic, or completely irrelevant to the problem at hand. Without a deep understanding of the project's context, an AI cannot always make the nuanced decisions required for robust and effective software."
            },
            {
                id: "danger-point-7",
                title: "7. Maintenance and Technical Debt",
                text: "AI-generated code, if not properly reviewed and understood by human developers, can contribute to technical debt. The code might be less optimized, harder to read, or inconsistent with existing coding standards. This can increase long-term maintenance costs and make future development more complex, as developers spend more time deciphering and refactoring AI-produced code rather than building new features."
            },
            {
                id: "danger-point-8",
                title: "8. Ethical and Societal Implications",
                text: "The widespread adoption of AI for coding also raises broader ethical questions, including potential job displacement for human developers. While AI is likely to augment rather than fully replace human roles, the nature of software development jobs could shift dramatically. There are also concerns about accountability: who is responsible when an AI-generated system fails or causes harm?"
            }
        ],
        conclusion: "While AI offers immense potential to enhance software development, it is crucial to approach its integration with caution and a clear understanding of its limitations and risks. A balanced approach, where AI serves as a powerful assistant rather than a complete replacement for human intelligence, is essential. Human oversight, critical thinking, ethical considerations, and continuous learning will remain paramount to ensure that AI-powered coding leads to robust, secure, fair, and maintainable software systems."
    };

    // Populate introduction
    const introP = document.querySelector('#ai-dangers-intro p');
    if (introP) introP.textContent = dangersContent.introduction;

    // Populate danger points
    dangersContent.dangerPoints.forEach(point => {
        const pointContainer = document.getElementById(point.id);
        if (pointContainer) {
            const titleH3 = pointContainer.querySelector('h3');
            const contentP = pointContainer.querySelector('p');
            if (titleH3) titleH3.textContent = point.title;
            if (contentP) contentP.textContent = point.text;
        }
    });

    // Populate conclusion
    const conclusionP = document.querySelector('#ai-dangers-conclusion p');
    if (conclusionP) conclusionP.textContent = dangersContent.conclusion;

    console.log('Dangers of AI Coding page script loaded and content injected.');
});
