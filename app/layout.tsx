import Image from 'next/image'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <header>
          <Image src='/header.png' alt="header" width={500} height={300} className="absolute right-0"/>
        </header>
        <main>{children}</main>
        <footer>
          <Image src='/footer.png' alt="footer" width={500} height={250} className="absolute bottom-0 w-full" />
        </footer>
      </body>
    </html>
  )
}
