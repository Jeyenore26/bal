import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactUs() {
  return (
    <section className="bg-gradient-to-r from-[#f0f9f8] to-[#e0f3f0] py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-[#2d5b53] md:text-4xl lg:text-5xl">
            Contact Us
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Get in touch with our team for any inquiries
          </p>
        </div>

        <div className="flex items-center justify-center">
          {/* Contact Information */}

          {/* Contact Form */}
          <Card className="w-full rounded-lg bg-white p-8 shadow-sm lg:max-w-[40rem]">
            <h3 className="mb-6 text-2xl font-semibold text-[#2d5b53]">
              Send Us a Message
            </h3>

            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1 block text-gray-700">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-lg border-gray-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-gray-700">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full rounded-lg border-gray-300"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-1 block text-gray-700">
                  Subject
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-lg border-gray-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-1 block text-gray-700">
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="Your message..."
                  className="w-full rounded-lg border-gray-300"
                />
              </div>

              <Button
                type="submit"
                className="mt-4 w-full bg-[#2d5b53] hover:bg-[#3a7a6f]"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
