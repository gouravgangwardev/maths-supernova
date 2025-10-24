import { ReactNode } from 'react';
import { BookOpen, Zap, Calculator, BarChart2, Cpu, Activity, Code, Layers, TrendingUp, CircleDot } from 'lucide-react';

export interface Domain {
  id: string;
  name: string;
  icon: ReactNode;
}

export interface TopicContent {
  definition: string;
  formulas: string[];
  examples: { problem: string; solution: string }[];
}

export const domains: Domain[] = [
  { id: 'arithmetic', name: 'Arithmetic', icon: <Zap /> },
  { id: 'algebra', name: 'Algebra', icon: <Calculator /> },
  { id: 'calculus', name: 'Calculus', icon: <Activity /> },
  { id: 'statistics', name: 'Statistics', icon: <BarChart2 /> },
  { id: 'graphing', name: 'Graphing', icon: <TrendingUp /> },
  { id: 'pde', name: 'Partial Differential Equations', icon: <BookOpen /> },
  { id: 'fourier', name: 'Fourier & Laplace Transforms', icon: <Layers /> },
  { id: 'numerical', name: 'Numerical Methods', icon: <Cpu /> },
  { id: 'optimization', name: 'Optimization & Operations Research', icon: <Code /> },
  { id: 'probability', name: 'Probability & Stochastic Processes', icon: <CircleDot /> },
  { id: 'set-theory', name: 'Set Theory & Mathematical Logic', icon: <BookOpen /> },
  { id: 'combinatorics', name: 'Combinatorics & Graph Theory', icon: <BarChart2 /> },
  { id: 'information-theory', name: 'Information Theory & Cryptography', icon: <Code /> },
  { id: 'mathematical-physics', name: 'Mathematical Physics', icon: <Activity /> },
  { id: 'chaos', name: 'Chaos Theory & Dynamical Systems', icon: <TrendingUp /> },
  { id: 'machine-learning', name: 'Mathematics of Machine Learning', icon: <Layers /> },
  { id: 'linear-algebra', name: 'Linear Algebra', icon: <Calculator /> },
  { id: 'discrete-mathematics', name: 'Discrete Mathematics', icon: <Code /> },
  { id: 'differential-equations', name: 'Differential Equations', icon: <Activity /> },
  { id: 'real-complex-analysis', name: 'Real & Complex Analysis', icon: <BookOpen /> },
  { id: 'topology', name: 'Topology', icon: <CircleDot /> },
  { id: 'differential-geometry', name: 'Differential Geometry', icon: <TrendingUp /> },
  { id: 'measure-theory', name: 'Measure Theory & Integration', icon: <BarChart2 /> },
  { id: 'functional-analysis', name: 'Functional Analysis', icon: <Layers /> },
  { id: 'abstract-algebra', name: 'Abstract Algebra', icon: <Calculator /> },
];

