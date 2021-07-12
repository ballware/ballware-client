[@ballware/react-contexts](../README.md) / [Exports](../modules.md) / TenantContextState

# Interface: TenantContextState

Context for providing tenant metadata

## Table of contents

### Properties

- [hasRight](tenantcontextstate.md#hasright)
- [name](tenantcontextstate.md#name)
- [navigation](tenantcontextstate.md#navigation)
- [pages](tenantcontextstate.md#pages)

## Properties

### hasRight

• `Optional` **hasRight**: (`right`: *string*) => *boolean*

Check if right is permitted for current user

**`param`** Right identifier

**`returns`** true if access is allowed

#### Type declaration:

▸ (`right`: *string*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`right` | *string* |

**Returns:** *boolean*

Defined in: [packages/react-contexts/src/tenantcontext.ts:38](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/tenantcontext.ts#L38)

Defined in: [packages/react-contexts/src/tenantcontext.ts:38](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/tenantcontext.ts#L38)

___

### name

• `Optional` **name**: *string*

Unique name of tenant

Defined in: [packages/react-contexts/src/tenantcontext.ts:21](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/tenantcontext.ts#L21)

___

### navigation

• `Optional` **navigation**: NavigationLayout

Navigation layout metadata for tenant

Defined in: [packages/react-contexts/src/tenantcontext.ts:26](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/tenantcontext.ts#L26)

___

### pages

• `Optional` **pages**: NavigationLayoutItem[]

List of pages for tenant

Defined in: [packages/react-contexts/src/tenantcontext.ts:31](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/tenantcontext.ts#L31)
