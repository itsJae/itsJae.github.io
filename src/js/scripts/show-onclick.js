let feButton = document.getElementById('fe-button');
let beButton = document.getElementById('be-button');
let dsButton = document.getElementById('ds-button');
let toolsButton = document.getElementById('tools-button');

feButton.addEventListener('click', () => {
    let stackText = document.getElementById('fe-text'); // fe-text
    let plusIcon = document.getElementById('fe-button');
    let category = document.getElementById('category-front-end');

    // Stack Text
    if (stackText.style.visibility === 'hidden') stackText.style.visibility = 'visible';
    else stackText.style.visibility = 'hidden';
    stackText.classList.toggle('show');

    // Category
    category.classList.toggle('category-show');

    // Plus Icon
    if (plusIcon.classList.contains('toLeft')) {
        // if tab is currently open
        plusIcon.classList.remove('toLeft');
        plusIcon.classList.add('toRight');
        return;
    } else if (plusIcon.classList.contains('toRight')) {
        // if tab is currently close
        plusIcon.classList.remove('toRight');
        plusIcon.classList.add('toLeft');
        return;
    }
    plusIcon.classList.add('toLeft');
});

beButton.addEventListener('click', () => {
    let stackText = document.getElementById('be-text'); // fe-text
    let plusIcon = document.getElementById('be-button');
    let category = document.getElementById('category-back-end');

    // Stack Text
    if (stackText.style.visibility === 'hidden') stackText.style.visibility = 'visible';
    else stackText.style.visibility = 'hidden';
    stackText.classList.toggle('show');

    // Category
    category.classList.toggle('category-show');

    // Plus Icon
    if (plusIcon.classList.contains('toLeft')) {
        // if tab is currently open
        plusIcon.classList.remove('toLeft');
        plusIcon.classList.add('toRight');
        return;
    } else if (plusIcon.classList.contains('toRight')) {
        // if tab is currently close
        plusIcon.classList.remove('toRight');
        plusIcon.classList.add('toLeft');
        return;
    }
    plusIcon.classList.add('toLeft');
});

dsButton.addEventListener('click', () => {
    let stackText = document.getElementById('ds-text'); // fe-text
    let plusIcon = document.getElementById('ds-button');
    let category = document.getElementById('category-data-science');

    // Stack Text
    if (stackText.style.visibility === 'hidden') stackText.style.visibility = 'visible';
    else stackText.style.visibility = 'hidden';
    stackText.classList.toggle('show');

    // Category
    category.classList.toggle('category-show');

    // Plus Icon
    if (plusIcon.classList.contains('toLeft')) {
        // if tab is currently open
        plusIcon.classList.remove('toLeft');
        plusIcon.classList.add('toRight');
        return;
    } else if (plusIcon.classList.contains('toRight')) {
        // if tab is currently close
        plusIcon.classList.remove('toRight');
        plusIcon.classList.add('toLeft');
        return;
    }
    plusIcon.classList.add('toLeft');
});
toolsButton.addEventListener('click', () => {
    let stackText = document.getElementById('tools-text'); // fe-text
    let plusIcon = document.getElementById('tools-button');
    let category = document.getElementById('category-tools');

    // Stack Text
    if (stackText.style.visibility === 'hidden') stackText.style.visibility = 'visible';
    else stackText.style.visibility = 'hidden';
    stackText.classList.toggle('show');

    // Category
    category.classList.toggle('category-show');

    // Plus Icon
    if (plusIcon.classList.contains('toLeft')) {
        // if tab is currently open
        plusIcon.classList.remove('toLeft');
        plusIcon.classList.add('toRight');
        return;
    } else if (plusIcon.classList.contains('toRight')) {
        // if tab is currently close
        plusIcon.classList.remove('toRight');
        plusIcon.classList.add('toLeft');
        return;
    }
    plusIcon.classList.add('toLeft');
});
