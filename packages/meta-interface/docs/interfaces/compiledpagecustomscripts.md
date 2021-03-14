[@ballware/meta-interface](../README.md) / [Exports](../modules.md) / CompiledPageCustomScripts

# Interface: CompiledPageCustomScripts

Definition of page specific custom scripts

## Table of contents

### Properties

- [pageEnabled](compiledpagecustomscripts.md#pageenabled)
- [pageVisible](compiledpagecustomscripts.md#pagevisible)
- [paramEditorEvent](compiledpagecustomscripts.md#parameditorevent)
- [paramEditorInitialized](compiledpagecustomscripts.md#parameditorinitialized)
- [paramEditorValueChanged](compiledpagecustomscripts.md#parameditorvaluechanged)
- [paramsInitialized](compiledpagecustomscripts.md#paramsinitialized)
- [prepareCustomParam](compiledpagecustomscripts.md#preparecustomparam)

## Properties

### pageEnabled

• `Optional` **pageEnabled**: (`rights`: [*Rights*](rights.md), `page`: *string*) => *boolean*

Check if user is allowed to navigate to page

**`param`** User rights container

**`param`** Identifier of page

**`returns`** true if page is allowed, false if not

#### Type declaration:

▸ (`rights`: [*Rights*](rights.md), `page`: *string*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`rights` | [*Rights*](rights.md) |
`page` | *string* |

**Returns:** *boolean*

Defined in: [page.ts:247](https://github.com/ballware/ballware-client/blob/e25f4ba/packages/meta-interface/src/page.ts#L247)

Defined in: [page.ts:247](https://github.com/ballware/ballware-client/blob/e25f4ba/packages/meta-interface/src/page.ts#L247)

___

### pageVisible

• `Optional` **pageVisible**: (`rights`: [*Rights*](rights.md), `page`: *string*) => *boolean*

Check if user is allowed to view page in navigation

**`param`** User rights container

**`param`** Identifier of page

**`returns`** true if page is allowed, false if not

#### Type declaration:

▸ (`rights`: [*Rights*](rights.md), `page`: *string*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`rights` | [*Rights*](rights.md) |
`page` | *string* |

**Returns:** *boolean*

Defined in: [page.ts:238](https://github.com/ballware/ballware-client/blob/e25f4ba/packages/meta-interface/src/page.ts#L238)

Defined in: [page.ts:238](https://github.com/ballware/ballware-client/blob/e25f4ba/packages/meta-interface/src/page.ts#L238)

___

### paramEditorEvent

• `Optional` **paramEditorEvent**: (`name`: *string*, `event`: *string*, `editUtil`: [*EditUtil*](editutil.md), `lookups`: *Record*<string, unknown\>, `util`: [*ScriptUtil*](scriptutil.md), `actions`: [*ScriptActions*](scriptactions.md), `param?`: *Record*<string, unknown\>) => *void*

Toolbar component event triggered

**`param`** Unique name of toolbar item

**`param`** Event identifier

**`param`** Adapter for accessing editor components by data member

**`param`** Lookup definitions prepared for page

**`param`** Utility for performing misc operations

**`param`** Container containing action triggers for page

**`param`** Additional parameter to item event

#### Type declaration:

▸ (`name`: *string*, `event`: *string*, `editUtil`: [*EditUtil*](editutil.md), `lookups`: *Record*<string, unknown\>, `util`: [*ScriptUtil*](scriptutil.md), `actions`: [*ScriptActions*](scriptactions.md), `param?`: *Record*<string, unknown\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |
`event` | *string* |
`editUtil` | [*EditUtil*](editutil.md) |
`lookups` | *Record*<string, unknown\> |
`util` | [*ScriptUtil*](scriptutil.md) |
`actions` | [*ScriptActions*](scriptactions.md) |
`param?` | *Record*<string, unknown\> |

**Returns:** *void*

Defined in: [page.ts:324](https://github.com/ballware/ballware-client/blob/e25f4ba/packages/meta-interface/src/page.ts#L324)

Defined in: [page.ts:324](https://github.com/ballware/ballware-client/blob/e25f4ba/packages/meta-interface/src/page.ts#L324)

___

### paramEditorInitialized

• `Optional` **paramEditorInitialized**: (`name`: *string*, `editUtil`: [*EditUtil*](editutil.md), `lookups`: *Record*<string, unknown\>, `util`: [*ScriptUtil*](scriptutil.md), `actions`: [*ScriptActions*](scriptactions.md)) => *void*

Single toolbar component initialized

**`param`** Unique name of toolbar item

**`param`** Adapter for accessing editor components by data member

**`param`** Lookup definitions prepared for page

**`param`** Utility for performing misc operations

**`param`** Container containing action triggers for page

#### Type declaration:

▸ (`name`: *string*, `editUtil`: [*EditUtil*](editutil.md), `lookups`: *Record*<string, unknown\>, `util`: [*ScriptUtil*](scriptutil.md), `actions`: [*ScriptActions*](scriptactions.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |
`editUtil` | [*EditUtil*](editutil.md) |
`lookups` | *Record*<string, unknown\> |
`util` | [*ScriptUtil*](scriptutil.md) |
`actions` | [*ScriptActions*](scriptactions.md) |

**Returns:** *void*

Defined in: [page.ts:286](https://github.com/ballware/ballware-client/blob/e25f4ba/packages/meta-interface/src/page.ts#L286)

Defined in: [page.ts:286](https://github.com/ballware/ballware-client/blob/e25f4ba/packages/meta-interface/src/page.ts#L286)

___

### paramEditorValueChanged

• `Optional` **paramEditorValueChanged**: (`name`: *string*, `value`: *unknown*, `editUtil`: [*EditUtil*](editutil.md), `lookups`: *Record*<string, unknown\>, `util`: [*ScriptUtil*](scriptutil.md), `actions`: [*ScriptActions*](scriptactions.md)) => *void*

toolbar component value changed

**`param`** Unique name of toolbar item

**`param`** Current value of toolbar item

**`param`** Adapter for accessing editor components by data member

**`param`** Lookup definitions prepared for page

**`param`** Utility for performing misc operations

**`param`** Container containing action triggers for page

#### Type declaration:

▸ (`name`: *string*, `value`: *unknown*, `editUtil`: [*EditUtil*](editutil.md), `lookups`: *Record*<string, unknown\>, `util`: [*ScriptUtil*](scriptutil.md), `actions`: [*ScriptActions*](scriptactions.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |
`value` | *unknown* |
`editUtil` | [*EditUtil*](editutil.md) |
`lookups` | *Record*<string, unknown\> |
`util` | [*ScriptUtil*](scriptutil.md) |
`actions` | [*ScriptActions*](scriptactions.md) |

**Returns:** *void*

Defined in: [page.ts:304](https://github.com/ballware/ballware-client/blob/e25f4ba/packages/meta-interface/src/page.ts#L304)

Defined in: [page.ts:304](https://github.com/ballware/ballware-client/blob/e25f4ba/packages/meta-interface/src/page.ts#L304)

___

### paramsInitialized

• `Optional` **paramsInitialized**: (`hidden`: *boolean*, `lookups`: *Record*<string, unknown\>, `util`: [*ScriptUtil*](scriptutil.md), `actions`: [*ScriptActions*](scriptactions.md)) => *void*

Toolbar initialization finished

**`param`** Set if toolbar is not displayed on small screens

**`param`** Lookup definitions prepared for page

**`param`** Utility for performing misc operations

**`param`** Container containing action triggers for page

#### Type declaration:

▸ (`hidden`: *boolean*, `lookups`: *Record*<string, unknown\>, `util`: [*ScriptUtil*](scriptutil.md), `actions`: [*ScriptActions*](scriptactions.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`hidden` | *boolean* |
`lookups` | *Record*<string, unknown\> |
`util` | [*ScriptUtil*](scriptutil.md) |
`actions` | [*ScriptActions*](scriptactions.md) |

**Returns:** *void*

Defined in: [page.ts:270](https://github.com/ballware/ballware-client/blob/e25f4ba/packages/meta-interface/src/page.ts#L270)

Defined in: [page.ts:270](https://github.com/ballware/ballware-client/blob/e25f4ba/packages/meta-interface/src/page.ts#L270)

___

### prepareCustomParam

• `Optional` **prepareCustomParam**: (`lookups`: *Record*<string, unknown\>, `util`: [*ScriptUtil*](scriptutil.md), `callback`: (`customParam`: *Record*<string, unknown\>) => *void*) => *void*

Prepare custom param object containing values needed for other custom scripts

**`param`** Lookup definitions prepared for page

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

Defined in: [page.ts:256](https://github.com/ballware/ballware-client/blob/e25f4ba/packages/meta-interface/src/page.ts#L256)

Defined in: [page.ts:256](https://github.com/ballware/ballware-client/blob/e25f4ba/packages/meta-interface/src/page.ts#L256)
