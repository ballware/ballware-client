[@ballware/react-contexts](../README.md) / [Exports](../modules.md) / LookupRequest

# Interface: LookupRequest

Request object for requesting lookup descriptor

## Hierarchy

* **LookupRequest**

## Table of contents

### Properties

- [displayMember](lookuprequest.md#displaymember)
- [entity](lookuprequest.md#entity)
- [field](lookuprequest.md#field)
- [identifier](lookuprequest.md#identifier)
- [lookupId](lookuprequest.md#lookupid)
- [type](lookuprequest.md#type)
- [valueMember](lookuprequest.md#valuemember)

## Properties

### displayMember

• `Optional` **displayMember**: *undefined* \| *string*

Display property in fetched lookup items specific for consumer (only for lookup, lookupwithparam)

Defined in: [src/lookupcontext.ts:109](https://github.com/frankball/ballware-react-contexts/blob/6321ec4/src/lookupcontext.ts#L109)

___

### entity

• `Optional` **entity**: *undefined* \| *string*

Entity identifier (only for pickvalue)

Defined in: [src/lookupcontext.ts:114](https://github.com/frankball/ballware-react-contexts/blob/6321ec4/src/lookupcontext.ts#L114)

___

### field

• `Optional` **field**: *undefined* \| *string*

Field identifier (only for pickvalue)

Defined in: [src/lookupcontext.ts:119](https://github.com/frankball/ballware-react-contexts/blob/6321ec4/src/lookupcontext.ts#L119)

___

### identifier

• **identifier**: *string*

Unique identifier for lookup in consumer

Defined in: [src/lookupcontext.ts:94](https://github.com/frankball/ballware-react-contexts/blob/6321ec4/src/lookupcontext.ts#L94)

___

### lookupId

• `Optional` **lookupId**: *undefined* \| *string*

Unique id for lookup  in metadata

Defined in: [src/lookupcontext.ts:99](https://github.com/frankball/ballware-react-contexts/blob/6321ec4/src/lookupcontext.ts#L99)

___

### type

• **type**: *lookup* \| *autocomplete* \| *lookupwithparam* \| *pickvalue* \| *autocompletewithparam* \| *state* \| *stateallowed*

Type of requested lookup

Defined in: [src/lookupcontext.ts:82](https://github.com/frankball/ballware-react-contexts/blob/6321ec4/src/lookupcontext.ts#L82)

___

### valueMember

• `Optional` **valueMember**: *undefined* \| *string*

Value property in fetched lookup items specific for consumer (only for lookup, lookupwithparam)

Defined in: [src/lookupcontext.ts:104](https://github.com/frankball/ballware-react-contexts/blob/6321ec4/src/lookupcontext.ts#L104)
