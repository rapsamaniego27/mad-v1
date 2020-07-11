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
   
   const action = this.isMobile() ? 'touchstart' : 'click';
   
   console.log(action);
   
   subMenus.forEach(submenu => {
      submenu = submenu.children[0];
 
      /* For Computers and Laptops */
      submenu.addEventListener(action, (e) => { 
       this.toggleSubmenu(e, action);
       console.log('triggered');
       
      });

      /* For Mobile and Tablets */
      /* submenu.addEventListener('touchstart', (e) => {
        this.toggleSubmenu(e);
      }); */
   });
  
 }

 toggleSubmenu(e, action){
    /* Assuming <a> is the clicked Element */
    const clickedElement = e.target;
    const parent = clickedElement.offsetParent;

    alert(action);

    e.preventDefault();

    if (parent.classList.contains('menu-item-has-children')) {
      const ul = clickedElement.nextElementSibling;
      ul.classList.toggle('sub-menu--show');
    }
 }

 isMobile(){
   if (navigator.userAgent.match(/Android/i) ||
     navigator.userAgent.match(/webOS/i) ||
     navigator.userAgent.match(/iPhone/i) ||
     navigator.userAgent.match(/iPad/i) ||
     navigator.userAgent.match(/iPod/i) ||
     navigator.userAgent.match(/BlackBerry/i) ||
     navigator.userAgent.match(/Windows Phone/i))

     return true;
 }
 

}


