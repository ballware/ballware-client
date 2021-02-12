[@ballware/react-contexts](../README.md) / [Exports](../modules.md) / SettingsContextState

# Interface: SettingsContextState

Context for providing environment dependend application functionality

## Hierarchy

* **SettingsContextState**

## Table of contents

### Properties

- [googlekey](settingscontextstate.md#googlekey)
- [identityAuthApiFactory](settingscontextstate.md#identityauthapifactory)
- [identityRoleApiFactory](settingscontextstate.md#identityroleapifactory)
- [identityUserApiFactory](settingscontextstate.md#identityuserapifactory)
- [metaAttachmentApiFactory](settingscontextstate.md#metaattachmentapifactory)
- [metaDocumentApiFactory](settingscontextstate.md#metadocumentapifactory)
- [metaDocumentationApiFactory](settingscontextstate.md#metadocumentationapifactory)
- [metaEntityApiFactory](settingscontextstate.md#metaentityapifactory)
- [metaGenericEntityApiFactory](settingscontextstate.md#metagenericentityapifactory)
- [metaLookupApiFactory](settingscontextstate.md#metalookupapifactory)
- [metaPageApiFactory](settingscontextstate.md#metapageapifactory)
- [metaPickvalueApiFactory](settingscontextstate.md#metapickvalueapifactory)
- [metaProcessingstateApiFactory](settingscontextstate.md#metaprocessingstateapifactory)
- [metaStatisticApiFactory](settingscontextstate.md#metastatisticapifactory)
- [metaTenantApiFactory](settingscontextstate.md#metatenantapifactory)
- [version](settingscontextstate.md#version)

## Properties

### googlekey

• `Optional` **googlekey**: *undefined* \| *string*

API key for usage with google services

Defined in: [src/settingscontext.ts:36](https://github.com/frankball/ballware-react-contexts/blob/bbedef5/src/settingscontext.ts#L36)

___

### identityAuthApiFactory

• `Optional` **identityAuthApiFactory**: *undefined* \| () => ResourceOwnerAuthApi

Factory for creating data adapter for user authentication

Defined in: [src/settingscontext.ts:41](https://github.com/frankball/ballware-react-contexts/blob/bbedef5/src/settingscontext.ts#L41)

___

### identityRoleApiFactory

• `Optional` **identityRoleApiFactory**: *undefined* \| () => IdentityRoleApi

Factory for creating data adapter for role list data access

Defined in: [src/settingscontext.ts:51](https://github.com/frankball/ballware-react-contexts/blob/bbedef5/src/settingscontext.ts#L51)

___

### identityUserApiFactory

• `Optional` **identityUserApiFactory**: *undefined* \| () => IdentityUserApi

Factory for creating data adapter for user list data access

Defined in: [src/settingscontext.ts:46](https://github.com/frankball/ballware-react-contexts/blob/bbedef5/src/settingscontext.ts#L46)

___

### metaAttachmentApiFactory

• `Optional` **metaAttachmentApiFactory**: *undefined* \| () => MetaAttachmentApi

Factory for creating data adapter for tenant data access

Defined in: [src/settingscontext.ts:66](https://github.com/frankball/ballware-react-contexts/blob/bbedef5/src/settingscontext.ts#L66)

___

### metaDocumentApiFactory

• `Optional` **metaDocumentApiFactory**: *undefined* \| () => MetaDocumentApi

Factory for creating data adapter for print document data access

Defined in: [src/settingscontext.ts:91](https://github.com/frankball/ballware-react-contexts/blob/bbedef5/src/settingscontext.ts#L91)

___

### metaDocumentationApiFactory

• `Optional` **metaDocumentationApiFactory**: *undefined* \| () => MetaDocumentationApi

Factory for creating data adapter for documentation data access

Defined in: [src/settingscontext.ts:96](https://github.com/frankball/ballware-react-contexts/blob/bbedef5/src/settingscontext.ts#L96)

___

### metaEntityApiFactory

• `Optional` **metaEntityApiFactory**: *undefined* \| () => MetaEntityApi

Factory for creating data adapter for entity metadata access

Defined in: [src/settingscontext.ts:56](https://github.com/frankball/ballware-react-contexts/blob/bbedef5/src/settingscontext.ts#L56)

___

### metaGenericEntityApiFactory

• `Optional` **metaGenericEntityApiFactory**: *undefined* \| (`baseUrl`: *string*) => MetaGenericEntityApi

Factory for creating data adapter for generic entity crud operations

Defined in: [src/settingscontext.ts:106](https://github.com/frankball/ballware-react-contexts/blob/bbedef5/src/settingscontext.ts#L106)

___

### metaLookupApiFactory

• `Optional` **metaLookupApiFactory**: *undefined* \| () => MetaLookupApi

Factory for creating data adapter for lookup data access

Defined in: [src/settingscontext.ts:76](https://github.com/frankball/ballware-react-contexts/blob/bbedef5/src/settingscontext.ts#L76)

___

### metaPageApiFactory

• `Optional` **metaPageApiFactory**: *undefined* \| () => MetaPageApi

Factory for creating data adapter for page data access

Defined in: [src/settingscontext.ts:101](https://github.com/frankball/ballware-react-contexts/blob/bbedef5/src/settingscontext.ts#L101)

___

### metaPickvalueApiFactory

• `Optional` **metaPickvalueApiFactory**: *undefined* \| () => MetaPickvalueApi

Factory for creating data adapter for pick values data access

Defined in: [src/settingscontext.ts:86](https://github.com/frankball/ballware-react-contexts/blob/bbedef5/src/settingscontext.ts#L86)

___

### metaProcessingstateApiFactory

• `Optional` **metaProcessingstateApiFactory**: *undefined* \| () => MetaProcessingstateApi

Factory for creating data adapter for processing state data access

Defined in: [src/settingscontext.ts:81](https://github.com/frankball/ballware-react-contexts/blob/bbedef5/src/settingscontext.ts#L81)

___

### metaStatisticApiFactory

• `Optional` **metaStatisticApiFactory**: *undefined* \| () => MetaStatisticApi

Factory for creating data adapter for statistic data access

Defined in: [src/settingscontext.ts:71](https://github.com/frankball/ballware-react-contexts/blob/bbedef5/src/settingscontext.ts#L71)

___

### metaTenantApiFactory

• `Optional` **metaTenantApiFactory**: *undefined* \| () => MetaTenantApi

Factory for creating data adapter for tenant data access

Defined in: [src/settingscontext.ts:61](https://github.com/frankball/ballware-react-contexts/blob/bbedef5/src/settingscontext.ts#L61)

___

### version

• `Optional` **version**: *undefined* \| *string*

Current version of application

Defined in: [src/settingscontext.ts:31](https://github.com/frankball/ballware-react-contexts/blob/bbedef5/src/settingscontext.ts#L31)
