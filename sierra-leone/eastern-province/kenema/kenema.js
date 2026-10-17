// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kenema","repository":"africa","path":"sierra-leone/eastern-province/kenema","depth":3,"parent":"sierra-leone/eastern-province","children":["kpayama"]});
export const childModules = Object.freeze({"kpayama":"./kpayama/kpayama.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
