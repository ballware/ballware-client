[@ballware/meta-interface](../README.md) / [Exports](../modules.md) / MetaProcessingstateApi

# Interface: MetaProcessingstateApi

Interface for processing state operations

## Table of contents

### Properties

- [selectByStateForEntity](metaprocessingstateapi.md#selectbystateforentity)
- [selectListAllowedForEntityAndIds](metaprocessingstateapi.md#selectlistallowedforentityandids)
- [selectListForEntity](metaprocessingstateapi.md#selectlistforentity)

## Properties

### selectByStateForEntity

• **selectByStateForEntity**: (`token`: *string*, `entity`: *string*) => (`state`: *string* \| *number*) => *Promise*<Record<string, unknown\>\>

Fetch single processing state by state number

**`param`** Access token required for authentication

**`param`** Identifier of business object type

**`param`** Unique state number

**`returns`** Promise containing processing state data

#### Type declaration:

▸ (`token`: *string*, `entity`: *string*): *function*

#### Parameters:

Name | Type |
:------ | :------ |
`token` | *string* |
`entity` | *string* |

**Returns:** (`state`: *string* \| *number*) => *Promise*<Record<string, unknown\>\>

Defined in: [processingstate.ts:46](https://github.com/ballware/ballware-client/blob/e25f4ba/packages/meta-interface/src/processingstate.ts#L46)

Defined in: [processingstate.ts:46](https://github.com/ballware/ballware-client/blob/e25f4ba/packages/meta-interface/src/processingstate.ts#L46)

___

### selectListAllowedForEntityAndIds

• **selectListAllowedForEntityAndIds**: (`token`: *string*, `entity`: *string*, `ids`: *string*[]) => *Promise*<Record<string, unknown\>[]\>

Fetch select list containing all allowed states for business object ids

**`param`** Access token required for authentication

**`param`** Identifier of business object type

**`param`** Collection of ids to check

**`returns`** Promise containing list of allowed processing states

#### Type declaration:

▸ (`token`: *string*, `entity`: *string*, `ids`: *string*[]): *Promise*<Record<string, unknown\>[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`token` | *string* |
`entity` | *string* |
`ids` | *string*[] |

**Returns:** *Promise*<Record<string, unknown\>[]\>

Defined in: [processingstate.ts:32](https://github.com/ballware/ballware-client/blob/e25f4ba/packages/meta-interface/src/processingstate.ts#L32)

Defined in: [processingstate.ts:32](https://github.com/ballware/ballware-client/blob/e25f4ba/packages/meta-interface/src/processingstate.ts#L32)

___

### selectListForEntity

• **selectListForEntity**: (`token`: *string*, `entity`: *string*) => *Promise*<Record<string, unknown\>[]\>

Fetch select list containing all possible states for business object

**`param`** Access token required for authentication

**`param`** Identifier of business object type

**`returns`** Promise containing list of available processing states

#### Type declaration:

▸ (`token`: *string*, `entity`: *string*): *Promise*<Record<string, unknown\>[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`token` | *string* |
`entity` | *string* |

**Returns:** *Promise*<Record<string, unknown\>[]\>

Defined in: [processingstate.ts:19](https://github.com/ballware/ballware-client/blob/e25f4ba/packages/meta-interface/src/processingstate.ts#L19)

Defined in: [processingstate.ts:19](https://github.com/ballware/ballware-client/blob/e25f4ba/packages/meta-interface/src/processingstate.ts#L19)
