// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"analamanga","repository":"africa","path":"madagascar/analamanga","depth":2,"parent":"madagascar","children":["alarobia","ambohidratrimo","ambohitrolomahitsy","anjozorobe","ankazobe","ankazondandy","antananarivo","ivato","manjakandriana","sadabe"]});
export const childModules = Object.freeze({"alarobia":"./alarobia/alarobia.js","ambohidratrimo":"./ambohidratrimo/ambohidratrimo.js","ambohitrolomahitsy":"./ambohitrolomahitsy/ambohitrolomahitsy.js","anjozorobe":"./anjozorobe/anjozorobe.js","ankazobe":"./ankazobe/ankazobe.js","ankazondandy":"./ankazondandy/ankazondandy.js","antananarivo":"./antananarivo/antananarivo.js","ivato":"./ivato/ivato.js","manjakandriana":"./manjakandriana/manjakandriana.js","sadabe":"./sadabe/sadabe.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
