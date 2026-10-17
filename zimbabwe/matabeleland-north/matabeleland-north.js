// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"matabeleland-north","repository":"africa","path":"zimbabwe/matabeleland-north","depth":2,"parent":"zimbabwe","children":["hwange","victoria-falls"]});
export const childModules = Object.freeze({"hwange":"./hwange/hwange.js","victoria-falls":"./victoria-falls/victoria-falls.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
