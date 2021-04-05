[@ballware/react-contexts](../README.md) / [Exports](../modules.md) / EditContextState

# Interface: EditContextState

Context for functionality to edit a specific item

## Table of contents

### Properties

- [editFunction](editcontextstate.md#editfunction)
- [editLayout](editcontextstate.md#editlayout)
- [item](editcontextstate.md#item)
- [mode](editcontextstate.md#mode)
- [setItem](editcontextstate.md#setitem)

## Properties

### editFunction

• `Optional` **editFunction**: EntityCustomFunction

Edit function (custom or DefaultEditFunction)

Defined in: [packages/react-contexts/src/editcontext.ts:60](https://github.com/ballware/ballware-client/blob/13e0b60/packages/react-contexts/src/editcontext.ts#L60)

___

### editLayout

• `Optional` **editLayout**: EditLayout

Edit layout for rendering form

Defined in: [packages/react-contexts/src/editcontext.ts:50](https://github.com/ballware/ballware-client/blob/13e0b60/packages/react-contexts/src/editcontext.ts#L50)

___

### item

• `Optional` **item**: *CrudItem* \| *CrudItem*[] \| ValueType

Edited item

Defined in: [packages/react-contexts/src/editcontext.ts:55](https://github.com/ballware/ballware-client/blob/13e0b60/packages/react-contexts/src/editcontext.ts#L55)

___

### mode

• `Optional` **mode**: [*EditModes*](../enums/editmodes.md)

Current editing mode

Defined in: [packages/react-contexts/src/editcontext.ts:45](https://github.com/ballware/ballware-client/blob/13e0b60/packages/react-contexts/src/editcontext.ts#L45)

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

Defined in: [packages/react-contexts/src/editcontext.ts:65](https://github.com/ballware/ballware-client/blob/13e0b60/packages/react-contexts/src/editcontext.ts#L65)

Defined in: [packages/react-contexts/src/editcontext.ts:65](https://github.com/ballware/ballware-client/blob/13e0b60/packages/react-contexts/src/editcontext.ts#L65)
