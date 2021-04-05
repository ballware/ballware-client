[@ballware/react-contexts](../README.md) / [Exports](../modules.md) / PersistedRightsState

# Interface: PersistedRightsState

Persisted part of rights state in application store

## Hierarchy

* **PersistedRightsState**

  ↳ [*RightsContextState*](rightscontextstate.md)

## Table of contents

### Properties

- [error](persistedrightsstate.md#error)
- [expires\_in](persistedrightsstate.md#expires_in)
- [refresh\_token](persistedrightsstate.md#refresh_token)
- [rights](persistedrightsstate.md#rights)
- [timeout\_in](persistedrightsstate.md#timeout_in)
- [token](persistedrightsstate.md#token)

## Properties

### error

• `Optional` **error**: *string*

Last login try error message

Defined in: [packages/react-contexts/src/rightscontext.ts:43](https://github.com/ballware/ballware-client/blob/0f5da41/packages/react-contexts/src/rightscontext.ts#L43)

___

### expires\_in

• `Optional` **expires\_in**: *number*

Number of seconds the access token expires in

Defined in: [packages/react-contexts/src/rightscontext.ts:38](https://github.com/ballware/ballware-client/blob/0f5da41/packages/react-contexts/src/rightscontext.ts#L38)

___

### refresh\_token

• `Optional` **refresh\_token**: *string*

Refresh token

Defined in: [packages/react-contexts/src/rightscontext.ts:33](https://github.com/ballware/ballware-client/blob/0f5da41/packages/react-contexts/src/rightscontext.ts#L33)

___

### rights

• `Optional` **rights**: Rights

User rights for current user

Defined in: [packages/react-contexts/src/rightscontext.ts:18](https://github.com/ballware/ballware-client/blob/0f5da41/packages/react-contexts/src/rightscontext.ts#L18)

___

### timeout\_in

• `Optional` **timeout\_in**: Date

Access token timeout stamp

Defined in: [packages/react-contexts/src/rightscontext.ts:23](https://github.com/ballware/ballware-client/blob/0f5da41/packages/react-contexts/src/rightscontext.ts#L23)

___

### token

• `Optional` **token**: *string*

Access token

Defined in: [packages/react-contexts/src/rightscontext.ts:28](https://github.com/ballware/ballware-client/blob/0f5da41/packages/react-contexts/src/rightscontext.ts#L28)
