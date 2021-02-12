[@ballware/react-contexts](../README.md) / [Exports](../modules.md) / LookupStoreDescriptor

# Interface: LookupStoreDescriptor

Data access adapter for fetching lookup data

## Hierarchy

* **LookupStoreDescriptor**

## Table of contents

### Properties

- [byIdFunc](lookupstoredescriptor.md#byidfunc)
- [listFunc](lookupstoredescriptor.md#listfunc)

## Properties

### byIdFunc

• **byIdFunc**: (`id`: *string*) => *Promise*<*Record*<*string*, *unknown*\>\>

Fetch lookup record by id

**`param`** Id of lookup record

**`returns`** Promise resolving single lookup record for id

Defined in: [src/lookupcontext.ts:25](https://github.com/frankball/ballware-react-contexts/blob/6321ec4/src/lookupcontext.ts#L25)

___

### listFunc

• **listFunc**: () => *Promise*<*Record*<*string*, *unknown*\>[]\>

Fetch list of lookup records

**`returns`** Promise resolving list of available lookup records

Defined in: [src/lookupcontext.ts:18](https://github.com/frankball/ballware-react-contexts/blob/6321ec4/src/lookupcontext.ts#L18)
