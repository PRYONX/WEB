import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Clock, DollarSign, ArrowRight, Check } from 'lucide-react';
import { Button } from './Button';
import { siteData } from '../../data/site-data';


export function RoiCalculator() {
  const [teamSize, setTeamSize] = useState(10);
  const [manualHours, setManualHours] = useState(8);
  const [dailyCalls, setDailyCalls] = useState(50);

  // Calculations
  const weeklyHoursSaved = Math.round(teamSize * manualHours * 0.75);
  const monthlyHoursSaved = weeklyHoursSaved * 4;
  const annualHoursSaved = weeklyHoursSaved * 52;
  const estimatedHourlyCost = 45; // $45/hr average wage
  const annualSavings = Math.round(annualHoursSaved * estimatedHourlyCost);
  const answeredCallsPerMonth = dailyCalls * 30;

  return (
    <div className="bg-pryonx-surface/95 border border-gray-800 rounded-2xl p-6 md:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden">
      <div className="flex items-center space-x-3 mb-8">
        <div className="p-3 bg-pryonx-cyan/20 rounded-xl text-pryonx-cyan">
          <Calculator size={26} />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white font-space-grotesk">
            AI Impact & ROI Calculator
          </h3>
          <p className="text-gray-400 text-sm">
            Calculate how much time and money PRYONX AI & Automation can save your team.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Sliders Input Column */}
        <div className="space-y-6">
          {/* Slider 1: Team Size */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-gray-300 font-medium text-sm">Team Size</label>
              <span className="text-pryonx-cyan font-bold font-mono text-base">{teamSize} members</span>
            </div>
            <input
              type="range"
              min="1"
              max="100"
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-pryonx-cyan"
            />
            <div className="flex justify-between text-[10px] text-gray-500 font-mono mt-1">
              <span>1</span>
              <span>50</span>
              <span>100+</span>
            </div>
          </div>

          {/* Slider 2: Manual Workflow Hours */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-gray-300 font-medium text-sm">Manual Task Hours / Person / Week</label>
              <span className="text-pryonx-cyan font-bold font-mono text-base">{manualHours} hrs/week</span>
            </div>
            <input
              type="range"
              min="2"
              max="30"
              value={manualHours}
              onChange={(e) => setManualHours(Number(e.target.value))}
              className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-pryonx-cyan"
            />
            <div className="flex justify-between text-[10px] text-gray-500 font-mono mt-1">
              <span>2 hrs</span>
              <span>15 hrs</span>
              <span>30 hrs</span>
            </div>
          </div>

          {/* Slider 3: Daily Phone Calls */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-gray-300 font-medium text-sm">Daily Customer Phone Calls</label>
              <span className="text-pryonx-red font-bold font-mono text-base">{dailyCalls} calls/day</span>
            </div>
            <input
              type="range"
              min="5"
              max="300"
              value={dailyCalls}
              onChange={(e) => setDailyCalls(Number(e.target.value))}
              className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-pryonx-red"
            />
            <div className="flex justify-between text-[10px] text-gray-500 font-mono mt-1">
              <span>5 calls</span>
              <span>150 calls</span>
              <span>300+ calls</span>
            </div>
          </div>
        </div>

        {/* Real-time Calculation Cards Column */}
        <div className="bg-pryonx-dark-bg/90 rounded-2xl p-6 border border-gray-800/80 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div
              key={monthlyHoursSaved}
              initial={{ scale: 0.95, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-pryonx-surface/80 p-4 rounded-xl border border-pryonx-cyan/30"
            >
              <div className="flex items-center space-x-2 text-pryonx-cyan mb-1">
                <Clock size={16} />
                <span className="text-xs font-mono uppercase tracking-wider">Hours Saved</span>
              </div>
              <p className="text-2xl md:text-3xl font-extrabold text-white font-space-grotesk">
                {monthlyHoursSaved.toLocaleString()} <span className="text-xs font-normal text-gray-400">hrs/mo</span>
              </p>
            </motion.div>

            <motion.div
              key={annualSavings}
              initial={{ scale: 0.95, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-pryonx-surface/80 p-4 rounded-xl border border-emerald-500/30"
            >
              <div className="flex items-center space-x-2 text-emerald-400 mb-1">
                <DollarSign size={16} />
                <span className="text-xs font-mono uppercase tracking-wider">Est. Annual Value</span>
              </div>
              <p className="text-2xl md:text-3xl font-extrabold text-white font-space-grotesk">
                ${(annualSavings / 1000).toFixed(0)}k <span className="text-xs font-normal text-gray-400">/year</span>
              </p>
            </motion.div>
          </div>

          <div className="space-y-2 text-xs text-gray-300">
            <div className="flex items-center space-x-2">
              <Check size={14} className="text-pryonx-cyan flex-shrink-0" />
              <span>{answeredCallsPerMonth.toLocaleString()} calls answered 24/7 with 0 missed opportunities.</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check size={14} className="text-pryonx-cyan flex-shrink-0" />
              <span>75% reduction in repetitive manual data entry & routing.</span>
            </div>
          </div>

          <div className="pt-2">
            <Button href={siteData.googleFormUrl} className="w-full">
              <span>Get Custom ROI Assessment</span>
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <p className="text-[11px] text-gray-500 leading-relaxed">
            Estimates only — illustrative calculator based on generic assumptions (75% task
            automation, $45/hr average wage). Your actual results will be assessed on your real
            workflows, not these numbers.
          </p>
        </div>
      </div>
    </div>
  );
}
