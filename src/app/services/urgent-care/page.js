import React from 'react';
import { Clock, Activity, Heart, Shield, CheckCircle, Calendar, Phone, Sparkles, Stethoscope } from 'lucide-react';

const UrgentCarePage = () => {
  const illnessesConditions = [
    "Cold, flu, and COVID-19 symptoms",
    "Respiratory infections and sore throat",
    "Ear and eye infections",
    "Fever and viral illnesses",
    "Urinary tract infections (UTIs)",
    "Gastrointestinal symptoms (nausea, vomiting, diarrhea)",
    "Allergic reactions (non-life-threatening)"
  ];

  const injuriesEmergencies = [
    "Minor cuts, lacerations, and wound care",
    "Sprains, strains, and muscle injuries",
    "Minor fractures and sports injuries",
    "Back and joint pain",
    "Minor burns and insect bites"
  ];

  const testingDiagnostics = [
    "Flu & COVID-19 testing",
    "Rapid strep testing",
    "Urinalysis",
    "Blood work and in-house lab testing",
    "Imaging referrals (if needed)"
  ];

  const treatmentsProcedures = [
    "Stitches and wound management",
    "IV fluids for dehydration",
    "Breathing treatments and nebulizer therapy",
    "Injections and medications",
    "Splinting and basic orthopedic care"
  ];

  const examsPreventive = [
    "School, sports, and work physicals",
    "Pre-employment exams",
    "TB testing and screenings",
    "Vaccinations (as available)"
  ];

  const features = [
    {
      icon: Clock,
      title: "Walk-ins & Same-Day Appointments",
      description: "No need to wait - we're here when you need us"
    },
    {
      icon: Activity,
      title: "Shorter Wait Times Than ER",
      description: "Fast, efficient care without emergency room delays"
    },
    {
      icon: Heart,
      title: "Experienced & Compassionate Providers",
      description: "Professional medical care in a comfortable environment"
    },
    {
      icon: Shield,
      title: "In-House Testing",
      description: "On-site diagnostics for faster results and treatment"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <div className="relative bg-linear-to-br from-accent/20 via-white to-background py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/20 rounded-full opacity-20 blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Fast & Compassionate Care</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Urgent Care at <span className="text-primary">Serene Urgent Care & Mind Clinic</span>
            </h1>
            
            <p className=" text-lg md:text-xl text-slate-600 mb-6 md:mb-8 leading-relaxed">
              Serene Urgent Care & Mind Clinic provides fast, reliable, and compassionate care for non-life-threatening illnesses and injuries—without the long wait times of an emergency room. Our urgent care services are designed to deliver prompt treatment in a calm, patient-focused environment.
            </p>

            <p className="text-base md:text-lg text-slate-600 mb-6 md:mb-8">
              We welcome walk-ins and same-day appointments and offer on-site diagnostic services to ensure accurate evaluation and efficient care.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#book" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary-hover transition shadow-lg">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </a>
              <a href="tel:+3104314558" className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg border-2 border-primary hover:bg-primary/10 transition">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Serene Urgent Care & Mind Clinic
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-slate-200 hover:border-primary hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Treated Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Urgent Care Services We Provide
            </h2>
            <p className="text-lg text-slate-600">
              Comprehensive care for a wide range of non-life-threatening conditions
            </p>
          </div>
          
          {/* Illnesses & Conditions */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Illnesses & Conditions</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {illnessesConditions.map((service, index) => (
                <div key={index} className="flex items-center space-x-3 bg-slate-50 rounded-lg p-4 hover:bg-primary/10 transition-colors">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-slate-700">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Injuries & Minor Emergencies */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Injuries & Minor Emergencies</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {injuriesEmergencies.map((service, index) => (
                <div key={index} className="flex items-center space-x-3 bg-slate-50 rounded-lg p-4 hover:bg-primary/10 transition-colors">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-slate-700">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Testing & Diagnostics */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Testing & Diagnostics</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {testingDiagnostics.map((service, index) => (
                <div key={index} className="flex items-center space-x-3 bg-slate-50 rounded-lg p-4 hover:bg-primary/10 transition-colors">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-slate-700">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Treatments & Procedures */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Treatments & Procedures</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {treatmentsProcedures.map((service, index) => (
                <div key={index} className="flex items-center space-x-3 bg-slate-50 rounded-lg p-4 hover:bg-primary/10 transition-colors">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-slate-700">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Exams & Preventive Services */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Exams & Preventive Services</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {examsPreventive.map((service, index) => (
                <div key={index} className="flex items-center space-x-3 bg-slate-50 rounded-lg p-4 hover:bg-primary/10 transition-colors">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-slate-700">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency Notice */}
          <div className="mt-12 max-w-3xl mx-auto bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <p className="text-center text-red-800 font-medium">
              <strong>For life-threatening emergencies, please call 911 or visit the nearest emergency room.</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Hours & Info Section */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Walk-in Hours */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Walk-In Hours</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-3 border-b border-slate-200">
                  <span className="font-medium text-slate-700">Monday - Friday</span>
                  <span className="text-primary font-semibold">8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium text-slate-700">Saturday - Sunday</span>
                  <span className="text-primary font-semibold">9:00 AM - 5:00 PM</span>
                </div>
              </div>
              <div className="mt-6 bg-primary/10 border border-primary rounded-lg p-4">
                <p className="text-sm text-primary">
                  <strong>No appointment necessary!</strong> Walk in anytime during our hours. Online booking available to reduce wait time.
                </p>
              </div>
            </div>

            {/* What to Bring */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Stethoscope className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">What to Bring</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-slate-700">Valid photo ID</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-slate-700">Insurance card (if applicable)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-slate-700">List of current medications</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-slate-700">Payment method</span>
                </li>
              </ul>
              <div className="mt-6 bg-primary/10 border border-primary rounded-lg p-4">
                <p className="text-sm text-primary">
                  We accept most major insurance plans, Medicare, and Medi-Cal. Affordable membership plans available for uninsured patients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-third">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Get the Care You Need?
          </h2>
          <p className="text-xl mb-8">
            Walk in today or book an appointment online for faster service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#book" className="inline-flex items-center justify-center px-8 py-4 bg-background hover:bg-text font-semibold rounded-lg hover:text-background transition shadow-lg">
              <Calendar className="w-5 h-5 mr-2" />
              Book Online Now
            </a>
            <a href="#locations" className="inline-flex items-center justify-center px-8 py-4 bg-text text-white font-semibold rounded-lg hover:bg-background transition hover:text-text">
              Find Our Location
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrgentCarePage;