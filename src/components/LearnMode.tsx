
import React, { useState } from 'react';
import { BookOpen, Lightbulb, Calculator } from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { domains, getDomainSubtopics, getTopicContent } from '../data/mathDomains';

const LearnMode = () => {
  const [selectedDomain, setSelectedDomain] = useState<string>('');
  const [selectedSubtopic, setSelectedSubtopic] = useState<string>('');

  const subtopics = selectedDomain ? getDomainSubtopics(selectedDomain) : [];
  const content = selectedDomain && selectedSubtopic ? getTopicContent(selectedDomain, selectedSubtopic) : null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Domain Navigation */}
      <div className="lg:col-span-1">
        <div className="backdrop-blur-sm bg-white/10 rounded-xl p-6 border border-white/20 shadow-xl">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center">
            <BookOpen className="h-5 w-5 mr-2 text-purple-400" />
            Explore Topics
          </h2>
          
          {/* Domain Cards */}
          <div className="space-y-2">
            {domains.map((domain) => (
              <button
                key={domain.id}
                onClick={() => {
                  setSelectedDomain(selectedDomain === domain.name ? '' : domain.name);
                  setSelectedSubtopic('');
                }}
                className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                  selectedDomain === domain.name
                    ? 'bg-purple-500/20 border border-purple-500/50 text-white'
                    : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                <div className="flex items-center">
                  <span className="mr-3 text-lg">{domain.icon}</span>
                  <span className="text-sm font-medium">{domain.name}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Subtopic List */}
          {selectedDomain && (
            <div className="mt-4 pt-4 border-t border-white/10">
              <h3 className="text-sm font-medium text-gray-300 mb-2">Subtopics</h3>
              <div className="space-y-1">
                {subtopics.map((subtopic, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSubtopic(subtopic)}
                    className={`w-full text-left p-2 rounded text-xs transition-colors ${
                      selectedSubtopic === subtopic
                        ? 'bg-blue-500/20 text-blue-300'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {subtopic}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="lg:col-span-3">
        {content ? (
          <div className="space-y-6">
            {/* Definition */}
            <div className="backdrop-blur-sm bg-white/10 rounded-xl p-6 border border-white/20 shadow-xl">
              <div className="flex items-center mb-4">
                <Lightbulb className="h-5 w-5 mr-2 text-yellow-400" />
                <h3 className="text-lg font-semibold text-white">Definition</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">{content.definition}</p>
            </div>

            {/* Key Formulas */}
            {content.formulas.length > 0 && (
              <div className="backdrop-blur-sm bg-white/10 rounded-xl p-6 border border-white/20 shadow-xl">
                <div className="flex items-center mb-4">
                  <Calculator className="h-5 w-5 mr-2 text-blue-400" />
                  <h3 className="text-lg font-semibold text-white">Key Formulas</h3>
                </div>
                <div className="space-y-4">
                  {content.formulas.map((formula, index) => (
                    <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <div className="text-center">
                        <BlockMath math={formula} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Examples */}
            {content.examples.length > 0 && (
              <div className="backdrop-blur-sm bg-white/10 rounded-xl p-6 border border-white/20 shadow-xl">
                <h3 className="text-lg font-semibold text-white mb-4">Practice Examples</h3>
                <div className="space-y-4">
                  {content.examples.map((example, index) => (
                    <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <div className="mb-2">
                        <span className="text-sm text-gray-400">Problem:</span>
                        <div className="mt-1">
                          <InlineMath math={example.problem} />
                        </div>
                      </div>
                      <div>
                        <span className="text-sm text-gray-400">Solution:</span>
                        <div className="mt-1">
                          <InlineMath math={example.solution} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="backdrop-blur-sm bg-white/10 rounded-xl p-12 border border-white/20 shadow-xl text-center">
            <div className="mb-6">
              <div className="w-20 h-20 mx-auto bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Explore Mathematics</h3>
              <p className="text-gray-300">Select a domain and subtopic to start learning</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LearnMode;
