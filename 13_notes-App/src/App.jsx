import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task];

    copyTask.push({ title, details })

    setTask(copyTask)

    setTitle('')
    setDetails('')
  }


  const deleteNote = (idx) => {
    if(window.confirm("Are you sure you want to delete this note?")){
      const copyTask = [...task];
      copyTask.splice(idx, 1)
      setTask(copyTask)
    }
  }

  return (
    <div className='min-h-screen flex flex-col lg:flex-row bg-black text-white'>

      <form 
      onSubmit={(e) => {
        submitHandler(e)
      }} 
      className='flex gap-4 w-full lg:w-1/2 p-10 flex-col items-start lg:h-screen overflow-y-auto'
      >

        <h1 className='text-4xl mb-2 font-bold'>Add Notes</h1>

        {/* PEHLA INPUT FOR HEADING */}
        <input
          type="text"
          placeholder='Enter Notes Heading'
          className='px-5 w-full font-medium py-2 border-2 outline-none rounded '
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        {/* DETAILED VALA INPUT  */}
        <textarea
          type="text"
          className='px-5 w-full h-full font-medium py-2 flex items-start flex-row border-2 outline-none rounded'
          placeholder='Write Details here'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
        /> 

        <button
          className='bg-blue-500 active:scale-95 font-medium w-full outline-none text-black px-5 py-2 rounded'
        >
          Add Note
        </button>

      </form>

      <div className='w-full lg:w-1/2  lg:border-l-2 p-10 lg:h-screen overflow-y-auto'>
        <h1 className='text-4xl  text-center font-bold'>Recent Notes</h1>
        <div className='flex  p-20 flex-wrap  items-start justify-start gap-5 mt-6'>
          {task.map(function (elem, idx) {

            return <div key={idx} className="flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
              <div>
                <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
                <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'>{elem.details}</p>
              </div>
              <button onClick={() => {
                deleteNote(idx)
              }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
            </div>
          })}
        </div>
      </div>

    </div>
  )
}

export default App