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

Defined in: [page.ts:405](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/page.ts#L405)

Defined in: [page.ts:405](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/page.ts#L405)
