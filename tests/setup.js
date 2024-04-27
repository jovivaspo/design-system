import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach, beforeEach } from 'vitest';
// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});

beforeEach(() => {
  vi.clearAllMocks();
});
