// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sangha-mbaere","repository":"africa","path":"central-african-republic/sangha-mbaere","depth":2,"parent":"central-african-republic","children":["nola"]});
export const childModules = Object.freeze({"nola":"./nola/nola.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
