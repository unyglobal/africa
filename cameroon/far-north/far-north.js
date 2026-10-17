// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"far-north","repository":"africa","path":"cameroon/far-north","depth":2,"parent":"cameroon","children":["blangwa","bogo","guidiguis","kaele","kousseri","maga","maroua","mokolo","mora","yagoua"]});
export const childModules = Object.freeze({"blangwa":"./blangwa/blangwa.js","bogo":"./bogo/bogo.js","guidiguis":"./guidiguis/guidiguis.js","kaele":"./kaele/kaele.js","kousseri":"./kousseri/kousseri.js","maga":"./maga/maga.js","maroua":"./maroua/maroua.js","mokolo":"./mokolo/mokolo.js","mora":"./mora/mora.js","yagoua":"./yagoua/yagoua.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
