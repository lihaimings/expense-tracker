export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      
      <div className="prose prose-lg dark:prose-invert">
        <p className="text-muted-foreground mb-6">
          Last updated: {new Date().toLocaleDateString()}
        </p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
          <p>
            By accessing and using Expense Tracker, you accept and agree to be bound 
            by these Terms of Service.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Use of Service</h2>
          <p>
            Expense Tracker is provided &quot;as is&quot; for your personal, non-commercial use. 
            You agree not to misuse the service or help anyone else do so.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
          <p>
            We shall not be liable for any indirect, incidental, special, 
            consequential, or punitive damages resulting from your use of the service.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Continued use 
            of the service constitutes acceptance of modified terms.
          </p>
        </section>
      </div>
    </div>
  );
}
