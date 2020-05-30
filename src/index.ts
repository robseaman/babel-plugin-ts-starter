import { PluginObj } from '@babel/core';
import * as t from '@babel/types';
import { Visitor } from '@babel/traverse';

type Options = { changeTo?: string };

export interface PluginOptions {
  opts: Options;
  paramName?: string;
  changeTo?: string;
}

export interface Babel {
  types: typeof t;
  version: string; // babel version
  /**
   * ...etc...
   * transform: (code, opts, callback) => void;
   * traverse: (...) => void;
   */
}

const transformChangeIdentifier = (
  babelObj: Babel,
  opts: Options,
  pluginFilename: string,
): PluginObj<PluginOptions> => {
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
    name: 'transform-change-identifier',
    visitor: MyVisitor as Visitor<PluginOptions>,
  };
};

export default transformChangeIdentifier;
