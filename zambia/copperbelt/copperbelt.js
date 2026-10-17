// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"copperbelt","repository":"africa","path":"zambia/copperbelt","depth":2,"parent":"zambia","children":["chambishi","chililabombwe","chingola","kalulushi","kitwe","luanshya","mapalo","mpongwe","mufulira","ndola"]});
export const childModules = Object.freeze({"chambishi":"./chambishi/chambishi.js","chililabombwe":"./chililabombwe/chililabombwe.js","chingola":"./chingola/chingola.js","kalulushi":"./kalulushi/kalulushi.js","kitwe":"./kitwe/kitwe.js","luanshya":"./luanshya/luanshya.js","mapalo":"./mapalo/mapalo.js","mpongwe":"./mpongwe/mpongwe.js","mufulira":"./mufulira/mufulira.js","ndola":"./ndola/ndola.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
