export class Params{
  constructor(){
    this.queryString = window.location.search;
    this.urlParams = new URLSearchParams(this.queryString);
  }

  allParams(){
    const result = {};
    for (const [key, value] of this.urlParams) {
      result[key] = value;
    }
    return result;
  }

  getParam(param){
    return this.urlParams.get(param);
  }
}