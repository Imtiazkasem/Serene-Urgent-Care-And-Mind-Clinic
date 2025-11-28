import React from 'react';
import { Clock, Users, Brain, Zap, Shield, CreditCard, Check, Sparkles } from 'lucide-react';
import Container from '../Container/Container';

const WhyChooseUs = () => {
 const features = [
    {
      icon: Clock,
      title: "Walk-In Urgent Care",
      description: "No Appointment Needed",
      color: "bg-teal-100 text-teal-600"
    },
    {
      icon: Users,
      title: "Full Primary Care",
      description: "For Adults & Families",
      color: "bg-cyan-100 text-cyan-600"
    },
    {
      icon: Brain,
      title: "Same-Day Mental Health",
      description: "Evaluations Available",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Zap,
      title: "FDA-Approved TMS Therapy",
      description: "BrainsWay/NeuroStar Technology",
      color: "bg-amber-100 text-amber-600"
    },
    {
      icon: Shield,
      title: "Insurance Accepted",
      description: "Medicare, Medi-Cal & Most Major Insurances",
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      icon: CreditCard,
      title: "Affordable Membership Plans",
      description: "For Uninsured Patients",
      color: "bg-rose-100 text-rose-600"
    }
  ];

  return (
    <section className="py-16 lg:py-24">
      <Container >
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Why Serene?</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-4">
            Why Choose <span className="text-primary">Serene</span>
          </h2>
          
          <p className="text-base md:text-lg text-slate-600">
            Comprehensive healthcare services designed around your needs, delivered with compassion and expertise.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-8 border border-slate-200 hover:border-primary/50  hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-text mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600">
                {feature.description}
              </p>

              {/* Check Icon */}
              <div className="absolute top-6 right-6 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Check className="w-4 h-4 text-primary" />
              </div>

              {/* Decorative Element */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-primary to-secondary rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a 
              href="#book" 
              className="px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary-hover transition shadow-lg"
            >
              Schedule Your Visit Today
            </a>
            <a 
              href="#services" 
              className="px-8 py-4 bg-background text-primary font-semibold rounded-lg border-2 border-primary hover:bg-primary/5 transition"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </Container>
    </section>
    );
};

export default WhyChooseUs;