// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nairobi-county","repository":"africa","path":"kenya/nairobi-county","depth":2,"parent":"kenya","children":["imara-daima-estate","lang-ata","nairobi","pumwani","thika"]});
export const childModules = Object.freeze({"imara-daima-estate":"./imara-daima-estate/imara-daima-estate.js","lang-ata":"./lang-ata/lang-ata.js","nairobi":"./nairobi/nairobi.js","pumwani":"./pumwani/pumwani.js","thika":"./thika/thika.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
