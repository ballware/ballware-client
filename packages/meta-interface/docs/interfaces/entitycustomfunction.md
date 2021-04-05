[@ballware/meta-interface](../README.md) / [Exports](../modules.md) / EntityCustomFunction

# Interface: EntityCustomFunction

Interface of custom crud function definition

## Table of contents

### Properties

- [editLayout](entitycustomfunction.md#editlayout)
- [entity](entitycustomfunction.md#entity)
- [externalEditor](entitycustomfunction.md#externaleditor)
- [icon](entitycustomfunction.md#icon)
- [id](entitycustomfunction.md#id)
- [multi](entitycustomfunction.md#multi)
- [options](entitycustomfunction.md#options)
- [text](entitycustomfunction.md#text)
- [type](entitycustomfunction.md#type)

## Properties

### editLayout

• **editLayout**: *string*

Identifier of edit layout definition used by function.
If not set the primary edit layout will be used

Defined in: [entity.ts:104](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L104)

___

### entity

• `Optional` **entity**: *string*

Identifier of owning business object

Defined in: [entity.ts:63](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L63)

___

### externalEditor

• `Optional` **externalEditor**: *boolean*

Set if function uses a propritary editor.
If set, prepareCustomFunction has to supply editor url as callback parameter

Defined in: [entity.ts:98](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L98)

___

### icon

• `Optional` **icon**: *string*

CSS class for icon

Defined in: [entity.ts:87](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L87)

___

### id

• **id**: *string*

Unique id of custom function

Defined in: [entity.ts:68](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L68)

___

### multi

• `Optional` **multi**: *boolean*

Set if function supports batch operations of multiple business object instances

Defined in: [entity.ts:92](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L92)

___

### options

• `Optional` **options**: [*ImportFunctionOptions*](importfunctionoptions.md) \| [*ExportFunctionOptions*](exportfunctionoptions.md)

Function type specific additional options

Defined in: [entity.ts:109](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L109)

___

### text

• **text**: *string*

Display text of function

Defined in: [entity.ts:82](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L82)

___

### type

• **type**: *add* \| *edit* \| *import* \| *export*

Function operation type
add: Function is creating new business objects
edit: Function is editing existing selected business objects
import: Function to import external data
export: Function to export data

Defined in: [entity.ts:77](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L77)
