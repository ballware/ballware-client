[@ballware/meta-interface](../README.md) / [Exports](../modules.md) / CompiledEntityCustomScripts

# Interface: CompiledEntityCustomScripts

Definition of business object specific custom scripts

## Table of contents

### Properties

- [detailGridCellPreparing](compiledentitycustomscripts.md#detailgridcellpreparing)
- [detailGridRowValidating](compiledentitycustomscripts.md#detailgridrowvalidating)
- [editorEntered](compiledentitycustomscripts.md#editorentered)
- [editorEvent](compiledentitycustomscripts.md#editorevent)
- [editorInitialized](compiledentitycustomscripts.md#editorinitialized)
- [editorPreparing](compiledentitycustomscripts.md#editorpreparing)
- [editorValidating](compiledentitycustomscripts.md#editorvalidating)
- [editorValueChanged](compiledentitycustomscripts.md#editorvaluechanged)
- [evaluateCustomFunction](compiledentitycustomscripts.md#evaluatecustomfunction)
- [extendedRightsCheck](compiledentitycustomscripts.md#extendedrightscheck)
- [initNewDetailItem](compiledentitycustomscripts.md#initnewdetailitem)
- [prepareCustomFunction](compiledentitycustomscripts.md#preparecustomfunction)
- [prepareCustomParam](compiledentitycustomscripts.md#preparecustomparam)
- [prepareEditLayout](compiledentitycustomscripts.md#prepareeditlayout)
- [prepareGridLayout](compiledentitycustomscripts.md#preparegridlayout)
- [rightsParamForHead](compiledentitycustomscripts.md#rightsparamforhead)
- [rightsParamForItem](compiledentitycustomscripts.md#rightsparamforitem)

## Properties

### detailGridCellPreparing

• `Optional` **detailGridCellPreparing**: (`mode`: *string*, `item`: [*CrudItem*](cruditem.md), `detailItem`: *Record*<string, unknown\>, `identifier`: *string*, `options`: [*GridLayoutColumn*](gridlayoutcolumn.md), `util`: [*ScriptUtil*](scriptutil.md)) => *void*

Manipulate cell options on detail member grid before rendering

**`param`** Edit mode (add, edit, view)

**`param`** Instance of edited root business object

**`param`** Instance of edited detail item

**`param`** Configured data member of editor

**`param`** Configured cell options

**`param`** Utility for performing misc operations

#### Type declaration:

▸ (`mode`: *string*, `item`: [*CrudItem*](cruditem.md), `detailItem`: *Record*<string, unknown\>, `identifier`: *string*, `options`: [*GridLayoutColumn*](gridlayoutcolumn.md), `util`: [*ScriptUtil*](scriptutil.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`mode` | *string* |
`item` | [*CrudItem*](cruditem.md) |
`detailItem` | *Record*<string, unknown\> |
`identifier` | *string* |
`options` | [*GridLayoutColumn*](gridlayoutcolumn.md) |
`util` | [*ScriptUtil*](scriptutil.md) |

**Returns:** *void*

Defined in: [entity.ts:605](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L605)

Defined in: [entity.ts:605](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L605)

___

### detailGridRowValidating

• `Optional` **detailGridRowValidating**: (`mode`: *string*, `item`: [*CrudItem*](cruditem.md), `detailItem`: *Record*<string, unknown\>, `identifier`: *string*, `util`: [*ScriptUtil*](scriptutil.md)) => *string*

Validate detail row values

**`param`** Edit mode (add, edit, view)

**`param`** Instance of edited root business object

**`param`** Instance of edited detail item

**`param`** Configured data member of detail grid

**`param`** Utility for performing misc operations

**`returns`** Custom validation message if validation failed, otherwise undefined

#### Type declaration:

▸ (`mode`: *string*, `item`: [*CrudItem*](cruditem.md), `detailItem`: *Record*<string, unknown\>, `identifier`: *string*, `util`: [*ScriptUtil*](scriptutil.md)): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`mode` | *string* |
`item` | [*CrudItem*](cruditem.md) |
`detailItem` | *Record*<string, unknown\> |
`identifier` | *string* |
`util` | [*ScriptUtil*](scriptutil.md) |

**Returns:** *string*

Defined in: [entity.ts:624](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L624)

Defined in: [entity.ts:624](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L624)

___

### editorEntered

• `Optional` **editorEntered**: (`mode`: *string*, `item`: *Record*<string, unknown\>, `editUtil`: [*EditUtil*](editutil.md), `identifier`: *string*, `lookups`: *Record*<string, unknown\>, `util`: [*ScriptUtil*](scriptutil.md)) => *void*

Custom functionality on editor got focus

**`param`** Edit mode (add, edit, view)

**`param`** Instance of business object for editing

**`param`** Adapter for accessing editor components by data member

**`param`** Configured data member of editor

**`param`** Lookup definitions prepared for business object

**`param`** Utility for performing misc operations

#### Type declaration:

▸ (`mode`: *string*, `item`: *Record*<string, unknown\>, `editUtil`: [*EditUtil*](editutil.md), `identifier`: *string*, `lookups`: *Record*<string, unknown\>, `util`: [*ScriptUtil*](scriptutil.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`mode` | *string* |
`item` | *Record*<string, unknown\> |
`editUtil` | [*EditUtil*](editutil.md) |
`identifier` | *string* |
`lookups` | *Record*<string, unknown\> |
`util` | [*ScriptUtil*](scriptutil.md) |

**Returns:** *void*

Defined in: [entity.ts:564](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L564)

Defined in: [entity.ts:564](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L564)

___

### editorEvent

• `Optional` **editorEvent**: (`item`: *Record*<string, unknown\>, `editUtil`: [*EditUtil*](editutil.md), `identifier`: *string*, `event`: *string*, `lookups`: *Record*<string, unknown\>, `util`: [*ScriptUtil*](scriptutil.md)) => *void*

Custom functionality on editor specific event

**`param`** Instance of business object for editing

**`param`** Adapter for accessing editor components by data member

**`param`** Configured data member of editor

**`param`** Event identifier (editor specific)

**`param`** Lookup definitions prepared for business object

**`param`** Utility for performing misc operations

#### Type declaration:

▸ (`item`: *Record*<string, unknown\>, `editUtil`: [*EditUtil*](editutil.md), `identifier`: *string*, `event`: *string*, `lookups`: *Record*<string, unknown\>, `util`: [*ScriptUtil*](scriptutil.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`item` | *Record*<string, unknown\> |
`editUtil` | [*EditUtil*](editutil.md) |
`identifier` | *string* |
`event` | *string* |
`lookups` | *Record*<string, unknown\> |
`util` | [*ScriptUtil*](scriptutil.md) |

**Returns:** *void*

Defined in: [entity.ts:545](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L545)

Defined in: [entity.ts:545](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L545)

___

### editorInitialized

• `Optional` **editorInitialized**: (`mode`: *string*, `item`: *Record*<string, unknown\>, `editUtil`: [*EditUtil*](editutil.md), `identifier`: *string*, `lookups`: *Record*<string, unknown\>, `util`: [*ScriptUtil*](scriptutil.md)) => *void*

Configure editor instance after rendering

**`param`** Edit mode (add, edit, view)

**`param`** Instance of business object for editing

**`param`** Adapter for accessing editor components by data member

**`param`** Configured data member of editor

**`param`** Lookup definitions prepared for business object

**`param`** Utility for performing misc operations

#### Type declaration:

▸ (`mode`: *string*, `item`: *Record*<string, unknown\>, `editUtil`: [*EditUtil*](editutil.md), `identifier`: *string*, `lookups`: *Record*<string, unknown\>, `util`: [*ScriptUtil*](scriptutil.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`mode` | *string* |
`item` | *Record*<string, unknown\> |
`editUtil` | [*EditUtil*](editutil.md) |
`identifier` | *string* |
`lookups` | *Record*<string, unknown\> |
`util` | [*ScriptUtil*](scriptutil.md) |

**Returns:** *void*

Defined in: [entity.ts:507](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L507)

Defined in: [entity.ts:507](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L507)

___

### editorPreparing

• `Optional` **editorPreparing**: (`mode`: *string*, `item`: *Record*<string, unknown\>, `layoutItem`: [*EditLayoutItemOptions*](editlayoutitemoptions.md), `identifier`: *string*, `lookups`: *Record*<string, unknown\>, `util`: [*ScriptUtil*](scriptutil.md)) => *void*

Manipulate editor options before rendering

**`param`** Edit mode (add, edit, view)

**`param`** Instance of business object for editing

**`param`** Configured options of editor

**`param`** Configured data member of editor

**`param`** Lookup definitions prepared for business object

**`param`** Utility for performing misc operations

#### Type declaration:

▸ (`mode`: *string*, `item`: *Record*<string, unknown\>, `layoutItem`: [*EditLayoutItemOptions*](editlayoutitemoptions.md), `identifier`: *string*, `lookups`: *Record*<string, unknown\>, `util`: [*ScriptUtil*](scriptutil.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`mode` | *string* |
`item` | *Record*<string, unknown\> |
`layoutItem` | [*EditLayoutItemOptions*](editlayoutitemoptions.md) |
`identifier` | *string* |
`lookups` | *Record*<string, unknown\> |
`util` | [*ScriptUtil*](scriptutil.md) |

**Returns:** *void*

Defined in: [entity.ts:488](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L488)

Defined in: [entity.ts:488](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L488)

___

### editorValidating

• `Optional` **editorValidating**: (`item`: *Record*<string, unknown\>, `editUtil`: [*EditUtil*](editutil.md), `identifier`: *string*, `value`: [*ValueType*](../modules.md#valuetype), `validation`: *string*, `lookups`: *Record*<string, unknown\>, `util`: [*ScriptUtil*](scriptutil.md)) => *boolean*

Custom functionality on editor validation (if custom validation rules are set)

**`param`** Instance of business object for editing

**`param`** Adapter for accessing editor components by data member

**`param`** Configured data member of editor

**`param`** Current value of editor

**`param`** Identifier of custom validation rule

**`param`** Lookup definitions prepared for business object

**`param`** Utility for performing misc operations

**`returns`** true if current value is valid, false if not

#### Type declaration:

▸ (`item`: *Record*<string, unknown\>, `editUtil`: [*EditUtil*](editutil.md), `identifier`: *string*, `value`: [*ValueType*](../modules.md#valuetype), `validation`: *string*, `lookups`: *Record*<string, unknown\>, `util`: [*ScriptUtil*](scriptutil.md)): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`item` | *Record*<string, unknown\> |
`editUtil` | [*EditUtil*](editutil.md) |
`identifier` | *string* |
`value` | [*ValueType*](../modules.md#valuetype) |
`validation` | *string* |
`lookups` | *Record*<string, unknown\> |
`util` | [*ScriptUtil*](scriptutil.md) |

**Returns:** *boolean*

Defined in: [entity.ts:585](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L585)

Defined in: [entity.ts:585](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L585)

___

### editorValueChanged

• `Optional` **editorValueChanged**: (`item`: *Record*<string, unknown\>, `editUtil`: [*EditUtil*](editutil.md), `identifier`: *string*, `value`: [*ValueType*](../modules.md#valuetype), `lookups`: *Record*<string, unknown\>, `util`: [*ScriptUtil*](scriptutil.md)) => *void*

Custom functionality on editor value changed

**`param`** Instance of business object for editing

**`param`** Adapter for accessing editor components by data member

**`param`** Configured data member of editor

**`param`** Current value of editor

**`param`** Lookup definitions prepared for business object

**`param`** Utility for performing misc operations

#### Type declaration:

▸ (`item`: *Record*<string, unknown\>, `editUtil`: [*EditUtil*](editutil.md), `identifier`: *string*, `value`: [*ValueType*](../modules.md#valuetype), `lookups`: *Record*<string, unknown\>, `util`: [*ScriptUtil*](scriptutil.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`item` | *Record*<string, unknown\> |
`editUtil` | [*EditUtil*](editutil.md) |
`identifier` | *string* |
`value` | [*ValueType*](../modules.md#valuetype) |
`lookups` | *Record*<string, unknown\> |
`util` | [*ScriptUtil*](scriptutil.md) |

**Returns:** *void*

Defined in: [entity.ts:526](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L526)

Defined in: [entity.ts:526](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L526)

___

### evaluateCustomFunction

• `Optional` **evaluateCustomFunction**: (`identifier`: *string*, `lookups`: *Record*<string, unknown\>, `util`: [*ScriptUtil*](scriptutil.md), `param`: *Record*<string, unknown\>, `saveCallback`: (`param`: *Record*<string, unknown\>) => *void*, `messageCallback`: (`message`: *string*) => *void*) => *void*

Evaluation custom function result after execution

**`param`** Identifier of custom function

**`param`** Lookup definitions prepared for business object

**`param`** Utility for performing misc operations

**`param`** Execute save or batch save operation with prepared objects

**`param`** Show notification message to user

#### Type declaration:

▸ (`identifier`: *string*, `lookups`: *Record*<string, unknown\>, `util`: [*ScriptUtil*](scriptutil.md), `param`: *Record*<string, unknown\>, `saveCallback`: (`param`: *Record*<string, unknown\>) => *void*, `messageCallback`: (`message`: *string*) => *void*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`identifier` | *string* |
`lookups` | *Record*<string, unknown\> |
`util` | [*ScriptUtil*](scriptutil.md) |
`param` | *Record*<string, unknown\> |
`saveCallback` | (`param`: *Record*<string, unknown\>) => *void* |
`messageCallback` | (`message`: *string*) => *void* |

**Returns:** *void*

Defined in: [entity.ts:675](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L675)

Defined in: [entity.ts:675](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L675)

___

### extendedRightsCheck

• `Optional` **extendedRightsCheck**: [*ExtendedRightsCheckFunc*](../modules.md#extendedrightscheckfunc)

Custom rights check operations

Defined in: [entity.ts:410](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L410)

___

### initNewDetailItem

• `Optional` **initNewDetailItem**: (`dataMember`: *string*, `item`: [*CrudItem*](cruditem.md), `detailItem`: *Record*<string, unknown\>, `util`: [*ScriptUtil*](scriptutil.md)) => *void*

Initialize new instance of detail item

**`param`** Configured data member of detail grid

**`param`** Instance of edited root business object

**`param`** Instance of edited detail item

**`param`** Utility for performing misc operations

#### Type declaration:

▸ (`dataMember`: *string*, `item`: [*CrudItem*](cruditem.md), `detailItem`: *Record*<string, unknown\>, `util`: [*ScriptUtil*](scriptutil.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`dataMember` | *string* |
`item` | [*CrudItem*](cruditem.md) |
`detailItem` | *Record*<string, unknown\> |
`util` | [*ScriptUtil*](scriptutil.md) |

**Returns:** *void*

Defined in: [entity.ts:640](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L640)

Defined in: [entity.ts:640](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L640)

___

### prepareCustomFunction

• `Optional` **prepareCustomFunction**: (`identifier`: *string*, `lookups`: *Record*<string, unknown\>, `util`: [*ScriptUtil*](scriptutil.md), `executeCallback`: (`param`: *Record*<string, unknown\>) => *void*, `messageCallback`: (`message`: *string*) => *void*, `selection?`: [*CrudItem*](cruditem.md)[]) => *void*

Prepare custom function before execution

**`param`** Identifier of custom function

**`param`** Lookup definitions prepared for business object

**`param`** Utility for performing misc operations

**`param`** Execute custom function with prepared params

**`param`** Show notification message to user

**`param`** Current selected business objects (only for function type 'edit')

#### Type declaration:

▸ (`identifier`: *string*, `lookups`: *Record*<string, unknown\>, `util`: [*ScriptUtil*](scriptutil.md), `executeCallback`: (`param`: *Record*<string, unknown\>) => *void*, `messageCallback`: (`message`: *string*) => *void*, `selection?`: [*CrudItem*](cruditem.md)[]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`identifier` | *string* |
`lookups` | *Record*<string, unknown\> |
`util` | [*ScriptUtil*](scriptutil.md) |
`executeCallback` | (`param`: *Record*<string, unknown\>) => *void* |
`messageCallback` | (`message`: *string*) => *void* |
`selection?` | [*CrudItem*](cruditem.md)[] |

**Returns:** *void*

Defined in: [entity.ts:657](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L657)

Defined in: [entity.ts:657](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L657)

___

### prepareCustomParam

• `Optional` **prepareCustomParam**: (`lookups`: *Record*<string, unknown\>, `util`: [*ScriptUtil*](scriptutil.md), `callback`: (`customParam`: *Record*<string, unknown\>) => *void*) => *void*

Prepare custom param object containing values needed for other custom scripts

**`param`** Lookup definitions prepared for business object

**`param`** Utility for performing misc operations

**`param`** Async callback operation performed by custom script when custom param preparation is finished

#### Type declaration:

▸ (`lookups`: *Record*<string, unknown\>, `util`: [*ScriptUtil*](scriptutil.md), `callback`: (`customParam`: *Record*<string, unknown\>) => *void*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`lookups` | *Record*<string, unknown\> |
`util` | [*ScriptUtil*](scriptutil.md) |
`callback` | (`customParam`: *Record*<string, unknown\>) => *void* |

**Returns:** *void*

Defined in: [entity.ts:440](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L440)

Defined in: [entity.ts:440](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L440)

___

### prepareEditLayout

• `Optional` **prepareEditLayout**: (`mode`: *string*, `lookups`: *Record*<string, unknown\>, `customParam`: *unknown*, `util`: [*ScriptUtil*](scriptutil.md), `editLayout`: [*EditLayout*](editlayout.md)) => *void*

Manipulate configured edit layout before rendering

**`param`** Edit mode (add, edit, view)

**`param`** Lookup definitions prepared for business object

**`param`** Current value of prepared custom param (previous result of prepareCustomParam function)

**`param`** Utility for performing misc operations

**`param`** Edit layout instance

#### Type declaration:

▸ (`mode`: *string*, `lookups`: *Record*<string, unknown\>, `customParam`: *unknown*, `util`: [*ScriptUtil*](scriptutil.md), `editLayout`: [*EditLayout*](editlayout.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`mode` | *string* |
`lookups` | *Record*<string, unknown\> |
`customParam` | *unknown* |
`util` | [*ScriptUtil*](scriptutil.md) |
`editLayout` | [*EditLayout*](editlayout.md) |

**Returns:** *void*

Defined in: [entity.ts:470](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L470)

Defined in: [entity.ts:470](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L470)

___

### prepareGridLayout

• `Optional` **prepareGridLayout**: (`lookups`: *Record*<string, unknown\>, `customParam`: *unknown*, `util`: [*ScriptUtil*](scriptutil.md), `gridLayout`: [*GridLayout*](gridlayout.md)) => *void*

Manipulate configured grid layout before rendering

**`param`** Lookup definitions prepared for business object

**`param`** Current value of prepared custom param (previous result of prepareCustomParam function)

**`param`** Utility for performing misc operations

**`param`** Grid layout instance

#### Type declaration:

▸ (`lookups`: *Record*<string, unknown\>, `customParam`: *unknown*, `util`: [*ScriptUtil*](scriptutil.md), `gridLayout`: [*GridLayout*](gridlayout.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`lookups` | *Record*<string, unknown\> |
`customParam` | *unknown* |
`util` | [*ScriptUtil*](scriptutil.md) |
`gridLayout` | [*GridLayout*](gridlayout.md) |

**Returns:** *void*

Defined in: [entity.ts:454](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L454)

Defined in: [entity.ts:454](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L454)

___

### rightsParamForHead

• `Optional` **rightsParamForHead**: (`customParam`: *unknown*) => *Record*<string, unknown\>

Prepare custom param for extendedRightsCheck if operation is not connected to specific business object
(default add operation, custom function with type 'add')

**`param`** Current value of prepared custom param (previous result of prepareCustomParam function)

**`returns`** Object containing values needed for extendedRightsCheck implementation

#### Type declaration:

▸ (`customParam`: *unknown*): *Record*<string, unknown\>

#### Parameters:

Name | Type |
:------ | :------ |
`customParam` | *unknown* |

**Returns:** *Record*<string, unknown\>

Defined in: [entity.ts:419](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L419)

Defined in: [entity.ts:419](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L419)

___

### rightsParamForItem

• `Optional` **rightsParamForItem**: (`item`: *Record*<string, unknown\>, `customParam`: *unknown*) => *Record*<string, unknown\>

Prepare custom param for extendedRightsCheck if operation is not connected to specific business object  (edit, delete)

**`param`** Business object instance

**`param`** Current value of prepared custom param (previous result of prepareCustomParam function)

**`returns`** Object containing values needed for extendedRightsCheck implementation

#### Type declaration:

▸ (`item`: *Record*<string, unknown\>, `customParam`: *unknown*): *Record*<string, unknown\>

#### Parameters:

Name | Type |
:------ | :------ |
`item` | *Record*<string, unknown\> |
`customParam` | *unknown* |

**Returns:** *Record*<string, unknown\>

Defined in: [entity.ts:428](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L428)

Defined in: [entity.ts:428](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L428)
