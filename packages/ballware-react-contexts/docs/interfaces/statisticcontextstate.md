[@ballware/react-contexts](../README.md) / [Exports](../modules.md) / StatisticContextState

# Interface: StatisticContextState

Context for providing statistic item metadata and data

## Hierarchy

* **StatisticContextState**

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

• `Optional` **argumentAxisCustomizeText**: *undefined* \| (`value`: *unknown*) => *undefined* \| *string*

Customize display text for argument axis labels

**`param`** Argument value

**`returns`** Modified display text, if applicable

Defined in: [src/statisticcontext.ts:45](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/statisticcontext.ts#L45)

___

### data

• `Optional` **data**: *undefined* \| *Record*<*string*, *unknown*\>[]

Fetched data for statistic

Defined in: [src/statisticcontext.ts:38](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/statisticcontext.ts#L38)

___

### identifier

• `Optional` **identifier**: *undefined* \| *string*

Unique identifier of statistic item

Defined in: [src/statisticcontext.ts:18](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/statisticcontext.ts#L18)

___

### layout

• `Optional` **layout**: *undefined* \| StatisticLayout

Layout for displaying statistic item

Defined in: [src/statisticcontext.ts:33](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/statisticcontext.ts#L33)

___

### name

• `Optional` **name**: *undefined* \| *string*

Display name of statistic item

Defined in: [src/statisticcontext.ts:23](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/statisticcontext.ts#L23)

___

### params

• `Optional` **params**: *undefined* \| *Record*<*string*, *string* \| *number* \| *boolean* \| (*string* \| *number* \| *boolean*)[]\>

Additional query params from containing element (page for example)

Defined in: [src/statisticcontext.ts:28](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/statisticcontext.ts#L28)
