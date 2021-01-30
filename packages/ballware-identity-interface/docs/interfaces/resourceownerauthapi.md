[@ballware/identity-interface](../README.md) / [Exports](../modules.md) / ResourceOwnerAuthApi

# Interface: ResourceOwnerAuthApi

API for resource owner based authentication flow.

**`remarks`** 
Attention: This is not save for usage in browser application

## Hierarchy

* **ResourceOwnerAuthApi**

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

• **changePassword**: (`accessToken`: *string*, `oldPassword`: *string*, `newPassword`: *string*) => *Promise*<*void*\>

Change password for registered user

**`param`** Valid access token for authenticated user

**`param`** Previous password of user

**`param`** New password provided by user

**`returns`** Promise resolved when password change was finished

Defined in: [auth.ts:116](https://github.com/frankball/ballware-identity-interface/blob/c681936/src/auth.ts#L116)

___

### forgotPassword

• **forgotPassword**: (`email`: *string*) => *Promise*<*void*\>

Request password reset token for lost password

**`param`** Unique mail adress for requesting user

**`returns`** Promise resolved when request was transmitted

Defined in: [auth.ts:96](https://github.com/frankball/ballware-identity-interface/blob/c681936/src/auth.ts#L96)

___

### login

• **login**: <T\>(`email`: *string*, `password`: *string*, `client`: *string*, `secret`: *string*, `userinfoMapper`: UserInfoMappingFunc) => *Promise*<T\>

Authenticate user with mail and password.

**`param`** Mail adress or subject from authenticating user

**`param`** Password for authentication

**`param`** Client identifier for identifying application in OAuth service

**`param`** Secrect for client identifier

**`param`** Application specific mapping function for fetching additional information from authentication response

**`returns`** Promise resolving user session instance

Defined in: [auth.ts:62](https://github.com/frankball/ballware-identity-interface/blob/c681936/src/auth.ts#L62)

___

### logout

• **logout**: (`accessToken`: *string*, `client`: *string*, `secret`: *string*) => *Promise*<*void*\>

Logout authenticated user, invalidate access token

**`param`** Valid token from authenticated user

**`param`** Client identifier for identifying application in OAuth service

**`param`** Secrect for client identifier

**`returns`** Promise resolved when logout has finished

Defined in: [auth.ts:78](https://github.com/frankball/ballware-identity-interface/blob/c681936/src/auth.ts#L78)

___

### refreshToken

• **refreshToken**: (`refreshToken`: *string*, `client`: *string*, `secret`: *string*) => *Promise*<[*Session*](session.md)\>

Refresh access token for extending authenticated session

**`param`** Valid refresh token provided by login

**`param`** Client identifier for identifying application in OAuth service

**`param`** Secrect for client identifier

Defined in: [auth.ts:125](https://github.com/frankball/ballware-identity-interface/blob/c681936/src/auth.ts#L125)

___

### register

• **register**: (`email`: *string*, `password`: *string*, `displayname`: *string*) => *Promise*<*void*\>

Registering new user

**`param`** Unique mail adress for new user

**`param`** Password for authentication user

**`param`** Screen friendly representation of user

**`returns`** Promise resolved when registration has finished

Defined in: [auth.ts:88](https://github.com/frankball/ballware-identity-interface/blob/c681936/src/auth.ts#L88)

___

### resetPassword

• **resetPassword**: (`email`: *string*, `code`: *string*, `newPassword`: *string*) => *Promise*<*void*\>

Reset password with password reset token

**`param`** Unique mail adress for requesting user

**`param`** Token delivered by identity provider for password reset

**`param`** New password provided by user

**`returns`** Promise resolved when request was transmitted

Defined in: [auth.ts:106](https://github.com/frankball/ballware-identity-interface/blob/c681936/src/auth.ts#L106)
