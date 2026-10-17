// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"shinyanga","repository":"africa","path":"tanzania/shinyanga","depth":2,"parent":"tanzania","children":["isaka","kahama","kishapu","mhango","mwadui","old-shinyanga","songwa","tinde"]});
export const childModules = Object.freeze({"isaka":"./isaka/isaka.js","kahama":"./kahama/kahama.js","kishapu":"./kishapu/kishapu.js","mhango":"./mhango/mhango.js","mwadui":"./mwadui/mwadui.js","old-shinyanga":"./old-shinyanga/old-shinyanga.js","songwa":"./songwa/songwa.js","tinde":"./tinde/tinde.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
