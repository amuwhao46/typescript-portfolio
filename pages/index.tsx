import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Head from 'next/head' 

export default function Home() {
  return (
    <div>
      <Head>
        <title>Oke's Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Favicon_Logo.png" />
      </Head>

      {/* Header */}
      <Header />
      {/* Hero */}
      <section id='hero'>
        <Hero />
      </section>
      {/* About */}
      {/* Experience */}
      {/* Skills */}
      {/* Projects */}
      {/* Contact Me */}

    </div>
  )
}
