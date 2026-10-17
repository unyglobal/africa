// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mono","repository":"africa","path":"benin/mono","depth":2,"parent":"benin","children":["athieme","lokossa","se"]});
export const childModules = Object.freeze({"athieme":"./athieme/athieme.js","lokossa":"./lokossa/lokossa.js","se":"./se/se.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
