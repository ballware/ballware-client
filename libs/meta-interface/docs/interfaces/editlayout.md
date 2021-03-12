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

Defined in: lib/entity.ts:358

___

### colCountByScreen

• `Optional` **colCountByScreen**: *object*

Specific column count definition for small/big screens

#### Type declaration:

Name | Type |
:------ | :------ |
`lg`? | *number* |
`sm`? | *number* |

Defined in: lib/entity.ts:363

___

### fullscreen

• `Optional` **fullscreen**: *boolean*

Display editor in full screen popup

Defined in: lib/entity.ts:368

___

### identifier

• **identifier**: *string*

Unique identifier of edit layout

Defined in: lib/entity.ts:353

___

### items

• **items**: [*EditLayoutItem*](editlayoutitem.md)[]

List of layout items

Defined in: lib/entity.ts:373
