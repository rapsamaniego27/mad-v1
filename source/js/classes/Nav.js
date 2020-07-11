/* Notes:
  <a> should always be the one clickable having a full height and width

  always use max-height to transition height
*/

class Navigation {
 constructor(openTrigger, overlay, menu) {
   this.openTrigger = openTrigger;
   this.overlay = overlay;
   this.menu = menu;
   this.header = document.querySelector('header');
   this.body = document.querySelector('body');
 }

 // Properties
 open(){
  this.openTrigger.addEventListener('click', (e)=> {
    this.menu.classList.add('menu--show');
    this.overlay.classList.add('menu-overlay--show');
    this.body.style.overflowY = 'hidden';
  });
 }

 close(){
  this.overlay.addEventListener('click', (e) => {
    if(e.target.classList.contains('menu-overlay')){
      this.menu.classList.remove('menu--show');
      this.overlay.classList.remove('menu-overlay--show');
      this.body.style.overflowY = 'auto';
    }
    
  });
 }

 sticky(){
   window.addEventListener('scroll', () => {
     let fromTop = window.scrollY;
     const TRIGGER_HEIGHT = 20;
   });
 }

 checkIfSubmenu() {
   const subMenus = document.querySelectorAll('.menu-item-has-children');
  
   subMenus.forEach(submenu => {
      submenu = submenu.children[0];


      submenu.addEventListener('ontouchstart', (e) => {
        
        /* Assuming <a> is the clicked Element */
        const clickedElement = e.target;
        const parent = clickedElement.offsetParent;
        
        e.preventDefault();

        if (parent.classList.contains('menu-item-has-children')) {
          const ul = submenu.nextElementSibling;
          ul.classList.toggle('sub-menu--show');
        }


      });
   });
  
 }

}


