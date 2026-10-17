// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"western","repository":"africa","path":"gambia/western","depth":2,"parent":"gambia","children":["abuko","bakoti","brikama","brufut","busumbala","faji-kunda","gunjur","kunkujang","latri-sabiji","nema-kunku","sanchaba","sanyang","sinchu-alagi","sukuta","tanji","welingara"]});
export const childModules = Object.freeze({"abuko":"./abuko/abuko.js","bakoti":"./bakoti/bakoti.js","brikama":"./brikama/brikama.js","brufut":"./brufut/brufut.js","busumbala":"./busumbala/busumbala.js","faji-kunda":"./faji-kunda/faji-kunda.js","gunjur":"./gunjur/gunjur.js","kunkujang":"./kunkujang/kunkujang.js","latri-sabiji":"./latri-sabiji/latri-sabiji.js","nema-kunku":"./nema-kunku/nema-kunku.js","sanchaba":"./sanchaba/sanchaba.js","sanyang":"./sanyang/sanyang.js","sinchu-alagi":"./sinchu-alagi/sinchu-alagi.js","sukuta":"./sukuta/sukuta.js","tanji":"./tanji/tanji.js","welingara":"./welingara/welingara.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
