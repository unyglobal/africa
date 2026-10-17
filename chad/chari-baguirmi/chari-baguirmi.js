// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chari-baguirmi","repository":"africa","path":"chad/chari-baguirmi","depth":2,"parent":"chad","children":["bousso","dourbali","mandelia"]});
export const childModules = Object.freeze({"bousso":"./bousso/bousso.js","dourbali":"./dourbali/dourbali.js","mandelia":"./mandelia/mandelia.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
