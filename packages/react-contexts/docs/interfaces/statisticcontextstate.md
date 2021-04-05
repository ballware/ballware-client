[@ballware/react-contexts](../README.md) / [Exports](../modules.md) / StatisticContextState

# Interface: StatisticContextState

Context for providing statistic item metadata and data

## Table of contents

### Properties

- [argumentAxisCustomizeText](statisticcontextstate.md#argumentaxiscustomizetext)
- [data](statisticcontextstate.md#data)
- [identifier](statisticcontextstate.md#identifier)
- [layout](statisticcontextstate.md#layout)
- [name](statisticcontextstate.md#name)
- [params](statisticcontextstate.md#params)

## Properties

### argumentAxisCustomizeText

• `Optional` **argumentAxisCustomizeText**: (`value`: *unknown*) => *undefined* \| *string*

Customize display text for argument axis labels

**`param`** Argument value

**`returns`** Modified display text, if applicable

#### Type declaration:

▸ (`value`: *unknown*): *undefined* \| *string*

#### Parameters:

Name | Type |
:------ | :------ |
`value` | *unknown* |

**Returns:** *undefined* \| *string*

Defined in: [packages/react-contexts/src/statisticcontext.ts:45](https://github.com/ballware/ballware-client/blob/fc69a2b/packages/react-contexts/src/statisticcontext.ts#L45)

Defined in: [packages/react-contexts/src/statisticcontext.ts:45](https://github.com/ballware/ballware-client/blob/fc69a2b/packages/react-contexts/src/statisticcontext.ts#L45)

___

### data

• `Optional` **data**: *Record*<string, unknown\>[]

Fetched data for statistic

Defined in: [packages/react-contexts/src/statisticcontext.ts:38](https://github.com/ballware/ballware-client/blob/fc69a2b/packages/react-contexts/src/statisticcontext.ts#L38)

___

### identifier

• `Optional` **identifier**: *string*

Unique identifier of statistic item

Defined in: [packages/react-contexts/src/statisticcontext.ts:18](https://github.com/ballware/ballware-client/blob/fc69a2b/packages/react-contexts/src/statisticcontext.ts#L18)

___

### layout

• `Optional` **layout**: StatisticLayout

Layout for displaying statistic item

Defined in: [packages/react-contexts/src/statisticcontext.ts:33](https://github.com/ballware/ballware-client/blob/fc69a2b/packages/react-contexts/src/statisticcontext.ts#L33)

___

### name

• `Optional` **name**: *string*

Display name of statistic item

Defined in: [packages/react-contexts/src/statisticcontext.ts:23](https://github.com/ballware/ballware-client/blob/fc69a2b/packages/react-contexts/src/statisticcontext.ts#L23)

___

### params

• `Optional` **params**: QueryParams

Additional query params from containing element (page for example)

Defined in: [packages/react-contexts/src/statisticcontext.ts:28](https://github.com/ballware/ballware-client/blob/fc69a2b/packages/react-contexts/src/statisticcontext.ts#L28)
