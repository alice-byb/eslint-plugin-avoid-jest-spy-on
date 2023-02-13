import { globalWithDanger } from './types';

const { danger, warn, error } = global as globalWithDanger;

const { github } = danger;
const { pr } = github;

/**
 * danger check to confirm the PR is correctly formatted
 */
export function prHealth(): void {
  const packageJson = danger.git.fileMatch('package.json');
  const packageLockJson = danger.git.fileMatch('package-lock.json');
  const lockfile = danger.git.fileMatch('yarn.lock');

  if (packageLockJson.added) {
    error('Do not add a package-lock.json file, please use Yarn instead');
  }

  if (packageJson.modified && !lockfile.modified) {
    warn('This PR modified package.json, but not the lockfile');
  }

  if (!pr.body?.length) {
    warn('Please add a description to your PR.');
  }
}
