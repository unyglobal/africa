// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"agadir","repository":"africa","path":"morocco/souss-massa/agadir","depth":3,"parent":"morocco/souss-massa","children":["extention-x","nouveau-talborjt","quartier-administratif","quartier-ait-souss","quartier-residentiel","wilaya-of-agadir"]});
export const childModules = Object.freeze({"extention-x":"./extention-x/extention-x.js","nouveau-talborjt":"./nouveau-talborjt/nouveau-talborjt.js","quartier-administratif":"./quartier-administratif/quartier-administratif.js","quartier-ait-souss":"./quartier-ait-souss/quartier-ait-souss.js","quartier-residentiel":"./quartier-residentiel/quartier-residentiel.js","wilaya-of-agadir":"./wilaya-of-agadir/wilaya-of-agadir.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
