// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"centre-sud","repository":"africa","path":"burkina-faso/centre-sud","depth":2,"parent":"burkina-faso","children":["gomboussougou","kombissiri","manga","po"]});
export const childModules = Object.freeze({"gomboussougou":"./gomboussougou/gomboussougou.js","kombissiri":"./kombissiri/kombissiri.js","manga":"./manga/manga.js","po":"./po/po.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
