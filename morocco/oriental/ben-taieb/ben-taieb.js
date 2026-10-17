// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ben-taieb","repository":"africa","path":"morocco/oriental/ben-taieb","depth":3,"parent":"morocco/oriental","children":["baid-lmaghrjb","commune-ben-taieb","hay-ilham","hay-lmassira","hay-sahb-ljam","nahj-tanja"]});
export const childModules = Object.freeze({"baid-lmaghrjb":"./baid-lmaghrjb/baid-lmaghrjb.js","commune-ben-taieb":"./commune-ben-taieb/commune-ben-taieb.js","hay-ilham":"./hay-ilham/hay-ilham.js","hay-lmassira":"./hay-lmassira/hay-lmassira.js","hay-sahb-ljam":"./hay-sahb-ljam/hay-sahb-ljam.js","nahj-tanja":"./nahj-tanja/nahj-tanja.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
