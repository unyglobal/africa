// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mara","repository":"africa","path":"tanzania/mara","depth":2,"parent":"tanzania","children":["bunda","butiama","kibara","matongo","mugumu","muriti","musoma","nansio","nyamuswa","shirati","sirari","tarime"]});
export const childModules = Object.freeze({"bunda":"./bunda/bunda.js","butiama":"./butiama/butiama.js","kibara":"./kibara/kibara.js","matongo":"./matongo/matongo.js","mugumu":"./mugumu/mugumu.js","muriti":"./muriti/muriti.js","musoma":"./musoma/musoma.js","nansio":"./nansio/nansio.js","nyamuswa":"./nyamuswa/nyamuswa.js","shirati":"./shirati/shirati.js","sirari":"./sirari/sirari.js","tarime":"./tarime/tarime.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
