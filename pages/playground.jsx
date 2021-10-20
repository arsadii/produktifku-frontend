import Guest from "../layouts/Guest";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import TodoList from "../components/TodoList";
import Warning from "../components/Warning";

export default function Playground() {
  return (
    <Guest>
      <div className="sm:hidden bg-indigo-500 p-3 rounded-full fixed right-5 bottom-5">
        <IoIcons.IoMdAdd size={32} className="text-white" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-28 bg-white ">
        <div className="hidden sm:flex flex-col space-y-4">
          <button className="bg-indigo-500 px-7 py-3 flex items-center justify-center space-x-2 rounded-full hover:shadow-xl transition-all duration-500">
            <MdIcons.MdAddCircle size={32} className="text-white" />
            <h1 className="font-bold text-white text-xl">Tugas Baru</h1>
          </button>
          <Warning />
        </div>
        <div className=" flex flex-col col-span-2">
          <TodoList />
        </div>
      </div>
    </Guest>
  );
}
