// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mondlo","repository":"africa","path":"south-africa/kwazulu-natal/mondlo","depth":3,"parent":"south-africa/kwazulu-natal","children":["emondlo"]});
export const childModules = Object.freeze({"emondlo":"./emondlo/emondlo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
