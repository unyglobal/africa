// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kakamega-county","repository":"africa","path":"kenya/kakamega-county","depth":2,"parent":"kenya","children":["kakamega","khwisero","mumias"]});
export const childModules = Object.freeze({"kakamega":"./kakamega/kakamega.js","khwisero":"./khwisero/khwisero.js","mumias":"./mumias/mumias.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
