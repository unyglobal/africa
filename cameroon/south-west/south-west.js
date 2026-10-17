// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"south-west","repository":"africa","path":"cameroon/south-west","depth":2,"parent":"cameroon","children":["bamusso","buea","ekondo-titi","fontem","kumba","limbe","mamfe","mutengene","muyuka","tiko","tombel"]});
export const childModules = Object.freeze({"bamusso":"./bamusso/bamusso.js","buea":"./buea/buea.js","ekondo-titi":"./ekondo-titi/ekondo-titi.js","fontem":"./fontem/fontem.js","kumba":"./kumba/kumba.js","limbe":"./limbe/limbe.js","mamfe":"./mamfe/mamfe.js","mutengene":"./mutengene/mutengene.js","muyuka":"./muyuka/muyuka.js","tiko":"./tiko/tiko.js","tombel":"./tombel/tombel.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
