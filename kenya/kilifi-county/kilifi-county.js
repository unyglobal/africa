// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kilifi-county","repository":"africa","path":"kenya/kilifi-county","depth":2,"parent":"kenya","children":["kilifi","malindi","mariakani","mtwapa","watamu"]});
export const childModules = Object.freeze({"kilifi":"./kilifi/kilifi.js","malindi":"./malindi/malindi.js","mariakani":"./mariakani/mariakani.js","mtwapa":"./mtwapa/mtwapa.js","watamu":"./watamu/watamu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
