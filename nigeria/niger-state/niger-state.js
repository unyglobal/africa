// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"niger-state","repository":"africa","path":"nigeria/niger-state","depth":2,"parent":"nigeria","children":["babana","baro","bida","ibeto","kontagora","lapai","minna","mokwa","rijau","suleja","tegina","zungeru"]});
export const childModules = Object.freeze({"babana":"./babana/babana.js","baro":"./baro/baro.js","bida":"./bida/bida.js","ibeto":"./ibeto/ibeto.js","kontagora":"./kontagora/kontagora.js","lapai":"./lapai/lapai.js","minna":"./minna/minna.js","mokwa":"./mokwa/mokwa.js","rijau":"./rijau/rijau.js","suleja":"./suleja/suleja.js","tegina":"./tegina/tegina.js","zungeru":"./zungeru/zungeru.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
