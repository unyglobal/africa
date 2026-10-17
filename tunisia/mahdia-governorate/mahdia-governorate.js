// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mahdia-governorate","repository":"africa","path":"tunisia/mahdia-governorate","depth":2,"parent":"tunisia","children":["chebba","el-jem","ksour-essaf","mahdia","zouila"]});
export const childModules = Object.freeze({"chebba":"./chebba/chebba.js","el-jem":"./el-jem/el-jem.js","ksour-essaf":"./ksour-essaf/ksour-essaf.js","mahdia":"./mahdia/mahdia.js","zouila":"./zouila/zouila.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
