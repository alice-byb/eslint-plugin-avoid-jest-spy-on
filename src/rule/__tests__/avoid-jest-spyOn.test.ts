import { ESLintUtils } from '@typescript-eslint/utils';
import rule from '../avoid-jest-spyOn';

const ruleTester = new ESLintUtils.RuleTester({
  parser: '@typescript-eslint/parser',
});

ruleTester.run('jestSpyOn', rule, {
  valid: [`const mock = jest.fn()`],
  invalid: [{ code: `jest.spyOn(console, 'log')`, errors: [{ messageId: 'jestSpyOn' }] }],
});