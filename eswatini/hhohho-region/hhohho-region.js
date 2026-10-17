// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hhohho-region","repository":"africa","path":"eswatini/hhohho-region","depth":2,"parent":"eswatini","children":["mbabane"]});
export const childModules = Object.freeze({"mbabane":"./mbabane/mbabane.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
