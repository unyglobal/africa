// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"marsabit-county","repository":"africa","path":"kenya/marsabit-county","depth":2,"parent":"kenya","children":["marsabit","moyale"]});
export const childModules = Object.freeze({"marsabit":"./marsabit/marsabit.js","moyale":"./moyale/moyale.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
