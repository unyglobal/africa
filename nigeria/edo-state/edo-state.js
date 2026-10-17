// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"edo-state","repository":"africa","path":"nigeria/edo-state","depth":2,"parent":"nigeria","children":["auchi","benin-city","ekpoma","ubiaja","uromi"]});
export const childModules = Object.freeze({"auchi":"./auchi/auchi.js","benin-city":"./benin-city/benin-city.js","ekpoma":"./ekpoma/ekpoma.js","ubiaja":"./ubiaja/ubiaja.js","uromi":"./uromi/uromi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
