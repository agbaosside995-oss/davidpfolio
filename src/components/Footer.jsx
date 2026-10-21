export default function Footer() {
  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-800 text-slate-500 text-center text-sm">
      <p>© {new Date().getFullYear()} David. Tous droits réservés.</p>
    </footer>
  );
}