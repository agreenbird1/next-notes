import main from '@/lib/mysql'
import SidebarNoteItem from '@/components/SidebarNoteItem'
import SidebarNoteListFilter from '@/components/SidebarNoteListFilter'

export default async function NoteList() {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
  await sleep(1000)
  const { getNotes } = await main()
  const [notes] = await getNotes()
  if (notes.length == 0) {
    return <div className="notes-empty">{'No notes created yet!'}</div>
  }

  return (
    <SidebarNoteListFilter
      notes={notes.map((note) => ({
        id: note.id,
        note: note,
        // SidebarNoteItem 也是服务端组件，如果直接在filter中使用
        // 那么所有的子级都会被认为是客户端组件，会导致打包体积增大
        // 导致在SidebarNoteItem中之前抽离的依赖等无用
        item: <SidebarNoteItem noteId={note.id} note={note} />,
      }))}
    />
  )
}
