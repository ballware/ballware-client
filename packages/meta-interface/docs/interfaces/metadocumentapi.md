[@ballware/meta-interface](../README.md) / [Exports](../modules.md) / MetaDocumentApi

# Interface: MetaDocumentApi

Interface for document printing operations

## Table of contents

### Properties

- [selectListPrintDocumentsForEntity](metadocumentapi.md#selectlistprintdocumentsforentity)
- [viewerUrl](metadocumentapi.md#viewerurl)

## Properties

### selectListPrintDocumentsForEntity

• **selectListPrintDocumentsForEntity**: (`token`: *string*, `entity`: *string*) => *Promise*<[*DocumentSelectEntry*](documentselectentry.md)[]\>

Fetch available print documents for business object type

**`param`** Access token required for authentication

**`param`** Identifier for business object type

**`returns`** Promise containing available print documents for entity

#### Type declaration:

▸ (`token`: *string*, `entity`: *string*): *Promise*<[*DocumentSelectEntry*](documentselectentry.md)[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`token` | *string* |
`entity` | *string* |

**Returns:** *Promise*<[*DocumentSelectEntry*](documentselectentry.md)[]\>

Defined in: [document.ts:34](https://github.com/ballware/ballware-client/blob/88ab695/packages/meta-interface/src/document.ts#L34)

Defined in: [document.ts:34](https://github.com/ballware/ballware-client/blob/88ab695/packages/meta-interface/src/document.ts#L34)

___

### viewerUrl

• **viewerUrl**: (`token`: *string*, `search`: *string*) => *Promise*<string\>

Generate viewer url for document

**`param`** Access token required for authentication

**`param`** Query expression for generating document

**`returns`** Promise containing url for rendering document

#### Type declaration:

▸ (`token`: *string*, `search`: *string*): *Promise*<string\>

#### Parameters:

Name | Type |
:------ | :------ |
`token` | *string* |
`search` | *string* |

**Returns:** *Promise*<string\>

Defined in: [document.ts:46](https://github.com/ballware/ballware-client/blob/88ab695/packages/meta-interface/src/document.ts#L46)

Defined in: [document.ts:46](https://github.com/ballware/ballware-client/blob/88ab695/packages/meta-interface/src/document.ts#L46)
