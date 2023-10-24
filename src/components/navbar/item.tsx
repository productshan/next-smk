export default function Item({ text, onClick, isActive }: { text: String; onClick: () => void; isActive: boolean }) {
  return (
    <div className="group/item h-fit sm:h-full sm:px-4 flex sm:items-center hover:cursor-pointer" onClick={onClick}>
      <p className={`font-bold text-sm text-black sm:text-slate-500 items-center ${isActive ? "sm:text-white" : null} group-hover/item:sm:text-white`}>
        {text.toUpperCase()}
        <i className={`transition transform ml-2 fa fa-solid fa-angle-right fa-lg ${isActive ? "rotate-90" : "rotate-0"}`} />
      </p>
    </div>
  );
}
