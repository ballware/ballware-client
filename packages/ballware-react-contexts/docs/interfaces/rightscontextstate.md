[@ballware/react-contexts](../README.md) / [Exports](../modules.md) / RightsContextState

# Interface: RightsContextState

Context for providing user session functionality

## Hierarchy

* [*PersistedResourceOwnerRightsState*](persistedresourceownerrightsstate.md)

  ↳ **RightsContextState**

## Table of contents

### Properties

- [changePassword](rightscontextstate.md#changepassword)
- [error](rightscontextstate.md#error)
- [expires\_in](rightscontextstate.md#expires_in)
- [forgotPassword](rightscontextstate.md#forgotpassword)
- [login](rightscontextstate.md#login)
- [logout](rightscontextstate.md#logout)
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

Defined in: [src/resourceownerrightscontext.ts:90](https://github.com/frankball/ballware-react-contexts/blob/bbedef5/src/resourceownerrightscontext.ts#L90)

___

### error

• `Optional` **error**: *undefined* \| *string*

Last login try error message

Inherited from: [PersistedResourceOwnerRightsState](persistedresourceownerrightsstate.md).[error](persistedresourceownerrightsstate.md#error)

Defined in: [src/resourceownerrightscontext.ts:43](https://github.com/frankball/ballware-react-contexts/blob/bbedef5/src/resourceownerrightscontext.ts#L43)

___

### expires\_in

• `Optional` **expires\_in**: *undefined* \| *number*

Number of seconds the access token expires in

Inherited from: [PersistedResourceOwnerRightsState](persistedresourceownerrightsstate.md).[expires_in](persistedresourceownerrightsstate.md#expires_in)

Defined in: [src/resourceownerrightscontext.ts:38](https://github.com/frankball/ballware-react-contexts/blob/bbedef5/src/resourceownerrightscontext.ts#L38)

___

### forgotPassword

• `Optional` **forgotPassword**: *undefined* \| (`email`: *string*) => *void*

Require password reset message for lost password

**`param`** Mail adress of lost password account

Defined in: [src/resourceownerrightscontext.ts:75](https://github.com/frankball/ballware-react-contexts/blob/bbedef5/src/resourceownerrightscontext.ts#L75)

___

### login

• `Optional` **login**: *undefined* \| (`username`: *string*, `password`: *string*, `redirect`: *string*) => *void*

Login user

**`param`** Login name for user

**`param`** Password of user

**`param`** Redirect url after successful login

Defined in: [src/resourceownerrightscontext.ts:56](https://github.com/frankball/ballware-react-contexts/blob/bbedef5/src/resourceownerrightscontext.ts#L56)

___

### logout

• `Optional` **logout**: *undefined* \| () => *void*

Logout current user

Defined in: [src/resourceownerrightscontext.ts:61](https://github.com/frankball/ballware-react-contexts/blob/bbedef5/src/resourceownerrightscontext.ts#L61)

___

### refresh

• `Optional` **refresh**: *undefined* \| () => *void*

Refresh user session with refresh token

Defined in: [src/resourceownerrightscontext.ts:95](https://github.com/frankball/ballware-react-contexts/blob/bbedef5/src/resourceownerrightscontext.ts#L95)

___

### refresh\_token

• `Optional` **refresh\_token**: *undefined* \| *string*

Refresh token

Inherited from: [PersistedResourceOwnerRightsState](persistedresourceownerrightsstate.md).[refresh_token](persistedresourceownerrightsstate.md#refresh_token)

Defined in: [src/resourceownerrightscontext.ts:33](https://github.com/frankball/ballware-react-contexts/blob/bbedef5/src/resourceownerrightscontext.ts#L33)

___

### register

• `Optional` **register**: *undefined* \| (`username`: *string*, `displayname`: *string*, `password`: *string*) => *void*

Register new user for application

**`param`** Requested unique user name

**`param`** Display name of new user

**`param`** Password for new user

Defined in: [src/resourceownerrightscontext.ts:69](https://github.com/frankball/ballware-react-contexts/blob/bbedef5/src/resourceownerrightscontext.ts#L69)

___

### resetPassword

• `Optional` **resetPassword**: *undefined* \| (`email`: *string*, `code`: *string*, `newPassword`: *string*) => *void*

Reset lost password with reset code

**`param`** Mail adress of lost password accout

**`param`** Provided password reset code

**`param`** New user password

Defined in: [src/resourceownerrightscontext.ts:83](https://github.com/frankball/ballware-react-contexts/blob/bbedef5/src/resourceownerrightscontext.ts#L83)

___

### rights

• `Optional` **rights**: *undefined* \| Rights

User rights for current user

Inherited from: [PersistedResourceOwnerRightsState](persistedresourceownerrightsstate.md).[rights](persistedresourceownerrightsstate.md#rights)

Defined in: [src/resourceownerrightscontext.ts:18](https://github.com/frankball/ballware-react-contexts/blob/bbedef5/src/resourceownerrightscontext.ts#L18)

___

### timeout\_in

• `Optional` **timeout\_in**: *undefined* \| Date

Access token timeout stamp

Inherited from: [PersistedResourceOwnerRightsState](persistedresourceownerrightsstate.md).[timeout_in](persistedresourceownerrightsstate.md#timeout_in)

Defined in: [src/resourceownerrightscontext.ts:23](https://github.com/frankball/ballware-react-contexts/blob/bbedef5/src/resourceownerrightscontext.ts#L23)

___

### token

• `Optional` **token**: *undefined* \| *string*

Access token

Inherited from: [PersistedResourceOwnerRightsState](persistedresourceownerrightsstate.md).[token](persistedresourceownerrightsstate.md#token)

Defined in: [src/resourceownerrightscontext.ts:28](https://github.com/frankball/ballware-react-contexts/blob/bbedef5/src/resourceownerrightscontext.ts#L28)
