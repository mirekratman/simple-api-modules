module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: [
        '<rootDir>/__tests__/**/*.test.js'
    ],
    transform: {
        '^.+\\.(ts)?$': 'ts-jest',
        "^.+\\.(js)$": "babel-jest",
    }
}