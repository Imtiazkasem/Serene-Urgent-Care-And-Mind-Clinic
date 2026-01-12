import {
  Microscope,
  Clock,
  ShieldCheck,
  Calendar,
  CheckCircle,
  AlertCircle,
  Phone,
  Sparkles,
  DollarSign,
} from "lucide-react";
import Link from "next/link";

export default function FluCovidTestingPage() {
  const testTypes = [
    {
      icon: Microscope,
      title: "Rapid COVID-19 Antigen Tests",
      description: "Results in minutes",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: ShieldCheck,
      title: "PCR COVID-19 Tests",
      description: "Highly accurate lab-based results",
      color: "bg-third/10 text-third",
    },
    {
      icon: Microscope,
      title: "Rapid Flu A & B Tests",
      description: "Quick detection to start treatment early",
      color: "bg-purple-100 text-purple-600",
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Walk-in & Same-Day Appointments",
      description: "No long waits – get tested when you need it",
    },
    {
      icon: ShieldCheck,
      title: "Experienced Providers",
      description: "Ensuring you receive the right care based on your symptoms",
    },
    {
      icon: DollarSign,
      title: "Affordable, Transparent Pricing",
      description: "For uninsured patients and those paying out of pocket",
    },
  ];

  const reasons = [
    "Experiencing symptoms (fever, cough, body aches, fatigue)",
    "Workplace or school clearance requirements",
    "Travel documentation and requirements",
    "Exposure to someone with Flu or COVID-19",
    "Peace of mind and early detection",
    "Pre-surgical or medical procedure clearance",
  ];

  const symptoms = [
    { name: "Fever or chills", both: true },
    { name: "Cough", both: true },
    { name: "Fatigue", both: true },
    { name: "Body aches", both: true },
    { name: "Headache", both: true },
    { name: "Sore throat", both: true },
    { name: "Shortness of breath", covid: true },
    { name: "Loss of taste or smell", covid: true },
  ];

  return (
    <div className=" bg-background">
      {/* Hero Section */}
      <div className="relative bg-linear-to-br from-primary/10 via-background to-primary/10 py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/50 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Fast & Accurate Testing</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text mb-6">
              Flu & COVID-19{" "}
              <span className="text-primary">Testing Services</span>
            </h1>

            <p className=" text-lg md:text-xl text-slate-600 mb-6 md:mb-8 leading-relaxed">
              At Serene Urgent Care & Mind Clinic, we provide fast, accurate,
              and convenient Flu and COVID-19 testing for patients of all ages.
              Whether you need testing for symptoms, workplace or school
              clearance, travel requirements, or simple peace of mind, our
              medical team is here to help.
            </p>

            <p className="text-base md:text-lg text-slate-600 mb-6  md:mb-8">
              Our goal is to provide timely diagnosis, compassionate care, and
              proper guidance, so you can return to your daily life quickly and
              safely.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#book"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary-hover transition shadow-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Testing Appointment
              </Link>
              <Link
                href="#walkin"
                className="inline-flex items-center justify-center px-8 py-4 bg-background text-primary font-semibold rounded-lg border-2 border-primary hover:bg-primary/10 transition"
              >
                <Clock className="w-5 h-5 mr-2" />
                Walk-In Welcome
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Test Types Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">
              Testing Options Available
            </h2>
            <p className="text-lg text-slate-600">
              Choose the test that&apos;s right for your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testTypes.map((test, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-slate-200 hover:border-primary/20 hover:shadow-lg transition-all text-center"
              >
                <div
                  className={`w-16 h-16 ${test.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
                >
                  <test.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-text mb-2">
                  {test.title}
                </h3>
                <p className="text-slate-600">{test.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Get Tested Section */}
      <div className="py-16 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">
              When Should You Get Tested?
            </h2>
            <p className="text-lg text-slate-600">
              Testing is recommended for various situations
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-primary/5 rounded-lg p-4 hover:bg-primary/10 transition-colors"
              >
                <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                <span className="text-slate-700">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Symptoms Section */}
      <div className="py-16 bg-linear-to-br from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-text mb-6">
                Common Symptoms
              </h2>
              <p className="text-base md:text-lg text-slate-600 mb-6">
                If you&apos;re experiencing any of these symptoms, testing can
                help determine if you have Flu or COVID-19:
              </p>
              <div className="space-y-3">
                {symptoms.map((symptom, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 bg-background rounded-lg p-4 border border-slate-200"
                  >
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <div className="flex-1">
                      <span className="text-text">{symptom.name}</span>
                      {symptom.covid && (
                        <span className="ml-2 text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                          COVID-specific
                        </span>
                      )}
                      {symptom.both && (
                        <span className="ml-2 text-xs bg-third/10 text-third px-3 py-1 rounded-full">
                          Both
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center shrink-0">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text mb-2">
                    When to Seek Emergency Care
                  </h3>
                  <p className="text-sm text-slate-600">
                    Call 911 or go to the ER if you experience:
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 shrink-0"></div>
                  <span className="text-slate-700">
                    Difficulty breathing or shortness of breath
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 shrink-0"></div>
                  <span className="text-slate-700">
                    Persistent chest pain or pressure
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 shrink-0"></div>
                  <span className="text-slate-700">
                    Confusion or inability to stay awake
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 shrink-0"></div>
                  <span className="text-slate-700">Bluish lips or face</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text text-center mb-12">
            Why Choose Serene for Testing
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-primary/10 rounded-xl p-6  transition-colors"
              >
                <div className="w-12 h-12 bg-background rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-text mb-2">
                  {benefit.title}
                </h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What to Expect Section */}
      <div className="py-16 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text text-center mb-12">
            What to Expect During Your Visit
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold text-text mb-2">Check-In</h3>
              <p className="text-sm text-slate-600">
                Quick registration process with minimal paperwork
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold text-text mb-2">Assessment</h3>
              <p className="text-sm text-slate-600">
                Brief evaluation of symptoms and testing needs
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold text-text mb-2">Testing</h3>
              <p className="text-sm text-slate-600">
                Quick nasal swab test performed by trained staff
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-bold text-text mb-2">Results & Care</h3>
              <p className="text-sm text-slate-600">
                Receive results and treatment recommendations
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-linear-to-br from-primary/5 to-background rounded-2xl p-8 border border-slate-200 hover:border-primary/20">
            <DollarSign className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-text mb-4">
              Transparent Pricing
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              We accept most major insurance plans, including Medicare and
              Medi-Cal. For uninsured patients, we offer affordable self-pay
              rates with upfront pricing—no surprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#insurance"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-background font-semibold rounded-lg hover:bg-primary-hover transition"
              >
                Check Insurance Coverage
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center px-8 py-3 bg-background text-primary font-semibold rounded-lg border-2 border-primary hover:bg-primary transition hover:text-background"
              >
                View Self-Pay Rates
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-third">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
            Get Tested Today
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Walk-in or book an appointment for fast, accurate Flu & COVID-19
            testing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#book"
              className="inline-flex items-center justify-center px-8 py-4 bg-background text-text font-semibold rounded-lg  transition shadow-lg"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Appointment
            </Link>
            <Link
              href="tel:+3104314558"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-background font-semibold rounded-lg  transition border-2 border-background"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
