import SidebarNoteItem from '@/components/SidebarNoteItem'

export default async function NoteList({ notes }) {
  if (notes.length == 0) {
    return <div className="notes-empty">{'No notes created yet!'}</div>
  }

  return (
    <ul className="notes-list">
      {notes.map((note) => {
        return (
          <li key={note.id}>
            <SidebarNoteItem noteId={note.id} note={note} />
          </li>
        )
      })}
    </ul>
  )
}
