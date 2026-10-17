// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"harare","repository":"africa","path":"zimbabwe/harare","depth":2,"parent":"zimbabwe","children":["chitungwiza","epworth"]});
export const childModules = Object.freeze({"chitungwiza":"./chitungwiza/chitungwiza.js","epworth":"./epworth/epworth.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
