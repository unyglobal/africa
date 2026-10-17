// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"south-sudan","repository":"africa","path":"south-sudan","depth":1,"parent":"","children":["central-equatoria","eastern-equatoria","jonglei","lakes","northern-bahr-al-ghazal","unity","upper-nile","warrap","western-bahr-al-ghazal","western-equatoria"]});
export const childModules = Object.freeze({"central-equatoria":"./central-equatoria/central-equatoria.js","eastern-equatoria":"./eastern-equatoria/eastern-equatoria.js","jonglei":"./jonglei/jonglei.js","lakes":"./lakes/lakes.js","northern-bahr-al-ghazal":"./northern-bahr-al-ghazal/northern-bahr-al-ghazal.js","unity":"./unity/unity.js","upper-nile":"./upper-nile/upper-nile.js","warrap":"./warrap/warrap.js","western-bahr-al-ghazal":"./western-bahr-al-ghazal/western-bahr-al-ghazal.js","western-equatoria":"./western-equatoria/western-equatoria.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
