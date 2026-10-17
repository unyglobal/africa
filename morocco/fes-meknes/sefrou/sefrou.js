// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sefrou","repository":"africa","path":"morocco/fes-meknes/sefrou","depth":3,"parent":"morocco/fes-meknes","children":["habbouna","hay-rachad","hay-zalagh","kaf-lmal","lkhandeq","qaryet-ben-saffar","quartier-amaqmouch"]});
export const childModules = Object.freeze({"habbouna":"./habbouna/habbouna.js","hay-rachad":"./hay-rachad/hay-rachad.js","hay-zalagh":"./hay-zalagh/hay-zalagh.js","kaf-lmal":"./kaf-lmal/kaf-lmal.js","lkhandeq":"./lkhandeq/lkhandeq.js","qaryet-ben-saffar":"./qaryet-ben-saffar/qaryet-ben-saffar.js","quartier-amaqmouch":"./quartier-amaqmouch/quartier-amaqmouch.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
