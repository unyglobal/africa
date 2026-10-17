// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"atlantique","repository":"africa","path":"benin/atlantique","depth":2,"parent":"benin","children":["abomey-calavi","allada","ganvie","godome","kouande","ouidah","ze","zinvie"]});
export const childModules = Object.freeze({"abomey-calavi":"./abomey-calavi/abomey-calavi.js","allada":"./allada/allada.js","ganvie":"./ganvie/ganvie.js","godome":"./godome/godome.js","kouande":"./kouande/kouande.js","ouidah":"./ouidah/ouidah.js","ze":"./ze/ze.js","zinvie":"./zinvie/zinvie.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
