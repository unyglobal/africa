// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gbarnga","repository":"africa","path":"liberia/bong-county/gbarnga","depth":3,"parent":"liberia/bong-county","children":["barwalor-quarter","bassa-community","fiju-quarter","gbandi-quarter","lorma-quarters","mandingo-quarter"]});
export const childModules = Object.freeze({"barwalor-quarter":"./barwalor-quarter/barwalor-quarter.js","bassa-community":"./bassa-community/bassa-community.js","fiju-quarter":"./fiju-quarter/fiju-quarter.js","gbandi-quarter":"./gbandi-quarter/gbandi-quarter.js","lorma-quarters":"./lorma-quarters/lorma-quarters.js","mandingo-quarter":"./mandingo-quarter/mandingo-quarter.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
