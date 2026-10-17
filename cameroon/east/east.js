// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"east","repository":"africa","path":"cameroon/east","depth":2,"parent":"cameroon","children":["abong-mbang","batouri","belabo","bertoua","garoua-boulai","yokadouma"]});
export const childModules = Object.freeze({"abong-mbang":"./abong-mbang/abong-mbang.js","batouri":"./batouri/batouri.js","belabo":"./belabo/belabo.js","bertoua":"./bertoua/bertoua.js","garoua-boulai":"./garoua-boulai/garoua-boulai.js","yokadouma":"./yokadouma/yokadouma.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
