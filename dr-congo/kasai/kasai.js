// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kasai","repository":"africa","path":"dr-congo/kasai","depth":2,"parent":"dr-congo","children":["ilebo","luebo","mweka","tshikapa"]});
export const childModules = Object.freeze({"ilebo":"./ilebo/ilebo.js","luebo":"./luebo/luebo.js","mweka":"./mweka/mweka.js","tshikapa":"./tshikapa/tshikapa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
