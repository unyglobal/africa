// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"woroba","repository":"africa","path":"ivory-coast/woroba","depth":2,"parent":"ivory-coast","children":["borotou-koro","dianra","mankono","seguela","touba"]});
export const childModules = Object.freeze({"borotou-koro":"./borotou-koro/borotou-koro.js","dianra":"./dianra/dianra.js","mankono":"./mankono/mankono.js","seguela":"./seguela/seguela.js","touba":"./touba/touba.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
