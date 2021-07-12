[@ballware/react-contexts](../README.md) / [Exports](../modules.md) / SettingsContextState

# Interface: SettingsContextState

Context for providing environment dependend application functionality

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

• `Optional` **googlekey**: *string*

API key for usage with google services

Defined in: [packages/react-contexts/src/settingscontext.ts:40](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/settingscontext.ts#L40)

___

### identityAuthApiFactory

• `Optional` **identityAuthApiFactory**: () => ResourceOwnerAuthApi

Factory for creating data adapter for user authentication

#### Type declaration:

▸ (): ResourceOwnerAuthApi

**Returns:** ResourceOwnerAuthApi

Defined in: [packages/react-contexts/src/settingscontext.ts:45](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/settingscontext.ts#L45)

Defined in: [packages/react-contexts/src/settingscontext.ts:45](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/settingscontext.ts#L45)

___

### identityRoleApiFactory

• `Optional` **identityRoleApiFactory**: () => IdentityRoleApi

Factory for creating data adapter for role list data access

#### Type declaration:

▸ (): IdentityRoleApi

**Returns:** IdentityRoleApi

Defined in: [packages/react-contexts/src/settingscontext.ts:55](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/settingscontext.ts#L55)

Defined in: [packages/react-contexts/src/settingscontext.ts:55](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/settingscontext.ts#L55)

___

### identityUserApiFactory

• `Optional` **identityUserApiFactory**: () => IdentityUserApi

Factory for creating data adapter for user list data access

#### Type declaration:

▸ (): IdentityUserApi

**Returns:** IdentityUserApi

Defined in: [packages/react-contexts/src/settingscontext.ts:50](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/settingscontext.ts#L50)

Defined in: [packages/react-contexts/src/settingscontext.ts:50](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/settingscontext.ts#L50)

___

### metaAttachmentApiFactory

• `Optional` **metaAttachmentApiFactory**: () => MetaAttachmentApi

Factory for creating data adapter for tenant data access

#### Type declaration:

▸ (): MetaAttachmentApi

**Returns:** MetaAttachmentApi

Defined in: [packages/react-contexts/src/settingscontext.ts:70](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/settingscontext.ts#L70)

Defined in: [packages/react-contexts/src/settingscontext.ts:70](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/settingscontext.ts#L70)

___

### metaDocumentApiFactory

• `Optional` **metaDocumentApiFactory**: () => MetaDocumentApi

Factory for creating data adapter for print document data access

#### Type declaration:

▸ (): MetaDocumentApi

**Returns:** MetaDocumentApi

Defined in: [packages/react-contexts/src/settingscontext.ts:95](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/settingscontext.ts#L95)

Defined in: [packages/react-contexts/src/settingscontext.ts:95](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/settingscontext.ts#L95)

___

### metaDocumentationApiFactory

• `Optional` **metaDocumentationApiFactory**: () => MetaDocumentationApi

Factory for creating data adapter for documentation data access

#### Type declaration:

▸ (): MetaDocumentationApi

**Returns:** MetaDocumentationApi

Defined in: [packages/react-contexts/src/settingscontext.ts:100](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/settingscontext.ts#L100)

Defined in: [packages/react-contexts/src/settingscontext.ts:100](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/settingscontext.ts#L100)

___

### metaEntityApiFactory

• `Optional` **metaEntityApiFactory**: () => MetaEntityApi

Factory for creating data adapter for entity metadata access

#### Type declaration:

▸ (): MetaEntityApi

**Returns:** MetaEntityApi

Defined in: [packages/react-contexts/src/settingscontext.ts:60](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/settingscontext.ts#L60)

Defined in: [packages/react-contexts/src/settingscontext.ts:60](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/settingscontext.ts#L60)

___

### metaGenericEntityApiFactory

• `Optional` **metaGenericEntityApiFactory**: (`baseUrl`: *string*) => MetaGenericEntityApi

Factory for creating data adapter for generic entity crud operations

#### Type declaration:

▸ (`baseUrl`: *string*): MetaGenericEntityApi

#### Parameters:

Name | Type |
:------ | :------ |
`baseUrl` | *string* |

**Returns:** MetaGenericEntityApi

Defined in: [packages/react-contexts/src/settingscontext.ts:110](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/settingscontext.ts#L110)

Defined in: [packages/react-contexts/src/settingscontext.ts:110](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/settingscontext.ts#L110)

___

### metaLookupApiFactory

• `Optional` **metaLookupApiFactory**: () => MetaLookupApi

Factory for creating data adapter for lookup data access

#### Type declaration:

▸ (): MetaLookupApi

**Returns:** MetaLookupApi

Defined in: [packages/react-contexts/src/settingscontext.ts:80](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/settingscontext.ts#L80)

Defined in: [packages/react-contexts/src/settingscontext.ts:80](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/settingscontext.ts#L80)

___

### metaPageApiFactory

• `Optional` **metaPageApiFactory**: () => MetaPageApi

Factory for creating data adapter for page data access

#### Type declaration:

▸ (): MetaPageApi

**Returns:** MetaPageApi

Defined in: [packages/react-contexts/src/settingscontext.ts:105](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/settingscontext.ts#L105)

Defined in: [packages/react-contexts/src/settingscontext.ts:105](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/settingscontext.ts#L105)

___

### metaPickvalueApiFactory

• `Optional` **metaPickvalueApiFactory**: () => MetaPickvalueApi

Factory for creating data adapter for pick values data access

#### Type declaration:

▸ (): MetaPickvalueApi

**Returns:** MetaPickvalueApi

Defined in: [packages/react-contexts/src/settingscontext.ts:90](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/settingscontext.ts#L90)

Defined in: [packages/react-contexts/src/settingscontext.ts:90](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/settingscontext.ts#L90)

___

### metaProcessingstateApiFactory

• `Optional` **metaProcessingstateApiFactory**: () => MetaProcessingstateApi

Factory for creating data adapter for processing state data access

#### Type declaration:

▸ (): MetaProcessingstateApi

**Returns:** MetaProcessingstateApi

Defined in: [packages/react-contexts/src/settingscontext.ts:85](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/settingscontext.ts#L85)

Defined in: [packages/react-contexts/src/settingscontext.ts:85](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/settingscontext.ts#L85)

___

### metaStatisticApiFactory

• `Optional` **metaStatisticApiFactory**: () => MetaStatisticApi

Factory for creating data adapter for statistic data access

#### Type declaration:

▸ (): MetaStatisticApi

**Returns:** MetaStatisticApi

Defined in: [packages/react-contexts/src/settingscontext.ts:75](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/settingscontext.ts#L75)

Defined in: [packages/react-contexts/src/settingscontext.ts:75](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/settingscontext.ts#L75)

___

### metaTenantApiFactory

• `Optional` **metaTenantApiFactory**: () => MetaTenantApi

Factory for creating data adapter for tenant data access

#### Type declaration:

▸ (): MetaTenantApi

**Returns:** MetaTenantApi

Defined in: [packages/react-contexts/src/settingscontext.ts:65](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/settingscontext.ts#L65)

Defined in: [packages/react-contexts/src/settingscontext.ts:65](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/settingscontext.ts#L65)

___

### version

• `Optional` **version**: *string*

Current version of application

Defined in: [packages/react-contexts/src/settingscontext.ts:35](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/settingscontext.ts#L35)
