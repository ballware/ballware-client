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

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:136](https://github.com/ballware/ballware-client/blob/88ab695/packages/react-renderer/src/renderfactorycontext.ts#L136)

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:136](https://github.com/ballware/ballware-client/blob/88ab695/packages/react-renderer/src/renderfactorycontext.ts#L136)

___

### functionIdentifier

• **functionIdentifier**: *string*

Edit function identifier

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:125](https://github.com/ballware/ballware-client/blob/88ab695/packages/react-renderer/src/renderfactorycontext.ts#L125)

___

### selection

• **selection**: *CrudItem*[]

Selected items for foreign edit

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:130](https://github.com/ballware/ballware-client/blob/88ab695/packages/react-renderer/src/renderfactorycontext.ts#L130)
