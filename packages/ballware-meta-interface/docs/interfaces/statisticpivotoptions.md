[@ballware/meta-interface](../README.md) / [Exports](../modules.md) / StatisticPivotOptions

# Interface: StatisticPivotOptions

Options for pivot grid

## Hierarchy

* **StatisticPivotOptions**

## Table of contents

### Properties

- [fields](statisticpivotoptions.md#fields)
- [showRowGrandTotals](statisticpivotoptions.md#showrowgrandtotals)
- [showRowTotals](statisticpivotoptions.md#showrowtotals)

## Properties

### fields

• **fields**: { `area?`: *undefined* \| *row* \| *column* \| *data* ; `caption`: *string* ; `dataField`: *string* ; `dataType?`: *undefined* \| *string* \| *number* \| *date* ; `expanded?`: *undefined* \| *boolean* ; `format?`: *undefined* \| *day* \| *hour* \| *millisecond* \| *minute* \| *month* \| *quarter* \| *second* \| *year* \| *billions* \| *currency* \| *decimal* \| *exponential* \| *fixedPoint* \| *largeNumber* \| *longDate* \| *longTime* \| *millions* \| *monthAndDay* \| *monthAndYear* \| *percent* \| *quarterAndYear* \| *shortDate* \| *shortTime* \| *thousands* \| *trillions* \| *dayOfWeek* \| *longDateLongTime* \| *shortDateShortTime* ; `groupInterval?`: *undefined* \| *day* \| *month* \| *quarter* \| *year* \| *dayOfWeek* ; `precision?`: *undefined* \| *number* ; `showGrandTotals?`: *undefined* \| *boolean* ; `showTotals?`: *undefined* \| *boolean* ; `summaryType?`: *undefined* \| *avg* \| *count* \| *custom* \| *max* \| *min* \| *sum* ; `width?`: *undefined* \| *number*  }[]

List of pivot fields

Defined in: [statistic.ts:235](https://github.com/frankball/ballware-meta-interface/blob/157bdb2/src/statistic.ts#L235)

___

### showRowGrandTotals

• `Optional` **showRowGrandTotals**: *undefined* \| *boolean*

Show summary values of entire column

Defined in: [statistic.ts:230](https://github.com/frankball/ballware-meta-interface/blob/157bdb2/src/statistic.ts#L230)

___

### showRowTotals

• `Optional` **showRowTotals**: *undefined* \| *boolean*

Show summary values of hierarchy levels

Defined in: [statistic.ts:225](https://github.com/frankball/ballware-meta-interface/blob/157bdb2/src/statistic.ts#L225)
