[@ballware/meta-interface](../README.md) / [Exports](../modules.md) / MetaPageApi

# Interface: MetaPageApi

Interface for page metadata operations

## Table of contents

### Properties

- [pageDataForIdentifier](metapageapi.md#pagedataforidentifier)

## Properties

### pageDataForIdentifier

• **pageDataForIdentifier**: (`token`: *string*, `page`: *string*) => *Promise*<[*CompiledPageData*](compiledpagedata.md)\>

Fetch page metadata by identifier

**`param`** Access token required for authentication

**`param`** Identifier for page

**`returns`** Promise containing page metadata

#### Type declaration:

▸ (`token`: *string*, `page`: *string*): *Promise*<[*CompiledPageData*](compiledpagedata.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`token` | *string* |
`page` | *string* |

**Returns:** *Promise*<[*CompiledPageData*](compiledpagedata.md)\>

Defined in: [lib/page.ts:388](https://github.com/ballware/ballware-client/blob/69c8328/libs/meta-interface/src/lib/page.ts#L388)

Defined in: [lib/page.ts:388](https://github.com/ballware/ballware-client/blob/69c8328/libs/meta-interface/src/lib/page.ts#L388)
