export default function Search(props){
function sear(event){props.setStuds(studs.filter(w => w == event.target ))}
   
return( 
    <div className=' flex gap-2'>
    <input ref={input => {this.input = input}} className='border border-black rounded-l' type="text" placeholder='Cerca lo studente' />
    <button onClick={(e) => console.log(e)} className=' bg-slate-300 p-2 rounded-xl hover:bg-red-400'>Cerca</button>
    </div>
  ) 
}
