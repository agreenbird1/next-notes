'use server'

import { redirect } from 'next/navigation'
import main from '@/lib/mysql'
import { revalidatePath } from 'next/cache'

export async function saveNote(noteId, title, body) {
  const { addNote, updateNote } = await main()
  if (noteId) {
    await updateNote(noteId, title, body)
    revalidatePath('/', 'layout')
    redirect(`/note/${noteId}`)
  } else {
    const [res] = await addNote(title, body)
    revalidatePath('/', 'layout')
    redirect(`/note/${res.insertId}`)
  }
}

export async function deleteNote(noteId) {
  const { deleteNote } = await main()
  revalidatePath('/', 'layout')
  await deleteNote(noteId)
  redirect('/')
}

export async function importNote(formData) {
  const { addNote } = await main()
  const file = formData.get('file')
  const filename = formData.get('filename')
  const buffer = Buffer.from(await file.arrayBuffer())
  const [res] = await addNote(filename, buffer.toString('utf-8'))
  revalidatePath('/', 'layout')
  return res.insertId
}
