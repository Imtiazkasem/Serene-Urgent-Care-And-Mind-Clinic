import {
  Heart,
  Target,
  Users,
  Award,
  Clock,
  Shield,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import React from "react";
import Container from "../Container/Container";
import Link from "next/link";

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We treat every patient with empathy and respect",
    },
    {
      icon: Clock,
      title: "Fast & Accessible",
      description: "Quick appointments and walk-in availability",
    },
    {
      icon: Shield,
      title: "Affordable Solutions",
      description: "Transparent pricing and flexible payment options",
    },
    {
      icon: Users,
      title: "Integrated Approach",
      description: "Complete body-mind care in one place",
    },
  ];

  const benefits = [
    "No need for multiple appointments or referrals",
    "Comprehensive physical and mental health services",
    "Same-day evaluations and treatment plans",
    "Board-certified providers with extensive experience",
  ];

  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>About Serene</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text leading-tight">
              Fast, Affordable,{" "}
              <span className="text-primary">Compassionate</span> Healthcare
            </h2>

            {/* Mission Statement */}
            <p className="text-lg text-slate-600 leading-relaxed">
              At{" "}
              <span className="font-semibold text-text">
                Serene Urgent Care And Mind Clinic
              </span>
              , our mission is to provide fast, affordable, compassionate
              medical and mental healthcare. Our integrated model ensures
              patients receive complete body–mind care without the need for
              multiple appointments or referrals.
            </p>

            {/* Benefits List */}
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-slate-700">{benefit}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href="/about-serene-urgent-care-and-mind-clinic"
                className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition shadow-lg"
              >
                Learn More About Us
              </Link>
            </div>
          </div>

          {/* Right Content - Values Grid */}
          <div className="space-y-6">
            {/* Stats Card */}
            <div className="bg-linear-to-br from-primary to-secondary rounded-2xl p-8 text-background shadow-xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Our Commitment</h3>
                  <p className="text-teal-100 text-sm">
                    Excellence in integrated care
                  </p>
                </div>
              </div>
              <p className="text-teal-50 leading-relaxed">
                We believe healthcare should be holistic, accessible, and
                centered around you. That&apos;s why we&apos;ve created a
                one-stop solution for all your medical and mental health needs.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-background rounded-xl p-6 hover:bg-primary/5 transition-colors border border-slate-200 hover:border-primary/20 group"
                >
                  <div className="w-10 h-10 bg-background rounded-lg flex items-center justify-center mb-3 shadow-sm group-hover:shadow-md transition-shadow">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-bold text-text mb-1 text-sm">
                    {value.title}
                  </h4>
                  <p className="text-xs text-slate-600">{value.description}</p>
                </div>
              ))}
            </div>

            {/* Trust Badge */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 flex items-center space-x-4">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center shrink-0">
                <Target className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h4 className="font-bold text-text mb-1">
                  Patient-Centered Care
                </h4>
                <p className="text-sm text-slate-600">
                  Your health journey, our priority
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
