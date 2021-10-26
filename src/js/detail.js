import { Theme } from './modules/theme';
import { RestCountriesAPI } from './modules/restCountriesAPI';
import { Params } from './modules/getParams';
import { UI } from './modules/UI';

import "../scss/style.scss"

const themeInit = new Theme();
const countriesApi = new RestCountriesAPI();
const getParams = new Params();
const ui = new UI();

const param = getParams.getParam('country');

const country = async (country) => {
  let data = await countriesApi.getCountry(country);
  getBorders(data);
  ui.printCountryDetail(data);
}

const getBorders = async (data) => {  
  let getAllCountries = await countriesApi.allCountries();
  let borders = getAllCountries.filter(item => {  
    if(typeof data[0].borders !== 'undefined'){
      return data[0].borders.includes(item.alpha3Code);   
    }
      
  });
  ui.printBorderscountries(borders);

}

document.querySelector('.pills--back').addEventListener('click', (e) =>{
  console.log(e);
  history.back();
})



window.addEventListener('DOMContentLoaded', () => { 
  themeInit.loadTheme();
  themeInit.eventListeners();

  country(param);
  
})