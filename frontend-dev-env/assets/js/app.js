// import 'babel-polyfill';
import Sample from './modules/sample';

class Hoge extends Sample {
  callName () {
    console.log(this.name);
  }
}

var hoge = new Hoge('fuga');
hoge.callName();
