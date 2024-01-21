'use client'

import { useSearchParams } from 'next/navigation'

export default function SidebarNoteListFilter({ notes }) {
  // useSearchParams 等 hooks 都需要在客户端组件中
  const params = useSearchParams()
  const q = params.get('q')
  return (
    <ul className="notes-list">
      {notes
        .filter((note) => {
          return q
            ? note.note.title.toLowerCase().includes(q.toLowerCase())
            : true
        })
        .map((note) => (
          // 客户端组件直接使用服务端渲染好的组件
          // 减少打包体积，依赖等等
          <li key={note.id}>{note.item}</li>
        ))}
    </ul>
  )
}
