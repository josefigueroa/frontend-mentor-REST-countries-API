export class Theme{
  constructor(){
    this.themeLabel = document.querySelector('.form__theme');
    this.themeInput = document.querySelector('.form__custom-checbox');    
  }

  /**
   * Change value of data-theme 
   * 
   */
  changeTheme(){
    if(this.themeInput.checked){
      document.body.setAttribute('data-theme', 'dark');
    }else{
      document.body.setAttribute('data-theme', 'light');
    }
  }

  /**
   * Save theme value in localstorage
   */
  saveTheme(){
    let saveTheme = (this.themeInput.checked) ? 'dark' : 'light';

    localStorage.setItem('theme', saveTheme);
  }

  
  /**
   * Get theme value in localstorage when page loads 
   */
  loadTheme(){
    let dataTheme = localStorage.getItem('theme');

    if(dataTheme === 'dark'){
      document.body.setAttribute('data-theme', 'dark');
      this.themeInput.checked = true;
    }else{
      document.body.setAttribute('data-theme', 'light');
      this.themeInput.checked = false;
    }    
  }

  eventListeners() {
    this.themeInput.addEventListener('change', () => {
      this.changeTheme();      
      this.saveTheme();      
    })
  }

}