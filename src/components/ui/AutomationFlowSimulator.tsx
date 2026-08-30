import { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Mail, FileText, Database, Phone, TrendingUp, Bell, Zap, Cpu, CheckCircle } from 'lucide-react';


export function AutomationFlowSimulator() {
  const [activeSource, setActiveSource] = useState(0);

  const sources = [
    { name: 'Inbound Web Forms', icon: Globe, detail: 'Lead submits contact inquiry on website' },
    { name: 'Incoming Email', icon: Mail, detail: 'Customer sends support or sales email' },
    { name: 'Phone Voice Call', icon: Phone, detail: 'AI Voice Agent answers inbound call' },
    { name: 'App Data Trigger', icon: FileText, detail: 'Database record or API webhook fires' },
  ];

  const outputs = [
    { label: 'Instant CRM Entry', icon: Database, color: 'text-cyan-400' },
    { label: 'Lead Scoring & Report', icon: TrendingUp, color: 'text-emerald-400' },
    { label: 'Slack/SMS Notification', icon: Bell, color: 'text-amber-400' },
    { label: 'Auto-Triggered Action', icon: Zap, color: 'text-red-400' },
  ];

  return (
    <div className="bg-pryonx-surface/90 border border-gray-800 rounded-2xl p-6 md:p-8 shadow-2xl backdrop-blur-xl">
      <div className="text-center mb-8">
        <h3 className="text-xl md:text-2xl font-bold text-white font-space-grotesk">
          Interactive PRYONX Automation Engine
        </h3>
        <p className="text-gray-400 text-sm mt-1">
          Click any input trigger below to simulate how PRYONX processes data instantly into connected business actions.
        </p>
      </div>

      {/* Input Triggers Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {sources.map((src, index) => {
          const Icon = src.icon;
          const isActive = activeSource === index;
          return (
            <button
              key={src.name}
              onClick={() => setActiveSource(index)}
              className={`p-4 rounded-xl border text-left transition-all ${
                isActive
                  ? 'bg-pryonx-cyan/15 border-pryonx-cyan text-white shadow-lg shadow-pryonx-cyan/10 scale-105'
                  : 'bg-pryonx-dark-bg/80 border-gray-800 text-gray-400 hover:text-white hover:border-gray-700'
              }`}
            >
              <div className="flex items-center space-x-2 mb-2">
                <Icon size={18} className={isActive ? 'text-pryonx-cyan' : 'text-gray-400'} />
                <span className="text-xs font-semibold">{src.name}</span>
              </div>
              <p className="text-[10px] text-gray-400 leading-snug line-clamp-2">{src.detail}</p>
            </button>
          );
        })}
      </div>

      {/* Center Flow Processing Graphic */}
      <div className="relative py-8 my-4 bg-pryonx-dark-bg/60 border border-gray-800/80 rounded-xl p-6 overflow-hidden">
        {/* Connecting Animated Beam */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-800 -translate-y-1/2" />
        <motion.div
          key={activeSource}
          className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-pryonx-cyan via-pryonx-red to-cyan-400 -translate-y-1/2 shadow-[0_0_15px_#00B4D8]"
          initial={{ left: '0%', width: '0%' }}
          animate={{ left: ['0%', '50%', '100%'], width: ['10%', '30%', '10%'] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Active Input Badge */}
          <div className="flex items-center space-x-3 bg-pryonx-surface p-3 px-4 rounded-xl border border-pryonx-cyan/40 text-white text-xs font-mono">
            <CheckCircle size={16} className="text-pryonx-cyan" />
            <span>TRIGGER: {sources[activeSource].name}</span>
          </div>

          {/* Engine Core */}
          <div className="p-4 bg-gradient-to-r from-pryonx-red/20 via-pryonx-surface to-pryonx-cyan/20 rounded-2xl border border-pryonx-cyan/50 text-center shadow-lg shadow-pryonx-cyan/15">
            <Cpu size={28} className="text-pryonx-cyan mx-auto mb-1 animate-pulse" />
            <p className="text-white font-bold text-xs font-space-grotesk tracking-wider">PRYONX AI ENGINE</p>
            <p className="text-[10px] text-pryonx-cyan font-mono">REAL-TIME AGENT PROCESSING</p>
          </div>

          {/* Outputs Badge */}
          <div className="flex items-center space-x-3 bg-pryonx-surface p-3 px-4 rounded-xl border border-emerald-500/40 text-white text-xs font-mono">
            <Zap size={16} className="text-emerald-400" />
            <span>ACTIONS DISPATCHED</span>
          </div>
        </div>
      </div>

      {/* Output Actions Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
        {outputs.map((output) => {
          const Icon = output.icon;
          return (
            <motion.div
              key={output.label}
              initial={{ scale: 0.95 }}
              animate={{ scale: [0.95, 1, 0.95] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="bg-pryonx-dark-bg p-3.5 rounded-xl border border-gray-800 flex items-center space-x-3 text-white text-xs font-medium"
            >
              <Icon size={18} className={output.color} />
              <span>{output.label}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
