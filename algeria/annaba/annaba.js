// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"annaba","repository":"africa","path":"algeria/annaba","depth":2,"parent":"algeria","children":["ahmed-bel-hadj","berrahal","el-hadjar","sidi-amar"]});
export const childModules = Object.freeze({"ahmed-bel-hadj":"./ahmed-bel-hadj/ahmed-bel-hadj.js","berrahal":"./berrahal/berrahal.js","el-hadjar":"./el-hadjar/el-hadjar.js","sidi-amar":"./sidi-amar/sidi-amar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
