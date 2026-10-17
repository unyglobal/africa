// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"central-darfur","repository":"africa","path":"sudan/central-darfur","depth":2,"parent":"sudan","children":["zalinjay"]});
export const childModules = Object.freeze({"zalinjay":"./zalinjay/zalinjay.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
