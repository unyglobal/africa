// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"khalota","repository":"africa","path":"morocco/beni-mellal-khenifra/souq-sebt-oulad-nemma/khalota","depth":4,"parent":"morocco/beni-mellal-khenifra/souq-sebt-oulad-nemma","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
