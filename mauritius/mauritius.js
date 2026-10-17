// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mauritius","repository":"africa","path":"mauritius","depth":1,"parent":"","children":["black-river","flacq","grand-port","moka","pamplemousses","plaines-wilhems","port-louis","riviere-du-rempart"]});
export const childModules = Object.freeze({"black-river":"./black-river/black-river.js","flacq":"./flacq/flacq.js","grand-port":"./grand-port/grand-port.js","moka":"./moka/moka.js","pamplemousses":"./pamplemousses/pamplemousses.js","plaines-wilhems":"./plaines-wilhems/plaines-wilhems.js","port-louis":"./port-louis/port-louis.js","riviere-du-rempart":"./riviere-du-rempart/riviere-du-rempart.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
