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

Defined in: [lib/entity.ts:92](https://github.com/ballware/ballware-client/blob/69c8328/libs/meta-interface/src/lib/entity.ts#L92)

___

### colCountByScreen

• `Optional` **colCountByScreen**: *object*

Specific column count definition for small/big screens

#### Type declaration:

Name | Type |
:------ | :------ |
`lg`? | *number* |
`sm`? | *number* |

Defined in: [lib/entity.ts:97](https://github.com/ballware/ballware-client/blob/69c8328/libs/meta-interface/src/lib/entity.ts#L97)

___

### height

• `Optional` **height**: *string*

Optional fixed height of detail layout

Defined in: [lib/entity.ts:102](https://github.com/ballware/ballware-client/blob/69c8328/libs/meta-interface/src/lib/entity.ts#L102)

___

### items

• **items**: [*EditLayoutItem*](editlayoutitem.md)[]

List of detail layout items

Defined in: [lib/entity.ts:107](https://github.com/ballware/ballware-client/blob/69c8328/libs/meta-interface/src/lib/entity.ts#L107)
