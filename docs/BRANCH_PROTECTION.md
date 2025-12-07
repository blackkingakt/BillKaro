# Branch Protection Rules Guide

Since this repository is managed locally, Branch Protection Rules must be configured directly on GitHub.

## Recommended Setup for `main` and `develop` branches:

1. Go to your repository on GitHub.
2. Click **Settings** > **Branches**.
3. Click **Add rule**.
4. **Branch name pattern**: `main` (and repeat for `develop`).
5. Check the following options:
   - [x] **Require a pull request before merging**
     - [x] Require approvals (Recommend: 1)
   - [x] **Require status checks to pass before merging**
     - Add any CI checks you have (e.g. `test`, `build`)
   - [x] **Require conversation resolution before merging**

## Why use Branch Protection?
- Prevents accidental direct commits to protected branches.
- Ensures code review happens before merging.
- Enforces CI/CD pipeline success.
