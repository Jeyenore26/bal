import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2d5b53] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">B.A.L</h3>
            <p className="text-[#ECE5DF]">
              Connecting talent with opportunity through innovative recruitment
              solutions.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-[#ECE5DF] hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#ECE5DF] hover:text-white">
                  Start Now
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Contact</h4>
            <ul className="space-y-2 text-[#ECE5DF]">
              <li>Damietta</li>
              <li>New Damietta</li>
              <li>bal@gmail.com</li>
              <li>01129885261</li>
            </ul>
          </div>

          <div className="flex space-x-4">
            <Link href="#" className="text-[#ECE5DF] hover:text-white">
              <Facebook className="h-8 w-8" />
            </Link>
            <Link href="#" className="text-[#ECE5DF] hover:text-white">
              <Twitter className="h-8 w-8" />
            </Link>
            <Link href="#" className="text-[#ECE5DF] hover:text-white">
              <Linkedin className="h-8 w-8" />
            </Link>
            <Link href="#" className="text-[#ECE5DF] hover:text-white">
              <Instagram className="h-8 w-8" />
            </Link>
          </div>
          {/* Newsletter */}
        </div>
        {/* Copyright */}
        <div className="mt-12 border-t border-[#3a7a6f] pt-8 text-center text-[#ECE5DF]">
          <p>&copy; {new Date().getFullYear()} B.A.L. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
