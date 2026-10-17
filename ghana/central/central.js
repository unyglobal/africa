// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"central","repository":"africa","path":"ghana/central","depth":2,"parent":"ghana","children":["apam","assin-foso","buduburam","cape-coast","dunkwa","elmina","foso","kasoa","mankesim","saltpond","swedru","twifu-praso","winneba"]});
export const childModules = Object.freeze({"apam":"./apam/apam.js","assin-foso":"./assin-foso/assin-foso.js","buduburam":"./buduburam/buduburam.js","cape-coast":"./cape-coast/cape-coast.js","dunkwa":"./dunkwa/dunkwa.js","elmina":"./elmina/elmina.js","foso":"./foso/foso.js","kasoa":"./kasoa/kasoa.js","mankesim":"./mankesim/mankesim.js","saltpond":"./saltpond/saltpond.js","swedru":"./swedru/swedru.js","twifu-praso":"./twifu-praso/twifu-praso.js","winneba":"./winneba/winneba.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
