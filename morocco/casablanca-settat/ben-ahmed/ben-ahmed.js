// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ben-ahmed","repository":"africa","path":"morocco/casablanca-settat/ben-ahmed","depth":3,"parent":"morocco/casablanca-settat","children":["hay-dehar"]});
export const childModules = Object.freeze({"hay-dehar":"./hay-dehar/hay-dehar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
