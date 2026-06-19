export default function Footer() {
  return (
    <footer className="bg-nile-900 text-sand-100 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          <div>
            <h3 className="font-serif text-xl font-semibold mb-2">Haboba</h3>
            <p className="text-sand-300 text-sm max-w-sm">
              Preserving Sudanese folklore, mythology, and oral heritage —
              one documented story at a time.
            </p>
          </div>
          <div className="text-sm text-sand-300">
            <p>Built by Mahmoud Gafar Ahmed Mohamed</p>
            <p className="mt-1">All stories cited from documented sources</p>
          </div>
        </div>
        <div className="border-t border-nile-700 mt-8 pt-6 text-xs text-sand-400">
          © {new Date().getFullYear()} Haboba. Cultural heritage project.
        </div>
      </div>
    </footer>
  );
}