import * as bedrock from '@bedrock/core';
import {resolve} from './utils.js';
const {config} = bedrock;

// WEBPACK CONFIGURATION
config['bedrock-webpack'].configs.push({
  resolve: {
    extensions: ['*', '.js', '.vue', '.json'],
    alias: {
      '@': resolve('web'),
      '~': resolve() //root
    },
  },
  // optimization: {
  //   minimize: false,
  // },
  mode: 'production'
});
