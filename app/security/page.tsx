export const metadata = { title: "Security — Blue Water Billfish" };

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="bg-card border-b border-border">
        <div className="mx-auto max-w-3xl px-4 py-10">
          <h1 className="font-playfair text-3xl font-bold">Security</h1>
          <p className="text-sm text-muted-foreground mt-1">Last updated: May 18, 2025</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-3xl px-4 space-y-6 leading-relaxed">
          <div>
            <h3 className="font-semibold text-lg">Website & Data Security</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Our website uses TLS (HTTPS) to encrypt data in transit.</li>
              <li>Payments are processed by reputable third-party processors; we do not store full card numbers.</li>
              <li>Access to business systems is limited to authorized personnel and protected by strong authentication.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Incident Response</h3>
            <p>If we discover a data incident affecting you, we’ll notify you promptly and take steps to remediate and prevent recurrence.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
