// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"diourbel-region","repository":"africa","path":"senegal/diourbel-region","depth":2,"parent":"senegal","children":["bambey","diourbel","keur-medoune","mbake","tiebo","touba"]});
export const childModules = Object.freeze({"bambey":"./bambey/bambey.js","diourbel":"./diourbel/diourbel.js","keur-medoune":"./keur-medoune/keur-medoune.js","mbake":"./mbake/mbake.js","tiebo":"./tiebo/tiebo.js","touba":"./touba/touba.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
