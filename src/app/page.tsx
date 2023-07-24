import { prisma } from "@/db";
import { TodoItems } from "@/app/components/TodoItem";
import Link from "next/link";

function getTodos() {
  return prisma.todo.findMany();
}

export default async function Home() {

 
  const todos = await getTodos();
  // await prisma.todo.create({data: {title:'test01', complete:false}})

  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Todos</h1>
        <Link
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          href="/new"
        >
          New
        </Link>
      </header>
      <ul className="pl-4">
        {todos.map((todo) => (
          <TodoItems key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
}
