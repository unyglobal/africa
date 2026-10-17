// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"androy","repository":"africa","path":"madagascar/androy","depth":2,"parent":"madagascar","children":["ambovombe","bekily","beloha","jafaro","tsiombe"]});
export const childModules = Object.freeze({"ambovombe":"./ambovombe/ambovombe.js","bekily":"./bekily/bekily.js","beloha":"./beloha/beloha.js","jafaro":"./jafaro/jafaro.js","tsiombe":"./tsiombe/tsiombe.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
