[@ballware/react-contexts](../README.md) / [Exports](../modules.md) / MetaContextState

# Interface: MetaContextState

Context for generic entity metadata functionality

## Table of contents

### Properties

- [addAllowed](metacontextstate.md#addallowed)
- [byId](metacontextstate.md#byid)
- [count](metacontextstate.md#count)
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
- [exportItems](metacontextstate.md#exportitems)
- [getEditLayout](metacontextstate.md#geteditlayout)
- [getGridLayout](metacontextstate.md#getgridlayout)
- [headParams](metacontextstate.md#headparams)
- [importItems](metacontextstate.md#importitems)
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

• `Optional` **addAllowed**: () => *boolean*

Check if add operation is allowed for current user

**`returns`** true if add is allowed

#### Type declaration:

▸ (): *boolean*

**Returns:** *boolean*

Defined in: [packages/react-contexts/src/metacontext.ts:130](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L130)

Defined in: [packages/react-contexts/src/metacontext.ts:130](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L130)

___

### byId

• `Optional` **byId**: (`functionIdentifier`: *string*, `id`: *string*) => *Promise*<CrudItem\>

Fetch item by id

**`param`** Identifier of edit function

**`param`** Unique identifier of item to fetch

**`returns`** Promise resolving item by id if available

#### Type declaration:

▸ (`functionIdentifier`: *string*, `id`: *string*): *Promise*<CrudItem\>

#### Parameters:

Name | Type |
:------ | :------ |
`functionIdentifier` | *string* |
`id` | *string* |

**Returns:** *Promise*<CrudItem\>

Defined in: [packages/react-contexts/src/metacontext.ts:72](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L72)

Defined in: [packages/react-contexts/src/metacontext.ts:72](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L72)

___

### count

• `Optional` **count**: (`query`: *string*, `params?`: QueryParams) => *Promise*<number\>

Fetch count of items

**`param`** Identifier of query to use for fetch

**`param`** Optional parameter values for query

**`returns`** Promise resolving count of fetchable items

#### Type declaration:

▸ (`query`: *string*, `params?`: QueryParams): *Promise*<number\>

#### Parameters:

Name | Type |
:------ | :------ |
`query` | *string* |
`params?` | QueryParams |

**Returns:** *Promise*<number\>

Defined in: [packages/react-contexts/src/metacontext.ts:64](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L64)

Defined in: [packages/react-contexts/src/metacontext.ts:64](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L64)

___

### create

• `Optional` **create**: (`functionIdentifier`: *string*, `params?`: QueryParams) => *Promise*<CrudItem\>

Fetch new prepared item for add

**`param`** Identifier of edit function

**`param`** Optional parameter values for initialization

#### Type declaration:

▸ (`functionIdentifier`: *string*, `params?`: QueryParams): *Promise*<CrudItem\>

#### Parameters:

Name | Type |
:------ | :------ |
`functionIdentifier` | *string* |
`params?` | QueryParams |

**Returns:** *Promise*<CrudItem\>

Defined in: [packages/react-contexts/src/metacontext.ts:79](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L79)

Defined in: [packages/react-contexts/src/metacontext.ts:79](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L79)

___

### customFunctionAllowed

• `Optional` **customFunctionAllowed**: (`customFunction`: EntityCustomFunction, `item?`: *CrudItem*) => *boolean*

Check if custom edit function is allowed for current user

**`param`** Function used for editing

**`param`** Item to be edited (undefined if function is type 'add')

**`returns`** true if custom function is allowed

#### Type declaration:

▸ (`customFunction`: EntityCustomFunction, `item?`: *CrudItem*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`customFunction` | EntityCustomFunction |
`item?` | *CrudItem* |

**Returns:** *boolean*

Defined in: [packages/react-contexts/src/metacontext.ts:166](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L166)

Defined in: [packages/react-contexts/src/metacontext.ts:166](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L166)

___

### customFunctions

• `Optional` **customFunctions**: EntityCustomFunction[]

Collection of available custom crud functions for entity

Defined in: [packages/react-contexts/src/metacontext.ts:34](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L34)

___

### customParam

• `Optional` **customParam**: *Record*<string, unknown\>

Prepared custom param object used by custom scripts

Defined in: [packages/react-contexts/src/metacontext.ts:107](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L107)

___

### detailGridCellPreparing

• `Optional` **detailGridCellPreparing**: (`mode`: [*EditModes*](../enums/editmodes.md), `item`: *Record*<string, unknown\>, `detailItem`: *Record*<string, unknown\>, `identifier`: *string*, `options`: GridLayoutColumn) => *void*

Modify options for detail grid cell before rendering

**`param`** Edit mode currently executed

**`param`** Parent item

**`param`** Detail item in detail grid row

**`param`** Data member identifier of current cell

**`param`** Options for cell

#### Type declaration:

▸ (`mode`: [*EditModes*](../enums/editmodes.md), `item`: *Record*<string, unknown\>, `detailItem`: *Record*<string, unknown\>, `identifier`: *string*, `options`: GridLayoutColumn): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`mode` | [*EditModes*](../enums/editmodes.md) |
`item` | *Record*<string, unknown\> |
`detailItem` | *Record*<string, unknown\> |
`identifier` | *string* |
`options` | GridLayoutColumn |

**Returns:** *void*

Defined in: [packages/react-contexts/src/metacontext.ts:343](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L343)

Defined in: [packages/react-contexts/src/metacontext.ts:343](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L343)

___

### detailGridRowValidating

• `Optional` **detailGridRowValidating**: (`mode`: [*EditModes*](../enums/editmodes.md), `item`: *Record*<string, unknown\>, `detailItem`: *Record*<string, unknown\>, `identifier`: *string*) => *string*

Validate changed detail row before saving

**`param`** Edit mode currently executed

**`param`** Parent item

**`param`** Detail item in detail grid row

**`param`** Data member identifier of current cell

**`returns`** Validation message if validation failed, undefined if validation succeeded

#### Type declaration:

▸ (`mode`: [*EditModes*](../enums/editmodes.md), `item`: *Record*<string, unknown\>, `detailItem`: *Record*<string, unknown\>, `identifier`: *string*): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`mode` | [*EditModes*](../enums/editmodes.md) |
`item` | *Record*<string, unknown\> |
`detailItem` | *Record*<string, unknown\> |
`identifier` | *string* |

**Returns:** *string*

Defined in: [packages/react-contexts/src/metacontext.ts:359](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L359)

Defined in: [packages/react-contexts/src/metacontext.ts:359](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L359)

___

### displayName

• `Optional` **displayName**: *string*

Display name of generic entity

Defined in: [packages/react-contexts/src/metacontext.ts:29](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L29)

___

### documents

• `Optional` **documents**: { `id`: *string* ; `text`: *string*  }[]

Collection of available print documents for entity

Defined in: [packages/react-contexts/src/metacontext.ts:117](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L117)

___

### drop

• `Optional` **drop**: (`id`: *string*) => *Promise*<void\>

Drop item by id

**`param`** Unique identifier of item to drop

**`returns`** Promise resolving when drop operation has completed

#### Type declaration:

▸ (`id`: *string*): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`id` | *string* |

**Returns:** *Promise*<void\>

Defined in: [packages/react-contexts/src/metacontext.ts:102](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L102)

Defined in: [packages/react-contexts/src/metacontext.ts:102](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L102)

___

### dropAllowed

• `Optional` **dropAllowed**: (`item`: *CrudItem*) => *boolean*

Check if drop operation is allowed for current user

**`param`** Item to be dropped

**`returns`** true if drop is allowed

#### Type declaration:

▸ (`item`: *CrudItem*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`item` | *CrudItem* |

**Returns:** *boolean*

Defined in: [packages/react-contexts/src/metacontext.ts:151](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L151)

Defined in: [packages/react-contexts/src/metacontext.ts:151](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L151)

___

### editAllowed

• `Optional` **editAllowed**: (`item`: *CrudItem*) => *boolean*

Check if edit operation is allowed for current user

**`param`** Item to be edited

**`returns`** true if edit is allowed

#### Type declaration:

▸ (`item`: *CrudItem*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`item` | *CrudItem* |

**Returns:** *boolean*

Defined in: [packages/react-contexts/src/metacontext.ts:144](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L144)

Defined in: [packages/react-contexts/src/metacontext.ts:144](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L144)

___

### editorEntered

• `Optional` **editorEntered**: (`mode`: [*EditModes*](../enums/editmodes.md), `item`: *Record*<string, unknown\>, `editUtil`: EditUtil, `identifier`: *string*) => *void*

Customize editor entered for editing

**`param`** Edit mode currently executed

**`param`** Item to be edited

**`param`** Adapter for accessing editor components

**`param`** Data member identifier of current editor

#### Type declaration:

▸ (`mode`: [*EditModes*](../enums/editmodes.md), `item`: *Record*<string, unknown\>, `editUtil`: EditUtil, `identifier`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`mode` | [*EditModes*](../enums/editmodes.md) |
`item` | *Record*<string, unknown\> |
`editUtil` | EditUtil |
`identifier` | *string* |

**Returns:** *void*

Defined in: [packages/react-contexts/src/metacontext.ts:277](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L277)

Defined in: [packages/react-contexts/src/metacontext.ts:277](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L277)

___

### editorEvent

• `Optional` **editorEvent**: (`mode`: [*EditModes*](../enums/editmodes.md), `item`: *Record*<string, unknown\>, `editUtil`: EditUtil, `identifier`: *string*, `event`: *string*) => *void*

Editor event triggered

**`param`** Edit mode currently executed

**`param`** Item to be edited

**`param`** Adapter for accessing editor components

**`param`** Data member identifier of current editor

**`param`** Event identifier

#### Type declaration:

▸ (`mode`: [*EditModes*](../enums/editmodes.md), `item`: *Record*<string, unknown\>, `editUtil`: EditUtil, `identifier`: *string*, `event`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`mode` | [*EditModes*](../enums/editmodes.md) |
`item` | *Record*<string, unknown\> |
`editUtil` | EditUtil |
`identifier` | *string* |
`event` | *string* |

**Returns:** *void*

Defined in: [packages/react-contexts/src/metacontext.ts:327](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L327)

Defined in: [packages/react-contexts/src/metacontext.ts:327](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L327)

___

### editorInitialized

• `Optional` **editorInitialized**: (`mode`: [*EditModes*](../enums/editmodes.md), `item`: *Record*<string, unknown\>, `editUtil`: EditUtil, `identifier`: *string*) => *void*

Customize instanciated editor component before edit

**`param`** Edit mode currently executed

**`param`** Item to be edited

**`param`** Adapter for accessing editor components

**`param`** Data member identifier of current editor

#### Type declaration:

▸ (`mode`: [*EditModes*](../enums/editmodes.md), `item`: *Record*<string, unknown\>, `editUtil`: EditUtil, `identifier`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`mode` | [*EditModes*](../enums/editmodes.md) |
`item` | *Record*<string, unknown\> |
`editUtil` | EditUtil |
`identifier` | *string* |

**Returns:** *void*

Defined in: [packages/react-contexts/src/metacontext.ts:263](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L263)

Defined in: [packages/react-contexts/src/metacontext.ts:263](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L263)

___

### editorPreparing

• `Optional` **editorPreparing**: (`mode`: [*EditModes*](../enums/editmodes.md), `item`: *Record*<string, unknown\>, `layoutItem`: EditLayoutItemOptions, `identifier`: *string*) => *void*

Prepare editor metadata by custom script

**`param`** Edit mode currently executed

**`param`** Item to be edited

**`param`** Item metadata to be prepared

**`param`** Data member identifier of current editor

#### Type declaration:

▸ (`mode`: [*EditModes*](../enums/editmodes.md), `item`: *Record*<string, unknown\>, `layoutItem`: EditLayoutItemOptions, `identifier`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`mode` | [*EditModes*](../enums/editmodes.md) |
`item` | *Record*<string, unknown\> |
`layoutItem` | EditLayoutItemOptions |
`identifier` | *string* |

**Returns:** *void*

Defined in: [packages/react-contexts/src/metacontext.ts:249](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L249)

Defined in: [packages/react-contexts/src/metacontext.ts:249](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L249)

___

### editorValidating

• `Optional` **editorValidating**: (`mode`: [*EditModes*](../enums/editmodes.md), `item`: *Record*<string, unknown\>, `editUtil`: EditUtil, `identifier`: *string*, `value`: ValueType, `validation`: *string*) => *boolean*

Editor value custom validation requested

**`param`** Edit mode currently executed

**`param`** Item to be edited

**`param`** Adapter for accessing editor components

**`param`** Data member identifier of current editor

**`param`** Current value of data member

**`param`** Identifier of custom validation rule

#### Type declaration:

▸ (`mode`: [*EditModes*](../enums/editmodes.md), `item`: *Record*<string, unknown\>, `editUtil`: EditUtil, `identifier`: *string*, `value`: ValueType, `validation`: *string*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`mode` | [*EditModes*](../enums/editmodes.md) |
`item` | *Record*<string, unknown\> |
`editUtil` | EditUtil |
`identifier` | *string* |
`value` | ValueType |
`validation` | *string* |

**Returns:** *boolean*

Defined in: [packages/react-contexts/src/metacontext.ts:309](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L309)

Defined in: [packages/react-contexts/src/metacontext.ts:309](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L309)

___

### editorValueChanged

• `Optional` **editorValueChanged**: (`mode`: [*EditModes*](../enums/editmodes.md), `item`: *Record*<string, unknown\>, `editUtil`: EditUtil, `identifier`: *string*, `value`: ValueType) => *void*

Editor value has changed

**`param`** Edit mode currently executed

**`param`** Item to be edited

**`param`** Adapter for accessing editor components

**`param`** Data member identifier of current editor

**`param`** Current value of data member

#### Type declaration:

▸ (`mode`: [*EditModes*](../enums/editmodes.md), `item`: *Record*<string, unknown\>, `editUtil`: EditUtil, `identifier`: *string*, `value`: ValueType): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`mode` | [*EditModes*](../enums/editmodes.md) |
`item` | *Record*<string, unknown\> |
`editUtil` | EditUtil |
`identifier` | *string* |
`value` | ValueType |

**Returns:** *void*

Defined in: [packages/react-contexts/src/metacontext.ts:292](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L292)

Defined in: [packages/react-contexts/src/metacontext.ts:292](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L292)

___

### evaluateCustomFunction

• `Optional` **evaluateCustomFunction**: (`identifier`: *string*, `param`: *Record*<string, unknown\>, `save`: (`param`: *Record*<string, unknown\>) => *void*, `message`: (`message`: *string*) => *void*) => *void*

Evaluate item data for save operation

**`param`** Identifier of custom function

**`param`** Edited data in operation

**`param`** Save callback for storing item data in backend

**`param`** Message callback for notifying user with reason why save operation is declined

#### Type declaration:

▸ (`identifier`: *string*, `param`: *Record*<string, unknown\>, `save`: (`param`: *Record*<string, unknown\>) => *void*, `message`: (`message`: *string*) => *void*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`identifier` | *string* |
`param` | *Record*<string, unknown\> |
`save` | (`param`: *Record*<string, unknown\>) => *void* |
`message` | (`message`: *string*) => *void* |

**Returns:** *void*

Defined in: [packages/react-contexts/src/metacontext.ts:206](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L206)

Defined in: [packages/react-contexts/src/metacontext.ts:206](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L206)

___

### exportItems

• `Optional` **exportItems**: (`identifier`: *string*, `ids`: *string*[]) => *Promise*<string\>

Export list of items

**`param`** Identifier of custom export function

**`param`** List of item ids to export

**`returns`** Promise resolved with url to export file

#### Type declaration:

▸ (`identifier`: *string*, `ids`: *string*[]): *Promise*<string\>

#### Parameters:

Name | Type |
:------ | :------ |
`identifier` | *string* |
`ids` | *string*[] |

**Returns:** *Promise*<string\>

Defined in: [packages/react-contexts/src/metacontext.ts:227](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L227)

Defined in: [packages/react-contexts/src/metacontext.ts:227](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L227)

___

### getEditLayout

• `Optional` **getEditLayout**: (`identifier`: *string*) => *undefined* \| EditLayout

Get edit layout by identifier from entity metadata

**`param`** Unique identifier of edit layout

**`returns`** Edit layout metadata if available

#### Type declaration:

▸ (`identifier`: *string*): *undefined* \| EditLayout

#### Parameters:

Name | Type |
:------ | :------ |
`identifier` | *string* |

**Returns:** *undefined* \| EditLayout

Defined in: [packages/react-contexts/src/metacontext.ts:48](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L48)

Defined in: [packages/react-contexts/src/metacontext.ts:48](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L48)

___

### getGridLayout

• `Optional` **getGridLayout**: (`identifier`: *string*) => *undefined* \| GridLayout

Get grid layout by identifier from entity metadata

**`param`** Unique identifier of grid layout

**`returns`** Grid layout metadata if available

#### Type declaration:

▸ (`identifier`: *string*): *undefined* \| GridLayout

#### Parameters:

Name | Type |
:------ | :------ |
`identifier` | *string* |

**Returns:** *undefined* \| GridLayout

Defined in: [packages/react-contexts/src/metacontext.ts:41](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L41)

Defined in: [packages/react-contexts/src/metacontext.ts:41](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L41)

___

### headParams

• `Optional` **headParams**: QueryParams

Param object inherited by container (page or parent entity for example)

Defined in: [packages/react-contexts/src/metacontext.ts:112](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L112)

___

### importItems

• `Optional` **importItems**: (`identifier`: *string*, `file`: File) => *Promise*<void\>

Import uploaded file

**`param`** Identifier of custom import function

**`param`** Uploaded file to import

**`returns`** Promise resolved when import completed

#### Type declaration:

▸ (`identifier`: *string*, `file`: File): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`identifier` | *string* |
`file` | File |

**Returns:** *Promise*<void\>

Defined in: [packages/react-contexts/src/metacontext.ts:219](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L219)

Defined in: [packages/react-contexts/src/metacontext.ts:219](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L219)

___

### initNewDetailItem

• `Optional` **initNewDetailItem**: (`dataMember`: *string*, `item`: *Record*<string, unknown\>, `detailItem`: *Record*<string, unknown\>) => *void*

Initialize new generated detail item

**`param`** Data member identifier of detail collection

**`param`** Parent item

**`param`** New generated detail item

#### Type declaration:

▸ (`dataMember`: *string*, `item`: *Record*<string, unknown\>, `detailItem`: *Record*<string, unknown\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`dataMember` | *string* |
`item` | *Record*<string, unknown\> |
`detailItem` | *Record*<string, unknown\> |

**Returns:** *void*

Defined in: [packages/react-contexts/src/metacontext.ts:372](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L372)

Defined in: [packages/react-contexts/src/metacontext.ts:372](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L372)

___

### mapIncomingItem

• `Optional` **mapIncomingItem**: (`item`: *CrudItem*) => *CrudItem*

Prepare fetched item for usage in frontend

**`param`** Item fetched by backend

**`returns`** Mapped item for frontend

#### Type declaration:

▸ (`item`: *CrudItem*): *CrudItem*

#### Parameters:

Name | Type |
:------ | :------ |
`item` | *CrudItem* |

**Returns:** *CrudItem*

Defined in: [packages/react-contexts/src/metacontext.ts:176](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L176)

Defined in: [packages/react-contexts/src/metacontext.ts:176](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L176)

___

### mapOutgoingItem

• `Optional` **mapOutgoingItem**: (`item`: *CrudItem*) => *CrudItem*

Prepare changed item for usage in backend

**`param`** Item modified in frontend

**`returns`** Mapped item for backend

#### Type declaration:

▸ (`item`: *CrudItem*): *CrudItem*

#### Parameters:

Name | Type |
:------ | :------ |
`item` | *CrudItem* |

**Returns:** *CrudItem*

Defined in: [packages/react-contexts/src/metacontext.ts:183](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L183)

Defined in: [packages/react-contexts/src/metacontext.ts:183](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L183)

___

### prepareCustomFunction

• `Optional` **prepareCustomFunction**: (`identifier`: *string*, `selection`: *undefined* \| *Record*<string, unknown\>[], `execute`: (`param`: *Record*<string, unknown\>) => *void*, `message`: (`message`: *string*) => *void*) => *void*

Prepare item data for custom edit function

**`param`** Identifier of custom function

**`param`** Collection of selected items

**`param`** Execute callback containing prepared edit item data

**`param`** Message callback for notifying user with reason why edit operation is canceled

#### Type declaration:

▸ (`identifier`: *string*, `selection`: *undefined* \| *Record*<string, unknown\>[], `execute`: (`param`: *Record*<string, unknown\>) => *void*, `message`: (`message`: *string*) => *void*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`identifier` | *string* |
`selection` | *undefined* \| *Record*<string, unknown\>[] |
`execute` | (`param`: *Record*<string, unknown\>) => *void* |
`message` | (`message`: *string*) => *void* |

**Returns:** *void*

Defined in: [packages/react-contexts/src/metacontext.ts:192](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L192)

Defined in: [packages/react-contexts/src/metacontext.ts:192](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L192)

___

### prepareEditLayout

• `Optional` **prepareEditLayout**: (`mode`: [*EditModes*](../enums/editmodes.md), `editLayout`: EditLayout) => *void*

Prepare edit layout by custom script

**`param`** Edit mode currently executed

**`param`** Edit layout to be prepared

#### Type declaration:

▸ (`mode`: [*EditModes*](../enums/editmodes.md), `editLayout`: EditLayout): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`mode` | [*EditModes*](../enums/editmodes.md) |
`editLayout` | EditLayout |

**Returns:** *void*

Defined in: [packages/react-contexts/src/metacontext.ts:240](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L240)

Defined in: [packages/react-contexts/src/metacontext.ts:240](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L240)

___

### prepareGridLayout

• `Optional` **prepareGridLayout**: (`gridLayout`: GridLayout) => *void*

Prepare grid layout by custom script

**`param`** Grid layout to be prepared

#### Type declaration:

▸ (`gridLayout`: GridLayout): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`gridLayout` | GridLayout |

**Returns:** *void*

Defined in: [packages/react-contexts/src/metacontext.ts:233](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L233)

Defined in: [packages/react-contexts/src/metacontext.ts:233](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L233)

___

### print

• `Optional` **print**: (`doc`: *string*, `ids`: *string*[]) => *void*

Execute print operation

**`param`** Identifier of print document

**`param`** Collection of selected item ids to print

#### Type declaration:

▸ (`doc`: *string*, `ids`: *string*[]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`doc` | *string* |
`ids` | *string*[] |

**Returns:** *void*

Defined in: [packages/react-contexts/src/metacontext.ts:124](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L124)

Defined in: [packages/react-contexts/src/metacontext.ts:124](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L124)

___

### printAllowed

• `Optional` **printAllowed**: (`item`: *CrudItem*) => *boolean*

Check if print operation is allowed for current user

**`param`** Item to be printed

**`returns`** true if print is allowed

#### Type declaration:

▸ (`item`: *CrudItem*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`item` | *CrudItem* |

**Returns:** *boolean*

Defined in: [packages/react-contexts/src/metacontext.ts:158](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L158)

Defined in: [packages/react-contexts/src/metacontext.ts:158](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L158)

___

### query

• `Optional` **query**: (`query`: *string*, `params?`: QueryParams) => *Promise*<CrudItem[]\>

Fetch list of items

**`param`** Identifier of query to use for fetch

**`param`** Optional parameter values for query

**`returns`** Promise resolving collection of fetched items

#### Type declaration:

▸ (`query`: *string*, `params?`: QueryParams): *Promise*<CrudItem[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`query` | *string* |
`params?` | QueryParams |

**Returns:** *Promise*<CrudItem[]\>

Defined in: [packages/react-contexts/src/metacontext.ts:56](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L56)

Defined in: [packages/react-contexts/src/metacontext.ts:56](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L56)

___

### save

• `Optional` **save**: (`functionIdentifier`: *string*, `item`: *CrudItem*) => *Promise*<void\>

Save changed or add new item

**`param`** Identifier of edit function

**`param`** Changed or new created item

**`returns`** Promise resolving when save operation has completed

#### Type declaration:

▸ (`functionIdentifier`: *string*, `item`: *CrudItem*): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`functionIdentifier` | *string* |
`item` | *CrudItem* |

**Returns:** *Promise*<void\>

Defined in: [packages/react-contexts/src/metacontext.ts:87](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L87)

Defined in: [packages/react-contexts/src/metacontext.ts:87](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L87)

___

### saveBatch

• `Optional` **saveBatch**: (`functionIdentifier`: *string*, `items`: *CrudItem*[]) => *Promise*<void\>

Save collection of changed or new created items

**`param`** Identifier of edit function

**`param`** Collection of items

**`returns`** Promise resolving when save operation has completed

#### Type declaration:

▸ (`functionIdentifier`: *string*, `items`: *CrudItem*[]): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`functionIdentifier` | *string* |
`items` | *CrudItem*[] |

**Returns:** *Promise*<void\>

Defined in: [packages/react-contexts/src/metacontext.ts:95](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L95)

Defined in: [packages/react-contexts/src/metacontext.ts:95](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L95)

___

### viewAllowed

• `Optional` **viewAllowed**: (`item`: *CrudItem*) => *boolean*

Check if view details operation is allowed for current user

**`param`** Item to be viewed

**`returns`** true if view is allowed

#### Type declaration:

▸ (`item`: *CrudItem*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`item` | *CrudItem* |

**Returns:** *boolean*

Defined in: [packages/react-contexts/src/metacontext.ts:137](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L137)

Defined in: [packages/react-contexts/src/metacontext.ts:137](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/metacontext.ts#L137)
