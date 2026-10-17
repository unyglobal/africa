// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"atsinanana","repository":"africa","path":"madagascar/atsinanana","depth":2,"parent":"madagascar","children":["ampasimanolotra","mahanoro","marolambo","toamasina","vatomandry","vohibinany"]});
export const childModules = Object.freeze({"ampasimanolotra":"./ampasimanolotra/ampasimanolotra.js","mahanoro":"./mahanoro/mahanoro.js","marolambo":"./marolambo/marolambo.js","toamasina":"./toamasina/toamasina.js","vatomandry":"./vatomandry/vatomandry.js","vohibinany":"./vohibinany/vohibinany.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
