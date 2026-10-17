// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zimbabwe","repository":"africa","path":"zimbabwe","depth":1,"parent":"","children":["bulawayo","harare","manicaland","mashonaland-central","mashonaland-east-province","mashonaland-west","masvingo-province","matabeleland-north","matabeleland-south-province","midlands-province"]});
export const childModules = Object.freeze({"bulawayo":"./bulawayo/bulawayo.js","harare":"./harare/harare.js","manicaland":"./manicaland/manicaland.js","mashonaland-central":"./mashonaland-central/mashonaland-central.js","mashonaland-east-province":"./mashonaland-east-province/mashonaland-east-province.js","mashonaland-west":"./mashonaland-west/mashonaland-west.js","masvingo-province":"./masvingo-province/masvingo-province.js","matabeleland-north":"./matabeleland-north/matabeleland-north.js","matabeleland-south-province":"./matabeleland-south-province/matabeleland-south-province.js","midlands-province":"./midlands-province/midlands-province.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
