// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"uganda","repository":"africa","path":"uganda","depth":1,"parent":"","children":["central-region","eastern-region","northern-region","ntungamo","ntungamo-a","western-region"]});
export const childModules = Object.freeze({"central-region":"./central-region/central-region.js","eastern-region":"./eastern-region/eastern-region.js","northern-region":"./northern-region/northern-region.js","ntungamo":"./ntungamo/ntungamo.js","ntungamo-a":"./ntungamo-a/ntungamo-a.js","western-region":"./western-region/western-region.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
