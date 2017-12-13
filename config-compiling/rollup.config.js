const {INPUT, OUTPUT} = require('./config');
import { buildOptimizer } from '@angular-devkit/build-optimizer';

function angularBuildOptimizer() {
  return {
    name: 'angular-optimizer',
    transform: (content) => buildOptimizer({ content }).content,
  }
}


INPUT.plugins.push(angularBuildOptimizer());

const CONFIG_ROLLUP_PROD = Object.assign(INPUT, OUTPUT);

export default CONFIG_ROLLUP_PROD;