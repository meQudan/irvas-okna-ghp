"use strict";

function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  }
});
; // modals

var modal__measurment = document.querySelector('.modal__measurment');
var modal__measurmentClose = document.querySelector('.modal__measurment-close');
var modal__callback = document.querySelector('.modal__callback');
var modal__callbackClose = document.querySelector('.modal__callback-close');
var modal__costCalc = document.querySelector('.modal__cost-calc');
var modal__costCalcClose = document.querySelector('.modal__cost-calc-close'); // buttons

var header__callMeasurer = document.querySelector('.header__call-measurer');
var header__telCallback = document.querySelector('.header__tel-callback');
var screenQuastions__btn = document.querySelector('.screen-quastions__btn');
var coldBtn1 = document.querySelector('.coldBtn1');
var warmBtn1 = document.querySelector('.warmBtn1');
var coldBtn2 = document.querySelector('.coldBtn2');
var warmBtn2 = document.querySelector('.warmBtn2');
var coldBtn3 = document.querySelector('.coldBtn3');
var warmBtn3 = document.querySelector('.warmBtn3');
var coldBtn4 = document.querySelector('.coldBtn4');
var warmBtn4 = document.querySelector('.warmBtn4');
var coldBtn5 = document.querySelector('.coldBtn5');
var warmBtn5 = document.querySelector('.warmBtn5');

function allowScroll() {
  var oldClientWidth = document.documentElement.clientWidth;
  document.body.style.overflow = '';
  var newClientWidth = document.documentElement.clientWidth;
  changePadding(oldClientWidth, newClientWidth);
}

function preventScroll() {
  var oldClientWidth = document.documentElement.clientWidth;
  document.body.style.overflow = 'hidden';
  var newClientWidth = document.documentElement.clientWidth;
  changePadding(oldClientWidth, newClientWidth);
}

function changePadding(oldCW, newCW) {
  if (oldCW !== newCW) {
    var newPadding = (parseInt(document.body.style.paddingRight) || 0) + newCW - oldCW;
    document.body.style.paddingRight = newPadding + 'px';
  }
}

modal__measurmentClose.addEventListener('click', function (event) {
  allowScroll();
  modal__measurment.classList.remove('modal__is-open');
});
modal__callbackClose.addEventListener('click', function (event) {
  allowScroll();
  modal__callback.classList.remove('modal__is-open');
});
modal__costCalcClose.addEventListener('click', function (event) {
  allowScroll();
  modal__costCalc.classList.remove('modal__is-open');
}); // events

header__callMeasurer.addEventListener('click', function (event) {
  preventScroll();
  modal__measurment.classList.add('modal__is-open');
});
header__telCallback.addEventListener('click', function (event) {
  preventScroll();
  modal__callback.classList.add('modal__is-open');
});
screenQuastions__btn.addEventListener('click', function (event) {
  preventScroll();
  modal__callback.classList.add('modal__is-open');
});
coldBtn1.addEventListener('click', function (event) {
  preventScroll();
  modal__costCalc.classList.add('modal__is-open');
});
warmBtn1.addEventListener('click', function (event) {
  preventScroll();
  modal__costCalc.classList.add('modal__is-open');
});
coldBtn2.addEventListener('click', function (event) {
  preventScroll();
  modal__costCalc.classList.add('modal__is-open');
});
warmBtn2.addEventListener('click', function (event) {
  preventScroll();
  modal__costCalc.classList.add('modal__is-open');
});
coldBtn3.addEventListener('click', function (event) {
  preventScroll();
  modal__costCalc.classList.add('modal__is-open');
});
warmBtn3.addEventListener('click', function (event) {
  preventScroll();
  modal__costCalc.classList.add('modal__is-open');
});
coldBtn4.addEventListener('click', function (event) {
  preventScroll();
  modal__costCalc.classList.add('modal__is-open');
});
warmBtn4.addEventListener('click', function (event) {
  preventScroll();
  modal__costCalc.classList.add('modal__is-open');
});
coldBtn5.addEventListener('click', function (event) {
  preventScroll();
  modal__costCalc.classList.add('modal__is-open');
});
warmBtn5.addEventListener('click', function (event) {
  preventScroll();
  modal__costCalc.classList.add('modal__is-open');
});
;
window.addEventListener("DOMContentLoaded", function () {
  [].forEach.call(document.querySelectorAll(".feedback__tel"), function (input) {
    var keyCode;

    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___-__-__",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function (a) {
        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
      });
      i = new_value.indexOf("_");

      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i);
      }

      var reg = matrix.substr(0, this.value.length).replace(/_+/g, function (a) {
        return "\\d{1," + a.length + "}";
      }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5) this.value = "";
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
  });
});
$(".show-popup").magnificPopup({
  type: "inline",
  removalDelay: 500,
  //delay removal by X to allow out-animation
  callbacks: {
    beforeOpen: function beforeOpen() {
      this.st.mainClass = this.st.el.attr("data-effect");
    }
  },
  midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.

});