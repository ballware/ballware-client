[@ballware/meta-interface](../README.md) / [Exports](../modules.md) / EditLayout

# Interface: EditLayout

Definition of edit layout for editing/adding business objects

## Hierarchy

* **EditLayout**

## Table of contents

### Properties

- [colCount](editlayout.md#colcount)
- [colCountByScreen](editlayout.md#colcountbyscreen)
- [fullscreen](editlayout.md#fullscreen)
- [identifier](editlayout.md#identifier)
- [items](editlayout.md#items)

## Properties

### colCount

• `Optional` **colCount**: *undefined* \| *number*

Number of cols for layouting child editor items

Defined in: [entity.ts:358](https://github.com/frankball/ballware-meta-interface/blob/6b9dc3f/src/entity.ts#L358)

___

### colCountByScreen

• `Optional` **colCountByScreen**: *undefined* \| { `lg?`: *undefined* \| *number* ; `sm?`: *undefined* \| *number*  }

Specific column count definition for small/big screens

Defined in: [entity.ts:363](https://github.com/frankball/ballware-meta-interface/blob/6b9dc3f/src/entity.ts#L363)

___

### fullscreen

• `Optional` **fullscreen**: *undefined* \| *boolean*

Display editor in full screen popup

Defined in: [entity.ts:368](https://github.com/frankball/ballware-meta-interface/blob/6b9dc3f/src/entity.ts#L368)

___

### identifier

• **identifier**: *string*

Unique identifier of edit layout

Defined in: [entity.ts:353](https://github.com/frankball/ballware-meta-interface/blob/6b9dc3f/src/entity.ts#L353)

___

### items

• **items**: [*EditLayoutItem*](editlayoutitem.md)[]

List of layout items

Defined in: [entity.ts:373](https://github.com/frankball/ballware-meta-interface/blob/6b9dc3f/src/entity.ts#L373)
