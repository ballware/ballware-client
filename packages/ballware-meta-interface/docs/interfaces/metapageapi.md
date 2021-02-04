[@ballware/meta-interface](../README.md) / [Exports](../modules.md) / MetaPageApi

# Interface: MetaPageApi

Interface for page metadata operations

## Hierarchy

* **MetaPageApi**

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

Defined in: [page.ts:388](https://github.com/frankball/ballware-meta-interface/blob/6b9dc3f/src/page.ts#L388)
