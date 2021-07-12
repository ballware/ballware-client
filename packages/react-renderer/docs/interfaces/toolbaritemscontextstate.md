[@ballware/react-renderer](../README.md) / [Exports](../modules.md) / ToolbarItemsContextState

# Interface: ToolbarItemsContextState

Context providing environmental functionality for toolbar items

## Table of contents

### Properties

- [getLookup](toolbaritemscontextstate.md#getlookup)
- [paramEditorEvent](toolbaritemscontextstate.md#parameditorevent)
- [paramEditorInitialized](toolbaritemscontextstate.md#parameditorinitialized)
- [paramEditorValueChanged](toolbaritemscontextstate.md#parameditorvaluechanged)
- [paramsInitialized](toolbaritemscontextstate.md#paramsinitialized)

## Properties

### getLookup

• `Optional` **getLookup**: (`identifier`: *string*) => LookupDescriptor \| LookupCreator

Get lookup descriptor by lookup identifier

**`param`** Identifier for lookup

**`returns`** Lookup descriptor or lookup creator function

#### Type declaration:

▸ (`identifier`: *string*): LookupDescriptor \| LookupCreator

#### Parameters:

Name | Type |
:------ | :------ |
`identifier` | *string* |

**Returns:** LookupDescriptor \| LookupCreator

Defined in: [packages/react-renderer/src/common/toolbaritemscontext.tsx:35](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/common/toolbaritemscontext.tsx#L35)

Defined in: [packages/react-renderer/src/common/toolbaritemscontext.tsx:35](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/common/toolbaritemscontext.tsx#L35)

___

### paramEditorEvent

• `Optional` **paramEditorEvent**: (`identifier`: *string*, `event`: *string*, `param?`: ValueType) => *void*

Parameter editor event triggered

**`param`** Identifier of parameter editor

**`param`** Specific identifier of event

**`param`** Optional event specific parameter

#### Type declaration:

▸ (`identifier`: *string*, `event`: *string*, `param?`: ValueType): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`identifier` | *string* |
`event` | *string* |
`param?` | ValueType |

**Returns:** *void*

Defined in: [packages/react-renderer/src/common/toolbaritemscontext.tsx:66](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/common/toolbaritemscontext.tsx#L66)

Defined in: [packages/react-renderer/src/common/toolbaritemscontext.tsx:66](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/common/toolbaritemscontext.tsx#L66)

___

### paramEditorInitialized

• `Optional` **paramEditorInitialized**: (`identifier`: *string*, `toolbarItem`: [*ToolbarItemRef*](toolbaritemref.md)) => *void*

Parameter editor for identifier is inizialized (and displayed)

**`param`** Identifier of parameter editor

**`param`** Reference to toolbar item component

#### Type declaration:

▸ (`identifier`: *string*, `toolbarItem`: [*ToolbarItemRef*](toolbaritemref.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`identifier` | *string* |
`toolbarItem` | [*ToolbarItemRef*](toolbaritemref.md) |

**Returns:** *void*

Defined in: [packages/react-renderer/src/common/toolbaritemscontext.tsx:48](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/common/toolbaritemscontext.tsx#L48)

Defined in: [packages/react-renderer/src/common/toolbaritemscontext.tsx:48](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/common/toolbaritemscontext.tsx#L48)

___

### paramEditorValueChanged

• `Optional` **paramEditorValueChanged**: (`identifier`: *string*, `value`: ValueType) => *void*

Parameter editor value changed

**`param`** Identifier of parameter editor

**`param`** Current value of parameter editor

#### Type declaration:

▸ (`identifier`: *string*, `value`: ValueType): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`identifier` | *string* |
`value` | ValueType |

**Returns:** *void*

Defined in: [packages/react-renderer/src/common/toolbaritemscontext.tsx:58](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/common/toolbaritemscontext.tsx#L58)

Defined in: [packages/react-renderer/src/common/toolbaritemscontext.tsx:58](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/common/toolbaritemscontext.tsx#L58)

___

### paramsInitialized

• `Optional` **paramsInitialized**: (`hidden`: *boolean*) => *void*

All parameter editors initialized

**`param`** True if parameter editor display is hidden because of media limitations

#### Type declaration:

▸ (`hidden`: *boolean*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`hidden` | *boolean* |

**Returns:** *void*

Defined in: [packages/react-renderer/src/common/toolbaritemscontext.tsx:41](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/common/toolbaritemscontext.tsx#L41)

Defined in: [packages/react-renderer/src/common/toolbaritemscontext.tsx:41](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/common/toolbaritemscontext.tsx#L41)
