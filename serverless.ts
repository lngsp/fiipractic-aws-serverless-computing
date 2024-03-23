import type { AWS } from '@serverless/typescript';
import { MyCustomRole } from './resources';

import {Functions} from './functions';

const serverlessConfiguration: AWS = {
  service: 'fiipractic-aws-serverless-computing',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild'],
  provider: {
    name: 'aws',
    runtime: 'nodejs16.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
    },
    region: "eu-west-1",
  },
  // import the function via paths
  // scoatem parantezele pentru ca noi importam un obiect si daca ar fi intre acolade ar fi un obiect in obiect
  functions: Functions ,
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node16',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
  },
  resources: {
    Resources: {
      MyCustomRole,
    },
  },
};

module.exports = serverlessConfiguration;
