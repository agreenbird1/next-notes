import { NextIntlClientProvider, useMessages } from 'next-intl'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  const messages = useMessages()
  return (
    <NextIntlClientProvider
      messages={{
        Basic: messages.Basic,
      }}
    >
      <div>{children}</div>
    </NextIntlClientProvider>
  )
}
