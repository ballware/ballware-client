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

• `Optional` **error**: *undefined* \| *string*

Last login try error message

Defined in: src/rightscontext.ts:43

___

### expires\_in

• `Optional` **expires\_in**: *undefined* \| *number*

Number of seconds the access token expires in

Defined in: src/rightscontext.ts:38

___

### refresh\_token

• `Optional` **refresh\_token**: *undefined* \| *string*

Refresh token

Defined in: src/rightscontext.ts:33

___

### rights

• `Optional` **rights**: *undefined* \| Rights

User rights for current user

Defined in: src/rightscontext.ts:18

___

### timeout\_in

• `Optional` **timeout\_in**: *undefined* \| Date

Access token timeout stamp

Defined in: src/rightscontext.ts:23

___

### token

• `Optional` **token**: *undefined* \| *string*

Access token

Defined in: src/rightscontext.ts:28
