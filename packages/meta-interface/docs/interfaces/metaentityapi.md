[@ballware/meta-interface](../README.md) / [Exports](../modules.md) / MetaEntityApi

# Interface: MetaEntityApi

Interface for entity metadata operations

## Table of contents

### Properties

- [documentsForEntity](metaentityapi.md#documentsforentity)
- [metadataForEntity](metaentityapi.md#metadataforentity)

## Properties

### documentsForEntity

• **documentsForEntity**: (`token`: *string*, `entity`: *string*) => *Promise*<[*DocumentSelectEntry*](documentselectentry.md)[]\>

Fetch available print documents for business object type

**`param`** Access token required for authentication

**`param`** Identifier for business object type

**`returns`** Promise containing available print documents for entity

#### Type declaration:

▸ (`token`: *string*, `entity`: *string*): *Promise*<[*DocumentSelectEntry*](documentselectentry.md)[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`token` | *string* |
`entity` | *string* |

**Returns:** *Promise*<[*DocumentSelectEntry*](documentselectentry.md)[]\>

Defined in: [entity.ts:803](https://github.com/ballware/ballware-client/blob/37e08ea/packages/meta-interface/src/entity.ts#L803)

Defined in: [entity.ts:803](https://github.com/ballware/ballware-client/blob/37e08ea/packages/meta-interface/src/entity.ts#L803)

___

### metadataForEntity

• **metadataForEntity**: (`token`: *string*, `entity`: *string*) => *Promise*<[*CompiledEntityMetadata*](compiledentitymetadata.md)\>

Fetch metadata by entity identifier

**`param`** Access token required for authentication

**`param`** Identifier for business object type

**`returns`** Promise containing metadata entity

#### Type declaration:

▸ (`token`: *string*, `entity`: *string*): *Promise*<[*CompiledEntityMetadata*](compiledentitymetadata.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`token` | *string* |
`entity` | *string* |

**Returns:** *Promise*<[*CompiledEntityMetadata*](compiledentitymetadata.md)\>

Defined in: [entity.ts:791](https://github.com/ballware/ballware-client/blob/37e08ea/packages/meta-interface/src/entity.ts#L791)

Defined in: [entity.ts:791](https://github.com/ballware/ballware-client/blob/37e08ea/packages/meta-interface/src/entity.ts#L791)
