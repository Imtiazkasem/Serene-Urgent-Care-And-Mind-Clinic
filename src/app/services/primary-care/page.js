import React from 'react';
import { Heart, Users, Activity, Calendar, Shield, CheckCircle, Phone, Sparkles, ClipboardCheck, Stethoscope } from 'lucide-react';

const PrimaryCarePage = () => {
  const preventiveWellness = [
    "Annual wellness exams and routine checkups",
    "Preventive health screenings",
    "Immunizations and vaccinations",
    "Lifestyle and wellness counseling"
  ];

  const chronicCondition = [
    "Diabetes care and monitoring",
    "High blood pressure and heart disease management",
    "Asthma and COPD management",
    "Thyroid disorders",
    "Weight and metabolic health support"
  ];

  const diagnosisTreatment = [
    "Evaluation and treatment of common illnesses",
    "Management of minor injuries and ongoing conditions",
    "Medication management and refills",
    "Lab review and follow-up care"
  ];

  const womensmensHealth = [
    "Women's health services and routine screenings",
    "Men's health evaluations",
    "Hormone-related health concerns (as clinically appropriate)"
  ];

  const mentalBehavioral = [
    "Depression, anxiety, and ADHD screening",
    "Medication management (when appropriate)",
    "Coordination with mental health services"
  ];

  const labDiagnostic = [
    "Routine blood work and diagnostic testing",
    "In-house lab services for faster results",
    "Review and explanation of test findings"
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Personalized Relationships",
      description: "Ongoing patient–provider relationships built on trust"
    },
    {
      icon: Activity,
      title: "Integrated Services",
      description: "Urgent care and mental health services in one location"
    },
    {
      icon: Users,
      title: "Patient-Centered Approach",
      description: "Evidence-based care tailored to your needs"
    },
    {
      icon: Shield,
      title: "Convenient Access",
      description: "Flexible scheduling and telehealth options available"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <div className="relative bg-linear-to-br from-accent/10 via-background to-primary/10 py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/10 rounded-full opacity-20 blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Comprehensive Primary Healthcare</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Primary Care at <span className="text-primary">Serene Urgent Care & Mind Clinic</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-4 md:mb-8 leading-relaxed">
              Serene Urgent Care & Mind Clinic offers comprehensive primary care services focused on prevention, early diagnosis, and long-term health management. Our primary care team partners with you to support your overall well-being through personalized, continuous care in a comfortable and welcoming environment.
            </p>

            <p className="text-base md:text-lg text-slate-600 mb-6 md:mb-8">
              Primary care at Serene is designed to help you stay healthy, manage chronic conditions, and address health concerns before they become more serious. We emphasize preventive care, routine screenings, and coordinated treatment plans tailored to your individual needs.
            </p>

            <p className="text-lg text-slate-600 mb-8">
              With convenient scheduling, same-day appointments when available, and integrated urgent care and mental health services, Serene provides a seamless healthcare experience, all under one roof.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#book" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition shadow-lg">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Visit
              </a>
              <a href="#new-patient" className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg border-2 border-teal-600 hover:bg-teal-50 transition">
                <ClipboardCheck className="w-5 h-5 mr-2" />
                New Patient Forms
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Serene for Primary Care
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-slate-200 hover:border-primary hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Primary Care Services We Provide
            </h2>
            <p className="text-lg text-slate-600">
              Comprehensive care for prevention, diagnosis, and long-term health management
            </p>
          </div>
          
          {/* Preventive & Wellness Care */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Preventive & Wellness Care</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {preventiveWellness.map((service, index) => (
                <div key={index} className="flex items-center space-x-3 bg-slate-50 rounded-lg p-4 hover:bg-teal-50 transition-colors">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-slate-700">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Chronic Condition Management */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Chronic Condition Management</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {chronicCondition.map((service, index) => (
                <div key={index} className="flex items-center space-x-3 bg-slate-50 rounded-lg p-4 hover:bg-teal-50 transition-colors">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-slate-700">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Diagnosis & Treatment */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Diagnosis & Treatment</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {diagnosisTreatment.map((service, index) => (
                <div key={index} className="flex items-center space-x-3 bg-slate-50 rounded-lg p-4 hover:bg-teal-50 transition-colors">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-slate-700">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Women's & Men's Health */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Women&apos;s & Men&apos;s Health</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {womensmensHealth.map((service, index) => (
                <div key={index} className="flex items-center space-x-3 bg-slate-50 rounded-lg p-4 hover:bg-teal-50 transition-colors">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-slate-700">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mental & Behavioral Health Integration */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Mental & Behavioral Health Integration</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {mentalBehavioral.map((service, index) => (
                <div key={index} className="flex items-center space-x-3 bg-slate-50 rounded-lg p-4 hover:bg-teal-50 transition-colors">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-slate-700">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Lab & Diagnostic Services */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Lab & Diagnostic Services</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {labDiagnostic.map((service, index) => (
                <div key={index} className="flex items-center space-x-3 bg-slate-50 rounded-lg p-4 hover:bg-teal-50 transition-colors">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-slate-700">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Approach Section */}
      <div className="py-16 bg-linear-to-br from-slate-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Our Commitment to Your Health
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Prevention First</h3>
                    <p className="text-slate-600">Emphasizing preventive care and routine screenings to keep you healthy</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Coordinated Care Plans</h3>
                    <p className="text-slate-600">Tailored treatment plans designed for your individual needs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Integrated Services</h3>
                    <p className="text-slate-600">Seamless access to urgent care and mental health support</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">HIPAA-Compliant Care</h3>
                    <p className="text-slate-600">Confidential, secure, and respectful healthcare services</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Getting Started</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-teal-50 rounded-lg">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Schedule Your Visit</h4>
                    <p className="text-sm text-slate-600">Book online or call us directly</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-teal-50 rounded-lg">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Complete New Patient Forms</h4>
                    <p className="text-sm text-slate-600">Fill out forms online before your visit</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-teal-50 rounded-lg">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Meet Your Provider</h4>
                    <p className="text-sm text-slate-600">Comprehensive assessment and personalized care plan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-third">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Partner With Us for Your Health
          </h2>
          <p className="text-xl mb-8">
            Experience personalized, comprehensive primary care that supports your health at every stage of life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#book" className="inline-flex items-center justify-center px-8 py-4 bg-background text-text font-semibold rounded-lg hover:bg-text hover:text-background transition shadow-lg">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Your First Visit
            </a>
            <a href="tel:+1234567890" className="inline-flex items-center justify-center px-8 py-4 bg-text text-white font-semibold rounded-lg hover:bg-background transition hover:text-text">
              <Phone className="w-5 h-5 mr-2" />
              Call Us Today
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimaryCarePage;