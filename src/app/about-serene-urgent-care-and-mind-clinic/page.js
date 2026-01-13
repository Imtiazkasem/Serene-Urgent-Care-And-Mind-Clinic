import React from "react";
import {
  Heart,
  Shield,
  Users,
  Activity,
  CheckCircle,
  Target,
  Eye,
  Sparkles,
  Stethoscope,
  Lock,
  Award,
} from "lucide-react";
import HealthcareGallery from "@/Components/LandingPages/HealthcareGallery";

const AboutPage = () => {
  const services = [
    "Urgent care for illnesses and minor injuries",
    "Flu & COVID-19 testing",
    "Physical exams (annual, school, sports, work, pre-employment)",
    "Mental health care for ADHD, depression, and anxiety",
    "Therapy and medication management (as clinically appropriate)",
    "Hormone therapy consultations",
    "In-house laboratory testing",
    "Telehealth and virtual visits",
  ];

  const approachPoints = [
    {
      icon: Stethoscope,
      title: "Comprehensive Evaluations",
      description:
        "Medical and mental health evaluations tailored to each patient",
    },
    {
      icon: CheckCircle,
      title: "Evidence-Based Treatment",
      description: "Individualized plans based on clinical guidelines",
    },
    {
      icon: Activity,
      title: "In-House Lab Testing",
      description: "Faster diagnosis with on-site laboratory services",
    },
    {
      icon: Users,
      title: "Coordinated Care",
      description: "Seamless coordination across providers when needed",
    },
    {
      icon: Shield,
      title: "Secure Telehealth",
      description: "Virtual services compliant with California law",
    },
    {
      icon: Award,
      title: "Medical Oversight",
      description:
        "Appropriate supervision following state and federal regulations",
    },
  ];

  const whyChoose = [
    "Same-day appointments and walk-ins",
    "Integrated urgent care and mental health services",
    "Experienced, compassionate providers",
    "In-house labs for quicker results",
    "Telehealth options for convenience",
    "HIPAA-compliant and confidential care",
    "Comfortable, modern clinic environment",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-linear-to-br from-primary/10 via-background to-accent/10 py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/20 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Integrated Urgent Care & Mental Health Services</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              About{" "}
              <span className="text-primary">
                Serene Urgent Care & Mind Clinic
              </span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Serene Urgent Care & Mind Clinic provides accessible,
              patient-centered medical and mental health care in a calm,
              supportive environment. We offer same-day urgent care, mental
              health services, preventive care, and telehealth, focused on
              treating the whole person, not just symptoms.
            </p>

            <p className="text-lg text-slate-600">
              Our clinic follows California healthcare regulations, clinical
              best practices, and strict patient privacy standards to ensure
              safe, ethical, and high-quality care.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                Compassionate, Integrated Healthcare You Can Trust
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Our mission is to deliver timely, evidence-based urgent care and
                mental health services while promoting long-term wellness. We
                strive to make healthcare more accessible through walk-ins,
                scheduled appointments, and secure telehealth services.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Our Vision</h2>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                A Modern Approach to Whole-Person Care
              </h3>
              <p className="text-slate-600 leading-relaxed">
                We envision a healthcare model where urgent medical care and
                mental wellness work together seamlessly, improving outcomes,
                reducing delays, and supporting patients at every stage of life.
              </p>
            </div>
          </div>
        </div>
      </div>

      <HealthcareGallery />

      {/* Approach to Care Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Approach to Care</h2>
            <p className="text-xl text-slate-600">
              Patient-Centered. Evidence-Based. California-Compliant.
            </p>
            <p className="text-lg text-slate-600 mt-4">
              All services are provided under appropriate medical oversight and
              in accordance with California state and federal healthcare
              regulations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {approachPoints.map((point, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-6 hover:bg-primary/5 transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <point.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{point.title}</h3>
                <p className="text-slate-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-slate-600">
              Complete Care Under One Roof
            </p>
            <p className="text-sm text-slate-600 mt-4 italic">
              Services are offered based on medical necessity and provider
              evaluation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-white rounded-lg p-4 hover:bg-primary/10 transition-colors"
              >
                <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                <span className="text-slate-700">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Provider-Led Care Section */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
            <Award className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Provider-Led Medical Care</h2>
          <p className="text-xl text-slate-600 mb-6">
            Licensed Professionals. Clinical Oversight.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Serene Urgent Care & Mind Clinic is staffed by licensed healthcare
            professionals operating within their scope of practice under
            appropriate medical supervision. Care is delivered following
            established clinical protocols, patient safety standards, and
            ethical guidelines.
          </p>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="py-16 bg-linear-to-br from-slate-50 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Serene Urgent Care & Mind Clinic
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {whyChoose.map((reason, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all"
              >
                <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                <span className="text-slate-700 font-medium">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Privacy & Safety Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-linear-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">
                  Commitment to Patient Privacy & Safety
                </h2>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                HIPAA-Compliant Care in California
              </h3>
              <p className="text-slate-700 leading-relaxed">
                We are committed to protecting patient privacy and
                confidentiality in compliance with HIPAA and California privacy
                laws. All medical records, telehealth visits, and communications
                are handled securely and responsibly.
              </p>
            </div>

            <div className="bg-linear-to-br from-slate-50 to-primary/5 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">
                  Serving Our Community with Integrity
                </h2>
              </div>
              <p className="text-slate-700 leading-relaxed mb-6">
                Serene Urgent Care & Mind Clinic is proud to serve the community
                with transparency, respect, and compassion. Our goal is to
                provide reliable healthcare you can trust, when you need it
                most.
              </p>
              <div className="bg-white rounded-lg p-4 border-l-4 border-primary">
                <p className="text-slate-700 font-medium">
                  We&apos;re here to support your health journey with integrity
                  and care at every step.
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
            Experience Care That Puts You First
          </h2>
          <p className="text-xl mb-8">
            Visit us today and discover the difference of integrated,
            compassionate healthcare
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#book"
              className="inline-flex items-center justify-center px-8 py-4 bg-background hover:bg-text font-semibold rounded-lg hover:text-background transition shadow-lg"
            >
              <Target className="w-5 h-5 mr-2" />
              Book Appointment
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 bg-text text-white font-semibold rounded-lg hover:bg-background transition hover:text-text"
            >
              <Activity className="w-5 h-5 mr-2" />
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
