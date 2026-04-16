export default function Footer() {
  return (
    <footer className="mt-auto py-6 border-t border-slate-100 text-center text-slate-500 text-sm">
      <p>
        &copy; {new Date().getFullYear()} Ashley's React Assignment • Built with Vite &
        Tailwind
      </p>
    </footer>
  );
}
