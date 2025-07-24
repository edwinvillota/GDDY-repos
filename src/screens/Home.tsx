const Home = () => {
	return (
		<div className="min-h-screen bg-gray-950 text-gray-100 font-sans px-4 py-8">
			<div className="max-w-2xl mx-auto">
				<header className="mb-8">
					<h1 className="text-4xl font-bold text-blue-400 mb-2">
						React Vite TypeScript Biome Template
					</h1>
					<p className="text-lg text-gray-400">
						A modern template for creating React applications using{' '}
						<a
							href="https://vitejs.dev/"
							className="text-blue-300 underline hover:text-blue-200"
							target="_blank"
							rel="noopener noreferrer"
						>
							Vite
						</a>
						,{' '}
						<a
							href="https://www.typescriptlang.org/"
							className="text-blue-300 underline hover:text-blue-200"
							target="_blank"
							rel="noopener noreferrer"
						>
							TypeScript
						</a>
						, and{' '}
						<a
							href="https://biomejs.dev/"
							className="text-blue-300 underline hover:text-blue-200"
							target="_blank"
							rel="noopener noreferrer"
						>
							Biome
						</a>{' '}
						for code formatting and linting.
					</p>
				</header>

				<section className="mb-8">
					<h2 className="text-2xl font-semibold text-blue-300 mb-4">
						Features
					</h2>
					<ul className="list-disc list-inside space-y-1 text-gray-200">
						<li>⚡ Fast development with Vite</li>
						<li>⚛ React 19+</li>
						<li>🛡 TypeScript for static typing</li>
						<li>🧹 Biome for formatting and linting</li>
						<li>📦 Ready-to-use project structure</li>
					</ul>
				</section>

				<section className="mb-8">
					<h2 className="text-2xl font-semibold text-blue-300 mb-4">
						Getting Started
					</h2>
					<ol className="list-decimal list-inside space-y-4 text-gray-200">
						<li>
							<span className="font-medium">Clone the repository:</span>
							<pre className="bg-gray-900 rounded p-3 mt-2 text-sm overflow-x-auto">
								<code>
									git clone &lt;repository-url&gt; cd &lt;project-directory&gt;
								</code>
							</pre>
						</li>
						<li>
							<span className="font-medium">Install dependencies:</span>
							<pre className="bg-gray-900 rounded p-3 mt-2 text-sm overflow-x-auto">
								<code>npm install</code>
							</pre>
						</li>
						<li>
							<span className="font-medium">Start the development server:</span>
							<pre className="bg-gray-900 rounded p-3 mt-2 text-sm overflow-x-auto">
								<code>npm run dev</code>
							</pre>
						</li>
					</ol>
				</section>

				<section className="mb-8">
					<h2 className="text-2xl font-semibold text-blue-300 mb-4">Scripts</h2>
					<ul className="list-disc list-inside space-y-1 text-gray-200">
						<li>
							<span className="font-mono text-blue-200">npm run dev</span> —
							Start the development server
						</li>
						<li>
							<span className="font-mono text-blue-200">npm run build</span> —
							Build for production
						</li>
						<li>
							<span className="font-mono text-blue-200">npm run preview</span> —
							Preview the production build
						</li>
						<li>
							<span className="font-mono text-blue-200">npm run format</span> —
							Format code with Biome
						</li>
						<li>
							<span className="font-mono text-blue-200">npm run lint</span> —
							Lint code with Biome
						</li>
					</ul>
				</section>

				<section>
					<h2 className="text-2xl font-semibold text-blue-300 mb-4">
						Project Structure
					</h2>
					<pre className="bg-gray-900 rounded p-3 text-sm overflow-x-auto text-gray-200">
						{`react-app-template/
├── public/
│   └── vite.svg
├── src/
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── README.md
├── biome.json
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── node_modules/`}
					</pre>
				</section>
			</div>
		</div>
	);
};

export default Home;
