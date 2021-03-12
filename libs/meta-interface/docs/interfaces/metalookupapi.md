[@ballware/meta-interface](../README.md) / [Exports](../modules.md) / MetaLookupApi

# Interface: MetaLookupApi

Interface for fetching lookups

## Table of contents

### Properties

- [autoCompleteForLookup](metalookupapi.md#autocompleteforlookup)
- [autoCompleteForLookupWithParam](metalookupapi.md#autocompleteforlookupwithparam)
- [selectByIdForLookup](metalookupapi.md#selectbyidforlookup)
- [selectByIdForLookupIdentifier](metalookupapi.md#selectbyidforlookupidentifier)
- [selectByIdForLookupWithParam](metalookupapi.md#selectbyidforlookupwithparam)
- [selectListForLookup](metalookupapi.md#selectlistforlookup)
- [selectListForLookupIdentifier](metalookupapi.md#selectlistforlookupidentifier)
- [selectListForLookupWithParam](metalookupapi.md#selectlistforlookupwithparam)

## Properties

### autoCompleteForLookup

• **autoCompleteForLookup**: (`token`: *string*, `lookup`: *string*) => *Promise*<unknown[]\>

Fetch list of proposals for lookup

**`param`** Access token required for authentication

**`param`** Id of lookup definition

**`returns`** Promise containing proposals

#### Type declaration:

▸ (`token`: *string*, `lookup`: *string*): *Promise*<unknown[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`token` | *string* |
`lookup` | *string* |

**Returns:** *Promise*<unknown[]\>

Defined in: lib/lookup.ts:98

Defined in: lib/lookup.ts:98

___

### autoCompleteForLookupWithParam

• **autoCompleteForLookupWithParam**: (`token`: *string*, `lookup`: *string*, `param`: *unknown*) => *Promise*<unknown[]\>

Fetch list of proposals for lookup with param

**`param`** Access token required for authentication

**`param`** Id of lookup definition

**`param`** Additional query param for lookup

**`returns`** Promise containing proposals

#### Type declaration:

▸ (`token`: *string*, `lookup`: *string*, `param`: *unknown*): *Promise*<unknown[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`token` | *string* |
`lookup` | *string* |
`param` | *unknown* |

**Returns:** *Promise*<unknown[]\>

Defined in: lib/lookup.ts:111

Defined in: lib/lookup.ts:111

___

### selectByIdForLookup

• **selectByIdForLookup**: (`token`: *string*, `lookup`: *string*) => (`id`: *string*) => *Promise*<Record<string, unknown\>\>

Fetch single element by lookup and id

**`param`** Access token required for authentication

**`param`** Id of lookup definition

**`param`** Id of lookup element

**`returns`** Promise containing lookup element

#### Type declaration:

▸ (`token`: *string*, `lookup`: *string*): *function*

#### Parameters:

Name | Type |
:------ | :------ |
`token` | *string* |
`lookup` | *string* |

**Returns:** (`id`: *string*) => *Promise*<Record<string, unknown\>\>

Defined in: lib/lookup.ts:32

Defined in: lib/lookup.ts:32

___

### selectByIdForLookupIdentifier

• **selectByIdForLookupIdentifier**: (`token`: *string*, `identifier`: *string*) => (`id`: *string*) => *Promise*<Record<string, unknown\>\>

Fetch single element by lookup identifier and id

**`param`** Access token required for authentication

**`param`** Unique identifier of lookup definition

**`param`** Id of lookup element

**`returns`** Promise containing lookup element

#### Type declaration:

▸ (`token`: *string*, `identifier`: *string*): *function*

#### Parameters:

Name | Type |
:------ | :------ |
`token` | *string* |
`identifier` | *string* |

**Returns:** (`id`: *string*) => *Promise*<Record<string, unknown\>\>

Defined in: lib/lookup.ts:57

Defined in: lib/lookup.ts:57

___

### selectByIdForLookupWithParam

• **selectByIdForLookupWithParam**: (`token`: *string*, `lookup`: *string*, `param`: *unknown*) => (`id`: *string*) => *Promise*<Record<string, unknown\>\>

Fetch single element by lookup with param and id

**`param`** Access token required for authentication

**`param`** Id of lookup definition

**`param`** Additional query param for lookup

**`param`** Id of lookup element

**`returns`** Promise containing lookup element

#### Type declaration:

▸ (`token`: *string*, `lookup`: *string*, `param`: *unknown*): *function*

#### Parameters:

Name | Type |
:------ | :------ |
`token` | *string* |
`lookup` | *string* |
`param` | *unknown* |

**Returns:** (`id`: *string*) => *Promise*<Record<string, unknown\>\>

Defined in: lib/lookup.ts:85

Defined in: lib/lookup.ts:85

___

### selectListForLookup

• **selectListForLookup**: (`token`: *string*, `lookup`: *string*) => *Promise*<Record<string, unknown\>[]\>

Fetch list by lookup

**`param`** Access token required for authentication

**`param`** Identifier of lookup definition

**`returns`** Promise containing result list of lookup query

#### Type declaration:

▸ (`token`: *string*, `lookup`: *string*): *Promise*<Record<string, unknown\>[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`token` | *string* |
`lookup` | *string* |

**Returns:** *Promise*<Record<string, unknown\>[]\>

Defined in: lib/lookup.ts:19

Defined in: lib/lookup.ts:19

___

### selectListForLookupIdentifier

• **selectListForLookupIdentifier**: (`token`: *string*, `identifier`: *string*) => *Promise*<Record<string, unknown\>[]\>

Fetch list by lookup identifier

**`param`** Access token required for authentication

**`param`** Unique identifier of lookup definition

**`returns`** Promise containing result list of lookup query

#### Type declaration:

▸ (`token`: *string*, `identifier`: *string*): *Promise*<Record<string, unknown\>[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`token` | *string* |
`identifier` | *string* |

**Returns:** *Promise*<Record<string, unknown\>[]\>

Defined in: lib/lookup.ts:44

Defined in: lib/lookup.ts:44

___

### selectListForLookupWithParam

• **selectListForLookupWithParam**: (`token`: *string*, `lookup`: *string*, `param`: *unknown*) => *Promise*<Record<string, unknown\>[]\>

Fetch list by lookup with param

**`param`** Access token required for authentication

**`param`** Identifier of lookup definition

**`param`** Additional query param for lookup

**`returns`** Promise containing result list of lookup query

#### Type declaration:

▸ (`token`: *string*, `lookup`: *string*, `param`: *unknown*): *Promise*<Record<string, unknown\>[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`token` | *string* |
`lookup` | *string* |
`param` | *unknown* |

**Returns:** *Promise*<Record<string, unknown\>[]\>

Defined in: lib/lookup.ts:70

Defined in: lib/lookup.ts:70
