// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sfax-governorate","repository":"africa","path":"tunisia/sfax-governorate","depth":2,"parent":"tunisia","children":["dar-el-haj-taieb","el-ain","gremda","kellabine","mahires","sakiet-ed-daier","sakiet-ez-zit","sfax","sidi-abid"]});
export const childModules = Object.freeze({"dar-el-haj-taieb":"./dar-el-haj-taieb/dar-el-haj-taieb.js","el-ain":"./el-ain/el-ain.js","gremda":"./gremda/gremda.js","kellabine":"./kellabine/kellabine.js","mahires":"./mahires/mahires.js","sakiet-ed-daier":"./sakiet-ed-daier/sakiet-ed-daier.js","sakiet-ez-zit":"./sakiet-ez-zit/sakiet-ez-zit.js","sfax":"./sfax/sfax.js","sidi-abid":"./sidi-abid/sidi-abid.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
