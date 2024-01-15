import React from 'react'
import Link from 'next/link'
import { getNotes } from '@/lib/mysql'
import Image from 'next/image'
import SidebarNoteList from '@/components/SidebarNoteList';

export default async function Sidebar() {
  const [notes] = await getNotes()

  return (
    <>
      <section className="col sidebar">
        <Link href={'/'} className="link--unstyled">
          <section className="sidebar-header">
            <Image
              className="logo"
              src="/logo.svg"
              width="22"
              height="20"
              alt=""
              role="presentation"
            />
            <strong>React Notes</strong>
          </section>
        </Link>
        <section className="sidebar-menu" role="menubar">
          {/* SideSearchField */}
          <SidebarNoteList notes={notes} />
        </section>
        <nav>{/* SidebarNoteList */}</nav>
      </section>
    </>
  )
}
