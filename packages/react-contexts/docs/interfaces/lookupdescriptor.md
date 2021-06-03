[@ballware/react-contexts](../README.md) / [Exports](../modules.md) / LookupDescriptor

# Interface: LookupDescriptor

Descriptor for lookup and autocomplete datasource

## Table of contents

### Properties

- [displayMember](lookupdescriptor.md#displaymember)
- [store](lookupdescriptor.md#store)
- [type](lookupdescriptor.md#type)
- [valueMember](lookupdescriptor.md#valuemember)

## Properties

### displayMember

• `Optional` **displayMember**: *string*

Display property in fetched data items

Defined in: [packages/react-contexts/src/lookupcontext.ts:60](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/lookupcontext.ts#L60)

___

### store

• **store**: [*LookupStoreDescriptor*](lookupstoredescriptor.md) \| [*AutocompleteStoreDescriptor*](autocompletestoredescriptor.md)

Data access adapter for fetching data for lookup/autocomplete source

Defined in: [packages/react-contexts/src/lookupcontext.ts:50](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/lookupcontext.ts#L50)

___

### type

• **type**: *lookup* \| *autocomplete*

Type of lookup descriptor

Defined in: [packages/react-contexts/src/lookupcontext.ts:45](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/lookupcontext.ts#L45)

___

### valueMember

• `Optional` **valueMember**: *string*

Value property in fetched data items

Defined in: [packages/react-contexts/src/lookupcontext.ts:55](https://github.com/ballware/ballware-client/blob/37e08ea/packages/react-contexts/src/lookupcontext.ts#L55)
