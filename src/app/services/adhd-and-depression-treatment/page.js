import {
  Brain,
  Heart,
  ClipboardList,
  CheckCircle,
  Calendar,
  Phone,
  Sparkles,
  Shield,
  Users,
  Clock,
} from "lucide-react";
import Link from "next/link";

export default function ADHDDepressionPage() {
  const adhdServices = [
    {
      icon: ClipboardList,
      title: "Diagnostic Assessment",
      description:
        "Thorough clinical evaluation, symptom screening, and history review",
    },
    {
      icon: Heart,
      title: "Medication Management",
      description:
        "Safe and effective treatment options tailored to focus, attention, and impulse control",
    },
    {
      icon: Brain,
      title: "Behavioral & Lifestyle Guidance",
      description:
        "Tools and strategies to improve productivity, organization, and daily functioning",
    },
    {
      icon: CheckCircle,
      title: "Follow-up Care",
      description:
        "Regular check-ins to ensure symptom improvement and medication effectiveness",
    },
  ];

  const depressionServices = [
    {
      icon: ClipboardList,
      title: "Clinical Evaluation & Diagnosis",
      description:
        "A supportive environment to understand your symptoms, mood changes, and triggers",
    },
    {
      icon: Heart,
      title: "Medication Management",
      description:
        "Modern, evidence-based antidepressant therapies adjusted to your needs",
    },
    {
      icon: Users,
      title: "Mental Health Support & Counseling Referrals",
      description:
        "Guidance, coping strategies, and connections to additional therapeutic resources",
    },
    {
      icon: CheckCircle,
      title: "Monitoring & Follow-Up",
      description: "Ongoing care to help stabilize mood and prevent relapses",
    },
  ];

  const benefits = [
    "Experienced mental health providers focused on compassionate, judgment-free care",
    "Confidential, private, and patient-centered approach",
    "Medication management with careful monitoring",
    "Walk-in or same-day appointments available",
    "Affordable options for uninsured or self-pay patients",
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <div className="relative bg-linear-to-br from-primary/10 via-background to-primary/10 py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/10 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Evidence-Based Mental Health Care</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text mb-6">
              ADHD & Depression <span className="text-primary">Treatment</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              At Serene Urgent Care & Mind Clinic, we provide compassionate,
              evidence-based care for individuals struggling with ADHD and
              Depression. Our providers focus on accurate diagnosis,
              personalized treatment plans, and ongoing support—helping patients
              regain balance, clarity, and control of their lives.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#book"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary-hover transition shadow-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Evaluation
              </Link>
              <Link
                href="tel:+3104314558"
                className="inline-flex items-center justify-center px-8 py-4 bg-background text-primary font-semibold rounded-lg border-2 border-primary hover:bg-primary/10 transition"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call for Support
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ADHD Treatment Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">
              ADHD Evaluation & Treatment
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We offer comprehensive evaluation and management for
              Attention-Deficit/Hyperactivity Disorder (ADHD) in adults and
              adolescents.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {adhdServices.map((service, index) => (
              <div
                key={index}
                className="bg-primary/10 rounded-xl p-6 border border-slate-200 hover:border-border hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-background rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-text mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Depression Treatment Section */}
      <div className="py-16 bg-third/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">
              Depression Treatment
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Depression is treatable, and early care makes a significant
              difference. Our clinic provides comprehensive support to help you
              feel better.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {depressionServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-border hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-text mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text text-center mb-12">
            Why Choose Us?
          </h2>

          <div className="max-w-4xl mx-auto space-y-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 bg-primary/10 rounded-lg p-6 border border-border"
              >
                <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <span className="text-slate-700 text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Treatment Approach Section */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-text mb-6">
                Our Comprehensive Approach
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-text mb-1">
                      Accurate Diagnosis
                    </h3>
                    <p className="text-slate-600">
                      Thorough assessments to understand your unique symptoms
                      and challenges
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-text mb-1">
                      Personalized Treatment
                    </h3>
                    <p className="text-slate-600">
                      Customized plans that address your specific needs and
                      lifestyle
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-text mb-1">
                      Ongoing Support
                    </h3>
                    <p className="text-slate-600">
                      Regular follow-ups to monitor progress and adjust
                      treatment as needed
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-text mb-1">Holistic Care</h3>
                    <p className="text-slate-600">
                      Combining medication, lifestyle guidance, and therapeutic
                      support
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary rounded-2xl p-8 lg:p-12 text-background">
              <h3 className="text-2xl font-bold mb-6">What to Expect</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    Initial Consultation
                  </h4>
                  <p className="text-background">
                    Confidential discussion of symptoms, history, and treatment
                    goals
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    Comprehensive Assessment
                  </h4>
                  <p className="text-background">
                    Clinical evaluation and diagnostic screening tools
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Treatment Plan</h4>
                  <p className="text-background">
                    Personalized approach with medication options and lifestyle
                    strategies
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Follow-Up Care</h4>
                  <p className="text-background">
                    Regular check-ins to ensure effectiveness and make
                    adjustments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Confidentiality Notice */}
      <div className="py-12 bg-primary/10 border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start space-x-4">
            <div className="shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-background" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-text mb-2">
                Your Privacy Matters
              </h3>
              <p className="text-slate-700">
                All mental health services are 100% confidential and
                HIPAA-compliant. We provide a safe, judgment-free environment
                where you can openly discuss your concerns and receive the care
                you deserve.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-third">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-text">
          <h2 className="text-3xl sm:text-4xl font-bold  mb-4 text-text">
            Your Mental Health Matters
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Whether you are experiencing symptoms of ADHD, struggling with low
            mood, or unsure where to begin, Serene Urgent Care & Mind Clinic is
            here to help you feel better and live better.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#book"
              className="inline-flex items-center justify-center px-8 py-4 bg-background text-text font-semibold rounded-lg transition shadow-lg"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Your Evaluation
            </Link>
            <Link
              href="tel:+3104314558"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-background font-semibold rounded-lg  transition border-2 border-background"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
