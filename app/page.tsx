"use client"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-950 text-gray-100">
      <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-violet-400">PeerUp</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex md:items-center md:space-x-6">
              <a href="#features" className="text-sm font-medium text-gray-400 transition-colors hover:text-violet-400">
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-sm font-medium text-gray-400 transition-colors hover:text-violet-400"
              >
                How It Works
              </a>
              <a
                href="#testimonials"
                className="text-sm font-medium text-gray-400 transition-colors hover:text-violet-400"
              >
                Testimonials
              </a>
            </nav>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex md:items-center md:space-x-3">
              <button className="rounded-md border border-gray-700 px-4 py-2 text-sm font-medium text-gray-200 transition-colors hover:bg-gray-800 hover:text-white">
                Log In
              </button>
              <button className="rounded-md bg-violet-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-violet-700">
                Sign Up
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button
                onClick={() => {
                  const mobileMenu = document.getElementById("mobile-menu")
                  if (mobileMenu) {
                    mobileMenu.classList.toggle("hidden")
                  }
                }}
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* Hamburger icon */}
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div id="mobile-menu" className="hidden md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <a
                href="#features"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-800 hover:text-white"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-800 hover:text-white"
              >
                How It Works
              </a>
              <a
                href="#testimonials"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-800 hover:text-white"
              >
                Testimonials
              </a>
              <div className="mt-4 flex flex-col space-y-2 px-3">
                <button className="w-full rounded-md border border-gray-700 px-4 py-2 text-sm font-medium text-gray-200 hover:bg-gray-800">
                  Log In
                </button>
                <button className="w-full rounded-md bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-700">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Connect, Collaborate, Code Better Together
                  </h1>
                  <p className="max-w-[600px] text-gray-400 md:text-xl">
                    PeerUp matches developers for code reviews, pair programming, and mentorship to help you grow faster
                    and build better software.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <button className="rounded-md bg-violet-600 px-4 py-2 font-medium text-white hover:bg-violet-700">
                    Join the Waitlist →
                  </button>
                  <button className="rounded-md border border-gray-700 px-4 py-2 font-medium text-gray-200 hover:bg-gray-800">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="rounded-xl border border-gray-800 bg-gray-900 p-6 text-gray-100">
                  <h3 className="mb-4 text-lg font-semibold">How PeerUp Works</h3>
                  <p className="mb-4 text-gray-400">
                    Our intelligent matching system connects you with the perfect coding partners based on your skills,
                    goals, and availability.
                  </p>
                  <div className="space-y-4">
                    <div className="rounded-lg bg-gray-800 p-3">
                      <p className="text-sm">
                        <span className="font-medium text-violet-400">Sarah</span> is available for a code review
                        session on your React project.
                      </p>
                      <div className="mt-2 flex justify-end space-x-2">
                        <button className="rounded border border-gray-700 px-3 py-1 text-xs font-medium hover:bg-gray-700">
                          Schedule
                        </button>
                        <button className="rounded bg-violet-600 px-3 py-1 text-xs font-medium text-white hover:bg-violet-700">
                          Connect Now
                        </button>
                      </div>
                    </div>
                    <div className="rounded-lg bg-gray-800 p-3">
                      <p className="text-sm">
                        <span className="font-medium text-violet-400">Alex</span> wants to pair program on a Node.js API
                        project.
                      </p>
                      <div className="mt-2 flex justify-end space-x-2">
                        <button className="rounded border border-gray-700 px-3 py-1 text-xs font-medium hover:bg-gray-700">
                          View Profile
                        </button>
                        <button className="rounded bg-violet-600 px-3 py-1 text-xs font-medium text-white hover:bg-violet-700">
                          Accept
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full bg-gray-900 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-violet-900/30 px-3 py-1 text-sm text-violet-400">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Everything you need to grow as a developer
                </h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  PeerUp provides the tools and community to help you improve your coding skills, get feedback, and
                  build connections.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border border-gray-800 p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-900/20 text-violet-400 text-2xl font-bold">
                  &lt;/&gt;
                </div>
                <h3 className="text-xl font-bold">Code Reviews</h3>
                <p className="text-center text-gray-400">
                  Get constructive feedback on your code from peers with relevant experience in your tech stack.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border border-gray-800 p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-900/20 text-violet-400 text-2xl font-bold">
                  👥
                </div>
                <h3 className="text-xl font-bold">Pair Programming</h3>
                <p className="text-center text-gray-400">
                  Find partners for collaborative coding sessions to solve problems and learn new techniques together.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border border-gray-800 p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-900/20 text-violet-400 text-2xl font-bold">
                  🎧
                </div>
                <h3 className="text-xl font-bold">Mentorship</h3>
                <p className="text-center text-gray-400">
                  Connect with experienced developers who can guide you through challenges and career growth.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-violet-900/30 px-3 py-1 text-sm text-violet-400">
                  How It Works
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Simple, effective developer collaboration
                </h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  PeerUp makes it easy to find the right coding partners and grow together.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-600 text-white">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold">Create Your Profile</h3>
                <p className="text-center text-gray-400">
                  Share your skills, experience, and what you're looking to learn or improve.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-600 text-white">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold">Get Matched</h3>
                <p className="text-center text-gray-400">
                  Our algorithm finds developers who complement your skills and match your learning goals.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-600 text-white">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold">Collaborate & Grow</h3>
                <p className="text-center text-gray-400">
                  Schedule sessions, collaborate on projects, and track your progress over time.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full bg-gray-900 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-violet-900/30 px-3 py-1 text-sm text-violet-400">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Developers love PeerUp</h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from our early users about how PeerUp has helped them grow.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col justify-between space-y-4 rounded-lg border border-gray-800 p-6">
                <div className="space-y-2">
                  <p className="text-gray-400">
                    "PeerUp helped me find a mentor who guided me through learning React. The feedback I received was
                    invaluable."
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-lg font-bold text-violet-400">JC</div>
                  <div>
                    <p className="text-sm font-medium">Jamie Chen</p>
                    <p className="text-sm text-gray-500">Frontend Developer</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-lg border border-gray-800 p-6">
                <div className="space-y-2">
                  <p className="text-gray-400">
                    "I've been coding for years but pair programming through PeerUp has introduced me to new techniques
                    I never would have discovered."
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-lg font-bold text-violet-400">MR</div>
                  <div>
                    <p className="text-sm font-medium">Michael Rodriguez</p>
                    <p className="text-sm text-gray-500">Senior Developer</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-lg border border-gray-800 p-6">
                <div className="space-y-2">
                  <p className="text-gray-400">
                    "The code reviews I've received through PeerUp have dramatically improved my coding style and
                    efficiency."
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-lg font-bold text-violet-400">AJ</div>
                  <div>
                    <p className="text-sm font-medium">Aisha Johnson</p>
                    <p className="text-sm text-gray-500">Backend Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-violet-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to level up your coding skills?
                </h2>
                <p className="max-w-[900px] text-violet-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join the PeerUp community today and connect with developers who can help you grow.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
                  <input
                    className="flex h-10 w-full rounded-md border border-violet-700 bg-violet-800 px-3 py-2 text-sm placeholder:text-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-400"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <button className="h-10 rounded-md bg-white px-4 py-2 text-sm font-medium text-violet-900 hover:bg-violet-100">
                    Join Waitlist
                  </button>
                </form>
                <p className="text-xs text-violet-200">
                  By signing up, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-gray-800 py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <p className="text-sm leading-loose text-center md:text-left text-gray-400">
              &copy; 2025 PeerUp. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm text-gray-400 hover:text-gray-100">
              Terms
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-gray-100">
              Privacy
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-gray-100">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
