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
    //this.header.classList.remove('header--sticky');
    /* this.body.style.overflowY = 'hidden'; */
    
  });
 }

 close(){
  this.overlay.addEventListener('click', (e) => {
    if(e.target.classList.contains('menu-overlay')){
      this.menu.classList.remove('menu--show');
      this.overlay.classList.remove('menu-overlay--show');
      //this.header.classList.add('header--sticky');
      /* this.body.style.overflowY = 'auto'; */
    }
    
  });
 }

 sticky(){
   window.addEventListener('scroll', () => {
     let fromTop = window.scrollY;
     const TRIGGER_HEIGHT = 20;

   });

 }

}


