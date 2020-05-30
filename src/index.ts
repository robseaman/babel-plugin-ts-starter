import * as BabelTypes from '@babel/types';
import { Visitor } from '@babel/traverse';

export interface PluginOptions {
  opts: {
    changeTo?: string;
  };
  paramName?: string;
  changeTo?: string;
}

export interface Babel {
  types: typeof BabelTypes;
}

const transformChangeIdentifier = (
  babel: Babel,
): babel.PluginObj<PluginOptions> => {
  const updateParamNameVisitor: Visitor<PluginOptions> = {
    Identifier(path): void {
      if (path.node.name === this.paramName) {
        path.node.name = this.changeTo;
      }
    },
  };

  const MyVisitor: Visitor<PluginOptions> = {
    FunctionDeclaration(path, state) {
      const param = path.node.params[0] as babel.types.Identifier;
      const changeTo =
        state.opts && typeof state.opts.changeTo === 'string'
          ? state.opts.changeTo
          : 'x';
      param.name = changeTo;

      path.traverse(updateParamNameVisitor, state);
    },
  };

  return {
    name: 'transform-remove-logging',
    visitor: MyVisitor as Visitor<PluginOptions>,
  };
};

export default transformChangeIdentifier;
