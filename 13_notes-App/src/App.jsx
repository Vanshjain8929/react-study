import { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    if (!title.trim() || !details.trim()) return

    const copyTask = [...task];
    copyTask.push({ title: title.trim(), details: details.trim() })

    setTask(copyTask)

    setTitle('')
    setDetails('')
  }


  const deleteNote = (idx) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      const copyTask = [...task];
      copyTask.splice(idx, 1)
      setTask(copyTask)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-slate-100">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-6 p-4 sm:p-6 lg:flex-row lg:gap-8 lg:p-10">
        <form
          onSubmit={submitHandler}
          className="w-full rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-sm lg:w-2/5 lg:p-8"
        >
          <p className="text-sm font-medium tracking-wide text-indigo-300">Quick Capture</p>
          <h1 className="mt-1 text-3xl font-bold sm:text-4xl">Add New Note</h1>
          <p className="mt-2 text-sm text-slate-300">
            Save your thoughts in a clean and organized way.
          </p>

          <div className="mt-8 space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">Title</label>
              <input
                type="text"
                placeholder="Enter note heading"
                className="w-full rounded-xl border border-white/15 bg-slate-900/60 px-4 py-3 text-sm font-medium text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value)
                }}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">Details</label>
              <textarea
                className="h-48 w-full resize-none rounded-xl border border-white/15 bg-slate-900/60 px-4 py-3 text-sm font-medium text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30"
                placeholder="Write your note details..."
                value={details}
                onChange={(e) => {
                  setDetails(e.target.value)
                }}
              />
            </div>
          </div>

          <button
            className="mt-5 w-full rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-700/30 transition hover:brightness-110 active:scale-[0.99]"
          >
            Add Note
          </button>
        </form>

        <div className="w-full rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-sm lg:w-3/5 lg:p-8">
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-2xl font-bold sm:text-3xl">Recent Notes</h2>
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200">
              {task.length} {task.length === 1 ? 'note' : 'notes'}
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {task.length === 0 && (
              <div className="col-span-full rounded-2xl border border-dashed border-white/20 bg-slate-900/40 p-10 text-center">
                <p className="text-base font-semibold text-slate-200">No notes yet</p>
                <p className="mt-1 text-sm text-slate-400">
                  Create your first note from the form on the left.
                </p>
              </div>
            )}

            {task.map((elem, idx) => {
              return (
                <div
                  key={idx}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/80 to-slate-900/90 p-4 shadow-lg shadow-black/20"
                >
                  <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-indigo-500/20 blur-2xl" />
                  <div className="relative flex min-h-52 flex-col justify-between gap-4">
                    <div>
                      <h3 className="break-words text-lg font-bold text-slate-100">{elem.title}</h3>
                      <p className="mt-2 break-words text-sm leading-relaxed text-slate-300">{elem.details}</p>
                    </div>
                    <button
                      onClick={() => {
                        deleteNote(idx)
                      }}
                      className="w-full rounded-lg border border-rose-400/30 bg-rose-500/20 py-2 text-xs font-semibold text-rose-200 transition hover:bg-rose-500/30 active:scale-[0.99]"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App