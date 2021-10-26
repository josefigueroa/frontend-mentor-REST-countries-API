export class RestCountriesAPI{
  constructor(){
    this.url = 'https://restcountries.com/v2';
  }

  async allCountries(){
    const response = await fetch(`${this.url}/all`);
    return await response.json();
  }

  async getCountry(country){
    const response = await fetch(`${this.url}/name/${country}`);
    return await response.json();
  }

  async getRegion(region){
    const response = await fetch(`${this.url}/region/${region}`);
    return await response.json();
  }
}