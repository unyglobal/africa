// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nugaal","repository":"africa","path":"somalia/nugaal","depth":2,"parent":"somalia","children":["eyl","garoowe"]});
export const childModules = Object.freeze({"eyl":"./eyl/eyl.js","garoowe":"./garoowe/garoowe.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
