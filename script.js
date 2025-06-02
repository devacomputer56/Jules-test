document.addEventListener('DOMContentLoaded', function() {
    // Introduction section
    const introSection = document.getElementById('introduction');
    const introParagraph = introSection.querySelector('p');
    introParagraph.textContent = 'Google Jules is an AI-powered software engineering assistant and coding agent tool developed by Google. It helps developers by understanding codebases, generating plans, and making changes to the code.';

    // How it works section
    const howItWorksSection = document.getElementById('how-it-works');
    const howItWorksParagraph = howItWorksSection.querySelector('p');
    howItWorksParagraph.textContent = 'Jules uses advanced machine learning models to analyze code and understand natural language requests. It can read files, understand existing code, and generate new code or modify existing code based on the user\'s instructions. Jules interacts with the codebase through a set of tools, allowing it to list files, read file contents, and execute subtasks for code modifications.';

    // Capabilities section
    const capabilitiesSection = document.getElementById('capabilities');
    const capabilitiesParagraph = capabilitiesSection.querySelector('p');
    capabilitiesParagraph.innerHTML = `
        Jules has a range of capabilities, including:
        <ul>
            <li>Understanding and navigating complex codebases.</li>
            <li>Generating plans to address user requests.</li>
            <li>Modifying code by adding, removing, or updating functions and classes.</li>
            <li>Creating and running unit tests.</li>
            <li>Interacting with users to clarify requirements and get approvals.</li>
            <li>Using tools to perform actions like listing files and reading their content.</li>
            <li>Publishing its work to GitHub repositories.</li>
        </ul>
    `;

    // Examples section
    const examplesSection = document.getElementById('examples');
    const examplesParagraph = examplesSection.querySelector('p');
    examplesParagraph.textContent = 'For example, a user can ask Jules to "add a new function to calculate the factorial of a number and add a unit test for it." Jules would then create a plan, ask for approval, and then execute the steps to implement the function and its test.';

    // Adding a simple interactive element: Alert on header click
    const header = document.querySelector('header');
    header.addEventListener('click', function() {
        alert('You clicked the header! Jules can make websites interactive.');
    });

    console.log('Google Jules explanatory website script loaded.');
});
