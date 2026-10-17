// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"anosy","repository":"africa","path":"madagascar/anosy","depth":2,"parent":"madagascar","children":["amboasary","betroka","tolanaro"]});
export const childModules = Object.freeze({"amboasary":"./amboasary/amboasary.js","betroka":"./betroka/betroka.js","tolanaro":"./tolanaro/tolanaro.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
