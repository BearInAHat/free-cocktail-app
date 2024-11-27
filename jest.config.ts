export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx|js|jsx|styl)$": ["ts-jest", {}],
  },
  moduleDirectories: ["node_modules", "<rootDir>/node_modules", "."],
  collectCoverage: false,
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx,styl}", "!src/**/*.d.ts"],
  moduleNameMapper: {
    "^Slices/(.*)$": "<rootDir>/src/store/slices/$1",
    "^Utils$": "<rootDir>/src/utils",
    "^Components/(.*)$": "<rootDir>/src/components/$1",
    "^Pages/(.*)$": "<rootDir>/src/pages/$1",
    "\\.styl$": "identity-obj-proxy",
  },
};
