import { Link } from 'react-router-dom'
import { Home, Search, ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <section className="relative min-h-screen isolate overflow-hidden bg-white dark:bg-black text-gray-900 dark:text-white flex items-center justify-center">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_50%_50%,rgba(124,58,237,0.1),rgba(255,255,255,0.8))] dark:bg-[radial-gradient(80%_80%_at_50%_50%,rgba(124,58,237,0.25),rgba(0,0,0,0.8))]" />
      </div>

      <div className="mx-auto w-full max-w-4xl px-4 py-20 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="mb-8 flex items-center justify-center">
            <Search className="h-24 w-24 text-fuchsia-500 dark:text-fuchsia-400 opacity-20" />
          </div>

          <h1 className="text-8xl font-extrabold tracking-tight sm:text-9xl">
            <span className="bg-gradient-to-br from-fuchsia-600 via-violet-600 to-fuchsia-700 dark:from-fuchsia-400 dark:via-violet-400 dark:to-fuchsia-500 bg-clip-text text-transparent">
              404
            </span>
          </h1>

          <h2 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            Page Not Found
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base text-gray-600 dark:text-white/70 sm:text-lg">
            Looks like you've ventured into uncharted territory. The page you're looking for doesn't exist or has been moved.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 justify-center rounded-xl bg-gray-900 dark:bg-white/90 px-6 py-3 text-sm font-semibold text-white dark:text-black shadow-md transition hover:bg-gray-800 dark:hover:bg-white"
            >
              <Home className="h-4 w-4" />
              Back to Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 justify-center rounded-xl border border-gray-300 dark:border-white/20 bg-transparent px-6 py-3 text-sm font-semibold text-gray-900 dark:text-white transition hover:bg-gray-100 dark:hover:bg-white/10"
            >
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </button>
          </div>

          <div className="mx-auto mt-12 h-1 w-16 rounded bg-gray-400 dark:bg-white/70" />
        </motion.div>
      </div>
    </section>
  )
}
