import React from 'react';
import { Activity, TrendingUp, ShieldCheck, Layers, BarChart3, Filter } from 'lucide-react';

interface DashboardGraphicProps {
  className?: string;
  variant?: 'featured' | 'full';
}

export const DashboardGraphic: React.FC<DashboardGraphicProps> = ({ 
  className = '',
  variant = 'full' 
}) => {
  return (
    <div className={`relative rounded-2xl overflow-hidden bg-brand-darkBg/95 border border-brand-border shadow-glow-blue/40 p-4 sm:p-6 transition-all duration-300 group hover:border-brand-cyan ${className}`}>
      
      {/* Top ambient radial glow */}
      <div className="absolute -top-12 -right-12 w-64 h-64 bg-brand-cyan/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header Controls Bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-brand-border pb-3.5 mb-5">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
          <span className="text-[11px] font-mono font-semibold text-slate-300 ml-2 tracking-wide flex items-center gap-1.5">
            <BarChart3 className="w-3.5 h-3.5 text-brand-cyan" />
            Decision Intelligence Dashboard
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-md bg-brand-card border border-brand-border text-slate-300">
            <Filter className="w-3 h-3 text-brand-cyan" />
            Real-time KPIs
          </span>
          <span className="text-[10px] font-mono font-bold text-brand-cyan bg-brand-blue/20 px-2.5 py-0.5 rounded-full border border-brand-border">
            LIVE 99.98%
          </span>
        </div>
      </div>

      {/* KPI Cards Row */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
        <div className="bg-brand-card/90 rounded-xl p-3 border border-brand-border shadow-sm">
          <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
            <span>Portfolio Volume</span>
            <span className="text-emerald-400 font-semibold flex items-center gap-0.5 text-[10px]">
              <TrendingUp className="w-3 h-3" /> +14.8%
            </span>
          </div>
          <div className="text-lg font-bold text-white tracking-tight">$248.5M</div>
        </div>

        <div className="bg-brand-card/90 rounded-xl p-3 border border-brand-border shadow-sm">
          <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
            <span>Query Latency</span>
            <Activity className="w-3.5 h-3.5 text-brand-cyan" />
          </div>
          <div className="text-lg font-bold text-brand-cyan tracking-tight">&lt; 8.4ms</div>
        </div>

        <div className="bg-brand-card/90 rounded-xl p-3 border border-brand-border shadow-sm">
          <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
            <span>Model Precision</span>
            <ShieldCheck className="w-3.5 h-3.5 text-brand-cyan" />
          </div>
          <div className="text-lg font-bold text-white tracking-tight">99.98%</div>
        </div>
      </div>

      {/* Interactive Chart Graphic Canvas */}
      <div className="relative z-10 bg-brand-card/80 rounded-xl p-4 border border-brand-border">
        <div className="flex items-center justify-between text-xs text-slate-300 mb-3">
          <span className="font-semibold flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-brand-cyan" />
            Decision Velocity & Ingestion Stream
          </span>
          <span className="text-[10px] text-slate-400 font-mono">Q3 • Automated Sync</span>
        </div>

        {/* Animated Line / Bar Visual */}
        <div className="h-32 sm:h-40 flex items-end gap-2 pt-2 px-1 relative">
          {/* Background grid guides */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
            <div className="w-full border-b border-brand-cyan/40"></div>
            <div className="w-full border-b border-brand-cyan/40"></div>
            <div className="w-full border-b border-brand-cyan/40"></div>
          </div>

          {[35, 55, 42, 70, 60, 85, 68, 92, 80, 98, 76, 90, 88, 100, 94].map((val, idx) => (
            <div
              key={idx}
              className="flex-1 flex flex-col items-center gap-1 h-full justify-end group/bar"
            >
              <div 
                className="w-full bg-gradient-to-t from-brand-deep via-brand-blue to-brand-cyan rounded-t-md transition-all duration-300 group-hover/bar:brightness-125 shadow-glow-cyan/30"
                style={{ height: `${val}%` }}
              ></div>
            </div>
          ))}
        </div>

        {/* Chart Bottom Labels */}
        <div className="flex justify-between text-[9px] text-slate-400 font-mono mt-2 pt-2 border-t border-brand-border">
          <span>00:00 EST</span>
          <span>06:00</span>
          <span>12:00</span>
          <span>18:00</span>
          <span>NOW</span>
        </div>
      </div>

      {variant === 'full' && (
        <div className="relative z-10 mt-3 pt-3 border-t border-brand-border flex items-center justify-between text-[11px] text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-ping"></span>
            Hierarchical Data Structure Active
          </span>
          <span className="text-brand-cyan font-mono text-[10px]">UX Optimized • Zero Clutter</span>
        </div>
      )}
    </div>
  );
};
export default DashboardGraphic;
