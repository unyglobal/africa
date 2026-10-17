// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tshopo","repository":"africa","path":"dr-congo/tshopo","depth":2,"parent":"dr-congo","children":["babamba","basoko","kisangani","yangambi"]});
export const childModules = Object.freeze({"babamba":"./babamba/babamba.js","basoko":"./basoko/basoko.js","kisangani":"./kisangani/kisangani.js","yangambi":"./yangambi/yangambi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
