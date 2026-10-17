// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mechraa-bel-ksiri","repository":"africa","path":"morocco/rabat-sale-kenitra/mechraa-bel-ksiri","depth":3,"parent":"morocco/rabat-sale-kenitra","children":["hay-baytat","hay-chaoui"]});
export const childModules = Object.freeze({"hay-baytat":"./hay-baytat/hay-baytat.js","hay-chaoui":"./hay-chaoui/hay-chaoui.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
