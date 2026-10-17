// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"njombe","repository":"africa","path":"tanzania/njombe","depth":2,"parent":"tanzania","children":["ilembula","makumbako","mlangali","mtwango"]});
export const childModules = Object.freeze({"ilembula":"./ilembula/ilembula.js","makumbako":"./makumbako/makumbako.js","mlangali":"./mlangali/mlangali.js","mtwango":"./mtwango/mtwango.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
