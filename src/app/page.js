import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f0f0' }}>
      <div style={{ padding: '20px', border: '2px solid black', borderRadius: '5px' }}>
        Hello World
      </div>
    </main>
  )
}
