/*
 * @license
 * Your First PWA Codelab (https://g.co/codelabs/pwa)
 * Copyright 2019 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License
 */
'use strict';
var vp = videojs('vid1', {
  autoplay: true,
  poster: "images/prev_BTB.webp",
  sources: [{
    type: "application/x-mpegURL",
    src: "https://btb2.tv.szkolnaxvii.tk/live/btb.m3u8"
  }]
});

var vids = [{
    type: "application/x-mpegURL",
    src: "https://btb2.tv.szkolnaxvii.tk/live/btb.m3u8"
  },
  {
    type: "application/x-mpegURL",
    src: "https://btb2.tv.szkolnaxvii.tk/live/btb2.m3u8"
  },
  {
    type: "application/x-mpegURL",
    src: "https://btb2.tv.szkolnaxvii.tk/live/btbi.m3u8"
  },
  {
    type: "application/x-mpegURL",
    src: "https://btb2.tv.szkolnaxvii.tk/live/btbmusic.m3u8"
  }  
];

var pstr = [
    "https://bombas.ml/BTB/images/prev_BTB.webp",
    "https://bombas.ml/BTB/images/prev_BTB2.webp",
    "https://bombas.ml/BTB/images/prev_BTBInfo.webp",
    "https://bombas.ml/BTB/images/prev_BTBMusic.webp" 
];

const exCalc = {
  selectedLocations: {},
  addDialogContainer: document.getElementById('addDialogContainer'),
  btnContainer: document.getElementById('btnContainer'),
  mainForm: document.getElementById('indexCountForm'),
  infoBox: document.getElementById('info'),
  wynikBox: document.getElementById('wynik_row'),
  kartonsBox: document.getElementById('kartony_row'),
  darkTheme: document.getElementById('butDark'),
  lightTheme: document.getElementById('butLight'),
  vp: vp,
  vids: vids,
  pstr: pstr,
  pch : function(n) { exCalc.vp.poster(exCalc.pstr[n]); exCalc.vp.src(exCalc.vids[n]); exCalc.vp.play(); },
  theme: Cookies.get('theme'),
};
/* Ciemny i jasny styl */

if (!exCalc.theme) {
  lightTheme();
}

if (exCalc.theme == "dark") {
  darkTheme();
}

exCalc.darkTheme.addEventListener('click', function() {
  /*setCookie("Theme", "dark", 3650);*/
  darkTheme();
});

//Set light
exCalc.lightTheme.addEventListener('click', function() {
  lightTheme();
});

/**
  * Dark theme
  */

  function lightTheme() {
    console.log("Jasna skórka");
    Cookies.set('theme', 'light', { expires: 999999 });
    exCalc.lightTheme.setAttribute('hidden', true);
    exCalc.darkTheme.removeAttribute('hidden');
    document.body.classList.remove("dark");
    document.querySelector('.header').classList.remove("dark");
    document.querySelector('.weather-card').classList.remove("dark");

    //Zmienne
    var formClass = document.getElementsByClassName('form-control');


    if (formClass) {
      for (let i = 0; i < formClass.length; i++) {
        formClass[i].classList.remove("dark");
      }
    }
  }

  function darkTheme() {
    console.log("Ciemna skórka");
    Cookies.set('theme', 'dark', { expires: 999999 });
    exCalc.darkTheme.setAttribute('hidden', true);
    exCalc.lightTheme.removeAttribute('hidden');
    document.body.classList.add("dark");
    document.querySelector('.header').classList.add("dark");
    document.querySelector('.weather-card').classList.add("dark");

    //Zmienne
    var formClass = document.getElementsByClassName('form-control');


    if (formClass) {
      for (let i = 0; i < formClass.length; i++) {
        formClass[i].classList.add("dark");
      }
    }

  }

/**
 * Initialize the app, gets the list of locations from local storage, then
 * renders the initial data.
 */



function init() {

}

init();
