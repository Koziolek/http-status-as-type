module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	testMatch: ['**/__tests__/**/*.test.ts?(x)'],
	transform: {
		'^.+\\.tsx?$': ['ts-jest'],
	},
	moduleFileExtensions: ['js', 'ts'],
	transformIgnorePatterns: ['/node_modules/'],
	collectCoverage: true,
	coverageDirectory: 'coverage',
	coverageReporters: ['text', 'lcov'],
	collectCoverageFrom: [
		'src/**/*.{js,ts}',
		'!src/**/*.d.ts',
		'!src/**/__tests__/**',
	],

};