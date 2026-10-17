// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"guera","repository":"africa","path":"chad/guera","depth":2,"parent":"chad","children":["bitkine","mangalme","mongo"]});
export const childModules = Object.freeze({"bitkine":"./bitkine/bitkine.js","mangalme":"./mangalme/mangalme.js","mongo":"./mongo/mongo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
