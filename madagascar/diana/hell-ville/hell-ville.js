// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hell-ville","repository":"africa","path":"madagascar/diana/hell-ville","depth":3,"parent":"madagascar/diana","children":["ambalakatakata","antananajojo"]});
export const childModules = Object.freeze({"ambalakatakata":"./ambalakatakata/ambalakatakata.js","antananajojo":"./antananajojo/antananajojo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
