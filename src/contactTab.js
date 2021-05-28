const contactContent = () => {
    const content = document.querySelector('#content');

    content.appendChild(createTitle());
    content.appendChild(createDescription());
    content.appendChild(createTreasureMap());
}

function createTitle() {
    const titleDiv = document.createElement('div');
    titleDiv.id = 'TitleDiv';

    const title = document.createElement('h1');
    title.id = 'Title';
    title.innerHTML = 'You Will Never Find Us!!'
    titleDiv.appendChild(title);

    return titleDiv;
}

function createDescription() {
    const descriptionDiv = document.createElement('div');
    descriptionDiv.id = 'DescriptionDiv';
    
    const description = document.createElement('p');
    description.id = 'Description';
    description.innerHTML = 'Look at the Picture for a Hint!';
    descriptionDiv.appendChild(description);

    return descriptionDiv;
}

function createTreasureMap() {
    const photoDiv = document.createElement('div');
    photoDiv.id = 'treasureMapPhotoDiv';

    const photo = document.createElement('img');
    photo.src = `images/treasureMap.jpg`;
    photo.alt = 'treasureMap';
    photo.id = 'treasureMapPhoto'
    photoDiv.appendChild(photo);

    return photoDiv;
}

export {contactContent}