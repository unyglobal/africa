// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kef-governorate","repository":"africa","path":"tunisia/kef-governorate","depth":2,"parent":"tunisia","children":["dahmani","el-kef","tajerouine"]});
export const childModules = Object.freeze({"dahmani":"./dahmani/dahmani.js","el-kef":"./el-kef/el-kef.js","tajerouine":"./tajerouine/tajerouine.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
