// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"equateur","repository":"africa","path":"dr-congo/equateur","depth":2,"parent":"dr-congo","children":["basankusu","bolenge","mbandaka"]});
export const childModules = Object.freeze({"basankusu":"./basankusu/basankusu.js","bolenge":"./bolenge/bolenge.js","mbandaka":"./mbandaka/mbandaka.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
