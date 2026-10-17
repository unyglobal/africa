// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sofia","repository":"africa","path":"madagascar/sofia","depth":2,"parent":"madagascar","children":["antsohihy","bealanana","befandriana","boriziny","mampikony","maromandia"]});
export const childModules = Object.freeze({"antsohihy":"./antsohihy/antsohihy.js","bealanana":"./bealanana/bealanana.js","befandriana":"./befandriana/befandriana.js","boriziny":"./boriziny/boriziny.js","mampikony":"./mampikony/mampikony.js","maromandia":"./maromandia/maromandia.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
