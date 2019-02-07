// import 'babel-polyfill';
import "./assets/sass/style.scss";
import Sample from "./assets/js/modules/sample";

class Hoge extends Sample {
  callName() {
    console.log(this.name);
  }
}

var hoge = new Hoge("fuga");
hoge.callName();
