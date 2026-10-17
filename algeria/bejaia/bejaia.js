// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bejaia","repository":"africa","path":"algeria/bejaia","depth":2,"parent":"algeria","children":["akbou","amizour","barbacha","chemini","el-hed","el-kseur","feraoun","ighram","seddouk"]});
export const childModules = Object.freeze({"akbou":"./akbou/akbou.js","amizour":"./amizour/amizour.js","barbacha":"./barbacha/barbacha.js","chemini":"./chemini/chemini.js","el-hed":"./el-hed/el-hed.js","el-kseur":"./el-kseur/el-kseur.js","feraoun":"./feraoun/feraoun.js","ighram":"./ighram/ighram.js","seddouk":"./seddouk/seddouk.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
