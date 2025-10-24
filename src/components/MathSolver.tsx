
import React, { useState } from 'react';
import { Send, Loader2, TrendingUp } from 'lucide-react';
import { evaluate, simplify, derivative, parse } from 'mathjs';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import GraphDisplay from './GraphDisplay';

interface MathSolverProps {
  domain: string;
  subtopic: string;
}

const MathSolver: React.FC<MathSolverProps> = ({ domain, subtopic }) => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<any>(null);
  const [steps, setSteps] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showGraph, setShowGraph] = useState(false);
  const [graphExpression, setGraphExpression] = useState('');

  // Enhanced function to detect if expression should be graphed
  const shouldShowGraph = (expression: string, domain: string): boolean => {
    // Always show graph for Graphing domain
    if (domain === 'Graphing') return true;
    
    // Check if expression contains variables (x, y, etc.)
    if (/[xy]/i.test(expression)) return true;
    
    // Check for common mathematical functions that can be graphed
    const graphableFunctions = [
      'sin', 'cos', 'tan', 'sec', 'csc', 'cot',
      'log', 'ln', 'exp', 'sqrt', 'abs',
      'asin', 'acos', 'atan'
    ];
    
    for (const func of graphableFunctions) {
      if (expression.toLowerCase().includes(func)) return true;
    }
    
    // Check for polynomial patterns (numbers with x)
    if (/\d*x(\^?\d+)?/.test(expression)) return true;
    
    // Check for equations (contains =)
    if (expression.includes('=')) return true;
    
    return false;
  };

  // Extract graphable expression from input
  const extractGraphExpression = (input: string, domain: string): string => {
    // For equations, try to extract the right side or convert to standard form
    if (input.includes('=')) {
      const parts = input.split('=');
      if (parts.length === 2) {
        // Try to graph y = f(x) form
        const leftSide = parts[0].trim();
        const rightSide = parts[1].trim();
        
        if (leftSide === 'y' || leftSide === 'f(x)') {
          return rightSide;
        } else if (rightSide === 'y' || rightSide === 'f(x)') {
          return leftSide;
        } else {
          // For equations like x^2 + y^2 = 1, return as implicit function
          return input;
        }
      }
    }
    
    // For derivatives, graph both original and derivative
    if (input.startsWith('derivative') || input.startsWith('d/dx')) {
      const expr = input.replace(/derivative\(|\)|d\/dx\s*/g, '');
      return expr; // Graph the original function
    }
    
    return input;
  };

  const solveProblem = async () => {
    if (!input.trim()) return;
    
    setIsLoading(true);
    setResult(null);
    setSteps([]);
    setShowGraph(false);
    setGraphExpression('');

    try {
      let solution;
      let calculationSteps: string[] = [];

      if (domain === 'Arithmetic') {
        solution = evaluate(input);
        calculationSteps = [`Input: ${input}`, `Result: ${solution}`];
      } else if (domain === 'Algebra') {
        if (input.includes('=')) {
          // Equation solving (simplified)
          const parts = input.split('=');
          if (parts.length === 2) {
            solution = `Equation: ${input}`;
            calculationSteps = [`Given equation: ${input}`, `This is a placeholder for equation solving`];
          }
        } else {
          // Expression simplification
          solution = simplify(input).toString();
          calculationSteps = [`Original: ${input}`, `Simplified: ${solution}`];
        }
      } else if (domain === 'Calculus') {
        if (input.startsWith('derivative') || input.startsWith('d/dx')) {
          const expr = input.replace(/derivative\(|\)|d\/dx\s*/g, '');
          solution = derivative(expr, 'x').toString();
          calculationSteps = [`Find derivative of: ${expr}`, `Result: ${solution}`];
        } else {
          solution = `Integration of ${input} (placeholder)`;
          calculationSteps = [`Integrate: ${input}`, `Result: ${solution}`];
        }
      } else if (domain === 'Statistics') {
        if (input.startsWith('mean')) {
          const numbers = input.match(/\[(.*?)\]/)?.[1].split(',').map(n => parseFloat(n.trim()));
          if (numbers) {
            solution = numbers.reduce((a, b) => a + b, 0) / numbers.length;
            calculationSteps = [`Data: [${numbers.join(', ')}]`, `Mean = ${solution}`];
          }
        } else {
          solution = evaluate(input);
          calculationSteps = [`Input: ${input}`, `Result: ${solution}`];
        }
      } else {
        solution = evaluate(input);
        calculationSteps = [`Input: ${input}`, `Result: ${solution}`];
      }

      // Enhanced graph detection and display
      if (shouldShowGraph(input, domain)) {
        const graphExpr = extractGraphExpression(input, domain);
        setGraphExpression(graphExpr);
        setShowGraph(true);
        calculationSteps.push(`Graph: Displaying visualization of ${graphExpr}`);
      }

      setResult(solution);
      setSteps(calculationSteps);
    } catch (error) {
      setResult(`Error: ${error instanceof Error ? error.message : 'Invalid expression'}`);
      setSteps(['Please check your input and try again']);
    }

    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      solveProblem();
    }
  };

  return (
    <div className="space-y-6">
      {/* Input Area */}
      <div className="backdrop-blur-sm bg-white/10 rounded-xl p-6 border border-white/20 shadow-xl">
        <h3 className="text-lg font-semibold text-white mb-4">
          {domain} → {subtopic}
        </h3>
        
        <div className="flex space-x-4">
          <div className="flex-1">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter your mathematical expression..."
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-200"
            />
          </div>
          <button
            onClick={solveProblem}
            disabled={isLoading || !input.trim()}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-medium transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
            <span>Solve</span>
          </button>
        </div>
      </div>

      {/* Results Area */}
      {(result !== null || steps.length > 0) && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Solution */}
          <div className="backdrop-blur-sm bg-white/10 rounded-xl p-6 border border-white/20 shadow-xl">
            <h4 className="text-lg font-semibold text-white mb-4">Solution</h4>
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <div className="text-center">
                {typeof result === 'number' || typeof result === 'string' ? (
                  <BlockMath math={String(result)} />
                ) : (
                  <span className="text-gray-300">{String(result)}</span>
                )}
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="backdrop-blur-sm bg-white/10 rounded-xl p-6 border border-white/20 shadow-xl">
            <h4 className="text-lg font-semibold text-white mb-4">Steps</h4>
            <div className="space-y-2">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white/5 rounded-lg p-3 border border-white/10 animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <span className="text-gray-300 text-sm">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Graph Display */}
      {showGraph && graphExpression && (
        <div className="backdrop-blur-sm bg-white/10 rounded-xl p-6 border border-white/20 shadow-xl">
          <div className="flex items-center mb-4">
            <TrendingUp className="h-5 w-5 mr-2 text-green-400" />
            <h4 className="text-lg font-semibold text-white">Graph Visualization</h4>
          </div>
          <GraphDisplay expression={graphExpression} />
        </div>
      )}
    </div>
  );
};

export default MathSolver;
