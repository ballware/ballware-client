[@ballware/meta-interface](../README.md) / [Exports](../modules.md) / CompiledEntityMetadata

# Interface: CompiledEntityMetadata

Defintion of metadata for business object

## Table of contents

### Properties

- [application](compiledentitymetadata.md#application)
- [baseUrl](compiledentitymetadata.md#baseurl)
- [compiledCustomScripts](compiledentitymetadata.md#compiledcustomscripts)
- [customFunctions](compiledentitymetadata.md#customfunctions)
- [displayName](compiledentitymetadata.md#displayname)
- [editLayouts](compiledentitymetadata.md#editlayouts)
- [entity](compiledentitymetadata.md#entity)
- [gridLayouts](compiledentitymetadata.md#gridlayouts)
- [itemMappingScript](compiledentitymetadata.md#itemmappingscript)
- [itemReverseMappingScript](compiledentitymetadata.md#itemreversemappingscript)
- [lookups](compiledentitymetadata.md#lookups)
- [picklists](compiledentitymetadata.md#picklists)
- [stateColumn](compiledentitymetadata.md#statecolumn)

## Properties

### application

• **application**: *string*

Application scope the business object is nested in

Defined in: [entity.ts:692](https://github.com/ballware/ballware-client/blob/37e08ea/packages/meta-interface/src/entity.ts#L692)

___

### baseUrl

• **baseUrl**: *string*

Base url of crud operations REST API

Defined in: [entity.ts:707](https://github.com/ballware/ballware-client/blob/37e08ea/packages/meta-interface/src/entity.ts#L707)

___

### compiledCustomScripts

• `Optional` **compiledCustomScripts**: [*CompiledEntityCustomScripts*](compiledentitycustomscripts.md)

Container for custom script operations

Defined in: [entity.ts:740](https://github.com/ballware/ballware-client/blob/37e08ea/packages/meta-interface/src/entity.ts#L740)

___

### customFunctions

• `Optional` **customFunctions**: [*EntityCustomFunction*](entitycustomfunction.md)[]

Collection of defined custom functions

Defined in: [entity.ts:745](https://github.com/ballware/ballware-client/blob/37e08ea/packages/meta-interface/src/entity.ts#L745)

___

### displayName

• **displayName**: *string*

Display name of business object

Defined in: [entity.ts:702](https://github.com/ballware/ballware-client/blob/37e08ea/packages/meta-interface/src/entity.ts#L702)

___

### editLayouts

• **editLayouts**: [*EditLayout*](editlayout.md)[]

Collection of defined edit layouts

Defined in: [entity.ts:755](https://github.com/ballware/ballware-client/blob/37e08ea/packages/meta-interface/src/entity.ts#L755)

___

### entity

• **entity**: *string*

Unique identifier of business object

Defined in: [entity.ts:697](https://github.com/ballware/ballware-client/blob/37e08ea/packages/meta-interface/src/entity.ts#L697)

___

### gridLayouts

• **gridLayouts**: [*GridLayout*](gridlayout.md)[]

Collection of defined grid layouts

Defined in: [entity.ts:750](https://github.com/ballware/ballware-client/blob/37e08ea/packages/meta-interface/src/entity.ts#L750)

___

### itemMappingScript

• **itemMappingScript**: (`item`: [*CrudItem*](cruditem.md), `customParam`: *unknown*, `util`: [*ScriptUtil*](scriptutil.md)) => [*CrudItem*](cruditem.md)

Map items received from API

**`param`** Unmapped item

**`param`** Current value of prepared custom param (previous result of prepareCustomParam function)

**`param`** Utility for performing misc operations

**`returns`** Mapped item for usage in client application

#### Type declaration:

▸ (`item`: [*CrudItem*](cruditem.md), `customParam`: *unknown*, `util`: [*ScriptUtil*](scriptutil.md)): [*CrudItem*](cruditem.md)

#### Parameters:

Name | Type |
:------ | :------ |
`item` | [*CrudItem*](cruditem.md) |
`customParam` | *unknown* |
`util` | [*ScriptUtil*](scriptutil.md) |

**Returns:** [*CrudItem*](cruditem.md)

Defined in: [entity.ts:717](https://github.com/ballware/ballware-client/blob/37e08ea/packages/meta-interface/src/entity.ts#L717)

Defined in: [entity.ts:717](https://github.com/ballware/ballware-client/blob/37e08ea/packages/meta-interface/src/entity.ts#L717)

___

### itemReverseMappingScript

• **itemReverseMappingScript**: (`item`: [*CrudItem*](cruditem.md), `customParam`: *unknown*, `util`: [*ScriptUtil*](scriptutil.md)) => [*CrudItem*](cruditem.md)

Reverse map items for sending to API

**`param`** Item used in client application

**`param`** Current value of prepared custom param (previous result of prepareCustomParam function)

**`param`** Utility for performing misc operations

**`returns`** Mapped item for usage in API

#### Type declaration:

▸ (`item`: [*CrudItem*](cruditem.md), `customParam`: *unknown*, `util`: [*ScriptUtil*](scriptutil.md)): [*CrudItem*](cruditem.md)

#### Parameters:

Name | Type |
:------ | :------ |
`item` | [*CrudItem*](cruditem.md) |
`customParam` | *unknown* |
`util` | [*ScriptUtil*](scriptutil.md) |

**Returns:** [*CrudItem*](cruditem.md)

Defined in: [entity.ts:731](https://github.com/ballware/ballware-client/blob/37e08ea/packages/meta-interface/src/entity.ts#L731)

Defined in: [entity.ts:731](https://github.com/ballware/ballware-client/blob/37e08ea/packages/meta-interface/src/entity.ts#L731)

___

### lookups

• **lookups**: { `displayMember`: *string* ; `hasParam`: *boolean* ; `id`: *string* ; `identifier`: *string* ; `type`: *number* ; `valueMember`: *string*  }[]

Collection of defined lookups

Defined in: [entity.ts:760](https://github.com/ballware/ballware-client/blob/37e08ea/packages/meta-interface/src/entity.ts#L760)

___

### picklists

• **picklists**: { `entity`: *string* ; `field`: *string* ; `identifier`: *string*  }[]

Collection of defined picklists

Defined in: [entity.ts:772](https://github.com/ballware/ballware-client/blob/37e08ea/packages/meta-interface/src/entity.ts#L772)

___

### stateColumn

• **stateColumn**: *string*

Member of business object containing current state code

Defined in: [entity.ts:777](https://github.com/ballware/ballware-client/blob/37e08ea/packages/meta-interface/src/entity.ts#L777)
