// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"banjul","repository":"africa","path":"gambia/banjul","depth":2,"parent":"gambia","children":["bakau","bakau-new-town","bununka-kunda","dippa-kunda","ibo-town","kanifing","kotu","latri-kunda","manjai-kunda","new-jeshwang","serekunda","talinding"]});
export const childModules = Object.freeze({"bakau":"./bakau/bakau.js","bakau-new-town":"./bakau-new-town/bakau-new-town.js","bununka-kunda":"./bununka-kunda/bununka-kunda.js","dippa-kunda":"./dippa-kunda/dippa-kunda.js","ibo-town":"./ibo-town/ibo-town.js","kanifing":"./kanifing/kanifing.js","kotu":"./kotu/kotu.js","latri-kunda":"./latri-kunda/latri-kunda.js","manjai-kunda":"./manjai-kunda/manjai-kunda.js","new-jeshwang":"./new-jeshwang/new-jeshwang.js","serekunda":"./serekunda/serekunda.js","talinding":"./talinding/talinding.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
