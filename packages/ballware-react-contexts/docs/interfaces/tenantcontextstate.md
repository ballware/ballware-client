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

Defined in: [src/tenantcontext.ts:18](https://github.com/frankball/ballware-react-contexts/blob/839804b/src/tenantcontext.ts#L18)

___

### navigation

• `Optional` **navigation**: *undefined* \| NavigationLayout

Navigation layout metadata for tenant

Defined in: [src/tenantcontext.ts:23](https://github.com/frankball/ballware-react-contexts/blob/839804b/src/tenantcontext.ts#L23)

___

### pageAllowed

• `Optional` **pageAllowed**: *undefined* \| (`page`: *string*) => *boolean*

Check if access to page is allowed for current user

**`param`** Unique identifier of page

**`returns`** true if access is allowed

Defined in: [src/tenantcontext.ts:35](https://github.com/frankball/ballware-react-contexts/blob/839804b/src/tenantcontext.ts#L35)

___

### pages

• `Optional` **pages**: *undefined* \| NavigationLayoutItem[]

List of pages for tenant

Defined in: [src/tenantcontext.ts:28](https://github.com/frankball/ballware-react-contexts/blob/839804b/src/tenantcontext.ts#L28)
