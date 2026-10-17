// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"wadi-fira","repository":"africa","path":"chad/wadi-fira","depth":2,"parent":"chad","children":["biltine","iriba"]});
export const childModules = Object.freeze({"biltine":"./biltine/biltine.js","iriba":"./iriba/iriba.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
