"use strict";

let DOMTextOut = null;
export const newLine = "<br/>";
export const NEWLine = newLine;

export function initPrintOut(aDomElement) {
  DOMTextOut = aDomElement;
}

export function printOut(aText) {
  aText = String(aText); 
  aText = aText.replace(newLine, "<br/>");

  if (DOMTextOut.innerHTML.length !== 0) {
      DOMTextOut.innerHTML += newLine;
  }
  DOMTextOut.innerHTML += aText;
}