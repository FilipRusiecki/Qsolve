import { Link, routes } from '@redwoodjs/router'

const Navigation = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-qs-black/80 backdrop-blur-md">
      <nav
        className="mx-auto flex w-full max-w-[96rem] items-center justify-between gap-4 px-4 py-4 sm:px-8 sm:py-5 lg:px-12 xl:px-16"
        aria-label="Primary"
      >
        <Link to={routes.home()} className="inline-flex items-center">
          <img
            src="/images/qsolve-lockup-white.png"
            alt="QSolve"
            className="h-8 w-auto sm:h-9"
            width={200}
            height={36}
          />
        </Link>

        <a
          href="#contact"
          className="text-sm font-medium tracking-wide text-white/85 transition-colors hover:text-qs-gold sm:text-base"
        >
          Contact
        </a>
      </nav>
    </header>
  )
}

export default Navigation
