// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"manouba","repository":"africa","path":"tunisia/manouba","depth":2,"parent":"tunisia","children":["den-den","douar-hicher","jedeida","la-mornaghia","oued-lill","tebourba"]});
export const childModules = Object.freeze({"den-den":"./den-den/den-den.js","douar-hicher":"./douar-hicher/douar-hicher.js","jedeida":"./jedeida/jedeida.js","la-mornaghia":"./la-mornaghia/la-mornaghia.js","oued-lill":"./oued-lill/oued-lill.js","tebourba":"./tebourba/tebourba.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
