import { useState } from 'react'
import ShowStuds from './componentsex1/ShowStuds'

function Appex1() {

  const [studs, setStuds] = useState ([
    {id: 1, fullname: "mario rossi", avg: 6, gender: 'm'}, 
    {id: 2, fullname: "luigi verdi", avg: 4, gender: 'm'}, 
    {id: 3, fullname: "peach pink", avg: 8, gender: 'f'},
    {id: 4, fullname: "wario rossi", avg: 9, gender: 'm'},
    {id: 5, fullname: "daisy princess", avg: 10, gender: 'f'} 
    ])

  console.log(studs)

  return (
    <>
      <section className=' h-screen flex flex-col items-center justify-center gap-6 '>
        <input className='border border-black rounded-l' type="text" />
      <div className=' bg-slate-600 flex flex-col w-52 p-3 rounded-xl  items-center justify-center gap-5'>
        
    <ShowStuds studs={studs} />
        
      </div>
      </section>
    </>
  )
}

export default Appex1
