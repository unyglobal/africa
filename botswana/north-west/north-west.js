// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"north-west","repository":"africa","path":"botswana/north-west","depth":2,"parent":"botswana","children":["maun"]});
export const childModules = Object.freeze({"maun":"./maun/maun.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
