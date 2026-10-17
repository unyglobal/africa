// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"togo","repository":"africa","path":"togo","depth":1,"parent":"","children":["centrale","kara","maritime","plateaux","savanes"]});
export const childModules = Object.freeze({"centrale":"./centrale/centrale.js","kara":"./kara/kara.js","maritime":"./maritime/maritime.js","plateaux":"./plateaux/plateaux.js","savanes":"./savanes/savanes.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
