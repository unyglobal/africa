// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kwale-county","repository":"africa","path":"kenya/kwale-county","depth":2,"parent":"kenya","children":["matuga","mazeras","ukunda"]});
export const childModules = Object.freeze({"matuga":"./matuga/matuga.js","mazeras":"./mazeras/mazeras.js","ukunda":"./ukunda/ukunda.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
