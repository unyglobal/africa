// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pointe-noire","repository":"africa","path":"congo/pointe-noire","depth":2,"parent":"congo","children":["loandjili"]});
export const childModules = Object.freeze({"loandjili":"./loandjili/loandjili.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
