[@ballware/meta-interface](../README.md) / [Exports](../modules.md) / MetaGenericEntityApi

# Interface: MetaGenericEntityApi

Interface for generic business object crud operations

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

#### Type declaration:

▸ (`token`: *string*, `id`: *string*): *Promise*<[*CrudItem*](cruditem.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`token` | *string* |
`id` | *string* |

**Returns:** *Promise*<[*CrudItem*](cruditem.md)\>

Defined in: [lib/genericentity.ts:36](https://github.com/ballware/ballware-client/blob/69c8328/libs/meta-interface/src/lib/genericentity.ts#L36)

Defined in: [lib/genericentity.ts:36](https://github.com/ballware/ballware-client/blob/69c8328/libs/meta-interface/src/lib/genericentity.ts#L36)

___

### drop

• **drop**: (`token`: *string*, `id`: *string*) => *Promise*<void\>

Drop existing instance of business object

**`param`** Access token required for authentication

**`param`** Identifier of business object instance to drop

**`returns`** Promise resolved when drop operation has finished

#### Type declaration:

▸ (`token`: *string*, `id`: *string*): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`token` | *string* |
`id` | *string* |

**Returns:** *Promise*<void\>

Defined in: [lib/genericentity.ts:72](https://github.com/ballware/ballware-client/blob/69c8328/libs/meta-interface/src/lib/genericentity.ts#L72)

Defined in: [lib/genericentity.ts:72](https://github.com/ballware/ballware-client/blob/69c8328/libs/meta-interface/src/lib/genericentity.ts#L72)

___

### new

• **new**: (`token`: *string*, `params?`: [*QueryParams*](../modules.md#queryparams)) => *Promise*<[*CrudItem*](cruditem.md)\>

Fetch prepared new instance of business object

**`param`** Access token required for authentication

**`param`** Parameter values for initialization of business object

**`returns`** Promise containing new generated instance of business object

#### Type declaration:

▸ (`token`: *string*, `params?`: [*QueryParams*](../modules.md#queryparams)): *Promise*<[*CrudItem*](cruditem.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`token` | *string* |
`params?` | [*QueryParams*](../modules.md#queryparams) |

**Returns:** *Promise*<[*CrudItem*](cruditem.md)\>

Defined in: [lib/genericentity.ts:45](https://github.com/ballware/ballware-client/blob/69c8328/libs/meta-interface/src/lib/genericentity.ts#L45)

Defined in: [lib/genericentity.ts:45](https://github.com/ballware/ballware-client/blob/69c8328/libs/meta-interface/src/lib/genericentity.ts#L45)

___

### query

• **query**: (`token`: *string*, `query`: *string*, `params?`: [*QueryParams*](../modules.md#queryparams)) => *Promise*<[*CrudItem*](cruditem.md)[]\>

Query list of business objects by search params

**`param`** Access token required for authentication

**`param`** Identifier of list query

**`param`** Parameter values for query

**`returns`** Promise containing list of resulting business objects

#### Type declaration:

▸ (`token`: *string*, `query`: *string*, `params?`: [*QueryParams*](../modules.md#queryparams)): *Promise*<[*CrudItem*](cruditem.md)[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`token` | *string* |
`query` | *string* |
`params?` | [*QueryParams*](../modules.md#queryparams) |

**Returns:** *Promise*<[*CrudItem*](cruditem.md)[]\>

Defined in: [lib/genericentity.ts:23](https://github.com/ballware/ballware-client/blob/69c8328/libs/meta-interface/src/lib/genericentity.ts#L23)

Defined in: [lib/genericentity.ts:23](https://github.com/ballware/ballware-client/blob/69c8328/libs/meta-interface/src/lib/genericentity.ts#L23)

___

### save

• **save**: (`token`: *string*, `item`: [*CrudItem*](cruditem.md)) => *Promise*<void\>

Save modified instance of business object

**`param`** Access token required for authentication

**`param`** Modified instance of business object

**`returns`** Promise resolved when save operation has finished

#### Type declaration:

▸ (`token`: *string*, `item`: [*CrudItem*](cruditem.md)): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`token` | *string* |
`item` | [*CrudItem*](cruditem.md) |

**Returns:** *Promise*<void\>

Defined in: [lib/genericentity.ts:54](https://github.com/ballware/ballware-client/blob/69c8328/libs/meta-interface/src/lib/genericentity.ts#L54)

Defined in: [lib/genericentity.ts:54](https://github.com/ballware/ballware-client/blob/69c8328/libs/meta-interface/src/lib/genericentity.ts#L54)

___

### saveBatch

• **saveBatch**: (`token`: *string*, `items`: [*CrudItem*](cruditem.md)[]) => *Promise*<void\>

Save multiple modified instances of business object

**`param`** Access token required for authentication

**`param`** Modified instances of business object

**`returns`** Promise resolved when save operation has finished

#### Type declaration:

▸ (`token`: *string*, `items`: [*CrudItem*](cruditem.md)[]): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`token` | *string* |
`items` | [*CrudItem*](cruditem.md)[] |

**Returns:** *Promise*<void\>

Defined in: [lib/genericentity.ts:63](https://github.com/ballware/ballware-client/blob/69c8328/libs/meta-interface/src/lib/genericentity.ts#L63)

Defined in: [lib/genericentity.ts:63](https://github.com/ballware/ballware-client/blob/69c8328/libs/meta-interface/src/lib/genericentity.ts#L63)
