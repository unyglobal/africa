// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sidama-region","repository":"africa","path":"ethiopia/sidama-region","depth":2,"parent":"ethiopia","children":["awasa","ch-iko","leku","wendo","yirga-alem"]});
export const childModules = Object.freeze({"awasa":"./awasa/awasa.js","ch-iko":"./ch-iko/ch-iko.js","leku":"./leku/leku.js","wendo":"./wendo/wendo.js","yirga-alem":"./yirga-alem/yirga-alem.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
