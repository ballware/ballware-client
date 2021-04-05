[@ballware/react-contexts](../README.md) / [Exports](../modules.md) / TenantContextState

# Interface: TenantContextState

Context for providing tenant metadata

## Table of contents

### Properties

- [name](tenantcontextstate.md#name)
- [navigation](tenantcontextstate.md#navigation)
- [pageAllowed](tenantcontextstate.md#pageallowed)
- [pages](tenantcontextstate.md#pages)

## Properties

### name

• `Optional` **name**: *string*

Unique name of tenant

Defined in: [packages/react-contexts/src/tenantcontext.ts:21](https://github.com/ballware/ballware-client/blob/77ab18c/packages/react-contexts/src/tenantcontext.ts#L21)

___

### navigation

• `Optional` **navigation**: NavigationLayout

Navigation layout metadata for tenant

Defined in: [packages/react-contexts/src/tenantcontext.ts:26](https://github.com/ballware/ballware-client/blob/77ab18c/packages/react-contexts/src/tenantcontext.ts#L26)

___

### pageAllowed

• `Optional` **pageAllowed**: (`page`: *string*) => *boolean*

Check if access to page is allowed for current user

**`param`** Unique identifier of page

**`returns`** true if access is allowed

#### Type declaration:

▸ (`page`: *string*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`page` | *string* |

**Returns:** *boolean*

Defined in: [packages/react-contexts/src/tenantcontext.ts:38](https://github.com/ballware/ballware-client/blob/77ab18c/packages/react-contexts/src/tenantcontext.ts#L38)

Defined in: [packages/react-contexts/src/tenantcontext.ts:38](https://github.com/ballware/ballware-client/blob/77ab18c/packages/react-contexts/src/tenantcontext.ts#L38)

___

### pages

• `Optional` **pages**: NavigationLayoutItem[]

List of pages for tenant

Defined in: [packages/react-contexts/src/tenantcontext.ts:31](https://github.com/ballware/ballware-client/blob/77ab18c/packages/react-contexts/src/tenantcontext.ts#L31)
