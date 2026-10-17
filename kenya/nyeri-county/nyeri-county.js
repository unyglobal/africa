// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nyeri-county","repository":"africa","path":"kenya/nyeri-county","depth":2,"parent":"kenya","children":["karatina","nyeri","tetu"]});
export const childModules = Object.freeze({"karatina":"./karatina/karatina.js","nyeri":"./nyeri/nyeri.js","tetu":"./tetu/tetu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
