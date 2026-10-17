// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hodh-ech-chargi","repository":"africa","path":"mauritania/hodh-ech-chargi","depth":2,"parent":"mauritania","children":["bougadoum","mbera","nema","tembedgha"]});
export const childModules = Object.freeze({"bougadoum":"./bougadoum/bougadoum.js","mbera":"./mbera/mbera.js","nema":"./nema/nema.js","tembedgha":"./tembedgha/tembedgha.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
