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

• `Optional` **acceptCustomValue**: *undefined* \| *boolean*

Accept alternative custom user input as value (only for editors with select list functionality)

Defined in: [entity.ts:168](https://github.com/frankball/ballware-meta-interface/blob/d19dcf1/src/entity.ts#L168)

___

### caption

• `Optional` **caption**: *undefined* \| *string*

Display text for label

Defined in: [entity.ts:117](https://github.com/frankball/ballware-meta-interface/blob/d19dcf1/src/entity.ts#L117)

___

### dataMember

• `Optional` **dataMember**: *undefined* \| *string*

Property of business object the editor is attached to

Defined in: [entity.ts:122](https://github.com/frankball/ballware-meta-interface/blob/d19dcf1/src/entity.ts#L122)

___

### displayExpr

• `Optional` **displayExpr**: *undefined* \| *string*

Display data member in lookup query result (only for editors with select list functionality)

Defined in: [entity.ts:153](https://github.com/frankball/ballware-meta-interface/blob/d19dcf1/src/entity.ts#L153)

___

### height

• `Optional` **height**: *undefined* \| *string*

Optional fixed height for editor component

Defined in: [entity.ts:158](https://github.com/frankball/ballware-meta-interface/blob/d19dcf1/src/entity.ts#L158)

___

### hint

• `Optional` **hint**: *undefined* \| *string*

Hint displayed as tooltip on editor

Defined in: [entity.ts:178](https://github.com/frankball/ballware-meta-interface/blob/d19dcf1/src/entity.ts#L178)

___

### itemoptions

• `Optional` **itemoptions**: *unknown*

Editor component specific additional options

Defined in: [entity.ts:188](https://github.com/frankball/ballware-meta-interface/blob/d19dcf1/src/entity.ts#L188)

___

### items

• `Optional` **items**: *undefined* \| { `Text`: *string* ; `Value`: *string*  }[]

Static item list used as select list (only for editors with select list functionality)

Defined in: [entity.ts:183](https://github.com/frankball/ballware-meta-interface/blob/d19dcf1/src/entity.ts#L183)

___

### itemsMember

• `Optional` **itemsMember**: *undefined* \| *string*

Data member of business object containing select list (only for editors with select list functionality)

Defined in: [entity.ts:173](https://github.com/frankball/ballware-meta-interface/blob/d19dcf1/src/entity.ts#L173)

___

### lookup

• `Optional` **lookup**: *undefined* \| *string*

Lookup identifier (only for editors with select list functionality)

Defined in: [entity.ts:137](https://github.com/frankball/ballware-meta-interface/blob/d19dcf1/src/entity.ts#L137)

___

### lookupParam

• `Optional` **lookupParam**: *undefined* \| *string*

Optional data member for lookup query (only for editors with select list functionality).
The current business object property value of data member will be supplied as parameter to lookup query

Defined in: [entity.ts:143](https://github.com/frankball/ballware-meta-interface/blob/d19dcf1/src/entity.ts#L143)

___

### readonly

• `Optional` **readonly**: *undefined* \| *boolean*

If set, the property is not changeable by user

Defined in: [entity.ts:132](https://github.com/frankball/ballware-meta-interface/blob/d19dcf1/src/entity.ts#L132)

___

### required

• `Optional` **required**: *undefined* \| *boolean*

If set, property of business object is required to have a value

Defined in: [entity.ts:127](https://github.com/frankball/ballware-meta-interface/blob/d19dcf1/src/entity.ts#L127)

___

### validations

• `Optional` **validations**: *undefined* \| { `identifier`: *string* ; `message`: *string*  }[]

List of custom validation rules (Have to be checked in editorValidating custom script)

Defined in: [entity.ts:193](https://github.com/frankball/ballware-meta-interface/blob/d19dcf1/src/entity.ts#L193)

___

### valueExpr

• `Optional` **valueExpr**: *undefined* \| *string*

Value data member in lookup query result (only for editors with select list functionality)

Defined in: [entity.ts:148](https://github.com/frankball/ballware-meta-interface/blob/d19dcf1/src/entity.ts#L148)

___

### width

• `Optional` **width**: *undefined* \| *string*

Optional fixed width for editor component

Defined in: [entity.ts:163](https://github.com/frankball/ballware-meta-interface/blob/d19dcf1/src/entity.ts#L163)
