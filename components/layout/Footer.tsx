import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container-custom py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand - full width on mobile */}
          <div className="col-span-2 md:col-span-2 mb-4 sm:mb-0">
            <div className="mb-3 sm:mb-4">
              <Logo size="md" linkHome={true} animated={false} />
            </div>
            <p className="text-gray-600 text-sm sm:text-base max-w-md">
              Simple expense tracking on the go
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/" className="text-gray-600 hover:text-primary-600 transition-colors text-sm sm:text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/how-to-use" className="text-gray-600 hover:text-primary-600 transition-colors text-sm sm:text-base">
                  How to Use
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-primary-600 transition-colors text-sm sm:text-base">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Legal</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-primary-600 transition-colors text-sm sm:text-base">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-primary-600 transition-colors text-sm sm:text-base">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-xs sm:text-sm">
            © {new Date().getFullYear()} Expense Tracker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
