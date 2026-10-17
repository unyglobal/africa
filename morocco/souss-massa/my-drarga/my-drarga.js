// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"my-drarga","repository":"africa","path":"morocco/souss-massa/my-drarga","depth":3,"parent":"morocco/souss-massa","children":["douar-facra-mbanek","douar-sidi-brahim"]});
export const childModules = Object.freeze({"douar-facra-mbanek":"./douar-facra-mbanek/douar-facra-mbanek.js","douar-sidi-brahim":"./douar-sidi-brahim/douar-sidi-brahim.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
