const navOpen = document.querySelector('#navOpen');
const navOverlay = document.querySelector('#navOverlay');
const nav = document.querySelector('.menu-nav-container');


//Instantiate
const navigation = new Navigation(navOpen, navOverlay, nav);
//Display output
navigation.open();
navigation.close();
navigation.sticky();
navigation.checkIfSubmenu();
