// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kigoma","repository":"africa","path":"tanzania/kigoma","depth":2,"parent":"tanzania","children":["kakonko","kasulu","kibondo","mwandiga","nguruka","uvinza"]});
export const childModules = Object.freeze({"kakonko":"./kakonko/kakonko.js","kasulu":"./kasulu/kasulu.js","kibondo":"./kibondo/kibondo.js","mwandiga":"./mwandiga/mwandiga.js","nguruka":"./nguruka/nguruka.js","uvinza":"./uvinza/uvinza.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
