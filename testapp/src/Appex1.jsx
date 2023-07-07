import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function Appex1() {
  const [studs, setStuds] = useState ([
    {id: 1, fullname: "mario rossi", avg: 6, gender: 'm'}, 
    {id: 2, fullname: "luigi verdi", avg: 4, gender: 'm'}, 
    {id: 3, fullname: "peach pink", avg: 8, gender: 'f'},
    {id: 4, fullname: "wario rossi", avg: 9, gender: 'm'},
    {id: 5, fullname: "daisy princess", avg: 10, gender: 'f'}, 
    ])

    function printStud(arr){
      arr.map(el => {
        return(<div key={el.id}><span>Fullname: {el.fullname}</span><span>Average: {el.avg}</span>{el}</div>)
      })
    }


  return (
    <>
      <div className='flex flex-col items-center justify-center'>
      {printStud(studs)}
      </div>
    </>
  )
}

export default Appex1
