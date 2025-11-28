import React from "react";
import {
  Calendar,
  Clock,
  Phone,
  ArrowRight,
  Heart,
  Stethoscope,
  Brain,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative bg-linear-to-br from-primary-hover/10 via-background to-secondary/10 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/20 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary-hover/20 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative max-w-[1440px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Heart className="w-4 h-4" />
              <span>Compassionate Care When You Need It</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text leading-tight">
              Your Health. Your Care.{" "}
              <span className="text-primary">Your Comfort.</span>{" "}
              <span className="block mt-2">All in One Place.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              Urgent Care, Primary Care, Mental Health Services & Advanced TMS
              Therapy Under One Roof.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#book"
                className="inline-flex items-center justify-center px-8 py-4 bg-third text-white font-semibold rounded-lg hover:bg-[#ffa418] transition shadow-lg shadow-amber-500/30 group"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition" />
              </Link>

              {/* <Link
                href="#walkin"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-teal-700 font-semibold rounded-lg border-2 border-teal-600 hover:bg-teal-50 transition"
              >
                <Clock className="w-5 h-5 mr-2" />
                Walk-In Hours
              </Link> */}

              <Link
                href="tel:+1234567890"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Stethoscope className="w-8 h-8 text-primary" />
                </div>
                <p className="text-2xl font-bold text-text">15+</p>
                <p className="text-sm text-slate-600">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <p className="text-2xl font-bold text-text">50K+</p>
                <p className="text-sm text-slate-600">Patients Served</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Brain className="w-8 h-8 text-primary" />
                </div>
                <p className="text-2xl font-bold text-text">24/7</p>
                <p className="text-sm text-slate-600">Care Available</p>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative">
            {/* Placeholder for Hero Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-square bg-linear-to-br from-secondary to-primary flex items-center justify-center">
                <Image
                  src="/hero-image.png"
                  height={500}
                  width={500}
                  className="h-full w-full"
                  alt="healthcare image Smiling patients & healthcare professionals"
                  priority
                />
              </div>

              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6  rounded-xl shadow-xl p-4 backdrop-blur-sm bg-white/95">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600">Next Available</p>
                    <p className="text-lg font-bold text-text">
                      Today at 2:00 PM
                    </p>
                  </div>
                  <a
                    href="#book"
                    className="px-4 py-2 bg-secondary text-background text-sm font-semibold rounded-lg hover:bg-primary-hover transition"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-amber-400 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-teal-400 rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
            fillOpacity="0.1"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
