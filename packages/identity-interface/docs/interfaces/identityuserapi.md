[@ballware/identity-interface](../README.md) / [Exports](../modules.md) / IdentityUserApi

# Interface: IdentityUserApi

Functions for accessing user information from identity provider

## Table of contents

### Properties

- [selectByIdFunc](identityuserapi.md#selectbyidfunc)
- [selectListFunc](identityuserapi.md#selectlistfunc)

## Properties

### selectByIdFunc

• **selectByIdFunc**: (`token`: *string*, `identifier`: *string*) => *Promise*<Record<string, unknown\>\>

Returns a single existing user by identifier from identity system

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

Defined in: [user.ts:27](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/identity-interface/src/user.ts#L27)

Defined in: [user.ts:27](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/identity-interface/src/user.ts#L27)

___

### selectListFunc

• **selectListFunc**: (`token`: *string*) => *Promise*<Record<string, unknown\>[]\>

Returning a list of available users in identity system

**`param`** access token required for authentication

**`returns`** Promise resolving list of available user with id and display text

#### Type declaration:

▸ (`token`: *string*): *Promise*<Record<string, unknown\>[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`token` | *string* |

**Returns:** *Promise*<Record<string, unknown\>[]\>

Defined in: [user.ts:18](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/identity-interface/src/user.ts#L18)

Defined in: [user.ts:18](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/identity-interface/src/user.ts#L18)
