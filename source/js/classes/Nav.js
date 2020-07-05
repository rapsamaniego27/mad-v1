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
    
  });
 }

 close(){
  this.overlay.addEventListener('click', (e) => {
    if(e.target.classList.contains('menu-overlay')){
      this.menu.classList.remove('menu--show');
      this.overlay.classList.remove('menu-overlay--show');
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
     submenu.addEventListener('click', (e)=> {
       e.preventDefault();
       const ul = submenu.lastElementChild;
       ul.classList.toggle('sub-menu--show');
     });
   });
  
 }

}


