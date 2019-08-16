import { observable, action, toJS  } from 'mobx';
import axios from 'axios';

export default class CounterStore {
  @observable number = 0;
  @observable total = 0;
  @observable infoList = []
  @observable rate = 0;

  @action increase = (price) => {
    this.number++;
    this.total += price
  }
  

  @action capitalApi = () => {

    return axios.get("https://restcountries.eu/rest/v2/all?fields=alpha2Code;capital;name;region;callingCodes")
          .then(response => response.data)
          .catch(err => console.log(err))
    
  }
  @action rateApi = () => {

    return axios.get("https://api.exchangeratesapi.io/latest?base=USD")
          .then(response => response.data)
          .catch(err => console.log(err))
  }

  // 이런 방식으로 api 호출도 가능하다
  // observable 변경은 action으로만 가능하다
  @action getCapital = async() => {
    
    const temp = await axios.get("https://restcountries.eu/rest/v2/all?fields=alpha2Code;capital;name;region;callingCodes")
                .then(response => response.data)
                .catch(err => console.log(err))
    this.setInfo(temp)
  }

  @action getInfo = async(kind) => {
    if(kind == "capital"){
      const temp = await this.capitalApi();
      this.setInfo(temp)
    }
    else if(kind == "rate"){
      const temp = await this.rateApi();
      this.setRate(temp)
    }
    
  }

  @action setInfo = (info) => {this.infoList = info}
  
  @action setRate = (rate) => {this.rate = rate}
}