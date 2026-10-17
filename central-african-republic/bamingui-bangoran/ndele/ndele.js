// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ndele","repository":"africa","path":"central-african-republic/bamingui-bangoran/ndele","depth":3,"parent":"central-african-republic/bamingui-bangoran","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
