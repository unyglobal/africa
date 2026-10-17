// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kavango-east","repository":"africa","path":"namibia/kavango-east","depth":2,"parent":"namibia","children":["ndiyona","rundu"]});
export const childModules = Object.freeze({"ndiyona":"./ndiyona/ndiyona.js","rundu":"./rundu/rundu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
