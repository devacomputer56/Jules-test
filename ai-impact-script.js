document.addEventListener('DOMContentLoaded', function() {
    const pageContent = {
        introduction: "The rise of Artificial Intelligence (AI) is significantly reshaping the landscape for programmers. While it brings forth a myriad of opportunities to enhance productivity and innovation, it also presents challenges that require adaptation and new skill development.",
        positiveImpacts: [
            {
                title: "Increased Productivity and Efficiency",
                details: [
                    "AI tools can generate boilerplate code, suggest completions, and even write entire functions based on natural language descriptions, drastically reducing manual coding time.",
                    "AI-powered tools can analyze code for potential bugs, vulnerabilities, and inefficiencies, often identifying issues faster and more accurately than human programmers.",
                    "AI can generate test cases and automate testing processes, ensuring higher code quality and faster release cycles."
                ]
            },
            {
                title: "Focus on Higher-Value Tasks",
                details: [
                    "By automating repetitive and mundane coding tasks, programmers can dedicate more time to complex problem-solving, architectural design, innovation, and strategic thinking.",
                    "This shifts the programmer's role towards more creative and impactful work."
                ]
            },
            {
                title: "Learning and Skill Development",
                details: [
                    "AI can act as a powerful learning assistant, providing explanations of complex code, suggesting best practices, and offering personalized learning paths for new technologies.",
                    "Programmers can leverage AI to quickly understand new frameworks or languages."
                ]
            },
            {
                title: "Accessibility and Democratization of Programming",
                details: [
                    "AI tools that translate natural language into code can lower the barrier to entry for aspiring programmers, allowing more people to create software without deep coding expertise.",
                    "This can lead to a more diverse and inclusive programming community."
                ]
            },
            {
                title: "Enhanced Collaboration",
                details: [
                    "AI can facilitate better collaboration by summarizing discussions, identifying key decisions in project documentation, and even translating code comments between different languages."
                ]
            }
        ],
        negativeImpacts: [
            {
                title: "Job Displacement and Shifting Roles",
                details: [
                    "As AI takes over more routine coding tasks, there's a concern that some programming jobs, particularly those focused on basic coding or maintenance, might be reduced or eliminated.",
                    "Programmers will need to adapt their skill sets to focus on areas where human creativity, critical thinking, and complex problem-solving are still essential."
                ]
            },
            {
                title: "Over-reliance and Skill Erosion",
                details: [
                    "Excessive reliance on AI for code generation and debugging could lead to a decline in fundamental coding skills, critical thinking, and problem-solving abilities among programmers.",
                    "Understanding why AI generates certain code is crucial, rather than just accepting it."
                ]
            },
            {
                title: "Quality and Security Concerns",
                details: [
                    "AI-generated code might sometimes contain subtle bugs, inefficiencies, or security vulnerabilities that are harder to detect if programmers don't thoroughly review and understand it.",
                    "The "black box" nature of some AI models can make it difficult to trace the origin of errors."
                ]
            },
            {
                title: "Ethical Considerations and Bias",
                details: [
                    "AI models are trained on existing data, which can contain biases. If not carefully managed, AI-generated code could perpetuate or even amplify these biases, leading to unfair or discriminatory software.",
                    "Programmers need to be aware of these ethical implications and work to mitigate them."
                ]
            },
            {
                title: "Need for Continuous Learning and Adaptation",
                details: [
                    "The rapid evolution of AI means programmers must constantly learn new tools, techniques, and paradigms. This requires significant effort and a commitment to lifelong learning.",
                    "The pressure to stay updated can be stressful for some."
                ]
            }
        ],
        conclusion: "AI is not here to replace programmers entirely, but rather to transform the role. Programmers who embrace AI tools, focus on higher-level problem-solving, and continuously adapt their skills to work alongside AI will be well-positioned for success in this evolving technological landscape. The future of programming will likely involve a symbiotic relationship between human intelligence and artificial intelligence."
    };

    // Populate introduction
    const introP = document.querySelector('#ai-impact-intro p');
    if (introP) introP.textContent = pageContent.introduction;

    // Function to populate impact lists
    function populateImpactList(containerSelector, impactsArray) {
        const container = document.querySelector(containerSelector);
        if (!container) {
            console.error('Impact list container not found:', containerSelector);
            return;
        }
        
        impactsArray.forEach(impact => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('impact-item');

            const titleH3 = document.createElement('h3');
            titleH3.textContent = impact.title;
            itemDiv.appendChild(titleH3);

            if (impact.details && impact.details.length > 0) {
                const ul = document.createElement('ul');
                impact.details.forEach(detailText => {
                    const li = document.createElement('li');
                    li.textContent = detailText;
                    ul.appendChild(li);
                });
                itemDiv.appendChild(ul);
            }
            container.appendChild(itemDiv);
        });
    }

    // Populate positive impacts
    populateImpactList('#ai-impact-positive .impact-list-container', pageContent.positiveImpacts);

    // Populate negative impacts
    populateImpactList('#ai-impact-negative .impact-list-container', pageContent.negativeImpacts);

    // Populate conclusion
    const conclusionP = document.querySelector('#ai-impact-conclusion p');
    if (conclusionP) conclusionP.textContent = pageContent.conclusion;

    console.log('AI Impact page script loaded and content injected.');
});
