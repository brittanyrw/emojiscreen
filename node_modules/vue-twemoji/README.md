# vue-twemoji

import twemoji to vue ref: https://github.com/twitter/twemoji

## How to install:

```
npm install --save vue-twemoji
```

And in your entry file:

```
import Vue from 'vue'
import vuetwemoji from 'vue-twemoji'

Vue.use(vuetwemoji, [config])
```

## config options

```
{
  baseUrl: '/assets/image/emoji/', //can set to local folder of emojis. default: https://twemoji.maxcdn.com/
  extension: '.png', //.svg, .png
  className: 'emoji', //custom className for image output
  size: '36x36' //image size
}
```

## Usage:

```
<template>
  <div v-html="outHtml"></div>
  <input type="text" v-model="text" @change="parseEmoji(text)" />
</template>
<script>
...
data(){
  return {
    text: 'I \u2764\uFE0F emoji!',
    outHtml: null
  }
},
methods:{
  parseEmoji: function (string) {
    let self = this
    this.outHtml = this.$twemoji.parse(string, function (emoji, options) {
      return options.base + emoji + options.extension
    })
  }
}
...
</script>
```
save as twemoji parse function
ref: https://github.com/twitter/twemoji#twemojiparse---v1
codepen example: https://codepen.io/psrilakkuma/pen/XzBVwV
