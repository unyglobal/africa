// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"east-kasai","repository":"africa","path":"dr-congo/east-kasai","depth":2,"parent":"dr-congo","children":["kabeya-kamwanga","mbuji-mayi","miabi"]});
export const childModules = Object.freeze({"kabeya-kamwanga":"./kabeya-kamwanga/kabeya-kamwanga.js","mbuji-mayi":"./mbuji-mayi/mbuji-mayi.js","miabi":"./miabi/miabi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
