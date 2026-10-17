// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ouaka","repository":"africa","path":"central-african-republic/ouaka","depth":2,"parent":"central-african-republic","children":["bambari","ippy","kouango"]});
export const childModules = Object.freeze({"bambari":"./bambari/bambari.js","ippy":"./ippy/ippy.js","kouango":"./kouango/kouango.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
