// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pwani","repository":"africa","path":"tanzania/pwani","depth":2,"parent":"tanzania","children":["bagamoyo","bungu","chalinze","ikwiriri","kibaha","kibiti","kilindoni","lugoba","mapinga","mkuranga","mlandizi","mvomero","mwandege","vikindu"]});
export const childModules = Object.freeze({"bagamoyo":"./bagamoyo/bagamoyo.js","bungu":"./bungu/bungu.js","chalinze":"./chalinze/chalinze.js","ikwiriri":"./ikwiriri/ikwiriri.js","kibaha":"./kibaha/kibaha.js","kibiti":"./kibiti/kibiti.js","kilindoni":"./kilindoni/kilindoni.js","lugoba":"./lugoba/lugoba.js","mapinga":"./mapinga/mapinga.js","mkuranga":"./mkuranga/mkuranga.js","mlandizi":"./mlandizi/mlandizi.js","mvomero":"./mvomero/mvomero.js","mwandege":"./mwandege/mwandege.js","vikindu":"./vikindu/vikindu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
