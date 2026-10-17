// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"volta","repository":"africa","path":"ghana/volta","depth":2,"parent":"ghana","children":["aflao","akatsi","anloga","dzodze","ho","hohoe","keta","kpandu"]});
export const childModules = Object.freeze({"aflao":"./aflao/aflao.js","akatsi":"./akatsi/akatsi.js","anloga":"./anloga/anloga.js","dzodze":"./dzodze/dzodze.js","ho":"./ho/ho.js","hohoe":"./hohoe/hohoe.js","keta":"./keta/keta.js","kpandu":"./kpandu/kpandu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
