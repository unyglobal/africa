// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"southern-darfur","repository":"africa","path":"sudan/southern-darfur","depth":2,"parent":"sudan","children":["buram","gereida","kas","nyala","rahad-al-bardi","tullus"]});
export const childModules = Object.freeze({"buram":"./buram/buram.js","gereida":"./gereida/gereida.js","kas":"./kas/kas.js","nyala":"./nyala/nyala.js","rahad-al-bardi":"./rahad-al-bardi/rahad-al-bardi.js","tullus":"./tullus/tullus.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
