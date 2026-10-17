// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"adamawa","repository":"africa","path":"nigeria/adamawa","depth":2,"parent":"nigeria","children":["ganye","gombi","jimeta","mubi","numan","yola"]});
export const childModules = Object.freeze({"ganye":"./ganye/ganye.js","gombi":"./gombi/gombi.js","jimeta":"./jimeta/jimeta.js","mubi":"./mubi/mubi.js","numan":"./numan/numan.js","yola":"./yola/yola.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
