import {homeContent} from './homeTab'
import {menuContent} from './menuTab'
import {contactContent} from './contactTab'

initPageLoad();

function initPageLoad() {
    const container = document.querySelector('#container');
    
    container.appendChild(loadTabs());
    container.appendChild(loadContent());
    container.appendChild(loadFooter());

    homeContent();
}

function loadTabs() {
    const tabs = document.createElement('div');
    tabs.id = 'tabs';

    // home tab div and button
    const homeTabDiv = document.createElement('div');
    homeTabDiv.id = 'homeTabDiv';
    tabs.appendChild(homeTabDiv);
    const homeTabBtn = document.createElement('button');
    homeTabBtn.id = 'homeTabBtn';
    homeTabBtn.innerHTML = 'Home';
    homeTabDiv.appendChild(homeTabBtn);
    // menu tab div and button
    const menuTabDiv = document.createElement('div');
    menuTabDiv.id = 'menuTabDiv';
    tabs.appendChild(menuTabDiv);
    const menuTabBtn = document.createElement('button');
    menuTabBtn.id = 'menuTabBtn';
    menuTabBtn.innerHTML = 'Menu';
    menuTabDiv.appendChild(menuTabBtn);
    // contact tab div and button
    const contactTabDiv = document.createElement('div');
    contactTabDiv.id = 'contactTabDiv';
    tabs.appendChild(contactTabDiv);
    const contactTabBtn = document.createElement('button');
    contactTabBtn.id = 'contactTabBtn';
    contactTabBtn.innerHTML = 'Contact';
    contactTabDiv.appendChild(contactTabBtn);

    homeTabBtn.classList.toggle('selected');
    eventListeners();
    
    function eventListeners() {
        homeTabBtn.addEventListener('click', () => {
            resetTabs();
            homeTabBtn.classList.toggle('selected');
            homeContent();
        })
        menuTabBtn.addEventListener('click', () => {
            resetTabs();
            menuTabBtn.classList.toggle('selected');
            menuContent();
        })
        contactTabBtn.addEventListener('click', () => {
            resetTabs();
            contactTabBtn.classList.toggle('selected');
            contactContent();
        })
        
        function resetTabs() {
            while (content.firstChild) {
                content.removeChild(content.firstChild);
            }
            const selectedTab = document.querySelector('.selected');
            selectedTab.classList.toggle('selected');
        }
    }

    return tabs;
}

function loadContent() {
    const content = document.createElement('div');
    content.id = 'content';

    return content;
}

function loadFooter() {
    const footer = document.createElement('div');
    footer.id = 'footer';

    return footer;
}

/* 
Puppies
Photo by <a href="https://unsplash.com/@reskp?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jametlene Reskp</a> on <a href="https://unsplash.com/s/photos/puppies?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
Photo by <a href="https://unsplash.com/@jneumeyer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Judi Neumeyer</a> on <a href="https://unsplash.com/s/photos/puppies?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
Photo by <a href="https://unsplash.com/@alvannee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alvan Nee</a> on <a href="https://unsplash.com/s/photos/puppies?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
Photo by <a href="https://unsplash.com/@karsten116?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Karsten Winegeart</a> on <a href="https://unsplash.com/s/photos/puppies?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
Ice Cream
Photo by <a href="https://unsplash.com/@rachaelgorjestani?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Rachael Gorjestani</a> on <a href="https://unsplash.com/s/photos/ice-cream?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
Photo by <a href="https://unsplash.com/@sadswim?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">ian dooley</a> on <a href="https://unsplash.com/s/photos/ice-cream?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
Photo by <a href="https://unsplash.com/@cadence_26?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Cadence T</a> on <a href="https://unsplash.com/s/photos/chocolate-ice-cream?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

Treasure Hunt
Photo by <a href="https://unsplash.com/@louisnardsophie?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sophie Louisnard</a> on <a href="https://unsplash.com/s/photos/treasure-map?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
*/