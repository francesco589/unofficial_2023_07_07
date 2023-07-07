import { useState } from 'react'
import Show from './componentsex1/Show'
import Search from './componentsex1/Search'
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
       <Search studs={studs} setStuds={setStuds} />
        
      <div className=' bg-slate-600 flex flex-col w-52 p-3 rounded-xl  items-center justify-center gap-5'>
        
      <Show studs={studs}/>
        
      </div>
      </section>
    </>
  )
}

export default Appex1
