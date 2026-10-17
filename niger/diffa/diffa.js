// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"diffa","repository":"africa","path":"niger/diffa","depth":2,"parent":"niger","children":["maine-soroa","nguigmi"]});
export const childModules = Object.freeze({"maine-soroa":"./maine-soroa/maine-soroa.js","nguigmi":"./nguigmi/nguigmi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
