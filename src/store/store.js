import { observable, action, toJS  } from 'mobx';
import axios from 'axios';

export default class Store {
  @observable number = 1;
  @observable total = 0;
  @observable infoList = []
  @observable rate = 0;

  @observable contentList = [
    { mainUrl: "https://www.instagram.com/p/B1BlTUDjrNJ/embed/",
      sort: "BLACKPINK INSTAGRAM",
     title: "BLACKPINK LISA Instagram and Insta Story Update, August 11, 2019",
     date: "AUGUST 11, 2019(KST)"
    },
    {mainUrl: "https://www.instagram.com/p/B0-IpJ6DZ2E/embed/",
     sort: "BLACKPINK INSTAGRAM",
     title: "BLACKPINK LISA Instagram and Insta Story Update, August 10, 2019",
     date: "AUGUST 10, 2019(KST)"
    },
    {
      mainUrl:"https://www.instagram.com/p/B03mYvUAA-O/embed/",
     sort: "BLACKPINK INSTAGRAM",
     title: "Tommy Brown With BLACKPINK, August 8, 2019",
     date: "AUGUST 8, 2019(KST)"
  },
    {
      mainUrl:"https://www.instagram.com/p/B0nK8nNHN43/embed/",
     sort: "BLACKPINK INSTAGRAM",
     title: "BLACKPINK OFFICIAL Instagram and Insta Story Update, August 1, 2019",
     date: "AUGUST 1, 2019(KST)"
    },
    {
      mainUrl:"https://www.instagram.com/p/B1MbzWcABhG/embed/",
      sort: "BLACKPINK INSTAGRAM",
     title: "Producer Tommy Brown Shared New Photos with BLACKPINK and Ariana Grande",
     date: "AUGUST 11, 2019(KST)"
    }

  ]
  
  @observable julyList = 
  [
    {date: "July 12, 13, 14",
     content: "BLACKPINK Encore Tour in Bangkok"},
    {date: "July 24",
     content: "Release Date of Ragnarok M Game New Server Starring BLACKPINK Lisa"}
  ]
  @observable augustList =
  [
    {date: "August 8",
     content: "BLACKPINK Anniversary and The Release Date of BLACKPINK 2018 Tour In Your Area Seoul DVD"},
    {date: "August 17",
     content: "BLACKPINK To Perform at a-nation 2019 Osaka, Japan"},
    {date: "August 18",
     content: "BLACKPINK To Perform at a-nation 2019 Osaka, Japan"},
    {date: "August 31",
     content: "Moonshot x Lisa Fan meeting in Bangkok Day 1"}
  ]
  @observable decemberList = 
  [
    {date: "December 4",
     content: "BLACKPINK Japan Dome Tour 2019-2020 – Tokyo"}
  ]

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