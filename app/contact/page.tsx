export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white py-8">
      <section className="mb-12">
        <h2 className="mb-8 text-3xl font-semibold">Contact Us</h2>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 text-xl font-semibold">Contact Information</h3>
            <div className="space-y-4">
              <p>
                <strong>Phone:</strong> 1-800-555-HARDWARE
              </p>
              <p>
                <strong>Email:</strong> sales@telecomhardware.com
              </p>
              <p>
                <strong>Address:</strong>
                <br />
                123 Industrial Parkway
                <br />
                Anytown, USA 12345
              </p>
              <p>
                <strong>Hours:</strong>
                <br />
                Monday - Friday: 8:00 AM - 5:00 PM EST
              </p>
            </div>
          </div>

          <div className="border border-gray-200 p-6">
            <h3 className="mb-4 text-xl font-semibold">Send Us a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-semibold">
                  Name *
                </label>
                <input type="text" id="name" required className="w-full border border-gray-200 p-2 text-sm" />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-semibold">
                  Email *
                </label>
                <input type="email" id="email" required className="w-full border border-gray-200 p-2 text-sm" />
              </div>
              <div>
                <label htmlFor="subject" className="mb-1 block text-sm font-semibold">
                  Subject
                </label>
                <input type="text" id="subject" className="w-full border border-gray-200 p-2 text-sm" />
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-semibold">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full border border-gray-200 p-2 text-sm"
                ></textarea>
              </div>
              <button type="submit" className="bg-black px-6 py-2 text-sm text-white hover:bg-gray-800">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
