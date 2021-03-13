[@ballware/meta-interface](../README.md) / [Exports](../modules.md) / MetaTenantApi

# Interface: MetaTenantApi

Interface for tenant data operations

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

#### Type declaration:

▸ (`token`: *string*, `tenant`: *string*): *Promise*<[*CompiledTenant*](compiledtenant.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`token` | *string* |
`tenant` | *string* |

**Returns:** *Promise*<[*CompiledTenant*](compiledtenant.md)\>

Defined in: [lib/tenant.ts:103](https://github.com/ballware/ballware-client/blob/69c8328/libs/meta-interface/src/lib/tenant.ts#L103)

Defined in: [lib/tenant.ts:103](https://github.com/ballware/ballware-client/blob/69c8328/libs/meta-interface/src/lib/tenant.ts#L103)
