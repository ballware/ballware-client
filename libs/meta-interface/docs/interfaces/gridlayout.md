[@ballware/meta-interface](../README.md) / [Exports](../modules.md) / GridLayout

# Interface: GridLayout

Definition of table layout for listing business objects

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

• `Optional` **allowEditing**: *boolean*

Enable inline editing functionality in table

Defined in: lib/entity.ts:308

___

### allowMultiselect

• `Optional` **allowMultiselect**: *boolean*

Enable multi select functionality in table

Defined in: lib/entity.ts:303

___

### columns

• **columns**: [*GridLayoutColumn*](gridlayoutcolumn.md)[]

List of column definitions

Defined in: lib/entity.ts:313

___

### details

• `Optional` **details**: [*DetailLayout*](detaillayout.md)

Defnition of detail layout in master/detail display

Defined in: lib/entity.ts:343

___

### editLayout

• `Optional` **editLayout**: *string*

Identifier of default edit layout used for add/edit operations

Defined in: lib/entity.ts:298

___

### identifier

• **identifier**: *string*

Unique identifier of table layout

Defined in: lib/entity.ts:288

___

### summaries

• `Optional` **summaries**: { `dataMember`: *string* ; `groupSummary`: *boolean* ; `summaryType`: *string* ; `totalSummary`: *boolean*  }[]

List of definitions for group/total summary

Defined in: lib/entity.ts:318

___

### title

• **title**: *string*

Headline of table

Defined in: lib/entity.ts:293
