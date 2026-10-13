import React, { useState } from 'react';
import { 
  CheckCircle2, 
  RefreshCw, 
  Smartphone,
  Lock
} from 'lucide-react';

export const TipAppArchitectureVisualizer: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [simulating, setSimulating] = useState<boolean>(false);

  const steps = [
    {
      title: "1. Customer Checkout",
      actor: "Client UI / Mobile",
      desc: "User selects tip amount or order total. Choice of direct card, Google Pay, or Apple Pay.",
      technical: "Digital Wallet Tokenization (Apple Pay PKPaymentToken / Google Pay PaymentData)",
      badge: "Frontend Layer"
    },
    {
      title: "2. Partner Routing & Auth-Assertion",
      actor: "Node.js / Express API",
      desc: "Backend constructs transaction payload with fee split. Injects PayPal-Auth-Assertion header on behalf of verified merchant.",
      technical: "HMAC Signed PayPal-Auth-Assertion + Idempotency-Key validation",
      badge: "API Gateway"
    },
    {
      title: "3. PPCP Marketplace Capture",
      actor: "PayPal Payments Engine",
      desc: "PayPal captures gross funds, securely holds transaction, and computes automatic platform commission.",
      technical: "POST /v2/checkout/orders/{id}/capture with partner attribution ID",
      badge: "Payment Processor"
    },
    {
      title: "4. Settlement & Balance Sync",
      actor: "Merchant Account & Webhooks",
      desc: "Net funds land directly in merchant balance. Webhooks notify server for real-time order confirmation & ledger sync.",
      technical: "Webhook signature verification: CHECKOUT.ORDER.COMPLETED listener",
      badge: "Ledger Settlement"
    }
  ];

  const handleRunSimulation = () => {
    if (simulating) return;
    setSimulating(true);
    let step = 0;
    const interval = setInterval(() => {
      step += 1;
      if (step < steps.length) {
        setActiveStep(step);
      } else {
        clearInterval(interval);
        setSimulating(false);
      }
    }, 1200);
  };

  return (
    <div className="bg-[#0b0e17] border border-white/10 rounded-2xl p-5 md:p-6 shadow-2xl overflow-hidden relative">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <h4 className="text-base font-semibold text-white tracking-wide">
              PayPal PPCP Marketplace Architecture Flow
            </h4>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Interactive multi-party payment routing & fee settlement lifecycle
          </p>
        </div>

        <button
          onClick={handleRunSimulation}
          disabled={simulating}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/30 transition-all cursor-pointer disabled:opacity-50"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${simulating ? 'animate-spin' : ''}`} />
          {simulating ? "Simulating Flow..." : "Simulate Payment Flow"}
        </button>
      </div>

      {/* Visual Pipeline Nodes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {steps.map((step, idx) => {
          const isSelected = activeStep === idx;
          const isPassed = activeStep > idx;

          return (
            <div
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-3.5 rounded-xl border transition-all cursor-pointer text-left relative ${
                isSelected
                  ? 'bg-blue-950/40 border-blue-500/60 shadow-lg shadow-blue-950/50'
                  : isPassed
                  ? 'bg-slate-900/60 border-slate-700/60 text-slate-300'
                  : 'bg-slate-900/30 border-white/5 opacity-70 hover:opacity-100 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                  {step.badge}
                </span>
                {isPassed ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                ) : isSelected ? (
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
                ) : null}
              </div>

              <div className="text-xs font-semibold text-white mb-1">
                {step.title}
              </div>
              <div className="text-[11px] text-slate-400">
                {step.actor}
              </div>
            </div>
          );
        })}
      </div>

      {/* Active Step Deep-Dive */}
      <div className="bg-slate-950/70 border border-blue-500/20 rounded-xl p-4.5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30">
              Active Inspector: Step {activeStep + 1} of 4
            </span>
            <span className="text-sm font-semibold text-white">
              {steps[activeStep].title}
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Lock className="w-3.5 h-3.5 text-amber-400" />
            <span>End-to-End Encrypted Payload</span>
          </div>
        </div>

        <p className="text-xs text-slate-300 mb-3 leading-relaxed">
          {steps[activeStep].desc}
        </p>

        <div className="bg-[#07090e] border border-white/5 rounded-lg p-3 font-mono text-[11px] text-emerald-400 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="text-slate-500 select-none">$</span>
            <span className="text-slate-300">Technical Hook:</span>
            <span className="text-blue-300">{steps[activeStep].technical}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400 text-[10px]">
            <Smartphone className="w-3 h-3 text-slate-400" />
            <span>Google Pay / Apple Pay Ready</span>
          </div>
        </div>
      </div>
    </div>
  );
};
