// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"guelma","repository":"africa","path":"algeria/guelma","depth":2,"parent":"algeria","children":["boumahra-ahmed","heliopolis","oued-zenati"]});
export const childModules = Object.freeze({"boumahra-ahmed":"./boumahra-ahmed/boumahra-ahmed.js","heliopolis":"./heliopolis/heliopolis.js","oued-zenati":"./oued-zenati/oued-zenati.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
