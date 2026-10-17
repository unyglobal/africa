// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"flacq","repository":"africa","path":"mauritius/flacq","depth":2,"parent":"mauritius","children":["bel-air-riviere-seche","centre-de-flacq"]});
export const childModules = Object.freeze({"bel-air-riviere-seche":"./bel-air-riviere-seche/bel-air-riviere-seche.js","centre-de-flacq":"./centre-de-flacq/centre-de-flacq.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
