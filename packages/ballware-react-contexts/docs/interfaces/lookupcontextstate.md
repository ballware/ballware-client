[@ballware/react-contexts](../README.md) / [Exports](../modules.md) / LookupContextState

# Interface: LookupContextState

Context for lookup request functionality

## Hierarchy

* **LookupContextState**

## Table of contents

### Properties

- [createLookups](lookupcontextstate.md#createlookups)
- [getGenericLookupByIdentifier](lookupcontextstate.md#getgenericlookupbyidentifier)
- [lookups](lookupcontextstate.md#lookups)
- [lookupsComplete](lookupcontextstate.md#lookupscomplete)

## Properties

### createLookups

• `Optional` **createLookups**: *undefined* \| (`lookups`: [*LookupRequest*](lookuprequest.md)[]) => *void*

Request list of static required lookups in consumer

**`param`** Collection of lookup requests

Defined in: [src/lookupcontext.ts:145](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/lookupcontext.ts#L145)

___

### getGenericLookupByIdentifier

• `Optional` **getGenericLookupByIdentifier**: *undefined* \| (`identifier`: *string*, `valueExpr`: *string*, `displayExpr`: *string*) => *undefined* \| [*LookupDescriptor*](lookupdescriptor.md)

Request additional lookup by unique identifier

**`param`** Unique global identifier of lookup

**`param`** Value property in fetched items

**`param`** Display property in fetched items

Defined in: [src/lookupcontext.ts:153](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/lookupcontext.ts#L153)

___

### lookups

• `Optional` **lookups**: *undefined* \| *Record*<*string*, *unknown*[] \| [*LookupDescriptor*](lookupdescriptor.md) \| [*LookupCreator*](../modules.md#lookupcreator) \| [*AutocompleteCreator*](../modules.md#autocompletecreator)\>

Container for created lookups

Defined in: [src/lookupcontext.ts:131](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/lookupcontext.ts#L131)

___

### lookupsComplete

• `Optional` **lookupsComplete**: *undefined* \| *boolean*

True if requested lookups are completely available

Defined in: [src/lookupcontext.ts:139](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/lookupcontext.ts#L139)
