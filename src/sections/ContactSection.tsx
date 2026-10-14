import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Check, 
  Copy
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { copyToClipboard } from '../lib/utils';
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons';
import { TiltCard } from '../components/TiltCard';
import { useTheme } from '../context/useTheme';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { config } = useTheme();

  const handleCopyEmail = () => {
    copyToClipboard(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.7 },
        colors: [config.primaryHex, config.secondaryHex, '#ffffff']
      });
    } catch {
      // fallback
    }

    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#050814]/85 border-t border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Connection Pitch */}
          <div className="lg:col-span-5">
            <div 
              className="text-xs font-mono uppercase tracking-wider mb-2 font-semibold flex items-center gap-1.5"
              style={{ color: config.primaryHex }}
            >
              <span>Let's Connect</span>
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: config.primaryHex }} />
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              Let's build something meaningful.
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-8">
              Whether you're hiring for a Full-Stack role, building a product, or exploring an interesting technical problem, I'd love to connect.
            </p>

            <div className="space-y-4 mb-8">
              <div className="p-4 rounded-xl bg-gradient-to-b from-[#0a0e1c] to-[#060912] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-lg">
                <div className="flex items-center gap-3 min-w-0">
                  <div 
                    className="p-2.5 rounded-xl shadow-md shrink-0"
                    style={{
                      backgroundColor: `${config.primaryHex}15`,
                      color: config.primaryHex,
                    }}
                  >
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Direct Email</div>
                    <div className="text-xs sm:text-sm font-semibold text-white font-mono truncate">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-300 font-mono transition-all cursor-pointer flex items-center justify-center gap-1.5 shrink-0 self-start sm:self-auto"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                  <span>{copied ? "Copied" : "Copy"}</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-gradient-to-b from-[#0a0e1c] to-[#060912] border border-white/10 hover:border-white/20 transition-all flex items-center gap-2.5 text-xs text-slate-300 hover:text-white shadow-lg"
                >
                  <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-gradient-to-b from-[#0a0e1c] to-[#060912] border border-white/10 hover:border-white/20 transition-all flex items-center gap-2.5 text-xs text-slate-300 hover:text-white shadow-lg"
                >
                  <GithubIcon className="w-4 h-4 text-purple-400" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>

            <div 
              className="p-4 rounded-xl border flex items-center gap-3 backdrop-blur-md"
              style={{
                backgroundColor: `${config.primaryHex}08`,
                borderColor: `${config.primaryHex}25`,
              }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-slate-300">
                Available for Full-Time Software Engineering & Analyst roles
              </span>
            </div>
          </div>

          {/* Right Column: Contact Message Form with 3D Tilt */}
          <div className="lg:col-span-7">
            <TiltCard maxTilt={4} scale={1.01}>
              <div className="bg-gradient-to-b from-[#0b0f20] to-[#060912] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl relative backdrop-blur-2xl">
                <h3 className="text-lg font-bold text-white mb-2">
                  Send a Direct Note
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  Messages launch your primary email client pre-filled with this information.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Rivera"
                      className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                      Your Work Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about the role, technical problem, or product opportunity..."
                      className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 resize-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl text-white font-semibold text-xs sm:text-sm shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
                    style={{
                      background: `linear-gradient(135deg, ${config.primaryHex} 0%, ${config.secondaryHex} 100%)`,
                      boxShadow: `0 6px 20px -4px ${config.glowColor}`,
                    }}
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message via Email Client</span>
                  </button>
                </form>

                {submitted && (
                  <div className="mt-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 text-center font-mono">
                    ✓ Redirecting to email client with your message drafted.
                  </div>
                )}
              </div>
            </TiltCard>
          </div>

        </div>

      </div>
    </section>
  );
};
