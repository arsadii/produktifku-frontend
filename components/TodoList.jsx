import EmptyTodo from "./EmptyTodo";

export default function TodoList() {
  return (
    <div className="space-y-5">
      <h1 className="uppercase tracking-tight text-3xl font-bold text-gray-600 text-center">
        tugasmu
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="font-bold tracking-tight uppercase text-red-400">
            penting & mendesak
          </div>
          <EmptyTodo />
        </div>
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="font-bold tracking-tight uppercase text-yellow-400">
            penting tapi tidak mendesak
          </div>
          <EmptyTodo />
        </div>
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="font-bold tracking-tight uppercase text-blue-400">
            tidak penting tapi mendesak
          </div>
          <EmptyTodo />
        </div>
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="font-bold tracking-tight uppercase text-green-400">
            tidak penting & tidak mendesak
          </div>
          <EmptyTodo />
        </div>
      </div>
    </div>
  );
}
