export const metadata = {
  title: 'S-Enigma',
  description: 'Next.js Project for SIWEB',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
