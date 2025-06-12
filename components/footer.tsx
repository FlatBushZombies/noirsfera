export default function Footer() {
  return (
    <footer className="py-4 px-6 text-xs text-gray-500 border-t border-gray-800 bg-black">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-4">
        <div className="px-4">© Noir Sfera 2025 All rights reserved.</div>


        <div className="flex gap-4 flex-wrap justify-center">
          <span className="hover:text-gray-300 cursor-pointer">Terms of Use</span>
          <span className="hover:text-gray-300 cursor-pointer">Privacy Policy</span>
          <span className="hover:text-gray-300 cursor-pointer">Agreements and Guidelines</span>
        </div>
      </div>
    </footer>
  )
}
