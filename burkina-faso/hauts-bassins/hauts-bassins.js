// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hauts-bassins","repository":"africa","path":"burkina-faso/hauts-bassins","depth":2,"parent":"burkina-faso","children":["bobo-dioulasso","hounde","karankasso","orodara"]});
export const childModules = Object.freeze({"bobo-dioulasso":"./bobo-dioulasso/bobo-dioulasso.js","hounde":"./hounde/hounde.js","karankasso":"./karankasso/karankasso.js","orodara":"./orodara/orodara.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
