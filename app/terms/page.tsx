export const metadata = { title: "Terms & Conditions — Blue Water Billfish" };

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="bg-card border-b border-border">
        <div className="mx-auto max-w-3xl px-4 py-10">
          <h1 className="font-playfair text-3xl font-bold">Terms & Conditions</h1>
          <p className="text-sm text-muted-foreground mt-1">Last updated: May 18, 2025</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-3xl px-4 space-y-6 leading-relaxed">
          <p>By booking a charter with BLUE WATER BILLFISH ADVENTURES LLC (“we,” “us,” “our”), you agree to these terms.</p>
          <div>
            <h3 className="font-semibold text-lg">Bookings & Payment</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>A deposit secures your date; balance due before departure.</li>
              <li>Prices include standard tackle, bait, ice, and water unless stated otherwise.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Cancellations & Weather</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>You may cancel up to 7 days before departure for a full refund of the deposit.</li>
              <li>Within 7 days, deposits are non-refundable but transferable once, subject to availability.</li>
              <li>The captain may cancel or reschedule for safety/weather; if we cancel, you may reschedule or receive a full refund of payments made.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Guest Responsibilities</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Follow crew instructions at all times.</li>
              <li>No illegal substances or hazardous items aboard.</li>
              <li>Alcohol in moderation; we may end a trip for unsafe behavior without refund.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Catch Policy</h3>
            <p>We support conservation. Harvest limits follow current regulations; billfish are typically tag-and-release unless otherwise permitted and agreed.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Liability</h3>
            <p>Ocean activities carry inherent risk. Guests participate at their own risk to the maximum extent permitted by law. We are not liable for losses beyond fees paid for the affected charter.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Governing Law</h3>
            <p>Florida law governs these terms.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
