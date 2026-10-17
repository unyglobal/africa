// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"birnin-gaoure","repository":"africa","path":"niger/dosso-region/birnin-gaoure","depth":3,"parent":"niger/dosso-region","children":["birni-silenke"]});
export const childModules = Object.freeze({"birni-silenke":"./birni-silenke/birni-silenke.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
