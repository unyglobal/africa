// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bie","repository":"africa","path":"angola/bie","depth":2,"parent":"angola","children":["andulo","camacupa","catabola","chinguar","chitembo","cuemba","cuito","nharea"]});
export const childModules = Object.freeze({"andulo":"./andulo/andulo.js","camacupa":"./camacupa/camacupa.js","catabola":"./catabola/catabola.js","chinguar":"./chinguar/chinguar.js","chitembo":"./chitembo/chitembo.js","cuemba":"./cuemba/cuemba.js","cuito":"./cuito/cuito.js","nharea":"./nharea/nharea.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
