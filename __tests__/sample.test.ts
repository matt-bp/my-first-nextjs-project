import '@testing-library/jest-dom/extend-expect';

describe('A simple test', () => {
  it('should be equal', async () => {
    expect(4).toEqual(4);
  });

  it('should be true', async () => {
    expect(true).toBe(true);
  });
});