
import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import { evaluate } from 'mathjs';

interface GraphDisplayProps {
  expression: string;
}

const GraphDisplay: React.FC<GraphDisplayProps> = ({ expression }) => {
  const [plotData, setPlotData] = useState<any[]>([]);

  useEffect(() => {
    try {
      // Generate x values
      const xValues = [];
      const yValues = [];
      
      for (let x = -10; x <= 10; x += 0.1) {
        try {
          // Replace 'x' with the actual value and evaluate
          const expr = expression.replace(/x/g, `(${x})`);
          const y = evaluate(expr);
          
          if (typeof y === 'number' && !isNaN(y) && isFinite(y)) {
            xValues.push(x);
            yValues.push(y);
          }
        } catch (error) {
          // Skip invalid points
        }
      }

      if (xValues.length > 0) {
        setPlotData([
          {
            x: xValues,
            y: yValues,
            type: 'scatter',
            mode: 'lines',
            line: {
              color: '#3b82f6',
              width: 3,
            },
            name: `y = ${expression}`,
          },
        ]);
      }
    } catch (error) {
      console.error('Error generating graph:', error);
    }
  }, [expression]);

  if (plotData.length === 0) {
    return (
      <div className="h-96 flex items-center justify-center bg-white/5 rounded-lg border border-white/10">
        <span className="text-gray-400">Unable to generate graph for this expression</span>
      </div>
    );
  }

  return (
    <div className="bg-white/5 rounded-lg border border-white/10 p-4">
      <Plot
        data={plotData}
        layout={{
          width: undefined,
          height: 400,
          plot_bgcolor: 'rgba(0,0,0,0)',
          paper_bgcolor: 'rgba(0,0,0,0)',
          font: { color: '#e5e7eb' },
          xaxis: {
            gridcolor: 'rgba(255,255,255,0.1)',
            zerolinecolor: 'rgba(255,255,255,0.3)',
            color: '#e5e7eb',
          },
          yaxis: {
            gridcolor: 'rgba(255,255,255,0.1)',
            zerolinecolor: 'rgba(255,255,255,0.3)',
            color: '#e5e7eb',
          },
          margin: { l: 50, r: 50, t: 50, b: 50 },
        }}
        config={{
          displayModeBar: true,
          displaylogo: false,
          modeBarButtonsToRemove: ['pan2d', 'lasso2d', 'select2d'],
        }}
        style={{ width: '100%' }}
      />
    </div>
  );
};

export default GraphDisplay;
