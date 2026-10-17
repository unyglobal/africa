// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mashonaland-east-province","repository":"africa","path":"zimbabwe/mashonaland-east-province","depth":2,"parent":"zimbabwe","children":["marondera","mount-hampden","ruwa"]});
export const childModules = Object.freeze({"marondera":"./marondera/marondera.js","mount-hampden":"./mount-hampden/mount-hampden.js","ruwa":"./ruwa/ruwa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
