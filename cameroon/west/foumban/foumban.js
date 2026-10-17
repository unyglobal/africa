// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"foumban","repository":"africa","path":"cameroon/west/foumban","depth":3,"parent":"cameroon/west","children":["mfeyouom"]});
export const childModules = Object.freeze({"mfeyouom":"./mfeyouom/mfeyouom.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
