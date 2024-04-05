// document.addEventListener('DOMContentLoaded', function () {
//     const showToggles = document.querySelectorAll('.show-toggle');
//     const hideToggles = document.querySelectorAll('.hide-toggle');
//     const codeSnippetContainers = document.querySelectorAll('.hidden-question');

//     showToggles.forEach((showToggle, index) => {
//         showToggle.addEventListener('click', function () {
//             codeSnippetContainers[index].style.display = 'block';
//             showToggles[index].style.display = 'none';
//             hideToggles[index].style.display = 'block';
//         });
//     });

//     hideToggles.forEach((hideToggle, index) => {
//         hideToggle.addEventListener('click', function () {
//             codeSnippetContainers[index].style.display = 'none';
//             showToggles[index].style.display = 'block';
//             hideToggles[index].style.display = 'none';
//         });
//     });
// });

const showToggles = document.querySelectorAll('.show-toggle');
const hideToggles = document.querySelectorAll('.hide-toggle');
const codeSnippetContainers = document.querySelectorAll('.hidden-question');

function showcode() {
    showToggles.forEach((showToggle, index) => {
        showToggle.addEventListener('click', function () {
            codeSnippetContainers[index].style.display = 'block';
            showToggles[index].style.display = 'none';
            hideToggles[index].style.display = 'block';
        });
    });
}

function hidecode() {
    hideToggles.forEach((hideToggle, index) => {
        hideToggle.addEventListener('click', function () {
            codeSnippetContainers[index].style.display = 'none';
            showToggles[index].style.display = 'block';
            hideToggles[index].style.display = 'none';
        });
    });
}

showcode()
hidecode()