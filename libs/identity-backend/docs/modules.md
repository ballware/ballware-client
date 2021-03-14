[@ballware/identity-backend](README.md) / Exports

# @ballware/identity-backend

## Table of contents

### Functions

- [createIdentityBackendRoleApi](modules.md#createidentitybackendroleapi)
- [createIdentityBackendUserApi](modules.md#createidentitybackenduserapi)
- [createResourceOwnerAuthApi](modules.md#createresourceownerauthapi)

## Functions

### createIdentityBackendRoleApi

▸ **createIdentityBackendRoleApi**(`serviceBaseUrl`: *string*): IdentityRoleApi

Create API adapter for ballware.identity.server role list access

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`serviceBaseUrl` | *string* | Base url for ballware.identity.server to use    |

**Returns:** IdentityRoleApi

Defined in: [lib/role.ts:34](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/identity-backend/src/lib/role.ts#L34)

___

### createIdentityBackendUserApi

▸ **createIdentityBackendUserApi**(`serviceBaseUrl`: *string*): IdentityUserApi

Create API adapter for ballware.identity.server user list access

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`serviceBaseUrl` | *string* | Base url for ballware.identity.server to use    |

**Returns:** IdentityUserApi

Defined in: [lib/user.ts:34](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/identity-backend/src/lib/user.ts#L34)

___

### createResourceOwnerAuthApi

▸ **createResourceOwnerAuthApi**(`serviceBaseUrl`: *string*, `scopes`: *string*): ResourceOwnerAuthApi

Create API adapter for ballware.identity.server with resource owner auth flow

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`serviceBaseUrl` | *string* | Base URL of identity provider to use   |
`scopes` | *string* | Collection of requested scopes    |

**Returns:** ResourceOwnerAuthApi

Defined in: [lib/resourceownerauth.ts:178](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/identity-backend/src/lib/resourceownerauth.ts#L178)
