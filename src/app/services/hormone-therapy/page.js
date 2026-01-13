import { Activity, Heart, Users, CheckCircle, Calendar, Phone, Sparkles, Shield, TrendingUp, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function HormoneTherapyPage() {
  const services = [
    {
      icon: Activity,
      title: "Comprehensive Hormone Evaluation",
      description: "Detailed lab testing and assessment to understand your hormone levels and identify underlying imbalances"
    },
    {
      icon: Heart,
      title: "Bioidentical Hormone Replacement Therapy (BHRT)",
      description: "Plant-derived, body-identical hormones designed for safe, effective rebalancing"
    },
    {
      icon: Users,
      title: "Men's Hormone Therapy",
      description: "Testosterone optimization, energy improvement, mood stabilization, and metabolic support"
    },
    {
      icon: Heart,
      title: "Women's Hormone Therapy",
      description: "Treatment for perimenopause, menopause, PMS/PMDD, mood swings, fatigue, and low libido"
    },
    {
      icon: TrendingUp,
      title: "Personalized Treatment Plans",
      description: "Dosing customized to your body's needs, goals, and health conditions"
    },
    {
      icon: CheckCircle,
      title: "Ongoing Monitoring & Adjustments",
      description: "Regular follow-ups to ensure optimal results, safety, and symptom improvement"
    }
  ];

  const symptoms = [
    "Fatigue or low energy",
    "Weight gain or difficulty losing weight",
    "Low libido",
    "Mood swings, irritability, or depression",
    "Poor sleep",
    "Brain fog or difficulty concentrating",
    "Hot flashes or night sweats (women)",
    "Reduced muscle mass or endurance (men)"
  ];

  const benefits = [
    "Experienced hormone therapy specialists",
    "Safe, medically supervised programs",
    "Modern lab testing and comprehensive evaluations",
    "Private, compassionate, judgment-free environment",
    "Affordable options for uninsured or self-pay patients"
  ];

  return (
    <div className="">
      
      {/* Hero Section */}
      <div className="relative bg-linear-to-br from-secondary/10 via-background to-primary/10 py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/20 rounded-full opacity-20 blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Personalized Hormone Optimization</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text mb-6">
              Hormone Therapy for <span className="text-primary">Optimal Wellness</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              At Serene Urgent Care & Mind Clinic, we offer personalized, evidence-based hormone therapy designed to restore balance, boost energy, and improve overall wellness. Hormonal imbalances can affect mood, sleep, weight, focus, libido, and long-term health.
            </p>

            <p className="text-lg text-slate-600 mb-8">
              Our providers take a comprehensive, scientific approach to diagnosing and treating these changes—helping you feel like yourself again.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#book" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary-hover transition shadow-lg">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Link>
              <Link href="tel:+3104314558" className="inline-flex items-center justify-center px-8 py-4 bg-background text-primary font-semibold rounded-lg border-2 border-primary hover:bg-primary/10 transition">
                <Phone className="w-5 h-5 mr-2" />
                Call to Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">
              Our Hormone Therapy Services
            </h2>
            <p className="text-lg text-slate-600">
              Comprehensive care tailored to your unique hormonal needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-background rounded-xl p-6 border border-slate-200 hover:border-border hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-text mb-2">{service.title}</h3>
                <p className="text-sm text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Symptoms Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">
              Common Symptoms Hormone Therapy Can Help
            </h2>
            <p className="text-lg text-slate-600">
              Are you experiencing any of these symptoms? Hormone therapy may be the solution.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {symptoms.map((symptom, index) => (
              <div key={index} className="flex items-center space-x-3 bg-primary/5 rounded-lg p-4 hover:bg-primary/10 transition-colors">
                <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                <span className="text-slate-700">{symptom}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Men's & Women's Therapy Section */}
      <div className="py-16 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Men's Therapy */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-third/10 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-third" />
                </div>
                <h3 className="text-2xl font-bold text-text">Men&apos;s Hormone Therapy</h3>
              </div>
              <p className="text-slate-600 mb-6">
                Testosterone optimization and comprehensive support for men experiencing age-related hormonal changes.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-third shrink-0 mt-0.5" />
                  <span className="text-slate-700">Improved energy and vitality</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-third shrink-0 mt-0.5" />
                  <span className="text-slate-700">Enhanced muscle mass and strength</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-third shrink-0 mt-0.5" />
                  <span className="text-slate-700">Better mood and mental clarity</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-third shrink-0 mt-0.5" />
                  <span className="text-slate-700">Improved libido and sexual function</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-third shrink-0 mt-0.5" />
                  <span className="text-slate-700">Metabolic optimization and weight management</span>
                </li>
              </ul>
            </div>

            {/* Women's Therapy */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-text">Women&apos;s Hormone Therapy</h3>
              </div>
              <p className="text-slate-600 mb-6">
                Comprehensive treatment for perimenopause, menopause, and hormonal imbalances affecting quality of life.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-slate-700">Relief from hot flashes and night sweats</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-slate-700">Improved mood and emotional balance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-slate-700">Better sleep quality</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-slate-700">Enhanced energy and reduced fatigue</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-slate-700">Restored libido and sexual wellness</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text text-center mb-12">
            Why Choose Serene Urgent Care & Mind Clinic?
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 bg-primary/5 rounded-lg p-6 border border-border">
                <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <span className="text-slate-700 text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Treatment Process Section */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text text-center mb-12">
            Your Hormone Therapy Journey
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-bold text-text mb-2">Initial Consultation</h3>
              <p className="text-sm text-slate-600">Discuss symptoms, health history, and treatment goals</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-bold text-text mb-2">Comprehensive Testing</h3>
              <p className="text-sm text-slate-600">Lab work to measure hormone levels and identify imbalances</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-bold text-text mb-2">Personalized Plan</h3>
              <p className="text-sm text-slate-600">Custom treatment protocol based on your results</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-bold text-text mb-2">Ongoing Monitoring</h3>
              <p className="text-sm text-slate-600">Regular follow-ups to optimize results and adjust as needed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Safety Notice */}
      <div className="py-12 bg-primary/5 border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start space-x-4">
            <div className="shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-background" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-text mb-2">Safe & Medically Supervised</h3>
              <p className="text-slate-700">
                All hormone therapy programs are carefully monitored by experienced medical providers. We use modern lab testing, evidence-based protocols, and regular follow-ups to ensure your safety and optimal results.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-third">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
            Start Your Wellness Journey
          </h2>
          <p className="text-lg md:text-xl text-text/90 mb-8">
            Hormone therapy can significantly improve quality of life. Whether you&apos;re experiencing age-related changes, mood shifts, or persistent fatigue, our team is here to help you regain balance and vitality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#book" className="inline-flex items-center justify-center px-8 py-4 bg-background text-text font-semibold rounded-lg  transition shadow-lg">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Your Consultation
            </Link>
            <Link href="tel:+3104314558" className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-background font-semibold rounded-lg  transition border-2 border-background">
              <Phone className="w-5 h-5 mr-2" />
              Call Us Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}