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

Defined in: [entity.ts:195](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/entity.ts#L195)

___

### caption

• `Optional` **caption**: *string*

Display text for label

Inherited from: [EditLayoutItemOptions](editlayoutitemoptions.md).[caption](editlayoutitemoptions.md#caption)

Defined in: [entity.ts:144](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/entity.ts#L144)

___

### dataMember

• `Optional` **dataMember**: *string*

Property of business object the editor is attached to

Inherited from: [EditLayoutItemOptions](editlayoutitemoptions.md).[dataMember](editlayoutitemoptions.md#datamember)

Defined in: [entity.ts:149](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/entity.ts#L149)

___

### displayExpr

• `Optional` **displayExpr**: *string*

Display data member in lookup query result (only for editors with select list functionality)

Inherited from: [EditLayoutItemOptions](editlayoutitemoptions.md).[displayExpr](editlayoutitemoptions.md#displayexpr)

Defined in: [entity.ts:180](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/entity.ts#L180)

___

### editFunction

• `Optional` **editFunction**: *string*

Custom edit function executed on inline editing

Defined in: [entity.ts:300](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/entity.ts#L300)

___

### editable

• `Optional` **editable**: *boolean*

Enable inline editing of column value in table

Defined in: [entity.ts:295](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/entity.ts#L295)

___

### fixedPosition

• `Optional` **fixedPosition**: *left* \| *right*

Fixing position of column in table

Defined in: [entity.ts:270](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/entity.ts#L270)

___

### height

• `Optional` **height**: *string*

Optional fixed height for editor component

Inherited from: [EditLayoutItemOptions](editlayoutitemoptions.md).[height](editlayoutitemoptions.md#height)

Defined in: [entity.ts:185](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/entity.ts#L185)

___

### hidingPriority

• `Optional` **hidingPriority**: *number*

Hiding priority of column for hiding columns on small screens

Defined in: [entity.ts:285](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/entity.ts#L285)

___

### hint

• `Optional` **hint**: *string*

Hint displayed as tooltip on editor

Inherited from: [EditLayoutItemOptions](editlayoutitemoptions.md).[hint](editlayoutitemoptions.md#hint)

Defined in: [entity.ts:205](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/entity.ts#L205)

___

### itemoptions

• `Optional` **itemoptions**: *unknown*

Editor component specific additional options

Inherited from: [EditLayoutItemOptions](editlayoutitemoptions.md).[itemoptions](editlayoutitemoptions.md#itemoptions)

Defined in: [entity.ts:215](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/entity.ts#L215)

___

### items

• `Optional` **items**: { `Text`: *string* ; `Value`: *string*  }[]

Static item list used as select list (only for editors with select list functionality)

Inherited from: [EditLayoutItemOptions](editlayoutitemoptions.md).[items](editlayoutitemoptions.md#items)

Defined in: [entity.ts:210](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/entity.ts#L210)

___

### itemsMember

• `Optional` **itemsMember**: *string*

Data member of business object containing select list (only for editors with select list functionality)

Inherited from: [EditLayoutItemOptions](editlayoutitemoptions.md).[itemsMember](editlayoutitemoptions.md#itemsmember)

Defined in: [entity.ts:200](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/entity.ts#L200)

___

### lookup

• `Optional` **lookup**: *string*

Lookup identifier (only for editors with select list functionality)

Inherited from: [EditLayoutItemOptions](editlayoutitemoptions.md).[lookup](editlayoutitemoptions.md#lookup)

Defined in: [entity.ts:164](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/entity.ts#L164)

___

### lookupParam

• `Optional` **lookupParam**: *string*

Optional data member for lookup query (only for editors with select list functionality).
The current business object property value of data member will be supplied as parameter to lookup query

Inherited from: [EditLayoutItemOptions](editlayoutitemoptions.md).[lookupParam](editlayoutitemoptions.md#lookupparam)

Defined in: [entity.ts:170](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/entity.ts#L170)

___

### popuplayout

• `Optional` **popuplayout**: *string*

Identifier of edit layout used in popup edit box

Defined in: [entity.ts:305](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/entity.ts#L305)

___

### position

• `Optional` **position**: *number*

Position of column in table (ascending sorted left to right)

Defined in: [entity.ts:280](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/entity.ts#L280)

___

### precision

• `Optional` **precision**: *number*

Precision for displaying floating numbers

Defined in: [entity.ts:265](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/entity.ts#L265)

___

### readonly

• `Optional` **readonly**: *boolean*

If set, the property is not changeable by user

Inherited from: [EditLayoutItemOptions](editlayoutitemoptions.md).[readonly](editlayoutitemoptions.md#readonly)

Defined in: [entity.ts:159](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/entity.ts#L159)

___

### required

• `Optional` **required**: *boolean*

If set, property of business object is required to have a value

Inherited from: [EditLayoutItemOptions](editlayoutitemoptions.md).[required](editlayoutitemoptions.md#required)

Defined in: [entity.ts:154](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/entity.ts#L154)

___

### sorting

• `Optional` **sorting**: *asc* \| *desc*

Default sorting setting of column

Defined in: [entity.ts:275](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/entity.ts#L275)

___

### type

• **type**: *string*

Type of table column (specific for used rendering engine)

Defined in: [entity.ts:260](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/entity.ts#L260)

___

### validations

• `Optional` **validations**: { `identifier`: *string* ; `message`: *string*  }[]

List of custom validation rules (Have to be checked in editorValidating custom script)

Inherited from: [EditLayoutItemOptions](editlayoutitemoptions.md).[validations](editlayoutitemoptions.md#validations)

Defined in: [entity.ts:220](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/entity.ts#L220)

___

### valueExpr

• `Optional` **valueExpr**: *string*

Value data member in lookup query result (only for editors with select list functionality)

Inherited from: [EditLayoutItemOptions](editlayoutitemoptions.md).[valueExpr](editlayoutitemoptions.md#valueexpr)

Defined in: [entity.ts:175](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/entity.ts#L175)

___

### visible

• `Optional` **visible**: *boolean*

Default value for column visibility

Defined in: [entity.ts:290](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/entity.ts#L290)

___

### width

• `Optional` **width**: *string*

Optional fixed width for editor component

Inherited from: [EditLayoutItemOptions](editlayoutitemoptions.md).[width](editlayoutitemoptions.md#width)

Defined in: [entity.ts:190](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/entity.ts#L190)
