const menuContent = () => {
    const content = document.querySelector('#content');

    content.appendChild(createMenuItem('Vanilla'));
    content.appendChild(createMenuItem('Strawberry'));
    content.appendChild(createMenuItem('Chocolate'));
}

function createMenuItem(name) {
    const menuItemDiv = document.createElement('div');
    menuItemDiv.classList.toggle('menuItemDiv');

    const photo = document.createElement('img');
    photo.src = `images/iceCream/${name}.jpg`;
    photo.alt = `${name}`;
    photo.classList.toggle('iceCreamPhoto');
    menuItemDiv.appendChild(photo);

    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.toggle('menuItemDescriptionDiv');
    menuItemDiv.appendChild(descriptionDiv);

    const title = document.createElement('h2');
    title.innerHTML = name + ' - $5';
    title.classList.toggle('menuItemTitle');
    descriptionDiv.appendChild(title);

    const description = document.createElement('p');
    description.innerHTML = 'The ' + name + ' Ice Cream Cone is very yummy!';
    description.classList.toggle('menuItemDescription');
    descriptionDiv.appendChild(description);

    return menuItemDiv;
}

export {menuContent}