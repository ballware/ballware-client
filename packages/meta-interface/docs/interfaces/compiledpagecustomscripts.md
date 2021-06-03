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

Defined in: [page.ts:257](https://github.com/ballware/ballware-client/blob/37e08ea/packages/meta-interface/src/page.ts#L257)

Defined in: [page.ts:257](https://github.com/ballware/ballware-client/blob/37e08ea/packages/meta-interface/src/page.ts#L257)

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

Defined in: [page.ts:248](https://github.com/ballware/ballware-client/blob/37e08ea/packages/meta-interface/src/page.ts#L248)

Defined in: [page.ts:248](https://github.com/ballware/ballware-client/blob/37e08ea/packages/meta-interface/src/page.ts#L248)

___

### paramEditorEvent

• `Optional` **paramEditorEvent**: (`name`: *string*, `event`: *string*, `editUtil`: [*EditUtil*](editutil.md), `lookups`: *Record*<string, unknown\>, `util`: [*ScriptUtil*](scriptutil.md), `actions`: [*ScriptActions*](scriptactions.md), `pageParam?`: *Record*<string, unknown\>, `param?`: *Record*<string, unknown\>) => *void*

Toolbar component event triggered

**`param`** Unique name of toolbar item

**`param`** Event identifier

**`param`** Adapter for accessing editor components by data member

**`param`** Lookup definitions prepared for page

**`param`** Utility for performing misc operations

**`param`** Container containing action triggers for page

**`param`** Current or predefined page param

**`param`** Additional parameter to item event

#### Type declaration:

▸ (`name`: *string*, `event`: *string*, `editUtil`: [*EditUtil*](editutil.md), `lookups`: *Record*<string, unknown\>, `util`: [*ScriptUtil*](scriptutil.md), `actions`: [*ScriptActions*](scriptactions.md), `pageParam?`: *Record*<string, unknown\>, `param?`: *Record*<string, unknown\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |
`event` | *string* |
`editUtil` | [*EditUtil*](editutil.md) |
`lookups` | *Record*<string, unknown\> |
`util` | [*ScriptUtil*](scriptutil.md) |
`actions` | [*ScriptActions*](scriptactions.md) |
`pageParam?` | *Record*<string, unknown\> |
`param?` | *Record*<string, unknown\> |

**Returns:** *void*

Defined in: [page.ts:341](https://github.com/ballware/ballware-client/blob/37e08ea/packages/meta-interface/src/page.ts#L341)

Defined in: [page.ts:341](https://github.com/ballware/ballware-client/blob/37e08ea/packages/meta-interface/src/page.ts#L341)

___

### paramEditorInitialized

• `Optional` **paramEditorInitialized**: (`name`: *string*, `editUtil`: [*EditUtil*](editutil.md), `lookups`: *Record*<string, unknown\>, `util`: [*ScriptUtil*](scriptutil.md), `actions`: [*ScriptActions*](scriptactions.md), `pageParam?`: *Record*<string, unknown\>) => *void*

Single toolbar component initialized

**`param`** Unique name of toolbar item

**`param`** Adapter for accessing editor components by data member

**`param`** Lookup definitions prepared for page

**`param`** Utility for performing misc operations

**`param`** Container containing action triggers for page

**`param`** Current or predefined page param

#### Type declaration:

▸ (`name`: *string*, `editUtil`: [*EditUtil*](editutil.md), `lookups`: *Record*<string, unknown\>, `util`: [*ScriptUtil*](scriptutil.md), `actions`: [*ScriptActions*](scriptactions.md), `pageParam?`: *Record*<string, unknown\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |
`editUtil` | [*EditUtil*](editutil.md) |
`lookups` | *Record*<string, unknown\> |
`util` | [*ScriptUtil*](scriptutil.md) |
`actions` | [*ScriptActions*](scriptactions.md) |
`pageParam?` | *Record*<string, unknown\> |

**Returns:** *void*

Defined in: [page.ts:299](https://github.com/ballware/ballware-client/blob/37e08ea/packages/meta-interface/src/page.ts#L299)

Defined in: [page.ts:299](https://github.com/ballware/ballware-client/blob/37e08ea/packages/meta-interface/src/page.ts#L299)

___

### paramEditorValueChanged

• `Optional` **paramEditorValueChanged**: (`name`: *string*, `value`: *unknown*, `editUtil`: [*EditUtil*](editutil.md), `lookups`: *Record*<string, unknown\>, `util`: [*ScriptUtil*](scriptutil.md), `actions`: [*ScriptActions*](scriptactions.md), `pageParam?`: *Record*<string, unknown\>) => *void*

toolbar component value changed

**`param`** Unique name of toolbar item

**`param`** Current value of toolbar item

**`param`** Adapter for accessing editor components by data member

**`param`** Lookup definitions prepared for page

**`param`** Utility for performing misc operations

**`param`** Container containing action triggers for page

**`param`** Current or predefined page param

#### Type declaration:

▸ (`name`: *string*, `value`: *unknown*, `editUtil`: [*EditUtil*](editutil.md), `lookups`: *Record*<string, unknown\>, `util`: [*ScriptUtil*](scriptutil.md), `actions`: [*ScriptActions*](scriptactions.md), `pageParam?`: *Record*<string, unknown\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |
`value` | *unknown* |
`editUtil` | [*EditUtil*](editutil.md) |
`lookups` | *Record*<string, unknown\> |
`util` | [*ScriptUtil*](scriptutil.md) |
`actions` | [*ScriptActions*](scriptactions.md) |
`pageParam?` | *Record*<string, unknown\> |

**Returns:** *void*

Defined in: [page.ts:319](https://github.com/ballware/ballware-client/blob/37e08ea/packages/meta-interface/src/page.ts#L319)

Defined in: [page.ts:319](https://github.com/ballware/ballware-client/blob/37e08ea/packages/meta-interface/src/page.ts#L319)

___

### paramsInitialized

• `Optional` **paramsInitialized**: (`hidden`: *boolean*, `lookups`: *Record*<string, unknown\>, `util`: [*ScriptUtil*](scriptutil.md), `actions`: [*ScriptActions*](scriptactions.md), `pageParam?`: *Record*<string, unknown\>) => *void*

Toolbar initialization finished

**`param`** Set if toolbar is not displayed on small screens

**`param`** Lookup definitions prepared for page

**`param`** Utility for performing misc operations

**`param`** Container containing action triggers for page

**`param`** Current or predefined page param

#### Type declaration:

▸ (`hidden`: *boolean*, `lookups`: *Record*<string, unknown\>, `util`: [*ScriptUtil*](scriptutil.md), `actions`: [*ScriptActions*](scriptactions.md), `pageParam?`: *Record*<string, unknown\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`hidden` | *boolean* |
`lookups` | *Record*<string, unknown\> |
`util` | [*ScriptUtil*](scriptutil.md) |
`actions` | [*ScriptActions*](scriptactions.md) |
`pageParam?` | *Record*<string, unknown\> |

**Returns:** *void*

Defined in: [page.ts:281](https://github.com/ballware/ballware-client/blob/37e08ea/packages/meta-interface/src/page.ts#L281)

Defined in: [page.ts:281](https://github.com/ballware/ballware-client/blob/37e08ea/packages/meta-interface/src/page.ts#L281)

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

Defined in: [page.ts:266](https://github.com/ballware/ballware-client/blob/37e08ea/packages/meta-interface/src/page.ts#L266)

Defined in: [page.ts:266](https://github.com/ballware/ballware-client/blob/37e08ea/packages/meta-interface/src/page.ts#L266)
