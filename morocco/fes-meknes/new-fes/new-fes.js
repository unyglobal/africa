// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"new-fes","repository":"africa","path":"morocco/fes-meknes/new-fes","depth":3,"parent":"morocco/fes-meknes","children":["hay-ain-qudous"]});
export const childModules = Object.freeze({"hay-ain-qudous":"./hay-ain-qudous/hay-ain-qudous.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
