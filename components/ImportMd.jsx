'use client'
import { useRouter } from 'next/navigation'
import { importNote } from '@/actions'

export default function ImportMd() {
  const router = useRouter()
  const onChange = async (e) => {
    const { files } = e.target
    if (!files.length) return
    const mdFile = files[0]
    const formData = new FormData()
    formData.append('file', mdFile)
    formData.append('filename', mdFile.name.split('.')[0])
    try {
      const data = await importNote(formData)
      router.push(`/note/${data}`)
    } catch (error) {
      console.error('something went wrong')
    }
  }
  return (
    <div style={{ textAlign: 'center', width: '100%', color: '#037dba' }}>
      <label htmlFor="file" style={{ cursor: 'pointer' }}>
        Import .md File
      </label>
      <input
        type="file"
        id="file"
        name="file"
        style={{ position: 'absolute', clip: 'rect(0 0 0 0)' }}
        onChange={onChange}
        accept=".md"
      />
    </div>
  )
}
