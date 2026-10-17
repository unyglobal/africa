// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bamingui-bangoran","repository":"africa","path":"central-african-republic/bamingui-bangoran","depth":2,"parent":"central-african-republic","children":["ndele"]});
export const childModules = Object.freeze({"ndele":"./ndele/ndele.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
