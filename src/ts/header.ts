window.onload = function(){
    loadNavigation()
  }
  
  // Load navigation and hamburger menu
      export function loadNavigation(){
  
      const menuBtn: HTMLDivElement = document.querySelector('.menu-btn');
      let menuOpen: boolean = false;
      menuBtn.addEventListener('click', () => {
        if(!menuOpen) {
          menuBtn.classList.add('open');
          menuOpen = true;
        } else {
          menuBtn.classList.remove('open');
          menuOpen = false;
        }
      });
  
      let hamburger = document.getElementById('hamburgare');
      
      hamburger.addEventListener("click", burgerToggle);
      
      function burgerToggle(){
        let element: HTMLDivElement = document.getElementById("burgerDropdown") as HTMLDivElement;
        element.classList.toggle("burgerStyle");
      
    }
  }