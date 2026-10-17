// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"laikipia","repository":"africa","path":"kenya/laikipia","depth":2,"parent":"kenya","children":["nanyuki","nyahururu"]});
export const childModules = Object.freeze({"nanyuki":"./nanyuki/nanyuki.js","nyahururu":"./nyahururu/nyahururu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
