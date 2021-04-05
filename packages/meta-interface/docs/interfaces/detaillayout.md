[@ballware/meta-interface](../README.md) / [Exports](../modules.md) / DetailLayout

# Interface: DetailLayout

Detail layout definition for expandable detail view in grid/list

## Table of contents

### Properties

- [colCount](detaillayout.md#colcount)
- [colCountByScreen](detaillayout.md#colcountbyscreen)
- [height](detaillayout.md#height)
- [items](detaillayout.md#items)

## Properties

### colCount

• `Optional` **colCount**: *number*

Number of columns for display layout

Defined in: [entity.ts:119](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L119)

___

### colCountByScreen

• `Optional` **colCountByScreen**: *object*

Specific column count definition for small/big screens

#### Type declaration:

Name | Type |
:------ | :------ |
`lg`? | *number* |
`sm`? | *number* |

Defined in: [entity.ts:124](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L124)

___

### height

• `Optional` **height**: *string*

Optional fixed height of detail layout

Defined in: [entity.ts:129](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L129)

___

### items

• **items**: [*EditLayoutItem*](editlayoutitem.md)[]

List of detail layout items

Defined in: [entity.ts:134](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L134)
