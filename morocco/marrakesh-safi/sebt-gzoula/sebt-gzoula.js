// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sebt-gzoula","repository":"africa","path":"morocco/marrakesh-safi/sebt-gzoula","depth":3,"parent":"morocco/marrakesh-safi","children":["hay-el-anhaour","hay-el-mosjid","hay-hrilla"]});
export const childModules = Object.freeze({"hay-el-anhaour":"./hay-el-anhaour/hay-el-anhaour.js","hay-el-mosjid":"./hay-el-mosjid/hay-el-mosjid.js","hay-hrilla":"./hay-hrilla/hay-hrilla.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
