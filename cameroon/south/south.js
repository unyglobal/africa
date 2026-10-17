// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"south","repository":"africa","path":"cameroon/south","depth":2,"parent":"cameroon","children":["ambam","ebolowa","kribi","lolodorf","sangmelima"]});
export const childModules = Object.freeze({"ambam":"./ambam/ambam.js","ebolowa":"./ebolowa/ebolowa.js","kribi":"./kribi/kribi.js","lolodorf":"./lolodorf/lolodorf.js","sangmelima":"./sangmelima/sangmelima.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
