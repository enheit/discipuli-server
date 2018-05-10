import merge from 'webpack-merge';

import { common, dev, prod } from './webpack-config';

const getWebpackConfig = env => {
  return env.production
    ? merge(common, prod)
    : merge(common, dev);
};

export default getWebpackConfig;