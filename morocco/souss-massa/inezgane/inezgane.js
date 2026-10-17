// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"inezgane","repository":"africa","path":"morocco/souss-massa/inezgane","depth":3,"parent":"morocco/souss-massa","children":["cite-moulay-sahad"]});
export const childModules = Object.freeze({"cite-moulay-sahad":"./cite-moulay-sahad/cite-moulay-sahad.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
