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

Defined in: [lib/auth.ts:15](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/identity-interface/src/lib/auth.ts#L15)

___

### expires\_in

• **expires\_in**: *number*

number of seconds the access token will expire in

Defined in: [lib/auth.ts:21](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/identity-interface/src/lib/auth.ts#L21)

___

### issued

• **issued**: Date

Timestamp the access token was issued

Defined in: [lib/auth.ts:24](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/identity-interface/src/lib/auth.ts#L24)

___

### refresh\_token

• **refresh\_token**: *string*

refresh token to grant a new access token for extended authentication session

Defined in: [lib/auth.ts:18](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/identity-interface/src/lib/auth.ts#L18)
