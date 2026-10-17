// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jigawa-state","repository":"africa","path":"nigeria/jigawa-state","depth":2,"parent":"nigeria","children":["birnin-kudu","chakwama","dutse","gumel","gwaram","hadejia","kiyawa"]});
export const childModules = Object.freeze({"birnin-kudu":"./birnin-kudu/birnin-kudu.js","chakwama":"./chakwama/chakwama.js","dutse":"./dutse/dutse.js","gumel":"./gumel/gumel.js","gwaram":"./gwaram/gwaram.js","hadejia":"./hadejia/hadejia.js","kiyawa":"./kiyawa/kiyawa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
