// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"souq-sebt-oulad-nemma","repository":"africa","path":"morocco/beni-mellal-khenifra/souq-sebt-oulad-nemma","depth":3,"parent":"morocco/beni-mellal-khenifra","children":["khalota"]});
export const childModules = Object.freeze({"khalota":"./khalota/khalota.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
