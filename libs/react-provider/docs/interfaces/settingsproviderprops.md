[@ballware/react-provider](../README.md) / [Exports](../modules.md) / SettingsProviderProps

# Interface: SettingsProviderProps

Properties for settings provider

## Table of contents

### Properties

- [appversion](settingsproviderprops.md#appversion)
- [googlekey](settingsproviderprops.md#googlekey)
- [identityAuthApiFactory](settingsproviderprops.md#identityauthapifactory)
- [identityRoleApiFactory](settingsproviderprops.md#identityroleapifactory)
- [identityUserApiFactory](settingsproviderprops.md#identityuserapifactory)
- [metaAttachmentApiFactory](settingsproviderprops.md#metaattachmentapifactory)
- [metaDocumentApiFactory](settingsproviderprops.md#metadocumentapifactory)
- [metaDocumentationApiFactory](settingsproviderprops.md#metadocumentationapifactory)
- [metaEntityApiFactory](settingsproviderprops.md#metaentityapifactory)
- [metaGenericEntityApiFactory](settingsproviderprops.md#metagenericentityapifactory)
- [metaLookupApiFactory](settingsproviderprops.md#metalookupapifactory)
- [metaPageApiFactory](settingsproviderprops.md#metapageapifactory)
- [metaPickvalueApiFactory](settingsproviderprops.md#metapickvalueapifactory)
- [metaProcessingstateApiFactory](settingsproviderprops.md#metaprocessingstateapifactory)
- [metaStatisticApiFactory](settingsproviderprops.md#metastatisticapifactory)
- [metaTenantApiFactory](settingsproviderprops.md#metatenantapifactory)

## Properties

### appversion

• `Optional` **appversion**: *string*

Current app version for display

Defined in: [react-provider/src/lib/settingsprovider.tsx:39](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-provider/src/lib/settingsprovider.tsx#L39)

___

### googlekey

• `Optional` **googlekey**: *string*

Google API key used by maps implementation

Defined in: [react-provider/src/lib/settingsprovider.tsx:44](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-provider/src/lib/settingsprovider.tsx#L44)

___

### identityAuthApiFactory

• `Optional` **identityAuthApiFactory**: () => ResourceOwnerAuthApi

API factory for resource owner authentication functions

#### Type declaration:

▸ (): ResourceOwnerAuthApi

**Returns:** ResourceOwnerAuthApi

Defined in: [react-provider/src/lib/settingsprovider.tsx:49](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-provider/src/lib/settingsprovider.tsx#L49)

Defined in: [react-provider/src/lib/settingsprovider.tsx:49](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-provider/src/lib/settingsprovider.tsx#L49)

___

### identityRoleApiFactory

• `Optional` **identityRoleApiFactory**: () => IdentityRoleApi

API factory for access to role list

#### Type declaration:

▸ (): IdentityRoleApi

**Returns:** IdentityRoleApi

Defined in: [react-provider/src/lib/settingsprovider.tsx:59](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-provider/src/lib/settingsprovider.tsx#L59)

Defined in: [react-provider/src/lib/settingsprovider.tsx:59](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-provider/src/lib/settingsprovider.tsx#L59)

___

### identityUserApiFactory

• `Optional` **identityUserApiFactory**: () => IdentityUserApi

API factory for access to user list

#### Type declaration:

▸ (): IdentityUserApi

**Returns:** IdentityUserApi

Defined in: [react-provider/src/lib/settingsprovider.tsx:54](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-provider/src/lib/settingsprovider.tsx#L54)

Defined in: [react-provider/src/lib/settingsprovider.tsx:54](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-provider/src/lib/settingsprovider.tsx#L54)

___

### metaAttachmentApiFactory

• `Optional` **metaAttachmentApiFactory**: () => MetaAttachmentApi

API factory to access attachments

#### Type declaration:

▸ (): MetaAttachmentApi

**Returns:** MetaAttachmentApi

Defined in: [react-provider/src/lib/settingsprovider.tsx:74](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-provider/src/lib/settingsprovider.tsx#L74)

Defined in: [react-provider/src/lib/settingsprovider.tsx:74](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-provider/src/lib/settingsprovider.tsx#L74)

___

### metaDocumentApiFactory

• `Optional` **metaDocumentApiFactory**: () => MetaDocumentApi

API factory to access print document lists

#### Type declaration:

▸ (): MetaDocumentApi

**Returns:** MetaDocumentApi

Defined in: [react-provider/src/lib/settingsprovider.tsx:99](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-provider/src/lib/settingsprovider.tsx#L99)

Defined in: [react-provider/src/lib/settingsprovider.tsx:99](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-provider/src/lib/settingsprovider.tsx#L99)

___

### metaDocumentationApiFactory

• `Optional` **metaDocumentationApiFactory**: () => MetaDocumentationApi

API factory to access documentation

#### Type declaration:

▸ (): MetaDocumentationApi

**Returns:** MetaDocumentationApi

Defined in: [react-provider/src/lib/settingsprovider.tsx:104](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-provider/src/lib/settingsprovider.tsx#L104)

Defined in: [react-provider/src/lib/settingsprovider.tsx:104](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-provider/src/lib/settingsprovider.tsx#L104)

___

### metaEntityApiFactory

• `Optional` **metaEntityApiFactory**: () => MetaEntityApi

API factory to access generic entity metadata

#### Type declaration:

▸ (): MetaEntityApi

**Returns:** MetaEntityApi

Defined in: [react-provider/src/lib/settingsprovider.tsx:64](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-provider/src/lib/settingsprovider.tsx#L64)

Defined in: [react-provider/src/lib/settingsprovider.tsx:64](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-provider/src/lib/settingsprovider.tsx#L64)

___

### metaGenericEntityApiFactory

• `Optional` **metaGenericEntityApiFactory**: (`baseUrl`: *string*) => MetaGenericEntityApi

API factory to access generic entity crud operations

#### Type declaration:

▸ (`baseUrl`: *string*): MetaGenericEntityApi

#### Parameters:

Name | Type |
:------ | :------ |
`baseUrl` | *string* |

**Returns:** MetaGenericEntityApi

Defined in: [react-provider/src/lib/settingsprovider.tsx:114](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-provider/src/lib/settingsprovider.tsx#L114)

Defined in: [react-provider/src/lib/settingsprovider.tsx:114](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-provider/src/lib/settingsprovider.tsx#L114)

___

### metaLookupApiFactory

• `Optional` **metaLookupApiFactory**: () => MetaLookupApi

API factory to access lookup data

#### Type declaration:

▸ (): MetaLookupApi

**Returns:** MetaLookupApi

Defined in: [react-provider/src/lib/settingsprovider.tsx:84](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-provider/src/lib/settingsprovider.tsx#L84)

Defined in: [react-provider/src/lib/settingsprovider.tsx:84](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-provider/src/lib/settingsprovider.tsx#L84)

___

### metaPageApiFactory

• `Optional` **metaPageApiFactory**: () => MetaPageApi

API factory to access page metadata

#### Type declaration:

▸ (): MetaPageApi

**Returns:** MetaPageApi

Defined in: [react-provider/src/lib/settingsprovider.tsx:109](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-provider/src/lib/settingsprovider.tsx#L109)

Defined in: [react-provider/src/lib/settingsprovider.tsx:109](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-provider/src/lib/settingsprovider.tsx#L109)

___

### metaPickvalueApiFactory

• `Optional` **metaPickvalueApiFactory**: () => MetaPickvalueApi

API factory to access pickvalue data

#### Type declaration:

▸ (): MetaPickvalueApi

**Returns:** MetaPickvalueApi

Defined in: [react-provider/src/lib/settingsprovider.tsx:94](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-provider/src/lib/settingsprovider.tsx#L94)

Defined in: [react-provider/src/lib/settingsprovider.tsx:94](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-provider/src/lib/settingsprovider.tsx#L94)

___

### metaProcessingstateApiFactory

• `Optional` **metaProcessingstateApiFactory**: () => MetaProcessingstateApi

API factory to access processing state functionality

#### Type declaration:

▸ (): MetaProcessingstateApi

**Returns:** MetaProcessingstateApi

Defined in: [react-provider/src/lib/settingsprovider.tsx:89](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-provider/src/lib/settingsprovider.tsx#L89)

Defined in: [react-provider/src/lib/settingsprovider.tsx:89](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-provider/src/lib/settingsprovider.tsx#L89)

___

### metaStatisticApiFactory

• `Optional` **metaStatisticApiFactory**: () => MetaStatisticApi

API factory to access statistic metadata and data

#### Type declaration:

▸ (): MetaStatisticApi

**Returns:** MetaStatisticApi

Defined in: [react-provider/src/lib/settingsprovider.tsx:79](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-provider/src/lib/settingsprovider.tsx#L79)

Defined in: [react-provider/src/lib/settingsprovider.tsx:79](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-provider/src/lib/settingsprovider.tsx#L79)

___

### metaTenantApiFactory

• `Optional` **metaTenantApiFactory**: () => MetaTenantApi

API factory to access tenant metadata

#### Type declaration:

▸ (): MetaTenantApi

**Returns:** MetaTenantApi

Defined in: [react-provider/src/lib/settingsprovider.tsx:69](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-provider/src/lib/settingsprovider.tsx#L69)

Defined in: [react-provider/src/lib/settingsprovider.tsx:69](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-provider/src/lib/settingsprovider.tsx#L69)
