// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"likouala","repository":"africa","path":"congo/likouala","depth":2,"parent":"congo","children":["betou","impfondo","mindouli"]});
export const childModules = Object.freeze({"betou":"./betou/betou.js","impfondo":"./impfondo/impfondo.js","mindouli":"./mindouli/mindouli.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
