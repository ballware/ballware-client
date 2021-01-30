[@ballware/identity-interface](../README.md) / [Exports](../modules.md) / Session

# Interface: Session

Basic authentication response containing user token

## Hierarchy

* **Session**

  ↳ [*SessionWithUserInfo*](sessionwithuserinfo.md)

## Table of contents

### Properties

- [access\_token](session.md#access_token)
- [expires\_in](session.md#expires_in)
- [issued](session.md#issued)
- [refresh\_token](session.md#refresh_token)

## Properties

### access\_token

• **access\_token**: *string*

access token to make api request on behalf of authenticated user

Defined in: [auth.ts:13](https://github.com/frankball/ballware-identity-interface/blob/6e35751/src/auth.ts#L13)

___

### expires\_in

• **expires\_in**: *number*

number of seconds the access token will expire in

Defined in: [auth.ts:19](https://github.com/frankball/ballware-identity-interface/blob/6e35751/src/auth.ts#L19)

___

### issued

• **issued**: Date

Timestamp the access token was issued

Defined in: [auth.ts:22](https://github.com/frankball/ballware-identity-interface/blob/6e35751/src/auth.ts#L22)

___

### refresh\_token

• **refresh\_token**: *string*

refresh token to grant a new access token for extended authentication session

Defined in: [auth.ts:16](https://github.com/frankball/ballware-identity-interface/blob/6e35751/src/auth.ts#L16)
