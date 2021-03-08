[@ballware/react-contexts](../README.md) / [Exports](../modules.md) / RightsContextState

# Interface: RightsContextState

Context for providing user session functionality

## Hierarchy

* [*PersistedRightsState*](persistedrightsstate.md)

  ↳ **RightsContextState**

## Table of contents

### Properties

- [changePassword](rightscontextstate.md#changepassword)
- [error](rightscontextstate.md#error)
- [expires\_in](rightscontextstate.md#expires_in)
- [forgotPassword](rightscontextstate.md#forgotpassword)
- [login](rightscontextstate.md#login)
- [logout](rightscontextstate.md#logout)
- [manageAccount](rightscontextstate.md#manageaccount)
- [refresh](rightscontextstate.md#refresh)
- [refresh\_token](rightscontextstate.md#refresh_token)
- [register](rightscontextstate.md#register)
- [resetPassword](rightscontextstate.md#resetpassword)
- [rights](rightscontextstate.md#rights)
- [timeout\_in](rightscontextstate.md#timeout_in)
- [token](rightscontextstate.md#token)

## Properties

### changePassword

• `Optional` **changePassword**: *undefined* \| (`oldPassword`: *string*, `newPassword`: *string*) => *void*

Change password of logged in user

**`param`** Current password for validation

**`param`** New password for user

Defined in: src/rightscontext.ts:90

___

### error

• `Optional` **error**: *undefined* \| *string*

Last login try error message

Inherited from: [PersistedRightsState](persistedrightsstate.md).[error](persistedrightsstate.md#error)

Defined in: src/rightscontext.ts:43

___

### expires\_in

• `Optional` **expires\_in**: *undefined* \| *number*

Number of seconds the access token expires in

Inherited from: [PersistedRightsState](persistedrightsstate.md).[expires_in](persistedrightsstate.md#expires_in)

Defined in: src/rightscontext.ts:38

___

### forgotPassword

• `Optional` **forgotPassword**: *undefined* \| (`email`: *string*) => *void*

Require password reset message for lost password

**`param`** Mail adress of lost password account

Defined in: src/rightscontext.ts:75

___

### login

• `Optional` **login**: *undefined* \| (`username`: *string*, `password`: *string*, `redirect`: *string*) => *void*

Login user

**`param`** Login name for user

**`param`** Password of user

**`param`** Redirect url after successful login

Defined in: src/rightscontext.ts:56

___

### logout

• `Optional` **logout**: *undefined* \| () => *void*

Logout current user

Defined in: src/rightscontext.ts:61

___

### manageAccount

• `Optional` **manageAccount**: *undefined* \| () => *void*

Switch to account management

Defined in: src/rightscontext.ts:95

___

### refresh

• `Optional` **refresh**: *undefined* \| () => *void*

Refresh user session with refresh token

Defined in: src/rightscontext.ts:100

___

### refresh\_token

• `Optional` **refresh\_token**: *undefined* \| *string*

Refresh token

Inherited from: [PersistedRightsState](persistedrightsstate.md).[refresh_token](persistedrightsstate.md#refresh_token)

Defined in: src/rightscontext.ts:33

___

### register

• `Optional` **register**: *undefined* \| (`username`: *string*, `displayname`: *string*, `password`: *string*) => *void*

Register new user for application

**`param`** Requested unique user name

**`param`** Display name of new user

**`param`** Password for new user

Defined in: src/rightscontext.ts:69

___

### resetPassword

• `Optional` **resetPassword**: *undefined* \| (`email`: *string*, `code`: *string*, `newPassword`: *string*) => *void*

Reset lost password with reset code

**`param`** Mail adress of lost password accout

**`param`** Provided password reset code

**`param`** New user password

Defined in: src/rightscontext.ts:83

___

### rights

• `Optional` **rights**: *undefined* \| Rights

User rights for current user

Inherited from: [PersistedRightsState](persistedrightsstate.md).[rights](persistedrightsstate.md#rights)

Defined in: src/rightscontext.ts:18

___

### timeout\_in

• `Optional` **timeout\_in**: *undefined* \| Date

Access token timeout stamp

Inherited from: [PersistedRightsState](persistedrightsstate.md).[timeout_in](persistedrightsstate.md#timeout_in)

Defined in: src/rightscontext.ts:23

___

### token

• `Optional` **token**: *undefined* \| *string*

Access token

Inherited from: [PersistedRightsState](persistedrightsstate.md).[token](persistedrightsstate.md#token)

Defined in: src/rightscontext.ts:28
