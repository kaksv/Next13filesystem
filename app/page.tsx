import Image from 'next/image'
import TodosList from './(users)/todos/TodosList'
import { Suspense } from 'react'

 function Home() {
  return (
    <div>
      <Suspense fallback={<p className='text-red-500'>Loading the Todos...</p>}>
      <h1>Loading Todos</h1>
      <div className="flex space-x-2">
        <TodosList />
      </div>
      </Suspense>

      <Suspense fallback={<p className='text-blue-500'>Loading the Shopping Trollet</p>}>
      <h1>Loading Shopping Trollet</h1>
      <div className='flex space-x-2'>
        <TodosList />
      </div>
      </Suspense>
    </div>
  );
}
export default Home;
