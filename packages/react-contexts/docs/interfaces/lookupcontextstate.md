[@ballware/react-contexts](../README.md) / [Exports](../modules.md) / LookupContextState

# Interface: LookupContextState

Context for lookup request functionality

## Table of contents

### Properties

- [createLookups](lookupcontextstate.md#createlookups)
- [getGenericLookupByIdentifier](lookupcontextstate.md#getgenericlookupbyidentifier)
- [lookups](lookupcontextstate.md#lookups)
- [lookupsComplete](lookupcontextstate.md#lookupscomplete)

## Properties

### createLookups

• `Optional` **createLookups**: (`lookups`: [*LookupRequest*](lookuprequest.md)[]) => *void*

Request list of static required lookups in consumer

**`param`** Collection of lookup requests

#### Type declaration:

▸ (`lookups`: [*LookupRequest*](lookuprequest.md)[]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`lookups` | [*LookupRequest*](lookuprequest.md)[] |

**Returns:** *void*

Defined in: [packages/react-contexts/src/lookupcontext.ts:145](https://github.com/ballware/ballware-client/blob/88ab695/packages/react-contexts/src/lookupcontext.ts#L145)

Defined in: [packages/react-contexts/src/lookupcontext.ts:145](https://github.com/ballware/ballware-client/blob/88ab695/packages/react-contexts/src/lookupcontext.ts#L145)

___

### getGenericLookupByIdentifier

• `Optional` **getGenericLookupByIdentifier**: (`identifier`: *string*, `valueExpr`: *string*, `displayExpr`: *string*) => *undefined* \| [*LookupDescriptor*](lookupdescriptor.md)

Request additional lookup by unique identifier

**`param`** Unique global identifier of lookup

**`param`** Value property in fetched items

**`param`** Display property in fetched items

#### Type declaration:

▸ (`identifier`: *string*, `valueExpr`: *string*, `displayExpr`: *string*): *undefined* \| [*LookupDescriptor*](lookupdescriptor.md)

#### Parameters:

Name | Type |
:------ | :------ |
`identifier` | *string* |
`valueExpr` | *string* |
`displayExpr` | *string* |

**Returns:** *undefined* \| [*LookupDescriptor*](lookupdescriptor.md)

Defined in: [packages/react-contexts/src/lookupcontext.ts:153](https://github.com/ballware/ballware-client/blob/88ab695/packages/react-contexts/src/lookupcontext.ts#L153)

Defined in: [packages/react-contexts/src/lookupcontext.ts:153](https://github.com/ballware/ballware-client/blob/88ab695/packages/react-contexts/src/lookupcontext.ts#L153)

___

### lookups

• `Optional` **lookups**: *Record*<string, unknown[] \| [*LookupDescriptor*](lookupdescriptor.md) \| [*LookupCreator*](../modules.md#lookupcreator) \| [*AutocompleteCreator*](../modules.md#autocompletecreator)\>

Container for created lookups

Defined in: [packages/react-contexts/src/lookupcontext.ts:131](https://github.com/ballware/ballware-client/blob/88ab695/packages/react-contexts/src/lookupcontext.ts#L131)

___

### lookupsComplete

• `Optional` **lookupsComplete**: *boolean*

True if requested lookups are completely available

Defined in: [packages/react-contexts/src/lookupcontext.ts:139](https://github.com/ballware/ballware-client/blob/88ab695/packages/react-contexts/src/lookupcontext.ts#L139)
