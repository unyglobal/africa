// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"geita","repository":"africa","path":"tanzania/geita","depth":2,"parent":"tanzania","children":["buseresere","chato","diobahika","kasamwa","katoro","masumbwe","mhalamba","ushirombo","uyovu"]});
export const childModules = Object.freeze({"buseresere":"./buseresere/buseresere.js","chato":"./chato/chato.js","diobahika":"./diobahika/diobahika.js","kasamwa":"./kasamwa/kasamwa.js","katoro":"./katoro/katoro.js","masumbwe":"./masumbwe/masumbwe.js","mhalamba":"./mhalamba/mhalamba.js","ushirombo":"./ushirombo/ushirombo.js","uyovu":"./uyovu/uyovu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
