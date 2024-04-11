import BootstrapClient from '@/components/BootstrapClient.js'
import 'bootstrap/dist/css/bootstrap.css'
import './styles/globals.scss'

export const metadata = {
  title: "Mtuan's Portfolio",
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <BootstrapClient />
      </body>
    </html>
  )
}
