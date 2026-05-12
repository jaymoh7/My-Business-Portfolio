import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  MapPin,
  Globe,
  Briefcase,
  Target,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  MessageCircle,
  ArrowLeft,
  Loader2,
  Mail,
  User,
  Phone,
} from 'lucide-react';
import { buildWaLink } from '@/components/portfolio/constants';
import WhatsAppFloat from '@/components/portfolio/WhatsAppFloat';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
const AUDIT_API_ENDPOINT = `${API_URL}/api/forms/audit`;

const industries = [
  'Restaurant',
  'Clinic',
  'Pharmacy',
  'Agrovet',
  'Salon',
  'Gym',
  'Electronics Shop',
  'Startup',
  'Other',
];

const goalsOptions = [
  'Get more local customers',
  'Improve Google Maps ranking',
  'Get more phone calls',
  'Get more website visits',
  'Build trust with reviews',
  'Improve online photos & branding',
  'Stand out from competitors',
  'Set up a complete digital presence',
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  location: string;
  listingUrl: string;
  industry: string;
  customIndustry: string;
  goals: string[];
  notes: string;
};

const initial: FormState = {
  name: '',
  email: '',
  phone: '',
  businessName: '',
  location: '',
  listingUrl: '',
  industry: '',
  customIndustry: '',
  goals: [],
  notes: '',
};

const steps = [
  { num: 1, title: 'About You', icon: User },
  { num: 2, title: 'Business Details', icon: Building2 },
  { num: 3, title: 'Industry', icon: Briefcase },
  { num: 4, title: 'Goals', icon: Target },
];

