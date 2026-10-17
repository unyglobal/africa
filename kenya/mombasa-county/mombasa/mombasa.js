// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mombasa","repository":"africa","path":"kenya/mombasa-county/mombasa","depth":3,"parent":"kenya/mombasa-county","children":["old-mombasa","tayari"]});
export const childModules = Object.freeze({"old-mombasa":"./old-mombasa/old-mombasa.js","tayari":"./tayari/tayari.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
