[@ballware/identity-interface](../README.md) / [Exports](../modules.md) / IdentityUserApi

# Interface: IdentityUserApi

Functions for accessing user information from identity provider

## Hierarchy

* **IdentityUserApi**

## Table of contents

### Properties

- [selectByIdFunc](identityuserapi.md#selectbyidfunc)
- [selectListFunc](identityuserapi.md#selectlistfunc)

## Properties

### selectByIdFunc

• **selectByIdFunc**: (`token`: *string*, `identifier`: *string*) => *Promise*<*Record*<*string*, *unknown*\>\>

Returns a single existing user by identifier from identity system

**`param`** access token required for authentication

**`returns`** Promise resoling single element with id and display text for requested identifier

Defined in: [user.ts:26](https://github.com/frankball/ballware-identity-interface/blob/6e35751/src/user.ts#L26)

___

### selectListFunc

• **selectListFunc**: (`token`: *string*) => *Promise*<*Record*<*string*, *unknown*\>[]\>

Returning a list of available users in identity system

**`param`** access token required for authentication

**`returns`** Promise resolving list of available user with id and display text

Defined in: [user.ts:18](https://github.com/frankball/ballware-identity-interface/blob/6e35751/src/user.ts#L18)
