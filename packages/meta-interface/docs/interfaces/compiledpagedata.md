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

Defined in: [page.ts:374](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/page.ts#L374)

___

### identifier

• **identifier**: *string*

Unique identifier of page

Defined in: [page.ts:342](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/page.ts#L342)

___

### layout

• **layout**: [*PageLayout*](pagelayout.md)

Layout definition

Defined in: [page.ts:352](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/page.ts#L352)

___

### lookups

• **lookups**: { `displayMember`: *string* ; `hasParam`: *boolean* ; `id`: *string* ; `identifier`: *string* ; `type`: *number* ; `valueMember`: *string*  }[]

Collection of lookup definitions

Defined in: [page.ts:357](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/page.ts#L357)

___

### name

• **name**: *string*

Display name for navigation

Defined in: [page.ts:347](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/page.ts#L347)

___

### picklists

• **picklists**: { `entity`: *string* ; `field`: *string* ; `identifier`: *string*  }[]

Collection of picklist definitions

Defined in: [page.ts:369](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/page.ts#L369)
