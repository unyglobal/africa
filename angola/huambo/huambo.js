// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"huambo","repository":"africa","path":"angola/huambo","depth":2,"parent":"angola","children":["alto-hama","caala","catchiungo","ecunna","londuimbali","longonjo","mungo","ucuma"]});
export const childModules = Object.freeze({"alto-hama":"./alto-hama/alto-hama.js","caala":"./caala/caala.js","catchiungo":"./catchiungo/catchiungo.js","ecunna":"./ecunna/ecunna.js","londuimbali":"./londuimbali/londuimbali.js","longonjo":"./longonjo/longonjo.js","mungo":"./mungo/mungo.js","ucuma":"./ucuma/ucuma.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
