// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"masvingo-province","repository":"africa","path":"zimbabwe/masvingo-province","depth":2,"parent":"zimbabwe","children":["chiredzi","masvingo","zvishavane"]});
export const childModules = Object.freeze({"chiredzi":"./chiredzi/chiredzi.js","masvingo":"./masvingo/masvingo.js","zvishavane":"./zvishavane/zvishavane.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
