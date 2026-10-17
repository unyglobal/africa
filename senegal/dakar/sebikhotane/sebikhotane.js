// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sebikhotane","repository":"africa","path":"senegal/dakar/sebikhotane","depth":3,"parent":"senegal/dakar","children":["keuri-kaw","nguene"]});
export const childModules = Object.freeze({"keuri-kaw":"./keuri-kaw/keuri-kaw.js","nguene":"./nguene/nguene.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
