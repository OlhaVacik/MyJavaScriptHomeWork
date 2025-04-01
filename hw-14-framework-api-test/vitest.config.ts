import { defineConfig } from 'vitest/config';
import dotenv from 'dotenv-safe';

dotenv.config({
    allowEmptyValues: true
});

export default defineConfig({
    test: {
        exclude: [],
        include: ['./tests/**/?(*.)+(spec|test).[t]s?(x)'],
        globalSetup: [
            './src/hooks/vitest-global-setup.ts'
            // './src/hooks/init-jwt.ts'
        ],
        testTimeout: 60000,

        environment: 'node'
    }
});
