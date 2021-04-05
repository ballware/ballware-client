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

• `Optional` **EditProvider**: (`props`: *PropsWithChildren*<{ `editFunction`: *undefined* \| EntityCustomFunction ; `editLayout`: *undefined* \| EditLayout ; `item`: ValueType \| *CrudItem* \| *CrudItem*[]  }\>) => *Element*

Factory for generating new edit provider

#### Type declaration:

▸ (`props`: *PropsWithChildren*<{ `editFunction`: *undefined* \| EntityCustomFunction ; `editLayout`: *undefined* \| EditLayout ; `item`: ValueType \| *CrudItem* \| *CrudItem*[]  }\>): *Element*

#### Parameters:

Name | Type |
:------ | :------ |
`props` | *PropsWithChildren*<{ `editFunction`: *undefined* \| EntityCustomFunction ; `editLayout`: *undefined* \| EditLayout ; `item`: ValueType \| *CrudItem* \| *CrudItem*[]  }\> |

**Returns:** *Element*

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:264](https://github.com/ballware/ballware-client/blob/d8b5d6b/packages/react-renderer/src/common/edititemscontext.tsx#L264)

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:264](https://github.com/ballware/ballware-client/blob/d8b5d6b/packages/react-renderer/src/common/edititemscontext.tsx#L264)

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

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:218](https://github.com/ballware/ballware-client/blob/d8b5d6b/packages/react-renderer/src/common/edititemscontext.tsx#L218)

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:218](https://github.com/ballware/ballware-client/blob/d8b5d6b/packages/react-renderer/src/common/edititemscontext.tsx#L218)

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

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:231](https://github.com/ballware/ballware-client/blob/d8b5d6b/packages/react-renderer/src/common/edititemscontext.tsx#L231)

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:231](https://github.com/ballware/ballware-client/blob/d8b5d6b/packages/react-renderer/src/common/edititemscontext.tsx#L231)

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

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:172](https://github.com/ballware/ballware-client/blob/d8b5d6b/packages/react-renderer/src/common/edititemscontext.tsx#L172)

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:172](https://github.com/ballware/ballware-client/blob/d8b5d6b/packages/react-renderer/src/common/edititemscontext.tsx#L172)

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

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:158](https://github.com/ballware/ballware-client/blob/d8b5d6b/packages/react-renderer/src/common/edititemscontext.tsx#L158)

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:158](https://github.com/ballware/ballware-client/blob/d8b5d6b/packages/react-renderer/src/common/edititemscontext.tsx#L158)

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

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:188](https://github.com/ballware/ballware-client/blob/d8b5d6b/packages/react-renderer/src/common/edititemscontext.tsx#L188)

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:188](https://github.com/ballware/ballware-client/blob/d8b5d6b/packages/react-renderer/src/common/edititemscontext.tsx#L188)

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

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:204](https://github.com/ballware/ballware-client/blob/d8b5d6b/packages/react-renderer/src/common/edititemscontext.tsx#L204)

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:204](https://github.com/ballware/ballware-client/blob/d8b5d6b/packages/react-renderer/src/common/edititemscontext.tsx#L204)

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

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:134](https://github.com/ballware/ballware-client/blob/d8b5d6b/packages/react-renderer/src/common/edititemscontext.tsx#L134)

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:134](https://github.com/ballware/ballware-client/blob/d8b5d6b/packages/react-renderer/src/common/edititemscontext.tsx#L134)

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

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:146](https://github.com/ballware/ballware-client/blob/d8b5d6b/packages/react-renderer/src/common/edititemscontext.tsx#L146)

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:146](https://github.com/ballware/ballware-client/blob/d8b5d6b/packages/react-renderer/src/common/edititemscontext.tsx#L146)

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

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:119](https://github.com/ballware/ballware-client/blob/d8b5d6b/packages/react-renderer/src/common/edititemscontext.tsx#L119)

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:119](https://github.com/ballware/ballware-client/blob/d8b5d6b/packages/react-renderer/src/common/edititemscontext.tsx#L119)

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

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:126](https://github.com/ballware/ballware-client/blob/d8b5d6b/packages/react-renderer/src/common/edititemscontext.tsx#L126)

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:126](https://github.com/ballware/ballware-client/blob/d8b5d6b/packages/react-renderer/src/common/edititemscontext.tsx#L126)

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

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:88](https://github.com/ballware/ballware-client/blob/d8b5d6b/packages/react-renderer/src/common/edititemscontext.tsx#L88)

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:88](https://github.com/ballware/ballware-client/blob/d8b5d6b/packages/react-renderer/src/common/edititemscontext.tsx#L88)

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

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:81](https://github.com/ballware/ballware-client/blob/d8b5d6b/packages/react-renderer/src/common/edititemscontext.tsx#L81)

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:81](https://github.com/ballware/ballware-client/blob/d8b5d6b/packages/react-renderer/src/common/edititemscontext.tsx#L81)

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

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:97](https://github.com/ballware/ballware-client/blob/d8b5d6b/packages/react-renderer/src/common/edititemscontext.tsx#L97)

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:97](https://github.com/ballware/ballware-client/blob/d8b5d6b/packages/react-renderer/src/common/edititemscontext.tsx#L97)

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

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:109](https://github.com/ballware/ballware-client/blob/d8b5d6b/packages/react-renderer/src/common/edititemscontext.tsx#L109)

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:109](https://github.com/ballware/ballware-client/blob/d8b5d6b/packages/react-renderer/src/common/edititemscontext.tsx#L109)

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

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:245](https://github.com/ballware/ballware-client/blob/d8b5d6b/packages/react-renderer/src/common/edititemscontext.tsx#L245)

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:245](https://github.com/ballware/ballware-client/blob/d8b5d6b/packages/react-renderer/src/common/edititemscontext.tsx#L245)

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

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:68](https://github.com/ballware/ballware-client/blob/d8b5d6b/packages/react-renderer/src/common/edititemscontext.tsx#L68)

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:68](https://github.com/ballware/ballware-client/blob/d8b5d6b/packages/react-renderer/src/common/edititemscontext.tsx#L68)

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

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:62](https://github.com/ballware/ballware-client/blob/d8b5d6b/packages/react-renderer/src/common/edititemscontext.tsx#L62)

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:62](https://github.com/ballware/ballware-client/blob/d8b5d6b/packages/react-renderer/src/common/edititemscontext.tsx#L62)

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

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:256](https://github.com/ballware/ballware-client/blob/d8b5d6b/packages/react-renderer/src/common/edititemscontext.tsx#L256)

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:256](https://github.com/ballware/ballware-client/blob/d8b5d6b/packages/react-renderer/src/common/edititemscontext.tsx#L256)

___

### readOnly

• `Optional` **readOnly**: () => *boolean*

Check if edit form is read only

**`returns`** true if edit form is read only

#### Type declaration:

▸ (): *boolean*

**Returns:** *boolean*

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:74](https://github.com/ballware/ballware-client/blob/d8b5d6b/packages/react-renderer/src/common/edititemscontext.tsx#L74)

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:74](https://github.com/ballware/ballware-client/blob/d8b5d6b/packages/react-renderer/src/common/edititemscontext.tsx#L74)

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

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:53](https://github.com/ballware/ballware-client/blob/d8b5d6b/packages/react-renderer/src/common/edititemscontext.tsx#L53)

Defined in: [packages/react-renderer/src/common/edititemscontext.tsx:53](https://github.com/ballware/ballware-client/blob/d8b5d6b/packages/react-renderer/src/common/edititemscontext.tsx#L53)
