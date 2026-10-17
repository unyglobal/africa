// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"warri","repository":"africa","path":"nigeria/delta/warri","depth":3,"parent":"nigeria/delta","children":["okumagba-layout"]});
export const childModules = Object.freeze({"okumagba-layout":"./okumagba-layout/okumagba-layout.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
