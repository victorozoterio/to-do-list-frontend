import { FaRegCircleCheck } from 'react-icons/fa6';

export default function App() {
  return (
    <div className='w-full min-h-screen bg-gray-900 flex justify-center px-4'>
      <main className='my-10 w-full md:max-w-2xl'>
        <h1 className='text-4xl font-medium text-white'>Lista de Tarefas</h1>

        <form className='flex flex-col my-6'>
          <input type='text' placeholder='Insira sua tarefa' className='w-full mb-5 p-2 rounded' />

          <input
            type='submit'
            value='ADD'
            className='cursor-pointer w-full p-2 bg-green-500 rounded font-semibold'
          />
        </form>

        <section className='flex flex-col'>
          <article className='w-full bg-white rounded p-2 relative hover:scale-105 duration-200'>
            <p className='ml-6'>Lavar Louça</p>
            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
            <button className='bg-white w-7 h-7 flex items-center justify-center absolute left-0 top-1/2 transform -translate-y-1/2 ml-1'>
              <FaRegCircleCheck size={18} color='#000' />
            </button>
          </article>
        </section>
      </main>
    </div>
  );
}
