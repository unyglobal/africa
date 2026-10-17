// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gabes-governorate","repository":"africa","path":"tunisia/gabes-governorate","depth":2,"parent":"tunisia","children":["chenini-nahal","el-hamma","gabes","mareth","metouia","rhennouch","teboulbou"]});
export const childModules = Object.freeze({"chenini-nahal":"./chenini-nahal/chenini-nahal.js","el-hamma":"./el-hamma/el-hamma.js","gabes":"./gabes/gabes.js","mareth":"./mareth/mareth.js","metouia":"./metouia/metouia.js","rhennouch":"./rhennouch/rhennouch.js","teboulbou":"./teboulbou/teboulbou.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
