// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"oshodi","repository":"africa","path":"nigeria/lagos/oshodi","depth":3,"parent":"nigeria/lagos","children":["orile-oshodi"]});
export const childModules = Object.freeze({"orile-oshodi":"./orile-oshodi/orile-oshodi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
