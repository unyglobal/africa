// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"plateau-state","repository":"africa","path":"nigeria/plateau-state","depth":2,"parent":"nigeria","children":["bukuru","jos","pankshin"]});
export const childModules = Object.freeze({"bukuru":"./bukuru/bukuru.js","jos":"./jos/jos.js","pankshin":"./pankshin/pankshin.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
