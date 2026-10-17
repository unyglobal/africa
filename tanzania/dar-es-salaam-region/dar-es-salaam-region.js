// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dar-es-salaam-region","repository":"africa","path":"tanzania/dar-es-salaam-region","depth":2,"parent":"tanzania","children":["dar-es-salaam","magomeni"]});
export const childModules = Object.freeze({"dar-es-salaam":"./dar-es-salaam/dar-es-salaam.js","magomeni":"./magomeni/magomeni.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
