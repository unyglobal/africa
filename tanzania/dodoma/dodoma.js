// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dodoma","repository":"africa","path":"tanzania/dodoma","depth":2,"parent":"tanzania","children":["kibaigwa","kibakwe","kondoa","mpwapwa"]});
export const childModules = Object.freeze({"kibaigwa":"./kibaigwa/kibaigwa.js","kibakwe":"./kibakwe/kibakwe.js","kondoa":"./kondoa/kondoa.js","mpwapwa":"./mpwapwa/mpwapwa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
