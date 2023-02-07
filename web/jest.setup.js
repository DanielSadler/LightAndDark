import { server } from './src/mocks/server';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    };
  },
}));

jest.useFakeTimers().setSystemTime(new Date('2020-01-01'));

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
