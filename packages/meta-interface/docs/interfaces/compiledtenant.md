[@ballware/meta-interface](../README.md) / [Exports](../modules.md) / CompiledTenant

# Interface: CompiledTenant

Metadata for tenant

## Table of contents

### Properties

- [hasRight](compiledtenant.md#hasright)
- [id](compiledtenant.md#id)
- [name](compiledtenant.md#name)
- [navigation](compiledtenant.md#navigation)

## Properties

### hasRight

• **hasRight**: (`userinfo`: *Record*<string, unknown\>, `right`: *string*) => *boolean*

Custom script for access rights check of tenant

**`param`** Assigned user rights

**`param`** Requested right

**`returns`** true if access allowed, false if access denied

#### Type declaration:

▸ (`userinfo`: *Record*<string, unknown\>, `right`: *string*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`userinfo` | *Record*<string, unknown\> |
`right` | *string* |

**Returns:** *boolean*

Defined in: [tenant.ts:88](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/tenant.ts#L88)

Defined in: [tenant.ts:88](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/tenant.ts#L88)

___

### id

• **id**: *string*

Unique identifier of tenant

Defined in: [tenant.ts:70](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/tenant.ts#L70)

___

### name

• **name**: *string*

Display name of tenant

Defined in: [tenant.ts:75](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/tenant.ts#L75)

___

### navigation

• `Optional` **navigation**: [*NavigationLayout*](navigationlayout.md)

Navigation metadata for tenant

Defined in: [tenant.ts:80](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/tenant.ts#L80)
