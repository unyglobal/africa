// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"potchefstroom","repository":"africa","path":"south-africa/north-west/potchefstroom","depth":3,"parent":"south-africa/north-west","children":["grimbeek-park"]});
export const childModules = Object.freeze({"grimbeek-park":"./grimbeek-park/grimbeek-park.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
