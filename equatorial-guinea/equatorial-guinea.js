// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"equatorial-guinea","repository":"africa","path":"equatorial-guinea","depth":1,"parent":"","children":["bioko-norte","kie-ntem","litoral","wele-nzas"]});
export const childModules = Object.freeze({"bioko-norte":"./bioko-norte/bioko-norte.js","kie-ntem":"./kie-ntem/kie-ntem.js","litoral":"./litoral/litoral.js","wele-nzas":"./wele-nzas/wele-nzas.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
