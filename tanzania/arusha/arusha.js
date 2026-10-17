// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"arusha","repository":"africa","path":"tanzania/arusha","depth":2,"parent":"tanzania","children":["kingori","kiratu","mbuguni","merelani","mto-wa-mbu","usa-river"]});
export const childModules = Object.freeze({"kingori":"./kingori/kingori.js","kiratu":"./kiratu/kiratu.js","mbuguni":"./mbuguni/mbuguni.js","merelani":"./merelani/merelani.js","mto-wa-mbu":"./mto-wa-mbu/mto-wa-mbu.js","usa-river":"./usa-river/usa-river.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
