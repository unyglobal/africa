// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nakuru-county","repository":"africa","path":"kenya/nakuru-county","depth":2,"parent":"kenya","children":["elburgon","gilgil","maai-mahiu","mai","molo","naivasha","nakuru","njoro","rongai"]});
export const childModules = Object.freeze({"elburgon":"./elburgon/elburgon.js","gilgil":"./gilgil/gilgil.js","maai-mahiu":"./maai-mahiu/maai-mahiu.js","mai":"./mai/mai.js","molo":"./molo/molo.js","naivasha":"./naivasha/naivasha.js","nakuru":"./nakuru/nakuru.js","njoro":"./njoro/njoro.js","rongai":"./rongai/rongai.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
