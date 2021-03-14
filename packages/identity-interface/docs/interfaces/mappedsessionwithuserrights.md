[@ballware/identity-interface](../README.md) / [Exports](../modules.md) / MappedSessionWithUserRights

# Interface: MappedSessionWithUserRights

Session extended with application specific user rights

## Hierarchy

* [*SessionWithUserInfo*](sessionwithuserinfo.md)

  ↳ **MappedSessionWithUserRights**

## Table of contents

### Properties

- [access\_token](mappedsessionwithuserrights.md#access_token)
- [email](mappedsessionwithuserrights.md#email)
- [expires\_in](mappedsessionwithuserrights.md#expires_in)
- [identifier](mappedsessionwithuserrights.md#identifier)
- [issued](mappedsessionwithuserrights.md#issued)
- [refresh\_token](mappedsessionwithuserrights.md#refresh_token)
- [rights](mappedsessionwithuserrights.md#rights)

## Properties

### access\_token

• **access\_token**: *string*

access token to make api request on behalf of authenticated user

Inherited from: [SessionWithUserInfo](sessionwithuserinfo.md).[access_token](sessionwithuserinfo.md#access_token)

Defined in: [auth.ts:15](https://github.com/ballware/ballware-client/blob/c28ad0b/packages/identity-interface/src/auth.ts#L15)

___

### email

• **email**: *string*

Mail adress of authenticated user, can be identical with identifer if authenticated via mail adress

Inherited from: [SessionWithUserInfo](sessionwithuserinfo.md).[email](sessionwithuserinfo.md#email)

Defined in: [auth.ts:35](https://github.com/ballware/ballware-client/blob/c28ad0b/packages/identity-interface/src/auth.ts#L35)

___

### expires\_in

• **expires\_in**: *number*

number of seconds the access token will expire in

Inherited from: [SessionWithUserInfo](sessionwithuserinfo.md).[expires_in](sessionwithuserinfo.md#expires_in)

Defined in: [auth.ts:21](https://github.com/ballware/ballware-client/blob/c28ad0b/packages/identity-interface/src/auth.ts#L21)

___

### identifier

• **identifier**: *string*

Subject of authenticated user (mail, unique user name...)

Inherited from: [SessionWithUserInfo](sessionwithuserinfo.md).[identifier](sessionwithuserinfo.md#identifier)

Defined in: [auth.ts:32](https://github.com/ballware/ballware-client/blob/c28ad0b/packages/identity-interface/src/auth.ts#L32)

___

### issued

• **issued**: Date

Timestamp the access token was issued

Inherited from: [SessionWithUserInfo](sessionwithuserinfo.md).[issued](sessionwithuserinfo.md#issued)

Defined in: [auth.ts:24](https://github.com/ballware/ballware-client/blob/c28ad0b/packages/identity-interface/src/auth.ts#L24)

___

### refresh\_token

• **refresh\_token**: *string*

refresh token to grant a new access token for extended authentication session

Inherited from: [SessionWithUserInfo](sessionwithuserinfo.md).[refresh_token](sessionwithuserinfo.md#refresh_token)

Defined in: [auth.ts:18](https://github.com/ballware/ballware-client/blob/c28ad0b/packages/identity-interface/src/auth.ts#L18)

___

### rights

• **rights**: Rights

Collection of user rights

Defined in: [auth.ts:45](https://github.com/ballware/ballware-client/blob/c28ad0b/packages/identity-interface/src/auth.ts#L45)
