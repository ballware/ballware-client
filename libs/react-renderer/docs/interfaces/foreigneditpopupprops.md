[@ballware/react-renderer](../README.md) / [Exports](../modules.md) / ForeignEditPopupProps

# Interface: ForeignEditPopupProps

Properties for foreign edit popup

## Table of contents

### Properties

- [editingFinished](foreigneditpopupprops.md#editingfinished)
- [functionIdentifier](foreigneditpopupprops.md#functionidentifier)
- [selection](foreigneditpopupprops.md#selection)

## Properties

### editingFinished

• **editingFinished**: (`reload`: *boolean*) => *void*

Editing finished callback

**`param`** Reload items in parent component

#### Type declaration:

▸ (`reload`: *boolean*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`reload` | *boolean* |

**Returns:** *void*

Defined in: [libs/react-renderer/src/lib/renderfactorycontext.ts:136](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-renderer/src/lib/renderfactorycontext.ts#L136)

Defined in: [libs/react-renderer/src/lib/renderfactorycontext.ts:136](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-renderer/src/lib/renderfactorycontext.ts#L136)

___

### functionIdentifier

• **functionIdentifier**: *string*

Edit function identifier

Defined in: [libs/react-renderer/src/lib/renderfactorycontext.ts:125](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-renderer/src/lib/renderfactorycontext.ts#L125)

___

### selection

• **selection**: *CrudItem*[]

Selected items for foreign edit

Defined in: [libs/react-renderer/src/lib/renderfactorycontext.ts:130](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-renderer/src/lib/renderfactorycontext.ts#L130)
