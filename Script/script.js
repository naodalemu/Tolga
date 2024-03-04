document.addEventListener('DOMContentLoaded', function () {
    const showToggle = document.querySelector('.show-toggle');
    const hideToggle = document.querySelector('.hide-toggle');
    const codeSnippetContainer = document.querySelector('.hidden-question');

    showToggle.addEventListener('click', function () {
        codeSnippetContainer.style.display = 'block';
        showToggle.style.display = 'none';
        hideToggle.style.display = 'block';
    });

    hideToggle.addEventListener('click', function () {
        codeSnippetContainer.style.display = 'none';
        showToggle.style.display = 'block';
        hideToggle.style.display = 'none';
    });
});