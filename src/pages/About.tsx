export default function About() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="font-serif text-4xl font-bold text-sand-900 mb-6">
        About Haboba
      </h1>

      <div className="space-y-5 text-sand-700 leading-relaxed">
        <p>
          <strong className="text-sand-900">Haboba</strong> (حبوبة) means
          "grandmother" in Sudanese Arabic — the traditional keeper of family
          stories, the one who gathered children at night to pass down
          legends carried for generations.
        </p>
        <p>
          This project exists because much of Sudan's oral heritage — Nubian
          legends, desert folklore, river myths, and regional tales — survives
          only in scattered archives, academic collections, and living memory.
          Without active preservation, these stories risk disappearing along
          with the people who once told them.
        </p>
        <p>
          Every story on this site is researched from documented,
          citable sources — ethnographic collections, digital heritage
          archives, and academic folklore indexes. Each article links back to
          its original source. Nothing here is invented; everything is
          summarized and retold from real, traceable material.
        </p>
        <p>
          Haboba is an ongoing project. More stories, regions, and voices will
          be added as research continues.
        </p>
      </div>

      <div className="mt-12 p-6 bg-sand-100 rounded-2xl border border-sand-200">
        <h2 className="font-serif text-xl font-semibold text-sand-900 mb-2">
          Built by
        </h2>
        <p className="text-sand-700">
          Mahmoud Gafar Ahmed Mohamed — a developer building in public,
          combining technical skill with a personal connection to Sudanese
          heritage.
        </p>
      </div>
    </div>
  );
}