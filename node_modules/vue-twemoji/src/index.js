import twemoji from 'twemoji'
export default {
  install(Vue, option) {
    if(option){
      twemoji.base = option.baseUrl || twemoji.base;
      twemoji.ext = option.extension || twemoji.ext;
      twemoji.className = option.className || twemoji.className;
      twemoji.size = option.size || twemoji.size;
    }
    Vue.$twemoji = twemoji
    Object.defineProperties(Vue.prototype, {
      $twemoji: {
        get() {
          return twemoji;
        }
      }
    });
  }
};
