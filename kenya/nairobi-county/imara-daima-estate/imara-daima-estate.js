// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"imara-daima-estate","repository":"africa","path":"kenya/nairobi-county/imara-daima-estate","depth":3,"parent":"kenya/nairobi-county","children":["kenya-re"]});
export const childModules = Object.freeze({"kenya-re":"./kenya-re/kenya-re.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
