import { TrustIndicators } from "@/components/trust-indicators"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white py-8">
      <section className="mb-12">
        <h2 className="mb-8 text-3xl font-semibold">About Our Company</h2>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 leading-relaxed">
              Telecom Hardware Supply has been a leading provider of high-quality galvanized steel and electrical
              hardware for the telecommunications industry since 1995. We specialize in manufacturing and distributing
              industrial-grade components that meet or exceed industry standards.
            </p>

            <p className="mb-4 leading-relaxed">
              Our products are designed to withstand extreme conditions and provide reliable performance in critical
              infrastructure applications. We serve contractors, project managers, and government procurement officers
              with a commitment to quality, reliability, and exceptional service.
            </p>

            <p className="leading-relaxed">
              With manufacturing facilities in the United States and a global supply chain, we can fulfill orders of any
              size and meet tight project deadlines. Our team of engineers and technical specialists is available to
              provide expert advice and custom solutions for your specific requirements.
            </p>
          </div>

          <div className="border border-gray-200 bg-gray-100 p-8">
            <h3 className="mb-4 text-xl font-semibold">Our Capabilities</h3>

            <ul className="space-y-2">
              <li>• Manufacturing capacity: 50,000+ units per month</li>
              <li>• 100,000 sq ft production facility</li>
              <li>• In-house testing laboratory</li>
              <li>• Custom fabrication services</li>
              <li>• Nationwide shipping network</li>
              <li>• Bulk order fulfillment</li>
              <li>• Government and military contract experience</li>
              <li>• Technical support and engineering consultation</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold">Certifications & Quality</h2>
        <TrustIndicators />
      </section>
    </main>
  )
}
