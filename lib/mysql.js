// 导入模块
import mysql from 'mysql2/promise'

async function main() {
  // 创建一个数据库连接
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'next-notes',
    password: 'tqt123',
    port: 3306,
  })

  const getNotes = async () => {
    const [results, fields] = await connection.query('SELECT * FROM notes')

    return [results, fields]
  }

  const getNote = async (id) => {
    const [results, fields] = await connection.query(
      'SELECT * FROM notes WHERE id = ?',
      id
    )

    return [results[0], fields]
  }

  const addNote = async (title, content) => {
    console.log('addNote', title, content)
    const res = await connection.query(
      'INSERT INTO notes (title, content) VALUES (?, ?)',
      [title, content]
    )
    return res
  }

  const deleteNote = async (id) => {
    await connection.query('DELETE FROM notes WHERE id = ?', [id])
  }

  const updateNote = async (id, title, content) => {
    await connection.query(
      'UPDATE notes SET title = ?, content = ? WHERE id = ?',
      [title, content, id]
    )
  }

  return {
    getNotes,
    getNote,
    addNote,
    deleteNote,
    updateNote,
  }
}

export default main