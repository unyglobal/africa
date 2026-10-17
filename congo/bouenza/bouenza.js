// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bouenza","repository":"africa","path":"congo/bouenza","depth":2,"parent":"congo","children":["bouansa","kayes","loudima","loutete","mouyondzi","nkayi"]});
export const childModules = Object.freeze({"bouansa":"./bouansa/bouansa.js","kayes":"./kayes/kayes.js","loudima":"./loudima/loudima.js","loutete":"./loutete/loutete.js","mouyondzi":"./mouyondzi/mouyondzi.js","nkayi":"./nkayi/nkayi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