const Audit: React.FC = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(initial);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const update = (k: keyof FormState, v: string | string[]) => setForm({ ...form, [k]: v });

  const toggleGoal = (g: string) => {
    setForm({
      ...form,
      goals: form.goals.includes(g) ? form.goals.filter((x) => x !== g) : [...form.goals, g],
    });
  };

  const validateStep = (): string => {
    if (step === 1) {
      if (!form.name.trim()) return 'Please enter your name.';
      if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) return 'Please enter a valid email.';
    }
    if (step === 2) {
      if (!form.businessName.trim()) return 'Please enter your business name.';
      if (!form.location.trim()) return 'Please enter your business location.';
    }
    if (step === 3) {
      if (!form.industry) return 'Please select an industry.';
      if (form.industry === 'Other' && !form.customIndustry.trim()) return 'Please specify your industry.';
    }
    if (step === 4) {
      if (form.goals.length === 0) return 'Please select at least one goal.';
    }
    return '';
  };

  const next = () => {
    const err = validateStep();
    if (err) {
      setError(err);
      return;
    }
    setError('');
    setStep((s) => Math.min(s + 1, steps.length));
  };

  const back = () => {
    setError('');
    setStep((s) => Math.max(s - 1, 1));
  };

  const submit = async () => {
    const err = validateStep();
    if (err) {
      setError(err);
      return;
    }
    setError('');
    setSubmitting(true);

    const industryFinal = form.industry === 'Other' ? form.customIndustry : form.industry;

    try {
      const response = await fetch(AUDIT_API_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          businessName: form.businessName,
          location: form.location,
          listingUrl: form.listingUrl,
          industry: form.industry === 'Other' ? 'Other' : form.industry,
          customIndustry: form.customIndustry,
          goals: form.goals,
          notes: form.notes,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Something went wrong. Please try WhatsApp instead.');
        setSubmitting(false);
        return;
      }

      setSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
      setError('Something went wrong. Please try WhatsApp instead.');
    } finally {
      setSubmitting(false);
    }
  };

  const buildWaMessage = () => {
    const industryFinal = form.industry === 'Other' ? form.customIndustry : form.industry;
    return `Hi James! I just submitted a free GBP audit request.

Name: ${form.name}
Business: ${form.businessName}
Location: ${form.location}
Industry: ${industryFinal}
Goals: ${form.goals.join(', ')}

Looking forward to your audit!`;
  };

  // CONFIRMATION SCREEN
  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/40 to-slate-950 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to home
          </Link>

          <div className="bg-slate-900/60 backdrop-blur-sm border border-blue-500/30 rounded-3xl p-8 md:p-12 text-center shadow-2xl shadow-blue-500/10">
            <div className="inline-flex w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 items-center justify-center mb-6 shadow-2xl shadow-green-500/40 animate-[pop_0.5s_ease-out]">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Audit Request Received!
            </h1>
            <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
              Thanks <span className="text-blue-400 font-semibold">{form.name}</span> — I've received your details for{' '}
              <span className="text-blue-400 font-semibold">{form.businessName}</span>. You'll get your personalized
              free audit soon.
            </p>

            <div className="bg-blue-950/40 border border-blue-500/30 rounded-2xl p-6 mb-8 text-left">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-blue-500 flex items-center justify-center text-xs font-bold">
                  i
                </span>
                What Happens Next
              </h3>
              <ol className="space-y-3 text-slate-300 text-sm">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-300 text-xs font-bold flex-shrink-0">
                    1
                  </span>
                  <span>I'll review your Google Business Profile and digital presence within 24 hours.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-300 text-xs font-bold flex-shrink-0">
                    2
                  </span>
                  <span>You'll receive a free PDF audit report with actionable improvements.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-300 text-xs font-bold flex-shrink-0">
                    3
                  </span>
                  <span>We'll have a quick chat (free) to discuss the next steps for your business growth.</span>
                </li>
              </ol>
            </div>

            <p className="text-slate-400 text-sm mb-5">
              Want a faster response? Send me a quick message on WhatsApp now.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={buildWaLink(buildWaMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white px-7 py-4 rounded-xl font-semibold shadow-lg shadow-green-500/30 transition-all hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 border border-blue-500/30 text-white px-7 py-4 rounded-xl font-semibold transition-all hover:scale-105"
              >
                Return Home
              </Link>
            </div>
          </div>
        </div>

        <WhatsAppFloat />

        <style>{`
          @keyframes pop {
            0% { transform: scale(0); }
            70% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
        `}</style>
      </div>
    );
  }

  // FORM SCREEN
  const progress = (step / steps.length) * 100;

  return (
    <div className="min-h-screen bg-slate-950 text-white relative">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/40 to-slate-950 pointer-events-none"></div>
      <div className="absolute top-0 -left-32 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 text-sm mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>

        {/* Header */}
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Free Audit
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
            Free Google Business Profile Audit
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-xl mx-auto">
            Tell me about your business in 4 quick steps. I'll send you a personalized improvement plan within 24 hours.
          </p>
        </div>

        {/* Stepper */}
        <div className="mb-8">
          <div className="flex justify-between mb-3">
            {steps.map((s) => (
              <div
                key={s.num}
                className={`flex flex-col items-center flex-1 ${step >= s.num ? 'text-blue-400' : 'text-slate-500'}`}
              >
                <div
                  className={`w-9 h-9 md:w-10 md:h-10 rounded-full border-2 flex items-center justify-center mb-1.5 transition-all ${step > s.num
                      ? 'bg-gradient-to-br from-blue-500 to-cyan-400 border-blue-400 text-white shadow-lg shadow-blue-500/30'
                      : step === s.num
                        ? 'border-blue-500 bg-blue-500/20 text-blue-300'
                        : 'border-slate-700 bg-slate-900 text-slate-500'
                    }`}
                >
                  {step > s.num ? <CheckCircle2 className="w-4 h-4" /> : <s.icon className="w-4 h-4" />}
                </div>
                <span className="text-[10px] md:text-xs font-medium hidden sm:block">{s.title}</span>
              </div>
            ))}
          </div>
          <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Card */}
        <div className="bg-slate-900/60 backdrop-blur-sm border border-blue-900/40 rounded-2xl p-6 md:p-8 shadow-xl">
          {/* Step 1: About You */}
          {step === 1 && (
            <div className="space-y-5 animate-[fadeIn_0.4s_ease-out]">
              <h2 className="text-2xl font-bold text-white mb-1">About You</h2>
              <p className="text-slate-400 text-sm mb-5">So I know how to reach you with your audit results.</p>

              <div>
                <label className="block text-sm text-slate-300 mb-2 flex items-center gap-2">
                  <User className="w-4 h-4 text-blue-400" /> Full Name *
                </label>
                <input
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  placeholder="e.g. Jane Wanjiku"
                  className="w-full bg-slate-950 border border-blue-900/40 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-2 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-400" /> Email Address *
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  placeholder="you@example.com"
                  className="w-full bg-slate-950 border border-blue-900/40 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-2 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-400" /> Phone / WhatsApp <span className="text-slate-500 text-xs">(optional)</span>
                </label>
                <input
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  placeholder="+254 7XX XXX XXX"
                  className="w-full bg-slate-950 border border-blue-900/40 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
            </div>
          )}

          {/* Step 2: Business Details */}
          {step === 2 && (
            <div className="space-y-5 animate-[fadeIn_0.4s_ease-out]">
              <h2 className="text-2xl font-bold text-white mb-1">Business Details</h2>
              <p className="text-slate-400 text-sm mb-5">Tell me about your business so I can audit it accurately.</p>

              <div>
                <label className="block text-sm text-slate-300 mb-2 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-blue-400" /> Business Name *
                </label>
                <input
                  value={form.businessName}
                  onChange={(e) => update('businessName', e.target.value)}
                  placeholder="e.g. Bella Salon"
                  className="w-full bg-slate-950 border border-blue-900/40 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-400" /> Business Location *
                </label>
                <input
                  value={form.location}
                  onChange={(e) => update('location', e.target.value)}
                  placeholder="e.g. Westlands, Nairobi"
                  className="w-full bg-slate-950 border border-blue-900/40 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-2 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-blue-400" /> Current Google Listing URL <span className="text-slate-500 text-xs">(optional)</span>
                </label>
                <input
                  value={form.listingUrl}
                  onChange={(e) => update('listingUrl', e.target.value)}
                  placeholder="https://maps.app.goo.gl/..."
                  className="w-full bg-slate-950 border border-blue-900/40 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
                />
                <p className="text-xs text-slate-500 mt-2">
                  Don't have one yet? No problem — I can help you set it up from scratch.
                </p>
              </div>
            </div>
          )}

          {/* Step 3: Industry */}
          {step === 3 && (
            <div className="space-y-5 animate-[fadeIn_0.4s_ease-out]">
              <h2 className="text-2xl font-bold text-white mb-1">Your Industry</h2>
              <p className="text-slate-400 text-sm mb-5">Pick the category that best describes your business.</p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {industries.map((ind) => (
                  <button
                    key={ind}
                    type="button"
                    onClick={() => update('industry', ind)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all border ${form.industry === ind
                        ? 'bg-gradient-to-br from-blue-600 to-cyan-500 border-blue-400 text-white shadow-lg shadow-blue-500/30 scale-[1.02]'
                        : 'bg-slate-950 border-blue-900/40 text-slate-300 hover:border-blue-500/50 hover:text-white'
                      }`}
                  >
                    {ind}
                  </button>
                ))}
              </div>

              {form.industry === 'Other' && (
                <div className="animate-[fadeIn_0.3s_ease-out]">
                  <label className="block text-sm text-slate-300 mb-2">Specify your industry *</label>
                  <input
                    value={form.customIndustry}
                    onChange={(e) => update('customIndustry', e.target.value)}
                    placeholder="e.g. Photography studio"
                    className="w-full bg-slate-950 border border-blue-900/40 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>
              )}
            </div>
          )}

          {/* Step 4: Goals */}
          {step === 4 && (
            <div className="space-y-5 animate-[fadeIn_0.4s_ease-out]">
              <h2 className="text-2xl font-bold text-white mb-1">Your Main Goals</h2>
              <p className="text-slate-400 text-sm mb-5">
                Select all that apply — this helps me tailor your audit recommendations.
              </p>

              <div className="grid sm:grid-cols-2 gap-2.5">
                {goalsOptions.map((g) => {
                  const active = form.goals.includes(g);
                  return (
                    <button
                      key={g}
                      type="button"
                      onClick={() => toggleGoal(g)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-left transition-all border ${active
                          ? 'bg-blue-500/10 border-blue-500 text-white'
                          : 'bg-slate-950 border-blue-900/40 text-slate-300 hover:border-blue-500/50'
                        }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-colors ${active ? 'bg-blue-500 border-blue-500' : 'border-slate-600'
                          }`}
                      >
                        {active && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                      </div>
                      <span>{g}</span>
                    </button>
                  );
                })}
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-2">
                  Anything else I should know? <span className="text-slate-500 text-xs">(optional)</span>
                </label>
                <textarea
                  value={form.notes}
                  onChange={(e) => update('notes', e.target.value)}
                  rows={3}
                  placeholder="e.g. Specific challenges, competitors, or timeline..."
                  className="w-full bg-slate-950 border border-blue-900/40 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                />
              </div>
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="mt-5 bg-red-500/10 border border-red-500/30 rounded-xl p-3 text-red-400 text-sm">
              {error}
            </div>
          )}

          {/* Buttons */}
          <div className="mt-8 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={back}
              disabled={step === 1}
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-blue-500/30 text-white px-5 py-3 rounded-xl font-semibold transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" /> Back
            </button>

            {step < steps.length ? (
              <button
                type="button"
                onClick={next}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-blue-500/30 transition-all hover:scale-105"
              >
                Continue <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={submit}
                disabled={submitting}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-green-500/30 transition-all hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Submitting...
                  </>
                ) : (
                  <>
                    Submit Audit Request <CheckCircle2 className="w-4 h-4" />
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Trust footer */}
        <p className="text-center text-slate-500 text-xs mt-6">
          🔒 Your information is private and used only to deliver your audit.
        </p>
      </div>

      <WhatsAppFloat />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Audit;
