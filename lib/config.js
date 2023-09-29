import * as bedrock from '@bedrock/core';
import path from 'node:path';

const {config} = bedrock;

bedrock.events.on('bedrock-cli.parsed', async () => {
  await import(path.join(config.paths.config, 'paths.js'));
});
