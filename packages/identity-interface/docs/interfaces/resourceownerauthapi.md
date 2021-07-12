[@ballware/identity-interface](../README.md) / [Exports](../modules.md) / ResourceOwnerAuthApi

# Interface: ResourceOwnerAuthApi

API for resource owner based authentication flow.

**`remarks`** 
Attention: This is not save for usage in browser application

## Table of contents

### Properties

- [changePassword](resourceownerauthapi.md#changepassword)
- [forgotPassword](resourceownerauthapi.md#forgotpassword)
- [login](resourceownerauthapi.md#login)
- [logout](resourceownerauthapi.md#logout)
- [refreshToken](resourceownerauthapi.md#refreshtoken)
- [register](resourceownerauthapi.md#register)
- [resetPassword](resourceownerauthapi.md#resetpassword)

## Properties

### changePassword

• **changePassword**: (`accessToken`: *string*, `oldPassword`: *string*, `newPassword`: *string*) => *Promise*<void\>

Change password for registered user

**`param`** Valid access token for authenticated user

**`param`** Previous password of user

**`param`** New password provided by user

**`returns`** Promise resolved when password change was finished

#### Type declaration:

▸ (`accessToken`: *string*, `oldPassword`: *string*, `newPassword`: *string*): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`accessToken` | *string* |
`oldPassword` | *string* |
`newPassword` | *string* |

**Returns:** *Promise*<void\>

Defined in: [auth.ts:117](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/identity-interface/src/auth.ts#L117)

Defined in: [auth.ts:117](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/identity-interface/src/auth.ts#L117)

___

### forgotPassword

• **forgotPassword**: (`email`: *string*) => *Promise*<void\>

Request password reset token for lost password

**`param`** Unique mail adress for requesting user

**`returns`** Promise resolved when request was transmitted

#### Type declaration:

▸ (`email`: *string*): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`email` | *string* |

**Returns:** *Promise*<void\>

Defined in: [auth.ts:92](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/identity-interface/src/auth.ts#L92)

Defined in: [auth.ts:92](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/identity-interface/src/auth.ts#L92)

___

### login

• **login**: <T\>(`email`: *string*, `password`: *string*, `client`: *string*, `secret`: *string*) => *Promise*<T\>

Authenticate user with mail and password.

**`param`** Mail adress or subject from authenticating user

**`param`** Password for authentication

**`param`** Client identifier for identifying application in OAuth service

**`param`** Secrect for client identifier

**`returns`** Promise resolving user session instance

#### Type declaration:

▸ <T\>(`email`: *string*, `password`: *string*, `client`: *string*, `secret`: *string*): *Promise*<T\>

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | [*SessionWithUserInfo*](sessionwithuserinfo.md)<T\> |

#### Parameters:

Name | Type |
:------ | :------ |
`email` | *string* |
`password` | *string* |
`client` | *string* |
`secret` | *string* |

**Returns:** *Promise*<T\>

Defined in: [auth.ts:51](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/identity-interface/src/auth.ts#L51)

Defined in: [auth.ts:51](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/identity-interface/src/auth.ts#L51)

___

### logout

• **logout**: (`accessToken`: *string*, `client`: *string*, `secret`: *string*) => *Promise*<void\>

Logout authenticated user, invalidate access token

**`param`** Valid token from authenticated user

**`param`** Client identifier for identifying application in OAuth service

**`param`** Secrect for client identifier

**`returns`** Promise resolved when logout has finished

#### Type declaration:

▸ (`accessToken`: *string*, `client`: *string*, `secret`: *string*): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`accessToken` | *string* |
`client` | *string* |
`secret` | *string* |

**Returns:** *Promise*<void\>

Defined in: [auth.ts:66](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/identity-interface/src/auth.ts#L66)

Defined in: [auth.ts:66](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/identity-interface/src/auth.ts#L66)

___

### refreshToken

• **refreshToken**: (`refreshToken`: *string*, `client`: *string*, `secret`: *string*) => *Promise*<[*Session*](session.md)\>

Refresh access token for extending authenticated session

**`param`** Valid refresh token provided by login

**`param`** Client identifier for identifying application in OAuth service

**`param`** Secrect for client identifier

#### Type declaration:

▸ (`refreshToken`: *string*, `client`: *string*, `secret`: *string*): *Promise*<[*Session*](session.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`refreshToken` | *string* |
`client` | *string* |
`secret` | *string* |

**Returns:** *Promise*<[*Session*](session.md)\>

Defined in: [auth.ts:130](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/identity-interface/src/auth.ts#L130)

Defined in: [auth.ts:130](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/identity-interface/src/auth.ts#L130)

___

### register

• **register**: (`email`: *string*, `password`: *string*, `displayname`: *string*) => *Promise*<void\>

Registering new user

**`param`** Unique mail adress for new user

**`param`** Password for authentication user

**`param`** Screen friendly representation of user

**`returns`** Promise resolved when registration has finished

#### Type declaration:

▸ (`email`: *string*, `password`: *string*, `displayname`: *string*): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`email` | *string* |
`password` | *string* |
`displayname` | *string* |

**Returns:** *Promise*<void\>

Defined in: [auth.ts:80](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/identity-interface/src/auth.ts#L80)

Defined in: [auth.ts:80](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/identity-interface/src/auth.ts#L80)

___

### resetPassword

• **resetPassword**: (`email`: *string*, `code`: *string*, `newPassword`: *string*) => *Promise*<void\>

Reset password with password reset token

**`param`** Unique mail adress for requesting user

**`param`** Token delivered by identity provider for password reset

**`param`** New password provided by user

**`returns`** Promise resolved when request was transmitted

#### Type declaration:

▸ (`email`: *string*, `code`: *string*, `newPassword`: *string*): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`email` | *string* |
`code` | *string* |
`newPassword` | *string* |

**Returns:** *Promise*<void\>

Defined in: [auth.ts:103](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/identity-interface/src/auth.ts#L103)

Defined in: [auth.ts:103](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/identity-interface/src/auth.ts#L103)
