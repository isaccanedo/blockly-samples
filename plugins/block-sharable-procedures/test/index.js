/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Block test.
 */

import * as Blockly from 'blockly';
import {createPlayground} from '@blockly/dev-tools';
import '../src/index';


// TODO: Edit list of blocks.
const allBlocks = ['text_print'];

/**
 * Create a workspace.
 * @param {HTMLElement} blocklyDiv The blockly container div.
 * @param {!Blockly.BlocklyOptions} options The Blockly options.
 * @return {!Blockly.WorkspaceSvg} The created workspace.
 */
function createWorkspace(blocklyDiv, options) {
  const workspace = Blockly.inject(blocklyDiv, options);
  return workspace;
}

document.addEventListener('DOMContentLoaded', function() {
  const defaultOptions = {
    toolbox: {
      'kind': 'flyoutToolbox',
      'contents': allBlocks.map((b) => {
        return {
          'kind': 'block',
          'type': b,
        };
      }),
    },
  };
  createPlayground(document.getElementById('root'), createWorkspace,
      defaultOptions);
});
