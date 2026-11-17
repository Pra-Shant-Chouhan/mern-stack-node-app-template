import { createDefaultPreset } from 'ts-jest'

const tsJestTransformCfg = createDefaultPreset({
    tsconfig: {
        module: 'CommonJS',
        verbatimModuleSyntax: false,
    },
}).transform

/** @type {import("jest").Config} **/
export default {
    testEnvironment: 'node',
    transform: {
        ...tsJestTransformCfg,
    },
}
