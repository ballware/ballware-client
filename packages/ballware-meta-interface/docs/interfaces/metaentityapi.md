[@ballware/meta-interface](../README.md) / [Exports](../modules.md) / MetaEntityApi

# Interface: MetaEntityApi

Interface for entity metadata operations

## Hierarchy

* **MetaEntityApi**

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

Defined in: [entity.ts:776](https://github.com/frankball/ballware-meta-interface/blob/157bdb2/src/entity.ts#L776)

___

### metadataForEntity

• **metadataForEntity**: (`token`: *string*, `entity`: *string*) => *Promise*<[*CompiledEntityMetadata*](compiledentitymetadata.md)\>

Fetch metadata by entity identifier

**`param`** Access token required for authentication

**`param`** Identifier for business object type

**`returns`** Promise containing metadata entity

Defined in: [entity.ts:764](https://github.com/frankball/ballware-meta-interface/blob/157bdb2/src/entity.ts#L764)
