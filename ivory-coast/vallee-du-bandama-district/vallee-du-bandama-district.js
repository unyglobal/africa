// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vallee-du-bandama-district","repository":"africa","path":"ivory-coast/vallee-du-bandama-district","depth":2,"parent":"ivory-coast","children":["beoumi","bouake","dabakala","fronan","katiola","niakaramandougou","sakassou","tafire","tortiya"]});
export const childModules = Object.freeze({"beoumi":"./beoumi/beoumi.js","bouake":"./bouake/bouake.js","dabakala":"./dabakala/dabakala.js","fronan":"./fronan/fronan.js","katiola":"./katiola/katiola.js","niakaramandougou":"./niakaramandougou/niakaramandougou.js","sakassou":"./sakassou/sakassou.js","tafire":"./tafire/tafire.js","tortiya":"./tortiya/tortiya.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
