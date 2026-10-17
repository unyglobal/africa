// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"atsimo-andrefana","repository":"africa","path":"madagascar/atsimo-andrefana","depth":2,"parent":"madagascar","children":["ampanihy","ankazoabo","beroroha","betioky","itampolo","morombe","sakaraha","toliara"]});
export const childModules = Object.freeze({"ampanihy":"./ampanihy/ampanihy.js","ankazoabo":"./ankazoabo/ankazoabo.js","beroroha":"./beroroha/beroroha.js","betioky":"./betioky/betioky.js","itampolo":"./itampolo/itampolo.js","morombe":"./morombe/morombe.js","sakaraha":"./sakaraha/sakaraha.js","toliara":"./toliara/toliara.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
