import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Copy, Check, Send, ShieldCheck } from 'lucide-react';

export default function ContactFooter() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const copyEmail = () => {
    navigator.clipboard.writeText('rinubibrahim@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <footer id="contact" className="relative pt-20 pb-12 bg-[#07090e] border-t border-white/10 overflow-hidden">
      <div className="ambient-glow glow-bottom-right" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F5A0]/10 border border-[#00F5A0]/30 text-[#00F5A0] text-xs font-mono font-semibold uppercase mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white mb-3">
            Let's Build Something <span className="gradient-text-emerald">Exceptional</span>
          </h2>
          <p className="text-sm text-slate-400">
            Open for technical leadership roles, AWS data architecture consultation, 
            or high-scale AI engineering collaborations in Ireland.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto mb-16">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
            <div>
              <h3 className="font-heading font-extrabold text-2xl text-white mb-1">
                Ibrahim Rinub Babu
              </h3>
              <p className="text-xs text-[#00F5A0] font-mono mb-4">
                Assistant Vice President @ Citi | AWS Data Engineer
              </p>

              {/* Stamp 4 Visa Highlight */}
              <div className="p-3 rounded-xl bg-[#00F5A0]/15 border border-[#00F5A0]/40 text-[#00F5A0] text-xs font-mono font-bold flex items-center gap-2 mb-6">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Stamp 4 Visa (No Sponsorship Required)</span>
              </div>

              <div className="space-y-4 mb-8">
                {/* Email Box */}
                <div className="p-4 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#00F5A0]/10 border border-[#00F5A0]/30 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-[#00F5A0]" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-400">EMAIL ADDRESS</div>
                      <div className="text-xs font-mono text-white font-semibold">rinubibrahim@gmail.com</div>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-2 rounded-lg bg-white/5 hover:bg-[#00F5A0]/20 border border-white/10 text-white transition-colors"
                    title="Copy Email Address"
                  >
                    {copied ? <Check className="w-4 h-4 text-[#00F5A0]" /> : <Copy className="w-4 h-4 text-slate-400" />}
                  </button>
                </div>

                {/* Phone Box */}
                <a 
                  href="tel:+353892081811"
                  className="p-4 rounded-xl bg-black/40 border border-white/10 flex items-center gap-3 hover:border-[#00D2FF]/40 transition-colors block"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#00D2FF]/10 border border-[#00D2FF]/30 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#00D2FF]" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400">PHONE / WHATSAPP</div>
                    <div className="text-xs font-mono text-white font-semibold">+353 892081811</div>
                  </div>
                </a>

                {/* Location */}
                <div className="p-4 rounded-xl bg-black/40 border border-white/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#F59E0B]/10 border border-[#F59E0B]/30 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#F59E0B]" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400">LOCATION</div>
                    <div className="text-xs font-mono text-white font-semibold">Co. Meath / Dublin, Ireland</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div>
              <div className="text-xs font-mono text-slate-400 mb-3">SOCIAL PROFILES</div>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/ibrahimbabu/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary text-xs px-4 py-2.5 flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4 text-[#00D2FF]" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://github.com/Rinub"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary text-xs px-4 py-2.5 flex items-center gap-2"
                >
                  <Github className="w-4 h-4 text-white" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
            <h3 className="font-heading font-extrabold text-xl text-white mb-6">
              Send Direct Message
            </h3>

            {formSubmitted ? (
              <div className="p-8 rounded-xl bg-[#00F5A0]/10 border border-[#00F5A0]/30 text-center py-12">
                <Check className="w-12 h-12 text-[#00F5A0] mx-auto mb-3" />
                <h4 className="font-heading font-extrabold text-xl text-white mb-2">Message Dispatched!</h4>
                <p className="text-xs text-slate-400">Thank you for reaching out. Ibrahim will respond to your inquiry shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white text-xs focus:border-[#00F5A0] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white text-xs focus:border-[#00F5A0] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="AWS Architecture / Engineering Leadership Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white text-xs focus:border-[#00F5A0] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Message</label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Hello Ibrahim, we would love to discuss a Data Engineering role..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white text-xs focus:border-[#00F5A0] focus:outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-full text-xs py-3.5 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-[#04120C]" />
                  <span>Send Message to Ibrahim</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Footer Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © {new Date().getFullYear()} Ibrahim Rinub Babu. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[#00F5A0] font-semibold">☘️ Stamp 4 Visa Holder</span>
            <span>•</span>
            <a href="https://github.com/Rinub/portfolio_website" target="_blank" rel="noreferrer" className="hover:text-[#00F5A0] transition-colors">
              GitHub Repo
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
