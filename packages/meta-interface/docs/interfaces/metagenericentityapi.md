[@ballware/meta-interface](../README.md) / [Exports](../modules.md) / MetaGenericEntityApi

# Interface: MetaGenericEntityApi

Interface for generic business object crud operations

## Table of contents

### Properties

- [byId](metagenericentityapi.md#byid)
- [count](metagenericentityapi.md#count)
- [drop](metagenericentityapi.md#drop)
- [exportItems](metagenericentityapi.md#exportitems)
- [importItems](metagenericentityapi.md#importitems)
- [new](metagenericentityapi.md#new)
- [query](metagenericentityapi.md#query)
- [save](metagenericentityapi.md#save)
- [saveBatch](metagenericentityapi.md#savebatch)

## Properties

### byId

• **byId**: (`token`: *string*, `functionIdentifier`: *string*, `id`: *string*) => *Promise*<[*CrudItem*](cruditem.md)\>

Fetch single business object by id

**`param`** Access token required for authentication

**`param`** Identifier of edit function

**`param`** Id of business object

**`returns`** Promise containing instance of business object

#### Type declaration:

▸ (`token`: *string*, `functionIdentifier`: *string*, `id`: *string*): *Promise*<[*CrudItem*](cruditem.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`token` | *string* |
`functionIdentifier` | *string* |
`id` | *string* |

**Returns:** *Promise*<[*CrudItem*](cruditem.md)\>

Defined in: [genericentity.ts:51](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/genericentity.ts#L51)

Defined in: [genericentity.ts:51](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/genericentity.ts#L51)

___

### count

• **count**: (`token`: *string*, `query`: *string*, `params?`: [*QueryParams*](../modules.md#queryparams)) => *Promise*<number\>

Query count of business objects by search params

**`param`** Access token required for authentication

**`param`** Identifier of list query

**`param`** Parameter values for query

**`returns`** Promise containing count of resulting business objects

#### Type declaration:

▸ (`token`: *string*, `query`: *string*, `params?`: [*QueryParams*](../modules.md#queryparams)): *Promise*<number\>

#### Parameters:

Name | Type |
:------ | :------ |
`token` | *string* |
`query` | *string* |
`params?` | [*QueryParams*](../modules.md#queryparams) |

**Returns:** *Promise*<number\>

Defined in: [genericentity.ts:37](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/genericentity.ts#L37)

Defined in: [genericentity.ts:37](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/genericentity.ts#L37)

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

Defined in: [genericentity.ts:90](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/genericentity.ts#L90)

Defined in: [genericentity.ts:90](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/genericentity.ts#L90)

___

### exportItems

• **exportItems**: (`token`: *string*, `functionIdentifier`: *string*, `ids`: *string*[]) => *Promise*<string\>

Export business objects to download file

**`param`** Access token required for authentication

**`param`** Identifier of import function

**`param`** Selected object ids to export

**`returns`** Promise resolved when download is ready, containing download url

#### Type declaration:

▸ (`token`: *string*, `functionIdentifier`: *string*, `ids`: *string*[]): *Promise*<string\>

#### Parameters:

Name | Type |
:------ | :------ |
`token` | *string* |
`functionIdentifier` | *string* |
`ids` | *string*[] |

**Returns:** *Promise*<string\>

Defined in: [genericentity.ts:110](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/genericentity.ts#L110)

Defined in: [genericentity.ts:110](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/genericentity.ts#L110)

___

### importItems

• **importItems**: (`token`: *string*, `functionIdentifier`: *string*, `file`: File) => *Promise*<void\>

Import business objects from uploaded file

**`param`** Access token required for authentication

**`param`** Identifier of import function

**`param`** Uploaded file containing objects to import

**`returns`** Promise resolved when drop operation has finished

#### Type declaration:

▸ (`token`: *string*, `functionIdentifier`: *string*, `file`: File): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`token` | *string* |
`functionIdentifier` | *string* |
`file` | File |

**Returns:** *Promise*<void\>

Defined in: [genericentity.ts:100](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/genericentity.ts#L100)

Defined in: [genericentity.ts:100](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/genericentity.ts#L100)

___

### new

• **new**: (`token`: *string*, `functionIdentifier`: *string*, `params?`: [*QueryParams*](../modules.md#queryparams)) => *Promise*<[*CrudItem*](cruditem.md)\>

Fetch prepared new instance of business object

**`param`** Access token required for authentication

**`param`** Identifier of edit function

**`param`** Parameter values for initialization of business object

**`returns`** Promise containing new generated instance of business object

#### Type declaration:

▸ (`token`: *string*, `functionIdentifier`: *string*, `params?`: [*QueryParams*](../modules.md#queryparams)): *Promise*<[*CrudItem*](cruditem.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`token` | *string* |
`functionIdentifier` | *string* |
`params?` | [*QueryParams*](../modules.md#queryparams) |

**Returns:** *Promise*<[*CrudItem*](cruditem.md)\>

Defined in: [genericentity.ts:61](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/genericentity.ts#L61)

Defined in: [genericentity.ts:61](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/genericentity.ts#L61)

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

Defined in: [genericentity.ts:23](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/genericentity.ts#L23)

Defined in: [genericentity.ts:23](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/genericentity.ts#L23)

___

### save

• **save**: (`token`: *string*, `functionIdentifier`: *string*, `item`: [*CrudItem*](cruditem.md)) => *Promise*<void\>

Save modified instance of business object

**`param`** Access token required for authentication

**`param`** Identifier of edit function

**`param`** Modified instance of business object

**`returns`** Promise resolved when save operation has finished

#### Type declaration:

▸ (`token`: *string*, `functionIdentifier`: *string*, `item`: [*CrudItem*](cruditem.md)): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`token` | *string* |
`functionIdentifier` | *string* |
`item` | [*CrudItem*](cruditem.md) |

**Returns:** *Promise*<void\>

Defined in: [genericentity.ts:71](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/genericentity.ts#L71)

Defined in: [genericentity.ts:71](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/genericentity.ts#L71)

___

### saveBatch

• **saveBatch**: (`token`: *string*, `functionIdentifier`: *string*, `items`: [*CrudItem*](cruditem.md)[]) => *Promise*<void\>

Save multiple modified instances of business object

**`param`** Access token required for authentication

**`param`** Identifier of edit function

**`param`** Modified instances of business object

**`returns`** Promise resolved when save operation has finished

#### Type declaration:

▸ (`token`: *string*, `functionIdentifier`: *string*, `items`: [*CrudItem*](cruditem.md)[]): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`token` | *string* |
`functionIdentifier` | *string* |
`items` | [*CrudItem*](cruditem.md)[] |

**Returns:** *Promise*<void\>

Defined in: [genericentity.ts:81](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/genericentity.ts#L81)

Defined in: [genericentity.ts:81](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/genericentity.ts#L81)
