module.exports = {
  '*.{js,jsx,ts,tsx,vue}': ['biome check --apply', 'biome format --write'],
  '*.{json,md}': ['biome format --write'],
};