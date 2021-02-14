[@ballware/react-contexts](../README.md) / [Exports](../modules.md) / PersistedResourceOwnerRightsState

# Interface: PersistedResourceOwnerRightsState

Persisted part of rights state in application store

## Hierarchy

* **PersistedResourceOwnerRightsState**

  ↳ [*RightsContextState*](rightscontextstate.md)

## Table of contents

### Properties

- [error](persistedresourceownerrightsstate.md#error)
- [expires\_in](persistedresourceownerrightsstate.md#expires_in)
- [refresh\_token](persistedresourceownerrightsstate.md#refresh_token)
- [rights](persistedresourceownerrightsstate.md#rights)
- [timeout\_in](persistedresourceownerrightsstate.md#timeout_in)
- [token](persistedresourceownerrightsstate.md#token)

## Properties

### error

• `Optional` **error**: *undefined* \| *string*

Last login try error message

Defined in: [src/resourceownerrightscontext.ts:43](https://github.com/frankball/ballware-react-contexts/blob/85afb6f/src/resourceownerrightscontext.ts#L43)

___

### expires\_in

• `Optional` **expires\_in**: *undefined* \| *number*

Number of seconds the access token expires in

Defined in: [src/resourceownerrightscontext.ts:38](https://github.com/frankball/ballware-react-contexts/blob/85afb6f/src/resourceownerrightscontext.ts#L38)

___

### refresh\_token

• `Optional` **refresh\_token**: *undefined* \| *string*

Refresh token

Defined in: [src/resourceownerrightscontext.ts:33](https://github.com/frankball/ballware-react-contexts/blob/85afb6f/src/resourceownerrightscontext.ts#L33)

___

### rights

• `Optional` **rights**: *undefined* \| Rights

User rights for current user

Defined in: [src/resourceownerrightscontext.ts:18](https://github.com/frankball/ballware-react-contexts/blob/85afb6f/src/resourceownerrightscontext.ts#L18)

___

### timeout\_in

• `Optional` **timeout\_in**: *undefined* \| Date

Access token timeout stamp

Defined in: [src/resourceownerrightscontext.ts:23](https://github.com/frankball/ballware-react-contexts/blob/85afb6f/src/resourceownerrightscontext.ts#L23)

___

### token

• `Optional` **token**: *undefined* \| *string*

Access token

Defined in: [src/resourceownerrightscontext.ts:28](https://github.com/frankball/ballware-react-contexts/blob/85afb6f/src/resourceownerrightscontext.ts#L28)
