[@ballware/identity-interface](README.md) / Exports

# @ballware/identity-interface

## Table of contents

### Interfaces

- [IdentityRoleApi](interfaces/identityroleapi.md)
- [IdentityUserApi](interfaces/identityuserapi.md)
- [MappedSessionWithUserRights](interfaces/mappedsessionwithuserrights.md)
- [ResourceOwnerAuthApi](interfaces/resourceownerauthapi.md)
- [Session](interfaces/session.md)
- [SessionWithUserInfo](interfaces/sessionwithuserinfo.md)

### Type aliases

- [UserInfoMappingFunc](modules.md#userinfomappingfunc)

## Type aliases

### UserInfoMappingFunc

Ƭ **UserInfoMappingFunc**: <T\>(`sessionWithUserInfo`: [*SessionWithUserInfo*](interfaces/sessionwithuserinfo.md), `userinfo`: *Record*<string, unknown\>) => T

Application specific mapping function for fetching additional information from authentication response (claims, rights...)

**`param`** Response from login

**`param`** Response from userinfo endpoint with additional content

**`returns`** - Extended session object with additional information

#### Type declaration:

▸ <T\>(`sessionWithUserInfo`: [*SessionWithUserInfo*](interfaces/sessionwithuserinfo.md), `userinfo`: *Record*<string, unknown\>): T

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | [*MappedSessionWithUserRights*](interfaces/mappedsessionwithuserrights.md) |

#### Parameters:

Name | Type |
:------ | :------ |
`sessionWithUserInfo` | [*SessionWithUserInfo*](interfaces/sessionwithuserinfo.md) |
`userinfo` | *Record*<string, unknown\> |

**Returns:** T

Defined in: [lib/auth.ts:55](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/identity-interface/src/lib/auth.ts#L55)
