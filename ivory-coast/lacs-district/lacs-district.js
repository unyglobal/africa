// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lacs-district","repository":"africa","path":"ivory-coast/lacs-district","depth":2,"parent":"ivory-coast","children":["daoukro","dimbokro","m-bahiakro","tiebissou","toumodi","yamoussoukro"]});
export const childModules = Object.freeze({"daoukro":"./daoukro/daoukro.js","dimbokro":"./dimbokro/dimbokro.js","m-bahiakro":"./m-bahiakro/m-bahiakro.js","tiebissou":"./tiebissou/tiebissou.js","toumodi":"./toumodi/toumodi.js","yamoussoukro":"./yamoussoukro/yamoussoukro.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
