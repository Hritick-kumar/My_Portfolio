import React, { useState } from 'react';
import { 
  TrendingUp, 
  ArrowUpRight, 
  RefreshCw, 
  Layers, 
  Database, 
  Clock, 
  CheckCircle2
} from 'lucide-react';

interface SimulatedExecution {
  id: string;
  symbol: string;
  action: 'BUY' | 'SELL';
  qty: number;
  price: number;
  lotMatched?: string;
  realizedPnL?: number;
}

export const TradingVisualizer: React.FC = () => {
  const [syncStatus, setSyncStatus] = useState<'IDLE' | 'SYNCING' | 'RECONCILED'>('RECONCILED');
  const [activeTab, setActiveTab] = useState<'MATCHING' | 'LEDGER'>('MATCHING');

  const executions: SimulatedExecution[] = [
    { id: "EX-101", symbol: "AAPL", action: "BUY", qty: 10, price: 175.50 },
    { id: "EX-102", symbol: "AAPL", action: "BUY", qty: 15, price: 178.00 },
    { id: "EX-103", symbol: "AAPL", action: "SELL", qty: 10, price: 184.20, lotMatched: "Lot 1 (EX-101)", realizedPnL: 87.00 },
    { id: "EX-104", symbol: "MSFT", action: "BUY", qty: 8, price: 415.00 },
    { id: "EX-105", symbol: "MSFT", action: "SELL", qty: 4, price: 428.50, lotMatched: "Lot 1 (EX-104)", realizedPnL: 54.00 },
  ];

  const handleTriggerSync = () => {
    setSyncStatus('SYNCING');
    setTimeout(() => {
      setSyncStatus('RECONCILED');
    }, 1500);
  };

  return (
    <div className="bg-[#0b0e17] border border-white/10 rounded-2xl p-5 md:p-6 shadow-2xl relative overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-5 pb-4 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
            <h4 className="text-base font-semibold text-white tracking-wide">
              CalmTrade: SnapTrade Sync & FIFO Matching Engine
            </h4>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Real-time incremental trade ingestion and lot-by-lot realized P&L reconciliation
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab(activeTab === 'MATCHING' ? 'LEDGER' : 'MATCHING')}
            className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition-all cursor-pointer"
          >
            {activeTab === 'MATCHING' ? "View Raw Executions" : "View FIFO Matching"}
          </button>
          
          <button
            onClick={handleTriggerSync}
            disabled={syncStatus === 'SYNCING'}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 transition-all cursor-pointer disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${syncStatus === 'SYNCING' ? 'animate-spin' : ''}`} />
            {syncStatus === 'SYNCING' ? "Reconciling..." : "Trigger Incremental Sync"}
          </button>
        </div>
      </div>

      {/* Sync Status Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
        <div className="bg-slate-900/60 border border-white/5 rounded-xl p-3">
          <div className="text-[11px] text-slate-400 flex items-center gap-1.5 mb-1">
            <Clock className="w-3.5 h-3.5 text-blue-400" />
            Sync State
          </div>
          <div className="text-xs font-semibold text-white flex items-center gap-1.5">
            {syncStatus === 'SYNCING' ? (
              <span className="text-amber-400">Processing Delta Stream...</span>
            ) : (
              <span className="text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Synchronized (Cursor Active)
              </span>
            )}
          </div>
        </div>

        <div className="bg-slate-900/60 border border-white/5 rounded-xl p-3">
          <div className="text-[11px] text-slate-400 flex items-center gap-1.5 mb-1">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            Matching Method
          </div>
          <div className="text-xs font-mono font-semibold text-cyan-300">
            Strict FIFO (Tax-Lot Compliant)
          </div>
        </div>

        <div className="bg-slate-900/60 border border-white/5 rounded-xl p-3">
          <div className="text-[11px] text-slate-400 flex items-center gap-1.5 mb-1">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            Session Realized P&L
          </div>
          <div className="text-xs font-mono font-semibold text-emerald-400">
            +$141.00 USD
          </div>
        </div>
      </div>

      {/* Interactive Table View */}
      <div className="bg-slate-950/80 border border-white/5 rounded-xl overflow-hidden">
        <div className="px-4 py-2.5 bg-white/5 border-b border-white/5 flex items-center justify-between text-xs text-slate-400 font-mono">
          <span>Execution Ledger ({executions.length} Events)</span>
          <span className="text-[10px] text-slate-500">Auto-matched via Queue Algorithm</span>
        </div>

        <div className="divide-y divide-white/5 text-xs">
          {executions.map((ex) => (
            <div key={ex.id} className="p-3 sm:px-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
              <div className="flex items-center gap-3">
                <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                  ex.action === 'BUY' 
                    ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' 
                    : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                }`}>
                  {ex.action}
                </span>
                <div>
                  <span className="font-semibold text-white mr-2">{ex.symbol}</span>
                  <span className="text-slate-400 text-[11px]">{ex.qty} shs @ ${ex.price.toFixed(2)}</span>
                </div>
              </div>

              <div className="text-right">
                {ex.lotMatched ? (
                  <div className="flex flex-col items-end">
                    <span className="text-[11px] text-emerald-400 font-mono font-medium flex items-center gap-1">
                      <ArrowUpRight className="w-3 h-3" />
                      +${ex.realizedPnL?.toFixed(2)} Realized
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">
                      Matched: {ex.lotMatched}
                    </span>
                  </div>
                ) : (
                  <span className="text-[11px] text-slate-500 font-mono">
                    Open Inventory Lot
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3 text-[11px] text-slate-500 font-mono flex items-center gap-2">
        <Database className="w-3 h-3 text-cyan-400" />
        <span>Handled via SnapTrade Broker Webhooks & MongoDB Session Transactions</span>
      </div>
    </div>
  );
};
