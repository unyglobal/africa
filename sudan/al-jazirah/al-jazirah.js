// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"al-jazirah","repository":"africa","path":"sudan/al-jazirah","depth":2,"parent":"sudan","children":["al-hasaheisa","al-hilaliyya","al-manaqil","rufa-a","wad-medani"]});
export const childModules = Object.freeze({"al-hasaheisa":"./al-hasaheisa/al-hasaheisa.js","al-hilaliyya":"./al-hilaliyya/al-hilaliyya.js","al-manaqil":"./al-manaqil/al-manaqil.js","rufa-a":"./rufa-a/rufa-a.js","wad-medani":"./wad-medani/wad-medani.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
