// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"centrale","repository":"africa","path":"togo/centrale","depth":2,"parent":"togo","children":["sokode","sotouboua","tchamba"]});
export const childModules = Object.freeze({"sokode":"./sokode/sokode.js","sotouboua":"./sotouboua/sotouboua.js","tchamba":"./tchamba/tchamba.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
