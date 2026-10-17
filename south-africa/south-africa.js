// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"south-africa","repository":"africa","path":"south-africa","depth":1,"parent":"","children":["eastern-cape","free-state","gauteng","kwazulu-natal","limpopo","middelburg","middelburg-a","mpumalanga","north-west","northern-cape","western-cape"]});
export const childModules = Object.freeze({"eastern-cape":"./eastern-cape/eastern-cape.js","free-state":"./free-state/free-state.js","gauteng":"./gauteng/gauteng.js","kwazulu-natal":"./kwazulu-natal/kwazulu-natal.js","limpopo":"./limpopo/limpopo.js","middelburg":"./middelburg/middelburg.js","middelburg-a":"./middelburg-a/middelburg-a.js","mpumalanga":"./mpumalanga/mpumalanga.js","north-west":"./north-west/north-west.js","northern-cape":"./northern-cape/northern-cape.js","western-cape":"./western-cape/western-cape.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
