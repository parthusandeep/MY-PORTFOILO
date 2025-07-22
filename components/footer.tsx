export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 mt-24 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Sandeep. All rights reserved.</p>
        <p className="mt-2 text-sm">Built with Next.js, Tailwind CSS, and a passion for code.</p>
      </div>
    </footer>
  )
}
