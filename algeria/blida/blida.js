// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"blida","repository":"africa","path":"algeria/blida","depth":2,"parent":"algeria","children":["beni-mered","beni-tamou","bou-arfa","boufarik","bougara","bouinan","chebli","chiffa","el-affroun","larbaa","meftah","mouzaia","oued-el-alleug","ouled-slama-fouaga","souma"]});
export const childModules = Object.freeze({"beni-mered":"./beni-mered/beni-mered.js","beni-tamou":"./beni-tamou/beni-tamou.js","bou-arfa":"./bou-arfa/bou-arfa.js","boufarik":"./boufarik/boufarik.js","bougara":"./bougara/bougara.js","bouinan":"./bouinan/bouinan.js","chebli":"./chebli/chebli.js","chiffa":"./chiffa/chiffa.js","el-affroun":"./el-affroun/el-affroun.js","larbaa":"./larbaa/larbaa.js","meftah":"./meftah/meftah.js","mouzaia":"./mouzaia/mouzaia.js","oued-el-alleug":"./oued-el-alleug/oued-el-alleug.js","ouled-slama-fouaga":"./ouled-slama-fouaga/ouled-slama-fouaga.js","souma":"./souma/souma.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
