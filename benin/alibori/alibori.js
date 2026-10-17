// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"alibori","repository":"africa","path":"benin/alibori","depth":2,"parent":"benin","children":["banikoara","kandi","malanville","segbana"]});
export const childModules = Object.freeze({"banikoara":"./banikoara/banikoara.js","kandi":"./kandi/kandi.js","malanville":"./malanville/malanville.js","segbana":"./segbana/segbana.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