const topicContentDatabase: Record<string, Record<string, TopicContent>> = {
  'Arithmetic': {
    'Basic Operations': {
      definition: 'Arithmetic involves basic operations such as addition, subtraction, multiplication, and division on numbers.',
      formulas: [
        'a + b = c',
        'a - b = c',
        'a \\times b = c',
        '\\frac{a}{b} = c',
      ],
      examples: [
        { problem: '3 + 5', solution: '8' },
        { problem: '10 - 4', solution: '6' },
        { problem: '6 \\times 7', solution: '42' },
        { problem: '\\frac{20}{5}', solution: '4' },
      ],
    },
  },
  'Algebra': {
    'Quadratic Equations': {
      definition: 'Quadratic equations are polynomial equations of degree 2, typically in the form ax^2 + bx + c = 0.',
      formulas: [
        'ax^2 + bx + c = 0',
        'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
      ],
      examples: [
        { problem: 'x^2 - 5x + 6 = 0', solution: 'x = 2, 3' },
        { problem: '2x^2 + 3x - 2 = 0', solution: 'x = \\frac{1}{2}, -2' },
      ],
    },
  },
  'Calculus': {
    'Derivatives': {
      definition: 'Derivatives represent the rate of change of a function with respect to a variable.',
      formulas: [
        '\\frac{d}{dx} x^n = n x^{n-1}',
        '\\frac{d}{dx} \\sin x = \\cos x',
        '\\frac{d}{dx} \\cos x = -\\sin x',
      ],
      examples: [
        { problem: '\\frac{d}{dx} x^3', solution: '3x^2' },
        { problem: '\\frac{d}{dx} \\sin x', solution: '\\cos x' },
      ],
    },
  },
  'Statistics': {
    'Mean & Variance': {
      definition: 'Mean is the average of data points, and variance measures the spread of data around the mean.',
      formulas: [
        '\\text{Mean } \\mu = \\frac{1}{n} \\sum_{i=1}^n x_i',
        '\\text{Variance } \\sigma^2 = \\frac{1}{n} \\sum_{i=1}^n (x_i - \\mu)^2',
      ],
      examples: [
        { problem: 'Data: [2, 4, 6, 8]', solution: 'Mean = 5, Variance = 5' },
      ],
    },
  },
  'Graphing': {
    'Plotting Functions': {
      definition: 'Graphing involves plotting functions to visualize their behavior over a domain.',
      formulas: [],
      examples: [
        { problem: 'Plot y = x^2', solution: 'Parabola opening upwards' },
        { problem: 'Plot y = \\sin x', solution: 'Periodic wave' },
      ],
    },
  },
  'Partial Differential Equations': {
    'Wave & Heat Equations': {
      definition: 'The wave equation describes vibrations and wave propagation, while the heat equation models diffusion processes. The wave equation is hyperbolic (∂²u/∂t² = c²∂²u/∂x²) and solutions are traveling waves. The heat equation is parabolic (∂u/∂t = k∂²u/∂x²) and has a smoothing effect on initial conditions.',
      formulas: [
        '\\text{Wave equation: } \\frac{\\partial^2 u}{\\partial t^2} = c^2 \\frac{\\partial^2 u}{\\partial x^2}',
        '\\text{General solution: } u(x,t) = f(x-ct) + g(x+ct)',
        '\\text{Heat equation: } \\frac{\\partial u}{\\partial t} = k \\frac{\\partial^2 u}{\\partial x^2}',
        '\\text{Laplace equation: } \\frac{\\partial^2 u}{\\partial x^2} + \\frac{\\partial^2 u}{\\partial y^2} = 0',
      ],
      examples: [
        { problem: '\\text{Vibrating string with fixed ends}', solution: 'u(x,t) = \\sum A_n \\sin(\\frac{n\\pi x}{L}) \\cos(\\frac{n\\pi ct}{L})' },
        { problem: '\\text{Heat conduction in rod}', solution: 'u(x,t) = \\sum B_n e^{-\\frac{n^2\\pi^2 kt}{L^2}} \\sin(\\frac{n\\pi x}{L})' },
        { problem: '\\text{Steady-state temperature}', solution: '\\text{Solve Laplace equation with boundary conditions}' },
      ],
    },
    'Method of Characteristics': {
      definition: 'The method of characteristics solves first-order PDEs by converting them into systems of ODEs along characteristic curves. It reduces the PDE to ordinary differential equations along special curves called characteristics, where the PDE becomes an ODE.',
      formulas: [
        '\\text{First-order PDE: } a(x,y,u)u_x + b(x,y,u)u_y = c(x,y,u)',
        '\\text{Characteristic equations: } \\frac{dx}{a} = \\frac{dy}{b} = \\frac{du}{c}',
        '\\text{Example: } u_x + u_y = 0 \\text{ has characteristics } x - y = \\text{constant}',
      ],
      examples: [
        { problem: 'u_x + u_y = 0, u(x,0) = \\sin(x)', solution: 'u(x,y) = \\sin(x-y)' },
        { problem: 'u_x + 2u_y = 0, u(x,0) = e^{-x^2}', solution: 'u(x,y) = e^{-(x-2y)^2}' },
        { problem: '\\text{Traffic flow PDE}', solution: '\\text{Use characteristics to track vehicle density}' },
      ],
    },
    'Green\'s Functions': {
      definition: 'Green\'s functions provide a powerful method for solving linear inhomogeneous PDEs by representing the solution as an integral involving the Green\'s function and the source term. The Green\'s function represents the response to a point source or impulse.',
      formulas: [
        '\\text{For } Lu = f, \\text{ solution is } u(x) = \\int G(x,s) f(s) ds',
        '\\text{1D example: } -u\'\'(x) = f(x), u(0) = u(1) = 0',
        'G(x,s) = \\begin{cases} x(1-s) & x < s \\\\ s(1-x) & x \\geq s \\end{cases}',
        '\\text{Laplace Green\'s function in 2D: } G = \\frac{1}{2\\pi} \\ln|x-y|',
      ],
      examples: [
        { problem: '\\text{Solve } -u\'\'(x) = \\delta(x-a)', solution: 'u(x) = G(x,a) \\text{ (Green\'s function)}' },
        { problem: '\\text{Poisson equation with point source}', solution: '\\text{Use fundamental solution as Green\'s function}' },
        { problem: '\\text{Heat equation with source}', solution: '\\text{Convolution with heat kernel}' },
      ],
    },
  },
  'Fourier & Laplace Transforms': {
    'Fourier Series & Transforms': {
      definition: 'Fourier series decompose periodic functions into sums of sines and cosines, revealing frequency components. The Fourier transform extends this to non-periodic functions, converting between time and frequency domains. Essential for signal processing and solving PDEs.',
      formulas: [
        'f(x) = a_0 + \\sum_{n=1}^\\infty [a_n \\cos(nx) + b_n \\sin(nx)]',
        'a_n = \\frac{1}{\\pi} \\int_{-\\pi}^\\pi f(x) \\cos(nx) dx',
        'b_n = \\frac{1}{\\pi} \\int_{-\\pi}^\\pi f(x) \\sin(nx) dx',
        '\\mathcal{F}(f)(\\omega) = \\int_{-\\infty}^\\infty f(t) e^{-i\\omega t} dt',
      ],
      examples: [
        { problem: '\\text{Square wave Fourier series}', solution: 'f(x) = \\frac{4}{\\pi} \\sum_{n \\text{ odd}} \\frac{\\sin(nx)}{n}' },
        { problem: '\\text{Fourier transform of } e^{-|t|}', solution: '\\mathcal{F}(f)(\\omega) = \\frac{2}{1 + \\omega^2}' },
        { problem: '\\text{Heat equation solution}', solution: '\\text{Use Fourier series with exponential time decay}' },
      ],
    },
    'Laplace Transform': {
      definition: 'The Laplace transform converts functions of time into functions of a complex variable s, transforming differential equations into algebraic equations. It is particularly useful for solving initial value problems and analyzing linear time-invariant systems.',
      formulas: [
        '\\mathcal{L}\\{f(t)\\} = F(s) = \\int_0^\\infty e^{-st} f(t) dt',
        '\\mathcal{L}\\{1\\} = \\frac{1}{s}, \\mathcal{L}\\{t^n\\} = \\frac{n!}{s^{n+1}}',
        '\\mathcal{L}\\{e^{at}\\} = \\frac{1}{s-a}, \\mathcal{L}\\{\\sin(\\omega t)\\} = \\frac{\\omega}{s^2 + \\omega^2}',
        '\\text{Convolution: } \\mathcal{L}(f * g) = \\mathcal{L}(f) \\cdot \\mathcal{L}(g)',
      ],
      examples: [
        { problem: '\\text{Solve } y\'\' + y = 0, y(0) = 0, y\'(0) = 1', solution: '\\text{Transform, solve algebraically, inverse transform}' },
        { problem: '\\mathcal{L}\\{t \\cos(\\omega t)\\}', solution: '\\frac{s^2 - \\omega^2}{(s^2 + \\omega^2)^2}' },
        { problem: '\\text{Circuit analysis with Laplace}', solution: '\\text{Transform differential equations to algebraic}' },
      ],
    },
    'Discrete Fourier Transform': {
      definition: 'The DFT transforms finite sequences into frequency domain representations, enabling efficient computation via the Fast Fourier Transform (FFT). It is fundamental to digital signal processing, image processing, and numerical computation.',
      formulas: [
        'X_k = \\sum_{n=0}^{N-1} x_n e^{-2\\pi i kn/N}, k = 0,1,\\ldots,N-1',
        '\\text{Inverse DFT: } x_n = \\frac{1}{N} \\sum_{k=0}^{N-1} X_k e^{2\\pi i kn/N}',
        '\\text{FFT complexity: } O(N \\log N) \\text{ vs } O(N^2)',
        '\\text{Convolution theorem: } \\mathcal{F}(f * g) = \\mathcal{F}(f) \\cdot \\mathcal{F}(g)',
      ],
      examples: [
        { problem: '\\text{DFT of } [1,2,3,4]', solution: '\\text{Compute using DFT formula or FFT algorithm}' },
        { problem: '\\text{Audio compression}', solution: '\\text{Use DFT to identify frequency components}' },
        { problem: '\\text{Image filtering}', solution: '\\text{Apply DFT, modify frequencies, inverse DFT}' },
      ],
    },
  },
  'Numerical Methods': {
    'Finite Difference Methods': {
      definition: 'Finite difference methods approximate derivatives using discrete points, converting continuous problems into discrete ones. They are fundamental for numerically solving differential equations by replacing derivatives with difference quotients on a grid.',
      formulas: [
        '\\text{Forward difference: } f\'(x) \\approx \\frac{f(x+h) - f(x)}{h}',
        '\\text{Backward difference: } f\'(x) \\approx \\frac{f(x) - f(x-h)}{h}',
        '\\text{Central difference: } f\'(x) \\approx \\frac{f(x+h) - f(x-h)}{2h}',
        '\\text{Second derivative: } f\'\'(x) \\approx \\frac{f(x+h) - 2f(x) + f(x-h)}{h^2}',
      ],
      examples: [
        { problem: '\\text{Approximate } e\'(0) \\text{ with } h = 0.1', solution: '\\frac{e^{0.1} - e^0}{0.1} \\approx 1.052' },
        { problem: '\\text{Solve heat equation numerically}', solution: '\\text{Use explicit or implicit finite difference schemes}' },
        { problem: '\\text{Wave equation on grid}', solution: '\\text{Apply finite difference to space and time derivatives}' },
      ],
    },
    'Newton-Raphson Method': {
      definition: 'The Newton-Raphson method finds roots of nonlinear equations using iterative improvement based on linear approximation. It has quadratic convergence when started near a root, making it very efficient for well-behaved functions.',
      formulas: [
        'x_{n+1} = x_n - \\frac{f(x_n)}{f\'(x_n)}',
        '\\text{Convergence condition: good initial guess and } f\'(x) \\neq 0',
        '\\text{Multivariable: } \\mathbf{x}_{n+1} = \\mathbf{x}_n - J^{-1}(\\mathbf{x}_n) \\mathbf{f}(\\mathbf{x}_n)',
      ],
      examples: [
        { problem: '\\text{Find } \\sqrt{2} \\text{ as root of } x^2 - 2 = 0', solution: 'x_{n+1} = \\frac{1}{2}(x_n + \\frac{2}{x_n})' },
        { problem: '\\text{Solve } x^3 - x - 1 = 0', solution: '\\text{Iterate from initial guess } x_0 = 1.5' },
        { problem: '\\text{Optimization problems}', solution: '\\text{Apply to } \\nabla f(x) = 0' },
      ],
    },
    'Runge-Kutta Methods': {
      definition: 'Runge-Kutta methods solve ordinary differential equations numerically by using weighted averages of slope estimates. The 4th-order method (RK4) provides high accuracy and is widely used in scientific computing and simulations.',
      formulas: [
        'k_1 = h f(x_n, y_n)',
        'k_2 = h f(x_n + h/2, y_n + k_1/2)',
        'k_3 = h f(x_n + h/2, y_n + k_2/2)',
        'k_4 = h f(x_n + h, y_n + k_3)',
        'y_{n+1} = y_n + \\frac{1}{6}(k_1 + 2k_2 + 2k_3 + k_4)',
      ],
      examples: [
        { problem: '\\text{Solve } y\' = y, y(0) = 1 \\text{ with } h = 0.1', solution: '\\text{Apply RK4 formula iteratively}' },
        { problem: '\\text{Pendulum motion}', solution: '\\text{Convert to system of first-order ODEs}' },
        { problem: '\\text{Orbital mechanics}', solution: '\\text{Use RK4 for position and velocity}' },
      ],
    },
  },
  'Optimization & Operations Research': {
    'Linear Programming': {
      definition: 'Linear programming optimizes linear objective functions subject to linear constraints. The feasible region is a convex polytope, and optimal solutions occur at vertices. The simplex method efficiently moves between vertices to find the optimum.',
      formulas: [
        '\\text{Standard form: Maximize } c^T x \\text{ subject to } Ax \\leq b, x \\geq 0',
        '\\text{Fundamental theorem: Optimal solution at vertex of feasible region}',
        '\\text{Duality: Every LP has an associated dual problem}',
        '\\text{Strong duality: Primal and dual optimal values are equal}',
      ],
      examples: [
        { problem: '\\text{Maximize } 3x + 2y \\text{ subject to } x + y \\leq 4, x \\leq 2, y \\leq 3', solution: '\\text{Optimal at } (2,2) \\text{ with value } 10' },
        { problem: '\\text{Production planning}', solution: '\\text{Maximize profit subject to resource constraints}' },
        { problem: '\\text{Transportation problem}', solution: '\\text{Minimize cost of shipping goods}' },
      ],
    },
    'Nonlinear Optimization': {
      definition: 'Nonlinear optimization deals with objective functions or constraints that are not linear. Methods include gradient descent, Newton\'s method, and Lagrange multipliers. The KKT conditions provide necessary conditions for constrained optima.',
      formulas: [
        '\\text{Gradient descent: } x_{n+1} = x_n - \\eta \\nabla f(x_n)',
        '\\text{Lagrangian: } L(x,\\lambda) = f(x) + \\sum \\lambda_i g_i(x)',
        '\\text{KKT conditions: } \\nabla f = \\sum \\lambda_i \\nabla g_i, \\lambda_i g_i = 0',
        '\\text{Newton\'s method: } x_{n+1} = x_n - H^{-1} \\nabla f',
      ],
      examples: [
        { problem: '\\text{Minimize } x^2 + y^2 \\text{ subject to } x + y = 1', solution: '\\text{Use Lagrange multipliers: solution } (1/2, 1/2)' },
        { problem: '\\text{Portfolio optimization}', solution: '\\text{Minimize risk subject to return constraints}' },
        { problem: '\\text{Neural network training}', solution: '\\text{Minimize loss function using gradient descent}' },
      ],
    },
    'Convex Optimization': {
      definition: 'Convex optimization studies problems where the objective function and feasible set are convex. These problems have unique global minima and efficient solution methods. Many machine learning problems are formulated as convex optimization.',
      formulas: [
        '\\text{Convex function: } f(\\lambda x + (1-\\lambda)y) \\leq \\lambda f(x) + (1-\\lambda)f(y)',
        '\\text{Jensen\'s inequality: } f(E[X]) \\leq E[f(X)]',
        '\\text{Convex set: line segment between any two points lies in set}',
        '\\text{Local minimum = global minimum for convex functions}',
      ],
      examples: [
        { problem: '\\text{Show } f(x) = x^2 \\text{ is convex}', solution: '\\text{Second derivative } f\'\'(x) = 2 > 0' },
        { problem: '\\text{Support Vector Machine}', solution: '\\text{Convex quadratic programming problem}' },
        { problem: '\\text{Logistic regression}', solution: '\\text{Convex log-likelihood optimization}' },
      ],
    },
  },
  'Probability & Stochastic Processes': {
    'Markov Chains': {
      definition: 'Markov chains are stochastic processes where the next state depends only on the current state, not the history. They are characterized by transition matrices and can have absorbing states, transient states, and steady-state distributions.',
      formulas: [
        'P(X_{n+1} = j | X_n = i, X_{n-1}, \\ldots) = P(X_{n+1} = j | X_n = i)',
        '\\text{Transition matrix: } P_{ij} = P(X_{n+1} = j | X_n = i)',
        '\\text{Chapman-Kolmogorov: } P^{(n+m)} = P^{(n)} P^{(m)}',
        '\\text{Steady state: } \\pi P = \\pi, \\sum \\pi_i = 1',
      ],
      examples: [
        { problem: '\\text{Random walk on integers}', solution: '\\text{States are integers, transition probabilities } p, 1-p' },
        { problem: '\\text{Weather model}', solution: '\\text{States: sunny, cloudy, rainy with transition matrix}' },
        { problem: '\\text{PageRank algorithm}', solution: '\\text{Web pages as states, links as transitions}' },
      ],
    },
    'Brownian Motion': {
      definition: 'Brownian motion is a continuous-time stochastic process modeling random motion. It has independent increments, continuous paths, and increments are normally distributed. It is fundamental in physics, finance, and stochastic calculus.',
      formulas: [
        'B(0) = 0, B(t) - B(s) \\sim N(0, t-s)',
        'E[B(t)] = 0, \\text{Var}(B(t)) = t',
        '\\text{Paths are continuous but nowhere differentiable}',
        '\\text{Quadratic variation: } [B]_t = t',
      ],
      examples: [
        { problem: '\\text{Particle diffusion}', solution: '\\text{Position follows Brownian motion}' },
        { problem: '\\text{Stock price model}', solution: 'dS = \\mu S dt + \\sigma S dB \\text{ (geometric Brownian motion)}' },
        { problem: '\\text{Random walk limit}', solution: '\\text{Scaled random walk converges to Brownian motion}' },
      ],
    },
    'Stochastic Calculus': {
      definition: 'Stochastic calculus extends calculus to stochastic processes. Itô\'s lemma is the stochastic chain rule, essential for derivatives pricing and stochastic differential equations. It accounts for the quadratic variation of Brownian motion.',
      formulas: [
        '\\text{Itô integral: } \\int_0^t f(s) dB(s)',
        '\\text{Itô\'s lemma: } df = (\\frac{\\partial f}{\\partial t} + \\mu \\frac{\\partial f}{\\partial x} + \\frac{1}{2}\\sigma^2 \\frac{\\partial^2 f}{\\partial x^2})dt + \\sigma \\frac{\\partial f}{\\partial x}dB',
        '\\text{Stochastic differential equation: } dX = \\mu(X,t)dt + \\sigma(X,t)dB',
        '(dB)^2 = dt \\text{ (Itô multiplication rule)}',
      ],
      examples: [
        { problem: '\\text{Black-Scholes equation}', solution: '\\text{Apply Itô\'s lemma to } f(S,t) \\text{ where } dS = \\mu S dt + \\sigma S dB' },
        { problem: '\\text{Ornstein-Uhlenbeck process}', solution: 'dX = -\\theta X dt + \\sigma dB \\text{ (mean reverting)}' },
        { problem: '\\text{Option pricing}', solution: '\\text{Use risk-neutral measure and stochastic calculus}' },
      ],
    },
  },
  'Set Theory & Mathematical Logic': {
    'Zermelo-Fraenkel Axioms': {
      definition: 'ZF set theory provides axiomatic foundations for mathematics, avoiding paradoxes of naive set theory. ZFC adds the Axiom of Choice. These axioms define what sets exist and how they can be constructed, forming the basis of modern mathematics.',
      formulas: [
        '\\text{Extensionality: } \\forall x (x \\in A \\leftrightarrow x \\in B) \\rightarrow A = B',
        '\\text{Empty set: } \\exists A \\forall x (x \\notin A)',
        '\\text{Pairing: } \\forall a,b \\exists A (a \\in A \\land b \\in A)',
        '\\text{Power set: } \\forall A \\exists P \\forall x (x \\in P \\leftrightarrow x \\subseteq A)',
      ],
      examples: [
        { problem: '\\text{Russell\'s paradox resolution}', solution: '\\text{Unrestricted comprehension not allowed in ZF}' },
        { problem: '\\text{Natural number construction}', solution: '0 = \\emptyset, 1 = \\{\\emptyset\\}, 2 = \\{\\emptyset, \\{\\emptyset\\}\\}' },
        { problem: '\\text{Axiom of Choice consequences}', solution: '\\text{Banach-Tarski paradox, well-ordering theorem}' },
      ],
    },
    'Gödel\'s Incompleteness': {
      definition: 'Gödel\'s incompleteness theorems show fundamental limitations of formal systems. The first theorem proves that any consistent system containing arithmetic has true but unprovable statements. The second shows systems cannot prove their own consistency.',
      formulas: [
        '\\text{First theorem: Consistent + Complete } \\rightarrow \\text{ Not recursively enumerable}',
        '\\text{Second theorem: Consistent system cannot prove its own consistency}',
        '\\text{Gödel numbering: encode formulas as natural numbers}',
        '\\text{Diagonal lemma: construct self-referential statements}',
      ],
      examples: [
        { problem: '\\text{Gödel sentence}', solution: '\\text{Statement asserting its own unprovability}' },
        { problem: '\\text{Arithmetic incompleteness}', solution: '\\text{Peano arithmetic has undecidable statements}' },
        { problem: '\\text{Halting problem}', solution: '\\text{Related undecidability result in computation}' },
      ],
    },
    'Ordinals & Cardinals': {
      definition: 'Ordinals measure order types of well-ordered sets, while cardinals measure sizes of sets. They extend natural numbers into the transfinite, describing different infinities and their properties in precise mathematical terms.',
      formulas: [
        '\\text{Ordinals: } 0, 1, 2, \\ldots, \\omega, \\omega + 1, \\omega \\cdot 2, \\omega^\\omega, \\ldots',
        '\\text{Cardinals: } |\\mathbb{N}| = \\aleph_0, |\\mathbb{R}| = 2^{\\aleph_0}',
        '\\text{Cantor\'s theorem: } |A| < |\\mathcal{P}(A)|',
        '\\text{Continuum hypothesis: } 2^{\\aleph_0} = \\aleph_1',
      ],
      examples: [
        { problem: '\\text{Countable vs uncountable}', solution: '\\mathbb{Q} \\text{ is countable, } \\mathbb{R} \\text{ is uncountable}' },
        { problem: '\\text{Cantor\'s diagonal argument}', solution: '\\text{Proves } |\\mathbb{R}| > |\\mathbb{N}|' },
        { problem: '\\text{Aleph hierarchy}', solution: '\\aleph_0 < \\aleph_1 < \\aleph_2 < \\ldots' },
      ],
    },
  },
  'Combinatorics & Graph Theory': {
    'Generating Functions': {
      definition: 'Generating functions encode sequences as power series, transforming combinatorial problems into algebraic ones. They provide powerful techniques for solving recurrence relations, counting problems, and analyzing asymptotic behavior of sequences.',
      formulas: [
        'G(x) = \\sum_{n=0}^\\infty a_n x^n \\text{ (ordinary generating function)}',
        '\\frac{1}{1-x} = \\sum_{n=0}^\\infty x^n \\text{ (geometric series)}',
        '\\text{Product rule: } [x^n](A(x)B(x)) = \\sum_{k=0}^n a_k b_{n-k}',
        '\\text{Exponential GF: } A(x) = \\sum_{n=0}^\\infty a_n \\frac{x^n}{n!}',
      ],
      examples: [
        { problem: '\\text{Fibonacci generating function}', solution: '\\frac{x}{1-x-x^2} = \\sum F_n x^n' },
        { problem: '\\text{Partition numbers}', solution: '\\prod_{n=1}^\\infty \\frac{1}{1-x^n} \\text{ generates partitions}' },
        { problem: '\\text{Coin change problem}', solution: '\\frac{1}{(1-x)(1-x^5)(1-x^{10})} \\text{ for coins 1,5,10}' },
      ],
    },
    'Graph Coloring': {
      definition: 'Graph coloring assigns colors to vertices so adjacent vertices have different colors. The chromatic number is the minimum colors needed. Applications include scheduling, register allocation, and map coloring problems.',
      formulas: [
        '\\chi(G) = \\text{chromatic number of graph } G',
        '\\chi(K_n) = n \\text{ (complete graph)}',
        '\\chi(C_n) = \\begin{cases} 2 & n \\text{ even} \\\\ 3 & n \\text{ odd} \\end{cases}',
        '\\text{Four Color Theorem: planar graphs have } \\chi(G) \\leq 4',
      ],
      examples: [
        { problem: '\\text{Schedule exams}', solution: '\\text{Vertices = exams, edges = conflicts, color = time slots}' },
        { problem: '\\text{Map coloring}', solution: '\\text{Countries as vertices, borders as edges}' },
        { problem: '\\text{Register allocation}', solution: '\\text{Variables as vertices, conflicts as edges}' },
      ],
    },
    'Network Flows': {
      definition: 'Network flows model the movement of resources through networks. The max-flow min-cut theorem relates maximum flow to minimum cut capacity. Applications include transportation, communication networks, and matching problems.',
      formulas: [
        '\\text{Flow conservation: } \\sum_{v \\in V} f(u,v) = 0 \\text{ for all } u \\neq s,t',
        '\\text{Capacity constraint: } f(u,v) \\leq c(u,v)',
        '\\text{Max-flow min-cut: } |f^*| = \\text{capacity of minimum cut}',
        '\\text{Ford-Fulkerson: find augmenting paths until none exist}',
      ],
      examples: [
        { problem: '\\text{Transportation network}', solution: '\\text{Ship goods from sources to sinks}' },
        { problem: '\\text{Bipartite matching}', solution: '\\text{Reduce to max flow problem}' },
        { problem: '\\text{Project selection}', solution: '\\text{Model profit/cost as flow network}' },
      ],
    },
  },
  'Information Theory & Cryptography': {
    'Entropy & Information': {
      definition: 'Entropy measures the uncertainty or information content of a random variable. Higher entropy means more unpredictability. Mutual information quantifies how much knowing one variable reduces uncertainty about another, fundamental to communication theory.',
      formulas: [
        'H(X) = -\\sum p_i \\log_2 p_i \\text{ (entropy in bits)}',
        'I(X;Y) = H(X) + H(Y) - H(X,Y) \\text{ (mutual information)}',
        'H(X|Y) = H(X,Y) - H(Y) \\text{ (conditional entropy)}',
        '\\text{Chain rule: } H(X,Y) = H(X) + H(Y|X)',
      ],
      examples: [
        { problem: '\\text{Fair coin entropy}', solution: 'H = -\\frac{1}{2} \\log_2 \\frac{1}{2} - \\frac{1}{2} \\log_2 \\frac{1}{2} = 1 \\text{ bit}' },
        { problem: '\\text{Channel capacity}', solution: 'C = \\max_{p(x)} I(X;Y)' },
        { problem: '\\text{Data compression bound}', solution: '\\text{Average code length } \\geq H(X)' },
      ],
    },
    'RSA Cryptography': {
      definition: 'RSA encryption uses number theory for secure communication. Security relies on the difficulty of factoring large composite numbers. It enables public-key cryptography where encryption and decryption use different keys.',
      formulas: [
        '\\text{Key generation: choose primes } p,q, \\text{ compute } n = pq',
        '\\phi(n) = (p-1)(q-1), \\text{ choose } e: \\gcd(e,\\phi(n)) = 1',
        '\\text{Find } d: ed \\equiv 1 \\pmod{\\phi(n)}',
        '\\text{Encrypt: } c \\equiv m^e \\pmod{n}, \\text{ Decrypt: } m \\equiv c^d \\pmod{n}',
      ],
      examples: [
        { problem: '\\text{Small RSA example: } p=3, q=11, e=3', solution: 'n=33, \\phi(n)=20, d=7, \\text{ encrypt/decrypt messages}' },
        { problem: '\\text{Digital signatures}', solution: '\\text{Sign with private key, verify with public key}' },
        { problem: '\\text{Key exchange}', solution: '\\text{Use RSA to securely share symmetric keys}' },
      ],
    },
    'Elliptic Curve Cryptography': {
      definition: 'ECC provides equivalent security to RSA with smaller key sizes by using the algebraic structure of elliptic curves over finite fields. The security relies on the elliptic curve discrete logarithm problem being computationally hard.',
      formulas: [
        '\\text{Elliptic curve: } y^2 = x^3 + ax + b \\pmod{p}',
        '\\text{Point addition: geometric construction over finite field}',
        '\\text{Scalar multiplication: } nP = P + P + \\cdots + P',
        '\\text{ECDLP: given } P, Q, \\text{ find } n: Q = nP',
      ],
      examples: [
        { problem: '\\text{Key generation}', solution: '\\text{Choose private key } d, \\text{ compute } Q = dG' },
        { problem: '\\text{ECDH key exchange}', solution: '\\text{Alice and Bob compute shared secret}' },
        { problem: '\\text{Bitcoin addresses}', solution: '\\text{Use secp256k1 elliptic curve}' },
      ],
    },
  },
  'Mathematical Physics': {
    'Quantum Mechanics': {
      definition: 'Quantum mechanics describes matter and energy at atomic scales using wave functions and probability amplitudes. The Schrödinger equation governs quantum evolution, while observables are represented by Hermitian operators on Hilbert spaces.',
      formulas: [
        'i\\hbar \\frac{\\partial \\psi}{\\partial t} = \\hat{H} \\psi \\text{ (time-dependent Schrödinger)}',
        '\\hat{H} \\psi = E \\psi \\text{ (time-independent eigenvalue equation)}',
        '\\langle \\psi | \\hat{A} | \\psi \\rangle = \\text{expectation value of observable } A',
        '[\\hat{x}, \\hat{p}] = i\\hbar \\text{ (canonical commutation relation)}',
      ],
      examples: [
        { problem: '\\text{Particle in a box}', solution: '\\psi_n(x) = \\sqrt{\\frac{2}{L}} \\sin(\\frac{n\\pi x}{L}), E_n = \\frac{n^2 \\pi^2 \\hbar^2}{2mL^2}' },
        { problem: '\\text{Harmonic oscillator}', solution: 'E_n = \\hbar \\omega (n + \\frac{1}{2})' },
        { problem: '\\text{Hydrogen atom}', solution: 'E_n = -\\frac{13.6 \\text{ eV}}{n^2}' },
      ],
    },
    'Special Relativity': {
      definition: 'Special relativity describes physics in inertial frames at high speeds, where space and time are unified into spacetime. The speed of light is constant for all observers, leading to time dilation, length contraction, and mass-energy equivalence.',
      formulas: [
        '\\gamma = \\frac{1}{\\sqrt{1-v^2/c^2}} \\text{ (Lorentz factor)}',
        '\\Delta t\' = \\gamma \\Delta t \\text{ (time dilation)}',
        'L\' = \\frac{L}{\\gamma} \\text{ (length contraction)}',
        'E = mc^2, E^2 = (pc)^2 + (mc^2)^2 \\text{ (energy-momentum relation)}',
      ],
      examples: [
        { problem: '\\text{Muon decay}', solution: '\\text{Time dilation allows muons to reach Earth surface}' },
        { problem: '\\text{Twin paradox}', solution: '\\text{Accelerating twin ages less due to time dilation}' },
        { problem: '\\text{Particle accelerators}', solution: '\\text{Relativistic momentum and energy calculations}' },
      ],
    },
    'General Relativity': {
      definition: 'General relativity describes gravity as curved spacetime geometry. Mass and energy curve spacetime, and this curvature determines the motion of matter. Einstein\'s field equations relate geometry to energy-momentum distribution.',
      formulas: [
        'R_{\\mu\\nu} - \\frac{1}{2}Rg_{\\mu\\nu} = \\frac{8\\pi G}{c^4}T_{\\mu\\nu} \\text{ (Einstein field equations)}',
        'ds^2 = g_{\\mu\\nu}dx^\\mu dx^\\nu \\text{ (spacetime metric)}',
        '\\text{Geodesic equation: } \\frac{d^2x^\\mu}{d\\tau^2} + \\Gamma^\\mu_{\\nu\\rho} \\frac{dx^\\nu}{d\\tau} \\frac{dx^\\rho}{d\\tau} = 0',
        '\\text{Schwarzschild metric: } ds^2 = -(1-\\frac{2GM}{c^2r})c^2dt^2 + \\frac{dr^2}{1-\\frac{2GM}{c^2r}} + r^2d\\Omega^2',
      ],
      examples: [
        { problem: '\\text{GPS corrections}', solution: '\\text{Account for gravitational time dilation}' },
        { problem: '\\text{Black hole event horizon}', solution: 'r_s = \\frac{2GM}{c^2} \\text{ (Schwarzschild radius)}' },
        { problem: '\\text{Gravitational waves}', solution: '\\text{Ripples in spacetime from accelerating masses}' },
      ],
    },
  },
  'Chaos Theory & Dynamical Systems': {
    'Logistic Map': {
      definition: 'The logistic map x_{n+1} = rx_n(1-x_n) is a simple discrete dynamical system exhibiting complex behavior including fixed points, periodic orbits, and chaos. It serves as a canonical example of how simple nonlinear systems can display intricate dynamics.',
      formulas: [
        'x_{n+1} = rx_n(1-x_n), x_n \\in [0,1], r \\in [0,4]',
        '\\text{Fixed points: } x^* = 0, x^* = 1 - \\frac{1}{r}',
        '\\text{Period-doubling: } r_\\infty \\approx 3.57 \\text{ (onset of chaos)}',
        '\\text{Lyapunov exponent: } \\lambda = \\lim_{n \\to \\infty} \\frac{1}{n} \\sum \\ln|r(1-2x_i)|',
      ],
      examples: [
        { problem: 'r = 2.5, x_0 = 0.3', solution: '\\text{Converges to fixed point } x^* = 0.6' },
        { problem: 'r = 3.2', solution: '\\text{Period-2 cycle between two values}' },
        { problem: 'r = 4', solution: '\\text{Chaotic behavior, sensitive dependence on initial conditions}' },
      ],
    },
    'Strange Attractors': {
      definition: 'Strange attractors are sets that attract nearby trajectories but have fractal geometric structure. They characterize chaotic systems where trajectories remain bounded but never repeat exactly, exhibiting sensitive dependence on initial conditions.',
      formulas: [
        '\\text{Lorenz system: } \\dot{x} = \\sigma(y-x), \\dot{y} = x(\\rho-z)-y, \\dot{z} = xy-\\beta z',
        '\\text{Fractal dimension: } D_f = \\lim_{\\epsilon \\to 0} \\frac{\\log N(\\epsilon)}{\\log(1/\\epsilon)}',
        '\\text{Parameters: } \\sigma = 10, \\rho = 28, \\beta = 8/3 \\text{ (classic values)}',
        '\\text{Poincaré section: intersect attractor with plane}',
      ],
      examples: [
        { problem: '\\text{Lorenz attractor}', solution: '\\text{Butterfly-shaped attractor in 3D phase space}' },
        { problem: '\\text{Rössler attractor}', solution: '\\text{Simpler chaotic system with spiral structure}' },
        { problem: '\\text{Hénon map}', solution: '\\text{2D discrete map with strange attractor}' },
      ],
    },
    'Lyapunov Exponents': {
      definition: 'Lyapunov exponents measure the rate of divergence of nearby trajectories in phase space. Positive exponents indicate chaos and sensitive dependence, while negative exponents suggest stability and convergence to attractors.',
      formulas: [
        '\\lambda = \\lim_{t \\to \\infty} \\frac{1}{t} \\ln \\frac{|\\delta(t)|}{|\\delta(0)|}',
        '\\lambda > 0: \\text{ chaos (exponential divergence)}',
        '\\lambda < 0: \\text{ stability (exponential convergence)}',
        '\\lambda = 0: \\text{ marginal stability (power-law behavior)}',
      ],
      examples: [
        { problem: '\\text{Logistic map at } r = 4', solution: '\\lambda = \\ln 2 \\approx 0.693 > 0 \\text{ (chaotic)}' },
        { problem: '\\text{Fixed point analysis}', solution: '\\text{Negative Lyapunov exponent indicates stability}' },
        { problem: '\\text{Lorenz system}', solution: '\\text{One positive, one zero, one negative exponent}' },
      ],
    },
  },
  'Mathematics of Machine Learning': {
    'Gradient Descent': {
      definition: 'Gradient descent minimizes loss functions by iteratively moving in the direction of steepest descent. It is the fundamental optimization algorithm for training machine learning models, with variants including stochastic and mini-batch versions.',
      formulas: [
        '\\theta := \\theta - \\eta \\nabla_\\theta J(\\theta)',
        '\\text{Stochastic: } \\theta := \\theta - \\eta \\nabla_\\theta J_i(\\theta)',
        '\\text{Mini-batch: } \\theta := \\theta - \\eta \\frac{1}{m} \\sum_{i=1}^m \\nabla_\\theta J_i(\\theta)',
        '\\text{Momentum: } v := \\beta v + (1-\\beta) g, \\theta := \\theta - \\eta v',
      ],
      examples: [
        { problem: '\\text{Linear regression}', solution: '\\nabla_w J = \\frac{2}{n} X^T(Xw - y)' },
        { problem: '\\text{Logistic regression}', solution: '\\nabla_w J = \\frac{1}{n} X^T(\\sigma(Xw) - y)' },
        { problem: '\\text{Neural network}', solution: '\\text{Combine with backpropagation for deep learning}' },
      ],
    },
    'Backpropagation': {
      definition: 'Backpropagation applies the chain rule to efficiently compute gradients in neural networks. It propagates error signals backwards through the network, enabling gradient-based optimization of deep architectures with many parameters.',
      formulas: [
        '\\frac{\\partial L}{\\partial w_{ij}} = \\frac{\\partial L}{\\partial z_j} \\frac{\\partial z_j}{\\partial w_{ij}}',
        '\\delta_j = \\frac{\\partial L}{\\partial z_j} = \\sum_k \\delta_k \\frac{\\partial z_k}{\\partial z_j}',
        '\\text{Output layer: } \\delta_j = \\frac{\\partial L}{\\partial a_j}',
        '\\text{Hidden layer: } \\delta_j = (\\sum_k w_{jk} \\delta_k) \\sigma\'(z_j)',
      ],
      examples: [
        { problem: '\\text{2-layer network}', solution: '\\text{Forward pass, compute loss, backward pass, update weights}' },
        { problem: '\\text{Convolutional layer}', solution: '\\text{Backprop through convolutions and pooling}' },
        { problem: '\\text{Recurrent network}', solution: '\\text{Backpropagation through time (BPTT)}' },
      ],
    },
    'Principal Component Analysis': {
      definition: 'PCA reduces dimensionality by projecting data onto directions of maximum variance. It uses eigendecomposition of the covariance matrix to find principal components, which are linear combinations of original features that capture most variance.',
      formulas: [
        '\\text{Covariance matrix: } C = \\frac{1}{n-1} X^T X \\text{ (centered data)}',
        'C v_i = \\lambda_i v_i \\text{ (eigenvalue equation)}',
        '\\text{Projection: } Y = X W \\text{ where } W = [v_1, v_2, \\ldots, v_k]',
        '\\text{Variance explained: } \\frac{\\sum_{i=1}^k \\lambda_i}{\\sum_{i=1}^n \\lambda_i}',
      ],
      examples: [
        { problem: '\\text{2D data reduction}', solution: '\\text{Project onto first principal component line}' },
        { problem: '\\text{Image compression}', solution: '\\text{Keep top eigenfaces for face recognition}' },
        { problem: '\\text{Noise reduction}', solution: '\\text{Remove components with small eigenvalues}' },
      ],
    },
  },
};

export function getDomainSubtopics(domainName: string): string[] {
  const domain = topicContentDatabase[domainName];
  if (!domain) return [];
  return Object.keys(domain);
}

export function getTopicContent(domainName: string, subtopicName: string): TopicContent | null {
  const domain = topicContentDatabase[domainName];
  if (!domain) return null;
  return domain[subtopicName] || null;
}
