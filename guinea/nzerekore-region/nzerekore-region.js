// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nzerekore-region","repository":"africa","path":"guinea/nzerekore-region","depth":2,"parent":"guinea","children":["beyla","gueckedou","lola","macenta","moussadou","nzerekore"]});
export const childModules = Object.freeze({"beyla":"./beyla/beyla.js","gueckedou":"./gueckedou/gueckedou.js","lola":"./lola/lola.js","macenta":"./macenta/macenta.js","moussadou":"./moussadou/moussadou.js","nzerekore":"./nzerekore/nzerekore.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
