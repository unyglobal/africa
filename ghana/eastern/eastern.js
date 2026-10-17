// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"eastern","repository":"africa","path":"ghana/eastern","depth":2,"parent":"ghana","children":["aburi","akim-oda","akwatia","anyinam","asamankese","begoro","kade","koforidua","nkawkaw","nsawam","suhum"]});
export const childModules = Object.freeze({"aburi":"./aburi/aburi.js","akim-oda":"./akim-oda/akim-oda.js","akwatia":"./akwatia/akwatia.js","anyinam":"./anyinam/anyinam.js","asamankese":"./asamankese/asamankese.js","begoro":"./begoro/begoro.js","kade":"./kade/kade.js","koforidua":"./koforidua/koforidua.js","nkawkaw":"./nkawkaw/nkawkaw.js","nsawam":"./nsawam/nsawam.js","suhum":"./suhum/suhum.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
