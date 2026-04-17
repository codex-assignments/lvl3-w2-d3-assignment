export default function Footer({count,total,reset}) {
  return (
    <footer className="bg-zinc-900 fixed bottom-0 w-full mt-auto py-6 border-t border-slate-100 text-center text-white text-sm">
      <p>
        Progress: <span className="font-bold text-blue-400">{count}</span> /{" "}
        {total} cards viewed
      </p>
      <button onClick={reset} className="px-2 py-1 bg-cyan-700 hover:bg-purple-600 transition-colors rounded-lg text-sm font-medium border border-slate-600 my-2" >Reset Progress</button>
      <p>
        &copy; {new Date().getFullYear()} Ashley's React Assignment • Built with
        Vite & Tailwind
      </p>
    </footer>
  );
}

//.size is the number of elements/entries currently contained in a set of data
//passing in the state as props, count and total
//count is the .size() of viewedCards
//total is the length of the flashcardInfo array