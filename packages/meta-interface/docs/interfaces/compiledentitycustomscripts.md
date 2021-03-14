[@ballware/meta-interface](../README.md) / [Exports](../modules.md) / CompiledEntityCustomScripts

# Interface: CompiledEntityCustomScripts

Definition of business object specific custom scripts

## Hierarchy

* **CompiledEntityCustomScripts**

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

• `Optional` **detailGridCellPreparing**: *undefined* \| (`mode`: *string*, `item`: [*CrudItem*](cruditem.md), `detailItem`: *Record*<*string*, *unknown*\>, `identifier`: *string*, `options`: [*GridLayoutColumn*](gridlayoutcolumn.md), `util`: [*ScriptUtil*](scriptutil.md)) => *void*

Manipulate cell options on detail member grid before rendering

**`param`** Edit mode (add, edit, view)

**`param`** Instance of edited root business object

**`param`** Instance of edited detail item

**`param`** Configured data member of editor

**`param`** Configured cell options

**`param`** Utility for performing misc operations

Defined in: [entity.ts:578](https://github.com/frankball/ballware-meta-interface/blob/08dd5e4/src/entity.ts#L578)

___

### detailGridRowValidating

• `Optional` **detailGridRowValidating**: *undefined* \| (`mode`: *string*, `item`: [*CrudItem*](cruditem.md), `detailItem`: *Record*<*string*, *unknown*\>, `identifier`: *string*, `util`: [*ScriptUtil*](scriptutil.md)) => *string*

Validate detail row values

**`param`** Edit mode (add, edit, view)

**`param`** Instance of edited root business object

**`param`** Instance of edited detail item

**`param`** Configured data member of detail grid

**`param`** Utility for performing misc operations

**`returns`** Custom validation message if validation failed, otherwise undefined

Defined in: [entity.ts:597](https://github.com/frankball/ballware-meta-interface/blob/08dd5e4/src/entity.ts#L597)

___

### editorEntered

• `Optional` **editorEntered**: *undefined* \| (`mode`: *string*, `item`: *Record*<*string*, *unknown*\>, `editUtil`: [*EditUtil*](editutil.md), `identifier`: *string*, `lookups`: *Record*<*string*, *unknown*\>, `util`: [*ScriptUtil*](scriptutil.md)) => *void*

Custom functionality on editor got focus

**`param`** Edit mode (add, edit, view)

**`param`** Instance of business object for editing

**`param`** Adapter for accessing editor components by data member

**`param`** Configured data member of editor

**`param`** Lookup definitions prepared for business object

**`param`** Utility for performing misc operations

Defined in: [entity.ts:537](https://github.com/frankball/ballware-meta-interface/blob/08dd5e4/src/entity.ts#L537)

___

### editorEvent

• `Optional` **editorEvent**: *undefined* \| (`item`: *Record*<*string*, *unknown*\>, `editUtil`: [*EditUtil*](editutil.md), `identifier`: *string*, `event`: *string*, `lookups`: *Record*<*string*, *unknown*\>, `util`: [*ScriptUtil*](scriptutil.md)) => *void*

Custom functionality on editor specific event

**`param`** Instance of business object for editing

**`param`** Adapter for accessing editor components by data member

**`param`** Configured data member of editor

**`param`** Event identifier (editor specific)

**`param`** Lookup definitions prepared for business object

**`param`** Utility for performing misc operations

Defined in: [entity.ts:518](https://github.com/frankball/ballware-meta-interface/blob/08dd5e4/src/entity.ts#L518)

___

### editorInitialized

• `Optional` **editorInitialized**: *undefined* \| (`mode`: *string*, `item`: *Record*<*string*, *unknown*\>, `editUtil`: [*EditUtil*](editutil.md), `identifier`: *string*, `lookups`: *Record*<*string*, *unknown*\>, `util`: [*ScriptUtil*](scriptutil.md)) => *void*

Configure editor instance after rendering

**`param`** Edit mode (add, edit, view)

**`param`** Instance of business object for editing

**`param`** Adapter for accessing editor components by data member

**`param`** Configured data member of editor

**`param`** Lookup definitions prepared for business object

**`param`** Utility for performing misc operations

Defined in: [entity.ts:480](https://github.com/frankball/ballware-meta-interface/blob/08dd5e4/src/entity.ts#L480)

___

### editorPreparing

• `Optional` **editorPreparing**: *undefined* \| (`mode`: *string*, `item`: *Record*<*string*, *unknown*\>, `layoutItem`: [*EditLayoutItemOptions*](editlayoutitemoptions.md), `identifier`: *string*, `lookups`: *Record*<*string*, *unknown*\>, `util`: [*ScriptUtil*](scriptutil.md)) => *void*

Manipulate editor options before rendering

**`param`** Edit mode (add, edit, view)

**`param`** Instance of business object for editing

**`param`** Configured options of editor

**`param`** Configured data member of editor

**`param`** Lookup definitions prepared for business object

**`param`** Utility for performing misc operations

Defined in: [entity.ts:461](https://github.com/frankball/ballware-meta-interface/blob/08dd5e4/src/entity.ts#L461)

___

### editorValidating

• `Optional` **editorValidating**: *undefined* \| (`item`: *Record*<*string*, *unknown*\>, `editUtil`: [*EditUtil*](editutil.md), `identifier`: *string*, `value`: [*ValueType*](../modules.md#valuetype), `validation`: *string*, `lookups`: *Record*<*string*, *unknown*\>, `util`: [*ScriptUtil*](scriptutil.md)) => *boolean*

Custom functionality on editor validation (if custom validation rules are set)

**`param`** Instance of business object for editing

**`param`** Adapter for accessing editor components by data member

**`param`** Configured data member of editor

**`param`** Current value of editor

**`param`** Identifier of custom validation rule

**`param`** Lookup definitions prepared for business object

**`param`** Utility for performing misc operations

**`returns`** true if current value is valid, false if not

Defined in: [entity.ts:558](https://github.com/frankball/ballware-meta-interface/blob/08dd5e4/src/entity.ts#L558)

___

### editorValueChanged

• `Optional` **editorValueChanged**: *undefined* \| (`item`: *Record*<*string*, *unknown*\>, `editUtil`: [*EditUtil*](editutil.md), `identifier`: *string*, `value`: [*ValueType*](../modules.md#valuetype), `lookups`: *Record*<*string*, *unknown*\>, `util`: [*ScriptUtil*](scriptutil.md)) => *void*

Custom functionality on editor value changed

**`param`** Instance of business object for editing

**`param`** Adapter for accessing editor components by data member

**`param`** Configured data member of editor

**`param`** Current value of editor

**`param`** Lookup definitions prepared for business object

**`param`** Utility for performing misc operations

Defined in: [entity.ts:499](https://github.com/frankball/ballware-meta-interface/blob/08dd5e4/src/entity.ts#L499)

___

### evaluateCustomFunction

• `Optional` **evaluateCustomFunction**: *undefined* \| (`identifier`: *string*, `lookups`: *Record*<*string*, *unknown*\>, `util`: [*ScriptUtil*](scriptutil.md), `param`: *Record*<*string*, *unknown*\>, `saveCallback`: (`param`: *Record*<*string*, *unknown*\>) => *void*, `messageCallback`: (`message`: *string*) => *void*) => *void*

Evaluation custom function result after execution

**`param`** Identifier of custom function

**`param`** Lookup definitions prepared for business object

**`param`** Utility for performing misc operations

**`param`** Execute save or batch save operation with prepared objects

**`param`** Show notification message to user

Defined in: [entity.ts:648](https://github.com/frankball/ballware-meta-interface/blob/08dd5e4/src/entity.ts#L648)

___

### extendedRightsCheck

• `Optional` **extendedRightsCheck**: *undefined* \| [*ExtendedRightsCheckFunc*](../modules.md#extendedrightscheckfunc)

Custom rights check operations

Defined in: [entity.ts:383](https://github.com/frankball/ballware-meta-interface/blob/08dd5e4/src/entity.ts#L383)

___

### initNewDetailItem

• `Optional` **initNewDetailItem**: *undefined* \| (`dataMember`: *string*, `item`: [*CrudItem*](cruditem.md), `detailItem`: *Record*<*string*, *unknown*\>, `util`: [*ScriptUtil*](scriptutil.md)) => *void*

Initialize new instance of detail item

**`param`** Configured data member of detail grid

**`param`** Instance of edited root business object

**`param`** Instance of edited detail item

**`param`** Utility for performing misc operations

Defined in: [entity.ts:613](https://github.com/frankball/ballware-meta-interface/blob/08dd5e4/src/entity.ts#L613)

___

### prepareCustomFunction

• `Optional` **prepareCustomFunction**: *undefined* \| (`identifier`: *string*, `lookups`: *Record*<*string*, *unknown*\>, `util`: [*ScriptUtil*](scriptutil.md), `executeCallback`: (`param`: *Record*<*string*, *unknown*\>) => *void*, `messageCallback`: (`message`: *string*) => *void*, `selection?`: [*CrudItem*](cruditem.md)[]) => *void*

Prepare custom function before execution

**`param`** Identifier of custom function

**`param`** Lookup definitions prepared for business object

**`param`** Utility for performing misc operations

**`param`** Execute custom function with prepared params

**`param`** Show notification message to user

**`param`** Current selected business objects (only for function type 'edit')

Defined in: [entity.ts:630](https://github.com/frankball/ballware-meta-interface/blob/08dd5e4/src/entity.ts#L630)

___

### prepareCustomParam

• `Optional` **prepareCustomParam**: *undefined* \| (`lookups`: *Record*<*string*, *unknown*\>, `util`: [*ScriptUtil*](scriptutil.md), `callback`: (`customParam`: *Record*<*string*, *unknown*\>) => *void*) => *void*

Prepare custom param object containing values needed for other custom scripts

**`param`** Lookup definitions prepared for business object

**`param`** Utility for performing misc operations

**`param`** Async callback operation performed by custom script when custom param preparation is finished

Defined in: [entity.ts:413](https://github.com/frankball/ballware-meta-interface/blob/08dd5e4/src/entity.ts#L413)

___

### prepareEditLayout

• `Optional` **prepareEditLayout**: *undefined* \| (`mode`: *string*, `lookups`: *Record*<*string*, *unknown*\>, `customParam`: *unknown*, `util`: [*ScriptUtil*](scriptutil.md), `editLayout`: [*EditLayout*](editlayout.md)) => *void*

Manipulate configured edit layout before rendering

**`param`** Edit mode (add, edit, view)

**`param`** Lookup definitions prepared for business object

**`param`** Current value of prepared custom param (previous result of prepareCustomParam function)

**`param`** Utility for performing misc operations

**`param`** Edit layout instance

Defined in: [entity.ts:443](https://github.com/frankball/ballware-meta-interface/blob/08dd5e4/src/entity.ts#L443)

___

### prepareGridLayout

• `Optional` **prepareGridLayout**: *undefined* \| (`lookups`: *Record*<*string*, *unknown*\>, `customParam`: *unknown*, `util`: [*ScriptUtil*](scriptutil.md), `gridLayout`: [*GridLayout*](gridlayout.md)) => *void*

Manipulate configured grid layout before rendering

**`param`** Lookup definitions prepared for business object

**`param`** Current value of prepared custom param (previous result of prepareCustomParam function)

**`param`** Utility for performing misc operations

**`param`** Grid layout instance

Defined in: [entity.ts:427](https://github.com/frankball/ballware-meta-interface/blob/08dd5e4/src/entity.ts#L427)

___

### rightsParamForHead

• `Optional` **rightsParamForHead**: *undefined* \| (`customParam`: *unknown*) => *Record*<*string*, *unknown*\>

Prepare custom param for extendedRightsCheck if operation is not connected to specific business object
(default add operation, custom function with type 'add')

**`param`** Current value of prepared custom param (previous result of prepareCustomParam function)

**`returns`** Object containing values needed for extendedRightsCheck implementation

Defined in: [entity.ts:392](https://github.com/frankball/ballware-meta-interface/blob/08dd5e4/src/entity.ts#L392)

___

### rightsParamForItem

• `Optional` **rightsParamForItem**: *undefined* \| (`item`: *Record*<*string*, *unknown*\>, `customParam`: *unknown*) => *Record*<*string*, *unknown*\>

Prepare custom param for extendedRightsCheck if operation is not connected to specific business object  (edit, delete)

**`param`** Business object instance

**`param`** Current value of prepared custom param (previous result of prepareCustomParam function)

**`returns`** Object containing values needed for extendedRightsCheck implementation

Defined in: [entity.ts:401](https://github.com/frankball/ballware-meta-interface/blob/08dd5e4/src/entity.ts#L401)
