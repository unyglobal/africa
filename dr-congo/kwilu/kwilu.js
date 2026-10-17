// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kwilu","repository":"africa","path":"dr-congo/kwilu","depth":2,"parent":"dr-congo","children":["bandundu-province","bulungu","dibaya-lubwe","idiofa","kikwit","mangai","masi-manimba"]});
export const childModules = Object.freeze({"bandundu-province":"./bandundu-province/bandundu-province.js","bulungu":"./bulungu/bulungu.js","dibaya-lubwe":"./dibaya-lubwe/dibaya-lubwe.js","idiofa":"./idiofa/idiofa.js","kikwit":"./kikwit/kikwit.js","mangai":"./mangai/mangai.js","masi-manimba":"./masi-manimba/masi-manimba.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
