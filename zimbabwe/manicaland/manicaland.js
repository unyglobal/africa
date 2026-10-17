// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"manicaland","repository":"africa","path":"zimbabwe/manicaland","depth":2,"parent":"zimbabwe","children":["chipinge","mutare","rusape"]});
export const childModules = Object.freeze({"chipinge":"./chipinge/chipinge.js","mutare":"./mutare/mutare.js","rusape":"./rusape/rusape.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
