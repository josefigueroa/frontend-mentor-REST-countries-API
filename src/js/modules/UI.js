export class UI {
  constructor(){
    this.countriesEl = document.querySelector('.countries');
    this.detailWrapperEl = document.querySelector('.detail__wrapper');
    this.flagEl = document.querySelector('.detail__flag');
    this.countryNameEl = document.querySelector('.countries__title');
    this.nativeNameEl = document.querySelector('#native__name');
    this.populationEl = document.querySelector('#population');
    this.regiopnEl = document.querySelector('#region');
    this.subRegiopnEl = document.querySelector('#sub__region');
    this.capitalEl = document.querySelector('#capital');
    this.topLevelEl = document.querySelector('#top__level');
    this.currenciesEl = document.querySelector('#currencies');
    this.languagesEl = document.querySelector('#languages');
    this.countriesListEl = document.querySelector('.countries__list');
  }

  printCountries(data){
    let htmlTemplate= '';
    if(data.status !== 404){
      data.forEach(element => {
        htmlTemplate += `
            <article class="countries__container">
            <figure class="countries__flag">
              <a href="/detail.html?country=${element.name}">
                <img src="${element.flags.png}" width="600" height="300" alt="${element.name} flag">
              </a>
            </figure>
            <div class="countries__body">
              <h2 class="countries__title">${element.name}</h2>
              <dl class="countries__info">
                <dt class="countries__label">Population:</dt>
                <dd class="countries__text">${element.population.toLocaleString()}</dd>
              </dl>
              <dl class="countries__info">
                <dt class="countries__label">Region:</dt>
                <dd class="countries__text">${element.region}</dd>
              </dl>
              <dl class="countries__info">
                <dt class="countries__label">Capital:</dt>
                <dd class="countries__text">${element.capital}</dd>
              </dl>
            </div>       
          </article>     
        `;
      });
    }else{
      htmlTemplate = data.message
    }
    

    this.countriesEl.innerHTML = htmlTemplate;
    this.countriesEl.style.opacity = 1;
  }

  printCountryDetail(data){    
    let languages = data[0].languages.map(element => { return element.name}); 
    let imgFlag = document.createElement('img');
    imgFlag.src = data[0].flags.png;
    imgFlag.alt = `${data[0].name} flag`;
    imgFlag.width = '560';
    imgFlag.height = '400';

    this.flagEl.appendChild(imgFlag)
    this.countryNameEl.textContent = data[0].name;
    this.nativeNameEl.textContent = data[0].nativeName;
    this.populationEl.textContent = data[0].population.toLocaleString();
    this.regiopnEl.textContent = data[0].region;
    this.subRegiopnEl.textContent = data[0].subregion;
    this.capitalEl.textContent = data[0].capital;
    this.topLevelEl.textContent = data[0].topLevelDomain[0];
    this.currenciesEl.textContent = data[0].currencies[0].name;     
    this.languagesEl.textContent = languages.join(",");

    this.detailWrapperEl.style.opacity = 1;
  }

  printBorderscountries(data){
    let htmlTemplate = '';
    data.forEach(element => {
      htmlTemplate += `
        <li class="countries__item">
          <a href="/detail.html?country=${element.name}" class="pills">${element.name}</a>
        </li>
      `;
    });

    if(data.length !== 0){
      this.countriesListEl.innerHTML = htmlTemplate;
    }else{
      this.countriesListEl.innerHTML = '<li class="countries__item countries__item--auto">No border countries </li>'
    }
    
  }
}

