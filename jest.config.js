/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	roots: ['<rootDir>/nodes/CrowdStrikeFalcon/actions'],
	testMatch: ['**/*.test.ts'],
	transform: {
		'^.+\\.tsx?$': [
			'ts-jest',
			{
				tsconfig: {
					target: 'ES2021',
					module: 'CommonJS',
					strict: true,
					esModuleInterop: true,
					noImplicitAny: false,
					strictNullChecks: false,
				},
			},
		],
	},
	collectCoverage: true,
	coverageDirectory: 'coverage',
	coverageReporters: ['text', 'lcov', 'html'],
	collectCoverageFrom: [
		'nodes/CrowdStrikeFalcon/actions/**/*.execution.ts',
	],
};
