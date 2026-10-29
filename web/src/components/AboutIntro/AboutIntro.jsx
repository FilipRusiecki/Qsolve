import FadeIn from 'src/components/FadeIn/FadeIn'

const AboutIntro = () => {
  return (
    <section id="about" className="bg-qs-mist">
      <div className="mx-auto grid w-full max-w-[96rem] gap-10 px-4 py-20 sm:px-8 sm:py-28 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-16 lg:px-12 xl:px-16">
        <FadeIn>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-qs-green">
            About
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-qs-ink sm:text-4xl md:text-5xl">
            Built for clarity when the stakes are high.
          </h2>
        </FadeIn>
        <FadeIn delay={0.12}>
          <p className="text-base leading-relaxed text-qs-muted sm:text-lg">
            QSolve partners with teams who need straight thinking, grounded
            advice, and solutions that hold up in the real world. This homepage
            is the stack smoke test — content and pages expand from here.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

export default AboutIntro
