// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"southern-province","repository":"africa","path":"zambia/southern-province","depth":2,"parent":"zambia","children":["chirundu","choma","itezhi-tezhi","kalomo","livingstone","maamba","mazabuka","monze","namwala","siavonga","sinazongwe"]});
export const childModules = Object.freeze({"chirundu":"./chirundu/chirundu.js","choma":"./choma/choma.js","itezhi-tezhi":"./itezhi-tezhi/itezhi-tezhi.js","kalomo":"./kalomo/kalomo.js","livingstone":"./livingstone/livingstone.js","maamba":"./maamba/maamba.js","mazabuka":"./mazabuka/mazabuka.js","monze":"./monze/monze.js","namwala":"./namwala/namwala.js","siavonga":"./siavonga/siavonga.js","sinazongwe":"./sinazongwe/sinazongwe.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
