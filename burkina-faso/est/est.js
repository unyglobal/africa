// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"est","repository":"africa","path":"burkina-faso/est","depth":2,"parent":"burkina-faso","children":["bogande","diapaga","fada-n-gourma","gayeri","kompienga","mani","namponkore","natiaboani"]});
export const childModules = Object.freeze({"bogande":"./bogande/bogande.js","diapaga":"./diapaga/diapaga.js","fada-n-gourma":"./fada-n-gourma/fada-n-gourma.js","gayeri":"./gayeri/gayeri.js","kompienga":"./kompienga/kompienga.js","mani":"./mani/mani.js","namponkore":"./namponkore/namponkore.js","natiaboani":"./natiaboani/natiaboani.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
