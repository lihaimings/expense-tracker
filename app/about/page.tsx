export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">About Expense Tracker</h1>
      
      <div className="prose prose-lg dark:prose-invert">
        <p className="text-xl text-muted-foreground mb-8">
          Expense Tracker is a free online tool designed to make your life easier.
        </p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p>
            We believe that useful tools should be accessible to everyone. 
            That&apos;s why Expense Tracker is completely free to use.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Fast and reliable</li>
            <li>No registration required</li>
            <li>Works on all devices</li>
            <li>Privacy-focused</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
