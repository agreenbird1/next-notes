// 导入模块
import mysql from 'mysql2/promise'

// 创建一个数据库连接
const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'next-notes',
  password: 'tqt123',
  port: 3306,
})

export const getNotes = async () => {
  const [results, fields] = await connection.query('SELECT * FROM notes')

  return [results, fields]
}

export const getNote = async (id) => {
  const [results, fields] = await connection.query(
    'SELECT * FROM notes WHERE id = ?',
    id
  )

  return [results[0], fields]
}

export const addNote = async (title, content) => {
  await connection.query('INSERT INTO notes (title, content) VALUES (?, ?)', [
    title,
    content,
  ])
}

export const deleteNote = async (id) => {
  await connection.query('DELETE FROM notes WHERE id = ?', [id])
}

export const updateNote = async (id, title, content) => {
  await connection.query(
    'UPDATE notes SET title = ?, content = ? WHERE id = ?',
    [title, content, id]
  )
}

export default connection
