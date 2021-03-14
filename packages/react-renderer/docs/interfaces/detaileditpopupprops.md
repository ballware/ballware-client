[@ballware/react-renderer](../README.md) / [Exports](../modules.md) / DetailEditPopupProps

# Interface: DetailEditPopupProps

Properties for grid detail edit popup

## Table of contents

### Properties

- [applyChanges](detaileditpopupprops.md#applychanges)
- [column](detaileditpopupprops.md#column)
- [readonly](detaileditpopupprops.md#readonly)

## Properties

### applyChanges

• **applyChanges**: (`e`: { `value`: ValueType \| *CrudItem*  }) => *void*

Apply changes callback after editing finished

#### Type declaration:

▸ (`e`: { `value`: ValueType \| *CrudItem*  }): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`e` | *object* |
`e.value` | ValueType \| *CrudItem* |

**Returns:** *void*

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:236](https://github.com/ballware/ballware-client/blob/c28ad0b/packages/react-renderer/src/renderfactorycontext.ts#L236)

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:236](https://github.com/ballware/ballware-client/blob/c28ad0b/packages/react-renderer/src/renderfactorycontext.ts#L236)

___

### column

• **column**: GridLayoutColumn

Edited column in grid

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:231](https://github.com/ballware/ballware-client/blob/c28ad0b/packages/react-renderer/src/renderfactorycontext.ts#L231)

___

### readonly

• **readonly**: *boolean*

Detail edit content is readonly (view mode)

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:226](https://github.com/ballware/ballware-client/blob/c28ad0b/packages/react-renderer/src/renderfactorycontext.ts#L226)
