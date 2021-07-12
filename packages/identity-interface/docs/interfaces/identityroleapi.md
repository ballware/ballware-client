[@ballware/identity-interface](../README.md) / [Exports](../modules.md) / IdentityRoleApi

# Interface: IdentityRoleApi

Functions for accessing role information from identity provider

## Table of contents

### Properties

- [selectByIdFunc](identityroleapi.md#selectbyidfunc)
- [selectListFunc](identityroleapi.md#selectlistfunc)

## Properties

### selectByIdFunc

• **selectByIdFunc**: (`token`: *string*, `identifier`: *string*) => *Promise*<Record<string, unknown\>\>

Returns a single existing role by identifier from identity system

**`param`** access token required for authentication

**`returns`** Promise resoling single element with id and display text for requested identifier

#### Type declaration:

▸ (`token`: *string*, `identifier`: *string*): *Promise*<Record<string, unknown\>\>

#### Parameters:

Name | Type |
:------ | :------ |
`token` | *string* |
`identifier` | *string* |

**Returns:** *Promise*<Record<string, unknown\>\>

Defined in: [role.ts:26](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/identity-interface/src/role.ts#L26)

Defined in: [role.ts:26](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/identity-interface/src/role.ts#L26)

___

### selectListFunc

• **selectListFunc**: (`token`: *string*) => *Promise*<Record<string, unknown\>[]\>

Returning a list of available roles in identity system

**`param`** access token required for authentication

**`returns`** Promise resolving list of available roles with id and display text

#### Type declaration:

▸ (`token`: *string*): *Promise*<Record<string, unknown\>[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`token` | *string* |

**Returns:** *Promise*<Record<string, unknown\>[]\>

Defined in: [role.ts:18](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/identity-interface/src/role.ts#L18)

Defined in: [role.ts:18](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/identity-interface/src/role.ts#L18)
