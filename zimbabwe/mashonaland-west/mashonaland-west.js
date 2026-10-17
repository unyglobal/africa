// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mashonaland-west","repository":"africa","path":"zimbabwe/mashonaland-west","depth":2,"parent":"zimbabwe","children":["chegutu","chinhoyi","harare-western-suburbs","kadoma","kariba","karoi","norton"]});
export const childModules = Object.freeze({"chegutu":"./chegutu/chegutu.js","chinhoyi":"./chinhoyi/chinhoyi.js","harare-western-suburbs":"./harare-western-suburbs/harare-western-suburbs.js","kadoma":"./kadoma/kadoma.js","kariba":"./kariba/kariba.js","karoi":"./karoi/karoi.js","norton":"./norton/norton.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
