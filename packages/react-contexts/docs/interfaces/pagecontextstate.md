[@ballware/react-contexts](../README.md) / [Exports](../modules.md) / PageContextState

# Interface: PageContextState

Context for page layout functionality

## Table of contents

### Properties

- [customParam](pagecontextstate.md#customparam)
- [documentation](pagecontextstate.md#documentation)
- [layout](pagecontextstate.md#layout)
- [loadDocumentation](pagecontextstate.md#loaddocumentation)
- [pageParam](pagecontextstate.md#pageparam)
- [paramEditorEvent](pagecontextstate.md#parameditorevent)
- [paramEditorInitialized](pagecontextstate.md#parameditorinitialized)
- [paramEditorValueChanged](pagecontextstate.md#parameditorvaluechanged)
- [paramsInitialized](pagecontextstate.md#paramsinitialized)
- [resetDocumentation](pagecontextstate.md#resetdocumentation)

## Properties

### customParam

• `Optional` **customParam**: *Record*<string, unknown\>

Custom param provided by custom page scripts

Defined in: [packages/react-contexts/src/pagecontext.ts:33](https://github.com/ballware/ballware-client/blob/a03724f/packages/react-contexts/src/pagecontext.ts#L33)

___

### documentation

• `Optional` **documentation**: *string*

Documentation text provided for display

Defined in: [packages/react-contexts/src/pagecontext.ts:38](https://github.com/ballware/ballware-client/blob/a03724f/packages/react-contexts/src/pagecontext.ts#L38)

___

### layout

• `Optional` **layout**: PageLayout

Current provided page layout

Defined in: [packages/react-contexts/src/pagecontext.ts:23](https://github.com/ballware/ballware-client/blob/a03724f/packages/react-contexts/src/pagecontext.ts#L23)

___

### loadDocumentation

• `Optional` **loadDocumentation**: (`identifier`: *string*) => *void*

Load documentation for documentation identifier

#### Type declaration:

▸ (`identifier`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`identifier` | *string* |

**Returns:** *void*

Defined in: [packages/react-contexts/src/pagecontext.ts:43](https://github.com/ballware/ballware-client/blob/a03724f/packages/react-contexts/src/pagecontext.ts#L43)

Defined in: [packages/react-contexts/src/pagecontext.ts:43](https://github.com/ballware/ballware-client/blob/a03724f/packages/react-contexts/src/pagecontext.ts#L43)

___

### pageParam

• `Optional` **pageParam**: QueryParams

Page param provided by param editors or url

Defined in: [packages/react-contexts/src/pagecontext.ts:28](https://github.com/ballware/ballware-client/blob/a03724f/packages/react-contexts/src/pagecontext.ts#L28)

___

### paramEditorEvent

• `Optional` **paramEditorEvent**: (`name`: *string*, `event`: *string*, `editUtil`: EditUtil, `param?`: ValueType) => *void*

Parameter editor event triggered

**`param`** Identifier of parameter editor

**`param`** Specific identifier of event

**`param`** Adapter for access to parameter editor instances

**`param`** Optional event specific parameter

#### Type declaration:

▸ (`name`: *string*, `event`: *string*, `editUtil`: EditUtil, `param?`: ValueType): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |
`event` | *string* |
`editUtil` | EditUtil |
`param?` | ValueType |

**Returns:** *void*

Defined in: [packages/react-contexts/src/pagecontext.ts:82](https://github.com/ballware/ballware-client/blob/a03724f/packages/react-contexts/src/pagecontext.ts#L82)

Defined in: [packages/react-contexts/src/pagecontext.ts:82](https://github.com/ballware/ballware-client/blob/a03724f/packages/react-contexts/src/pagecontext.ts#L82)

___

### paramEditorInitialized

• `Optional` **paramEditorInitialized**: (`identifier`: *string*, `editUtil`: EditUtil) => *void*

Parameter editor for identifier is inizialized (and displayed)

**`param`** Identifier of parameter editor

**`param`** Adaptor for access to parameter editor instances

#### Type declaration:

▸ (`identifier`: *string*, `editUtil`: EditUtil): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`identifier` | *string* |
`editUtil` | EditUtil |

**Returns:** *void*

Defined in: [packages/react-contexts/src/pagecontext.ts:61](https://github.com/ballware/ballware-client/blob/a03724f/packages/react-contexts/src/pagecontext.ts#L61)

Defined in: [packages/react-contexts/src/pagecontext.ts:61](https://github.com/ballware/ballware-client/blob/a03724f/packages/react-contexts/src/pagecontext.ts#L61)

___

### paramEditorValueChanged

• `Optional` **paramEditorValueChanged**: (`name`: *string*, `value`: ValueType, `editUtil`: EditUtil) => *void*

Parameter editor value changed

**`param`** Identifier of parameter editor

**`param`** Current value of parameter editor

**`param`** Adapter for access to parameter editor instances

#### Type declaration:

▸ (`name`: *string*, `value`: ValueType, `editUtil`: EditUtil): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |
`value` | ValueType |
`editUtil` | EditUtil |

**Returns:** *void*

Defined in: [packages/react-contexts/src/pagecontext.ts:69](https://github.com/ballware/ballware-client/blob/a03724f/packages/react-contexts/src/pagecontext.ts#L69)

Defined in: [packages/react-contexts/src/pagecontext.ts:69](https://github.com/ballware/ballware-client/blob/a03724f/packages/react-contexts/src/pagecontext.ts#L69)

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

Defined in: [packages/react-contexts/src/pagecontext.ts:54](https://github.com/ballware/ballware-client/blob/a03724f/packages/react-contexts/src/pagecontext.ts#L54)

Defined in: [packages/react-contexts/src/pagecontext.ts:54](https://github.com/ballware/ballware-client/blob/a03724f/packages/react-contexts/src/pagecontext.ts#L54)

___

### resetDocumentation

• `Optional` **resetDocumentation**: () => *void*

Hide documentation for display

#### Type declaration:

▸ (): *void*

**Returns:** *void*

Defined in: [packages/react-contexts/src/pagecontext.ts:48](https://github.com/ballware/ballware-client/blob/a03724f/packages/react-contexts/src/pagecontext.ts#L48)

Defined in: [packages/react-contexts/src/pagecontext.ts:48](https://github.com/ballware/ballware-client/blob/a03724f/packages/react-contexts/src/pagecontext.ts#L48)
