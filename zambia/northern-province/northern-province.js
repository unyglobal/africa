// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"northern-province","repository":"africa","path":"zambia/northern-province","depth":2,"parent":"zambia","children":["kaputa","kasama","luwingu","mbala","mporokoso","mpulungu"]});
export const childModules = Object.freeze({"kaputa":"./kaputa/kaputa.js","kasama":"./kasama/kasama.js","luwingu":"./luwingu/luwingu.js","mbala":"./mbala/mbala.js","mporokoso":"./mporokoso/mporokoso.js","mpulungu":"./mpulungu/mpulungu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
