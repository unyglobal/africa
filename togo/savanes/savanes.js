// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"savanes","repository":"africa","path":"togo/savanes","depth":2,"parent":"togo","children":["dapaong","mango","sinkasse"]});
export const childModules = Object.freeze({"dapaong":"./dapaong/dapaong.js","mango":"./mango/mango.js","sinkasse":"./sinkasse/sinkasse.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
