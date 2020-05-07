# [名前をつけて覚えて答えるゲーム v4.0](https://toshikisugiyama-images.netlify.com/)

> random_image_game v4.0

## Environment

- node 12.16.1
- nuxt 2.0.0
- vue 2.6.11
- typescript 3.7.5

## Features

- 画像をランダムに表示する
- 画像に名前をつける
- 2回以上表示された画像の名前が最初につけた名前と一致するか判定する
- 結果を表示する
- 画像表示回数を設定できる
- リセットボタンでリセットできる
- ダークモードとライトモードを切替できる
- プレイ回数の初期値は10
- プレイ回数設定値の最小値は3、最大値は100
- プレイ回数設定値が最小値を下回ると最小値、最大値を上回ると最大値に設定される
- つけられる名前の文字数の最小値は1、最大値は10

## Rule of this game

[ゲームの説明](https://toshikisugiyama-images.netlify.com/rule) をご覧ください

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
