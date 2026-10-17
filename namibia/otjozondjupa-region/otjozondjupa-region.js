// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"otjozondjupa-region","repository":"africa","path":"namibia/otjozondjupa-region","depth":2,"parent":"namibia","children":["grootfontein","okahandja","otjiwarongo"]});
export const childModules = Object.freeze({"grootfontein":"./grootfontein/grootfontein.js","okahandja":"./okahandja/okahandja.js","otjiwarongo":"./otjiwarongo/otjiwarongo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
