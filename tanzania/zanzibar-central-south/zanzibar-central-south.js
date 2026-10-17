// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zanzibar-central-south","repository":"africa","path":"tanzania/zanzibar-central-south","depth":2,"parent":"tanzania","children":["sokoni"]});
export const childModules = Object.freeze({"sokoni":"./sokoni/sokoni.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
