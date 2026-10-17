// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"oshana-region","repository":"africa","path":"namibia/oshana-region","depth":2,"parent":"namibia","children":["ondangwa","ongwediva","oshakati"]});
export const childModules = Object.freeze({"ondangwa":"./ondangwa/ondangwa.js","ongwediva":"./ongwediva/ongwediva.js","oshakati":"./oshakati/oshakati.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
