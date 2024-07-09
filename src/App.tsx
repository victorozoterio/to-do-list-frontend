import { useEffect, useState, useRef, type FormEvent } from 'react';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { api } from './services/api';

interface CustomersProps {
  uuid: string;
  name: string;
  priority: string;
  is_done: boolean;
  created_at: Date;
  updated_at: Date;
}

export default function App() {
  const [customers, setCustomers] = useState<CustomersProps[]>([]);
  const nameRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    loadCustomers();
  }, []);

  async function loadCustomers() {
    const response = await api.get('/tasks');
    setCustomers(response.data);
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!nameRef.current?.value) return;

    const response = await api.post('/tasks', {
      name: nameRef.current?.value,
    });

    setCustomers((allCustomers) => [...allCustomers, response.data]);
    nameRef.current.value = '';
  }

  return (
    <div className='w-full min-h-screen bg-gray-900 flex justify-center px-4'>
      <main className='my-10 w-full md:max-w-2xl'>
        <h1 className='text-4xl font-medium text-white'>Lista de Tarefas</h1>

        <form className='flex flex-col my-6' onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Insira sua tarefa'
            className='w-full mb-5 p-2 rounded'
            ref={nameRef}
          />

          <input
            type='submit'
            value='ADD'
            className='cursor-pointer w-full p-2 bg-green-500 rounded font-semibold'
          />
        </form>

        <section className='flex flex-col gap-4'>
          {customers.map((customer) => (
            // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
            <article key={customer.uuid} className='w-full bg-white rounded p-2 relative '>
              <p className='ml-7'>{customer.name}</p>
              {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
              <button className='bg-white ml-3 flex items-center justify-center absolute left-0 top-1/2 transform -translate-y-1/2 ml-1 hover:scale-110 duration-250'>
                <FaRegCircleCheck size={18} color='#000' />
              </button>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
