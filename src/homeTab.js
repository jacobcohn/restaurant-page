const homeContent = () => {
    const content = document.querySelector('#content');

    content.appendChild(createTitle());
    content.appendChild(createDescription());
    content.appendChild(createPhotoAlbum());
}

function createTitle() {
    const titleDiv = document.createElement('div');
    titleDiv.id = 'TitleDiv';

    const title = document.createElement('h1');
    title.id = 'Title';
    title.innerHTML = 'Ice Cream Shop'
    titleDiv.appendChild(title);

    return titleDiv;
}

function createDescription() {
    const descriptionDiv = document.createElement('div');
    descriptionDiv.id = 'DescriptionDiv';
    
    const description = document.createElement('p');
    description.id = 'Description';
    description.innerHTML = 'It\'s an ice cream shop.  There is not much to describe.  Anyways... here are some pictures of puppies!';
    descriptionDiv.appendChild(description);

    return descriptionDiv;
}

function createPhotoAlbum() {
    const photoAlbum = document.createElement('div');
    photoAlbum.id = 'photoAlbum';

    photoAlbum.appendChild(addPhoto('7puppies'));
    photoAlbum.appendChild(addPhoto('5puppies'));
    photoAlbum.appendChild(addPhoto('runningPuppies'));
    photoAlbum.appendChild(addPhoto('dressedUpPuppies'));

    return photoAlbum;
}

function addPhoto(name) {
    const photoDiv = document.createElement('div');
    photoDiv.classList.toggle('puppyPhotoDiv');

    const photo = document.createElement('img');
    photo.src = `images/puppies/${name}.jpg`;
    photo.alt = `${name}`;
    photo.classList.toggle('puppyPhoto');
    photoDiv.appendChild(photo);

    return photoDiv;
}

export {homeContent}