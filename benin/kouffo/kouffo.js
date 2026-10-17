// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kouffo","repository":"africa","path":"benin/kouffo","depth":2,"parent":"benin","children":["aplahoue","djakotome","dogbo","klouekanme","toviklin"]});
export const childModules = Object.freeze({"aplahoue":"./aplahoue/aplahoue.js","djakotome":"./djakotome/djakotome.js","dogbo":"./dogbo/dogbo.js","klouekanme":"./klouekanme/klouekanme.js","toviklin":"./toviklin/toviklin.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
