import { Theme } from './modules/theme';
import { RestCountriesAPI } from './modules/restCountriesAPI';
import { UI } from './modules/UI';

import "../scss/style.scss"

const themeInit = new Theme();
const countriesAip = new RestCountriesAPI();
const ui = new UI();
const form = document.querySelector('#formSearch');

const countries = async () => {
  let data = await countriesAip.allCountries();

  ui.printCountries(data);
}

const searchCountries = async (country) => {
  let data = await countriesAip.getCountry(country);
  ui.printCountries(data); 
}

const searchRegion = async (region) => {
  let data = await countriesAip.getRegion(region);
  ui.printCountries(data); 
}

document.querySelector('#search__region').addEventListener('change', (e)=> {
  let value = e.target.value;
  if(value === 'all'){
    countries();
  }else{
    searchRegion(e.target.value);
  }
  
})

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let formData = new FormData(e.target);
  let country = formData.get('search__country');

  searchCountries(country);
})

window.addEventListener('DOMContentLoaded', () => { 
  themeInit.loadTheme();
  themeInit.eventListeners();

  countries();
})