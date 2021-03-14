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

Defined in: [src/lookupcontext.ts:111](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/lookupcontext.ts#L111)

___

### entity

• `Optional` **entity**: *undefined* \| *string*

Entity identifier (only for pickvalue)

Defined in: [src/lookupcontext.ts:116](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/lookupcontext.ts#L116)

___

### field

• `Optional` **field**: *undefined* \| *string*

Field identifier (only for pickvalue)

Defined in: [src/lookupcontext.ts:121](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/lookupcontext.ts#L121)

___

### identifier

• **identifier**: *string*

Unique identifier for lookup in consumer

Defined in: [src/lookupcontext.ts:96](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/lookupcontext.ts#L96)

___

### lookupId

• `Optional` **lookupId**: *undefined* \| *string*

Unique id for lookup  in metadata

Defined in: [src/lookupcontext.ts:101](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/lookupcontext.ts#L101)

___

### type

• **type**: *lookup* \| *autocomplete* \| *lookupwithparam* \| *pickvalue* \| *autocompletewithparam* \| *state* \| *stateallowed*

Type of requested lookup

Defined in: [src/lookupcontext.ts:84](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/lookupcontext.ts#L84)

___

### valueMember

• `Optional` **valueMember**: *undefined* \| *string*

Value property in fetched lookup items specific for consumer (only for lookup, lookupwithparam)

Defined in: [src/lookupcontext.ts:106](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/lookupcontext.ts#L106)
