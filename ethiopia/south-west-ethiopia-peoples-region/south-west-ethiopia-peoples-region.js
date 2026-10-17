// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"south-west-ethiopia-peoples-region","repository":"africa","path":"ethiopia/south-west-ethiopia-peoples-region","depth":2,"parent":"ethiopia","children":["bonga","komtikas","mizan-teferi","tarch-a-sodo","tepi","wacha","waka"]});
export const childModules = Object.freeze({"bonga":"./bonga/bonga.js","komtikas":"./komtikas/komtikas.js","mizan-teferi":"./mizan-teferi/mizan-teferi.js","tarch-a-sodo":"./tarch-a-sodo/tarch-a-sodo.js","tepi":"./tepi/tepi.js","wacha":"./wacha/wacha.js","waka":"./waka/waka.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
