[@ballware/react-contexts](../README.md) / [Exports](../modules.md) / TenantContextState

# Interface: TenantContextState

Context for providing tenant metadata

## Hierarchy

* **TenantContextState**

## Table of contents

### Properties

- [name](tenantcontextstate.md#name)
- [navigation](tenantcontextstate.md#navigation)
- [pageAllowed](tenantcontextstate.md#pageallowed)
- [pages](tenantcontextstate.md#pages)

## Properties

### name

• `Optional` **name**: *undefined* \| *string*

Unique name of tenant

Defined in: [src/tenantcontext.ts:21](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/tenantcontext.ts#L21)

___

### navigation

• `Optional` **navigation**: *undefined* \| NavigationLayout

Navigation layout metadata for tenant

Defined in: [src/tenantcontext.ts:26](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/tenantcontext.ts#L26)

___

### pageAllowed

• `Optional` **pageAllowed**: *undefined* \| (`page`: *string*) => *boolean*

Check if access to page is allowed for current user

**`param`** Unique identifier of page

**`returns`** true if access is allowed

Defined in: [src/tenantcontext.ts:38](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/tenantcontext.ts#L38)

___

### pages

• `Optional` **pages**: *undefined* \| NavigationLayoutItem[]

List of pages for tenant

Defined in: [src/tenantcontext.ts:31](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/tenantcontext.ts#L31)
