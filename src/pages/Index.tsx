
import React, { useState } from 'react';
import { Calculator, BookOpen, Sparkles, BarChart3, Moon, Sun } from 'lucide-react';
import SolveMode from '../components/SolveMode';
import LearnMode from '../components/LearnMode';
import EnhancedGraph from '../components/EnhancedGraph';
import VantaBackground from '../components/VantaBackground';
import CommandBar from '../components/CommandBar';
import FuturisticCard from '../components/FuturisticCard';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

const Index = () => {
  const [currentMode, setCurrentMode] = useState<'solve' | 'learn' | 'graph'>('solve');
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleModeChange = (mode: 'solve' | 'learn' | 'graph') => {
    setCurrentMode(mode);
  };

  const handleDomainSelect = (domain: string) => {
    console.log('Domain selected:', domain);
    setCurrentMode('learn');
  };

  return (
    <div className={`min-h-screen relative overflow-hidden ${isDarkMode ? 'dark' : ''}`}>
      <VantaBackground effect="NET">
        {/* Header */}
        <header className="relative z-20 backdrop-blur-sm bg-slate-900/20 border-b border-slate-700/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/25 animate-glow-pulse">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-fade-in">
                    Welcome to the Future of Math
                  </h1>
                  <p className="text-sm text-slate-400 animate-fade-in delay-300">
                    Solve. Learn. Visualize. Evolve.
                  </p>
                </div>
              </div>
              
              {/* Navigation & Theme Toggle */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1 glass backdrop-blur-sm rounded-lg p-1 border border-slate-600/30">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setCurrentMode('solve')}
                    className={`flex items-center space-x-2 transition-all duration-300 ${
                      currentMode === 'solve'
                        ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Calculator className="h-4 w-4" />
                    <span>Solve</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setCurrentMode('learn')}
                    className={`flex items-center space-x-2 transition-all duration-300 ${
                      currentMode === 'learn'
                        ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/50'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <BookOpen className="h-4 w-4" />
                    <span>Learn</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setCurrentMode('graph')}
                    className={`flex items-center space-x-2 transition-all duration-300 ${
                      currentMode === 'graph'
                        ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/50'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <BarChart3 className="h-4 w-4" />
                    <span>Graph</span>
                  </Button>
                </div>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="p-2 glass border border-slate-600/30 hover:border-blue-500/50"
                >
                  {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content with Scroll Area */}
        <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 h-[calc(100vh-8rem)]">
          <ScrollArea className="h-full w-full">
            <div className="transition-all duration-500 ease-in-out animate-fade-in pr-4">
              {currentMode === 'solve' && (
                <FuturisticCard glow>
                  <SolveMode />
                </FuturisticCard>
              )}
              {currentMode === 'learn' && (
                <FuturisticCard glow>
                  <LearnMode />
                </FuturisticCard>
              )}
              {currentMode === 'graph' && <EnhancedGraph />}
            </div>
          </ScrollArea>
        </main>

        {/* Command Bar */}
        <CommandBar onModeChange={handleModeChange} onDomainSelect={handleDomainSelect} />

        {/* Footer */}
        <footer className="relative z-10 mt-16 text-center text-gray-400 text-sm">
          <div className="flex items-center justify-center space-x-2">
            <span>AI by Math Super Solver</span>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          </div>
        </footer>
      </VantaBackground>
    </div>
  );
};

export default Index;
