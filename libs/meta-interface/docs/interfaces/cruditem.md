[@ballware/meta-interface](../README.md) / [Exports](../modules.md) / CrudItem

# Interface: CrudItem

Interface for generic business object types

## Hierarchy

* *Record*<string, [*ValueType*](../modules.md#valuetype)\>

  ↳ **CrudItem**

## Table of contents

### Properties

- [CreateStamp](cruditem.md#createstamp)
- [CreatorId](cruditem.md#creatorid)
- [Id](cruditem.md#id)
- [LastChangeStamp](cruditem.md#lastchangestamp)
- [LastChangerId](cruditem.md#lastchangerid)

## Properties

### CreateStamp

• `Optional` **CreateStamp**: Date

Timestamp of creation time

Defined in: [lib/cruditem.ts:38](https://github.com/ballware/ballware-client/blob/69c8328/libs/meta-interface/src/lib/cruditem.ts#L38)

___

### CreatorId

• `Optional` **CreatorId**: *string*

Identifier of creating user

Defined in: [lib/cruditem.ts:33](https://github.com/ballware/ballware-client/blob/69c8328/libs/meta-interface/src/lib/cruditem.ts#L33)

___

### Id

• **Id**: *string*

Unique identifier of object

Defined in: [lib/cruditem.ts:28](https://github.com/ballware/ballware-client/blob/69c8328/libs/meta-interface/src/lib/cruditem.ts#L28)

___

### LastChangeStamp

• `Optional` **LastChangeStamp**: Date

Timestamp of last update

Defined in: [lib/cruditem.ts:48](https://github.com/ballware/ballware-client/blob/69c8328/libs/meta-interface/src/lib/cruditem.ts#L48)

___

### LastChangerId

• `Optional` **LastChangerId**: *string*

Identifier of last updating user

Defined in: [lib/cruditem.ts:43](https://github.com/ballware/ballware-client/blob/69c8328/libs/meta-interface/src/lib/cruditem.ts#L43)
