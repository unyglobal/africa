// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nouakchott-west","repository":"africa","path":"mauritania/nouakchott-west","depth":2,"parent":"mauritania","children":["ksar","tevragh-zeina"]});
export const childModules = Object.freeze({"ksar":"./ksar/ksar.js","tevragh-zeina":"./tevragh-zeina/tevragh-zeina.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
