// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gonubie","repository":"africa","path":"south-africa/eastern-cape/gonubie","depth":3,"parent":"south-africa/eastern-cape","children":["gonubie-park"]});
export const childModules = Object.freeze({"gonubie-park":"./gonubie-park/gonubie-park.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
