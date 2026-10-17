// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"plateaux","repository":"africa","path":"togo/plateaux","depth":2,"parent":"togo","children":["anie","atakpame","badou","kpalime","notse"]});
export const childModules = Object.freeze({"anie":"./anie/anie.js","atakpame":"./atakpame/atakpame.js","badou":"./badou/badou.js","kpalime":"./kpalime/kpalime.js","notse":"./notse/notse.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
