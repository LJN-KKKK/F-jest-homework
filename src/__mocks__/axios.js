export default {
  get: jest.fn(() => Promise.resolve({ data: { name: "2333" } })),
  post: jest.fn(() => Promise.resolve({ data: {} })),
};
