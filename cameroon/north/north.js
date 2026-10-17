// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"north","repository":"africa","path":"cameroon/north","depth":2,"parent":"cameroon","children":["figuil","garoua","guider","lagdo","pitoa","tcheboa","tchollire","touboro"]});
export const childModules = Object.freeze({"figuil":"./figuil/figuil.js","garoua":"./garoua/garoua.js","guider":"./guider/guider.js","lagdo":"./lagdo/lagdo.js","pitoa":"./pitoa/pitoa.js","tcheboa":"./tcheboa/tcheboa.js","tchollire":"./tchollire/tchollire.js","touboro":"./touboro/touboro.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
