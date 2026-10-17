// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"manica","repository":"africa","path":"mozambique/manica","depth":2,"parent":"mozambique","children":["catandica","chimoio","gondola","machipanda","messica"]});
export const childModules = Object.freeze({"catandica":"./catandica/catandica.js","chimoio":"./chimoio/chimoio.js","gondola":"./gondola/gondola.js","machipanda":"./machipanda/machipanda.js","messica":"./messica/messica.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
