// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"namibe","repository":"africa","path":"angola/namibe","depth":2,"parent":"angola","children":["camucuio","mossamedes","tombua","virei"]});
export const childModules = Object.freeze({"camucuio":"./camucuio/camucuio.js","mossamedes":"./mossamedes/mossamedes.js","tombua":"./tombua/tombua.js","virei":"./virei/virei.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
