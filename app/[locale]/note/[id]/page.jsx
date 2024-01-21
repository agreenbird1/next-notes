import { getTranslations } from 'next-intl/server'
import Note from '@/components/Note'
import main from '@/lib/mysql'

export default async function Page({ params }) {
  const t = await getTranslations('Basic')
  // 动态路由 获取笔记 id
  const noteId = params.id
  const { getNote } = await main()
  const [note] = await getNote(noteId)
  // 为了让 Suspense 的效果更明显
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
  await sleep(1000)

  if (note == null) {
    return (
      <div className="note--empty-state">
        <span className="note-text--empty-state">{t('initText')}</span>
      </div>
    )
  }

  return <Note noteId={noteId} note={note} />
}
