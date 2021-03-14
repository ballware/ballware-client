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

• **applyChanges**: (`e`: { `value`: *string* \| *number* \| *boolean* \| *Record*<string, unknown\> \| Date \| (*string* \| *number* \| *Record*<string, unknown\>)[] \| { `lat`: *number* ; `lng`: *number*  } \| *CrudItem*  }) => *void*

Apply changes callback after editing finished

#### Type declaration:

▸ (`e`: { `value`: *string* \| *number* \| *boolean* \| *Record*<string, unknown\> \| Date \| (*string* \| *number* \| *Record*<string, unknown\>)[] \| { `lat`: *number* ; `lng`: *number*  } \| *CrudItem*  }): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`e` | *object* |
`e.value` | *string* \| *number* \| *boolean* \| *Record*<string, unknown\> \| Date \| (*string* \| *number* \| *Record*<string, unknown\>)[] \| { `lat`: *number* ; `lng`: *number*  } \| *CrudItem* |

**Returns:** *void*

Defined in: [libs/react-renderer/src/lib/renderfactorycontext.ts:236](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-renderer/src/lib/renderfactorycontext.ts#L236)

Defined in: [libs/react-renderer/src/lib/renderfactorycontext.ts:236](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-renderer/src/lib/renderfactorycontext.ts#L236)

___

### column

• **column**: GridLayoutColumn

Edited column in grid

Defined in: [libs/react-renderer/src/lib/renderfactorycontext.ts:231](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-renderer/src/lib/renderfactorycontext.ts#L231)

___

### readonly

• **readonly**: *boolean*

Detail edit content is readonly (view mode)

Defined in: [libs/react-renderer/src/lib/renderfactorycontext.ts:226](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-renderer/src/lib/renderfactorycontext.ts#L226)
