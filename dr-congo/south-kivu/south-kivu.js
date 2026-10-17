// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"south-kivu","repository":"africa","path":"dr-congo/south-kivu","depth":2,"parent":"dr-congo","children":["bukavu","kabare","uvira"]});
export const childModules = Object.freeze({"bukavu":"./bukavu/bukavu.js","kabare":"./kabare/kabare.js","uvira":"./uvira/uvira.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
