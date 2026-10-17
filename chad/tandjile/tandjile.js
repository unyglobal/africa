// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tandjile","repository":"africa","path":"chad/tandjile","depth":2,"parent":"chad","children":["bere","deressia","kelo","lai"]});
export const childModules = Object.freeze({"bere":"./bere/bere.js","deressia":"./deressia/deressia.js","kelo":"./kelo/kelo.js","lai":"./lai/lai.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
