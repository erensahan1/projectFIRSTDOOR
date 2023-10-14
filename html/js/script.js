const listItems = document.querySelectorAll('.list-item');

listItems.forEach((item) => {
    const header = item.querySelector('.list-item-header');

    header.addEventListener('click', () => {
        item.classList.toggle('open');
    });
});