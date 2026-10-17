// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"biskra","repository":"africa","path":"algeria/biskra","depth":2,"parent":"algeria","children":["sidi-okba","tolga","zeribet-el-oued"]});
export const childModules = Object.freeze({"sidi-okba":"./sidi-okba/sidi-okba.js","tolga":"./tolga/tolga.js","zeribet-el-oued":"./zeribet-el-oued/zeribet-el-oued.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
