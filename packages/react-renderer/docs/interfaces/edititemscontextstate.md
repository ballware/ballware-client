[@ballware/react-renderer](../README.md) / [Exports](../modules.md) / EditItemsContextState

# Interface: EditItemsContextState

Context providing environmental functionality for rendered edit layout

## Table of contents

### Properties

- [EditProvider](edititemscontextstate.md#editprovider)
- [detailEditorEntered](edititemscontextstate.md#detaileditorentered)
- [detailEditorEvent](edititemscontextstate.md#detaileditorevent)
- [detailEditorInitialized](edititemscontextstate.md#detaileditorinitialized)
- [detailEditorPreparing](edititemscontextstate.md#detaileditorpreparing)
- [detailEditorValidating](edititemscontextstate.md#detaileditorvalidating)
- [detailEditorValueChanged](edititemscontextstate.md#detaileditorvaluechanged)
- [detailGridCellPreparing](edititemscontextstate.md#detailgridcellpreparing)
- [detailGridRowValidating](edititemscontextstate.md#detailgridrowvalidating)
- [editorEntered](edititemscontextstate.md#editorentered)
- [editorEvent](edititemscontextstate.md#editorevent)
- [editorInitialized](edititemscontextstate.md#editorinitialized)
- [editorPreparing](edititemscontextstate.md#editorpreparing)
- [editorValidating](edititemscontextstate.md#editorvalidating)
- [editorValueChanged](edititemscontextstate.md#editorvaluechanged)
- [getDetailValue](edititemscontextstate.md#getdetailvalue)
- [getLookup](edititemscontextstate.md#getlookup)
- [getValue](edititemscontextstate.md#getvalue)
- [initNewDetailItem](edititemscontextstate.md#initnewdetailitem)
- [readOnly](edititemscontextstate.md#readonly)
- [renderEditLayoutItems](edititemscontextstate.md#rendereditlayoutitems)

## Properties

### EditProvider

• `Optional` **EditProvider**: (`props`: *PropsWithChildren*<{ `editLayout`: *undefined* \| EditLayout ; `functionIdentifier?`: *string* ; `item`: ValueType \| *CrudItem* \| *CrudItem*[]  }\>) => *Element*

Factory for generating new edit provider

#### Type declaration:

▸ (`props`: *PropsWithChildren*<{ `editLayout`: *undefined* \| EditLayout ; `functionIdentifier?`: *string* ; `item`: ValueType \| *CrudItem* \| *CrudItem*[]  }\>): *Element*

#### Parameters:

Name | Type |
:------ | :------ |
`props` | *PropsWithChildren*<{ `editLayout`: *undefined* \| EditLayout ; `functionIdentifier?`: *string* ; `item`: ValueType \| *CrudItem* \| *CrudItem*[]  }\> |

**Returns:** *Element*

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:263](https://github.com/ballware/ballware-client/blob/d3c33ca/packages/react-renderer/src/common/edititemscontext.tsx#L263)

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:263](https://github.com/ballware/ballware-client/blob/d3c33ca/packages/react-renderer/src/common/edititemscontext.tsx#L263)

___

### detailEditorEntered

• `Optional` **detailEditorEntered**: (`dataMember`: *string*, `detailItem`: *Record*<string, unknown\>, `detailMember`: *string*) => *void*

Detail editor entered focus

**`param`** Data member of detail collection

**`param`** Detail item in row

**`param`** Data member of detail editor

#### Type declaration:

▸ (`dataMember`: *string*, `detailItem`: *Record*<string, unknown\>, `detailMember`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`dataMember` | *string* |
`detailItem` | *Record*<string, unknown\> |
`detailMember` | *string* |

**Returns:** *void*

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:217](https://github.com/ballware/ballware-client/blob/d3c33ca/packages/react-renderer/src/common/edititemscontext.tsx#L217)

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:217](https://github.com/ballware/ballware-client/blob/d3c33ca/packages/react-renderer/src/common/edititemscontext.tsx#L217)

___

### detailEditorEvent

• `Optional` **detailEditorEvent**: (`dataMember`: *string*, `detailItem`: *Record*<string, unknown\>, `detailMember`: *string*, `event`: *string*) => *void*

Detail editor event triggered

**`param`** Data member of detail collection

**`param`** Detail item in row

**`param`** Data member of detail editor

**`param`** Editor event identifier

#### Type declaration:

▸ (`dataMember`: *string*, `detailItem`: *Record*<string, unknown\>, `detailMember`: *string*, `event`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`dataMember` | *string* |
`detailItem` | *Record*<string, unknown\> |
`detailMember` | *string* |
`event` | *string* |

**Returns:** *void*

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:230](https://github.com/ballware/ballware-client/blob/d3c33ca/packages/react-renderer/src/common/edititemscontext.tsx#L230)

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:230](https://github.com/ballware/ballware-client/blob/d3c33ca/packages/react-renderer/src/common/edititemscontext.tsx#L230)

___

### detailEditorInitialized

• `Optional` **detailEditorInitialized**: (`dataMember`: *string*, `detailItem`: *Record*<string, unknown\>, `detailMember`: *string*, `editor`: [*EditorRef*](editorref.md)) => *void*

Manipulate detail editor component after creation

**`param`** Data member of detail collection

**`param`** Detail item in row

**`param`** Data member of detail editor

**`param`** Reference to editor component

#### Type declaration:

▸ (`dataMember`: *string*, `detailItem`: *Record*<string, unknown\>, `detailMember`: *string*, `editor`: [*EditorRef*](editorref.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`dataMember` | *string* |
`detailItem` | *Record*<string, unknown\> |
`detailMember` | *string* |
`editor` | [*EditorRef*](editorref.md) |

**Returns:** *void*

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:171](https://github.com/ballware/ballware-client/blob/d3c33ca/packages/react-renderer/src/common/edititemscontext.tsx#L171)

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:171](https://github.com/ballware/ballware-client/blob/d3c33ca/packages/react-renderer/src/common/edititemscontext.tsx#L171)

___

### detailEditorPreparing

• `Optional` **detailEditorPreparing**: (`dataMember`: *string*, `detailItem`: *Record*<string, unknown\>, `detailMember`: *string*, `options`: EditLayoutItemOptions) => *void*

Manipulate detail editor options before rendering

**`param`** Data member of detail collection

**`param`** Detail item in row

**`param`** Data member of detail editor

**`param`** Detail editor options

#### Type declaration:

▸ (`dataMember`: *string*, `detailItem`: *Record*<string, unknown\>, `detailMember`: *string*, `options`: EditLayoutItemOptions): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`dataMember` | *string* |
`detailItem` | *Record*<string, unknown\> |
`detailMember` | *string* |
`options` | EditLayoutItemOptions |

**Returns:** *void*

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:157](https://github.com/ballware/ballware-client/blob/d3c33ca/packages/react-renderer/src/common/edititemscontext.tsx#L157)

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:157](https://github.com/ballware/ballware-client/blob/d3c33ca/packages/react-renderer/src/common/edititemscontext.tsx#L157)

___

### detailEditorValidating

• `Optional` **detailEditorValidating**: (`dataMember`: *string*, `detailItem`: *Record*<string, unknown\>, `detailMember`: *string*, `identifier`: *string*, `value`: ValueType) => *boolean*

Execute custom validation rule for detail editor

**`param`** Data member of detail collection

**`param`** Detail item in row

**`param`** Data member of detail editor

**`param`** Identifier of custom validation rule

**`param`** Current editor value

**`returns`** true if value passes validation

#### Type declaration:

▸ (`dataMember`: *string*, `detailItem`: *Record*<string, unknown\>, `detailMember`: *string*, `identifier`: *string*, `value`: ValueType): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`dataMember` | *string* |
`detailItem` | *Record*<string, unknown\> |
`detailMember` | *string* |
`identifier` | *string* |
`value` | ValueType |

**Returns:** *boolean*

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:187](https://github.com/ballware/ballware-client/blob/d3c33ca/packages/react-renderer/src/common/edititemscontext.tsx#L187)

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:187](https://github.com/ballware/ballware-client/blob/d3c33ca/packages/react-renderer/src/common/edititemscontext.tsx#L187)

___

### detailEditorValueChanged

• `Optional` **detailEditorValueChanged**: (`dataMember`: *string*, `detailItem`: *Record*<string, unknown\>, `detailMember`: *string*, `value`: ValueType, `notify`: *boolean*) => *void*

Value changed in detail editor

**`param`** Data member of detail collection

**`param`** Detail item in row

**`param`** Data member of detail editor

**`param`** Current value of editor

**`param`** True if value change is triggered by user, false if value change was triggered by custom script

#### Type declaration:

▸ (`dataMember`: *string*, `detailItem`: *Record*<string, unknown\>, `detailMember`: *string*, `value`: ValueType, `notify`: *boolean*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`dataMember` | *string* |
`detailItem` | *Record*<string, unknown\> |
`detailMember` | *string* |
`value` | ValueType |
`notify` | *boolean* |

**Returns:** *void*

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:203](https://github.com/ballware/ballware-client/blob/d3c33ca/packages/react-renderer/src/common/edititemscontext.tsx#L203)

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:203](https://github.com/ballware/ballware-client/blob/d3c33ca/packages/react-renderer/src/common/edititemscontext.tsx#L203)

___

### detailGridCellPreparing

• `Optional` **detailGridCellPreparing**: (`dataMember`: *string*, `detailItem`: *Record*<string, unknown\>, `options`: GridLayoutColumn) => *void*

Manipulate detail grid cell options before rendering

**`param`** Data member of detail collection

**`param`** Detail item in row

**`param`** Grid column options

#### Type declaration:

▸ (`dataMember`: *string*, `detailItem`: *Record*<string, unknown\>, `options`: GridLayoutColumn): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`dataMember` | *string* |
`detailItem` | *Record*<string, unknown\> |
`options` | GridLayoutColumn |

**Returns:** *void*

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:133](https://github.com/ballware/ballware-client/blob/d3c33ca/packages/react-renderer/src/common/edititemscontext.tsx#L133)

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:133](https://github.com/ballware/ballware-client/blob/d3c33ca/packages/react-renderer/src/common/edititemscontext.tsx#L133)

___

### detailGridRowValidating

• `Optional` **detailGridRowValidating**: (`dataMember`: *string*, `detailItem`: *Record*<string, unknown\>) => *string*

Validate detail row before save operation

**`param`** Data member of detail collection

**`param`** Detail item in row

**`returns`** Validation message or translation id if validation fails, undefined if row passes validation

#### Type declaration:

▸ (`dataMember`: *string*, `detailItem`: *Record*<string, unknown\>): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`dataMember` | *string* |
`detailItem` | *Record*<string, unknown\> |

**Returns:** *string*

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:145](https://github.com/ballware/ballware-client/blob/d3c33ca/packages/react-renderer/src/common/edititemscontext.tsx#L145)

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:145](https://github.com/ballware/ballware-client/blob/d3c33ca/packages/react-renderer/src/common/edititemscontext.tsx#L145)

___

### editorEntered

• `Optional` **editorEntered**: (`dataMember`: *string*) => *void*

Editor entered focus

**`param`** Data member of editor

#### Type declaration:

▸ (`dataMember`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`dataMember` | *string* |

**Returns:** *void*

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:118](https://github.com/ballware/ballware-client/blob/d3c33ca/packages/react-renderer/src/common/edititemscontext.tsx#L118)

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:118](https://github.com/ballware/ballware-client/blob/d3c33ca/packages/react-renderer/src/common/edititemscontext.tsx#L118)

___

### editorEvent

• `Optional` **editorEvent**: (`dataMember`: *string*, `event`: *string*) => *void*

Editor triggered specific event

**`param`** Data member of editor

**`param`** Event identifier

#### Type declaration:

▸ (`dataMember`: *string*, `event`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`dataMember` | *string* |
`event` | *string* |

**Returns:** *void*

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:125](https://github.com/ballware/ballware-client/blob/d3c33ca/packages/react-renderer/src/common/edititemscontext.tsx#L125)

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:125](https://github.com/ballware/ballware-client/blob/d3c33ca/packages/react-renderer/src/common/edititemscontext.tsx#L125)

___

### editorInitialized

• `Optional` **editorInitialized**: (`dataMember`: *string*, `editor`: [*EditorRef*](editorref.md)) => *void*

Initialize editor component after first rendering

**`param`** Data member of editor

**`param`** Editor component reference

#### Type declaration:

▸ (`dataMember`: *string*, `editor`: [*EditorRef*](editorref.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`dataMember` | *string* |
`editor` | [*EditorRef*](editorref.md) |

**Returns:** *void*

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:87](https://github.com/ballware/ballware-client/blob/d3c33ca/packages/react-renderer/src/common/edititemscontext.tsx#L87)

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:87](https://github.com/ballware/ballware-client/blob/d3c33ca/packages/react-renderer/src/common/edititemscontext.tsx#L87)

___

### editorPreparing

• `Optional` **editorPreparing**: (`dataMember`: *string*, `item`: EditLayoutItemOptions) => *void*

Manipulate editor options before rendering

**`param`** Data member of editor

**`param`** Editor options

#### Type declaration:

▸ (`dataMember`: *string*, `item`: EditLayoutItemOptions): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`dataMember` | *string* |
`item` | EditLayoutItemOptions |

**Returns:** *void*

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:80](https://github.com/ballware/ballware-client/blob/d3c33ca/packages/react-renderer/src/common/edititemscontext.tsx#L80)

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:80](https://github.com/ballware/ballware-client/blob/d3c33ca/packages/react-renderer/src/common/edititemscontext.tsx#L80)

___

### editorValidating

• `Optional` **editorValidating**: (`dataMember`: *string*, `identifier`: *string*, `value`: ValueType) => *boolean*

Validate custom validation rule for editor

**`param`** Data member of editor

**`param`** Identifier of custom validation rule

**`param`** Current value of editor

**`returns`** true if value passed validation

#### Type declaration:

▸ (`dataMember`: *string*, `identifier`: *string*, `value`: ValueType): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`dataMember` | *string* |
`identifier` | *string* |
`value` | ValueType |

**Returns:** *boolean*

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:96](https://github.com/ballware/ballware-client/blob/d3c33ca/packages/react-renderer/src/common/edititemscontext.tsx#L96)

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:96](https://github.com/ballware/ballware-client/blob/d3c33ca/packages/react-renderer/src/common/edititemscontext.tsx#L96)

___

### editorValueChanged

• `Optional` **editorValueChanged**: (`dataMember`: *string*, `value`: ValueType, `notify`: *boolean*) => *void*

Editor value has changed event

**`param`** Data member of editor

**`param`** Current value of editor

**`param`** True if value change was triggered by user, false if value change was triggered by application

#### Type declaration:

▸ (`dataMember`: *string*, `value`: ValueType, `notify`: *boolean*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`dataMember` | *string* |
`value` | ValueType |
`notify` | *boolean* |

**Returns:** *void*

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:108](https://github.com/ballware/ballware-client/blob/d3c33ca/packages/react-renderer/src/common/edititemscontext.tsx#L108)

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:108](https://github.com/ballware/ballware-client/blob/d3c33ca/packages/react-renderer/src/common/edititemscontext.tsx#L108)

___

### getDetailValue

• `Optional` **getDetailValue**: <T\>(`dataMember`: *string*, `detailItem`: *Record*<string, unknown\>, `detailMember?`: *string*) => T

Get value in detail row

**`param`** Data member of detail collection

**`param`** Detail item in row

**`param`** Data member of detail editor

**`returns`** Detail member value

#### Type declaration:

▸ <T\>(`dataMember`: *string*, `detailItem`: *Record*<string, unknown\>, `detailMember?`: *string*): T

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`dataMember` | *string* |
`detailItem` | *Record*<string, unknown\> |
`detailMember?` | *string* |

**Returns:** T

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:244](https://github.com/ballware/ballware-client/blob/d3c33ca/packages/react-renderer/src/common/edititemscontext.tsx#L244)

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:244](https://github.com/ballware/ballware-client/blob/d3c33ca/packages/react-renderer/src/common/edititemscontext.tsx#L244)

___

### getLookup

• `Optional` **getLookup**: (`identifier`: *string*) => LookupDescriptor \| LookupCreator

Get lookup descriptor by identifier

**`returns`** Lookup descriptor or lookup creator method

#### Type declaration:

▸ (`identifier`: *string*): LookupDescriptor \| LookupCreator

#### Parameters:

Name | Type |
:------ | :------ |
`identifier` | *string* |

**Returns:** LookupDescriptor \| LookupCreator

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:67](https://github.com/ballware/ballware-client/blob/d3c33ca/packages/react-renderer/src/common/edititemscontext.tsx#L67)

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:67](https://github.com/ballware/ballware-client/blob/d3c33ca/packages/react-renderer/src/common/edititemscontext.tsx#L67)

___

### getValue

• `Optional` **getValue**: <T\>(`dataMember?`: *string*) => T

Get typed value from edited item by data member

**`param`** Member path in edited item

**`returns`** Property value as requested type

#### Type declaration:

▸ <T\>(`dataMember?`: *string*): T

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`dataMember?` | *string* |

**Returns:** T

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:61](https://github.com/ballware/ballware-client/blob/d3c33ca/packages/react-renderer/src/common/edititemscontext.tsx#L61)

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:61](https://github.com/ballware/ballware-client/blob/d3c33ca/packages/react-renderer/src/common/edititemscontext.tsx#L61)

___

### initNewDetailItem

• `Optional` **initNewDetailItem**: (`dataMember`: *string*, `detailItem`: *Record*<string, unknown\>) => *void*

Initialize new created detail item

**`param`** Data member of detail collection

**`param`** New created detail item

#### Type declaration:

▸ (`dataMember`: *string*, `detailItem`: *Record*<string, unknown\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`dataMember` | *string* |
`detailItem` | *Record*<string, unknown\> |

**Returns:** *void*

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:255](https://github.com/ballware/ballware-client/blob/d3c33ca/packages/react-renderer/src/common/edititemscontext.tsx#L255)

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:255](https://github.com/ballware/ballware-client/blob/d3c33ca/packages/react-renderer/src/common/edititemscontext.tsx#L255)

___

### readOnly

• `Optional` **readOnly**: () => *boolean*

Check if edit form is read only

**`returns`** true if edit form is read only

#### Type declaration:

▸ (): *boolean*

**Returns:** *boolean*

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:73](https://github.com/ballware/ballware-client/blob/d3c33ca/packages/react-renderer/src/common/edititemscontext.tsx#L73)

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:73](https://github.com/ballware/ballware-client/blob/d3c33ca/packages/react-renderer/src/common/edititemscontext.tsx#L73)

___

### renderEditLayoutItems

• `Optional` **renderEditLayoutItems**: (`items`: EditLayoutItem[]) => *undefined* \| *Element*[]

Render list of layout items

**`param`** Collection of layout item metadata

**`returns`** Collection of rendered items

#### Type declaration:

▸ (`items`: EditLayoutItem[]): *undefined* \| *Element*[]

#### Parameters:

Name | Type |
:------ | :------ |
`items` | EditLayoutItem[] |

**Returns:** *undefined* \| *Element*[]

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:52](https://github.com/ballware/ballware-client/blob/d3c33ca/packages/react-renderer/src/common/edititemscontext.tsx#L52)

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:52](https://github.com/ballware/ballware-client/blob/d3c33ca/packages/react-renderer/src/common/edititemscontext.tsx#L52)
