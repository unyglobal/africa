// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tebessa","repository":"africa","path":"algeria/tebessa","depth":2,"parent":"algeria","children":["bir-el-ater","cheria","el-aouinet","hammamet","ouenza"]});
export const childModules = Object.freeze({"bir-el-ater":"./bir-el-ater/bir-el-ater.js","cheria":"./cheria/cheria.js","el-aouinet":"./el-aouinet/el-aouinet.js","hammamet":"./hammamet/hammamet.js","ouenza":"./ouenza/ouenza.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
