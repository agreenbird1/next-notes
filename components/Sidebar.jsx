import React, { Suspense } from 'react'
import Link from 'next/link'

import Image from 'next/image'
import SidebarNoteList from '@/components/SidebarNoteList'
import EditButton from '@/components/EditButton'
import NoteListSkeleton from '@/components/NoteListSkeleton'
import SidebarSearchField from '@/components/SidebarSearchField';

export default async function Sidebar() {
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
          <SidebarSearchField />
        </section>
        <section className="sidebar-menu" role="menubar">
          <EditButton noteId={null}>New</EditButton>
        </section>
        <nav>
          {/* 如果不使用suspense
        那么将会等待十秒之后，页面渲染完成整个显示，非常突兀，等待时间也极长
        如果使用了suspense
        那么基于 next streaming 传输的效果
        会先显示骨架图和其他不需要等待的内容
        等待十秒之后再显示数据 */}
          <Suspense fallback={<NoteListSkeleton />}>
            <SidebarNoteList />
          </Suspense>
        </nav>
      </section>
    </>
  )
}
