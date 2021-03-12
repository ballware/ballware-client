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

Defined in: [lib/entity.ts:776](https://github.com/ballware/ballware-client/blob/c9efe3e/libs/meta-interface/src/lib/entity.ts#L776)

Defined in: [lib/entity.ts:776](https://github.com/ballware/ballware-client/blob/c9efe3e/libs/meta-interface/src/lib/entity.ts#L776)

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

Defined in: [lib/entity.ts:764](https://github.com/ballware/ballware-client/blob/c9efe3e/libs/meta-interface/src/lib/entity.ts#L764)

Defined in: [lib/entity.ts:764](https://github.com/ballware/ballware-client/blob/c9efe3e/libs/meta-interface/src/lib/entity.ts#L764)
