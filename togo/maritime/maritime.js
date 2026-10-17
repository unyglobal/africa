// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"maritime","repository":"africa","path":"togo/maritime","depth":2,"parent":"togo","children":["aneho","lome","tabligbo","tsevie","vogan"]});
export const childModules = Object.freeze({"aneho":"./aneho/aneho.js","lome":"./lome/lome.js","tabligbo":"./tabligbo/tabligbo.js","tsevie":"./tsevie/tsevie.js","vogan":"./vogan/vogan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
