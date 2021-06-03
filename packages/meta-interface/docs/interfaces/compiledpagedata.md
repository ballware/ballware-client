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

Defined in: [page.ts:392](https://github.com/ballware/ballware-client/blob/37e08ea/packages/meta-interface/src/page.ts#L392)

___

### identifier

• **identifier**: *string*

Unique identifier of page

Defined in: [page.ts:360](https://github.com/ballware/ballware-client/blob/37e08ea/packages/meta-interface/src/page.ts#L360)

___

### layout

• **layout**: [*PageLayout*](pagelayout.md)

Layout definition

Defined in: [page.ts:370](https://github.com/ballware/ballware-client/blob/37e08ea/packages/meta-interface/src/page.ts#L370)

___

### lookups

• **lookups**: { `displayMember`: *string* ; `hasParam`: *boolean* ; `id`: *string* ; `identifier`: *string* ; `type`: *number* ; `valueMember`: *string*  }[]

Collection of lookup definitions

Defined in: [page.ts:375](https://github.com/ballware/ballware-client/blob/37e08ea/packages/meta-interface/src/page.ts#L375)

___

### name

• **name**: *string*

Display name for navigation

Defined in: [page.ts:365](https://github.com/ballware/ballware-client/blob/37e08ea/packages/meta-interface/src/page.ts#L365)

___

### picklists

• **picklists**: { `entity`: *string* ; `field`: *string* ; `identifier`: *string*  }[]

Collection of picklist definitions

Defined in: [page.ts:387](https://github.com/ballware/ballware-client/blob/37e08ea/packages/meta-interface/src/page.ts#L387)
