// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"northern","repository":"africa","path":"ghana/northern","depth":2,"parent":"ghana","children":["bimbila","savelugu","tamale","yendi"]});
export const childModules = Object.freeze({"bimbila":"./bimbila/bimbila.js","savelugu":"./savelugu/savelugu.js","tamale":"./tamale/tamale.js","yendi":"./yendi/yendi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
