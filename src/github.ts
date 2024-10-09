import * as core from '@actions/core';

export async function exposeRuntime() {
  Object.keys(process.env).forEach(function (key) {
    if (key.startsWith('UBICLOUD_')) {
      core.info(`${key}=${process.env[key]}`);
      core.exportVariable(key, process.env[key]);
    }
  });
}
