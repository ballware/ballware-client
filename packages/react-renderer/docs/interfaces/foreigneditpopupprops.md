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

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:147](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/renderfactorycontext.ts#L147)

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:147](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/renderfactorycontext.ts#L147)

___

### functionIdentifier

• **functionIdentifier**: *string*

Edit function identifier

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:136](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/renderfactorycontext.ts#L136)

___

### selection

• **selection**: *CrudItem*[]

Selected items for foreign edit

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:141](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/renderfactorycontext.ts#L141)
