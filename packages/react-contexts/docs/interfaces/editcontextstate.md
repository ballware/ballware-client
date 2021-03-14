[@ballware/react-contexts](../README.md) / [Exports](../modules.md) / EditContextState

# Interface: EditContextState

Context for functionality to edit a specific item

## Table of contents

### Properties

- [editLayout](editcontextstate.md#editlayout)
- [functionIdentifier](editcontextstate.md#functionidentifier)
- [item](editcontextstate.md#item)
- [mode](editcontextstate.md#mode)
- [setItem](editcontextstate.md#setitem)

## Properties

### editLayout

• `Optional` **editLayout**: EditLayout

Edit layout for rendering form

Defined in: [packages/react-contexts/src/editcontext.ts:43](https://github.com/ballware/ballware-client/blob/e25f4ba/packages/react-contexts/src/editcontext.ts#L43)

___

### functionIdentifier

• `Optional` **functionIdentifier**: *string*

Function identifier when editing with custom function

Defined in: [packages/react-contexts/src/editcontext.ts:53](https://github.com/ballware/ballware-client/blob/e25f4ba/packages/react-contexts/src/editcontext.ts#L53)

___

### item

• `Optional` **item**: *CrudItem* \| *CrudItem*[] \| ValueType

Edited item

Defined in: [packages/react-contexts/src/editcontext.ts:48](https://github.com/ballware/ballware-client/blob/e25f4ba/packages/react-contexts/src/editcontext.ts#L48)

___

### mode

• `Optional` **mode**: [*EditModes*](../enums/editmodes.md)

Current editing mode

Defined in: [packages/react-contexts/src/editcontext.ts:38](https://github.com/ballware/ballware-client/blob/e25f4ba/packages/react-contexts/src/editcontext.ts#L38)

___

### setItem

• `Optional` **setItem**: (`item`: *CrudItem* \| ValueType) => *void*

Replacing edited item

#### Type declaration:

▸ (`item`: *CrudItem* \| ValueType): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`item` | *CrudItem* \| ValueType |

**Returns:** *void*

Defined in: [packages/react-contexts/src/editcontext.ts:58](https://github.com/ballware/ballware-client/blob/e25f4ba/packages/react-contexts/src/editcontext.ts#L58)

Defined in: [packages/react-contexts/src/editcontext.ts:58](https://github.com/ballware/ballware-client/blob/e25f4ba/packages/react-contexts/src/editcontext.ts#L58)
