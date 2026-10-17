// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"northern-province","repository":"africa","path":"rwanda/northern-province","depth":2,"parent":"rwanda","children":["busogo","byumba","mukingo","musanze","shyorongi"]});
export const childModules = Object.freeze({"busogo":"./busogo/busogo.js","byumba":"./byumba/byumba.js","mukingo":"./mukingo/mukingo.js","musanze":"./musanze/musanze.js","shyorongi":"./shyorongi/shyorongi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
