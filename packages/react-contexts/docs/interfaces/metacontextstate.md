[@ballware/react-contexts](../README.md) / [Exports](../modules.md) / MetaContextState

# Interface: MetaContextState

Context for generic entity metadata functionality

## Hierarchy

* **MetaContextState**

## Table of contents

### Properties

- [addAllowed](metacontextstate.md#addallowed)
- [byId](metacontextstate.md#byid)
- [create](metacontextstate.md#create)
- [customFunctionAllowed](metacontextstate.md#customfunctionallowed)
- [customFunctions](metacontextstate.md#customfunctions)
- [customParam](metacontextstate.md#customparam)
- [detailGridCellPreparing](metacontextstate.md#detailgridcellpreparing)
- [detailGridRowValidating](metacontextstate.md#detailgridrowvalidating)
- [displayName](metacontextstate.md#displayname)
- [documents](metacontextstate.md#documents)
- [drop](metacontextstate.md#drop)
- [dropAllowed](metacontextstate.md#dropallowed)
- [editAllowed](metacontextstate.md#editallowed)
- [editorEntered](metacontextstate.md#editorentered)
- [editorEvent](metacontextstate.md#editorevent)
- [editorInitialized](metacontextstate.md#editorinitialized)
- [editorPreparing](metacontextstate.md#editorpreparing)
- [editorValidating](metacontextstate.md#editorvalidating)
- [editorValueChanged](metacontextstate.md#editorvaluechanged)
- [evaluateCustomFunction](metacontextstate.md#evaluatecustomfunction)
- [getEditLayout](metacontextstate.md#geteditlayout)
- [getGridLayout](metacontextstate.md#getgridlayout)
- [headParams](metacontextstate.md#headparams)
- [initNewDetailItem](metacontextstate.md#initnewdetailitem)
- [mapIncomingItem](metacontextstate.md#mapincomingitem)
- [mapOutgoingItem](metacontextstate.md#mapoutgoingitem)
- [prepareCustomFunction](metacontextstate.md#preparecustomfunction)
- [prepareEditLayout](metacontextstate.md#prepareeditlayout)
- [prepareGridLayout](metacontextstate.md#preparegridlayout)
- [print](metacontextstate.md#print)
- [printAllowed](metacontextstate.md#printallowed)
- [query](metacontextstate.md#query)
- [save](metacontextstate.md#save)
- [saveBatch](metacontextstate.md#savebatch)
- [viewAllowed](metacontextstate.md#viewallowed)

## Properties

### addAllowed

• `Optional` **addAllowed**: *undefined* \| () => *boolean*

Check if add operation is allowed for current user

**`returns`** true if add is allowed

Defined in: [src/metacontext.ts:118](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/metacontext.ts#L118)

___

### byId

• `Optional` **byId**: *undefined* \| (`id`: *string*) => *Promise*<*CrudItem*\>

Fetch item by id

**`param`** Unique identifier of item to fetch

**`returns`** Promise resolving item by id if available

Defined in: [src/metacontext.ts:63](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/metacontext.ts#L63)

___

### create

• `Optional` **create**: *undefined* \| (`params?`: *Record*<*string*, *string* \| *number* \| *boolean* \| (*string* \| *number* \| *boolean*)[]\>) => *Promise*<*CrudItem*\>

Fetch new prepared item for add

**`param`** Optional parameter values for initialization

Defined in: [src/metacontext.ts:69](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/metacontext.ts#L69)

___

### customFunctionAllowed

• `Optional` **customFunctionAllowed**: *undefined* \| (`customFunction`: EntityCustomFunction, `item?`: *CrudItem*) => *boolean*

Check if custom edit function is allowed for current user

**`param`** Function used for editing

**`param`** Item to be edited (undefined if function is type 'add')

**`returns`** true if custom function is allowed

Defined in: [src/metacontext.ts:154](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/metacontext.ts#L154)

___

### customFunctions

• `Optional` **customFunctions**: *undefined* \| EntityCustomFunction[]

Collection of available custom crud functions for entity

Defined in: [src/metacontext.ts:34](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/metacontext.ts#L34)

___

### customParam

• `Optional` **customParam**: *undefined* \| *Record*<*string*, *unknown*\>

Prepared custom param object used by custom scripts

Defined in: [src/metacontext.ts:95](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/metacontext.ts#L95)

___

### detailGridCellPreparing

• `Optional` **detailGridCellPreparing**: *undefined* \| (`mode`: [*EditModes*](../enums/editmodes.md), `item`: *Record*<*string*, *unknown*\>, `detailItem`: *Record*<*string*, *unknown*\>, `identifier`: *string*, `options`: GridLayoutColumn) => *void*

Modify options for detail grid cell before rendering

**`param`** Edit mode currently executed

**`param`** Parent item

**`param`** Detail item in detail grid row

**`param`** Data member identifier of current cell

**`param`** Options for cell

Defined in: [src/metacontext.ts:316](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/metacontext.ts#L316)

___

### detailGridRowValidating

• `Optional` **detailGridRowValidating**: *undefined* \| (`mode`: [*EditModes*](../enums/editmodes.md), `item`: *Record*<*string*, *unknown*\>, `detailItem`: *Record*<*string*, *unknown*\>, `identifier`: *string*) => *string*

Validate changed detail row before saving

**`param`** Edit mode currently executed

**`param`** Parent item

**`param`** Detail item in detail grid row

**`param`** Data member identifier of current cell

**`returns`** Validation message if validation failed, undefined if validation succeeded

Defined in: [src/metacontext.ts:332](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/metacontext.ts#L332)

___

### displayName

• `Optional` **displayName**: *undefined* \| *string*

Display name of generic entity

Defined in: [src/metacontext.ts:29](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/metacontext.ts#L29)

___

### documents

• `Optional` **documents**: *undefined* \| { `id`: *string* ; `text`: *string*  }[]

Collection of available print documents for entity

Defined in: [src/metacontext.ts:105](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/metacontext.ts#L105)

___

### drop

• `Optional` **drop**: *undefined* \| (`id`: *string*) => *Promise*<*void*\>

Drop item by id

**`param`** Unique identifier of item to drop

**`returns`** Promise resolving when drop operation has completed

Defined in: [src/metacontext.ts:90](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/metacontext.ts#L90)

___

### dropAllowed

• `Optional` **dropAllowed**: *undefined* \| (`item`: *CrudItem*) => *boolean*

Check if drop operation is allowed for current user

**`param`** Item to be dropped

**`returns`** true if drop is allowed

Defined in: [src/metacontext.ts:139](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/metacontext.ts#L139)

___

### editAllowed

• `Optional` **editAllowed**: *undefined* \| (`item`: *CrudItem*) => *boolean*

Check if edit operation is allowed for current user

**`param`** Item to be edited

**`returns`** true if edit is allowed

Defined in: [src/metacontext.ts:132](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/metacontext.ts#L132)

___

### editorEntered

• `Optional` **editorEntered**: *undefined* \| (`mode`: [*EditModes*](../enums/editmodes.md), `item`: *Record*<*string*, *unknown*\>, `editUtil`: EditUtil, `identifier`: *string*) => *void*

Customize editor entered for editing

**`param`** Edit mode currently executed

**`param`** Item to be edited

**`param`** Adapter for accessing editor components

**`param`** Data member identifier of current editor

Defined in: [src/metacontext.ts:249](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/metacontext.ts#L249)

___

### editorEvent

• `Optional` **editorEvent**: *undefined* \| (`mode`: [*EditModes*](../enums/editmodes.md), `item`: *Record*<*string*, *unknown*\>, `editUtil`: EditUtil, `identifier`: *string*, `event`: *string*) => *void*

Editor event triggered

**`param`** Edit mode currently executed

**`param`** Item to be edited

**`param`** Adapter for accessing editor components

**`param`** Data member identifier of current editor

**`param`** Event identifier

Defined in: [src/metacontext.ts:300](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/metacontext.ts#L300)

___

### editorInitialized

• `Optional` **editorInitialized**: *undefined* \| (`mode`: [*EditModes*](../enums/editmodes.md), `item`: *Record*<*string*, *unknown*\>, `editUtil`: EditUtil, `identifier`: *string*) => *void*

Customize instanciated editor component before edit

**`param`** Edit mode currently executed

**`param`** Item to be edited

**`param`** Adapter for accessing editor components

**`param`** Data member identifier of current editor

Defined in: [src/metacontext.ts:235](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/metacontext.ts#L235)

___

### editorPreparing

• `Optional` **editorPreparing**: *undefined* \| (`mode`: [*EditModes*](../enums/editmodes.md), `item`: *Record*<*string*, *unknown*\>, `layoutItem`: EditLayoutItemOptions, `identifier`: *string*) => *void*

Prepare editor metadata by custom script

**`param`** Edit mode currently executed

**`param`** Item to be edited

**`param`** Item metadata to be prepared

**`param`** Data member identifier of current editor

Defined in: [src/metacontext.ts:221](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/metacontext.ts#L221)

___

### editorValidating

• `Optional` **editorValidating**: *undefined* \| (`mode`: [*EditModes*](../enums/editmodes.md), `item`: *Record*<*string*, *unknown*\>, `editUtil`: EditUtil, `identifier`: *string*, `value`: ValueType, `validation`: *string*) => *boolean*

Editor value custom validation requested

**`param`** Edit mode currently executed

**`param`** Item to be edited

**`param`** Adapter for accessing editor components

**`param`** Data member identifier of current editor

**`param`** Current value of data member

**`param`** Identifier of custom validation rule

Defined in: [src/metacontext.ts:282](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/metacontext.ts#L282)

___

### editorValueChanged

• `Optional` **editorValueChanged**: *undefined* \| (`mode`: [*EditModes*](../enums/editmodes.md), `item`: *Record*<*string*, *unknown*\>, `editUtil`: EditUtil, `identifier`: *string*, `value`: ValueType) => *void*

Editor value has changed

**`param`** Edit mode currently executed

**`param`** Item to be edited

**`param`** Adapter for accessing editor components

**`param`** Data member identifier of current editor

**`param`** Current value of data member

Defined in: [src/metacontext.ts:264](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/metacontext.ts#L264)

___

### evaluateCustomFunction

• `Optional` **evaluateCustomFunction**: *undefined* \| (`identifier`: *string*, `param`: *Record*<*string*, *unknown*\>, `save`: (`param`: *Record*<*string*, *unknown*\>) => *void*, `message`: (`message`: *string*) => *void*) => *void*

Evaluate item data for save operation

**`param`** Identifier of custom function

**`param`** Edited data in operation

**`param`** Save callback for storing item data in backend

**`param`** Message callback for notifying user with reason why save operation is declined

Defined in: [src/metacontext.ts:194](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/metacontext.ts#L194)

___

### getEditLayout

• `Optional` **getEditLayout**: *undefined* \| (`identifier`: *string*) => *undefined* \| EditLayout

Get edit layout by identifier from entity metadata

**`param`** Unique identifier of edit layout

**`returns`** Edit layout metadata if available

Defined in: [src/metacontext.ts:48](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/metacontext.ts#L48)

___

### getGridLayout

• `Optional` **getGridLayout**: *undefined* \| (`identifier`: *string*) => *undefined* \| GridLayout

Get grid layout by identifier from entity metadata

**`param`** Unique identifier of grid layout

**`returns`** Grid layout metadata if available

Defined in: [src/metacontext.ts:41](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/metacontext.ts#L41)

___

### headParams

• `Optional` **headParams**: *undefined* \| *Record*<*string*, *string* \| *number* \| *boolean* \| (*string* \| *number* \| *boolean*)[]\>

Param object inherited by container (page or parent entity for example)

Defined in: [src/metacontext.ts:100](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/metacontext.ts#L100)

___

### initNewDetailItem

• `Optional` **initNewDetailItem**: *undefined* \| (`dataMember`: *string*, `item`: *Record*<*string*, *unknown*\>, `detailItem`: *Record*<*string*, *unknown*\>) => *void*

Initialize new generated detail item

**`param`** Data member identifier of detail collection

**`param`** Parent item

**`param`** New generated detail item

Defined in: [src/metacontext.ts:345](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/metacontext.ts#L345)

___

### mapIncomingItem

• `Optional` **mapIncomingItem**: *undefined* \| (`item`: *CrudItem*) => *CrudItem*

Prepare fetched item for usage in frontend

**`param`** Item fetched by backend

**`returns`** Mapped item for frontend

Defined in: [src/metacontext.ts:164](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/metacontext.ts#L164)

___

### mapOutgoingItem

• `Optional` **mapOutgoingItem**: *undefined* \| (`item`: *CrudItem*) => *CrudItem*

Prepare changed item for usage in backend

**`param`** Item modified in frontend

**`returns`** Mapped item for backend

Defined in: [src/metacontext.ts:171](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/metacontext.ts#L171)

___

### prepareCustomFunction

• `Optional` **prepareCustomFunction**: *undefined* \| (`identifier`: *string*, `selection`: *undefined* \| *Record*<*string*, *unknown*\>[], `execute`: (`param`: *Record*<*string*, *unknown*\>) => *void*, `message`: (`message`: *string*) => *void*) => *void*

Prepare item data for custom edit function

**`param`** Identifier of custom function

**`param`** Collection of selected items

**`param`** Execute callback containing prepared edit item data

**`param`** Message callback for notifying user with reason why edit operation is canceled

Defined in: [src/metacontext.ts:180](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/metacontext.ts#L180)

___

### prepareEditLayout

• `Optional` **prepareEditLayout**: *undefined* \| (`mode`: [*EditModes*](../enums/editmodes.md), `editLayout`: EditLayout) => *void*

Prepare edit layout by custom script

**`param`** Edit mode currently executed

**`param`** Edit layout to be prepared

Defined in: [src/metacontext.ts:212](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/metacontext.ts#L212)

___

### prepareGridLayout

• `Optional` **prepareGridLayout**: *undefined* \| (`gridLayout`: GridLayout) => *void*

Prepare grid layout by custom script

**`param`** Grid layout to be prepared

Defined in: [src/metacontext.ts:205](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/metacontext.ts#L205)

___

### print

• `Optional` **print**: *undefined* \| (`doc`: *string*, `ids`: *string*[]) => *void*

Execute print operation

**`param`** Identifier of print document

**`param`** Collection of selected item ids to print

Defined in: [src/metacontext.ts:112](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/metacontext.ts#L112)

___

### printAllowed

• `Optional` **printAllowed**: *undefined* \| (`item`: *CrudItem*) => *boolean*

Check if print operation is allowed for current user

**`param`** Item to be printed

**`returns`** true if print is allowed

Defined in: [src/metacontext.ts:146](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/metacontext.ts#L146)

___

### query

• `Optional` **query**: *undefined* \| (`query`: *string*, `params?`: *Record*<*string*, *string* \| *number* \| *boolean* \| (*string* \| *number* \| *boolean*)[]\>) => *Promise*<*CrudItem*[]\>

Fetch list of items

**`param`** Identifier of query to use for fetch

**`param`** Optional parameter values for query

**`returns`** Promise resolving collection of fetched items

Defined in: [src/metacontext.ts:56](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/metacontext.ts#L56)

___

### save

• `Optional` **save**: *undefined* \| (`item`: *CrudItem*) => *Promise*<*void*\>

Save changed or add new item

**`param`** Changed or new created item

**`returns`** Promise resolving when save operation has completed

Defined in: [src/metacontext.ts:76](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/metacontext.ts#L76)

___

### saveBatch

• `Optional` **saveBatch**: *undefined* \| (`items`: *CrudItem*[]) => *Promise*<*void*\>

Save collection of changed or new created items

**`param`** Collection of items

**`returns`** Promise resolving when save operation has completed

Defined in: [src/metacontext.ts:83](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/metacontext.ts#L83)

___

### viewAllowed

• `Optional` **viewAllowed**: *undefined* \| (`item`: *CrudItem*) => *boolean*

Check if view details operation is allowed for current user

**`param`** Item to be viewed

**`returns`** true if view is allowed

Defined in: [src/metacontext.ts:125](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/metacontext.ts#L125)
