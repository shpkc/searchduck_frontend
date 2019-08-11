import { observable, action } from 'mobx';

export default class CounterStore {
  @observable number = 0;
  @observable total = 0;

  @action increase = (price) => {
    this.number++;
    this.total += price
  }
  @action total = () => {
    
  }

  @action decrease = () => {
    this.number--;
  }
}