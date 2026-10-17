// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ain-temouchent","repository":"africa","path":"algeria/ain-temouchent","depth":2,"parent":"algeria","children":["beni-saf","el-amria","el-malah","hammam-bou-hadjar"]});
export const childModules = Object.freeze({"beni-saf":"./beni-saf/beni-saf.js","el-amria":"./el-amria/el-amria.js","el-malah":"./el-malah/el-malah.js","hammam-bou-hadjar":"./hammam-bou-hadjar/hammam-bou-hadjar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
