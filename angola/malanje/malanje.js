// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"malanje","repository":"africa","path":"angola/malanje","depth":2,"parent":"angola","children":["bailundo","cacuso","cambundi-catembo","cangandala","kunda-dya-baze","luquembo"]});
export const childModules = Object.freeze({"bailundo":"./bailundo/bailundo.js","cacuso":"./cacuso/cacuso.js","cambundi-catembo":"./cambundi-catembo/cambundi-catembo.js","cangandala":"./cangandala/cangandala.js","kunda-dya-baze":"./kunda-dya-baze/kunda-dya-baze.js","luquembo":"./luquembo/luquembo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
