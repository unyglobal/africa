// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kanem","repository":"africa","path":"chad/kanem","depth":2,"parent":"chad","children":["mao"]});
export const childModules = Object.freeze({"mao":"./mao/mao.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
