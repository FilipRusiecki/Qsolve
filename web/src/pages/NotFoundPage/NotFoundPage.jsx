import { Link, routes } from '@redwoodjs/router'

export default () => (
  <main className="flex min-h-[70vh] items-center justify-center bg-qs-mist px-4">
    <section className="max-w-md text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-qs-green">
        404
      </p>
      <h1 className="font-display text-3xl font-semibold tracking-tight text-qs-ink sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-4 text-qs-muted">
        That page doesn’t exist. Head back to the homepage.
      </p>
      <Link
        to={routes.home()}
        className="mt-8 inline-flex bg-qs-green px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-qs-green-deep"
      >
        Back to QSolve
      </Link>
    </section>
  </main>
)
