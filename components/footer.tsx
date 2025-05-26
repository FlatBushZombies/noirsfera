export default function Footer() {
  return (
    <footer className="py-4 px-6 text-xs text-gray-500 border-t border-gray-800">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div>© Noir Sfera 2025 All rights reserved.</div>
        <div className="flex gap-4">
          <span>Terms of Use</span>
          <span>Privacy Policy</span>
          <span>Agreements and Guidelines</span>
        </div>
      </div>
    </footer>
  )
}
