[@ballware/meta-interface](../README.md) / [Exports](../modules.md) / MetaGenericEntityApi

# Interface: MetaGenericEntityApi

Interface for generic business object crud operations

## Hierarchy

* **MetaGenericEntityApi**

## Table of contents

### Properties

- [byId](metagenericentityapi.md#byid)
- [drop](metagenericentityapi.md#drop)
- [new](metagenericentityapi.md#new)
- [query](metagenericentityapi.md#query)
- [save](metagenericentityapi.md#save)
- [saveBatch](metagenericentityapi.md#savebatch)

## Properties

### byId

• **byId**: (`token`: *string*, `id`: *string*) => *Promise*<[*CrudItem*](cruditem.md)\>

Fetch single business object by id

**`param`** Access token required for authentication

**`param`** Id of business object

**`returns`** Promise containing instance of business object

Defined in: [genericentity.ts:35](https://github.com/frankball/ballware-meta-interface/blob/6b9dc3f/src/genericentity.ts#L35)

___

### drop

• **drop**: (`token`: *string*, `id`: *string*) => *Promise*<*void*\>

Drop existing instance of business object

**`param`** Access token required for authentication

**`param`** Identifier of business object instance to drop

**`returns`** Promise resolved when drop operation has finished

Defined in: [genericentity.ts:71](https://github.com/frankball/ballware-meta-interface/blob/6b9dc3f/src/genericentity.ts#L71)

___

### new

• **new**: (`token`: *string*, `params?`: *Record*<*string*, *unknown*\>) => *Promise*<[*CrudItem*](cruditem.md)\>

Fetch prepared new instance of business object

**`param`** Access token required for authentication

**`param`** Parameter values for initialization of business object

**`returns`** Promise containing new generated instance of business object

Defined in: [genericentity.ts:44](https://github.com/frankball/ballware-meta-interface/blob/6b9dc3f/src/genericentity.ts#L44)

___

### query

• **query**: (`token`: *string*, `query`: *string*, `params?`: *Record*<*string*, *unknown*\>) => *Promise*<[*CrudItem*](cruditem.md)[]\>

Query list of business objects by search params

**`param`** Access token required for authentication

**`param`** Identifier of list query

**`param`** Parameter values for query

**`returns`** Promise containing list of resulting business objects

Defined in: [genericentity.ts:22](https://github.com/frankball/ballware-meta-interface/blob/6b9dc3f/src/genericentity.ts#L22)

___

### save

• **save**: (`token`: *string*, `item`: [*CrudItem*](cruditem.md)) => *Promise*<*void*\>

Save modified instance of business object

**`param`** Access token required for authentication

**`param`** Modified instance of business object

**`returns`** Promise resolved when save operation has finished

Defined in: [genericentity.ts:53](https://github.com/frankball/ballware-meta-interface/blob/6b9dc3f/src/genericentity.ts#L53)

___

### saveBatch

• **saveBatch**: (`token`: *string*, `items`: [*CrudItem*](cruditem.md)[]) => *Promise*<*void*\>

Save multiple modified instances of business object

**`param`** Access token required for authentication

**`param`** Modified instances of business object

**`returns`** Promise resolved when save operation has finished

Defined in: [genericentity.ts:62](https://github.com/frankball/ballware-meta-interface/blob/6b9dc3f/src/genericentity.ts#L62)
