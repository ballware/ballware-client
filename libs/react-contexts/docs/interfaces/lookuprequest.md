[@ballware/react-contexts](../README.md) / [Exports](../modules.md) / LookupRequest

# Interface: LookupRequest

Request object for requesting lookup descriptor

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

• `Optional` **displayMember**: *string*

Display property in fetched lookup items specific for consumer (only for lookup, lookupwithparam)

Defined in: [libs/react-contexts/src/lib/lookupcontext.ts:111](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-contexts/src/lib/lookupcontext.ts#L111)

___

### entity

• `Optional` **entity**: *string*

Entity identifier (only for pickvalue)

Defined in: [libs/react-contexts/src/lib/lookupcontext.ts:116](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-contexts/src/lib/lookupcontext.ts#L116)

___

### field

• `Optional` **field**: *string*

Field identifier (only for pickvalue)

Defined in: [libs/react-contexts/src/lib/lookupcontext.ts:121](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-contexts/src/lib/lookupcontext.ts#L121)

___

### identifier

• **identifier**: *string*

Unique identifier for lookup in consumer

Defined in: [libs/react-contexts/src/lib/lookupcontext.ts:96](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-contexts/src/lib/lookupcontext.ts#L96)

___

### lookupId

• `Optional` **lookupId**: *string*

Unique id for lookup  in metadata

Defined in: [libs/react-contexts/src/lib/lookupcontext.ts:101](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-contexts/src/lib/lookupcontext.ts#L101)

___

### type

• **type**: *lookup* \| *autocomplete* \| *lookupwithparam* \| *pickvalue* \| *autocompletewithparam* \| *state* \| *stateallowed*

Type of requested lookup

Defined in: [libs/react-contexts/src/lib/lookupcontext.ts:84](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-contexts/src/lib/lookupcontext.ts#L84)

___

### valueMember

• `Optional` **valueMember**: *string*

Value property in fetched lookup items specific for consumer (only for lookup, lookupwithparam)

Defined in: [libs/react-contexts/src/lib/lookupcontext.ts:106](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-contexts/src/lib/lookupcontext.ts#L106)
