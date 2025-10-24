
import React, { useState, useEffect, useRef } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, ScatterChart, Scatter } from 'recharts';
import FuturisticCard from './FuturisticCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ZoomIn, ZoomOut, RotateCcw, Volume2, VolumeX } from 'lucide-react';
import { evaluate, complex } from 'mathjs';

const EnhancedGraph: React.FC = () => {
  const [equation, setEquation] = useState('sin(x)');
  const [zoom, setZoom] = useState(1);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const audioContextRef = useRef<AudioContext | null>(null);
  
  // Initialize audio context
  useEffect(() => {
    if (typeof window !== 'undefined' && soundEnabled) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, [soundEnabled]);

  // Play sound effect
  const playSound = (frequency: number, duration: number = 100) => {
    if (!soundEnabled || !audioContextRef.current) return;
    
    const oscillator = audioContextRef.current.createOscillator();
    const gainNode = audioContextRef.current.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContextRef.current.destination);
    
    oscillator.frequency.setValueAtTime(frequency, audioContextRef.current.currentTime);
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.1, audioContextRef.current.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContextRef.current.currentTime + duration / 1000);
    
    oscillator.start(audioContextRef.current.currentTime);
    oscillator.stop(audioContextRef.current.currentTime + duration / 1000);
  };
  
  // Generate data points for the graph
  const generateData = (eq: string) => {
    const realData = [];
    const imaginaryData = [];
    const complexData = [];
    
    for (let x = -10 * zoom; x <= 10 * zoom; x += 0.1 * zoom) {
      try {
        const xVal = x;
        let result;

        // Replace common math notation
        const cleanEq = eq
          .replace(/\^/g, '^')
          .replace(/sin/g, 'sin')
          .replace(/cos/g, 'cos')
          .replace(/tan/g, 'tan')
          .replace(/log/g, 'log')
          .replace(/ln/g, 'log')
          .replace(/sqrt/g, 'sqrt')
          .replace(/abs/g, 'abs')
          .replace(/exp/g, 'exp');

        try {
          // Try to evaluate the expression
          const expr = cleanEq.replace(/x/g, `(${xVal})`);
          result = evaluate(expr);
        } catch {
          // Fallback for common functions
          switch (eq.toLowerCase()) {
            case 'sin(x)':
              result = Math.sin(xVal);
              break;
            case 'cos(x)':
              result = Math.cos(xVal);
              break;
            case 'tan(x)':
              result = Math.tan(xVal);
              break;
            case 'x^2':
            case 'x²':
              result = xVal * xVal;
              break;
            case 'x^3':
            case 'x³':
              result = xVal * xVal * xVal;
              break;
            case 'sqrt(x)':
            case '√x':
              result = xVal >= 0 ? Math.sqrt(xVal) : complex(0, Math.sqrt(-xVal));
              break;
            case 'log(x)':
            case 'ln(x)':
              result = xVal > 0 ? Math.log(xVal) : complex(Math.log(-xVal), Math.PI);
              break;
            case '1/x':
              result = xVal !== 0 ? 1 / xVal : Infinity;
              break;
            case 'e^x':
            case 'exp(x)':
              result = Math.exp(xVal);
              break;
            default:
              result = Math.sin(xVal);
          }
        }

        // Handle complex numbers
        if (typeof result === 'object' && result !== null && 're' in result && 'im' in result) {
          // Complex number
          if (Math.abs(result.re) > 1e-10) {
            realData.push({ x: Number(xVal.toFixed(2)), y: Number(result.re.toFixed(3)) });
          }
          if (Math.abs(result.im) > 1e-10) {
            imaginaryData.push({ x: Number(xVal.toFixed(2)), y: Number(result.im.toFixed(3)) });
          }
          complexData.push({ 
            x: Number(xVal.toFixed(2)), 
            real: Number(result.re.toFixed(3)), 
            imaginary: Number(result.im.toFixed(3)) 
          });
        } else if (typeof result === 'number' && !isNaN(result) && isFinite(result)) {
          // Real number
          realData.push({ x: Number(xVal.toFixed(2)), y: Number(result.toFixed(3)) });
        }
      } catch (error) {
        // Skip invalid points
        console.log('Error at x =', x, ':', error);
      }
    }
    
    return { realData, imaginaryData, complexData };
  };

  const { realData, imaginaryData, complexData } = generateData(equation);

  const handleZoomIn = () => {
    setZoom(z => Math.max(0.1, z - 0.2));
    playSound(800, 50);
  };

  const handleZoomOut = () => {
    setZoom(z => Math.min(5, z + 0.2));
    playSound(600, 50);
  };

  const handleReset = () => {
    setZoom(1);
    playSound(1000, 100);
  };

  const handleEquationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEquation(e.target.value);
    playSound(400, 30);
  };

  return (
    <FuturisticCard className="h-auto min-h-96">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Enhanced Function Grapher
        </h3>
        <div className="flex gap-2">
          <Button 
            size="sm" 
            variant="outline" 
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="border-blue-500/30 hover:border-blue-500/50"
          >
            {soundEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
          </Button>
          <Button 
            size="sm" 
            variant="outline" 
            onClick={handleZoomIn}
            className="border-blue-500/30 hover:border-blue-500/50"
          >
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button 
            size="sm" 
            variant="outline" 
            onClick={handleZoomOut}
            className="border-blue-500/30 hover:border-blue-500/50"
          >
            <ZoomOut className="h-4 w-4" />
          </Button>
          <Button 
            size="sm" 
            variant="outline" 
            onClick={handleReset}
            className="border-blue-500/30 hover:border-blue-500/50"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="mb-4">
        <Input
          value={equation}
          onChange={handleEquationChange}
          placeholder="Enter function: sin(x), cos(x), x^2, sqrt(x), log(x), 1/x, etc."
          className="bg-slate-800/50 border-slate-600/50 text-white"
        />
        <div className="mt-2 text-xs text-slate-400">
          Supports: trigonometric, polynomial, logarithmic, exponential, and complex functions
        </div>
      </div>

      {/* Real Function Graph */}
      {realData.length > 0 && (
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-blue-400 mb-2">Real Part</h4>
          <div className="h-64 bg-slate-900/30 rounded-lg p-2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={realData}>
                <CartesianGrid 
                  strokeDasharray="3 3" 
                  stroke="#334155" 
                  strokeOpacity={0.3}
                />
                <XAxis 
                  dataKey="x" 
                  stroke="#64748b"
                  fontSize={12}
                  domain={['dataMin', 'dataMax']}
                />
                <YAxis 
                  stroke="#64748b"
                  fontSize={12}
                />
                <Line 
                  type="monotone" 
                  dataKey="y" 
                  stroke="#3b82f6" 
                  strokeWidth={2}
                  dot={false}
                  strokeOpacity={0.8}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Imaginary Function Graph */}
      {imaginaryData.length > 0 && (
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-purple-400 mb-2">Imaginary Part</h4>
          <div className="h-64 bg-slate-900/30 rounded-lg p-2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={imaginaryData}>
                <CartesianGrid 
                  strokeDasharray="3 3" 
                  stroke="#334155" 
                  strokeOpacity={0.3}
                />
                <XAxis 
                  dataKey="x" 
                  stroke="#64748b"
                  fontSize={12}
                  domain={['dataMin', 'dataMax']}
                />
                <YAxis 
                  stroke="#64748b"
                  fontSize={12}
                />
                <Line 
                  type="monotone" 
                  dataKey="y" 
                  stroke="#a855f7" 
                  strokeWidth={2}
                  dot={false}
                  strokeOpacity={0.8}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Complex Plane Visualization */}
      {complexData.length > 0 && (
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-emerald-400 mb-2">Complex Plane (Real vs Imaginary)</h4>
          <div className="h-64 bg-slate-900/30 rounded-lg p-2">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart data={complexData}>
                <CartesianGrid 
                  strokeDasharray="3 3" 
                  stroke="#334155" 
                  strokeOpacity={0.3}
                />
                <XAxis 
                  dataKey="real" 
                  stroke="#64748b"
                  fontSize={12}
                  name="Real"
                />
                <YAxis 
                  dataKey="imaginary"
                  stroke="#64748b"
                  fontSize={12}
                  name="Imaginary"
                />
                <Scatter 
                  dataKey="imaginary" 
                  fill="#10b981"
                />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Function Info */}
      <div className="mt-4 p-3 bg-slate-800/30 rounded-lg border border-slate-600/30">
        <div className="text-xs text-slate-300">
          <div className="mb-1"><strong>Current function:</strong> y = {equation}</div>
          <div className="mb-1"><strong>Zoom level:</strong> {zoom.toFixed(1)}x</div>
          <div className="mb-1"><strong>Domain:</strong> [{(-10 * zoom).toFixed(1)}, {(10 * zoom).toFixed(1)}]</div>
          <div className="flex gap-4 mt-2">
            {realData.length > 0 && <span className="text-blue-400">● Real points: {realData.length}</span>}
            {imaginaryData.length > 0 && <span className="text-purple-400">● Imaginary points: {imaginaryData.length}</span>}
            {complexData.length > 0 && <span className="text-emerald-400">● Complex points: {complexData.length}</span>}
          </div>
        </div>
      </div>
    </FuturisticCard>
  );
};

export default EnhancedGraph;
