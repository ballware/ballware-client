[@ballware/meta-interface](../README.md) / [Exports](../modules.md) / GridLayout

# Interface: GridLayout

Definition of table layout for listing business objects

## Hierarchy

* **GridLayout**

## Table of contents

### Properties

- [allowEditing](gridlayout.md#allowediting)
- [allowMultiselect](gridlayout.md#allowmultiselect)
- [columns](gridlayout.md#columns)
- [details](gridlayout.md#details)
- [editLayout](gridlayout.md#editlayout)
- [identifier](gridlayout.md#identifier)
- [summaries](gridlayout.md#summaries)
- [title](gridlayout.md#title)

## Properties

### allowEditing

• `Optional` **allowEditing**: *undefined* \| *boolean*

Enable inline editing functionality in table

Defined in: [entity.ts:308](https://github.com/frankball/ballware-meta-interface/blob/08dd5e4/src/entity.ts#L308)

___

### allowMultiselect

• `Optional` **allowMultiselect**: *undefined* \| *boolean*

Enable multi select functionality in table

Defined in: [entity.ts:303](https://github.com/frankball/ballware-meta-interface/blob/08dd5e4/src/entity.ts#L303)

___

### columns

• **columns**: [*GridLayoutColumn*](gridlayoutcolumn.md)[]

List of column definitions

Defined in: [entity.ts:313](https://github.com/frankball/ballware-meta-interface/blob/08dd5e4/src/entity.ts#L313)

___

### details

• `Optional` **details**: *undefined* \| [*DetailLayout*](detaillayout.md)

Defnition of detail layout in master/detail display

Defined in: [entity.ts:343](https://github.com/frankball/ballware-meta-interface/blob/08dd5e4/src/entity.ts#L343)

___

### editLayout

• `Optional` **editLayout**: *undefined* \| *string*

Identifier of default edit layout used for add/edit operations

Defined in: [entity.ts:298](https://github.com/frankball/ballware-meta-interface/blob/08dd5e4/src/entity.ts#L298)

___

### identifier

• **identifier**: *string*

Unique identifier of table layout

Defined in: [entity.ts:288](https://github.com/frankball/ballware-meta-interface/blob/08dd5e4/src/entity.ts#L288)

___

### summaries

• `Optional` **summaries**: *undefined* \| { `dataMember`: *string* ; `groupSummary`: *boolean* ; `summaryType`: *string* ; `totalSummary`: *boolean*  }[]

List of definitions for group/total summary

Defined in: [entity.ts:318](https://github.com/frankball/ballware-meta-interface/blob/08dd5e4/src/entity.ts#L318)

___

### title

• **title**: *string*

Headline of table

Defined in: [entity.ts:293](https://github.com/frankball/ballware-meta-interface/blob/08dd5e4/src/entity.ts#L293)
