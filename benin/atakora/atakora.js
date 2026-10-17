// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"atakora","repository":"africa","path":"benin/atakora","depth":2,"parent":"benin","children":["boukoumbe","cobly","kerou","materi","natitingou","pehonko","tanguieta","tobre","toukountouna"]});
export const childModules = Object.freeze({"boukoumbe":"./boukoumbe/boukoumbe.js","cobly":"./cobly/cobly.js","kerou":"./kerou/kerou.js","materi":"./materi/materi.js","natitingou":"./natitingou/natitingou.js","pehonko":"./pehonko/pehonko.js","tanguieta":"./tanguieta/tanguieta.js","tobre":"./tobre/tobre.js","toukountouna":"./toukountouna/toukountouna.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
