// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"northern-region","repository":"africa","path":"malawi/northern-region","depth":2,"parent":"malawi","children":["chitipa","karonga","mzimba","mzuzu","nkhata-bay","rumphi"]});
export const childModules = Object.freeze({"chitipa":"./chitipa/chitipa.js","karonga":"./karonga/karonga.js","mzimba":"./mzimba/mzimba.js","mzuzu":"./mzuzu/mzuzu.js","nkhata-bay":"./nkhata-bay/nkhata-bay.js","rumphi":"./rumphi/rumphi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
