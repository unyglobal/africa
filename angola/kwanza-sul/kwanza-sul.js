// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kwanza-sul","repository":"africa","path":"angola/kwanza-sul","depth":2,"parent":"angola","children":["calulo","capunda","cela","conda","gabela","mussende","porto-amboim","quibala","quissecula","santa-clara","sumbe","ucu-seles"]});
export const childModules = Object.freeze({"calulo":"./calulo/calulo.js","capunda":"./capunda/capunda.js","cela":"./cela/cela.js","conda":"./conda/conda.js","gabela":"./gabela/gabela.js","mussende":"./mussende/mussende.js","porto-amboim":"./porto-amboim/porto-amboim.js","quibala":"./quibala/quibala.js","quissecula":"./quissecula/quissecula.js","santa-clara":"./santa-clara/santa-clara.js","sumbe":"./sumbe/sumbe.js","ucu-seles":"./ucu-seles/ucu-seles.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
