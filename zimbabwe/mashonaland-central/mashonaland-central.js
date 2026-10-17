// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mashonaland-central","repository":"africa","path":"zimbabwe/mashonaland-central","depth":2,"parent":"zimbabwe","children":["bindura","mvurwi"]});
export const childModules = Object.freeze({"bindura":"./bindura/bindura.js","mvurwi":"./mvurwi/mvurwi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
