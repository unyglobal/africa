// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ghana","repository":"africa","path":"ghana","depth":1,"parent":"","children":["ahafo","ahwiaa","ahwiaa-a","ashanti","bono","bono-east","central","eastern","greater-accra","north-east","northern","oti","savannah","upper-east","upper-west","volta","western","western-north"]});
export const childModules = Object.freeze({"ahafo":"./ahafo/ahafo.js","ahwiaa":"./ahwiaa/ahwiaa.js","ahwiaa-a":"./ahwiaa-a/ahwiaa-a.js","ashanti":"./ashanti/ashanti.js","bono":"./bono/bono.js","bono-east":"./bono-east/bono-east.js","central":"./central/central.js","eastern":"./eastern/eastern.js","greater-accra":"./greater-accra/greater-accra.js","north-east":"./north-east/north-east.js","northern":"./northern/northern.js","oti":"./oti/oti.js","savannah":"./savannah/savannah.js","upper-east":"./upper-east/upper-east.js","upper-west":"./upper-west/upper-west.js","volta":"./volta/volta.js","western":"./western/western.js","western-north":"./western-north/western-north.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
