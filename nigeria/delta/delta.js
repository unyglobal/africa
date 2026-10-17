// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"delta","repository":"africa","path":"nigeria/delta","depth":2,"parent":"nigeria","children":["agbor","asaba","burutu","kwale","ogwashi-uku","sapele","ughelli","warri"]});
export const childModules = Object.freeze({"agbor":"./agbor/agbor.js","asaba":"./asaba/asaba.js","burutu":"./burutu/burutu.js","kwale":"./kwale/kwale.js","ogwashi-uku":"./ogwashi-uku/ogwashi-uku.js","sapele":"./sapele/sapele.js","ughelli":"./ughelli/ughelli.js","warri":"./warri/warri.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
