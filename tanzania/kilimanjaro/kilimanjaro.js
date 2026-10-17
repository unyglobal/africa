// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kilimanjaro","repository":"africa","path":"tanzania/kilimanjaro","depth":2,"parent":"tanzania","children":["boma-la-ngombe","hedaru","lembeni","moshi","same","tarakea","usangi"]});
export const childModules = Object.freeze({"boma-la-ngombe":"./boma-la-ngombe/boma-la-ngombe.js","hedaru":"./hedaru/hedaru.js","lembeni":"./lembeni/lembeni.js","moshi":"./moshi/moshi.js","same":"./same/same.js","tarakea":"./tarakea/tarakea.js","usangi":"./usangi/usangi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
