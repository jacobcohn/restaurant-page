const contactContent = () => {
    const content = document.querySelector('#content');

    const titleDiv = document.createElement('div');
    titleDiv.id = 'titleDiv';
    content.appendChild(titleDiv);
}

export {contactContent}