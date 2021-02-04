[@ballware/meta-interface](../README.md) / [Exports](../modules.md) / MetaTenantApi

# Interface: MetaTenantApi

Interface for tenant data operations

## Hierarchy

* **MetaTenantApi**

## Table of contents

### Properties

- [metadataForTenant](metatenantapi.md#metadatafortenant)

## Properties

### metadataForTenant

• **metadataForTenant**: (`token`: *string*, `tenant`: *string*) => *Promise*<[*CompiledTenant*](compiledtenant.md)\>

Fetch metadatan for tenant

**`param`** Access token required for authentication

**`param`** Identifier of tenant

**`returns`** Promise containing compiled tenant metadata

Defined in: [tenant.ts:103](https://github.com/frankball/ballware-meta-interface/blob/6b9dc3f/src/tenant.ts#L103)
