/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import { createContext } from 'react';
import {
  EntityCustomFunction,
  GridLayout,
  EditLayout,
  QueryParams,
  Template,
  CompiledEntityCustomScripts,
  CompiledMappingScripts,
} from '@ballware/meta-interface';

/**
 * Context for generic entity metadata functionality
 */
export interface MetaContextState {
  /**
   * Application identifier of generic entity
   */
  application?: string;

  /**
   * Entity identifier of generic entity
   */
  entity?: string;

  /**
   * Mapping scripts for provider consumer item mapping
   */
  mappingScripts?: CompiledMappingScripts;

  /**
   * Custom scripts for client operation
   */
  customScripts?: CompiledEntityCustomScripts;
  
  /**
   * Base url for backend access
   */
  baseUrl?: string;

  /**
   * Context operating in read only mode
   */
  readOnly: boolean;

  /**
   * Display name of generic entity
   */
  displayName?: string;

  /**
   * Collection of available custom crud functions for entity
   */
  customFunctions?: Array<EntityCustomFunction>;

  /**
   * List of entity layout item templates
   */
  templates?: Array<Template>;

  /**
   * List of defined grid layouts in entity metadata
   */
  gridLayouts?: Array<GridLayout>;

  /**
   * List of defined edit layouts in entity metadata
   */
  editLayouts?: Array<EditLayout>;
  
  /**
   * Prepared custom param object used by custom scripts
   */
  customParam?: Record<string, unknown>;

  /**
   * Param object inherited by container (page or parent entity for example)
   */
  headParams?: QueryParams;

  /**
   * Collection of available print documents for entity
   */
  documents?: { id: string; text: string }[];
  
}

export const MetaContext = createContext({} as MetaContextState);
