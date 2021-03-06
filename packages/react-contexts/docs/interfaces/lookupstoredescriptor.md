[@ballware/react-contexts](../README.md) / [Exports](../modules.md) / LookupStoreDescriptor

# Interface: LookupStoreDescriptor

Data access adapter for fetching lookup data

## Table of contents

### Properties

- [byIdFunc](lookupstoredescriptor.md#byidfunc)
- [listFunc](lookupstoredescriptor.md#listfunc)

## Properties

### byIdFunc

• **byIdFunc**: (`id`: *string*) => *Promise*<Record<string, unknown\>\>

Fetch lookup record by id

**`param`** Id of lookup record

**`returns`** Promise resolving single lookup record for id

#### Type declaration:

▸ (`id`: *string*): *Promise*<Record<string, unknown\>\>

#### Parameters:

Name | Type |
:------ | :------ |
`id` | *string* |

**Returns:** *Promise*<Record<string, unknown\>\>

Defined in: [packages/react-contexts/src/lookupcontext.ts:25](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/lookupcontext.ts#L25)

Defined in: [packages/react-contexts/src/lookupcontext.ts:25](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/lookupcontext.ts#L25)

___

### listFunc

• **listFunc**: () => *Promise*<Record<string, unknown\>[]\>

Fetch list of lookup records

**`returns`** Promise resolving list of available lookup records

#### Type declaration:

▸ (): *Promise*<Record<string, unknown\>[]\>

**Returns:** *Promise*<Record<string, unknown\>[]\>

Defined in: [packages/react-contexts/src/lookupcontext.ts:18](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/lookupcontext.ts#L18)

Defined in: [packages/react-contexts/src/lookupcontext.ts:18](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/lookupcontext.ts#L18)
