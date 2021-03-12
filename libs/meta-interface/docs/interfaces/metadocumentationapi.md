[@ballware/meta-interface](../README.md) / [Exports](../modules.md) / MetaDocumentationApi

# Interface: MetaDocumentationApi

Interface for documentation viewer operations

## Table of contents

### Properties

- [loadDocumentationForEntity](metadocumentationapi.md#loaddocumentationforentity)

## Properties

### loadDocumentationForEntity

• **loadDocumentationForEntity**: (`token`: *string*, `entity`: *string*) => *Promise*<unknown\>

Fetch documentation for business object type

**`param`** Access token required for authentication

**`param`** Requested business object type

**`returns`** Promise containing rich text for rendering documentation

#### Type declaration:

▸ (`token`: *string*, `entity`: *string*): *Promise*<unknown\>

#### Parameters:

Name | Type |
:------ | :------ |
`token` | *string* |
`entity` | *string* |

**Returns:** *Promise*<unknown\>

Defined in: [lib/documentation.ts:19](https://github.com/ballware/ballware-client/blob/c9efe3e/libs/meta-interface/src/lib/documentation.ts#L19)

Defined in: [lib/documentation.ts:19](https://github.com/ballware/ballware-client/blob/c9efe3e/libs/meta-interface/src/lib/documentation.ts#L19)
