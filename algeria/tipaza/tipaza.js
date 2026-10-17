// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tipaza","repository":"africa","path":"algeria/tipaza","depth":2,"parent":"algeria","children":["bou-ismail","cherchell","hadjout","kolea","tipasa"]});
export const childModules = Object.freeze({"bou-ismail":"./bou-ismail/bou-ismail.js","cherchell":"./cherchell/cherchell.js","hadjout":"./hadjout/hadjout.js","kolea":"./kolea/kolea.js","tipasa":"./tipasa/tipasa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
