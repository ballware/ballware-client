[@ballware/identity-interface](../README.md) / [Exports](../modules.md) / IdentityRoleApi

# Interface: IdentityRoleApi

Functions for accessing role information from identity provider

## Hierarchy

* **IdentityRoleApi**

## Table of contents

### Properties

- [selectByIdFunc](identityroleapi.md#selectbyidfunc)
- [selectListFunc](identityroleapi.md#selectlistfunc)

## Properties

### selectByIdFunc

• **selectByIdFunc**: (`token`: *string*, `identifier`: *string*) => *Promise*<*Record*<*string*, *unknown*\>\>

Returns a single existing role by identifier from identity system

**`param`** access token required for authentication

**`returns`** Promise resoling single element with id and display text for requested identifier

Defined in: [role.ts:26](https://github.com/frankball/ballware-identity-interface/blob/c681936/src/role.ts#L26)

___

### selectListFunc

• **selectListFunc**: (`token`: *string*) => *Promise*<*Record*<*string*, *unknown*\>[]\>

Returning a list of available roles in identity system

**`param`** access token required for authentication

**`returns`** Promise resolving list of available roles with id and display text

Defined in: [role.ts:18](https://github.com/frankball/ballware-identity-interface/blob/c681936/src/role.ts#L18)
