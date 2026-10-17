// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"moyen-chari","repository":"africa","path":"chad/moyen-chari","depth":2,"parent":"chad","children":["kyabe","sarh"]});
export const childModules = Object.freeze({"kyabe":"./kyabe/kyabe.js","sarh":"./sarh/sarh.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
