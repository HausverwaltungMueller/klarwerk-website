import Reveal from '../components/Reveal'
import Visual from '../components/Visual'
import Button from '../components/Button'

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-charcoal text-limestone-light">
      <div className="absolute inset-0 opacity-30">
        <Visual tone="night" motif="wave" className="h-full w-full" grain />
      </div>
      <div className="container-edit relative py-32 text-center">
        <Reveal>
          <p className="eyebrow-light">404</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="headline mt-4 text-5xl leading-[0.98] sm:text-7xl">
            This table
            <br />
            isn&rsquo;t set.
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-md text-base text-limestone-light/70 sm:text-lg">
            The page you are looking for has drifted out to sea. Let&rsquo;s bring you back to shore.
          </p>
        </Reveal>
        <Reveal delay={0.3} className="mt-10 flex justify-center">
          <Button to="/" size="lg">
            Back to Home
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
