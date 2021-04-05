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

Defined in: [cruditem.ts:38](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/cruditem.ts#L38)

___

### CreatorId

• `Optional` **CreatorId**: *string*

Identifier of creating user

Defined in: [cruditem.ts:33](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/cruditem.ts#L33)

___

### Id

• **Id**: *string*

Unique identifier of object

Defined in: [cruditem.ts:28](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/cruditem.ts#L28)

___

### LastChangeStamp

• `Optional` **LastChangeStamp**: Date

Timestamp of last update

Defined in: [cruditem.ts:48](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/cruditem.ts#L48)

___

### LastChangerId

• `Optional` **LastChangerId**: *string*

Identifier of last updating user

Defined in: [cruditem.ts:43](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/cruditem.ts#L43)
