export const metadata = { title: "Privacy Policy — Blue Water Billfish" };

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="bg-card border-b border-border">
        <div className="mx-auto max-w-3xl px-4 py-10">
          <h1 className="font-playfair text-3xl font-bold">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mt-1">Last updated: May 18, 2025</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-3xl px-4 space-y-6 leading-relaxed">
          <p>
            We collect only the information needed to deliver and support your charter—such as name, contact
            details, trip preferences, and payment confirmations.
          </p>
          <div>
            <h3 className="font-semibold text-lg">Use of Data</h3>
            <p>Booking management, trip communication, and service improvement.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Sharing</h3>
            <p>We do not sell personal data. We share only with service providers (e.g., payment processors, email systems) needed to run the business, under confidentiality obligations.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Retention</h3>
            <p>Kept only as long as necessary for operations, tax, and legal requirements.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Your Choices</h3>
            <p>Request access, correction, or deletion by emailing <a className="underline" href="mailto:byron@bluewaterbillfish.com">byron@bluewaterbillfish.com</a>.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Cookies</h3>
            <p>Our site may use basic analytics and functional cookies. You can adjust browser settings to limit cookies.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
