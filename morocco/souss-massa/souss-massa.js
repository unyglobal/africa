// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"souss-massa","repository":"africa","path":"morocco/souss-massa","depth":2,"parent":"morocco","children":["agadir","ait-melloul","ait-yazza","aoulouz","aourir","ben-jerrar","dakhla","dchira-el-jihadia","inezgane","lqoliaa","my-drarga","oadar-temsia","oulad-barhil","oulad-teima","sidi-ifni","taroudant","tata","tine-biougra","tiznit"]});
export const childModules = Object.freeze({"agadir":"./agadir/agadir.js","ait-melloul":"./ait-melloul/ait-melloul.js","ait-yazza":"./ait-yazza/ait-yazza.js","aoulouz":"./aoulouz/aoulouz.js","aourir":"./aourir/aourir.js","ben-jerrar":"./ben-jerrar/ben-jerrar.js","dakhla":"./dakhla/dakhla.js","dchira-el-jihadia":"./dchira-el-jihadia/dchira-el-jihadia.js","inezgane":"./inezgane/inezgane.js","lqoliaa":"./lqoliaa/lqoliaa.js","my-drarga":"./my-drarga/my-drarga.js","oadar-temsia":"./oadar-temsia/oadar-temsia.js","oulad-barhil":"./oulad-barhil/oulad-barhil.js","oulad-teima":"./oulad-teima/oulad-teima.js","sidi-ifni":"./sidi-ifni/sidi-ifni.js","taroudant":"./taroudant/taroudant.js","tata":"./tata/tata.js","tine-biougra":"./tine-biougra/tine-biougra.js","tiznit":"./tiznit/tiznit.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
