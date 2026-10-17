// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"luapula-province","repository":"africa","path":"zambia/luapula-province","depth":2,"parent":"zambia","children":["chiengi","kawambwa","mansa","mwansabombwe","nchelenge","samfya"]});
export const childModules = Object.freeze({"chiengi":"./chiengi/chiengi.js","kawambwa":"./kawambwa/kawambwa.js","mansa":"./mansa/mansa.js","mwansabombwe":"./mwansabombwe/mwansabombwe.js","nchelenge":"./nchelenge/nchelenge.js","samfya":"./samfya/samfya.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
