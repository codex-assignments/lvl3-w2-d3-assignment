export default function Flashcard({ title, definition, isFlipped, onFlip }) {
  return (
    <div
      //onFlip will be passed as a prop to App.jsx, which is able to call it as a function
      onClick={onFlip}
      className={`h-64 w-75 cursor-pointer p-6 min-h-[200px] flex flex-col items-center justify-center rounded-xl border-2 transition-all duration-300 
        ${
          isFlipped
            ? "bg-blue-50 border-blue-400"
            : "bg-white border-slate-200 hover:border-cyan-400"
        }`}
    >
      <h3 className="text-sm font-bold uppercase tracking-widest mb-2 text-slate-400">
        {isFlipped ? "Definition" : "Term"}
      </h3>

      <p className="text-center font-medium">
        {isFlipped ? definition : title}
      </p>
    </div>
  );
}
