[@ballware/react-contexts](../README.md) / [Exports](../modules.md) / LookupDescriptor

# Interface: LookupDescriptor

Descriptor for lookup and autocomplete datasource

## Hierarchy

* **LookupDescriptor**

## Table of contents

### Properties

- [displayMember](lookupdescriptor.md#displaymember)
- [store](lookupdescriptor.md#store)
- [type](lookupdescriptor.md#type)
- [valueMember](lookupdescriptor.md#valuemember)

## Properties

### displayMember

• `Optional` **displayMember**: *undefined* \| *string*

Display property in fetched data items

Defined in: [src/lookupcontext.ts:60](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/lookupcontext.ts#L60)

___

### store

• **store**: [*LookupStoreDescriptor*](lookupstoredescriptor.md) \| [*AutocompleteStoreDescriptor*](autocompletestoredescriptor.md)

Data access adapter for fetching data for lookup/autocomplete source

Defined in: [src/lookupcontext.ts:50](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/lookupcontext.ts#L50)

___

### type

• **type**: *lookup* \| *autocomplete*

Type of lookup descriptor

Defined in: [src/lookupcontext.ts:45](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/lookupcontext.ts#L45)

___

### valueMember

• `Optional` **valueMember**: *undefined* \| *string*

Value property in fetched data items

Defined in: [src/lookupcontext.ts:55](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/lookupcontext.ts#L55)
