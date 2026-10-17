// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"western","repository":"africa","path":"ghana/western","depth":2,"parent":"ghana","children":["elubo","esim","prestea","sekondi","sekondi-takoradi","shama-junction","takoradi","tarkwa"]});
export const childModules = Object.freeze({"elubo":"./elubo/elubo.js","esim":"./esim/esim.js","prestea":"./prestea/prestea.js","sekondi":"./sekondi/sekondi.js","sekondi-takoradi":"./sekondi-takoradi/sekondi-takoradi.js","shama-junction":"./shama-junction/shama-junction.js","takoradi":"./takoradi/takoradi.js","tarkwa":"./tarkwa/tarkwa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
