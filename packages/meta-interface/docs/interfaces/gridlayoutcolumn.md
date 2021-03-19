[@ballware/meta-interface](../README.md) / [Exports](../modules.md) / GridLayoutColumn

# Interface: GridLayoutColumn

Definition of column in table display

## Hierarchy

* [*EditLayoutItemOptions*](editlayoutitemoptions.md)

  ↳ **GridLayoutColumn**

## Table of contents

### Properties

- [acceptCustomValue](gridlayoutcolumn.md#acceptcustomvalue)
- [caption](gridlayoutcolumn.md#caption)
- [dataMember](gridlayoutcolumn.md#datamember)
- [displayExpr](gridlayoutcolumn.md#displayexpr)
- [editFunction](gridlayoutcolumn.md#editfunction)
- [editable](gridlayoutcolumn.md#editable)
- [fixedPosition](gridlayoutcolumn.md#fixedposition)
- [height](gridlayoutcolumn.md#height)
- [hidingPriority](gridlayoutcolumn.md#hidingpriority)
- [hint](gridlayoutcolumn.md#hint)
- [itemoptions](gridlayoutcolumn.md#itemoptions)
- [items](gridlayoutcolumn.md#items)
- [itemsMember](gridlayoutcolumn.md#itemsmember)
- [lookup](gridlayoutcolumn.md#lookup)
- [lookupParam](gridlayoutcolumn.md#lookupparam)
- [popuplayout](gridlayoutcolumn.md#popuplayout)
- [position](gridlayoutcolumn.md#position)
- [precision](gridlayoutcolumn.md#precision)
- [readonly](gridlayoutcolumn.md#readonly)
- [required](gridlayoutcolumn.md#required)
- [sorting](gridlayoutcolumn.md#sorting)
- [type](gridlayoutcolumn.md#type)
- [validations](gridlayoutcolumn.md#validations)
- [valueExpr](gridlayoutcolumn.md#valueexpr)
- [visible](gridlayoutcolumn.md#visible)
- [width](gridlayoutcolumn.md#width)

## Properties

### acceptCustomValue

• `Optional` **acceptCustomValue**: *boolean*

Accept alternative custom user input as value (only for editors with select list functionality)

Inherited from: [EditLayoutItemOptions](editlayoutitemoptions.md).[acceptCustomValue](editlayoutitemoptions.md#acceptcustomvalue)

Defined in: [entity.ts:168](https://github.com/ballware/ballware-client/blob/88ab695/packages/meta-interface/src/entity.ts#L168)

___

### caption

• `Optional` **caption**: *string*

Display text for label

Inherited from: [EditLayoutItemOptions](editlayoutitemoptions.md).[caption](editlayoutitemoptions.md#caption)

Defined in: [entity.ts:117](https://github.com/ballware/ballware-client/blob/88ab695/packages/meta-interface/src/entity.ts#L117)

___

### dataMember

• `Optional` **dataMember**: *string*

Property of business object the editor is attached to

Inherited from: [EditLayoutItemOptions](editlayoutitemoptions.md).[dataMember](editlayoutitemoptions.md#datamember)

Defined in: [entity.ts:122](https://github.com/ballware/ballware-client/blob/88ab695/packages/meta-interface/src/entity.ts#L122)

___

### displayExpr

• `Optional` **displayExpr**: *string*

Display data member in lookup query result (only for editors with select list functionality)

Inherited from: [EditLayoutItemOptions](editlayoutitemoptions.md).[displayExpr](editlayoutitemoptions.md#displayexpr)

Defined in: [entity.ts:153](https://github.com/ballware/ballware-client/blob/88ab695/packages/meta-interface/src/entity.ts#L153)

___

### editFunction

• `Optional` **editFunction**: *string*

Custom edit function executed on inline editing

Defined in: [entity.ts:273](https://github.com/ballware/ballware-client/blob/88ab695/packages/meta-interface/src/entity.ts#L273)

___

### editable

• `Optional` **editable**: *boolean*

Enable inline editing of column value in table

Defined in: [entity.ts:268](https://github.com/ballware/ballware-client/blob/88ab695/packages/meta-interface/src/entity.ts#L268)

___

### fixedPosition

• `Optional` **fixedPosition**: *left* \| *right*

Fixing position of column in table

Defined in: [entity.ts:243](https://github.com/ballware/ballware-client/blob/88ab695/packages/meta-interface/src/entity.ts#L243)

___

### height

• `Optional` **height**: *string*

Optional fixed height for editor component

Inherited from: [EditLayoutItemOptions](editlayoutitemoptions.md).[height](editlayoutitemoptions.md#height)

Defined in: [entity.ts:158](https://github.com/ballware/ballware-client/blob/88ab695/packages/meta-interface/src/entity.ts#L158)

___

### hidingPriority

• `Optional` **hidingPriority**: *number*

Hiding priority of column for hiding columns on small screens

Defined in: [entity.ts:258](https://github.com/ballware/ballware-client/blob/88ab695/packages/meta-interface/src/entity.ts#L258)

___

### hint

• `Optional` **hint**: *string*

Hint displayed as tooltip on editor

Inherited from: [EditLayoutItemOptions](editlayoutitemoptions.md).[hint](editlayoutitemoptions.md#hint)

Defined in: [entity.ts:178](https://github.com/ballware/ballware-client/blob/88ab695/packages/meta-interface/src/entity.ts#L178)

___

### itemoptions

• `Optional` **itemoptions**: *unknown*

Editor component specific additional options

Inherited from: [EditLayoutItemOptions](editlayoutitemoptions.md).[itemoptions](editlayoutitemoptions.md#itemoptions)

Defined in: [entity.ts:188](https://github.com/ballware/ballware-client/blob/88ab695/packages/meta-interface/src/entity.ts#L188)

___

### items

• `Optional` **items**: { `Text`: *string* ; `Value`: *string*  }[]

Static item list used as select list (only for editors with select list functionality)

Inherited from: [EditLayoutItemOptions](editlayoutitemoptions.md).[items](editlayoutitemoptions.md#items)

Defined in: [entity.ts:183](https://github.com/ballware/ballware-client/blob/88ab695/packages/meta-interface/src/entity.ts#L183)

___

### itemsMember

• `Optional` **itemsMember**: *string*

Data member of business object containing select list (only for editors with select list functionality)

Inherited from: [EditLayoutItemOptions](editlayoutitemoptions.md).[itemsMember](editlayoutitemoptions.md#itemsmember)

Defined in: [entity.ts:173](https://github.com/ballware/ballware-client/blob/88ab695/packages/meta-interface/src/entity.ts#L173)

___

### lookup

• `Optional` **lookup**: *string*

Lookup identifier (only for editors with select list functionality)

Inherited from: [EditLayoutItemOptions](editlayoutitemoptions.md).[lookup](editlayoutitemoptions.md#lookup)

Defined in: [entity.ts:137](https://github.com/ballware/ballware-client/blob/88ab695/packages/meta-interface/src/entity.ts#L137)

___

### lookupParam

• `Optional` **lookupParam**: *string*

Optional data member for lookup query (only for editors with select list functionality).
The current business object property value of data member will be supplied as parameter to lookup query

Inherited from: [EditLayoutItemOptions](editlayoutitemoptions.md).[lookupParam](editlayoutitemoptions.md#lookupparam)

Defined in: [entity.ts:143](https://github.com/ballware/ballware-client/blob/88ab695/packages/meta-interface/src/entity.ts#L143)

___

### popuplayout

• `Optional` **popuplayout**: *string*

Identifier of edit layout used in popup edit box

Defined in: [entity.ts:278](https://github.com/ballware/ballware-client/blob/88ab695/packages/meta-interface/src/entity.ts#L278)

___

### position

• `Optional` **position**: *number*

Position of column in table (ascending sorted left to right)

Defined in: [entity.ts:253](https://github.com/ballware/ballware-client/blob/88ab695/packages/meta-interface/src/entity.ts#L253)

___

### precision

• `Optional` **precision**: *number*

Precision for displaying floating numbers

Defined in: [entity.ts:238](https://github.com/ballware/ballware-client/blob/88ab695/packages/meta-interface/src/entity.ts#L238)

___

### readonly

• `Optional` **readonly**: *boolean*

If set, the property is not changeable by user

Inherited from: [EditLayoutItemOptions](editlayoutitemoptions.md).[readonly](editlayoutitemoptions.md#readonly)

Defined in: [entity.ts:132](https://github.com/ballware/ballware-client/blob/88ab695/packages/meta-interface/src/entity.ts#L132)

___

### required

• `Optional` **required**: *boolean*

If set, property of business object is required to have a value

Inherited from: [EditLayoutItemOptions](editlayoutitemoptions.md).[required](editlayoutitemoptions.md#required)

Defined in: [entity.ts:127](https://github.com/ballware/ballware-client/blob/88ab695/packages/meta-interface/src/entity.ts#L127)

___

### sorting

• `Optional` **sorting**: *asc* \| *desc*

Default sorting setting of column

Defined in: [entity.ts:248](https://github.com/ballware/ballware-client/blob/88ab695/packages/meta-interface/src/entity.ts#L248)

___

### type

• **type**: *string*

Type of table column (specific for used rendering engine)

Defined in: [entity.ts:233](https://github.com/ballware/ballware-client/blob/88ab695/packages/meta-interface/src/entity.ts#L233)

___

### validations

• `Optional` **validations**: { `identifier`: *string* ; `message`: *string*  }[]

List of custom validation rules (Have to be checked in editorValidating custom script)

Inherited from: [EditLayoutItemOptions](editlayoutitemoptions.md).[validations](editlayoutitemoptions.md#validations)

Defined in: [entity.ts:193](https://github.com/ballware/ballware-client/blob/88ab695/packages/meta-interface/src/entity.ts#L193)

___

### valueExpr

• `Optional` **valueExpr**: *string*

Value data member in lookup query result (only for editors with select list functionality)

Inherited from: [EditLayoutItemOptions](editlayoutitemoptions.md).[valueExpr](editlayoutitemoptions.md#valueexpr)

Defined in: [entity.ts:148](https://github.com/ballware/ballware-client/blob/88ab695/packages/meta-interface/src/entity.ts#L148)

___

### visible

• `Optional` **visible**: *boolean*

Default value for column visibility

Defined in: [entity.ts:263](https://github.com/ballware/ballware-client/blob/88ab695/packages/meta-interface/src/entity.ts#L263)

___

### width

• `Optional` **width**: *string*

Optional fixed width for editor component

Inherited from: [EditLayoutItemOptions](editlayoutitemoptions.md).[width](editlayoutitemoptions.md#width)

Defined in: [entity.ts:163](https://github.com/ballware/ballware-client/blob/88ab695/packages/meta-interface/src/entity.ts#L163)
