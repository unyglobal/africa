// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ruvuma","repository":"africa","path":"tanzania/ruvuma","depth":2,"parent":"tanzania","children":["kigonsera","mahanje","maposeni","matiri","mbinga","songea","tingi","tunduru"]});
export const childModules = Object.freeze({"kigonsera":"./kigonsera/kigonsera.js","mahanje":"./mahanje/mahanje.js","maposeni":"./maposeni/maposeni.js","matiri":"./matiri/matiri.js","mbinga":"./mbinga/mbinga.js","songea":"./songea/songea.js","tingi":"./tingi/tingi.js","tunduru":"./tunduru/tunduru.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
