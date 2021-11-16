﻿var $ = function (id) {
  return document.getElementById(id);
};

/**
 * Array.prototype.indexOf()
 * Added to the ECMA-262 standard in the 5th edition may not work in all browsers.
 * You can work around this by utilizing the following code at the beginning of your scripts.
 * This will allow you to use indexOf() when there is still no native support.
 * This algorithm matches the one specified in ECMA-262, 5th edition, assuming TypeError and Math.abs() have their original values.
 * This version tries to optimize by only checking for "in" when looking for undefined and
 * skipping the definitely fruitless NaN search. Other parts are merely cosmetic conciseness.
*/
if (!Array.prototype.indexOf)
  Array.prototype.indexOf = (function(Object, max, min) {
    'use strict'
    return function indexOf(member, fromIndex) {
      if (this === null || this === undefined)
        throw TypeError('Array.prototype.indexOf called on null or undefined')

      var that = Object(this), Len = that.length >>> 0, i = min(fromIndex | 0, Len)
      if (i < 0) i = max(0, Len + i)
      else if (i >= Len) return -1

      if (member === void 0) {// undefined
        for (; i !== Len; ++i) if (that[i] === void 0 && i in that) return i
      } else if (member !== member) {// NaN
        return -1// Since NaN !== NaN, it will never be found. Fast-path it.
      } else// All else
        for (; i !== Len; ++i) if (that[i] === member) return i 

      return -1// If the value was not found, then return -1
    }
  })(Object, Math.max, Math.min);

var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
var isFirefox = /firefox/i.test(navigator.userAgent);
var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
var isMobile = false;
// Device Detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
  isMobile = true;
}
var isPhone = false;
if (/mobile/i.test(navigator.userAgent) && !/ipad|tablet/i.test(navigator.userAgent)) {
  isPhone = true;
}

if (isPhone) navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

new ResizeObserver(unFloat).observe($('lst-stack'));
new ResizeObserver(unFloat).observe($('lst-notes'));
// $('main').onresize = unFloat;
if (!isPhone) window.onresize = resizeTextareas;

var Φ = 1.618033988749895;
var ℮ = Math.exp(1);
var π = Math.PI;
var ɢ = 6.674e-11;
var ⅽ = 299792458;
var inversed = '';
var tStamp = '10:04:34';
var testing = false;

var stack = [];
var backups = [];
var restores = [];
var stackSize = 99;
var stackFocus = false;
var shifted = false;
var altHeld = false;
var ctrlHeld = false;
var fixDecimal = -1;
var sciDecimal = -1;
var radix = 10;

function NumberObject(soul, realPart, imaginary, units) {

  this.soul = soul;
  this.realPart = realPart;
  this.imaginary = imaginary;
  this.units = units;
}
NumberObject.prototype.setSoul = function (s) {
  this.soul = s;
};
NumberObject.prototype.getSoul = function () {
  return this.soul;
};
NumberObject.prototype.setRealPart = function (r) {
  this.realPart = r;
};
NumberObject.prototype.getRealPart = function () {
  return this.realPart;
};
NumberObject.prototype.setImaginary = function (i) {
  this.imaginary = i;
};
NumberObject.prototype.getImaginary = function () {
  return this.imaginary;
};
NumberObject.prototype.setUnits = function (u) {
  this.units = u;
};
NumberObject.prototype.getUnits = function () {
  return this.units;
};
NumberObject.prototype.toString = function () {
  return this.soul + ', ' + this.realPart + ', ' + this.imaginary + ', ' + this.units;
};

function resetPhi() {
  Φ = 1.618033988749895;
}

function resetEulers() {
  ℮ = Math.exp(1);
}

function resetPi(){
  π = Math.PI
}

function resetGravitational() {
  ɢ = 6.674e-11;
}

function resetLightspeed() {
  ⅽ = 299792458;
}

function resizeTextareas() {
  resizeTextarea($('lst-stack'));
  resizeTextarea($('lst-notes'));
  if ($('lst-notes').offsetHeight === 0) $('lst-notes').classList.add('resizable');
  if ($('lst-stack').offsetHeight === 0) $('lst-stack').classList.add('resizable');
}

function resizeTextarea(textarea) {
  var winSize = getSize();  
  var textareaHeight = textarea.offsetHeight;
  var bodyHeight = document.getElementsByTagName('body')[0].offsetHeight;
  
  if (textareaHeight > 0) {
    textarea.style.height = (winSize[1] + textareaHeight - bodyHeight) + 'px';    
    textarea.classList.remove('resizable');
  }
}

function unFloat() {
  var wrapWidth = $('wrap').clientWidth;
  var winSize = getSize();  
  var lstWidth = $('rpnapes').classList.contains('hidden') ? $('lst-notes').clientWidth : $('lst-stack').clientWidth;
  var margin = 30;

  if (lstWidth > wrapWidth) {
    $('wrap').style.marginLeft = ((winSize[0]  - lstWidth) / winSize[0]) * 50 + '%';
  } else {
    $('wrap').style.marginLeft = 'auto';
  }
  if (winSize[0] < lstWidth + margin) {
    $('rpnapes').classList.contains('hidden') ? $('lst-notes').style.width = winSize[0] - margin + 'px' : $('lst-stack').style.width = winSize[0] - margin + 'px';
  }
  if ($('notes').classList.contains('hidden')) worldBordersSet();
}

function toggleDarkMode() {  
  var body = document.getElementsByTagName('body');
  var smBtns = document.getElementsByClassName('btn-small');
  var medBtns = document.getElementsByClassName('btn-med');
  var bgBtns = document.getElementsByClassName('btn-big');
  var others = document.getElementsByClassName('btn-other');
  var options = document.getElementsByTagName('option');
  
  if ($('menu-darkmode').textContent === 'Light') {
    $('menu-darkmode').innerHTML = 'Dark';
    $('wrap').classList.remove('dark-mode');
    $('wrap').style.borderStyle = 'outset';
    $('tricorderskin').classList.remove('dark-mode');
    $('widget').classList.remove('dark-mode');
    $('viewport').classList.remove('dark-mode');
    body[0].style.backgroundColor = '#C4C6B1';
    for (var e = 0; e < smBtns.length; e++) smBtns[e].classList.remove('dark-button');
    for (e = 0; e < medBtns.length; e++) medBtns[e].classList.remove('dark-button');
    for (e = 0; e < bgBtns.length; e++) bgBtns[e].classList.remove('dark-button');
    for (e = 0; e < others.length; e++) others[e].classList.remove('dark-button');
    for (e = 0; e < options.length; e++) options[e].classList.remove('dark-menu');
  } else {
    $('menu-darkmode').innerHTML = 'Light';        
    $('wrap').classList.add('dark-mode');   
    $('wrap').style.borderStyle = 'inset';
    $('tricorderskin').classList.add('dark-mode');
    $('widget').classList.add('dark-mode');
    $('viewport').classList.add('dark-mode');
    body[0].style.backgroundColor = '#3B394E';
    for (e = 0; e < smBtns.length; e++) smBtns[e].classList.add('dark-button');
    for (e = 0; e < medBtns.length; e++) medBtns[e].classList.add('dark-button');
    for (e = 0; e < bgBtns.length; e++) bgBtns[e].classList.add('dark-button');
    for (e = 0; e < others.length; e++) others[e].classList.add('dark-button');
    for (e = 0; e < options.length; e++) options[e].classList.add('dark-menu');
  }
}

function toggleHaptic() {
  if ($('menu-haptic-li').classList.contains('strikethrough')) {
    $('menu-haptic-li').classList.remove('strikethrough');
  } else {
    $('menu-haptic-li').className += ' strikethrough';
  }
  $('txt-input').focus();
}

function hapticResponse() {
  if (isMobile) {
    haptic();
    $('txt-input').readOnly = true;
  }
}

function haptic() {
  if (!$('menu-haptic-li').classList.contains('strikethrough')) navigator.vibrate([1]);
}

function toggleKeyboard() {
  if ($('menu-keyboard-li').classList.contains('strikethrough')) {
    $('menu-keyboard-li').classList.remove('strikethrough');
  } else {
    $('menu-keyboard-li').className += ' strikethrough';
  }
  $('txt-input').focus();
}

function mobileKeyboardAllow() {
  if(!$('menu-keyboard-li').classList.contains('strikethrough')) {
    if ($('txt-input').readOnly === true) {
      moveCursorToEnd($('txt-input'));
      $('txt-input').readOnly = false;
    }
  }
}

function toggleSound() {
  if ($('menu-sound-li').classList.contains('strikethrough')) {
    $('menu-sound-li').classList.remove('strikethrough');
  } else {
    $('menu-sound-li').classList.add('strikethrough');
  }
}

//////// Buttons /////////////////////////////////////////////////////////////////////

function btnXoff() {

  if ($('rpnapes').classList.contains('hidden')) {
    // Notes is visible - turn on RPNapes
    rpnapesOn();
  } else if ($('notes').classList.contains('hidden') && $('tricorder').classList.contains('hidden')) {
    // RPNapes is visible - turn on Notes
    notesOn();
  }
}

function rpnapesOn() {
  $('notes').classList.remove('visible');
  $('notes').classList.add('hidden');
  $('wrap').classList.remove('tricorder-background');
  $('widget').classList.remove('visible');
  $('widget').classList.add('hidden');
  $('viewport').classList.remove('visible');
  $('viewport').classList.add('hidden');
  $('tricorder').classList.remove('visible');
  $('tricorder').classList.add('hidden');
  if (power()) playAudio($('keypress3'));
  $('rpnapes').classList.remove('hidden');
  $('rpnapes').classList.add('visible');
  if ($('lst-stack').classList.contains('resizable')) {
    $('lst-stack').classList.remove('resizable');
    resizeTextarea($('lst-stack'));
  }
  $('txt-input').focus();
}

function notesOn() {
  $('rpnapes').classList.remove('visible');
  $('rpnapes').classList.add('hidden');
  monOff();
  $('wrap').classList.remove('tricorder-background');
  $('widget').classList.remove('visible');
  $('widget').classList.add('hidden');
  $('viewport').classList.remove('visible');
  $('viewport').classList.add('hidden');
  $('tricorder').classList.remove('visible');
  $('tricorder').classList.add('hidden');
  if (power()) playAudio($('keypress3'));
  $('notes').classList.remove('hidden');
  $('notes').classList.add('visible');
  if ($('lst-notes').classList.contains('resizable')) {
    $('lst-notes').classList.remove('resizable');
    resizeTextarea($('lst-notes'));
  }
  if (!isPhone) $('lst-notes').focus();
}

function showTricorder() {  
  $('rpnapes').classList.remove('visible');
  $('rpnapes').classList.add('hidden');
  monOff();
  $('notes').classList.remove('visible');
  $('notes').classList.add('hidden');
  if (power()) playAudio($('tricorder-alert'));
  $('wrap').classList.add('tricorder-background');
  $('tricorder').classList.remove('hidden');
  $('tricorder').classList.add('visible');
  $('viewport').classList.remove('hidden');
  $('viewport').classList.add('visible');
}

function btnCopy() {
  if (shifted) {
    btnPaste();
  } else {
    copy();
  }  
}

function copy() {
  if (!stackFocus && !isTextSelected($('txt-input'))) $('txt-input').select();

  if (!stackFocus) {
    navigator.clipboard.writeText(getSelectedText('txt-input'));    
  } else {
    navigator.clipboard.writeText(getSelectedText('lst-stack'));
  }
}
  
function btnPaste() {
  // Firefox only supports reading clipboard in browser extensions
  // using the "clipboardRead" extension permission :(
  backupUndo();    
  if (stackFocus) {
    insertAtCursor($('txt-input'), getSelectedText('lst-stack'));
  } else {
    if (navigator.clipboard.readText) {
      var copiedText = navigator.clipboard.readText();
      copiedText.then(copiedText => {
        insertAtCursor($('txt-input'), copiedText);
      });
    } else {
      rpnAlert('Not supported by browser.');
    }
  }
}

function btnXy() {
  if (shifted) {
    abFunction();
  } else {
    xyFunction();
  }
}

function abFunction() {
  if (stack.length > 1) {
    backupUndo();
    var tmp = stack.pop();
    var tmp2 = stack.pop();
    stack.push(tmp);
    stack.push(tmp2);
    updateDisplay();
  }
  $('txt-input').focus();
}

function xyFunction() {
  if (stack.length > 0) {
    backupUndo();
    var tmpX = stack.pop();
    enterInput();
    $('txt-input').value = '';

    if (isNaN(parseFloat(tmpX.getRealPart()))) {
      $('txt-input').value += decodeSpecialChar(tmpX.getSoul());
    } else {
      $('txt-input').value += formatNumber(tmpX.getRealPart().toString());

      if (!isNaN(parseFloat(tmpX.getImaginary()))) {
        if (parseFloat(tmpX.getImaginary()) > 0) {
          $('txt-input').value += ' + ' + formatNumber(tmpX.getImaginary().toString()) + 'j';
        } else {
          $('txt-input').value += ' - ' + formatNumber(tmpX.getImaginary().toString().substring(1)) + 'j';
        }
      }
      if (tmpX.getUnits() !== 'null') {
        $('txt-input').value += ' ' + decodeSpecialChar(tmpX.getUnits());
      }
    }
    updateDisplay();
  }
  $('txt-input').focus();
}

function runProgram() {
  btnShift();
  btnLoad();
}

function enterButton() {
  if (shifted) {
    btnEval();
  } else {
    btnEnter();
  }
}

function btnEnter() {
  backupUndo();  
  if (stackFocus) {
    insertAtCursor($('txt-input'), getSelectedText('lst-stack'));
  } else {
    enterInput();
  }
  updateDisplay();
  parseCommand();
}

