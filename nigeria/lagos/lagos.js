// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lagos","repository":"africa","path":"nigeria/lagos","depth":2,"parent":"nigeria","children":["agege","ajegunle","akowonjo","alasia","aliayabiagba","alimosho","badagry","ebute-ikorodu","epe","ikeja","irewe","lekki","makoko","mushin","obalende","oshodi","shomolu","surulere"]});
export const childModules = Object.freeze({"agege":"./agege/agege.js","ajegunle":"./ajegunle/ajegunle.js","akowonjo":"./akowonjo/akowonjo.js","alasia":"./alasia/alasia.js","aliayabiagba":"./aliayabiagba/aliayabiagba.js","alimosho":"./alimosho/alimosho.js","badagry":"./badagry/badagry.js","ebute-ikorodu":"./ebute-ikorodu/ebute-ikorodu.js","epe":"./epe/epe.js","ikeja":"./ikeja/ikeja.js","irewe":"./irewe/irewe.js","lekki":"./lekki/lekki.js","makoko":"./makoko/makoko.js","mushin":"./mushin/mushin.js","obalende":"./obalende/obalende.js","oshodi":"./oshodi/oshodi.js","shomolu":"./shomolu/shomolu.js","surulere":"./surulere/surulere.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
