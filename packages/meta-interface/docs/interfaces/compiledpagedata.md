[@ballware/meta-interface](../README.md) / [Exports](../modules.md) / CompiledPageData

# Interface: CompiledPageData

Page metadata

## Table of contents

### Properties

- [compiledCustomScripts](compiledpagedata.md#compiledcustomscripts)
- [identifier](compiledpagedata.md#identifier)
- [layout](compiledpagedata.md#layout)
- [lookups](compiledpagedata.md#lookups)
- [name](compiledpagedata.md#name)
- [picklists](compiledpagedata.md#picklists)

## Properties

### compiledCustomScripts

• `Optional` **compiledCustomScripts**: [*CompiledPageCustomScripts*](compiledpagecustomscripts.md)

Container for custom script operations

Defined in: [page.ts:391](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/page.ts#L391)

___

### identifier

• **identifier**: *string*

Unique identifier of page

Defined in: [page.ts:359](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/page.ts#L359)

___

### layout

• **layout**: [*PageLayout*](pagelayout.md)

Layout definition

Defined in: [page.ts:369](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/page.ts#L369)

___

### lookups

• **lookups**: { `displayMember`: *string* ; `hasParam`: *boolean* ; `id`: *string* ; `identifier`: *string* ; `type`: *number* ; `valueMember`: *string*  }[]

Collection of lookup definitions

Defined in: [page.ts:374](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/page.ts#L374)

___

### name

• **name**: *string*

Display name for navigation

Defined in: [page.ts:364](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/page.ts#L364)

___

### picklists

• **picklists**: { `entity`: *string* ; `field`: *string* ; `identifier`: *string*  }[]

Collection of picklist definitions

Defined in: [page.ts:386](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/page.ts#L386)
