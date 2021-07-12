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
- [expired](rightscontextstate.md#expired)
- [expires\_in](rightscontextstate.md#expires_in)
- [forgotPassword](rightscontextstate.md#forgotpassword)
- [login](rightscontextstate.md#login)
- [logout](rightscontextstate.md#logout)
- [manageAccount](rightscontextstate.md#manageaccount)
- [refresh](rightscontextstate.md#refresh)
- [refresh\_token](rightscontextstate.md#refresh_token)
- [register](rightscontextstate.md#register)
- [resetPassword](rightscontextstate.md#resetpassword)
- [session](rightscontextstate.md#session)
- [timeout\_in](rightscontextstate.md#timeout_in)
- [token](rightscontextstate.md#token)

## Properties

### changePassword

• `Optional` **changePassword**: (`oldPassword`: *string*, `newPassword`: *string*) => *void*

Change password of logged in user

**`param`** Current password for validation

**`param`** New password for user

#### Type declaration:

▸ (`oldPassword`: *string*, `newPassword`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`oldPassword` | *string* |
`newPassword` | *string* |

**Returns:** *void*

Defined in: [packages/react-contexts/src/rightscontext.ts:95](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/rightscontext.ts#L95)

Defined in: [packages/react-contexts/src/rightscontext.ts:95](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/rightscontext.ts#L95)

___

### error

• `Optional` **error**: *string*

Last login try error message

Inherited from: [PersistedRightsState](persistedrightsstate.md).[error](persistedrightsstate.md#error)

Defined in: [packages/react-contexts/src/rightscontext.ts:43](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/rightscontext.ts#L43)

___

### expired

• `Optional` **expired**: () => *void*

Session expired notification

#### Type declaration:

▸ (): *void*

**Returns:** *void*

Defined in: [packages/react-contexts/src/rightscontext.ts:66](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/rightscontext.ts#L66)

Defined in: [packages/react-contexts/src/rightscontext.ts:66](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/rightscontext.ts#L66)

___

### expires\_in

• `Optional` **expires\_in**: *number*

Number of seconds the access token expires in

Inherited from: [PersistedRightsState](persistedrightsstate.md).[expires_in](persistedrightsstate.md#expires_in)

Defined in: [packages/react-contexts/src/rightscontext.ts:38](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/rightscontext.ts#L38)

___

### forgotPassword

• `Optional` **forgotPassword**: (`email`: *string*) => *void*

Require password reset message for lost password

**`param`** Mail adress of lost password account

#### Type declaration:

▸ (`email`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`email` | *string* |

**Returns:** *void*

Defined in: [packages/react-contexts/src/rightscontext.ts:80](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/rightscontext.ts#L80)

Defined in: [packages/react-contexts/src/rightscontext.ts:80](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/rightscontext.ts#L80)

___

### login

• `Optional` **login**: (`username`: *string*, `password`: *string*, `redirect`: *string*) => *void*

Login user

**`param`** Login name for user

**`param`** Password of user

**`param`** Redirect url after successful login

#### Type declaration:

▸ (`username`: *string*, `password`: *string*, `redirect`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`username` | *string* |
`password` | *string* |
`redirect` | *string* |

**Returns:** *void*

Defined in: [packages/react-contexts/src/rightscontext.ts:56](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/rightscontext.ts#L56)

Defined in: [packages/react-contexts/src/rightscontext.ts:56](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/rightscontext.ts#L56)

___

### logout

• `Optional` **logout**: () => *void*

Logout current user

#### Type declaration:

▸ (): *void*

**Returns:** *void*

Defined in: [packages/react-contexts/src/rightscontext.ts:61](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/rightscontext.ts#L61)

Defined in: [packages/react-contexts/src/rightscontext.ts:61](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/rightscontext.ts#L61)

___

### manageAccount

• `Optional` **manageAccount**: () => *void*

Switch to account management

#### Type declaration:

▸ (): *void*

**Returns:** *void*

Defined in: [packages/react-contexts/src/rightscontext.ts:100](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/rightscontext.ts#L100)

Defined in: [packages/react-contexts/src/rightscontext.ts:100](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/rightscontext.ts#L100)

___

### refresh

• `Optional` **refresh**: () => *void*

Refresh user session with refresh token

#### Type declaration:

▸ (): *void*

**Returns:** *void*

Defined in: [packages/react-contexts/src/rightscontext.ts:105](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/rightscontext.ts#L105)

Defined in: [packages/react-contexts/src/rightscontext.ts:105](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/rightscontext.ts#L105)

___

### refresh\_token

• `Optional` **refresh\_token**: *string*

Refresh token

Inherited from: [PersistedRightsState](persistedrightsstate.md).[refresh_token](persistedrightsstate.md#refresh_token)

Defined in: [packages/react-contexts/src/rightscontext.ts:33](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/rightscontext.ts#L33)

___

### register

• `Optional` **register**: (`username`: *string*, `displayname`: *string*, `password`: *string*) => *void*

Register new user for application

**`param`** Requested unique user name

**`param`** Display name of new user

**`param`** Password for new user

#### Type declaration:

▸ (`username`: *string*, `displayname`: *string*, `password`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`username` | *string* |
`displayname` | *string* |
`password` | *string* |

**Returns:** *void*

Defined in: [packages/react-contexts/src/rightscontext.ts:74](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/rightscontext.ts#L74)

Defined in: [packages/react-contexts/src/rightscontext.ts:74](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/rightscontext.ts#L74)

___

### resetPassword

• `Optional` **resetPassword**: (`email`: *string*, `code`: *string*, `newPassword`: *string*) => *void*

Reset lost password with reset code

**`param`** Mail adress of lost password accout

**`param`** Provided password reset code

**`param`** New user password

#### Type declaration:

▸ (`email`: *string*, `code`: *string*, `newPassword`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`email` | *string* |
`code` | *string* |
`newPassword` | *string* |

**Returns:** *void*

Defined in: [packages/react-contexts/src/rightscontext.ts:88](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/rightscontext.ts#L88)

Defined in: [packages/react-contexts/src/rightscontext.ts:88](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/rightscontext.ts#L88)

___

### session

• `Optional` **session**: *SessionWithUserInfo*

User rights for current user

Inherited from: [PersistedRightsState](persistedrightsstate.md).[session](persistedrightsstate.md#session)

Defined in: [packages/react-contexts/src/rightscontext.ts:18](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/rightscontext.ts#L18)

___

### timeout\_in

• `Optional` **timeout\_in**: Date

Access token timeout stamp

Inherited from: [PersistedRightsState](persistedrightsstate.md).[timeout_in](persistedrightsstate.md#timeout_in)

Defined in: [packages/react-contexts/src/rightscontext.ts:23](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/rightscontext.ts#L23)

___

### token

• `Optional` **token**: *string*

Access token

Inherited from: [PersistedRightsState](persistedrightsstate.md).[token](persistedrightsstate.md#token)

Defined in: [packages/react-contexts/src/rightscontext.ts:28](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/rightscontext.ts#L28)
