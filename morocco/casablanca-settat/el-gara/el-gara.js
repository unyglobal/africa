// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"el-gara","repository":"africa","path":"morocco/casablanca-settat/el-gara","depth":3,"parent":"morocco/casablanca-settat","children":["hay-el-amal","hay-el-masjid","hay-ennasr","hay-ennour"]});
export const childModules = Object.freeze({"hay-el-amal":"./hay-el-amal/hay-el-amal.js","hay-el-masjid":"./hay-el-masjid/hay-el-masjid.js","hay-ennasr":"./hay-ennasr/hay-ennasr.js","hay-ennour":"./hay-ennour/hay-ennour.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
