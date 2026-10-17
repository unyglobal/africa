// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pout","repository":"africa","path":"senegal/thies/pout","depth":3,"parent":"senegal/thies","children":["bambara","keur-seydou"]});
export const childModules = Object.freeze({"bambara":"./bambara/bambara.js","keur-seydou":"./keur-seydou/keur-seydou.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
