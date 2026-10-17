// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"luanda-norte","repository":"africa","path":"angola/luanda-norte","depth":2,"parent":"angola","children":["cafunfo","cassanguidi","chitato","cuango-luzamba","cuilo","dundo","lubalo","lucapa"]});
export const childModules = Object.freeze({"cafunfo":"./cafunfo/cafunfo.js","cassanguidi":"./cassanguidi/cassanguidi.js","chitato":"./chitato/chitato.js","cuango-luzamba":"./cuango-luzamba/cuango-luzamba.js","cuilo":"./cuilo/cuilo.js","dundo":"./dundo/dundo.js","lubalo":"./lubalo/lubalo.js","lucapa":"./lucapa/lucapa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
