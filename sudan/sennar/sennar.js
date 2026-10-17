// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sennar","repository":"africa","path":"sudan/sennar","depth":2,"parent":"sudan","children":["as-suki","kinana","maiurno","singa","umm-shawkah"]});
export const childModules = Object.freeze({"as-suki":"./as-suki/as-suki.js","kinana":"./kinana/kinana.js","maiurno":"./maiurno/maiurno.js","singa":"./singa/singa.js","umm-shawkah":"./umm-shawkah/umm-shawkah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
