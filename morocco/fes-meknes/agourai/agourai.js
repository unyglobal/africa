// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"agourai","repository":"africa","path":"morocco/fes-meknes/agourai","depth":3,"parent":"morocco/fes-meknes","children":["douar-ziane","hay-atouafa"]});
export const childModules = Object.freeze({"douar-ziane":"./douar-ziane/douar-ziane.js","hay-atouafa":"./hay-atouafa/hay-atouafa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
