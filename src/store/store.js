import { observable, action, toJS  } from 'mobx';
import axios from 'axios';

export default class Store {
  @observable number = 1;
  @observable total = 0;
  @observable infoList = []
  @observable rate = 0;
  @observable defaultPage = [1,2,3]
  @observable currentPage = 1
  @observable showList = []

  @observable contentList = [
    { mainUrl: "https://www.instagram.com/p/B1SUAHanaEV/embed/",
      img: "https://scontent-icn1-1.cdninstagram.com/vp/1dca2f95f673d971933acc100ac976f0/5D5CF5D1/t51.2885-15/sh0.08/e35/s640x640/68716523_169799200849312_6206934298002237179_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com",
      sort: "BLACKPINK INSTAGRAM",
     title: "BLACKPINK LISA Instagram and Insta Story Update, August 11, 2019",
     date: "AUGUST 11, 2019(KST)"
    },
    {mainUrl: "https://www.instagram.com/p/B1IjEw1H985/embed/",
    img:"https://scontent-icn1-1.cdninstagram.com/vp/1eabdcbc2400c8250c2c2e04a3b979b6/5DE12756/t51.2885-15/sh0.08/e35/s640x640/67694111_497277131039222_3389891060817814560_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com",
     sort: "BLACKPINK INSTAGRAM",
     title: "BLACKPINK LISA Instagram and Insta Story Update, August 10, 2019",
     date: "AUGUST 10, 2019(KST)"
    },
    {
      mainUrl:"https://www.instagram.com/p/B05oxwlHNyd/embed/",
      img:"https://scontent-icn1-1.cdninstagram.com/vp/2e9f32750f366d4729866747d5d23f54/5DE2EAFA/t51.2885-15/sh0.08/e35/s640x640/66712833_506699293437338_8065977460078470423_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com",
     sort: "BLACKPINK INSTAGRAM",
     title: "Tommy Brown With BLACKPINK, August 8, 2019",
     date: "AUGUST 8, 2019(KST)"
  },
    {
      mainUrl:"https://www.instagram.com/p/B03fRRdn4yc/embed/",
      img:"https://scontent-icn1-1.cdninstagram.com/vp/295c3c54d78fae03e0082143369061ec/5DF3AD7A/t51.2885-15/sh0.08/e35/s640x640/66817405_414673102509006_5311341169558915407_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com",
     sort: "BLACKPINK INSTAGRAM",
     title: "BLACKPINK OFFICIAL Instagram and Insta Story Update, August 1, 2019",
     date: "AUGUST 1, 2019(KST)"
    },
    {
      mainUrl:"https://www.instagram.com/p/B0nK8nNHN43/embed/",
      img:"https://scontent-icn1-1.cdninstagram.com/vp/6bd1d7a4061f519a1162f25b805c9437/5DDB5DB9/t51.2885-15/sh0.08/e35/s640x640/67510564_484806398997359_2843665288670361208_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com",
      sort: "BLACKPINK INSTAGRAM",
     title: "Producer Tommy Brown Shared New Photos with BLACKPINK and Ariana Grande",
     date: "AUGUST 11, 2019(KST)"
    },
    {
      mainUrl:"https://www.instagram.com/p/BxTnP8vn1H3/embed/",
      img:"https://scontent-icn1-1.cdninstagram.com/vp/c404b8e00542633038a4c0c20e32668a/5DD87298/t51.2885-15/sh0.08/e35/s640x640/58408977_456625678442317_1578105146690898681_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com",
      sort: "BLACKPINK INSTAGRAM",
     title: "Producer Tommy Brown Shared New Photos with BLACKPINK and Ariana Grande",
     date: "AUGUST 11, 2019(KST)"
    },
    {
    mainUrl:"https://www.instagram.com/p/BxUFUKUnzIx/embed/",
      img:"https://scontent-icn1-1.cdninstagram.com/vp/09ab33288bfbc90048946fe982e6779b/5DDDA851/t51.2885-15/sh0.08/e35/s640x640/58409852_440201470127244_3198878444359669683_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com",
      sort: "BLACKPINK INSTAGRAM",
     title: "Producer Tommy Brown Shared New Photos with BLACKPINK and Ariana Grande",
     date: "AUGUST 11, 2019(KST)"
  },
  {
    mainUrl:"https://www.instagram.com/p/BxyqYMqHu3/embed/",
      img:"https://scontent-icn1-1.cdninstagram.com/vp/4b28d32f3eb36f9619f13ceefc9f7b43/5E1371C1/t51.2885-15/sh0.08/e35/s640x640/60006168_444703222990391_1211824016050930931_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com",
      sort: "BLACKPINK INSTAGRAM",
     title: "Producer Tommy Brown Shared New Photos with BLACKPINK and Ariana Grande",
     date: "AUGUST 11, 2019(KST)"
  },
  {
    mainUrl:"https://www.instagram.com/p/Bx3J7oenTtB/embed/",
    img:"https://scontent-icn1-1.cdninstagram.com/vp/170092be7711b14c68269e9d8f23ddac/5D5DF163/t51.2885-15/sh0.08/e35/s640x640/59874101_1094273004101370_7967483152494676986_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com",
    sort: "BLACKPINK INSTAGRAM",
    title: "Producer Tommy Brown Shared New Photos with BLACKPINK and Ariana Grande",
    date: "AUGUST 11, 2019(KST)"},
    {
    mainUrl:"https://www.instagram.com/p/Bxym3cGHLwA/embed/",
    img:"https://scontent-icn1-1.cdninstagram.com/vp/8edbccf8ff2bc82888611f0f9b7c77a9/5D5DDB17/t51.2885-15/sh0.08/e35/s640x640/59449246_481797315693108_2947998295386422608_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com",
    sort: "BLACKPINK INSTAGRAM",
    title: "Producer Tommy Brown Shared New Photos with BLACKPINK and Ariana Grande",
    date: "AUGUST 11, 2019(KST)"}
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

  @action changeContentList = (index) => {
    this.showList = this.contentList.slice(5 * (index-1) , 5 * index)
  }

  @action pageChange = (page) => {
    this.currentPage = page;
    if(this.currentPage <= 2){
      this.defaultPage = [1,2,3]
    }else if(this.currentPage >= 10){
      this.defaultPage = [1,8,9,10]
    }
    else{
      this.defaultPage = [1, this.currentPage-1, this.currentPage, this.currentPage+1]
    }
  }

  @action increase = (price) => {
    this.number++;
    this.total += price
  }
  

  @action redditApi = () => {

    return axios.get("https://www.reddit.com/r/BlackPink/rising.json")
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

  @action getApi = async() => {
    const temp = await this.redditApi();
    this.setInfo(temp)
    
  }

  @action setInfo = (info) => {this.infoList = info}
  
  @action setRate = (rate) => {this.rate = rate}
}