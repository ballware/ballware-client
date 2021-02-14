[@ballware/identity-interface](../README.md) / [Exports](../modules.md) / SessionWithUserInfo

# Interface: SessionWithUserInfo

Extendes authentication response including additional user info

## Hierarchy

* [*Session*](session.md)

* *Record*<*string*, *unknown*\>

  ↳ **SessionWithUserInfo**

  ↳↳ [*MappedSessionWithUserRights*](mappedsessionwithuserrights.md)

## Table of contents

### Properties

- [access\_token](sessionwithuserinfo.md#access_token)
- [email](sessionwithuserinfo.md#email)
- [expires\_in](sessionwithuserinfo.md#expires_in)
- [identifier](sessionwithuserinfo.md#identifier)
- [issued](sessionwithuserinfo.md#issued)
- [refresh\_token](sessionwithuserinfo.md#refresh_token)

## Properties

### access\_token

• **access\_token**: *string*

access token to make api request on behalf of authenticated user

Inherited from: [Session](session.md).[access_token](session.md#access_token)

Defined in: [auth.ts:15](https://github.com/frankball/ballware-identity-interface/blob/f3cbf03/src/auth.ts#L15)

___

### email

• **email**: *string*

Mail adress of authenticated user, can be identical with identifer if authenticated via mail adress

Defined in: [auth.ts:35](https://github.com/frankball/ballware-identity-interface/blob/f3cbf03/src/auth.ts#L35)

___

### expires\_in

• **expires\_in**: *number*

number of seconds the access token will expire in

Inherited from: [Session](session.md).[expires_in](session.md#expires_in)

Defined in: [auth.ts:21](https://github.com/frankball/ballware-identity-interface/blob/f3cbf03/src/auth.ts#L21)

___

### identifier

• **identifier**: *string*

Subject of authenticated user (mail, unique user name...)

Defined in: [auth.ts:32](https://github.com/frankball/ballware-identity-interface/blob/f3cbf03/src/auth.ts#L32)

___

### issued

• **issued**: Date

Timestamp the access token was issued

Inherited from: [Session](session.md).[issued](session.md#issued)

Defined in: [auth.ts:24](https://github.com/frankball/ballware-identity-interface/blob/f3cbf03/src/auth.ts#L24)

___

### refresh\_token

• **refresh\_token**: *string*

refresh token to grant a new access token for extended authentication session

Inherited from: [Session](session.md).[refresh_token](session.md#refresh_token)

Defined in: [auth.ts:18](https://github.com/frankball/ballware-identity-interface/blob/f3cbf03/src/auth.ts#L18)
