import React from 'react';

import { Zap, Brain, Shield, Award, CheckCircle, Calendar, Phone, Sparkles, Info } from 'lucide-react';
import Link from 'next/link';


const TMSTherapyPage  = () => {
 const benefits = [
    "Non-invasive and painless procedure",
    "FDA-approved for depression treatment",
    "No systemic side effects",
    "No medication required",
    "Proven effective for treatment-resistant depression",
    "Outpatient procedure with no downtime",
    "Sessions typically last 20-40 minutes",
    "Most patients see results within 4-6 weeks"
  ];

  const conditions = [
    {
      title: "Major Depressive Disorder",
      description: "Especially effective for those who haven't responded to antidepressants"
    },
    {
      title: "Anxiety Disorders",
      description: "Can help reduce symptoms of generalized anxiety and panic disorders"
    },
    {
      title: "OCD",
      description: "FDA-approved for obsessive-compulsive disorder treatment"
    },
    {
      title: "PTSD",
      description: "Emerging evidence for post-traumatic stress disorder relief"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Safe & FDA-Approved",
      description: "Clinically proven treatment with excellent safety profile"
    },
    {
      icon: Brain,
      title: "Targeted Brain Stimulation",
      description: "Precisely targets areas of the brain related to mood regulation"
    },
    {
      icon: Zap,
      title: "Advanced Technology",
      description: "Using BrainsWay and NeuroStar systems for optimal results"
    },
    {
      icon: Award,
      title: "Experienced Team",
      description: "Certified TMS specialists guide you through every step"
    }
  ];

  return (
    <section>
      
      {/* Hero Section */}
      <div className="relative bg-linear-to-br from-primary/10 via-background to-accent/10 py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent/10 rounded-full opacity-20 blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>FDA-Approved Brain Therapy</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold  mb-6">
              TMS Therapy: <span className="text-primary">Innovative Treatment</span> for Depression
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              TMS Therapy at Serene Urgent Care & Mind Clinic offers a safe, non-invasive, and FDA-approved treatment for depression and other mood disorders, especially for patients who haven&apos;t found relief with medication alone. Using gentle magnetic pulses to stimulate specific areas of the brain, TMS can help improve mood, energy, and overall mental well-being.
            </p>

            <p className="text-lg text-slate-600 mb-8">
              Our experienced team provides personalized treatment plans in a calm, supportive setting, making your journey to recovery comfortable and empowering.
            </p>

            {/* Info Badge */}
            <div className="flex items-start space-x-3 bg-third/5 border border-third rounded-lg p-4 mb-8">
              <Info className="w-6 h-6 text-third shrink-0 mt-0.5" />
              <p className="text-sm text-third">
                <strong>Did you know?</strong> TMS (Transcranial Magnetic Stimulation) uses the same magnetic technology as an MRI machine, but focused on specific brain areas to promote healing.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#book" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary-hover transition shadow-lg">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Link>
              <Link href="#learn-more" className="inline-flex items-center justify-center px-8 py-4 bg-background text-primary font-semibold rounded-lg border-2 border-primary hover:bg-primary/5 transition">
                <Brain className="w-5 h-5 mr-2" />
                Learn More About TMS
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold  text-center mb-12">
            Why Choose TMS Therapy
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-slate-200 hover:border-primary hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold  mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold  mb-4">
              How TMS Therapy Works
            </h2>
            <p className="text-lg text-slate-600">
              A simple, comfortable process designed around your schedule
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-bold  mb-2">Consultation</h3>
              <p className="text-sm text-slate-600">Meet with our specialists to determine if TMS is right for you</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-bold  mb-2">Mapping</h3>
              <p className="text-sm text-slate-600">Precise brain mapping to identify optimal treatment location</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-bold  mb-2">Treatment</h3>
              <p className="text-sm text-slate-600">Daily 20-40 minute sessions, 5 days/week for 4-6 weeks</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-bold  mb-2">Results</h3>
              <p className="text-sm text-slate-600">Most patients notice improvement within 4-6 weeks</p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits & Conditions */}
      <div className="py-16 bg-linear-to-br from-slate-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold  mb-6">
                TMS Therapy Benefits
              </h2>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-white rounded-lg p-4 border border-slate-200">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Conditions Treated */}
            <div>
              <h2 className="text-3xl font-bold  mb-6">
                Conditions We Treat with TMS
              </h2>
              <div className="space-y-4">
                {conditions.map((condition, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 border border-slate-200 hover:border-primary transition-colors">
                    <h3 className="font-bold  mb-2">{condition.title}</h3>
                    <p className="text-slate-600 text-sm">{condition.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Is TMS Right for You */}
      <div className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-third rounded-2xl p-8 lg:p-12 text-text">
            <h2 className="text-3xl font-bold mb-6">Is TMS Therapy Right for You?</h2>
            <div className="space-y-4 mb-8">
              <p className="text-lg ">
                TMS may be an excellent option if you:
              </p>
              <ul className="space-y-2 ">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>Have been diagnosed with major depressive disorder</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>Haven&apos;t responded well to antidepressant medications</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>Experience unwanted side effects from medications</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>Are looking for a non-medication treatment option</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#book" className="inline-flex items-center justify-center px-8 py-4 bg-text text-background font-semibold rounded-lg hover:bg-background hover:text-text transition shadow-lg">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Free Consultation
              </Link>
              <Link href="tel:+1234567890" className="inline-flex items-center justify-center px-8 py-4 bg-background text-text font-semibold rounded-lg hover:bg-text hover:text-background transition ">
                <Phone className="w-5 h-5 mr-2" />
                Speak with a Specialist
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Insurance Coverage */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold  mb-4">
            Insurance Coverage & Payment Options
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            TMS therapy is covered by most major insurance plans, including Medicare and Medi-Cal. Our team will work with your insurance provider to verify coverage and handle pre-authorization.
          </p>
          <p className="text-slate-600 mb-8">
            For uninsured patients, we offer flexible payment plans and membership options to make TMS therapy accessible.
          </p>
          <Link href="#insurance" className="inline-flex items-center px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary-hover transition">
            Check Your Coverage
          </Link>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-third">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold  mb-4">
            Begin Your Journey to Recovery
          </h2>
          <p className="text-xl  mb-8">
            Experience the healing power of TMS therapy in our calm, supportive environment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#book" className="inline-flex items-center justify-center px-8 py-4 bg-text text-background font-semibold rounded-lg hover:bg-background hover:text-text transition shadow-lg">
              <Calendar className="w-5 h-5 mr-2" />
              Book Your Consultation
            </Link>
            <a href="#faq" className="inline-flex items-center justify-center px-8 py-4 bg-background text-text font-semibold rounded-lg hover:bg-text hover:text-background transition">
              Learn More About TMS
            </a>
          </div>
        </div>
      </div>
    </section>
    );
};

export default TMSTherapyPage ;