// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sangha","repository":"africa","path":"congo/sangha","depth":2,"parent":"congo","children":["ouesso","pokola"]});
export const childModules = Object.freeze({"ouesso":"./ouesso/ouesso.js","pokola":"./pokola/pokola.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
