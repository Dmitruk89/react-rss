import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';
import 'whatwg-fetch';
import { server } from './mock/server/server';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
expect.extend(matchers);
