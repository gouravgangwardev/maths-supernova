
import React, { useState } from 'react';
import { ChevronDown, Play, Zap } from 'lucide-react';
import MathSolver from './MathSolver';
import { domains, getDomainSubtopics } from '../data/mathDomains';

const SolveMode = () => {
  const [selectedDomain, setSelectedDomain] = useState<string>('');
  const [selectedSubtopic, setSelectedSubtopic] = useState<string>('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubtopicOpen, setIsSubtopicOpen] = useState(false);

  const subtopics = selectedDomain ? getDomainSubtopics(selectedDomain) : [];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Domain Selection Sidebar */}
      <div className="lg:col-span-1 space-y-4">
        <div className="backdrop-blur-sm bg-white/10 rounded-xl p-6 border border-white/20 shadow-xl">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Zap className="h-5 w-5 mr-2 text-blue-400" />
            Select Domain
          </h2>
          
          {/* Domain Dropdown */}
          <div className="relative mb-4">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex items-center justify-between px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white hover:bg-white/10 transition-all duration-200 focus:ring-2 focus:ring-blue-500/50"
            >
              <span>{selectedDomain || 'Choose a domain...'}</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-slate-800/95 backdrop-blur-sm border border-white/20 rounded-lg shadow-xl z-50 max-h-60 overflow-y-auto">
                {domains.map((domain) => (
                  <button
                    key={domain.id}
                    onClick={() => {
                      setSelectedDomain(domain.name);
                      setSelectedSubtopic('');
                      setIsDropdownOpen(false);
                    }}
                    className="w-full px-4 py-3 text-left text-white hover:bg-white/10 transition-colors border-b border-white/10 last:border-b-0 flex items-center"
                  >
                    <span className="mr-3 text-lg">{domain.icon}</span>
                    {domain.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Subtopic Dropdown */}
          {selectedDomain && (
            <div className="relative">
              <button
                onClick={() => setIsSubtopicOpen(!isSubtopicOpen)}
                className="w-full flex items-center justify-between px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white hover:bg-white/10 transition-all duration-200 focus:ring-2 focus:ring-purple-500/50"
              >
                <span>{selectedSubtopic || 'Choose subtopic...'}</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isSubtopicOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isSubtopicOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-slate-800/95 backdrop-blur-sm border border-white/20 rounded-lg shadow-xl z-50 max-h-60 overflow-y-auto">
                  {subtopics.map((subtopic, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedSubtopic(subtopic);
                        setIsSubtopicOpen(false);
                      }}
                      className="w-full px-4 py-3 text-left text-white hover:bg-white/10 transition-colors border-b border-white/10 last:border-b-0"
                    >
                      {subtopic}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Quick Examples */}
        {selectedDomain && (
          <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
            <h3 className="text-sm font-medium text-gray-300 mb-2">Quick Examples</h3>
            <div className="space-y-1 text-xs text-gray-400">
              {selectedDomain === 'Arithmetic' && (
                <>
                  <div>3 + 5 * (2 - 1)^2</div>
                  <div>sqrt(16) + 2!</div>
                </>
              )}
              {selectedDomain === 'Algebra' && (
                <>
                  <div>x^2 + 5x + 6 = 0</div>
                  <div>simplify(2x + 3x - x)</div>
                </>
              )}
              {selectedDomain === 'Calculus' && (
                <>
                  <div>derivative(x^2 + 3x)</div>
                  <div>integrate(x^2)</div>
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Main Solver Area */}
      <div className="lg:col-span-3">
        {selectedDomain && selectedSubtopic ? (
          <MathSolver domain={selectedDomain} subtopic={selectedSubtopic} />
        ) : (
          <div className="backdrop-blur-sm bg-white/10 rounded-xl p-12 border border-white/20 shadow-xl text-center">
            <div className="mb-6">
              <div className="w-20 h-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                <Play className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Ready to Solve</h3>
              <p className="text-gray-300">Select a domain and subtopic to start solving math problems</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SolveMode;
