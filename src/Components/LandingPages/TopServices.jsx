import React from "react";
import {
  Microscope,
  ClipboardCheck,
  Brain,
  Pill,
  HeartPulse,
  Zap,
  Heart,
  Droplets,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import Container from "../Container/Container";

const TopServices = () => {
  const services = [
    {
      icon: Microscope,
      title: "Flu / COVID Testing",
      description: "Fast, accurate testing with same-day results",
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-50",
      iconColor: "text-cyan-600",
    },
    {
      icon: ClipboardCheck,
      title: "Physical Exams",
      description: "Comprehensive wellness checkups",
      color: "from-teal-500 to-emerald-500",
      bgColor: "bg-teal-50",
      iconColor: "text-teal-600",
    },
    {
      icon: Brain,
      title: "ADHD & Depression Treatment",
      description: "Personalized mental health care",
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      icon: Pill,
      title: "Hormone Therapy",
      description: "Balance and wellness optimization",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-600",
    },
    {
      icon: HeartPulse,
      title: "Addiction Treatment",
      description: "Compassionate recovery support",
      color: "from-red-500 to-orange-500",
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
    },
    {
      icon: Zap,
      title: "TMS Therapy",
      description: "FDA-approved brain stimulation",
      color: "from-amber-500 to-yellow-500",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600",
    },
    {
      icon: Heart,
      title: "Women's Health",
      description: "Comprehensive care for women",
      color: "from-rose-500 to-pink-500",
      bgColor: "bg-rose-50",
      iconColor: "text-rose-600",
    },
    {
      icon: Droplets,
      title: "IV Fluids & Urgent Care",
      description: "Quick relief and rehydration",
      color: "from-sky-500 to-cyan-500",
      bgColor: "bg-sky-50",
      iconColor: "text-sky-600",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-linear-to-br from-primary/5 to-secondary/5">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Our Services</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-4">
            Our <span className="text-primary">Top Services</span>
          </h2>
          <p className="text-lg text-slate-600">
            Comprehensive healthcare solutions tailored to your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <a
              key={index}
              href={`#${service.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="group relative bg-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 hover:border-transparent"
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`w-14 h-14 ${service.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-text mb-2 group-hover:text-teal-600 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 mb-4">
                  {service.description}
                </p>

                {/* Arrow Link */}
                <div className="flex items-center text-primary text-sm font-semibold">
                  <span className="group-hover:mr-2 transition-all">
                    Learn More
                  </span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                </div>
              </div>

              {/* Bottom Accent Line */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
              ></div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            href="#all-services"
            className="inline-flex items-center px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary-hover transition shadow-lg group"
          >
            View All Services
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default TopServices;
