// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mwanza","repository":"africa","path":"tanzania/mwanza","depth":2,"parent":"tanzania","children":["kihangara","magu","misungwi","ngudu","sengerema","usagara"]});
export const childModules = Object.freeze({"kihangara":"./kihangara/kihangara.js","magu":"./magu/magu.js","misungwi":"./misungwi/misungwi.js","ngudu":"./ngudu/ngudu.js","sengerema":"./sengerema/sengerema.js","usagara":"./usagara/usagara.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
