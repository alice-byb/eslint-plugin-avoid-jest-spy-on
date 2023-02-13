import { ESLintUtils } from '@typescript-eslint/utils';
import { Expression, PrivateIdentifier, Identifier } from '@typescript-eslint/types/dist/generated/ast-spec';
import { DOC_PATH } from '../constants';

const createRule = ESLintUtils.RuleCreator(DOC_PATH);

const isIdentifierFromObject = (object: Expression): object is Identifier => object.type === 'Identifier';
const isIdentifierFromProperty = (object: Expression | PrivateIdentifier): object is Identifier =>
  object.type === 'Identifier';

export default createRule({
  create(context) {
    return {
      MemberExpression(node) {
        const { object, property } = node;
        const isObjectJest = isIdentifierFromObject(object) && object.name === 'jest';
        if (!isObjectJest) return;
        const isPropertySpyOn = isIdentifierFromProperty(property) && property.name === 'spyOn';
        if (!isPropertySpyOn) return;
        context.report({
          messageId: 'jestSpyOn',
          loc: node.loc,
        });
      },
    };
  },
  name: 'avoid-jest-spyOn',
  meta: {
    docs: {
      description: 'Function declaration names should start with an upper-case letter.',
      recommended: 'error',
    },
    messages: {
      jestSpyOn: 'Avoid using jest.spyOn as it is incompatible with SWC. Move modules into different files instead',
    },
    type: 'problem',
    schema: [],
  },
  defaultOptions: [],
});
