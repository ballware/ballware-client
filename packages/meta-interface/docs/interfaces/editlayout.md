[@ballware/meta-interface](../README.md) / [Exports](../modules.md) / EditLayout

# Interface: EditLayout

Definition of edit layout for editing/adding business objects

## Table of contents

### Properties

- [colCount](editlayout.md#colcount)
- [colCountByScreen](editlayout.md#colcountbyscreen)
- [fullscreen](editlayout.md#fullscreen)
- [identifier](editlayout.md#identifier)
- [items](editlayout.md#items)

## Properties

### colCount

• `Optional` **colCount**: *number*

Number of cols for layouting child editor items

Defined in: [entity.ts:385](https://github.com/ballware/ballware-client/blob/37e08ea/packages/meta-interface/src/entity.ts#L385)

___

### colCountByScreen

• `Optional` **colCountByScreen**: *object*

Specific column count definition for small/big screens

#### Type declaration:

Name | Type |
:------ | :------ |
`lg`? | *number* |
`sm`? | *number* |

Defined in: [entity.ts:390](https://github.com/ballware/ballware-client/blob/37e08ea/packages/meta-interface/src/entity.ts#L390)

___

### fullscreen

• `Optional` **fullscreen**: *boolean*

Display editor in full screen popup

Defined in: [entity.ts:395](https://github.com/ballware/ballware-client/blob/37e08ea/packages/meta-interface/src/entity.ts#L395)

___

### identifier

• **identifier**: *string*

Unique identifier of edit layout

Defined in: [entity.ts:380](https://github.com/ballware/ballware-client/blob/37e08ea/packages/meta-interface/src/entity.ts#L380)

___

### items

• **items**: [*EditLayoutItem*](editlayoutitem.md)[]

List of layout items

Defined in: [entity.ts:400](https://github.com/ballware/ballware-client/blob/37e08ea/packages/meta-interface/src/entity.ts#L400)
