import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HowToUsePage() {
  return (
    <div className="section bg-gradient-subtle">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How to Use Expense Tracker
            </h1>
            <p className="text-xl text-gray-600">
              Get started in just a few simple steps
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-6">

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <div className="flex-shrink-0 flex sm:block items-center gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
              1
            </div>
            <span className="sm:hidden text-lg font-semibold text-gray-900">User enters expense date and amount</span>
          </div>
          <div className="card flex-1">
            <h3 className="hidden sm:block text-xl font-semibold text-gray-900 mb-2">
              User enters expense date and amount
            </h3>
            <p className="text-gray-600 mb-2">
              Expense entered successfully
            </p>
            <p className="text-sm text-gray-500">
              UI Element: Input field 1: Date for expense entry
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <div className="flex-shrink-0 flex sm:block items-center gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
              2
            </div>
            <span className="sm:hidden text-lg font-semibold text-gray-900">User selects category for expense</span>
          </div>
          <div className="card flex-1">
            <h3 className="hidden sm:block text-xl font-semibold text-gray-900 mb-2">
              User selects category for expense
            </h3>
            <p className="text-gray-600 mb-2">
              Category selected successfully
            </p>
            <p className="text-sm text-gray-500">
              UI Element: Input field 2: Amount for expense entry
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <div className="flex-shrink-0 flex sm:block items-center gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
              3
            </div>
            <span className="sm:hidden text-lg font-semibold text-gray-900">User clicks 'Calculate' button</span>
          </div>
          <div className="card flex-1">
            <h3 className="hidden sm:block text-xl font-semibold text-gray-900 mb-2">
              User clicks 'Calculate' button
            </h3>
            <p className="text-gray-600 mb-2">
              Total expenses calculated correctly
            </p>
            <p className="text-sm text-gray-500">
              UI Element: Calculate button
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <div className="flex-shrink-0 flex sm:block items-center gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
              4
            </div>
            <span className="sm:hidden text-lg font-semibold text-gray-900">User views total expenses</span>
          </div>
          <div className="card flex-1">
            <h3 className="hidden sm:block text-xl font-semibold text-gray-900 mb-2">
              User views total expenses
            </h3>
            <p className="text-gray-600 mb-2">
              Expenses displayed accurately
            </p>
            <p className="text-sm text-gray-500">
              UI Element: Results panel
            </p>
          </div>
        </div>

          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link href="/" className="btn-primary inline-flex items-center gap-2">
              Try It Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
