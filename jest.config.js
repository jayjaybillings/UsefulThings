// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
};

module.exports = config;

// Or async function
module.exports = async () => {
  return {
    verbose: true,
  };
};