function btnEval() {
  backupUndo();
  var objX;

  if (stackFocus) insertAtCursor($('txt-input'), getSelectedText('lst-stack'));
  objX  = getX();

  if (objX.getSoul().match(/^run$/)) {
    runProgram();
    return;
  }
  $('txt-input').value = calculate($('txt-input').value.replace(/(?![eE][-+]?[0-9]+)(?![j]\b) (?:[1][/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9/]*$/, ''));
  if (objX.getUnits() !== 'null') $('txt-input').value += ' ' + decodeSpecialChar(objX.getUnits());
  $('txt-input').select();    
}

function getX() {
  var soulX = $('txt-input').value.trim();
  var realPartX = extractReal(soulX);
  var imaginaryX = extractImaginary(soulX);
  var unitsX;
  realPartX || imaginaryX ? unitsX = extractUnits(soulX) : unitsX = 'null';  
  soulX = encodeSpecialChar(soulX);
  unitsX = encodeSpecialChar(unitsX);
  return new NumberObject(soulX, realPartX, imaginaryX, unitsX);
}

function enterInput() {
  var objX = getX();
  stack.push(objX);
  $('txt-input').value = $('txt-input').value.trim();  
}

function calculate(x) {
  try {
    x = eval(parseEvaluation(x));
  } catch(e) {
    return e.toString();
  }
  return x;
}

function runTest() {  
  try {
    if (stack.length > 0 && stack.length % 2 === 0) {
      var y = decodeSpecialChar(stack[stack.length - 2].getSoul());
      var x = stack[stack.length - 1].getSoul()
      var color = calculate(y).toString() === x ? 'green' : 'red';      
      console.log(`${y} %c${calculate(y).toString() === x}`, `font-weight: bold; color: ${color};`);   
    }
  } catch(e) {
    console.log(`%c${stack[stack.length - 2].soul, e.toString()}`, 'font-weight: bold; color: red;');
  }  
}

function evaluateExpression(input) {   
  $('txt-input').value = calculate(input);  
  if (testing) runTest();
}

function deleteButton() {
  if (shifted) {
    btnBackspace();
  } else {
    btnDelete();
  }
}

function btnDelete() {
  if (stack.toString() !== '') backupUndo();
  $('txt-input').value = $('txt-input').value.trim();

  if (stackFocus) {
    deleteFromStack();
    updateDisplay();
  } else if ($('txt-input').value !== '' && $('txt-input').value.length === $('txt-input').selectionEnd) {
    $('txt-input').value = '';
    $('txt-input').focus();
  } else if ($('txt-input').value === '') {
    stack.pop();
    updateDisplay();
  } else {
    deleteText($('txt-input'), true);
  }
  if (elapsedTime > 0) stopwatchReset();
}

function deleteFromStack() {
  var stackIndex = getIndex('lst-stack') - stackSize;
  stack.splice(stackIndex, 1);
}

function btnBackspace() {
  if (stack.toString() !== '') backupUndo();

  if (stackFocus) {
    deleteFromStack();
    updateDisplay();
  } else if ($('txt-input').value === '') {
    stack.pop();
    updateDisplay();
  } else {
    deleteText($('txt-input'), false);
  }
}

function deleteText(txtField, forward) {
  var startPos = txtField.selectionStart;
  var endPos = txtField.selectionEnd;
  
  if (txtField.selectionStart === txtField.selectionEnd && forward) endPos++;
  if (txtField.selectionStart === txtField.selectionEnd && !forward ) startPos--;

  txtField.value = txtField.value.substring(0, startPos) + txtField.value.substring(endPos, txtField.value.length);

  txtField.selectionStart = startPos;
  txtField.selectionEnd = startPos;
  $('txt-input').focus();
}

function btnUndo() {
  if (shifted) {
    redoFunction();
  } else {
    undoFunction();
  }
}

function colorUndoButton() {
  if (($('btn-undo').value === 'UND' && backups.length > 3) || ($('btn-undo').value === 'REDO' && restores.length > 0)) {
    $('btn-undo').style.color = '#25FC5A';
  } else {
    $('btn-undo').style.color = '#D4D0C8';
  }        
  colorUndoRedoMenu();
}

function colorUndoRedoMenu() {
  if (backups.length > 3) {
    $('menu-undo').style.color = '#088B00';
  } else {
    $('menu-undo').style.color = '#D4D0C8';
  }
  if (restores.length > 0) {
    $('menu-redo').style.color = '#088B00';
  } else {
    $('menu-redo').style.color = '#D4D0C8';
  }
}

function undoFunction() {

  if (backups.length > 3) {    
    restores.push(nestArrayByBrowser(stack));
    restores.push($('txt-input').value);
    $('txt-input').value = backups.pop();    
    var tmpArray = backups.pop();
    stack.length = 0;
    tmpArray = splitArrayByBrowser(tmpArray);

    var i = 1;
    while (i < tmpArray.length) {
      pushObjectToStack(tmpArray[i]);
      i++;
    }
    updateDisplay();
  }
  colorUndoButton();
}

function redoFunction() {

  if (restores.length > 0) {
    backups.push(nestArrayByBrowser(stack));
    backups.push($('txt-input').value);
    $('txt-input').value = restores.pop();
    var tmpArray = restores.pop();
    stack.length = 0;
    tmpArray = splitArrayByBrowser(tmpArray);

    var i = 1;
    while (i < tmpArray.length) {
      pushObjectToStack(tmpArray[i]);
      i++;
    }
    updateDisplay();
  }
  colorUndoButton();
}

function backupUndo() {
  backups.push(nestArrayByBrowser(stack));
  backups.push($('txt-input').value.trim());
  restores.length = 0;
  colorUndoButton();  
}

function btnEe() {
  var input = $('txt-input').value;
  if (shifted) {
    if (/Infinity|[ⅽ℮ɢΦπ0-9]$/.test(input) && !/j/g.test(input)) insertAtCursor($('txt-input'), 'j');
  } else {
    if (/[0-9]$/.test(input) && !/[0-9]e[0-9]$/.test(input)) insertAtCursor($('txt-input'), 'e');
  }
  $('txt-input').focus();
}

function searchDuckDuckGo() {
  if (stackFocus) $('txt-input').value = getSelectedText('lst-stack');
  var query = $('txt-input').value.trim();
  var domainString = 'https://duckduckgo.com/?q=';

  if (query) {    
    domainString += query;
    window.open(domainString, '_blank');    
  } else {
    window.open('https://duckduckgo.com/');
  }
}

function searchGoogle() {
  if (stackFocus) $('txt-input').value = getSelectedText('lst-stack');
  var query = $('txt-input').value.trim();
  var domainString = 'https://www.google.com/search?q=';

  if (/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(query) || /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/.test(query)) query = 'https://' + query;

  if (query) {
    if (/^http[s]?:\/\//.test(query)) {
      window.open(query);
    } else {
      domainString += query;
      window.open(domainString, '_blank');
    }
  } else {
    window.open('https://www.google.com/');
  }
}

function searchWikipedia() {
  if (stackFocus) $('txt-input').value = getSelectedText('lst-stack');
  var query = $('txt-input').value.trim();
  var domainString = 'https://en.wikipedia.org/w/index.php?search=';

  if (query) {    
    domainString += query;
    window.open(domainString, '_blank');    
  } else {
    window.open('https://en.wikipedia.org/');
  }
}

function searchYouTube() {
  if (stackFocus) $('txt-input').value = getSelectedText('lst-stack');
  var query = $('txt-input').value.trim();
  var domainString = 'https://www.youtube.com/results?search_query=';

  if (query) {    
    domainString += query;
    window.open(domainString, '_blank');    
  } else {
    window.open('https://www.youtube.com/');
  }
}

function btnGo() {  
  if (shifted) {
    searchYouTube();
  } else {
    searchGoogle();
  }  
  $('txt-input').select();
}

function btnShift() {
  if (shifted) {
    // Shifting to false...
    shifted = false;
    $('menu-open').innerHTML = 'Open';
    $('open').setAttribute('title', 'Open a file');
    $('menu-load').innerHTML = 'Load';
    $('menu-load').setAttribute('title', 'Load stack');
    $('menu-sine').innerHTML = 'sin';
    $('menu-cosine').innerHTML = 'cos';
    $('menu-tangent').innerHTML = 'tan'
    $('btn-copy').value = 'COPY';
    $('btn-copy').style.color = '#000000';
    $('btn-xy').value = 'x < > y';
    $('btn-enter').classList.remove('btn-big-font');
    $('btn-enter').value = 'ENTER';
    $('btn-delete').innerHTML = 'DEL';
    $('btn-inverse').value = '1 / x';
    $('btn-log').innerHTML = 'log<sub>e</sub>';
    $('btn-root').innerHTML = 'y&nbsp;<sup>x</sup>';
    $('btn-undo').value = 'UND';
    $('btn-ee').classList.add('btn-small-font');
    $('btn-ee').value = 'EE';
    $('btn-pi').innerHTML = '&#120587;';
    $('btn-modulus').style.color = '#000000';
    $('btn-modulus').value = '%';
    $('btn-sign').style.color = '#000000';
    $('btn-sign').innerHTML = '±';
    $('btn-go').classList.remove('you-tube');
    $('btn-go').classList.add('google');
    $('btn-go').innerHTML = '<span class="color-blue">G</span><span class="color-red">o</span>';
    $('btn-shift').className = 'btn-med btn-shift';
    $('btn-divide').style.color = '#000000';
    $('btn-divide').value = '÷';
    $('btn-multiply').style.color = '#000000';
    $('btn-multiply').innerHTML = 'x';
    $('btn-sine').innerHTML = 'sin';
    $('btn-subtract').style.color = '#000000';
    $('btn-cosine').innerHTML = 'cos';
    $('btn-load').value = 'LOA';
    $('btn-space').value = '';
    $('btn-add').style.color = '#000000';
    $('btn-tangent').innerHTML = 'tan';
  }
  else {
    // Shifting to true...
    shifted = true;
    $('menu-open').innerHTML = 'RunFile';
    $('open').setAttribute('title', 'Run JS file');
    $('menu-load').innerHTML = 'Run';
    $('menu-load').setAttribute('title', 'Run stack');
    $('menu-sine').innerHTML = '<span class="btn-small-font">sin<sup>-1</sup></span>';
    $('menu-cosine').innerHTML = '<span class="btn-small-font">cos<sup>-1</sup></span>';
    $('menu-tangent').innerHTML = '<span class="btn-small-font">tan<sup>-1</sup></span>';
    $('btn-copy').value = 'PASTE';
    if (isFirefox) $('btn-copy').style.color = '#808080';
    $('btn-xy').value = 'a < > b';
    $('btn-enter').classList.add('btn-big-font');
    $('btn-enter').value = '=';
    $('btn-delete').innerHTML = '<span class="btn-backspace">⌫</span>';
    $('btn-inverse').value = 'x !';
    $('btn-log').innerHTML = 'log<sub>x</sub>y';
    $('btn-root').innerHTML = '<sup>x</sup>&nbsp;&#8730;¯y';    
    $('btn-undo').value = 'REDO';
    $('btn-ee').classList.remove('btn-small-font');
    $('btn-ee').value = 'j';
    $('btn-pi').innerHTML = '(  )';
    $('btn-modulus').style.color = '#0000A0';
    $('btn-modulus').value = '√¯';
    $('btn-sign').style.color = '#0000A0';
    $('btn-sign').innerHTML = '<sub class="symbol-big">^</sub>';
    $('btn-go').classList.remove('google');
    $('btn-go').classList.add('you-tube');
    $('btn-go').innerHTML = '&#9654';
    $('btn-shift').className = 'btn-med btn-shifted';
    $('btn-divide').style.color = '#0000A0';
    $('btn-divide').value = '/';
    $('btn-multiply').style.color = '#0000A0';
    $('btn-multiply').innerHTML = '<sub class="symbol-big">*</sub>';
    $('btn-sine').innerHTML = '<span class="btn-small-font">sin<sup>-1</sup></span>'
    $('btn-subtract').style.color = '#0000A0';
    $('btn-cosine').innerHTML = '<span class="btn-small-font">cos<sup>-1</sup></span>';
    $('btn-load').value = 'RUN';
    $('btn-space').value = '=';
    $('btn-add').style.color = '#0000A0';
    $('btn-tangent').innerHTML = '<span class="btn-small-font">tan<sup>-1</sup></span>';    
  }
  colorUndoButton();
  
  if (stackFocus) {
    $('lst-stack').focus();
  } else {
    $('txt-input').focus();
  }
}

function btnClear() {
  if (stack.toString() !== '') backupUndo();
  monOff();
  $('txt-input').value = '';
  $('lst-stack').value = '';
  stack.length = 0;
  colorSaveButton();
  $('txt-input').focus();
}

function btnSave() {
  $('btn-save').style.color = '#D4D0C8';
  storeCookie('STACK', nestArrayByBrowser(stack));
  storeCookie('MATHMON', nestArrayByBrowser(theObjects));
  $('txt-input').focus();
}

function nestArrayByBrowser(srcArray) {
  var newArray = '';

  if ((/*@cc_on!@*/false || !!document.documentMode) || isChrome || isSafari) {
    for (var chro in srcArray) {
      newArray += '_';
      newArray += srcArray[chro];
    }
  } else {
    // Firefox
    for (var fire in srcArray) {
      newArray += '\t';
      newArray += srcArray[fire];
    }
  }
  return newArray;
}

function saveFile(fileName, pretty) {
  var myBlob;
  var blobContent = '';

  fileName = decodeSpecialChar(fileName.toString());

  if (fileName.trim() === '') {
    fileName = 'untitled';
  }
  if (stack.length > 0 || notes.length > 1) {
    blobContent += '===== Stack =====\n\n';
    for (var sta in stack) {
      if (pretty) {
        blobContent = prettyPrint(sta, blobContent);
      } else {
        blobContent += decodeSpecialChar(stack[sta].toString());
      }      
      blobContent += '\n';
    }
    blobContent += '\n===== Notes ======\n\n';
    for (var note in notes) {
      blobContent += decodeSpecialChar(notes[note]);
      blobContent += '\n';
    }
    myBlob = new Blob([blobContent], { type: 'text/plain;charset=utf-8' });
    fileName += '.txt';
    saveAs(myBlob, fileName);
  } else {
    rpnAlert('Error: There is no data to save.');
  }
}

function btnLoad() {  
  var index = 0;

  try { 
    $('btn-save').style.color = '#D4D0C8';        
    index = getCookie('STACK').indexOf('=') + 1;
    if (getCookie('STACK').substr(index) !== '') {
      loadStack(getCookie('STACK').substr(index));
    } else {
      backupUndo();
    } 
  } catch (err) { rpnAlert('load Stack error.'); }
  try {
    index = getCookie('MATHMON').indexOf('=') + 1;
    loadMathMon(getCookie('MATHMON').substr(index));
  } catch(err) { rpnAlert('load MathMon error'); }
  updateDisplay();
}

function loadStack(tmpStack) {
  var prevStack = nestArrayByBrowser(stack);
  if (prevStack !== tmpStack || shifted) backupUndo();
  stack = [];

  if ((/*@cc_on!@*/false || !!document.documentMode) || isChrome || isSafari) {
    // Remove underscore from begining of string
    tmpStack = tmpStack.substr(1);
  }
  tmpStack = splitArrayByBrowser(tmpStack);
    
  while (tmpStack.length > 0) {
    var tmpArray = [];
    tmpArray = tmpStack.shift();
    pushObjectToStack(tmpArray);    
    if (shifted) evaluateExpression(decodeSpecialChar(stack[stack.length - 1].soul));
  }    
}

function splitArrayByBrowser(tmpArray) {

  if ((/*@cc_on!@*/false || !!document.documentMode) || isChrome || isSafari) {
    tmpArray = tmpArray.split('_');
  } else {
    // Firefox
    tmpArray = tmpArray.split('\t');
  }
  return tmpArray;
}

function pushObjectToStack(tmpArray) {
  tmpArray = tmpArray.split(',');

  var soulY = tmpArray[0].trim();
  var realPartY = tmpArray[1].trim();
  var unitsY = tmpArray[2].trim();
  var imaginaryY = tmpArray[3].trim();
  var objY = new NumberObject(soulY, realPartY, unitsY, imaginaryY);  

  stack.push(objY);
}

function btnOff() {
  // Works for Chrome and Firefox-desktop if set as a home page ;)
  monOff();
  tricorderOff();  

  window.open('','_self').close();
  window.open(location, '_self').close();
  window.close();
  window.open('', '_self', '');
  window.close();
  window.top.close();
  
  rpnAlert('Scripts may only close windows they opened.');
  window.location.href = 'https://www.google.com';
}

//////// Algebraic Buttons ///////////////////////////////////////////////////////////

function btnInverse() {
  if (shifted) {
    btnFactorial();    
  } else {
    inverse();
  } 
}

function inverse() {
  backupUndo();

  var objX;  
  if (stackFocus) {
    objX = stack[getIndex('lst-stack') - stackSize];
    $('txt-input').value = decodeSpecialChar(objX.getSoul());
    backupUndo();// <--Needed for UI consistency in this case
  } else { 
    objX = getX()
  }
  var isNumber = !isNaN(objX.getRealPart());
  var isImaginary = !isNaN(objX.getImaginary());
  var newUnits = inverseUnits(decodeSpecialChar(objX.getUnits()));

  if ($('txt-input').value === inversed && $('txt-input').value !== decodeSpecialChar(backups[backups.length - 3])) {    
    $('txt-input').value = decodeSpecialChar(backups[backups.length - 3]);
  } else {
    if (isNumber || isImaginary) {
      if (isNumber && !isImaginary) $('txt-input').value = 1 / objX.getRealPart();
      if (!isNumber && isImaginary) {
        $('txt-input').value =  1 / objX.getImaginary();
        $('txt-input').value += 'j';
      }
      if (isNumber && isImaginary) {
        // Write code here please ;)
      }
      $('txt-input').value += newUnits;
    } else {
      // Remove units from equation and calculate
      var result = calculate($('txt-input').value.replace(/(?![eE][-+]?[0-9]+)(?![j]\b) (?:[1][/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9/]*$/, ''));

      if (!isNaN(result)) {
        $('txt-input').value = 1 / result;
        $('txt-input').value += newUnits; 
      } else {
        if(/^1\//.test($('txt-input').value)) {
          $('txt-input').value = $('txt-input').value.slice(2);          
        } else {
          if ($('txt-input').value.trim() === '') {
            $('txt-input').value = '0';
            backupUndo();
            $('txt-input').value = 1 / 0;
          } else {
            $('txt-input').value = '1/' + $('txt-input').value.toString();
          }
        }
      }      
    }
  }  
  inversed = $('txt-input').value;
  $('txt-input').select();
}

function btnFactorial() {
  if ($('txt-input').value.trim() !== 'NaN') backupUndo();
  var objX;
  if (stackFocus) {
    var stackIndex = getIndex('lst-stack') - stackSize;
    objX = stack[stackIndex];
  } else {
    objX = getX();
  }
  var x = isNaN(objX.getRealPart()) && isNaN(objX.getImaginary()) ? calculate(objX.getSoul().replace(/(?![eE][-+]?[0-9]+)(?![j]\b) (?:[1][/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9/]*$/, '')) : parseFloat(objX.getRealPart());
  var result = factorial(x);
  
  if (radix !== 10) result = result.toString(radix);
  $('txt-input').value = result;
  $('txt-input').select();
}

function factorial(num) {  
  if (num <= 1) {
    return 1;
  } else {
    try {
      var theResult = num * factorial(num - 1);
    } catch (e) {
      return 'Infinity';
    }
    return theResult;
  }
}

function btnLog() {
  if (shifted) {
    baseLog();
  } else {
    naturalLog();
  }
}

function log(x, y) {
  if (y === undefined) y = 10;
  return Math.log(x) / Math.log(y);
}

function baseLog() {
  if (stack.toString() !== '') backupUndo();
  var objY;
  var objX;
  var y;
  var x;
  var result;

  if (stack.length - 1 < 0 || stack[stack.length - 1].getSoul() === '') {
    enterInput();
    $('txt-input').value = Number(10).toString(radix);
  }
  if (stackFocus) {
    var stackIndex = getIndex('lst-stack') - stackSize;
    objY = stack[stackIndex];
  } else {
    objY = stack.pop();
  }
  y = isNaN(objY.getRealPart()) && isNaN(objY.getImaginary()) ? calculate(objY.getSoul().replace(/(?![eE][-+]?[0-9]+)(?![j]\b) (?:[1][/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9/]*$/, '')) : parseFloat(objY.getRealPart());
  objX = getX();
  x = isNaN(objX.getRealPart()) && isNaN(objX.getImaginary()) ? calculate(objX.getSoul().replace(/(?![eE][-+]?[0-9]+)(?![j]\b) (?:[1][/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9/]*$/, '')) : parseFloat(objX.getRealPart());
  result = log(y, x);  

  if (radix !== 10) result = result.toString(radix);
  $('txt-input').value = result;
  updateDisplay();
  $('txt-input').select();
}

function ln(x) {
  return Math.log(x);
}

function naturalLog() {
  if ($('txt-input').value.trim() !== 'NaN') backupUndo();
  var objX;
  if (stackFocus) {
    var stackIndex = getIndex('lst-stack') - stackSize;
    objX = stack[stackIndex];
  } else {
    objX = getX();
  }
  var x = isNaN(objX.getRealPart()) && isNaN(objX.getImaginary()) ? calculate(objX.getSoul().replace(/(?![eE][-+]?[0-9]+)(?![j]\b) (?:[1][/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9/]*$/, '')) : parseFloat(objX.getRealPart());
  var result = ln(x);

  if (radix !== 10) result = result.toString(radix);
  $('txt-input').value = result;
  updateDisplay();
  $('txt-input').select();
}

function btnRoot() {
  if (shifted) {
    rootFunction();
  } else {
    exponentialFunction();
  }
}

function pow(x, y) {
  if (y === undefined) y = 2;
  return Math.pow(x, y);
}

function exponentialFunction() {
  if (stack.toString() !== '') backupUndo();
  var newUnits;
  var objY;
  var objX;
  var y;
  var x;
  var result;

  if (stack.length - 1 < 0 || stack[stack.length - 1].getSoul() === '') {
    enterInput();
    $('txt-input').value = '2';
  }
  if (stackFocus) {
    var stackIndex = getIndex('lst-stack') - stackSize;
    objY = stack[stackIndex];
  } else {
    objY = stack.pop();
  }
  y = isNaN(objY.getRealPart()) && isNaN(objY.getImaginary()) ? calculate(objY.getSoul().replace(/(?![eE][-+]?[0-9]+)(?![j]\b) (?:[1][/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9/]*$/, '')) : parseFloat(objY.getRealPart());
  objX = getX();
  x = isNaN(objX.getRealPart()) && isNaN(objX.getImaginary()) ? calculate(objX.getSoul().replace(/(?![eE][-+]?[0-9]+)(?![j]\b) (?:[1][/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9/]*$/, '')) : parseFloat(objX.getRealPart());
  
  // newUnits = multiplyUnits(x);
  newUnits = '';
  result = pow(y, x);

  if (radix !== 10) result = result.toString(radix);
  result += decodeSpecialChar(newUnits);
  $('txt-input').value = result;
  updateDisplay();
  $('txt-input').select();
}

function root(x, y) {
  if (y === undefined) y = 2;
  return Math.pow(x, 1/y);
}

function rootFunction() {
  if (stack.toString() !== '') backupUndo();  
  var newUnits;
  var objY;
  var objX;
  var y;
  var x;
  var result;

  if (stack.length - 1 < 0 || stack[stack.length - 1].getSoul() === '') {
    enterInput();
    $('txt-input').value = '2';
  }
  if (stackFocus) {
    var stackIndex = getIndex('lst-stack') - stackSize;
    objY = stack[stackIndex];
  } else {
    objY = stack.pop();
  }
  y = isNaN(objY.getRealPart()) && isNaN(objY.getImaginary()) ? calculate(objY.getSoul().replace(/(?![eE][-+]?[0-9]+)(?![j]\b) (?:[1][/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9/]*$/, '')) : parseFloat(objY.getRealPart());
  objX = getX();
  x = isNaN(objX.getRealPart()) && isNaN(objX.getImaginary()) ? calculate(objX.getSoul().replace(/(?![eE][-+]?[0-9]+)(?![j]\b) (?:[1][/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9/]*$/, '')) : parseFloat(objX.getRealPart()); 
  
  // newUnits = multiplyUnits(1/x);
  newUnits = '';
  result = root(y, x);

  if (radix !== 10) result = result.toString(radix);
  result += decodeSpecialChar(newUnits);
  $('txt-input').value = result;
  updateDisplay();
  $('txt-input').select();
}

function btnPi() {
  backupUndo();
  if (shifted) {
    btn_parentheses();
  } else {
    insertText('π');
  }
}

function insertAroundSelection(txtField, txtValue) {
  var startPos = txtField.selectionStart;
  var endPos = txtField.selectionEnd;
  txtField.value = txtField.value.substring(0, startPos) + txtValue + txtField.value.substring(endPos, txtField.value.length);
  txtField.selectionEnd = endPos + 1;  
  txtField.selectionStart = txtField.selectionEnd;// Deselect text for IE
}

function btn_parentheses() {  
  insertAroundSelection($('txt-input'), '(' + returnSelectedText('txt-input') + ')');
  $('txt-input').focus();
}

function btnModulus() {  
  if (shifted) {
    insertText('√');
  } else {
    modulus();
  }  
}

function modulus() {
  if (stack.toString() !== '') backupUndo();
  var newUnits = divideUnits(1);
  var objY;
  if (stackFocus) {
    var stackIndex = getIndex('lst-stack') - stackSize;
    objY = stack[stackIndex];
  } else {
    objY = stack.pop();
  }
  var objX = getX();
  var y = isNaN(objY.getRealPart()) && isNaN(objY.getImaginary()) ? calculate(objY.getSoul().replace(/(?![eE][-+]?[0-9]+)(?![j]\b) (?:[1][/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9/]*$/, '')) : parseFloat(objY.getRealPart());  
  var x = isNaN(objX.getRealPart()) && isNaN(objX.getImaginary()) ? calculate(objX.getSoul().replace(/(?![eE][-+]?[0-9]+)(?![j]\b) (?:[1][/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9/]*$/, '')) : parseFloat(objX.getRealPart());  
  var result = y % x;
  
  if (radix !== 10) result = result.toString(radix);
  result += decodeSpecialChar(newUnits);
  $('txt-input').value = result;
  updateDisplay();
  $('txt-input').select();
}

function btnSign() {  
  if (shifted) {
    insertText('^');    
  } else {
    changeSign();
  }
}

function changeSign() {
  backupUndo();
  var tmpX = $('txt-input').value;  

  if (stackFocus) tmpX = getSelectedText('lst-stack');
  // If input is blank
  if (tmpX === '') {
    tmpX = '-';
  } else if (tmpX === '+') {
    tmpX = '-';
  } else if (tmpX === '-') {
    tmpX = '+';
  } else if (/^[-+]?[0-9]+\.?[0-9]+[eE]$/.test(tmpX)) {
    // If exponential number
    tmpX += '-';
  } else if (/^[-+]?[0-9]+\.?[0-9]+([eE][-])$/.test(tmpX)) {
    tmpX = tmpX.substring(0, tmpX.length - 1);
  } else if (/^[-+]?[0-9]+\.?[0-9]+([eE][+])$/.test(tmpX)) {
    tmpX = tmpX.substring(0, tmpX.length - 1);
    tmpX += '-';
  } else if (radix !==  16 && /^[-+]?[0-9]+\.?[0-9]*[eE]?[-+]?[0-9]* +$/.test(tmpX)) {
    // If imaginary number
    tmpX = tmpX.substring(0, tmpX.length);
    tmpX += '-';
  } else if (radix !==  16 && /^[-+]?[0-9]+\.?[0-9]*[eE]?[-+]?[0-9]* +[-]$/.test(tmpX)) {
    tmpX = tmpX.substring(0, tmpX.length - 1);
  } else if (radix !==  16 && /^[-+]?[0-9]+\.?[0-9]*[eE]?[-+]?[0-9]* +[+]$/.test(tmpX)) {
    tmpX = tmpX.substring(0, tmpX.length - 1);
    tmpX += '-';
  } else if (radix === 16 && /^[-+]?[a-e0-9]+ +$/.test(tmpX)) {
    tmpX = tmpX.substring(0, tmpX.length);
    tmpX += '-';
  } else if (radix === 16 && /^[-+]?[a-e0-9]+ +[-]$/.test(tmpX)) {
    tmpX = tmpX.substring(0, tmpX.length - 1);
  } else if (radix === 16 && /^[-+]?[a-e0-9]+ +[+]$/.test(tmpX)) {
    tmpX = tmpX.substring(0, tmpX.length - 1);
    tmpX += '-';
  } else if (/^[-+]?[0-9]+\.?[0-9]*[eE]?[-+]?[0-9]* +[-+]?[0-9]+\.?[0-9]+[eE]$/.test(tmpX)) {
    // If exponential imaginary number
    tmpX = tmpX.substring(0, tmpX.length);
    tmpX += '-';
  } else if (/^[-+]?[0-9]+\.?[0-9]*[eE]?[-+]?[0-9]* +[-+]?[0-9]+\.?[0-9]+([eE][-])$/.test(tmpX)) {
    tmpX = tmpX.substring(0, tmpX.length - 1);
  } else if (/^[-+]?[0-9]+\.?[0-9]*[eE]?[-+]?[0-9]* +[-+]?[0-9]+\.?[0-9]+([eE][+])$/.test(tmpX)) {
    tmpX = tmpX.substring(0, tmpX.length - 1);
    tmpX += '-';
  } else if (/^[-+]?[0-9]+.*\^$/.test(tmpX)) {
    // If unit exponent
    tmpX += '-'
  } else if (/^[-+]?[0-9]+.*\^[-]$/.test(tmpX)) {
    tmpX = tmpX.substring(0, tmpX.length - 1);
  } else if (/^[-+]?[0-9]+.*\^[+]$/.test(tmpX)) {
    tmpX = tmpX.substring(0, tmpX.length - 1);
    tmpX += '-';
  } else {
    // Change sign
    if (tmpX.charAt(0) === '+') {
      tmpX = tmpX.substring(1);
    }
    if (tmpX.charAt(0) === '-') {
      tmpX = tmpX.substring(1);
    } else {
      tmpX = '-' + tmpX;
    }
  }
  stackFocus ? insertAtCursor($('txt-input'), tmpX) : $('txt-input').value = tmpX;
  $('txt-input').focus();
}

//////// Basic Maths Buttons /////////////////////////////////////////////////////////

function btnDivide() {  
  if (shifted) {
    insertText('/');    
  } else {
    division();
  }  
}

function division() {
  if (stack.toString() !== '') backupUndo();
  var newUnits = divideUnits(1);
  var objY;
  if (stackFocus) {
    var stackIndex = getIndex('lst-stack') - stackSize;
    objY = stack[stackIndex];
  } else {
    objY = stack.pop();
  }
  var objX = getX();
  var y = isNaN(objY.getRealPart()) && isNaN(objY.getImaginary()) ? calculate(objY.getSoul().replace(/(?![eE][-+]?[0-9]+)(?![j]\b) (?:[1][/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9/]*$/, '')) : parseFloat(objY.getRealPart());
  var x = isNaN(objX.getRealPart()) && isNaN(objX.getImaginary()) ? calculate(objX.getSoul().replace(/(?![eE][-+]?[0-9]+)(?![j]\b) (?:[1][/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9/]*$/, '')) : parseFloat(objX.getRealPart());
  var result = y / x;
  
  if (radix !== 10) result = result.toString(radix);
  result += decodeSpecialChar(newUnits);
  $('txt-input').value = result;
  updateDisplay();
  $('txt-input').focus();
}

function btnMultiply() {  
  if (shifted) {
    insertText('*');
  } else {
    multiplication();
  }      
}

function multiplication() {
  if (stack.toString() !== '') backupUndo();
  var newUnits = multiplyUnits(1);
  var objY;
  if (stackFocus) {
    var stackIndex = getIndex('lst-stack') - stackSize;
    objY = stack[stackIndex];
  } else {
    objY = stack.pop();
  }
  var objX = getX();
  var y = isNaN(objY.getRealPart()) && isNaN(objY.getImaginary()) ? calculate(objY.getSoul().replace(/(?![eE][-+]?[0-9]+)(?![j]\b) (?:[1][/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9/]*$/, '')) : parseFloat(objY.getRealPart());  
  var x = isNaN(objX.getRealPart()) && isNaN(objX.getImaginary()) ? calculate(objX.getSoul().replace(/(?![eE][-+]?[0-9]+)(?![j]\b) (?:[1][/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9/]*$/, '')) : parseFloat(objX.getRealPart()); 
  var result = y * x;
  
  if (radix !== 10) result = result.toString(radix);  
  result += decodeSpecialChar(newUnits);
  $('txt-input').value = result;
  updateDisplay();
  $('txt-input').focus();
}

function btnSubtract() {  
  if (shifted) {
    insertText('-');    
  } else {
    subtraction();
  }  
}

function subtraction() {
  if (stack.toString() !== '') backupUndo();
  var newUnits = addUnits();
  var objY;
  if (stackFocus) {
    var stackIndex = getIndex('lst-stack') - stackSize;
    objY = stack[stackIndex];
  } else {
    objY = stack.pop();
  }
  var objX = getX();
  var y = isNaN(objY.getRealPart()) && isNaN(objY.getImaginary()) ? calculate(objY.getSoul().replace(/(?![eE][-+]?[0-9]+)(?![j]\b) (?:[1][/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9/]*$/, '')) : parseFloat(objY.getRealPart());  
  var x = isNaN(objX.getRealPart()) && isNaN(objX.getImaginary()) ? calculate(objX.getSoul().replace(/(?![eE][-+]?[0-9]+)(?![j]\b) (?:[1][/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9/]*$/, '')) : parseFloat(objX.getRealPart());  
  var result = y - x;
  
  if (radix !== 10) result = result.toString(radix);
  result += decodeSpecialChar(newUnits);
  $('txt-input').value = result;
  updateDisplay();
  $('txt-input').focus();
}

function btnAdd() {  
  if (shifted) {
    insertText('+');    
  } else {
    addition();
  }  
}

function addition() {
  if (stack.toString() !== '') backupUndo();
  var newUnits = addUnits();
  var objY;
  if (stackFocus) {
    var stackIndex = getIndex('lst-stack') - stackSize;
    objY = stack[stackIndex];
  } else {
    objY = stack.pop();
  }
  var objX = getX();
  var y = isNaN(objY.getRealPart()) && isNaN(objY.getImaginary()) ? calculate(objY.getSoul().replace(/(?![eE][-+]?[0-9]+)(?![j]\b) (?:[1][/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9/]*$/, '')) : parseFloat(objY.getRealPart());  
  var x = isNaN(objX.getRealPart()) && isNaN(objX.getImaginary()) ? calculate(objX.getSoul().replace(/(?![eE][-+]?[0-9]+)(?![j]\b) (?:[1][/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9/]*$/, '')) : parseFloat(objX.getRealPart());
  var result = y + x;

  if (radix !== 10) result = result.toString(radix);
 
  result += decodeSpecialChar(newUnits);
  $('txt-input').value = result; 
  updateDisplay();
  $('txt-input').focus();
}

//////// Trigonometric Buttons ///////////////////////////////////////////////////////

function btnAngle() {
  if ($('btn-angle').value === 'deg') {
    $('btn-angle').value = 'rad';
    $('btn-angle').className = 'btn-small btn-radian radian-border';
    $('btn-sine').className = 'btn-small radian-border';
    $('btn-cosine').className = 'btn-small radian-border';
    $('btn-tangent').className = 'btn-small radian-border';
  } else {
    $('btn-angle').value = 'deg';
    $('btn-angle').className = 'btn-small btn-angle degree-border';
    $('btn-sine').className = 'btn-small degree-border';
    $('btn-cosine').className = 'btn-small degree-border';
    $('btn-tangent').className = 'btn-small degree-border';
  }
  $('txt-input').focus();
}

function btnSine() {
  if ($('txt-input').value.trim() !== 'NaN') backupUndo();

  if (stackFocus) insertAtCursor($('txt-input'), getSelectedText('lst-stack'));
  $('txt-input').value = $('txt-input').value.replace(/(?![eE][-+]?[0-9]+)(?![j]\b) (?:[1][/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9/]*$/, '');

  if (shifted) {
    $('txt-input').value = asin($('txt-input').value);
  } else {
    $('txt-input').value = sin($('txt-input').value);
  }
  updateDisplay();
  $('txt-input').select();  
}

function btnCosine() {
  if ($('txt-input').value.trim() !== 'NaN') backupUndo();

  if (stackFocus) insertAtCursor($('txt-input'), getSelectedText('lst-stack'));
  $('txt-input').value = $('txt-input').value.replace(/(?![eE][-+]?[0-9]+)(?![j]\b) (?:[1][/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9/]*$/, '');

  if (shifted) {
    $('txt-input').value = acos($('txt-input').value);
  } else {
    $('txt-input').value = cos($('txt-input').value);
  }
  updateDisplay();
  $('txt-input').select();
}

function btnTangent() {
  if ($('txt-input').value.trim() !== 'NaN') backupUndo();

  if (stackFocus) insertAtCursor($('txt-input'), getSelectedText('lst-stack'));
  $('txt-input').value = $('txt-input').value.replace(/(?![eE][-+]?[0-9]+)(?![j]\b) (?:[1][/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9/]*$/, '');

  if (shifted) {
    $('txt-input').value = atan($('txt-input').value);
  } else {
    $('txt-input').value = tan($('txt-input').value);
  }
  updateDisplay();
  $('txt-input').select();
}

function sin(x) {
  x = calculate(x);
  if ($('btn-angle').value === 'deg' && (x === 0 || x % 360 === 0)) return 0;
  if ($('btn-angle').value === 'deg' && (x === 270 || (x - 270) % 360 === 0)) return -1;
  if ($('btn-angle').value === 'deg' && (x === 180 || (x - 180) % 360 === 0)) return 0;
  if ($('btn-angle').value === 'deg' && (x === 90 || (x - 90) % 360 === 0)) return 1;

  if ($('btn-angle').value === 'deg') x = x * Math.PI / 180;
  return Math.sin(x);
}

function cos(x) {
  x = calculate(x);
  if ($('btn-angle').value === 'deg' && (x === 0 || x % 360 === 0)) return 1;
  if ($('btn-angle').value === 'deg' && (x === 270 || (x - 270) % 360 === 0)) return 0;
  if ($('btn-angle').value === 'deg' && (x === 180 || (x - 180) % 360 === 0)) return -1;
  if ($('btn-angle').value === 'deg' && (x === 90 || (x - 90) % 360 === 0)) return 0;
  if ($('btn-angle').value === 'deg') x = x * Math.PI / 180;
  return Math.cos(x);
}

function tan(x) {
  x = calculate(x);
  if ($('btn-angle').value === 'deg' && (x === 0 || x % 360 === 0)) return 0;
  if ($('btn-angle').value === 'deg' && (x === 270 || (x - 270) % 360 === 0)) return NaN;
  if ($('btn-angle').value === 'deg' && (x === 180 || (x - 180) % 360 === 0)) return NaN;
  if ($('btn-angle').value === 'deg' && (x === 90 || (x - 90) % 360 === 0)) return 1;
  if ($('btn-angle').value === 'deg') x = x * Math.PI / 180;
  return Math.tan(x);
}

function asin(x) {
  x = calculate(x);
  if ($('btn-angle').value === 'deg') x = (x * 180) / Math.PI;
  return Math.asin(x);
}

function acos(x) {
  x = calculate(x);
  if ($('btn-angle').value === 'deg') x = x * Math.PI / 180;
  return Math.acos(x);
}

function atan(x) {
  x = calculate(x);
  if ($('btn-angle').value === 'deg') x = x * Math.PI / 180;
  return Math.atan(x);
}

//////// Input Buttons ///////////////////////////////////////////////////////////////

function btnDot() {
  insertAtCursor($('txt-input'), '.');
  $('txt-input').focus();
}

function btnZero() {
  insertAtCursor($('txt-input'), '0');
  $('txt-input').focus();
}

function btnOne() {
  insertAtCursor($('txt-input'), '1');
  $('txt-input').focus();
}

function btnTwo() {
  insertAtCursor($('txt-input'), '2');
  $('txt-input').focus();
}

function btnThree() {
  insertAtCursor($('txt-input'), '3');
  $('txt-input').focus();
}

function btnSpace() {    
  if (shifted) {
    insertAtCursor($('txt-input'), '=');
  } else {
    insertAtCursor($('txt-input'), ' ');
  } 
  $('txt-input').focus();
}

function btnFour() {
  insertAtCursor($('txt-input'), '4');
  $('txt-input').focus();
}

function btnFive() {
  insertAtCursor($('txt-input'), '5');
  $('txt-input').focus();
}

function btnSix() {
  insertAtCursor($('txt-input'), '6');
  $('txt-input').focus();
}

function btnSeven() {
  insertAtCursor($('txt-input'), '7');
  $('txt-input').focus();
}

function btnEight() {
  insertAtCursor($('txt-input'), '8');
  $('txt-input').focus();
}

function btnNine() {
  insertAtCursor($('txt-input'), '9');
  $('txt-input').focus();
}

//////// More Calcamatrons ///////////////////////////////////////////////////////////

function linearSearch(array, key) {
  for (var i = 0; i< array.length; i++) {
    if (array[i] === key) {
      return i;
    }
  }
  return -1;
}

function binarySearch(array, key) {
  var left = 0;
  var right = array.length - 1;
  while (left <= right) {
    var mid = left + Math.floor((right + left) / 2);
    if (array[mid] === key) return mid;
    if (array[mid] < key) {
      left = mid + 1;
    } else {
      right = mid -1;
    }
    return -1; 
  }
}

function averageStack() {
}

function inArray(arrayToCheck, value) {
  for (var i = 0; i < arrayToCheck.length; i++) {
    if (arrayToCheck[i] === value) {
      return true;
    }
  }
  return false;
}

function sortStack(maxMin) {
}

// Sum an unknown number of arguments eg. getSum(1,2,3,4,5,6) = 21
function getSum() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

function totalStack() {
}

// Extract any substring that follows a number
function extractSubString(tmpArray) {
  var subString = '';
  var subIndex = -1;
  var noExponent = true;

  tmpArray = decodeSpecialChar(tmpArray);

  // If tmpArray contains a number
  if (!isNaN(parseFloat(tmpArray))) {
    // If the number is followed by more text find the index of the substring
    if (isNaN(tmpArray)) {
      var tmpSubString = tmpArray.split('');
      // Not bothering to check index 0, it is either a number or "-" or "+"
      for (var i = 1; i < tmpSubString.length ; i++) {
        // Check if character is not part of a normal decimal number
        if (subIndex < 0 && isNaN(tmpSubString[i]) && tmpSubString[i] !== '.') {
          // Check if character is part of scientific notation
          if (noExponent && (tmpSubString[i].toLowerCase() === 'e' && (!isNaN(tmpSubString[i + 1]) || ((tmpSubString[i + 1] === '-' || tmpSubString[i + 1] === '+') && !isNaN(tmpSubString[i + 2]))))) {
            noExponent = false;
            // If there is a leading minus or plus increment index
            if ((tmpSubString[i + 1] === '-' || tmpSubString[i + 1] === '+') && !isNaN(tmpSubString[i + 2])) {
              i++;
            }
          } else {
            // Found substring
            subIndex = i;
          }
        }
      }
      // Capture substring
      while (subIndex < tmpSubString.length) {
        subString += tmpSubString[subIndex];
        subIndex++;
      }
    }
  }
  return subString;
}

String.prototype.insertAt = function (index, input) {
  return this.slice(0,index) + input + this.slice(index);
}

function insertTime() {
  insertText(getTime());
}

function getTime() {
  var currentdate = new Date();
  var datetime = currentdate.getHours() + ':' + currentdate.getMinutes() + ':' + currentdate.getSeconds();
  return datetime;
}

function insertDate() {
  var today = new Date();
  var month = today.getMonth() + 1;
  var date = today.getDate();
  var year = today.getFullYear();
  insertText(month + '/' + date + '/' + year);
}

function getSize() {
  var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight || e.clientHeight || g.clientHeight;
  return [x, y];
}

function embed(src) {
  if (src.indexOf('http') !== -1 && src.indexOf('embed') !== -1) {
    widgetSrc.unshift(src);// https://www.youtube.com/embed/25QpDHCLOUc
  } else {
    rpnAlert('Enter web address to embed.');
  }
}

function getLocation() {

  lat = '';
  lng = '';

  if (navigator.geolocation) {
    //Geolocation.getCurrentPosition(); // Determines the device’s current location
    //Geolocation.watchPosition(); // Listens for changes in the location and invokes a callback on every movement
    //Geolocation.clearWatch(); // Removes a watchPosition event handler
    navigator.geolocation.getCurrentPosition(function (position) {
      // Get the coordinates of the current position.
      lat += position.coords.latitude;
      lng += position.coords.longitude;
      lat = lat.substr(0, 8);
      lng = lng.substr(0, 8);
    }, geolocationError);
  } else {
    rpnAlert('Geolocation not supported.');
  }
}

function geolocationError(error) {
  switch (error.code) {
  case error.PERMISSION_DENIED:
    rpnAlert('Request for Geolocation denied.');
    break;
  case error.POSITION_UNAVAILABLE:
    rpnAlert('Location information is unavailable.');
    break;
  case error.TIMEOUT:
    rpnAlert('The request to get user location timed out.');
    break;
  case error.UNKNOWN_ERROR:
    rpnAlert('An unknown error occurred.');
    break;
  }
}

function getIP() {
  if (/*@cc_on!@*/false || !!document.documentMode) {// IE
    rpnAlert('Not supported by this browser.');
  } else {
    getUserIP(function (ip) {
      inputText(ip);
    });
  }
}

/**
 * Get the user IP throught the webkitRTCPeerConnection
 * @param onNewIP {Function} listener function to expose the IP locally
 * @return undefined
 */
function getUserIP(onNewIP) {
  // onNewIp - your listener function for new IPs
  // Compatibility for firefox and chrome
  var myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
  var pc = new myPeerConnection({
      iceServers: []
    }),
    noop = function () { },
    localIPs = {},
    ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g,
    key;

  function iterateIP(ip) {
    if (!localIPs[ip]) onNewIP(ip);
    localIPs[ip] = true;
  }
  // Create a bogus data channel
  pc.createDataChannel('');
  // Create offer and set local description
  pc.createOffer().then(function (sdp) {
    sdp.sdp.split('\n').forEach(function (line) {
      if (line.indexOf('candidate') < 0) return;
      line.match(ipRegex).forEach(iterateIP);
    });
    pc.setLocalDescription(sdp, noop, noop);
  }).catch(function (e) {
    // An error occurred, so handle the failure to connect
  });
  // Listen for candidate events
  pc.onicecandidate = function (ice) {
    if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
    ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
  };
}

function autoDark() {
  var hour = new Date().getHours();
  if (hour <= 6 || hour >= 18) {
    $('menu-darkmode').innerHTML = 'Dark';
    toggleDarkMode();
  }
}

/**
 * https://tinloof.com/blog/how-to-build-a-stopwatch-with-html-css-js-react-part-2/
 */
var startTime;
var elapsedTime = 0;
var timerInterval;

function timeToString(time) {
  var diffInHrs = time / 3600000;
  var hh = Math.floor(diffInHrs);

  var diffInMin = (diffInHrs - hh) * 60;
  var mm = Math.floor(diffInMin);

  var diffInSec = (diffInMin - mm) * 60;
  var ss = Math.floor(diffInSec);

  var diffInMs = (diffInSec - ss) * 100;
  var ms = Math.floor(diffInMs);

  var formattedMM = mm.toString().padStart(2, '0');
  var formattedSS = ss.toString().padStart(2, '0');
  var formattedMS = ms.toString().padStart(2, '0');

  return formattedMM + ':' + formattedSS + ':' + formattedMS;
}

function stopwatchPrint(txt) {
  $('txt-input').value = txt;
}

function stopwatchStart() {  

  if (elapsedTime === 0) {
    stack.pop();
    inputText('Press DEL key to reset stopwatch');
    enterInput();
    updateDisplay();
  
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
      elapsedTime = Date.now() - startTime;
      stopwatchPrint(timeToString(elapsedTime));
    }, 10);
  }
}

function stopwatchPause() {
  clearInterval(timerInterval);
}

function stopwatchReset() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  $('txt-input').value = '00:00:00';
  $('txt-input').select();
}

function help(command) {
  var commandArray = command.split(' ');
  
  if (commandArray[1] !== undefined) {
    switch (commandArray[1]) {    
    case 'about':
      inputText($('lst-stack').getAttribute('placeholder'));
      enterInput();
      inputText('https://github.com/NapesWeaver/rpnapes');
      break;
    case 'darkMode':
      inputText('darkMode: Toggle between light and dark themes.');
      break;
    case 'date':
      inputText('date: Returns the current date.');
      break;
    case 'duckgo':
      inputText('duckgo [query]: Search DuckDuckGo. If no argument is supplied in-line, last entry on stack is used as query.');
      break; 
    case 'clear':
      inputText('clear: Clears the displays. Alias: cls');
      break;
    case 'constants':
      inputText('constants: Display values of constants. Reassingment of \'constants\' are allowed. \'Constants\' are reset if Equations / Contants menu items are opened.');
      break;
    case 'embed':
      inputText('embed [URL]: Embed URL into Tricorder iFrame. If no argument is supplied in-line, last entry on stack is used for URL. URL must be in format of https://www.youtube.com/embed/G2re3s0kQgM. ');
      break;
    case 'flightLogger':
      inputText('flightLogger: Opens Flight Logger in a new tab.');
      break;
    case 'fix':
      inputText('fix [n]: Fix number of decimals shown on the stack (0 to 17). If no argument is supplied in-line, last entry on stack is used. Turn Fixed Decimals off with -1.');
      break;
    case 'google':
      inputText('google [query]: Search Google / open link or IP address. If no argument is supplied in-line, last entry on stack is used as query. Alias: go');
      break;
    case 'ipMapper':
      inputText('ipMapper: Opens IP Mapper in a new tab.');
      break;
    case 'haptic':
      inputText('haptic: For mobile devices only. Toggles haptic response for the keypad.');
      break;
    case 'keyboard':
      inputText('keyboard: For mobile devices only. Toggles the mobile keyboard.');
      break;
    case 'load':
      inputText('load: Loads the Stack to the display. Alias: ls');
      break;
    // case 'login':
    //   inputText('Log into the database.');
    //   break;
    // case 'logout':
    //   inputText('Logs out of the database.');
    //   break;
    case 'locus':
      inputText('locus: Returns geo-coordinates of device (very roughly). Tricorder must have been opend first.');
      break;
    case 'maths':
      inputText('acos(), asin(), atan(), cos(), sin(), tan(), ln(), log(), pow(), root()');
      break;
    case 'napes':
      inputText('napes: Switch to Referances interface.');
      break;
    case 'notes':
      inputText('notes: Switch to Notes interface.');
      break;
    case 'open':
      inputText('open: Open a text file onto the Stack. A bug prohibits loading the same file successively ;(');
      break;
    case 'openNotes':
      inputText('openNotes: Open a text file into Notes.');
      break;
    case 'off':
      $('txt-input').value = 'off: Close browser tab or redirect to google.com.';
      enterInput();
      $('txt-input').value ='Firefox users may go to about:config dom.allow_scripts_to_close_windows = true.';
      enterInput();
      $('txt-input').value ='Try \'Open in new tab\' first though. Or set as home page ;)';
      enterInput();
      $('txt-input').value ='Not currently working for browsers on mobile devices :(';
      break;
    case 'paste':
      inputText('paste: Firefox only supports reading the clipboard in browser extensions using the "clipboardRead" extension permission :(');
      break;
    case 'print':
      inputText('print: Open printer dialoge.');
      break;
    case 'run':
      inputText('run: Run the contents of the stack as a script.');
      break;
    case 'save':
      inputText('save: Saves the stack to a browser cookie.');
      break;
    case 'saveAs':
      inputText('saveAs [filename]: Saves the stack to a text file. If no argument is supplied in-line, last entry on stack is used as the filename.');
      break;
    case 'shortcuts':
      inputText('Ctrl + z = Undo, Ctrl + y = Redo, Alt + Shift = Shift Keypad, Esc = Toggle interface button.');
      break;
    case 'sound':
      inputText('sound: Toggle sound on/off for Tricorder buttons.');
      break;
    case 'stopwatch':
      inputText('stopwatch: Starts the stopwatch. Press DEL key to reset.');
      break;
    case 'time':
      inputText('time: Returns the current time.');
      break;
    case 'toString':
      inputText('toString [filename]: Saves the Stack to a text file showing all fields for each Stack entry. If no argument is supplied in-line, last entry on stack is used as the filename.');
      break;
    case 'tricorder':
      inputText('tricorder: Opens the Tricorder interface.');
      break;
    case 'unembed':
      inputText('unembed: Removes the last embedded video from Tricorder iFrame.');
      break;
    case 'wiki':
      inputText('wiki [query]: Search Wikipedia. If no argument is supplied in-line, last entry on stack is used as query.');
      break;    
    case 'youTube':
      inputText('youTube [query]: Search YouTube. If no argument is supplied in-line, last entry on stack is used as query. Alias: you');
      break;    
    default:// case NOT a help argument
      enterInput();
      return;
    }
  } else {
    inputText('about, clear, constants, darkMode, date, duckgo, embed, fix, flightLogger, google, ipMapper, haptic, keyboard, load, locus, maths, napes, notes, open, openNotes, off, paste, print, run, save, saveAs, shortcuts, sound, stopwatch, time, toString, unembed, wiki, youTube');
  }
  enterInput();
  $('txt-input').value = '';
  updateDisplay();
}

function parseCommand() {
  var command = $('txt-input').value.trim();
  var stackedCommand = stack[stack.length - 2] ? stack[stack.length - 2] : new NumberObject('', NaN, NaN, 'null');

  // Commands consist of words and numbers and URLs
  if (!/[,*√=ⅽ℮ɢΦπ\\^]+/.test(command)) {    
    var commandArray = command.split(' ');   
    // NOT help with word and no space, NOT help with number, NOT help with word and number, NOT help with word and alphanumeric word
    if (command.match(/(?!help[A-Za-z]+)(?!help ?[0-9])(?!help [A-Za-z ]+[0-9]+)(?!help [A-Za-z]+ +[0-9A-Za-z]+)^help ?[A-Za-z]*/)) {
      stack.pop();
      help(command);
    }
    // NOT fix with number and no space, NOT fix with word, NOT fix with number and word, NOT fix with number and alphanumeric word
    if (command.match(/(?!fix[0-9]+)(?!fix ?[A-Za-z])(?!fix [0-9 ]+[A-Za-z]+)(?!fix [0-9]+ +[0-9A-Za-z]+)^fix$|(^fix (-?[1]|[0-9]|1[0-7])$)/)) {    
      
      if (commandArray[1] === undefined) {
        if (isNaN(parseInt(stackedCommand.getRealPart()))) return;
        stack.pop();
        setFixDecimal(parseInt(stack[stack.length - 1].getRealPart()));
      } else {
        setFixDecimal(parseInt(commandArray[1]));
      }
      stack.pop();
      $('txt-input').value = '';
      updateDisplay();    
    }
    // NOT saveAs with word and no space, NOT saveAs with number, NOT saveAs with word and alphanumeric word
    if (command.match(/(?!saveAs[A-Za-z]+)(?!saveAs ?[0-9])(?!saveAs [A-Za-z]+ +[0-9A-Za-z]+)^saveAs ?[A-Za-z]*/)) {    
      
      if (commandArray[1] === undefined) {
        stack.pop();
        stack[stack.length - 1] ? saveFile(stack[stack.length - 1].soul, true) : saveFile('', true);
      } else {
        saveFile(commandArray[1], true);
      }
      stack.pop();
      $('txt-input').value = '';
      updateDisplay();
    }
    // NOT toString with word and no space, NOT toString with number, NOT toString with word and alphanumeric word
    if (command.match(/(?!toString[A-Za-z]+)(?!toString ?[0-9])(?!toString [A-Za-z]+ +[0-9A-Za-z]+)^toString ?[A-Za-z]*/)) {    

      if (commandArray[1] === undefined) {
        stack.pop();
        stack[stack.length - 1] ? saveFile(stack[stack.length - 1].soul, false) : saveFile('', false);
      } else {
        saveFile(commandArray[1], false)
      }
      stack.pop();
      $('txt-input').value = '';
      updateDisplay();
    }
    // If (command === embed and end of stack === URL) or command === embed with URL
    if ((command.match(/^embed$/) && stackedCommand.getSoul().match(/^http[s]:\/\/[0-9A-Za-z]/)) || command.match(/^embed http[s]:\/\/[0-9A-Za-z]/)) {    
      
      if (commandArray[1] === undefined) {

        embed(stackedCommand.getSoul());
      } else {
        embed(commandArray[1]);
      }
      stack.pop();
      $('txt-input').value = '';
      updateDisplay();
      saveTricorder();
    }
    if (command === 'duckgo'|| command.match(/^duckgo .+/)) {
      
      if (commandArray[1] === undefined) {
        $('txt-input').value = decodeSpecialChar(stackedCommand.getSoul());
      } else {
        commandArray.shift();
        $('txt-input').value = commandArray.join(' ');
      }
      searchDuckDuckGo();
      stack.pop();
      $('txt-input').value = '';
      updateDisplay();
    }
    if (command === 'google' || command === 'go' || command.match(/^google .+/) || command.match(/^go .+/)) {
      
      if (commandArray[1] === undefined) {
        $('txt-input').value = decodeSpecialChar(stackedCommand.getSoul());
      } else {
        commandArray.shift();
        $('txt-input').value = commandArray.join(' ');
      }
      searchGoogle();
      stack.pop();
      $('txt-input').value = '';
      updateDisplay();
    }
    if (command === 'wiki' || command.match(/^wiki .+/)) {
      
      if (commandArray[1] === undefined) {
        $('txt-input').value = decodeSpecialChar(stackedCommand.getSoul());
      } else {
        commandArray.shift();
        $('txt-input').value = commandArray.join(' ');
      }
      searchWikipedia();
      stack.pop();
      $('txt-input').value = '';
      updateDisplay();
    }
    if (command === 'youTube' || command === 'you' || command.match(/^youTube .+/) || command.match(/^you .+/)) {
      
      if (commandArray[1] === undefined) {
        $('txt-input').value = decodeSpecialChar(stackedCommand.getSoul());
      } else {
        commandArray.shift();
        $('txt-input').value = commandArray.join(' ');
      }
      searchYouTube();
      stack.pop();
      $('txt-input').value = '';
      updateDisplay();
    }

    switch (command) {  
    case 'about':
      stack.pop();
      inputText($('lst-stack').getAttribute('placeholder'));
      enterInput();
      inputText('https://github.com/NapesWeaver/rpnapes');
      enterInput();
      updateDisplay();
      $('txt-input').value = '';
      break;
    case 'constants':
      stack.pop();
      inputText('Φ ' + Φ);
      enterInput();
      inputText('℮ ' + ℮);
      enterInput();
      inputText('ɢ ' + ɢ);
      enterInput();
      inputText('ⅽ ' + ⅽ);
      enterInput();
      inputText('π ' + π);
      enterInput();
      updateDisplay();
      $('txt-input').value = '';
      break;
    case 'clear':
    case 'cls':
      btnClear();
      break;
    case 'darkMode':
      stack.pop();
      toggleDarkMode();
      updateDisplay(); 
      $('txt-input').value = '';
      break;
    case 'date':
      stack.pop();
      updateDisplay();
      insertDate();
      break;
    case 'fizzBuzz':
      fizzBuzz();
      break;  
    case 'flightLogger':
      stack.pop();
      $('txt-input').value = '';
      updateDisplay();
      window.open('https://orbiter-flight-logger.herokuapp.com/', '_blank').focus();
      break;
    case 'gravity':
      gravity();
      btnDelete();
      btnDelete();
      break;
    case 'How are ya':
    case 'How are ya doing':
    case 'How are you':
    case 'How are you doing':
    case 'How ya doing':
    case 'How you doing':
      inputText('Like a rhinestone cowboy!');
      enterInput();
      $('txt-input').value = '';
      updateDisplay();
      break;
    case 'Hallo':
    case 'Hello':
    case 'Hey':
    case 'Hi':
      inputText('Hallo there!');
      enterInput();
      $('txt-input').value = '';
      updateDisplay();
      break;
    case 'ipMapper':
      stack.pop();
      updateDisplay();
      $('txt-input').value = '';
      window.open('https://napesweaver.github.io/ip-mapper/', '_blank').focus();
      break;
    case 'keyboard':
      if (isMobile) {
        stack.pop();
        updateDisplay();
        $('txt-input').value = '';      
        toggleKeyboard();
      }
      break;
    case 'haptic':
      if (isMobile) {
        stack.pop();
        updateDisplay();
        $('txt-input').value = '';      
        toggleHaptic();
      }
      break;
    case 'load':
    case 'ls':
      stack.pop();
      $('txt-input').value = '';
      btnLoad();
      break;
    case 'locus':
      stack.pop();
      updateDisplay();
      inputText('lat:' + lat + ', lon:' + lng);
      break;
    case 'login':
      window.location.href = '/login'; 
      break;
    case 'logout':
      window.location.href = '/logout'; 
      break;
    case 'maths':
      stack.pop();
      inputText('acos() asin() atan() cos() sin() tan() ln() log() root()');
      enterInput();
      updateDisplay();
      $('txt-input').value = '';
      break;
    case 'napes':
      window.location.href = 'https://napesweaver.github.io/rpnapes/reference/index.html';
      break;
    case 'notes':
      stack.pop();
      updateDisplay();
      btnXoff();
      break;
    case 'off':
      stack.pop();
      updateDisplay();
      btnOff();
      break;
    case 'open':
      stack.pop();
      $('txt-input').value = '';
      openAFile();
      break;
    case 'openNotes':
      stack.pop();
      updateDisplay();      
      btnXoff();
      $('txt-input').value = '';
      openAFile();
      break;
    case 'print':
      stack.pop();
      updateDisplay();
      $('txt-input').value = '';
      printHtml();
      break;
    case 'save':
      stack.pop();
      updateDisplay();
      $('txt-input').value = '';
      btnSave();
      break;
    case 'run':
      stack.pop();
      updateDisplay();
      $('txt-input').value = '';
      runProgram();
      break;
    case 'shortcuts':
      stack.pop();
      inputText('Ctrl + z = Undo, Ctrl + y = Redo, Alt + Shift = Shift Keypad, Esc = Toggle interface button.');
      enterInput();
      updateDisplay();
      $('txt-input').value = '';
      break;
    case 'sound':
      stack.pop();
      updateDisplay();
      toggleSound();
      $('txt-input').value = '';
      break;
    case 'stopwatch':      
      stopwatchStart();
      break;
    case 'time':
      stack.pop();
      updateDisplay();
      inputText(getTime());
      break;
    case 'twig':
      stack.pop();
      updateDisplay();
      $('txt-input').value = '';         
      monOn();
      break;
    case 'twigStat':
      stack.pop();
      monStatus();
      $('txt-input').value = '';
      break;
    case 'tricorder':
      stack.pop();
      updateDisplay();
      $('txt-input').value = '';
      showTricorder();
      break;
    case 'unembed':
      stack.pop();
      updateDisplay();
      $('txt-input').value = ''; 
      widgetSrc.shift();
      saveTricorder();
      break;
    default:
      if (twig.health > 0) {
        $('twig').src = 'images/twig/hat-tip.gif';
      }
      break;
    }
  }
}

function parseEvaluation(input) {
  // If input does not contain quotes or regex (input is not part of another program) AND it contains [!^√]  
  if (!/(['"]|\/[ig]?\.|\/\))/.test(input) && /[!^√]/.test(input)) {
    input = input.replace(/ /g, '');
    // Parse nested symbols
    while (/\([-+*/!^√ⅽ℮ɢΦπ.\w]+!\)/.test(input)) input = parseNested(input, '!', 'factorial(');
    while (/\([-+*/!^√ⅽ℮ɢΦπ.\w]+√[-+*/!^√ⅽ℮ɢΦπ.\w]+\)/.test(input)) input = parseNested(input, '√', 'mathsRoot('); 
    while (/\([-+*/!^√ⅽ℮ɢΦπ.\w]+\^[-+*/!^√ⅽ℮ɢΦπ.\w]+\)/.test(input)) input = parseNested(input, '^', 'mathsPow(');
    // Parse in-line symbols
    while (/[(ⅽ℮ɢΦπ.\w]!/.test(input)) input = parseInline(input, '!', 'factorial(');
    while (/√[(ⅽ℮ɢΦπ.\w]/.test(input)) input = parseInline(input, '√', 'mathsRoot(');   
    while (/[ⅽ℮ɢΦπ.\w)]\^[-√(ⅽ℮ɢΦπ.\w]/.test(input)) input = parseInline(input, '^', 'mathsPow(');
    while (/[()ⅽ℮ɢΦπ.\w]!/.test(input)) input = parseInline(input, '!', 'factorial(');    
  }
  return input;
}

function parseNested(input, symbol, prefix) {
  var inputArr = input.split('');
  var index = 0;
  var startPos = 0;
  var leftP = null;
  var rightP = null;
  var maths = '';  
  // Get nested parentheses indices
  while (startPos === 0) {
    index++;
    if (inputArr[index] === symbol && inputArr[index + 1] !== '(') {
      startPos = index;
    }
  }
  while (index < inputArr.length && rightP === null) {   
    index++;
    if (inputArr[index] === ')') rightP = index;
  }
  while (index > 0 && leftP === null) {
    index--;
    if (inputArr[index] === '(') leftP = index;
  }
  // Get nested maths
  maths = inputArr.slice(leftP + 1, rightP).join('');
  // Parse nested maths
  if (/[(-ⅽ℮ɢΦπ\w][\^√][-ⅽ℮ɢΦπ\w)]/.test(maths) || /[(-ⅽ℮ɢΦπ\w]![-ⅽ℮ɢΦπ\w)]*/.test(maths)) {
    maths = parseInline(maths, symbol, prefix);
  }
  // Re-insert parsed maths
  if (!/\(\)/.test(maths)) {// Overwrite parentheses
    inputArr.splice(leftP + 1, rightP - leftP - 1, maths);
  } else {// Keep parentheses
    inputArr.splice(leftP, rightP - leftP + 1, maths);
  }
  input = inputArr.join('');
  return input;
}

function parseInline(input, symbol, prefix) {
  var inputArr = input.split('');
  var index = 0;
  var endPos = 0;
  var parentheses = 0;
  // Overwrite symbol
  while (inputArr[index] !== symbol) {
    index++;
  }  
  if (prefix === 'mathsRoot(' && (inputArr[index - 1] === undefined || !/[\d\w)]/g.test(inputArr[index - 1]))) {
    inputArr[index] = '';
  } else {// ^ √
    inputArr[index] = ',';
  }
  endPos = index;
  // Insert prefix
  while (index > 0 && (!/[-+*/^√(]/.test(inputArr[index]) || /[Ee]/.test(inputArr[index - 1]) || parentheses > 0)) {
    index--;    
    if (inputArr[index] === ')') parentheses++;
    if (inputArr[index] === '(') parentheses--;  
  }
  if (parentheses > -1 && index === 0 || (inputArr[index] === '(' && parentheses === 0)) {
    if (symbol === '!') {
      while (index > 0 && (/[acinost(]/.test(inputArr[index]))) {
        index--;
      }
    }
    inputArr.splice(index, 0, prefix);
  } else {
    inputArr.splice(index + 1, 0, prefix);
  }
  // Insert ')'
  parentheses = 0;
  do {
    endPos++;
    if (inputArr[endPos] === '(') parentheses++;
    if (inputArr[endPos] === ')') parentheses--;
    if (inputArr[endPos] === ',' && inputArr[endPos + 1] === '-') endPos = endPos + 2;  
  } while (endPos < inputArr.length && (!/[-+*/)]/.test(inputArr[endPos]) || /[Ee]/.test(inputArr[endPos - 1]) || parentheses > 0));    
  
  inputArr.splice(endPos, 0, ')');

  input = inputArr.join('');
  return input;
}

// Passed to parseNested() and parseInline() as partial strings eg. 'mathsRoot('
function mathsRoot(y, x) {
  if (x === undefined) {
    x = y;
    y = 2;
  }
  return Math.pow(x, 1/y);
}

function mathsPow(y, x) {
  return Math.pow(y, x);
}

// Wired to HTML
function lstStackFocus() {
  stackFocus = true;  
}

function txtInputFocus() {
  stackFocus = false;  
}

function convertBase(r) {
  fixDecimal = -1;
  sciDecimal = -1;

  var inputTxt = getX();
  var outputTxt = '';
  
  inputTxt.setRealPart(parseInt(inputTxt.realPart, 10));
  inputTxt.setImaginary(parseInt(inputTxt.imaginary, 10));

  radix = r;

  if (!isNaN(inputTxt.realPart)) outputTxt += parseInt(inputTxt.realPart).toString(radix);
  if (!isNaN(inputTxt.imaginary)) {
    if (!isNaN(inputTxt.realPart)) outputTxt += ' ';
    outputTxt += parseInt(inputTxt.imaginary).toString(radix) + 'j';
  }
  $('txt-input').value = outputTxt;
}

function resetConstants() {
  resetPhi();
  resetEulers();
  resetPi();
  resetGravitational();
  resetLightspeed();
}

function menuHelp() {
  backupUndo();
  help('help');
}

function onClickSelection(textarea){ 
  // https://stackoverflow.com/questions/13650534/how-to-select-line-of-text-in-textarea
  if (typeof textarea.selectionStart ==='undefined') return false;
  var startPos = (textarea.value.substring(0,textarea.selectionStart).lastIndexOf('\n') >= 0) ? textarea.value.substring(0,textarea.selectionStart).lastIndexOf('\n') : 0;
  var endPos = (textarea.value.substring(textarea.selectionEnd,textarea.value.length).indexOf('\n') >= 0) ? textarea.selectionEnd+textarea.value.substring(textarea.selectionEnd,textarea.value.length).indexOf('\n') : textarea.value.length;
  textarea.selectionStart = startPos + 1;
  textarea.selectionEnd = endPos;
  return true;  
}

// Experimental
function loadUserStack() {
  var xhr = new XMLHttpRequest();
  // Open - type, url/file, async
  xhr.open('GET', 'https://api.github.com/users', true);
  // readyState Values
  // 0: request not initialized
  // 1: server connection established
  // 2: request received
  // 3: processing request
  // 4: request finished and response is ready
  xhr.onreadystatechange = function(){
    // HTTP status
    // 200: ok
    // 403: forbidden
    // 404: not found
    if (this.readyState === 4 && this.status === 200) {
      var users = JSON.parse(this.responseText);
			
      for (var i in users) {
        //console.log(users[i].id, users[i].login);
      }
    }
  }
  xhr.send();
}

function loadText() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '../test/The Passing Strange.txt', true);
  xhr.onload = function(){
    if (this.status === 200) {
      //console.log(this.responseText);
    }
  }
  xhr.send();
}

function fizzBuzz() {
  backupUndo();
  if (!shifted) btnShift();
  $('txt-input').value = 'maxCount = prompt("Enter a number number", "25");';
  enterInput();
  calculate($('txt-input').value);
  $('txt-input').value = 'getFizzBuzz = function(w){ word = w;if (w % 3 === 0) word = "fizz"; if(w % 5 === 0) word = "buzz"; if (w % 15 === 0) word = "fizzbuzz"; return word}';
  enterInput();
  calculate($('txt-input').value);
  $('txt-input').value = 'for(w = 1; w <= maxCount; w++){ word=getFizzBuzz(w); $("txt-input").value=""; $("txt-input").value=word; enterInput(); }';
  enterInput();
  calculate($('txt-input').value);
  updateDisplay();
}

function openAFile() {
  $('open-file').click();
}

function getStackEntry() {
  backupUndo();  
  insertAtCursor($('txt-input'), getSelectedText('lst-stack'));
  $('txt-input').select();
}

function getIndex(name) {
  var t = document.getElementsByName(name)[0];
  return (t.value.substr(0, t.selectionStart).split('\n').length);
}

function getSelectedText(id) {

  var textComponent = $(id);
  var selectedText;

  // IE version
  if (document.selection !== undefined) {
    textComponent.focus();
    var sel = document.selection.createRange();
    selectedText = sel.text;
  } else if (textComponent.selectionStart !== undefined) {
    // Mozilla version
    var startPos = textComponent.selectionStart;
    var endPos = textComponent.selectionEnd;
    selectedText = textComponent.value.substring(startPos, endPos);
  }
  return selectedText.trim();  
}

function returnSelectedText(id) {

  var textComponent = $(id);
  var selectedText;
  // IE
  if (document.selection !== undefined) {
    textComponent.focus();
    var sel = document.selection.createRange();
    selectedText = sel.text;
  } else if (textComponent.selectionStart !== undefined) {
    // Firefox
    var startPos = textComponent.selectionStart;
    var endPos = textComponent.selectionEnd;
    selectedText = textComponent.value.substring(startPos, endPos);
  }
  return selectedText;
}

function isTextSelected(input){
  var startPos = input.selectionStart;
  var endPos = input.selectionEnd;
  var doc = document.selection;

  if(doc && doc.createRange().text.length !== 0){
    return true;
  } else if (!doc && input.value.substring(startPos,endPos).length != 0){
    return true;
  }
  return false;
}

function insertAtCursor(txtField, txtValue) {
  var startPos = txtField.selectionStart;
  var endPos = txtField.selectionEnd;

  txtField.value = txtField.value.substring(0, startPos) + txtValue + txtField.value.substring(endPos, txtField.value.length);
  txtField.selectionEnd = startPos + txtValue.length;
  // Deselect text for IE
  txtField.selectionStart = txtField.selectionEnd;
}

function moveCursorToEnd(el) {
  try {
    if (typeof el.selectionStart === 'number') {
      el.selectionStart = el.selectionEnd = el.value.length;
    } else if (typeof el.createTextRange !== 'undefined') {
      el.focus();
      var range = el.createTextRange();
      range.collapse(false);
      range.select();
    }
  } catch (err) {
    rpnAlert(err);
  }  
}

function rpnAlert(text) {
  backupUndo();
  $('txt-input').value = text;
  $('txt-input').select();
}

function inputText(text) {
  $('txt-input').value = text;
}

function insertText(text) {
  backupUndo();
  insertAtCursor($('txt-input'), text);
  $('txt-input').focus();
}

function updateDisplay() {
  $('lst-stack').value = '';  
  // Needed for responsive textarea
  unFloat();
  // Buffer stack display
  for (var i = 0; i < $('lst-stack').getAttribute('rows') ; i++) {
    $('lst-stack').value += ' \n';
  }
  // Print to stack display
  for (var sta in stack) {
    $('lst-stack').value += '\n';
    $('lst-stack').value = prettyPrint(sta,$('lst-stack').value);
  }
  colorSaveButton();
  $('lst-stack').scrollTop = $('lst-stack').scrollHeight;
  $('txt-input').select();
}

function printHtml() {
  print();
}

function isANumber(testString) {  
  var isNum = true;
  if (isNaN(testString)) isNum = false;
  if (/[ⅽ℮ɢΦπ]/g.test(testString)) isNum = true;
  return isNum;
}

function prettyPrint(i, content) {
  // If not a number and not imaginary
  if (!isANumber(stack[i].getRealPart()) && !isANumber(stack[i].getImaginary())) {
    content += decodeSpecialChar(stack[i].getSoul());
  } else {// There is a real component
    if (isANumber(stack[i].getRealPart())) {      
      content += formatNumber(stack[i].getRealPart().toString());
      if (isANumber(stack[i].getImaginary())) {// There is an imanginary component        
        if (stack[i].getImaginary().charAt(0) === '-') {
          // Append negative imaginary number
          content += ' - ' + formatNumber(stack[i].getImaginary().toString()).substring(1) + 'j';
        } else {
          // Append positive imaginary number
          content += ' + ' + formatNumber(stack[i].getImaginary().toString()) + 'j';
        }
      }
    } else {// There is no real component
      if (stack[i].getImaginary().charAt(0) === '-') {
        // Append negative imaginary number
        content += '-' + formatNumber(stack[i].getImaginary().toString()).substring(1) + 'j';
      } else {
        // Append positive imaginary number
        content += formatNumber(stack[i].getImaginary().toString()) + 'j';
      }
    }// If there are units, append units
    if (stack[i].getUnits() !== 'null') content += ' ' + decodeSpecialChar(stack[i].getUnits());          
  }
  return content;
}

function colorSaveButton() {
  var index = 0;
  try {
    index = getCookie('STACK').indexOf('=') + 1;
    if (getCookie('STACK').substr(index).trim() !== nestArrayByBrowser(stack).trim()) {
      $('btn-save').style.color = '#000000';
    } else {
      $('btn-save').style.color = '#D4D0C8';
    }
  } catch (err) { rpnAlert('load Stack error.'); }
}

function storeCookie(aName, tmpArray) {
  var d = new Date();
  // years * days * hours * min * sec * mili second
  d.setTime(d.getTime() + (1 * 365 * 24 * 60 * 60 * 1000));
  var expires = '; expires=' + d.toUTCString();
  document.cookie = aName + '=' + tmpArray + expires + 'SameSite=Lax;'+';path=/';
}

function getCookie(cname) {
  var name = cname + '=';
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var cookieItem = ca[i];

    while (cookieItem.charAt(0) === ' ') {
      cookieItem = cookieItem.substring(1);
    }
    if (cookieItem.indexOf(name) === 0) {
      return cookieItem.substring(name.length, cookieItem.length);
    }
  }
  return '';
}

function encodeSpecialChar(tmpString) {
  tmpString = tmpString.replace(/%/g, '&#37');
  tmpString = tmpString.replace(/,/g, '&#44');
  tmpString = tmpString.replace(/;/g, '&#59');
  tmpString = tmpString.replace(/=/g, '&#61');
  tmpString = tmpString.replace(/_/g, '&#95');
  tmpString = tmpString.replace(/°/g, '&deg');// degree
  //tmpString = tmpString.replace(/±/g, "&#177");
  //tmpString = tmpString.replace(/²/g, "&#178");
  //tmpString = tmpString.replace(/³/g, "&#179");
  //tmpString = tmpString.replace(/µ/g, "&#181");// micro
  //tmpString = tmpString.replace(/¹/g, "&#185");
  //tmpString = tmpString.replace(/¼/g, "&#188");// 1/2
  //tmpString = tmpString.replace(/½/g, "&#189");// 1/4
  //tmpString = tmpString.replace(/¾/g, "&#190");// 3/4
  //tmpString = tmpString.replace(/Ð/g, "&#208");// ETH
  //tmpString = tmpString.replace(/Þ/g, "&#222");// THORN
  //tmpString = tmpString.replace(/Δ/g, "&#916");// Delta
  tmpString = tmpString.replace(/Ω/g, '&#937');// Omega
  //tmpString = tmpString.replace(/θ/g, "&#952");// Theta
  //tmpString = tmpString.replace(/ψ/g, "&#968");// Psi
  //tmpString = tmpString.replace(/†/g, "&#8224");// dagger
  //tmpString = tmpString.replace(/‡/g, "&#8225");// double dagger
  //tmpString = tmpString.replace(/•/g, "&#8226");// bullet
  //tmpString = tmpString.replace(/…/g, "&#8230");// ellipsis
  //tmpString = tmpString.replace(/⁰/g, "&#8304");
  //tmpString = tmpString.replace(/⁴/g, "&#8308");
  //tmpString = tmpString.replace(/⁵/g, "&#8309");
  //tmpString = tmpString.replace(/⁶/g, "&#8310");
  //tmpString = tmpString.replace(/⁷/g, "&#8311");
  //tmpString = tmpString.replace(/⁸/g, "&#8312");
  //tmpString = tmpString.replace(/⁹/g, "&#8313");
  //tmpString = tmpString.replace(/⁻/g, "&#8315");// superscript minus    
  //tmpString = tmpString.replace(/€/g, "&#8364");// Euro
  //tmpString = tmpString.replace(/∞/g, "&#8734");// Infinity
  //tmpString = tmpString.replace(/∠/g, "&#8736");// angle
  //tmpString = tmpString.replace(/∴/g, "&#8756");// therefore
  //tmpString = tmpString.replace(/≅/g, "&#8773");// approx. equal
  //tmpString = tmpString.replace(/⊕/g, "&#8853");// direct sum
  //tmpString = tmpString.replace(/⊗/g, "&#8855");// vector product
  //tmpString = tmpString.replace(/⊥/g, "&#8869");// perpendicular
  //tmpString = tmpString.replace(/◊/g, "&#9674");// lozenge
  //tmpString = tmpString.replace(/♠/g, "&#9824");
  //tmpString = tmpString.replace(/♣/g, "&#9827");
  tmpString = tmpString.replace(/♥/g, '&#9829');
  //tmpString = tmpString.replace(/♦/g, "&#9830");
  // tmpString = tmpString.replace(/ⅽ/g, '&#8573');
  // tmpString = tmpString.replace(/℮/g, '&#8494');
  // tmpString = tmpString.replace(/ɢ/g, '&#610');
  // tmpString = tmpString.replace(/Φ/g, '&#934');// Phi 
  return tmpString;
}

function decodeSpecialChar(tmpString) {
  tmpString = tmpString.replace(/&#37/g, '%');
  tmpString = tmpString.replace(/&#44/g, ',');
  tmpString = tmpString.replace(/&#59/g, ';');
  tmpString = tmpString.replace(/&#61/g, '=');
  tmpString = tmpString.replace(/&#95/g, '_');
  tmpString = tmpString.replace(/&deg/g, '°');
  //tmpString = tmpString.replace(/&#177/g, "±");
  //tmpString = tmpString.replace(/&#178/g, "²");
  //tmpString = tmpString.replace(/&#179/g, "³");
  //tmpString = tmpString.replace(/&#181/g, "µ");
  //tmpString = tmpString.replace(/&#185/g, "¹");
  //tmpString = tmpString.replace(/&#188/g, "¼");
  //tmpString = tmpString.replace(/&#189/g, "½");
  //tmpString = tmpString.replace(/&#190/g, "¾");
  //tmpString = tmpString.replace(/&#208/g, "Ð");
  //tmpString = tmpString.replace(/&#222/g, "Þ");
  //tmpString = tmpString.replace(/&#916/g, "Δ");
  tmpString = tmpString.replace(/&#937/g, 'Ω');
  //tmpString = tmpString.replace(/&#952/g, "θ");
  //tmpString = tmpString.replace(/&#968/g, "ψ");
  //tmpString = tmpString.replace(/&#8224/g, "†");
  //tmpString = tmpString.replace(/&#8225/g, "‡");
  //tmpString = tmpString.replace(/&#8226/g, "•");
  //tmpString = tmpString.replace(/&#8230/g, "…");
  //tmpString = tmpString.replace(/&#8304/g, "⁰");
  //tmpString = tmpString.replace(/&#8308/g, "⁴");
  //tmpString = tmpString.replace(/&#8309/g, "⁵");
  //tmpString = tmpString.replace(/&#8310/g, "⁶");
  //tmpString = tmpString.replace(/&#8311/g, "⁷");
  //tmpString = tmpString.replace(/&#8312/g, "⁸");
  //tmpString = tmpString.replace(/&#8313/g, "⁹");
  //tmpString = tmpString.replace(/&#8315/g, "⁻");
  //tmpString = tmpString.replace(/&#8364/g, "€");
  //tmpString = tmpString.replace(/&#8734/g, "∞");
  //tmpString = tmpString.replace(/&#8736/g, "∠");
  //tmpString = tmpString.replace(/&#8756/g, "∴");
  //tmpString = tmpString.replace(/&#8773/g, "≅");
  //tmpString = tmpString.replace(/&#8853/g, "⊕");
  //tmpString = tmpString.replace(/&#8855/g, "⊗");
  //tmpString = tmpString.replace(/&#8869/g, "⊥");
  //tmpString = tmpString.replace(/&#9674/g, "◊");
  //tmpString = tmpString.replace(/&#9824/g, "♠");
  //tmpString = tmpString.replace(/&#9827/g, "♣");
  tmpString = tmpString.replace(/&#9829/g, '♥');
  //tmpString = tmpString.replace(/&#9830/g, "♦");
  // tmpString = tmpString.replace(/&#8573/g, 'ⅽ');
  // tmpString = tmpString.replace(/&#8494/g, '℮');
  // tmpString = tmpString.replace(/&#610/g, 'ɢ');
  // tmpString = tmpString.replace(/&#934/g, 'Φ');
  // tmpString = tmpString.replace(/&#960/g, 'π');

  return tmpString;
}

function extractReal(tmpString) {
  var tmpReal = '';
  if (radix === 10) {  
    // We are checking that it is not a constant or a number followed by evaluation symbols && an not an imaginary number && not an IP address
    if (!/^[-+]?[ ]*[ⅽ℮ɢΦπ]?[0-9]*[.]?[0-9]*[eE]?[-+]?[0-9]*\s*[;/<>?:`~!@#$%^√&*x×(){}[\]|\\_=]+/g.test(tmpString) && !/^[-+]?[ ]*[ⅽ℮ɢΦπ]?[0-9]*[.]?[0-9]*[eE]?[-+]?[0-9]*j|^[-+]?[ ]*Infinityj/g.test(tmpString) && !/^\d+[.]\d*[.]\d*/g.test(tmpString)) {
      
      if (/^[-+]?[ ]*Infinity/g.test(tmpString)) {
        tmpReal += tmpString.match(/^[-+]?[ ]*Infinity(?!j)/);
      } else {
        tmpReal += tmpString.match(/^[-+]?[ ]*[ⅽ℮ɢΦπ]?[0-9]*[.]?[0-9]*[eE]?[-+]?[0-9]*(?!j)/);
      }      
    }
  }
  if (radix === 2) {
    // Looking for a binary number but not an imaginary number
    if (/^[-+]?[0-1]+/g.test(tmpString) && !/^[-+]?[0-1]+j/g.test(tmpString)) {
      tmpReal = parseInt(tmpString, radix);
    }
  }
  if (radix === 8) {
    // Looking for an ocatal number but not an imaginary number
    if (/^[-+]?[0-7]+/g.test(tmpString) && !/^[-+]?[0-7]+j/g.test(tmpString)) {
      tmpReal = parseInt(tmpString, radix);
    }
  }
  if (radix === 16) {
    // Looking for a hexadecimal number but not an imaginary number
    if (/^[-+]?[0-9a-f]+/g.test(tmpString) && !/^[-+]?[0-9a-f]+j/g.test(tmpString)) {
      tmpReal = parseInt(tmpString, radix);
    }
  }
  tmpReal = tmpReal.replace(/ /g, '');
  if (tmpReal.charAt(0) === '+') tmpReal = tmpReal.substring(1);
  if (tmpReal === '' || /^[eE]/g.test(tmpReal)) tmpReal = NaN;
  return tmpReal;
}

function extractImaginary(tmpString) {
  var tmpImaginary = '';  

  if (radix === 10) { 
    tmpImaginary += tmpString.match(/[-+]?[ ]*[ⅽ℮ɢΦπ]?[0-9]*[.]?[0-9]*[eE]?[-+]?[0-9]*j|[-+]?[ ]*Infinityj/);    
    tmpImaginary = tmpImaginary.replace(/ /g, '');
    if (tmpImaginary.charAt(0) === '+') tmpImaginary = tmpImaginary.substring(1);
    // Remove 'j'
    tmpImaginary = tmpImaginary.substring(0, tmpImaginary.length - 1);     
  } else {
    if (radix === 2) tmpImaginary += tmpString.match(/[-+]?[ ]*[0-1]+j/);
    if (radix === 8) tmpImaginary += tmpString.match(/[-+]?[ ]*[0-7]+j/);
    if (radix === 16) tmpImaginary += tmpString.match(/[-+]?[ ]*[a-f0-9]+j/);
    if (tmpImaginary.charAt(1) === ' ') {
      tmpImaginary = tmpImaginary.replace(/ /g, '');
    }
    tmpImaginary = tmpImaginary.substring(0, tmpImaginary.length - 1);
    tmpImaginary = parseInt(tmpImaginary, radix);
  }
  if (tmpImaginary === '' || /^[eE]|nul/g.test(tmpImaginary)) tmpImaginary = NaN;
  return tmpImaginary;
}

function extractUnits(tmpString) {
  var tmpUnits = '';
  if (tmpString.indexOf('Infinity') !== -1) tmpString = tmpString.replace(/Infinity/g, '');

  if (radix !== 16) {
    tmpUnits += tmpString.match(/(?![eE][-+]?[0-9]+)(?![j]\b)(?:[1][/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9/]*$/);
  } else {
    tmpUnits += tmpString.match(/(?![eE][-+]?[0-9]+)(?![a-f0-9]+j*\b)(?![j]\b)(?:[1][/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9/]*$/);    
  }
  return tmpUnits;
}

function addUnits() {
  var units = '';
  var unitsY = decodeSpecialChar(stack[stack.length - 1].getUnits());
  var objX = getX();
  var unitsX = decodeSpecialChar((objX.getUnits()));

  if (unitsY !== 'null' && (unitsY === unitsX || unitsX === 'null')) units = ' ' + unitsY;
  if (unitsX !== 'null' && (unitsX === unitsY || unitsY === 'null')) units = ' ' + unitsX;
  if (units.indexOf('-') !== -1) units = rewriteNegUnitExp(units);
  return units;
}

function multiplyUnits(multiplier) {
  var units = '';
  var unitsY = '';

  if (stack.length - 1 < 0 || stack[stack.length - 1].getSoul() === '') {
    unitsY = 'null';
  } else {
    unitsY = decodeSpecialChar(stack[stack.length - 1].getUnits());
  }
  var objX = getX();
  var unitsX = decodeSpecialChar(objX.getUnits());
  if ((unitsY !== 'null' || unitsX !== 'null')) {
    units = ' ' + processUnits(unitsY, unitsX, multiplier, true);
  }
  return units;
}

function divideUnits(multiplier) {
  var units = '';
  var unitsY = decodeSpecialChar(stack[stack.length - 1].getUnits());
  var objX = getX();
  var unitsX = decodeSpecialChar(objX.getUnits());

  if ((unitsY !== 'null' || unitsX !== 'null') && unitsY !== unitsX) {
    units = ' ' + processUnits(unitsY, unitsX, multiplier, false);
  }
  return units;
}

function inverseUnits(units) {
  var tmpArray = [];
  var invertedUnits = '';

  if (units !== 'null') {
    units = rewriteNegUnitExp(units);
    if (units.indexOf('/') !== -1) {
      tmpArray = units.split('/');
      
      if (tmpArray[0].indexOf('1') === -1) {
        invertedUnits += ' ' + tmpArray[1] + '/' + tmpArray[0];
      } else {
        invertedUnits += ' ' + tmpArray[1];
      }
    } else {
      invertedUnits += ' 1/' + units;
    }
  }
  return invertedUnits;
}

function splitUnits(tmpUnits) {
  var unitsA = '';
  var unitsB = '';

  if (tmpUnits.indexOf('/') !== -1) {
    tmpUnits = tmpUnits.split('/');
    unitsA = tmpUnits[0];
    unitsB = tmpUnits[1];
  } else {
    unitsA += tmpUnits;
  }
  unitsA = unitsA.split('*');
  unitsB = unitsB.split('*');

  return [unitsA, unitsB];
}

function processUnits(unitsY, unitsX, multiplier, multiply) {

  var unitsSplit = [];
  var numeratorY = '';
  var denominatorY = '';
  var numeratorX = '';
  var denominatorX = '';
  var unitsCombined = '';

  unitsSplit = splitUnits(unitsY);
  numeratorY = unitsSplit[0];
  denominatorY = unitsSplit[1];
  unitsSplit = splitUnits(unitsX);
  numeratorX = unitsSplit[0];
  denominatorX = unitsSplit[1];

  if (multiply) {
    // Multiplication
    numeratorX = unitAddition(numeratorY, numeratorX, multiplier, true);
    denominatorX = unitAddition(denominatorY, denominatorX, multiplier, true);
  } else {
    // Division
    numeratorY = unitAddition(numeratorY, denominatorX, multiplier, true);

    if (denominatorY !== '') {
      denominatorY = unitAddition(denominatorY, numeratorX, multiplier, true);
    } else {
      denominatorY = numeratorX.join('*');
    }
    numeratorX = numeratorY;
    denominatorX = denominatorY;
  }
  unitsCombined = unitAddition(numeratorX.split('*'), denominatorX.split('*'), 1, false);

  if (unitsCombined.indexOf('-') !== -1) unitsCombined = rewriteNegUnitExp(unitsCombined);
  return unitsCombined;
}

function unitAddition(unitsA, unitsB, multiplier, add) {
  var unitsCombined = '';
  var unitsDoNotMatch = true;

  for (var a in unitsA) {
    var tmpUnitsA = '';
    var expA = 1;
    unitsDoNotMatch = true;

    tmpUnitsA += unitsA[a].match(/[Ω♥a-zA-Z]+/);
    if (unitsA[a].indexOf('^') !== -1) expA = unitsA[a].match(/[-]?[.0-9]+/);
    // Check for matches between tmpUnitsA and unitsB
    for (var b in unitsB) {
      var tmpUnitsB = '';
      var expB = 1;
      tmpUnitsB += unitsB[b].match(/[Ω♥a-zA-Z]+/);

      if (unitsB[b].indexOf('^') !== -1) expB = unitsB[b].match(/[-]?[.0-9]+/);

      if (tmpUnitsA === tmpUnitsB) {
        unitsDoNotMatch = false;

        if (add) {
          expA = (parseFloat(expA) * multiplier) + parseFloat(expB);
        } else {
          expA = parseFloat(expA) - parseFloat(expB);
        }
        unitsCombined = appendUnits(unitsCombined, tmpUnitsA, expA);
      }
    }
    if (unitsDoNotMatch) {
      if (add) expA = expA * multiplier;
      unitsCombined = appendUnits(unitsCombined, tmpUnitsA, expA);
    }
  }// Check tmpUnitsB for units that didn't match unitsA
  for (b in unitsB) {
    tmpUnitsB = '';
    expB = 1;
    unitsDoNotMatch = true;
    tmpUnitsB += unitsB[b].match(/[Ω♥a-zA-Z]+/);

    if (unitsB[b].indexOf('^') !== -1) expB = unitsB[b].match(/[-]?[.0-9]+/);

    for (a in unitsA) {
      tmpUnitsA = '';
      tmpUnitsA += unitsA[a].match(/[Ω♥a-zA-Z]+/);

      if (tmpUnitsB === tmpUnitsA) unitsDoNotMatch = false;
    }
    if (unitsDoNotMatch) {
      if (!add) expB = expB * -1;
      unitsCombined = appendUnits(unitsCombined, tmpUnitsB, parseFloat(expB));
    }
  }
  return unitsCombined;
}

function appendUnits(unitString, tmpUnits, exponent) {

  if (tmpUnits !== 'null') {
    if (exponent === 1) {

      if (unitString.length > 0) unitString += '*';
      unitString += tmpUnits;
    } else if (exponent !== 0) {

      if (unitString.length > 0) unitString += '*';
      if (exponent.toString().indexOf('.') < 0) {
        unitString += tmpUnits + '^' + exponent;
      } else {
        unitString += tmpUnits + '^' + toFixed(exponent, 2);
      }
    }
  }
  return unitString;
}

function removeNegativeExponentSign(factorsArray) {
  var tmpArray = [];
  var i = 0;

  while (i < factorsArray.length) {
    if (factorsArray[i].indexOf('-') !== -1) {
      var tmpString = '';
      tmpString += factorsArray.splice(i, 1).toString();
      tmpString = tmpString.replace(/-/g, '');
      tmpArray.push(tmpString);
      i--;
    }
    i++;
  }
  return tmpArray;
}

function rewriteNegUnitExp(tmpUnits) {
  var newUnits = '';

  if (tmpUnits.indexOf('-') !== -1) {
    var unitsSplit = [];
    var numerator = [];
    var denominator = [];
    var changedUnits = [];

    unitsSplit = splitUnits(tmpUnits);
    numerator = unitsSplit[0];
    denominator = unitsSplit[1];

    changedUnits = removeNegativeExponentSign(numerator);

    denominator = unitAddition(denominator, changedUnits, 1, true);
    denominator = denominator.split('*');

    changedUnits = [];
    changedUnits = removeNegativeExponentSign(denominator);

    numerator = unitAddition(numerator, changedUnits, 1, true);
    changedUnits = [];
    denominator = unitAddition(denominator, changedUnits, 1, true);

    if (numerator === '' && denominator !== '') numerator += '1';
    newUnits += numerator;

    if (denominator !== '') newUnits += '/' + denominator;
  } else {
    newUnits = tmpUnits;
  }
  return newUnits;
}

function setFixDecimal(value) {
  if (value === '' || isNaN(value) || parseInt(value) < -1 || parseInt(value) > 17) {
    throw 'Enter an integer from -1 to 17 first.';
  }
  fixDecimal = parseInt(value);
}

function setSciDecimal(value) {
  if (value === '' || isNaN(value) || parseInt(value) < -1 || parseInt(value) > 17) {
    throw 'Enter an integer from -1 to 17 first.';
  }
  sciDecimal = parseInt(value);
}

function formatNumber(possibleNumber) {

  if (!/[ⅽ℮ɢΦπ]/.test(possibleNumber)) {

    if (radix === 10) {
      
      if (!isNaN(possibleNumber)) {
        if (fixDecimal !== -1) {
          possibleNumber = toFixed(possibleNumber, fixDecimal);
        }
        if (sciDecimal !== -1) {
          possibleNumber = parseFloat(possibleNumber).toExponential(sciDecimal);
        }
      }
    } else {  
      if (!isNaN(possibleNumber)) {
        possibleNumber = parseInt(possibleNumber).toString(radix);
      }
    }
  }
  return possibleNumber;
}

function toFixed(value, p) {

  var precision = p || 0,
    power = Math.pow(10, precision),
    absValue = Math.abs(Math.round(value * power)),
    result = (value < 0 ? '-' : '') + String(Math.floor(absValue / power));

  if (precision > 0) {
    var fraction = String(absValue % power),
      padding = new Array(Math.max(precision - fraction.length, 0) + 1).join('0');
    result += '.' + padding + fraction;
  }
  return result;
}

//////// Notes ///////////////////////////////////////////////////////////////////////

var notes = [];
var backupNotes = [];
var restoreNotes = [];

function updateDisplayNotes() {
  $('lst-notes').value = '';
  // Needed for responsive textarea
  unFloat();
  // Print to notes display
  for (var note in notes) {
    $('lst-notes').value += decodeSpecialChar(notes[note]);
    $('lst-notes').value += '\n';
  }
  $('lst-notes').value = $('lst-notes').value.trim();
  $('lst-notes').value += '\n';

  if (notes.length === 1 && notes[0] === '') {
    $('lst-notes').value = '';
  }
}

function colorSaveNotesButton() {
  var index = getCookie('NOTES').indexOf('=') + 1;
  var cookieValue = getCookie('NOTES').substr(index);
  var tmpNotes = encodeSpecialChar($('lst-notes').value);
  var notesValue = nestArrayByBrowser(tmpNotes.split('\n'));
  if (notesValue.substring(notesValue.length -1) === '_') notesValue = notesValue.slice(0, -1);
  if (cookieValue === notesValue) {
    $('btn-save-notes').style.color = '#919191';
  } else {
    $('btn-save-notes').style.color = '#000000';
  }
}

function colorUndoNotesButton() {
  if (backupNotes.length > 1) {
    $('btn-undo-notes').style.color = '#01c401';
  } else {
    $('btn-undo-notes').style.color = '#919191';
  }
  if (restoreNotes.length > 0) {
    $('btn-redo-notes').style.color = '#01c401';
  } else {
    $('btn-redo-notes').style.color = '#919191';
  }  
}

function notEqualToBackupNotes() {
  var prevNote = backupNotes[backupNotes.length - 1];
  var currentNote = $('lst-notes').value;
  return prevNote !== currentNote;
}

function processNoteBackup() {
  backupNotes.push(nestArrayByBrowser(notes));
  colorUndoNotesButton();
}

function backupUndoNotes() {
  if (notEqualToBackupNotes()) {
    restoreNotes.length = 0;
    processNoteBackup();
    notes = $('lst-notes').value.split('\n');
    if (notes[notes.length - 1] === '') notes.pop();
  }
}

function loadNotes() {
  var index = 0;  
  index = getCookie('NOTES').indexOf('=') + 1;
  try {
    notes = [];
    notes = notes.concat(splitArrayByBrowser(getCookie('NOTES').substr(index)));
    if (notes[0] === '' && notes[1] === '') notes.pop();
  } catch (err) {
    notes.push('Load error.');
  }
  updateDisplayNotes();
  $('btn-save-notes').style.color = '#919191';
  $('lst-notes').scrollTop = $('lst-notes').scrollHeight;
}

function btnLoadNotes() {
  backupUndoNotes();
  loadNotes();
}

function btnSaveNotes() {
  if ($('btn-save-notes').style.color !== 'rgb(145, 145, 145)') {
    backupUndoNotes();
  }
  $('btn-save-notes').style.color = 'rgb(145, 145, 145)';
  notes = encodeSpecialChar($('lst-notes').value.trim()).split('\n');
  storeCookie('NOTES', nestArrayByBrowser(notes));
}

function btnUndoNotes() {
  if (backupNotes.length > 1) {
    restoreNotes.push(nestArrayByBrowser(notes));
    notes = splitArrayByBrowser(backupNotes.pop());
    updateDisplayNotes();
  }
  colorUndoNotesButton();
  colorSaveNotesButton();
}

function btnRedoNotes() {
  if (restoreNotes.length > 0) {
    backupNotes.push(nestArrayByBrowser(notes));
    notes = splitArrayByBrowser(restoreNotes.pop());
    updateDisplayNotes();
  }
  colorUndoNotesButton();
  colorSaveNotesButton();
}

function btnClearNotes() {
  if ($('lst-notes').value !== '') {
    processNoteBackup();
    $('lst-notes').value = '';
    notes = [];
    colorSaveNotesButton();
  }
}

function btnDeleteNotes() {
  var txtField = $('lst-notes').value;
  var startPos = $('lst-notes').selectionStart;
  var endPos = $('lst-notes').selectionEnd;  
  $('lst-notes').value = txtField.slice(0, startPos) + txtField.slice(endPos + 1, txtField.length);
  $('lst-notes').setSelectionRange(startPos, startPos);
  $('lst-notes').focus();  
  if (isMobile) $('lst-notes').readOnly = true;
  backupUndoNotes();
  colorSaveNotesButton();
}

function btnCopyNotes() {
  //document.execCommand('copy');
  if (getSelectedText('lst-notes') === '') {
    navigator.clipboard.writeText($('lst-notes').value);
  } else {
    navigator.clipboard.writeText(getSelectedText('lst-notes'));
  }
  $('lst-notes').focus();
}

function btnPasteNotes() {
  var copiedText = navigator.clipboard.readText();
  copiedText.then(copiedText => {
    insertAtCursor($('lst-notes'), copiedText);
    backupUndoNotes();  
    colorSaveNotesButton();
  });
}

//////// Tricorder ///////////////////////////////////////////////////////////////////

var viewPortSrc = [];
var viewPort2Src = [];
var widgetSrc = [];

var lat;
var lng;

function loadTricorder() {
  var index = 0;

  index = getCookie('TRICORDER').indexOf('=') + 1;
  widgetSrc = splitArrayByBrowser(getCookie('TRICORDER').substr(index));

  for (var i in widgetSrc) {
    widgetSrc[i] = decodeSpecialChar(widgetSrc[i]);
    if (widgetSrc[i] === '') {
      widgetSrc.splice(i, 1);
    }
  }
}

function power() {
  var onOff;
  onOff = $('tricorderskin').src.toString().indexOf('tricorderon');

  if (onOff === -1) return false;
  return true;
}

function muteAudio(mute) {

  if (mute) {
    for (var i = 0; i < $('tricorder').getElementsByTagName('audio').length; i++) {
      $('tricorder').getElementsByTagName('audio')[i].muted = true;
    }
  } else {
    for (i = 0; i < $('tricorder').getElementsByTagName('audio').length; i++) {
      $('tricorder').getElementsByTagName('audio')[i].muted = false;
    }
  }
}

function playAudio(obj) {
  if (!$('menu-sound-li').classList.contains('strikethrough')) obj.play();
}

// Power On/Off.
function button1() {
  haptic();
  if (power()) {
    tricorderOff();
  } else {
    tricorderOn();
  }
}

function tricorderOff() {
  muteAudio(true);
  $('widget').src = '';
  $('widget').classList.remove('visible');
  $('widget').classList.add('hidden');
  $('viewport').src = '';
  $('viewport').classList.remove('visible');
  $('viewport').classList.add('hidden');
  $('tricorderskin').src = 'images/tricorder.png';
}

function tricorderOn() {
  muteAudio(false);  
  $('tricorderskin').src = 'images/tricorderon.png';
  $('viewport').src = 'https://www.youtube.com/embed/RGDEKqU0T2k?autoplay=0';  
  $('viewport').classList.remove('hidden');
  $('viewport').classList.add('visible');
  playAudio($('working'));
  playAudio($('hailing-frequencies'));
  getLocation();
}

function preloadImages() {
  var tricorderOnImg = new Image(); 
  tricorderOnImg.src = 'images/tricorderon.png';
}

function button2() {
  if (power()) {    
    haptic();

    if (viewPortSrc.indexOf($('viewport').src) !== -1) {
      var i = viewPortSrc.indexOf($('viewport').src);

      if (i === viewPortSrc.length - 1) i = -1;
      $('viewport').src = viewPortSrc[i + 1];
    } else {
      $('viewport').src = viewPortSrc[0];
    }
    playAudio($('keypress2'));
  }
}

function button3() {
  if (power()) {
    haptic();

    if (viewPort2Src.indexOf($('viewport').src) !== -1) {
      var i = viewPort2Src.indexOf($('viewport').src);

      if (i === viewPort2Src.length - 1) i = -1;
      $('viewport').src = viewPort2Src[i + 1];
    } else {
      $('viewport').src = viewPort2Src[0];
    }
    playAudio($('keypress1'));
    playAudio($('data-received'));
  }
}

function button4() {
  if (power()) {    
    haptic();

    if ($('widget').classList.contains('hidden')) {
      if (widgetSrc.indexOf($('widget').src) !== -1) {
        var i = widgetSrc.indexOf($('widget').src);

        if (i === widgetSrc.length - 1) i = -1;
        $('widget').src = widgetSrc[i + 1];
      } else {
        $('widget').src = widgetSrc[0];
      }
      $('widget').classList.remove('hidden');
      $('widget').classList.add('visible');
      playAudio($('scanner'));
      playAudio($('keypress6'));
    } else {
      $('widget').classList.remove('visible');
      $('widget').classList.add('hidden');
      playAudio($('keypress5'));
    }
  }
}
function button5() {
  if (power()) {
    haptic();

    if ($('widget').classList.contains('hidden')) {
      var srcString = '';
      var uniqueString = 'forecast';

      if ($('widget').src.indexOf(uniqueString) === -1) {
        // Forcast widget
        srcString += 'https://forecast.io/embed/#lat=' + lat + '&lon=' + lng + '&name=Current';
        $('widget').src = srcString;
      } else {
        // Dark Sky Map
        srcString += 'https://maps.darksky.net/@temperature,' + lat + ',' + lng + ',4?embed=true&timeControl=false&fieldControl=true&defaultField=temperature&defaultUnits=_f';
        $('widget').src = srcString;
      }
      $('widget').classList.remove('hidden');
      $('widget').classList.add('visible');
      playAudio($('keypress6'));
      playAudio($('computer-thinking'));
    } else {
      $('widget').classList.remove('visible');
      $('widget').classList.add('hidden');
      playAudio($('keypress5'));
    }
  }
}

function button6() {
  if (power()) {
    haptic();

    if ($('widget').classList.contains('hidden')) {      
      var srcString = '';
      // IP Mapper
      srcString += 'https://napesweaver.github.io/ip-mapper/';
      $('widget').src = srcString;
      $('widget').classList.remove('hidden');
      $('widget').classList.add('visible');
      playAudio($('keypress6'));
      playAudio($('verified'));
    } else {
      $('widget').src = '';
      $('widget').classList.remove('visible');
      $('widget').classList.add('hidden');
      playAudio($('keypress5'));
    }
  }
}

// Tricorder sensors
function sensor1() {
  if (power()) {    
    haptic();
    $('viewport').src = '';
    playAudio($('keypress7'));
    playAudio($('scanner'));
    $('viewport').src = 'https://tunein.com/embed/player/s249942/';// Classic Hits
  }
}

function sensor2() {
  if (power()) {
    haptic();
    $('viewport').src = '';
    playAudio($('keypress7'));
    playAudio($('scanner'));
    $('viewport').src = 'https://tunein.com/embed/player/s67176/';// BBC World Service
  }
}

function saveTricorder() {
  for (var i in widgetSrc) widgetSrc[i] = encodeSpecialChar(widgetSrc[i]);  
  storeCookie('TRICORDER', nestArrayByBrowser(widgetSrc));
}

///////////// Mathmon idName, xPos, yPos, objSize, health, speed, ammo ///////////////

var twig = new Mathmon('twig', 135, -365, 3, 100, 5, 6);
var tv = new Mathmon('tv', -45, -395, 30, 100, 7, 0);
var don = new Mathmon('don', -45, -420, 3, 100, 6, 0);
var theObjects = [3];
var worldBorders = { };

function Mathmon(idName, xPos, yPos, objSize, health, speed, ammo) {

  this.idName = idName;
  this.xPos = xPos;
  this.yPos = yPos;
  this.objSize = objSize;
  this.health = health;
  this.speed = speed;
  this.ammo = ammo;
}
Mathmon.prototype.setIdName = function (name) {
  this.idName = name;
};
Mathmon.prototype.getIdName = function () {
  return this.idName;
};
Mathmon.prototype.setXPos = function (x) {
  this.xPos = x;
};
Mathmon.prototype.setYPos = function (y) {
  this.yPos = y;
};
Mathmon.prototype.movXPos = function (x) {
  this.xPos += x;
};
Mathmon.prototype.movYPos = function (y) {
  this.yPos += y;
};
Mathmon.prototype.getXPos = function () {
  return this.xPos;
};
Mathmon.prototype.getYPos = function () {
  return this.yPos;
};
Mathmon.prototype.setObjSize = function (objSize) {
  return this.objSize = objSize;
};
Mathmon.prototype.getObjSize = function () {
  return this.objSize;
};
Mathmon.prototype.setHealth = function (health) {
  return this.health = health;
};
Mathmon.prototype.movHealth = function (health) {
  return this.health += health;
};
Mathmon.prototype.getHealth = function (health) {
  return this.health = health;
};
Mathmon.prototype.setSpeed = function (velocity) {
  this.speed = velocity;
  if (this.speed <= 0) this.speed = 1;
};
Mathmon.prototype.getSpeed = function () {
  return this.speed;
};
Mathmon.prototype.setAmmo = function (ammo) {
  this.ammo = ammo;
  if (ammo < 0) ammo = 0;
};
Mathmon.prototype.getAmmo = function () {
  return this.ammo;
};
Mathmon.prototype.toString = function () {
  return this.idName + ',' + this.xPos + ',' + this.yPos + ',' + this.objSize + ',' + this.health + ',' + this.speed + ',' + this.ammo;
};

function displayGIF(obj) {
  $(obj.idName).style.left = obj.xPos + 'px';
  $(obj.idName).style.top = obj.yPos + 'px';
}

function monStatus() {
  for (var i = 0; i < theObjects.length; i++) {
    inputText(theObjects[i].toString());
    enterInput();
    updateDisplay();
  }
}

function worldIsRunning() {
  if ($('twig').src.indexOf('pop') === -1) {
    return true;
  } else {
    return false;
  }
}

function monOn() {
  $('don').src = 'images/twig/don-jon.gif';
  $('don').className = 'visible';
  $('tv').src = 'images/twig/tv-off.gif';
  $('tv').className = 'visible';
  $('twig').src = 'images/twig/piece-frog.gif';
  $('twig').className = 'visible';
  twig.setHealth(100);
  worldBordersSet();
  worldEngine();
}

function monOff() {  
  $('twig').src = 'images/twig/pop.gif';
  twig.setHealth(0);
  $('twig').className = 'hidden';
  $('tv').className = 'hidden';
  $('don').className = 'hidden';
}

function resetMathmon() {
  $('txt-input').value = '';
  $('twig').src = 'images/twig/piece-frog.gif';

  for (var i = 0; i < theObjects.length; i++) {
    theObjects[i].setHealth(100);
  }
  twig.setXPos(135);
  twig.setYPos(-400);
  tv.setXPos(-45);
  tv.setYPos(-330);
  don.setXPos(-45);
  don.setYPos(-420);

  for (i = 0; i < theObjects.length; i++) {
    $(theObjects[i].idName).style.left = theObjects[i].xPos + 'px';
    $(theObjects[i].idName).style.top = theObjects[i].yPos + 'px';
  }
  worldBordersSet();
  worldEngine();
}

function loadMathMon(tmpStack) {
  if ((/*@cc_on!@*/false || !!document.documentMode) || isChrome || isSafari) {
    // Remove underscore from begining of string
    tmpStack = tmpStack.substr(1);
  }
  tmpStack = splitArrayByBrowser(tmpStack);  
  mathMonConstructor(tmpStack);
}

function mathMonConstructor(tmpStack) {
  var i = 0;
  while (tmpStack.length > 0) {

    var tmpArray = [];
    tmpArray = tmpStack.shift();
    tmpArray = tmpArray.split(',');

    theObjects[i].setXPos(parseInt(tmpArray[1]));
    theObjects[i].setYPos(parseInt(tmpArray[2]));
    theObjects[i].setObjSize(parseInt(tmpArray[3]));
    theObjects[i].setHealth(parseInt(tmpArray[4]));
    theObjects[i].setSpeed(parseInt(tmpArray[5]));
    theObjects[i].setAmmo(parseInt(tmpArray[6]));
    $(theObjects[i].idName).style.left = theObjects[i].xPos + 'px';
    $(theObjects[i].idName).style.top = theObjects[i].yPos + 'px';
    i++;
  }
}

function moveObj(obj, speed, xMov, yMov) {
  var index = 0;
  // Move obj
  obj.movXPos(speed * xMov);
  obj.movYPos(speed * yMov);
  // Find obj's index in theObjects array
  for (var o = 0; o < theObjects.length; o++) {
    if (obj.idName === theObjects[o].idName) { index = o; }
  }    
  // Check for collision with other objects
  for (var i = 0; i < theObjects.length; i++) {
    if (obj.idName !== theObjects[i].idName) {
      // Compute space between two objects
      var spaceX = Math.abs(obj.xPos - (theObjects[i].xPos + ((i - index) * (65 + theObjects.length))));
      var spaceY = Math.abs(obj.yPos - theObjects[i].yPos);
      // If spaceX and spaceY are smaller than the total size of the two objects: COLLISION!
      if (spaceX < (obj.objSize + theObjects[i].objSize) && spaceY < (obj.objSize + theObjects[i].objSize)) {
        // Move object which was hit
        moveObj(theObjects[i], speed + 1, xMov, yMov);                
        if (theObjects[i].idName === 'twig') {
          twig.movHealth(-1);
          inputText(twig.health);
          if (twig.health <= 0) {
            $('twig').src = 'images/twig/pop.gif';
            rpnAlert('Game Over');
            setTimeout(resetMathmon, 3000);
          }
        }
        if (theObjects[i].idName === 'tv') {
          // If not already animated
          if ($('tv').src.indexOf('tv-off') !== -1) {
            $('tv').src = 'images/twig/tv-pong.gif';
            staticTV();
          }
        }
        if (theObjects[i].idName === 'don') {
          // If not already animated
          if ($('don').src.indexOf('don-walk') === -1) {
            $('don').src = 'images/twig/don-walk.gif';
            donMove();
          }
        }
      }
    }
  }
  //inputText("twig:" + theObjects[0].xPos.toString() + " " + theObjects[0].yPos.toString() + " tv:" + theObjects[1].xPos.toString() + " " + theObjects[1].yPos.toString() + " don:" + theObjects[2].xPos.toString() + " " + theObjects[2].yPos.toString());
  displayGIF(obj);
}

function worldEngine() {
  if (worldIsRunning()) {
    for (var i = 0; i < theObjects.length; i++) {
      shifted ? transXBorders(i) : collideWithBorders(i);      
      displayGIF(theObjects[i]);
    }            
  }
  setTimeout(worldEngine, 90);
}

function worldBordersSet() {
  var height = $('lst-stack').offsetHeight;
  var width = $('lst-stack').offsetWidth;  

  if (window.innerWidth > 360) {
    worldBorders = {
      bTop: -(height + 345) + 21,
      bBottom: -345,
      bLeft: -129,
      bRight: width - 129 - 24
    }
  } else {
    worldBorders = {
      bTop: -(height + 270) + 21,
      bBottom: -270,
      bLeft: -84,
      bRight: width - 84 - 12
    }
  }
}

function collideWithBorders(i) {
  // The gifs are offset from each other in the html. Each is 64px * 64px.
  var gifWidth = 64;
  if (theObjects[i].yPos < worldBorders.bTop + (theObjects[i].objSize / 2)) { theObjects[i].setYPos(worldBorders.bTop + theObjects[i].objSize); }// Top border
  if (theObjects[i].yPos > worldBorders.bBottom - (theObjects[i].objSize / 2)) { theObjects[i].setYPos(worldBorders.bBottom - theObjects[i].objSize); }// Bottom border
  if (theObjects[i].xPos < worldBorders.bLeft - (i * gifWidth) + (theObjects[i].objSize / 2)) { theObjects[i].setXPos(worldBorders.bLeft - (i * gifWidth) + theObjects[i].objSize); }// Left border
  if (theObjects[i].xPos > worldBorders.bRight - (i * gifWidth) - (theObjects[i].objSize / 2)) { theObjects[i].setXPos(worldBorders.bRight - (i * gifWidth) - theObjects[i].objSize); }// Right border
}

function transXBorders(i) {
  var gifWidth = 64;  
  if (theObjects[i].yPos < worldBorders.bTop + (theObjects[i].objSize / 2)) { theObjects[i].setYPos(worldBorders.bBottom - theObjects[i].objSize); }// Top border
  if (theObjects[i].yPos > worldBorders.bBottom - (theObjects[i].objSize / 2)) { theObjects[i].setYPos(worldBorders.bTop + theObjects[i].objSize); }// Bottom border
  if (theObjects[i].xPos < worldBorders.bLeft - (i * gifWidth) + (theObjects[i].objSize / 2)) { theObjects[i].setXPos(worldBorders.bRight - (i * gifWidth) - theObjects[i].objSize); }// Left border
  if (theObjects[i].xPos > worldBorders.bRight - (i * gifWidth) - (theObjects[i].objSize / 2)) { theObjects[i].setXPos(worldBorders.bLeft - (i * gifWidth) + theObjects[i].objSize); }// Right border
}

function brownianMovement(obj) {
  var x = Math.floor(Math.random() * 2);
  var y = Math.floor(Math.random() * 2);

  if (Math.floor(Math.random() * 2) === 0) x = x * -1;
  if (Math.floor(Math.random() * 2) === 0) y = y * -1;
  moveObj(obj, obj.speed, x, y);
}

function gravity() {
  if (worldIsRunning()) {
    for (var i = 0; i < theObjects.length; i++) {
      moveObj(theObjects[i], 1, 0, 1);
    }
    setTimeout(gravity, 1);
  }
}

function pongTV() {
  if (worldIsRunning()) {
    $('tv').src = 'images/twig/tv-pong.gif';
    setTimeout(staticTV, 600);
    brownianMovement(tv);
  } else {
    $('tv').src = 'images/twig/tv-off.gif';
  }
}

function staticTV() {
  if (worldIsRunning()) {
    $('tv').src = 'images/twig/tv-static.gif';
    setTimeout(pongTV, 900);
    brownianMovement(tv);
  } else {
    $('tv').src = 'images/twig/tv-off.gif';
  }
}

function donMove() {
  if (worldIsRunning()) {

    if ($('don').src.indexOf('left') === -1) {
      $('don').src = 'images/twig/don-walk-left.gif';
    } else {
      $('don').src = 'images/twig/don-walk-right.gif';
    }   
    setTimeout(donMove, 600);
    brownianMovement(don);
  } else {
    $('don').src = 'images/twig/don-jon.gif';
  }  
}

//////// Event Firing and Listening //////////////////////////////////////////////////

// Fire A Click Event
function eventFire(el, etype) {
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}//eventFire(document.getElementById('test'), 'click');

// Custom 'double click' for Stack
document.addEventListener('click', function (evt) {
  if (evt.detail === 2 && evt.target === $('lst-stack')) {
    getStackEntry();
  }
});

document.addEventListener('keypress', function (event) {
  var key = event.keyCode || event.charCode;

  switch (key) {
  case 13:// ENTER
    if ($('rpnapes').className !== 'hidden') enterButton();
    break;
  }
});

document.addEventListener('keydown', function (event) {
  var key = event.keyCode || event.charCode;

  switch (key) {
  case 8:// BACKSPACE  
    if ($('rpnapes').className !== 'hidden') {
      if (!event) { event = window.event; }
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
      btnBackspace();
    }
    break;
  case 16:// SHIFT
    if ($('rpnapes').className !== 'hidden') {
      if (altHeld) btnShift();        
    }
    break;
  case 17:// CTRL
    if (!event) { event = window.event; }
    event.preventDefault ? event.preventDefault() : (event.returnValue = false);
    ctrlHeld = true;
    break;
  case 18:// ALT
    if ($('rpnapes').className !== 'hidden') {
      altHeld = true;        
    }
    break;
  case 37:// LEFT ARROW
    if ($('rpnapes').className !== 'hidden' && $('twig').className !== 'hidden') {
      if (!event) { event = window.event; }
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
      if (twig.health > 0) {
        $('twig').src = 'images/twig/walk-left.gif';
        moveObj(twig, twig.speed, -1, 0);
      }
    }
    break;
  case 38:// UP ARROW
    if ($('rpnapes').className !== 'hidden' && $('twig').className !== 'hidden') {
      if (!event) { event = window.event; }
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
      if (twig.health > 0) {
        $('twig').src = 'images/twig/walk-left.gif';
        moveObj(twig, twig.speed, 0, -1);
      }
    }
    break;
  case 39:// RIGHT ARROW
    if ($('rpnapes').className !== 'hidden' && $('twig').className !== 'hidden') {
      if (!event) { event = window.event; }
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
      if (twig.health > 0) {
        $('twig').src = 'images/twig/walk-right.gif';
        moveObj(twig, twig.speed, 1, 0);
      }
    }
    break;
  case 40:// DOWN ARROW
    if ($('rpnapes').className !== 'hidden' && $('twig').className !== 'hidden')  {
      if (!event) { event = window.event; }
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
      if (twig.health > 0) {
        $('twig').src = 'images/twig/walk-right.gif';
        moveObj(twig, twig.speed, 0, 1);
      }
    }
    break;
  case 46:// DELETE
    if ($('rpnapes').className !== 'hidden') {
      if (!event) { event = window.event; }
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
      btnDelete();        
    }
    break;
  case 83:// S
    if (ctrlHeld) {
      if (!event) { event = window.event; }
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
  
      if ($('rpnapes').className !== 'hidden') {
        btnSave();
      } else {
        btnSaveNotes();
      }
    }        
    break;
  case 89:// Y
    if (ctrlHeld) {
      if (!event) { event = window.event; }
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);

      if ($('rpnapes').className !== 'hidden') {
        redoFunction();
      } else {
        btnRedoNotes();
      }
    }        
    break;
  case 90:// Z
    if (ctrlHeld) {
      if (!event) { event = window.event; }
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);

      if ($('rpnapes').className !== 'hidden') {
        undoFunction();
      } else {
        btnUndoNotes();
      }
    }
    break;        
  case 106:// NUMPAD *
    if ($('rpnapes').className !== 'hidden') {
      if (!event) { event = window.event; }
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
      btnMultiply();
    }
    break;        
  case 107:// NUMPAD +
    if ($('rpnapes').className !== 'hidden') {
      if (!event) { event = window.event; }
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
      btnAdd();
    }
    break;        
  case 109:// NUMPAD -
    if ($('rpnapes').className !== 'hidden') {
      if (!event) { event = window.event; }
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
      btnSubtract();
    }
    break;      
  case 111:// NUMPAD /
    if ($('rpnapes').className !== 'hidden') {
      if (!event) { event = window.event; }
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
      btnDivide();
    }
    break;        
  }
});

document.addEventListener('keyup', function (event) {
  
  switch (event.key) {
  case 'Backspace':// BACKSPACE (Falls through)
  case 'Enter':// ENTER
    if ($('notes').className !== 'hidden' && $('lst-notes') === document.activeElement) backupUndoNotes();
    break;
  case 'Control':// CTRL
    ctrlHeld = false;
    break;
  case 'Alt':// ALT
    altHeld = false; 
    break;
  case 'Escape':// ESC
    if (!event) { event = window.event; }
    event.preventDefault ? event.preventDefault() : (event.returnValue = false);
    btnXoff();
    break;
  case 'ArrowLeft':// ARROW LEFT (Falls through)
  case 'ArrowUp':// ARROW UP (Falls through)
  case 'ArrowRight':// ARROW RIGHT (Falls through)
  case 'ArrowDown':// ARROW DOWN
    if ($('rpnapes').className !== 'hidden' && twig.health > 0) {      
      $('twig').src = 'images/twig/hat-on.gif';
    }
    break;  
  case 'Delete':// DELETE
    if ($('notes').className !== 'hidden' && $('lst-notes') === document.activeElement) backupUndoNotes();
    break;
  }
});

//////// window.onload ///////////////////////////////////////////////////////////////

window.onload = function () {
  // Internet Explorer needs this for "btn-off" ~ window.close()   
  window.open('', '_self');

  // MathMon
  theObjects[0] = twig;
  theObjects[1] = tv;
  theObjects[2] = don;

  $('twig').onclick = monStatus;
  $('tv').onclick = monStatus;
  $('don').onclick = monStatus;

  // Menu File 
  $('menu-load').onclick = btnLoad;
  $('open-file').addEventListener('change', function () {
    try {
      var fr = new FileReader();

      fr.onload = function () {

        if ($('rpnapes').classList.contains('hidden')) {
          backupUndoNotes();
          $('lst-notes').value += this.result;
          backupUndoNotes();
        } else {
          var tmpStack = [];
          backupUndo();
          tmpStack = this.result.split('\n');

          for (var i in tmpStack) {
            $('txt-input').value = tmpStack[i];

            if (shifted) {
              evaluateExpression($('txt-input').value);
              enterInput();
            } else {
              enterInput();              
            }
          }
          updateDisplay();
        }
      };
      fr.readAsText(this.files[0]);
    } catch (err) {
      rpnAlert(err.toString());
    }
  });

  $('menu-google').onclick = searchGoogle;
  $('menu-youTube').onclick = searchYouTube;
  $('menu-save').onclick = btnSave;
  $('menu-print').onclick = printHtml;
  $('menu-off').onclick = function() {
    monOff();
    tricorderOff();
    window.open('','_self').close();
    window.top.close();
    rpnAlert('Window not opened with window.open()');
    //throw new Error();
  };

  // Menu Edit
  $('menu-enter').onclick = btnEnter;
  $('menu-evaluate').onclick = btnEval;
  $('menu-copy').onclick = copy;
  $('menu-paste').onclick = btnPaste;
  $('menu-delete').onclick = btnDelete;
  $('menu-backspace').onclick = btnBackspace;
  $('menu-clear').onclick = btnClear;
  $('menu-undo').onclick = undoFunction;
  $('menu-redo').onclick = redoFunction;
  $('menu-ab').onclick = abFunction;
  $('menu-xy').onclick = xyFunction;

  // Menu Maths
  $('menu-root').onclick = rootFunction;
  $('menuExponential').onclick = exponentialFunction;
  $('menu-log').onclick = baseLog;
  $('menu-ln').onclick = naturalLog;
  $('menu-inverse').onclick = inverse;
  $('menu-factorial').onclick = btnFactorial;
  $('menu-modulus').onclick = modulus;
  $('menu-sign').onclick = changeSign;
  $('menu-divide').onclick = division;
  $('menu-multiply').onclick = multiplication;
  $('menu-subtract').onclick = subtraction;
  $('menu-add').onclick = addition;
  $('menu-sine').onclick = btnSine;
  $('menu-cosine').onclick = btnCosine;
  $('menu-tangent').onclick = btnTangent;

  // Menu View
  $('menu-angle').onclick = btnAngle;
  $('menu-haptic').onclick = toggleHaptic;
  $('menu-darkmode').onclick = toggleDarkMode;
  $('menu-keyboard').onclick = toggleKeyboard;
  $('menu-sound').onclick = toggleSound;
  $('menu-notes').onclick = btnXoff;
  $('menu-shift').onclick = btnShift;

  // Menu Constants
  $('menu-phi').onclick = (function() {
    return function() {
      resetPhi();
      insertText('Φ');
    }
  })();
  $('menu-eulers').onclick = (function() {
    return function() { 
      // insertText(Math.exp(1));
      resetEulers();
      insertText('℮');      
    }
  })();
  $('menu-gravitational-constant').onclick = (function() {
    return function() {
      resetGravitational();
      insertText('ɢ');
    }
  })();
  $('menu-light-speed').onclick = (function() {
    return function() {
      resetLightspeed();
      insertText('ⅽ');
    }
  })(); 
  $('menu-pi').onclick = (function() {
    return function() {
      resetPi();
      insertText('π');
    }
  })();

  // Menu Date
  $('menu-date').onclick = insertDate;

  // Menu Time
  $('menu-time').onclick = insertTime;

  // Menu Equations
  $('menu-ohms-law').onclick = (function() {
    return function() {
      insertText('E=I*R');
    }
  })();
  $('menu-circumference').onclick = (function() {
    return function() {
      insertText('2*π*r');
    }
  })();
  $('menu-circle-area').onclick = (function() {
    return function() {
      insertText('π*r^2');
    }
  })();
  $('menu-sphere-area').onclick = (function() {
    return function() {
      insertText('4*π*r^2');
    }
  })();
  $('menu-sphere-volume').onclick = (function() {
    return function() {
      insertText('4/3*π*r^3');
    }
  })();
  $('menu-cone-area').onclick = (function() {
    return function() {
      insertText('π*r^2 + π*r*l');
    }
  })();
  $('menu-cone-volume').onclick = (function() {
    return function() {
      insertText('h/3*π*r^2');
    }
  })();

  // Menu Programs
  $('menu-fizz-buzz').onclick = fizzBuzz;
  $('menu-stopwatch').onclick = stopwatchStart;
  $('menu-tricorder').onclick = showTricorder;
  $('menu-twig').onclick = monOn;
  
  // Menu Symbols
  $('menu-parentheses').onclick = (function() {
    return function() { 
      btn_parentheses();
    }
  })();
  $('menu-equals').onclick = (function() {
    return function() { 
      insertText('=');
    }
  })();
  $('menu-radical').onclick = (function() {
    return function() { 
      insertText('√');
    }
  })();
  $('menu-bang').onclick = (function() {
    return function() { 
      insertText('!');
    }
  })();
  $('menu-carat').onclick = (function() {
    return function() { 
      insertText('^');
    }
  })();
  $('menu-solidus').onclick = (function() {
    return function() { 
      insertText('/');
    }
  })();
  $('menu-asterisk').onclick = (function() {
    return function() { 
      insertText('*');
    }
  })();
  $('menu-minus').onclick = (function() {
    return function() { 
      insertText('-');
    }
  })();
  $('menu-plus').onclick = (function() {
    return function() { 
      insertText('+');
    }
  })();
  $('menu-ohm').onclick = (function() {
    return function() { 
      insertText('Ω');
    }
  })();
  $('menu-heart').onclick = (function() {
    return function() { 
      insertText('♥');
    }
  })();

  $('menu-haptic-li').classList.add('strikethrough');
  $('menu-sound-li').classList.add('strikethrough');
  
  $('menu-help').onclick = menuHelp;

  if (isMobile) {
    $('menu-off').style = 'display:none';
    $('menu-twig').style = 'display:none';
  } else {
    $('menu-keyboard').style = 'display:none';
    $('menu-haptic').style = 'display:none';
  }

  // Text Area
  $('lst-stack').style.color = '#000000';// noscript warning was red ;)
  $('lst-stack').value = '';
  // Stop long tap menu on mobile
  $('lst-stack').oncontextmenu = function(event) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    return false;
  }
  resizeTextarea($('lst-stack'));
  
  // Text Input
  $('txt-input').onclick = mobileKeyboardAllow;
  $('txt-input').readOnly = true;
  $('txt-input').addEventListener('paste', function() {
    backupUndo();
  });

  // Buttons
  $('btn-xoff').onclick = btnXoff;
  $('btn-copy').onclick = btnCopy;
  $('btn-xy').onclick = btnXy;
  $('btn-enter').onclick = enterButton;
  $('btn-delete').onclick = deleteButton;

  $('btn-inverse').onclick = btnInverse;
  $('btn-log').onclick = btnLog;
  $('btn-root').onclick = btnRoot;
  $('btn-undo').onclick = btnUndo;

  $('btn-ee').onclick = btnEe;
  $('btn-pi').onclick = btnPi;
  $('btn-modulus').onclick = btnModulus;
  $('btn-sign').onclick = btnSign;
  $('btn-go').onclick = btnGo;
  $('btn-shift').onclick = btnShift;

  $('btn-seven').onclick = btnSeven;
  $('btn-eight').onclick = btnEight;
  $('btn-nine').onclick = btnNine;
  $('btn-divide').onclick = btnDivide;
  $('btn-angle').onclick = btnAngle;
  $('btn-clear').onclick = btnClear;

  $('btn-four').onclick = btnFour;
  $('btn-five').onclick = btnFive;
  $('btn-six').onclick = btnSix;
  $('btn-multiply').onclick = btnMultiply;
  $('btn-sine').onclick = btnSine;
  $('btn-load').onclick = btnLoad;  

  $('btn-one').onclick = btnOne;
  $('btn-two').onclick = btnTwo;
  $('btn-three').onclick = btnThree;
  $('btn-subtract').onclick = btnSubtract;
  $('btn-cosine').onclick = btnCosine;
  $('btn-save').onclick = btnSave;

  $('btn-zero').onclick = btnZero;
  $('btn-dot').onclick = btnDot;
  $('btn-space').onclick = btnSpace;
  $('btn-add').onclick = btnAdd;
  $('btn-tangent').onclick = btnTangent;
  $('btn-off').onclick = btnOff;

  // Tricorder
  preloadImages();
  viewPortSrc.push('https://www.youtube.com/embed/jkuJG1_2MnU?autoplay=1');
  viewPortSrc.push('https://www.youtube.com/embed/1LEay4dm5Ag?autoplay=1');
  viewPortSrc.push('https://www.youtube.com/embed/ZVCXw1xJFJ4?autoplay=1');
  viewPortSrc.push('https://www.youtube.com/embed/Zx-up8quvnI?autoplay=1');
  viewPortSrc.push('https://www.youtube.com/embed/sKtieXEBLcE?autoplay=1');
  viewPortSrc.push('https://www.youtube.com/embed/VVpRv6rC8RY?autoplay=1');

  viewPort2Src.push('https://www.youtube.com/embed/qb43-hn_-_c?autoplay=1');
  viewPort2Src.push('https://www.youtube.com/embed/XziuEdpVUe0?autoplay=1');
  viewPort2Src.push('https://www.youtube.com/embed/v_5fA85qGcU?autoplay=1');

  $('sensor1').onclick = sensor1;
  $('sensor2').onclick = sensor2;
  $('button1').onclick = button1;
  $('button2').onclick = button2;
  $('button3').onclick = button3;
  $('button4').onclick = button4;
  $('button5').onclick = button5;
  $('button6').onclick = button6;
  muteAudio(true);

  // Notes
  $('btn-load-notes').onclick = btnLoadNotes;
  $('btn-save-notes').onclick = btnSaveNotes;
  $('btn-copy-notes').onclick = btnCopyNotes;
  $('btn-paste-notes').onclick = btnPasteNotes;
  if (isFirefox) $('btn-paste-notes').style.color = '#808080';
  $('btn-undo-notes').onclick = btnUndoNotes;
  $('btn-redo-notes').onclick = btnRedoNotes;
  $('btn-clear-notes').onclick = btnClearNotes;
  $('btn-delete-notes').onclick = btnDeleteNotes;

  $('lst-notes').onclick = function() {
    $('lst-notes').readOnly = false;
  }  
  $('lst-notes').addEventListener('paste', function() {
    setTimeout(function() {
      backupUndoNotes(); 
    }, 100);
  });
  $('lst-notes').oninput = colorSaveNotesButton; 

  // Attach hapticResponse to Menu items and buttons
  var elements = document.getElementsByClassName('haptic-response');
  
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', hapticResponse, false);
  }  
  // Check for cookies
  if (document.cookie.indexOf('NOTES') !== -1) {
    $('lst-notes').value = '';
    loadNotes();
  } else {
    colorSaveNotesButton();
  }  
  backupNotes.push($('lst-notes').value);
  colorUndoNotesButton();

  if (document.cookie.indexOf('TRICORDER') !== -1) {
    loadTricorder();        
  } else {
    widgetSrc.push('https://www.youtube.com/embed/jlJgi3SxDaI?autoplay=1');
    widgetSrc.push('https://www.youtube.com/embed/Fn44paKMX4E?autoplay=1');
    widgetSrc.push('https://www.youtube.com/embed/yXQz-VU5iVc?autoplay=1');
  }
  if (document.cookie.indexOf('STACK') !== -1) {
    $('lst-stack').value = '';
    $('txt-input').value = '';
    btnLoad();
  } else {
    backupUndo();
    $('btn-save').style.color = '#D4D0C8';
  }
  autoDark();
  $('txt-input').readOnly = false;
};