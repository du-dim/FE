#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkStoreAppStack } from '../lib/cdk-store-app-stack';

const app = new cdk.App();
new CdkStoreAppStack(app, 'CdkStoreAppStack', {});
