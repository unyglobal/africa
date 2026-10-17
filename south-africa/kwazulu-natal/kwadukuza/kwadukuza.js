// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kwadukuza","repository":"africa","path":"south-africa/kwazulu-natal/kwadukuza","depth":3,"parent":"south-africa/kwazulu-natal","children":["shakaville"]});
export const childModules = Object.freeze({"shakaville":"./shakaville/shakaville.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
