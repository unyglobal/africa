// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nimba","repository":"africa","path":"liberia/nimba","depth":2,"parent":"liberia","children":["ganta","new-yekepa","saclepea","sanniquellie"]});
export const childModules = Object.freeze({"ganta":"./ganta/ganta.js","new-yekepa":"./new-yekepa/new-yekepa.js","saclepea":"./saclepea/saclepea.js","sanniquellie":"./sanniquellie/sanniquellie.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
