export default function Item({ text, onClick, isActive }: { text: String; onClick: () => void; isActive: boolean }) {
  return (
    <div className="group/item h-full px-4 flex items-center hover:cursor-pointer" onClick={onClick}>
      <a className={`font-bold text-sm items-center ${isActive ? "text-white" : "text-gray"} group-hover/item:text-white`}>
        {text.toUpperCase()}
        <i className={`transition transform ml-2 fa fa-solid fa-angle-right fa-lg ${isActive ? "rotate-90" : "rotate-0"}`} />
      </a>
    </div>
  );
}
