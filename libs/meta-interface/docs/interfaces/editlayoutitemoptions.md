[@ballware/meta-interface](../README.md) / [Exports](../modules.md) / EditLayoutItemOptions

# Interface: EditLayoutItemOptions

Available Options for edit/detail layout items

## Hierarchy

* **EditLayoutItemOptions**

  ↳ [*GridLayoutColumn*](gridlayoutcolumn.md)

## Table of contents

### Properties

- [acceptCustomValue](editlayoutitemoptions.md#acceptcustomvalue)
- [caption](editlayoutitemoptions.md#caption)
- [dataMember](editlayoutitemoptions.md#datamember)
- [displayExpr](editlayoutitemoptions.md#displayexpr)
- [height](editlayoutitemoptions.md#height)
- [hint](editlayoutitemoptions.md#hint)
- [itemoptions](editlayoutitemoptions.md#itemoptions)
- [items](editlayoutitemoptions.md#items)
- [itemsMember](editlayoutitemoptions.md#itemsmember)
- [lookup](editlayoutitemoptions.md#lookup)
- [lookupParam](editlayoutitemoptions.md#lookupparam)
- [readonly](editlayoutitemoptions.md#readonly)
- [required](editlayoutitemoptions.md#required)
- [validations](editlayoutitemoptions.md#validations)
- [valueExpr](editlayoutitemoptions.md#valueexpr)
- [width](editlayoutitemoptions.md#width)

## Properties

### acceptCustomValue

• `Optional` **acceptCustomValue**: *boolean*

Accept alternative custom user input as value (only for editors with select list functionality)

Defined in: lib/entity.ts:168

___

### caption

• `Optional` **caption**: *string*

Display text for label

Defined in: lib/entity.ts:117

___

### dataMember

• `Optional` **dataMember**: *string*

Property of business object the editor is attached to

Defined in: lib/entity.ts:122

___

### displayExpr

• `Optional` **displayExpr**: *string*

Display data member in lookup query result (only for editors with select list functionality)

Defined in: lib/entity.ts:153

___

### height

• `Optional` **height**: *string*

Optional fixed height for editor component

Defined in: lib/entity.ts:158

___

### hint

• `Optional` **hint**: *string*

Hint displayed as tooltip on editor

Defined in: lib/entity.ts:178

___

### itemoptions

• `Optional` **itemoptions**: *unknown*

Editor component specific additional options

Defined in: lib/entity.ts:188

___

### items

• `Optional` **items**: { `Text`: *string* ; `Value`: *string*  }[]

Static item list used as select list (only for editors with select list functionality)

Defined in: lib/entity.ts:183

___

### itemsMember

• `Optional` **itemsMember**: *string*

Data member of business object containing select list (only for editors with select list functionality)

Defined in: lib/entity.ts:173

___

### lookup

• `Optional` **lookup**: *string*

Lookup identifier (only for editors with select list functionality)

Defined in: lib/entity.ts:137

___

### lookupParam

• `Optional` **lookupParam**: *string*

Optional data member for lookup query (only for editors with select list functionality).
The current business object property value of data member will be supplied as parameter to lookup query

Defined in: lib/entity.ts:143

___

### readonly

• `Optional` **readonly**: *boolean*

If set, the property is not changeable by user

Defined in: lib/entity.ts:132

___

### required

• `Optional` **required**: *boolean*

If set, property of business object is required to have a value

Defined in: lib/entity.ts:127

___

### validations

• `Optional` **validations**: { `identifier`: *string* ; `message`: *string*  }[]

List of custom validation rules (Have to be checked in editorValidating custom script)

Defined in: lib/entity.ts:193

___

### valueExpr

• `Optional` **valueExpr**: *string*

Value data member in lookup query result (only for editors with select list functionality)

Defined in: lib/entity.ts:148

___

### width

• `Optional` **width**: *string*

Optional fixed width for editor component

Defined in: lib/entity.ts:163
