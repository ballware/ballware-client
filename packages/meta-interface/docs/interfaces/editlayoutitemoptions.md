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

Defined in: [entity.ts:195](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L195)

___

### caption

• `Optional` **caption**: *string*

Display text for label

Defined in: [entity.ts:144](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L144)

___

### dataMember

• `Optional` **dataMember**: *string*

Property of business object the editor is attached to

Defined in: [entity.ts:149](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L149)

___

### displayExpr

• `Optional` **displayExpr**: *string*

Display data member in lookup query result (only for editors with select list functionality)

Defined in: [entity.ts:180](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L180)

___

### height

• `Optional` **height**: *string*

Optional fixed height for editor component

Defined in: [entity.ts:185](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L185)

___

### hint

• `Optional` **hint**: *string*

Hint displayed as tooltip on editor

Defined in: [entity.ts:205](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L205)

___

### itemoptions

• `Optional` **itemoptions**: *unknown*

Editor component specific additional options

Defined in: [entity.ts:215](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L215)

___

### items

• `Optional` **items**: { `Text`: *string* ; `Value`: *string*  }[]

Static item list used as select list (only for editors with select list functionality)

Defined in: [entity.ts:210](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L210)

___

### itemsMember

• `Optional` **itemsMember**: *string*

Data member of business object containing select list (only for editors with select list functionality)

Defined in: [entity.ts:200](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L200)

___

### lookup

• `Optional` **lookup**: *string*

Lookup identifier (only for editors with select list functionality)

Defined in: [entity.ts:164](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L164)

___

### lookupParam

• `Optional` **lookupParam**: *string*

Optional data member for lookup query (only for editors with select list functionality).
The current business object property value of data member will be supplied as parameter to lookup query

Defined in: [entity.ts:170](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L170)

___

### readonly

• `Optional` **readonly**: *boolean*

If set, the property is not changeable by user

Defined in: [entity.ts:159](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L159)

___

### required

• `Optional` **required**: *boolean*

If set, property of business object is required to have a value

Defined in: [entity.ts:154](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L154)

___

### validations

• `Optional` **validations**: { `identifier`: *string* ; `message`: *string*  }[]

List of custom validation rules (Have to be checked in editorValidating custom script)

Defined in: [entity.ts:220](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L220)

___

### valueExpr

• `Optional` **valueExpr**: *string*

Value data member in lookup query result (only for editors with select list functionality)

Defined in: [entity.ts:175](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L175)

___

### width

• `Optional` **width**: *string*

Optional fixed width for editor component

Defined in: [entity.ts:190](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L190)
