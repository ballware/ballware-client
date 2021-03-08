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

Defined in: [src/settingscontext.ts:40](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/settingscontext.ts#L40)

___

### identityAuthApiFactory

• `Optional` **identityAuthApiFactory**: *undefined* \| () => ResourceOwnerAuthApi

Factory for creating data adapter for user authentication

Defined in: [src/settingscontext.ts:45](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/settingscontext.ts#L45)

___

### identityRoleApiFactory

• `Optional` **identityRoleApiFactory**: *undefined* \| () => IdentityRoleApi

Factory for creating data adapter for role list data access

Defined in: [src/settingscontext.ts:55](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/settingscontext.ts#L55)

___

### identityUserApiFactory

• `Optional` **identityUserApiFactory**: *undefined* \| () => IdentityUserApi

Factory for creating data adapter for user list data access

Defined in: [src/settingscontext.ts:50](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/settingscontext.ts#L50)

___

### metaAttachmentApiFactory

• `Optional` **metaAttachmentApiFactory**: *undefined* \| () => MetaAttachmentApi

Factory for creating data adapter for tenant data access

Defined in: [src/settingscontext.ts:70](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/settingscontext.ts#L70)

___

### metaDocumentApiFactory

• `Optional` **metaDocumentApiFactory**: *undefined* \| () => MetaDocumentApi

Factory for creating data adapter for print document data access

Defined in: [src/settingscontext.ts:95](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/settingscontext.ts#L95)

___

### metaDocumentationApiFactory

• `Optional` **metaDocumentationApiFactory**: *undefined* \| () => MetaDocumentationApi

Factory for creating data adapter for documentation data access

Defined in: [src/settingscontext.ts:100](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/settingscontext.ts#L100)

___

### metaEntityApiFactory

• `Optional` **metaEntityApiFactory**: *undefined* \| () => MetaEntityApi

Factory for creating data adapter for entity metadata access

Defined in: [src/settingscontext.ts:60](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/settingscontext.ts#L60)

___

### metaGenericEntityApiFactory

• `Optional` **metaGenericEntityApiFactory**: *undefined* \| (`baseUrl`: *string*) => MetaGenericEntityApi

Factory for creating data adapter for generic entity crud operations

Defined in: [src/settingscontext.ts:110](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/settingscontext.ts#L110)

___

### metaLookupApiFactory

• `Optional` **metaLookupApiFactory**: *undefined* \| () => MetaLookupApi

Factory for creating data adapter for lookup data access

Defined in: [src/settingscontext.ts:80](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/settingscontext.ts#L80)

___

### metaPageApiFactory

• `Optional` **metaPageApiFactory**: *undefined* \| () => MetaPageApi

Factory for creating data adapter for page data access

Defined in: [src/settingscontext.ts:105](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/settingscontext.ts#L105)

___

### metaPickvalueApiFactory

• `Optional` **metaPickvalueApiFactory**: *undefined* \| () => MetaPickvalueApi

Factory for creating data adapter for pick values data access

Defined in: [src/settingscontext.ts:90](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/settingscontext.ts#L90)

___

### metaProcessingstateApiFactory

• `Optional` **metaProcessingstateApiFactory**: *undefined* \| () => MetaProcessingstateApi

Factory for creating data adapter for processing state data access

Defined in: [src/settingscontext.ts:85](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/settingscontext.ts#L85)

___

### metaStatisticApiFactory

• `Optional` **metaStatisticApiFactory**: *undefined* \| () => MetaStatisticApi

Factory for creating data adapter for statistic data access

Defined in: [src/settingscontext.ts:75](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/settingscontext.ts#L75)

___

### metaTenantApiFactory

• `Optional` **metaTenantApiFactory**: *undefined* \| () => MetaTenantApi

Factory for creating data adapter for tenant data access

Defined in: [src/settingscontext.ts:65](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/settingscontext.ts#L65)

___

### version

• `Optional` **version**: *undefined* \| *string*

Current version of application

Defined in: [src/settingscontext.ts:35](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/settingscontext.ts#L35)
