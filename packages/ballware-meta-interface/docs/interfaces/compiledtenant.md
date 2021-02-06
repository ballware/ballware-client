[@ballware/meta-interface](../README.md) / [Exports](../modules.md) / CompiledTenant

# Interface: CompiledTenant

Metadata for tenant

## Hierarchy

* **CompiledTenant**

## Table of contents

### Properties

- [id](compiledtenant.md#id)
- [name](compiledtenant.md#name)
- [navigation](compiledtenant.md#navigation)
- [pageVisible](compiledtenant.md#pagevisible)

## Properties

### id

• **id**: *string*

Unique identifier of tenant

Defined in: [tenant.ts:72](https://github.com/frankball/ballware-meta-interface/blob/157bdb2/src/tenant.ts#L72)

___

### name

• **name**: *string*

Display name of tenant

Defined in: [tenant.ts:77](https://github.com/frankball/ballware-meta-interface/blob/157bdb2/src/tenant.ts#L77)

___

### navigation

• `Optional` **navigation**: *undefined* \| [*NavigationLayout*](navigationlayout.md)

Navigation metadata for tenant

Defined in: [tenant.ts:82](https://github.com/frankball/ballware-meta-interface/blob/157bdb2/src/tenant.ts#L82)

___

### pageVisible

• **pageVisible**: (`rights`: [*Rights*](rights.md), `page`: *string*) => *boolean*

Custom script for access rights check of pages

**`param`** Assigned user rights

**`param`** Page identifier

**`returns`** true if access allowed, false if access denied

Defined in: [tenant.ts:90](https://github.com/frankball/ballware-meta-interface/blob/157bdb2/src/tenant.ts#L90)
