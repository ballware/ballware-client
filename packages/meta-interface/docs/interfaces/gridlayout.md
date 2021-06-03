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

Defined in: [entity.ts:335](https://github.com/ballware/ballware-client/blob/37e08ea/packages/meta-interface/src/entity.ts#L335)

___

### allowMultiselect

• `Optional` **allowMultiselect**: *boolean*

Enable multi select functionality in table

Defined in: [entity.ts:330](https://github.com/ballware/ballware-client/blob/37e08ea/packages/meta-interface/src/entity.ts#L330)

___

### columns

• **columns**: [*GridLayoutColumn*](gridlayoutcolumn.md)[]

List of column definitions

Defined in: [entity.ts:340](https://github.com/ballware/ballware-client/blob/37e08ea/packages/meta-interface/src/entity.ts#L340)

___

### details

• `Optional` **details**: [*DetailLayout*](detaillayout.md)

Defnition of detail layout in master/detail display

Defined in: [entity.ts:370](https://github.com/ballware/ballware-client/blob/37e08ea/packages/meta-interface/src/entity.ts#L370)

___

### editLayout

• `Optional` **editLayout**: *string*

Identifier of default edit layout used for add/edit operations

Defined in: [entity.ts:325](https://github.com/ballware/ballware-client/blob/37e08ea/packages/meta-interface/src/entity.ts#L325)

___

### identifier

• **identifier**: *string*

Unique identifier of table layout

Defined in: [entity.ts:315](https://github.com/ballware/ballware-client/blob/37e08ea/packages/meta-interface/src/entity.ts#L315)

___

### summaries

• `Optional` **summaries**: { `dataMember`: *string* ; `groupSummary`: *boolean* ; `summaryType`: *string* ; `totalSummary`: *boolean*  }[]

List of definitions for group/total summary

Defined in: [entity.ts:345](https://github.com/ballware/ballware-client/blob/37e08ea/packages/meta-interface/src/entity.ts#L345)

___

### title

• **title**: *string*

Headline of table

Defined in: [entity.ts:320](https://github.com/ballware/ballware-client/blob/37e08ea/packages/meta-interface/src/entity.ts#L320)
