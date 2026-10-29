import { Link, routes } from '@redwoodjs/router'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-qs-line bg-qs-paper">
      <div className="mx-auto flex w-full max-w-[96rem] flex-col gap-3 px-4 py-5 text-xs text-qs-muted sm:gap-4 sm:px-8 sm:text-sm lg:flex-row lg:items-center lg:justify-between lg:px-12 xl:px-16">
        <p>Copyright © QSolve {year}</p>
        <p className="leading-relaxed lg:text-right">
          <Link to={routes.home()} className="hover:text-qs-green">
            QSolve
          </Link>
          <span className="mx-1.5">·</span>
          Made by{' '}
          <a
            href="https://www.frvg.net"
            target="_blank"
            rel="noreferrer"
            className="hover:text-qs-green"
          >
            Digital House Marketing
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
