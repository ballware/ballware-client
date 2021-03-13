[@ballware/meta-interface](../README.md) / [Exports](../modules.md) / StatisticPivotOptions

# Interface: StatisticPivotOptions

Options for pivot grid

## Table of contents

### Properties

- [fields](statisticpivotoptions.md#fields)
- [showRowGrandTotals](statisticpivotoptions.md#showrowgrandtotals)
- [showRowTotals](statisticpivotoptions.md#showrowtotals)

## Properties

### fields

• **fields**: { `area?`: *row* \| *column* \| *data* ; `caption`: *string* ; `dataField`: *string* ; `dataType?`: *string* \| *number* \| *date* ; `expanded?`: *boolean* ; `format?`: *billions* \| *currency* \| *day* \| *decimal* \| *exponential* \| *fixedPoint* \| *largeNumber* \| *longDate* \| *longTime* \| *millions* \| *millisecond* \| *month* \| *monthAndDay* \| *monthAndYear* \| *percent* \| *quarter* \| *quarterAndYear* \| *shortDate* \| *shortTime* \| *thousands* \| *trillions* \| *year* \| *dayOfWeek* \| *hour* \| *longDateLongTime* \| *minute* \| *second* \| *shortDateShortTime* ; `groupInterval?`: *day* \| *month* \| *quarter* \| *year* \| *dayOfWeek* ; `precision?`: *number* ; `showGrandTotals?`: *boolean* ; `showTotals?`: *boolean* ; `summaryType?`: *avg* \| *count* \| *custom* \| *max* \| *min* \| *sum* ; `width?`: *number*  }[]

List of pivot fields

Defined in: [lib/statistic.ts:234](https://github.com/ballware/ballware-client/blob/69c8328/libs/meta-interface/src/lib/statistic.ts#L234)

___

### showRowGrandTotals

• `Optional` **showRowGrandTotals**: *boolean*

Show summary values of entire column

Defined in: [lib/statistic.ts:229](https://github.com/ballware/ballware-client/blob/69c8328/libs/meta-interface/src/lib/statistic.ts#L229)

___

### showRowTotals

• `Optional` **showRowTotals**: *boolean*

Show summary values of hierarchy levels

Defined in: [lib/statistic.ts:224](https://github.com/ballware/ballware-client/blob/69c8328/libs/meta-interface/src/lib/statistic.ts#L224)
