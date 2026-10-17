// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"makueni-county","repository":"africa","path":"kenya/makueni-county","depth":2,"parent":"kenya","children":["emali","makindu","makueni-boma","wote"]});
export const childModules = Object.freeze({"emali":"./emali/emali.js","makindu":"./makindu/makindu.js","makueni-boma":"./makueni-boma/makueni-boma.js","wote":"./wote/wote.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
