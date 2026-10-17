// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"naama","repository":"africa","path":"algeria/naama","depth":2,"parent":"algeria","children":["ain-sefra","mecheria"]});
export const childModules = Object.freeze({"ain-sefra":"./ain-sefra/ain-sefra.js","mecheria":"./mecheria/mecheria.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
