import React, { useState } from 'react';
import { 
  Smile, 
  Frown, 
  Meh, 
  Cpu
} from 'lucide-react';

export const SentimentDemo: React.FC = () => {
  const [inputText, setInputText] = useState<string>(
    "The new API response time is remarkably fast and the checkout flow feels completely seamless!"
  );
  
  const presets = [
    "The new API response time is remarkably fast and the checkout flow feels completely seamless!",
    "System latency spiked during peak hours, causing webhook delivery timeouts and failed retries.",
    "The documentation is straightforward, but the error reporting could be more descriptive."
  ];

  const analyzeSentiment = (text: string) => {
    const lower = text.toLowerCase();
    const positiveWords = ['fast', 'seamless', 'remarkably', 'great', 'excellent', 'love', 'perfect', 'reliable', 'clean', 'good'];
    const negativeWords = ['timeout', 'latency', 'failed', 'broken', 'error', 'slow', 'spiked', 'bad', 'issue', 'problem'];

    let posScore = 0;
    let negScore = 0;

    positiveWords.forEach(w => { if (lower.includes(w)) posScore += 1; });
    negativeWords.forEach(w => { if (lower.includes(w)) negScore += 1; });

    if (posScore > negScore) {
      return {
        label: 'POSITIVE',
        confidence: Math.min(96, 75 + (posScore * 8)),
        polarity: +0.78,
        color: 'text-emerald-400',
        bg: 'bg-emerald-500/10 border-emerald-500/30',
        icon: Smile,
        summary: 'Strong positive customer sentiment detected. High satisfaction markers.'
      };
    } else if (negScore > posScore) {
      return {
        label: 'NEGATIVE',
        confidence: Math.min(94, 70 + (negScore * 9)),
        polarity: -0.65,
        color: 'text-rose-400',
        bg: 'bg-rose-500/10 border-rose-500/30',
        icon: Frown,
        summary: 'Elevated friction indicators detected. Negative polarity markers in text.'
      };
    } else {
      return {
        label: 'NEUTRAL',
        confidence: 82,
        polarity: 0.05,
        color: 'text-amber-400',
        bg: 'bg-amber-500/10 border-amber-500/30',
        icon: Meh,
        summary: 'Balanced sentiment profile with mixed or informational polarity tokens.'
      };
    }
  };

  const result = analyzeSentiment(inputText);
  const IconComponent = result.icon;

  return (
    <div className="bg-[#0b0e17] border border-white/10 rounded-2xl p-5 md:p-6 shadow-2xl relative overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-5 pb-4 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse" />
            <h4 className="text-base font-semibold text-white tracking-wide">
              AI / NLP Sentiment Classifier Simulator
            </h4>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Simulates Python TF-IDF Vectorizer + Trained Classifier inference pipeline
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2.5 py-1 rounded-md">
          <Cpu className="w-3.5 h-3.5" />
          <span>Streamlit + Scikit-Learn Model</span>
        </div>
      </div>

      {/* Preset Buttons */}
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span className="text-[11px] text-slate-400 font-mono">Sample inputs:</span>
        {presets.map((preset, idx) => (
          <button
            key={idx}
            onClick={() => setInputText(preset)}
            className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5 transition-all cursor-pointer"
          >
            Example #{idx + 1}
          </button>
        ))}
      </div>

      {/* Input Text Box */}
      <div className="mb-4">
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          rows={3}
          placeholder="Enter custom feedback or review text to predict sentiment..."
          className="w-full bg-slate-950/70 border border-white/10 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all resize-none"
        />
      </div>

      {/* Prediction Output Card */}
      <div className={`p-4 rounded-xl border ${result.bg} transition-all`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2.5">
            <div className={`p-2 rounded-lg bg-white/5 ${result.color}`}>
              <IconComponent className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-mono">Classification Label</div>
              <div className={`text-base font-bold font-mono tracking-wide ${result.color}`}>
                {result.label}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <div>
              <div className="text-slate-400 text-[10px]">Model Confidence</div>
              <div className="text-white font-semibold">{result.confidence}%</div>
            </div>
            <div className="h-6 w-px bg-white/10" />
            <div>
              <div className="text-slate-400 text-[10px]">Polarity Score</div>
              <div className={result.polarity >= 0 ? "text-emerald-400" : "text-rose-400"}>
                {result.polarity > 0 ? `+${result.polarity}` : result.polarity}
              </div>
            </div>
          </div>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed">
          {result.summary}
        </p>
      </div>
    </div>
  );
};
