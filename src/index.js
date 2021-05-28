import {homeContent} from './homeTab'
import {menuContent} from './menuTab'
import {contactContent} from './contactTab'

const container = document.querySelector('#container');
container.id = 'container';

const tabs = document.createElement('div');
tabs.id = 'tabs';
container.appendChild(tabs);
// home div and button
const homeTabDiv = document.createElement('div');
homeTabDiv.id = 'homeTabDiv';
tabs.appendChild(homeTabDiv);
const homeTabBtn = document.createElement('button');
homeTabBtn.id = 'homeTabBtn';
homeTabBtn.innerHTML = 'Home';
homeTabDiv.appendChild(homeTabBtn);
// menu div and button
const menuTabDiv = document.createElement('div');
menuTabDiv.id = 'menuTabDiv';
tabs.appendChild(menuTabDiv);
const menuTabBtn = document.createElement('button');
menuTabBtn.id = 'menuTabBtn';
menuTabBtn.innerHTML = 'Menu';
menuTabDiv.appendChild(menuTabBtn);
// contact div and button
const contactTabDiv = document.createElement('div');
contactTabDiv.id = 'contactTabDiv';
tabs.appendChild(contactTabDiv);
const contactTabBtn = document.createElement('button');
contactTabBtn.id = 'contactTabBtn';
contactTabBtn.innerHTML = 'Contact';
contactTabDiv.appendChild(contactTabBtn);

const content = document.createElement('div');
content.id = 'content';
container.appendChild(content);

const footer = document.createElement('div');
footer.id = 'footer';
container.appendChild(footer);


homeTabBtn.classList.toggle('selected');
homeContent();

homeTabBtn.addEventListener('click', () => {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    if (!homeTabBtn.classList.contains('selected')) {
        homeTabBtn.classList.toggle('selected');
    }
    if (menuTabBtn.classList.contains('selected')) {
        menuTabBtn.classList.toggle('selected');
    }
    if (contactTabBtn.classList.contains('selected')) {
        contactTabBtn.classList.toggle('selected');
    }
    homeContent();
})
menuTabBtn.addEventListener('click', () => {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    if (homeTabBtn.classList.contains('selected')) {
        homeTabBtn.classList.toggle('selected');
    }
    if (!menuTabBtn.classList.contains('selected')) {
        menuTabBtn.classList.toggle('selected');
    }
    if (contactTabBtn.classList.contains('selected')) {
        contactTabBtn.classList.toggle('selected');
    }
    menuTabBtn.
    menuContent();
})
contactTabBtn.addEventListener('click', () => {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    if (homeTabBtn.classList.contains('selected')) {
        homeTabBtn.classList.toggle('selected');
    }
    if (menuTabBtn.classList.contains('selected')) {
        menuTabBtn.classList.toggle('selected');
    }
    if (!contactTabBtn.classList.contains('selected')) {
        contactTabBtn.classList.toggle('selected');
    }
    contactContent();
})

export {content}