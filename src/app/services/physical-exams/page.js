import { ClipboardCheck, Heart, Users, Briefcase, Plane, Award, CheckCircle, Calendar, Phone, Sparkles, Clock, Shield } from 'lucide-react';
import Link from 'next/link';

export default function PhysicalExamsPage() {
  const examTypes = [
    {
      icon: Heart,
      title: "Routine Wellness Physicals",
      description: "Complete health evaluations to monitor your overall well-being and detect early signs of illness",
      color: "from-teal-500 to-emerald-500"
    },
    {
      icon: Award,
      title: "School & Sports Physicals",
      description: "Quick and convenient exams required for school enrollment and athletic participation",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Briefcase,
      title: "Employment & Pre-Employment Physicals",
      description: "Assessments required by employers to ensure you're fit for duty",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: ClipboardCheck,
      title: "Annual Physicals",
      description: "Yearly checkups to track vital health metrics, update vaccinations, and maintain optimal wellness",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Briefcase,
      title: "DOT/Work Clearance Physicals",
      description: "Comprehensive exams for commercial drivers and job-specific requirements",
      color: "from-rose-500 to-pink-500"
    },
    {
      icon: Plane,
      title: "Travel Physicals",
      description: "Health assessments and vaccination guidance for upcoming trips",
      color: "from-sky-500 to-cyan-500"
    }
  ];

  const included = [
    "Vital signs check (blood pressure, temperature, pulse)",
    "Vision screening (when required)",
    "Heart & lung evaluation",
    "Musculoskeletal exam",
    "Review of medical history",
    "Required forms completed on the spot",
    "Provider recommendations and follow-up plan"
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Walk-in or Same-Day Appointments",
      description: "No need to wait weeks for an appointment"
    },
    {
      icon: CheckCircle,
      title: "Fast Turnaround Times",
      description: "On-site paperwork completion and quick processing"
    },
    {
      icon: Shield,
      title: "Affordable Pricing",
      description: "Transparent costs, including options for uninsured patients"
    },
    {
      icon: Users,
      title: "Licensed Providers",
      description: "Thorough, compassionate care from experienced professionals"
    }
  ];

  return (
    <div className="">
      
      {/* Hero Section */}
      <div className="relative bg-linear-to-br from-primary/10 via-background to-primary/20 py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/40 rounded-full opacity-20 blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Comprehensive Health Assessments</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text mb-6">
              Physical Exams for <span className="text-primary">Every Need</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-6 md:mb-8 leading-relaxed">
              At Serene Urgent Care & Mind Clinic, we provide comprehensive, timely, and affordable physical examinations for patients of all ages. Whether you need a routine checkup or a specialized exam for work, school, sports, or immigration, our providers ensure a smooth and professional experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#book" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary-hover transition shadow-lg">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Your Physical
              </Link>
              <Link href="#walkin" className="inline-flex items-center justify-center px-8 py-4 bg-background text-primary font-semibold rounded-lg border-2 border-primary hover:bg-primary/10 transition">
                <Clock className="w-5 h-5 mr-2" />
                Walk-In Welcome
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Exam Types Section */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">
              Types of Physical Exams We Offer
            </h2>
            <p className="text-lg text-slate-600">
              Specialized exams tailored to your specific needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {examTypes.map((exam, index) => (
              <div key={index} className="bg-background rounded-xl p-6 border border-slate-200 hover:shadow-xl transition-all group">
                <div className={`w-14 h-14 bg-linear-to-br ${exam.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <exam.icon className="w-7 h-7 text-background" />
                </div>
                <h3 className="text-xl font-bold text-text mb-3">{exam.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{exam.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What's Included Section */}
      <div className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <h2 className="text-3xl font-bold text-text mb-6">
                What&apos;s Included in Your Physical Exam
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Our comprehensive physical examinations cover all essential health assessments to ensure you&apos;re cleared and ready for whatever comes next.
              </p>
              <div className="space-y-3">
                {included.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-primary/10 rounded-lg p-4">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary rounded-2xl p-8 lg:p-12 text-background">
              <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <Clock className="w-6 h-6" />
                    <h4 className="font-semibold text-lg">Exam Duration</h4>
                  </div>
                  <p className="text-backgorund ml-9">Most physicals take 15-30 minutes</p>
                </div>
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <ClipboardCheck className="w-6 h-6" />
                    <h4 className="font-semibold text-lg">Forms & Documentation</h4>
                  </div>
                  <p className="text-backgorund ml-9">Completed and signed on the spot</p>
                </div>
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <Users className="w-6 h-6" />
                    <h4 className="font-semibold text-lg">All Ages Welcome</h4>
                  </div>
                  <p className="text-backgorund ml-9">Children, teens, adults, and seniors</p>
                </div>
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <Shield className="w-6 h-6" />
                    <h4 className="font-semibold text-lg">Insurance Accepted</h4>
                  </div>
                  <p className="text-backgorund ml-9">Most major plans, Medicare, and Medi-Cal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text text-center mb-12">
            Why Patients Choose Us for Physicals
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-background rounded-xl p-6 border border-slate-200 hover:border-primary/30 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-text mb-2">{benefit.title}</h3>
                <p className="text-slate-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-background rounded-2xl p-8 border border-slate-200 text-center max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-text mb-4">
              Clean, Modern Facility
            </h3>
            <p className="text-slate-600">
              Our clinic is designed for comfort and privacy, with a calm, professional environment that puts you at ease. We maintain the highest standards of cleanliness and patient care.
            </p>
          </div>
        </div>
      </div>

      {/* What to Bring Section */}
      <div className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text text-center mb-8">
            What to Bring to Your Appointment
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-primary/10 border border-border rounded-xl p-6">
              <h3 className="font-bold text-text mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-2" />
                Required Items
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Valid photo ID</li>
                <li>• Insurance card (if applicable)</li>
                <li>• Physical exam form (if provided by employer/school)</li>
                <li>• List of current medications</li>
                <li>• Immunization records (if available)</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="font-bold text-text mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                Helpful Tips
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Arrive 10 minutes early for paperwork</li>
                <li>• Wear comfortable, easy-to-remove clothing</li>
                <li>• Bring glasses or contacts if you need vision screening</li>
                <li>• Have questions ready for your provider</li>
                <li>• Bring payment method for any copays</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text text-center mb-12">
            Your Physical Exam Process
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-bold text-text mb-2">Check-In</h3>
              <p className="text-sm text-slate-600">Complete brief registration and present required forms</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-bold text-text mb-2">Health Review</h3>
              <p className="text-sm text-slate-600">Discuss medical history and current health status</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-bold text-text mb-2">Physical Exam</h3>
              <p className="text-sm text-slate-600">Comprehensive assessment by licensed provider</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-bold text-text mb-2">Clearance</h3>
              <p className="text-sm text-slate-600">Forms completed and signed—you&apos;re all set!</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-third">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-text">
            Get Your Physical Exam Today
          </h2>
          <p className="text-xl text-backgorund mb-8">
            Whether it&apos;s for school, work, sports, or simply staying on top of your health, we make your physical exam fast, easy, and stress-free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#book" className="inline-flex items-center justify-center px-8 py-4 bg-background text-primary font-semibold rounded-lg hover:bg-teal-50 transition shadow-lg">
              <Calendar className="w-5 h-5 mr-2" />
              Book Your Physical
            </Link>
            <Link href="tel:+3104314558" className="inline-flex items-center justify-center px-8 py-4 bg-teal-700 text-background font-semibold rounded-lg hover:bg-teal-800 transition border-2 border-white">
              <Phone className="w-5 h-5 mr-2" />
              Call to Schedule
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}