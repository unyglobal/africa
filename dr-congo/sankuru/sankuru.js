// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sankuru","repository":"africa","path":"dr-congo/sankuru","depth":2,"parent":"dr-congo","children":["lodja","lukula","lusambo"]});
export const childModules = Object.freeze({"lodja":"./lodja/lodja.js","lukula":"./lukula/lukula.js","lusambo":"./lusambo/lusambo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
