import darkSaasPc from '@public/dark-saas-pc.avif'
import lightSaasPc from '@public/light-saas-pc.avif'
import lightSaasMobi from '@public/light-saas-mobi.avif'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const portfolioProjects = [
  {
    company: 'Acme Corp',
    year: '2022',
    title: 'Dark Saas Landing Page',
    results: [
      { title: 'Enhanched user experience by 40%' },
      { title: 'Improved site speed by 50%' },
      { title: 'Increased mobile traffic by 35%' }
    ],
    link: 'https://youtu.be/4k7IdSLxh6w"',
    image: darkSaasPc
  },
  {
    company: 'Innivative Co',
    year: '2021',
    title: 'Light Saas Landing Page',
    results: [
      { title: 'Boosted sales by 20%' },
      { title: 'Expanded customer reach by 35%' },
      { title: 'Increased brand awareness by 15%' }
    ],
    link: 'https://youtu.be/4k7IdSLxh6w"',
    image: lightSaasMobi
  },
  {
    company: 'Quantum Dynamics',
    year: '2023',
    title: 'AI Startup Landing Page',
    results: [
      { title: 'Enhanched user experience by 40%' },
      { title: 'Improved site speed by 50%' },
      { title: 'Increased mobile traffic by 35%' }
    ],
    link: 'https://youtu.be/4k7IdSLxh6w"',
    image: lightSaasPc
  }
]

const Projects = () => {
  return (
    <>
      <div>
        <p className='bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-center font-semibold tracking-widest text-transparent'>
          REAL-WORLD RESULTS
        </p>
        <h2 className='mt-6 text-center text-3xl'>Featured Projects</h2>
        <p className=''>See how I transformed concepts into engaging digital experiences.</p>
        <div className=''>
          {portfolioProjects.map((project, i) => (
            <div className='' key={i}>
              <div className=''>
                <span>{project.company}</span>
                <span>{project.year}</span>
              </div>
              <h3>{project.title}</h3>
              <ul>
                {project.results.map((result, i) => (
                  <li key={i}>{result.title}</li>
                ))}
              </ul>
              <Link href={project.link}>
                <Button>View Live Site</Button>
              </Link>
              <Image src={project.image} alt={project.title}></Image>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Projects
