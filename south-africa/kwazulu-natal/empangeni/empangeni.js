// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"empangeni","repository":"africa","path":"south-africa/kwazulu-natal/empangeni","depth":3,"parent":"south-africa/kwazulu-natal","children":["fairview","grantham-park","new-rail","panorama"]});
export const childModules = Object.freeze({"fairview":"./fairview/fairview.js","grantham-park":"./grantham-park/grantham-park.js","new-rail":"./new-rail/new-rail.js","panorama":"./panorama/panorama.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
