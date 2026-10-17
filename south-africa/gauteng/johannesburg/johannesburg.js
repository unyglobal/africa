// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"johannesburg","repository":"africa","path":"south-africa/gauteng/johannesburg","depth":3,"parent":"south-africa/gauteng","children":["marshalltown"]});
export const childModules = Object.freeze({"marshalltown":"./marshalltown/marshalltown.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
