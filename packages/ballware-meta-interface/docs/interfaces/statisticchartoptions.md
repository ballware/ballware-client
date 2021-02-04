[@ballware/meta-interface](../README.md) / [Exports](../modules.md) / StatisticChartOptions

# Interface: StatisticChartOptions

Options for line/bar chart

## Hierarchy

* **StatisticChartOptions**

## Table of contents

### Properties

- [argumentAxis](statisticchartoptions.md#argumentaxis)
- [argumentField](statisticchartoptions.md#argumentfield)
- [legend](statisticchartoptions.md#legend)
- [rotated](statisticchartoptions.md#rotated)
- [series](statisticchartoptions.md#series)
- [valueAxis](statisticchartoptions.md#valueaxis)

## Properties

### argumentAxis

• `Optional` **argumentAxis**: *undefined* \| { `argumentType`: *string* \| *datetime* \| *numeric* ; `lines?`: *undefined* \| { `color`: *string* ; `dashStyle`: *dash* \| *dot* \| *longDash* \| *solid* ; `labelText?`: *undefined* \| *string* ; `value`: *number*  }[] ; `tickIntervall?`: *undefined* \| *number* \| *object* \| *day* \| *hour* \| *millisecond* \| *minute* \| *month* \| *quarter* \| *second* \| *week* \| *year* ; `visualRangeFrom?`: *undefined* \| *number* ; `visualRangeTo?`: *undefined* \| *number*  }

Options for argument axis

Defined in: [statistic.ts:27](https://github.com/frankball/ballware-meta-interface/blob/6b9dc3f/src/statistic.ts#L27)

___

### argumentField

• **argumentField**: *string*

Property in data containing argument value

Defined in: [statistic.ts:22](https://github.com/frankball/ballware-meta-interface/blob/6b9dc3f/src/statistic.ts#L22)

___

### legend

• `Optional` **legend**: *undefined* \| { `horizontalAlignment?`: *undefined* \| *left* \| *right* \| *center* ; `title?`: *undefined* \| *string* ; `verticalAlignment?`: *undefined* \| *bottom* \| *top*  }

Options for legend

Defined in: [statistic.ts:117](https://github.com/frankball/ballware-meta-interface/blob/6b9dc3f/src/statistic.ts#L117)

___

### rotated

• `Optional` **rotated**: *undefined* \| *boolean*

Horizontal value bars

Defined in: [statistic.ts:17](https://github.com/frankball/ballware-meta-interface/blob/6b9dc3f/src/statistic.ts#L17)

___

### series

• **series**: { `format?`: *undefined* \| *day* \| *hour* \| *millisecond* \| *minute* \| *month* \| *quarter* \| *second* \| *year* \| *billions* \| *currency* \| *decimal* \| *exponential* \| *fixedPoint* \| *largeNumber* \| *longDate* \| *longTime* \| *millions* \| *monthAndDay* \| *monthAndYear* \| *percent* \| *quarterAndYear* \| *shortDate* \| *shortTime* \| *thousands* \| *trillions* \| *dayOfWeek* \| *longDateLongTime* \| *shortDateShortTime* ; `labelVisible?`: *undefined* \| *boolean* ; `name`: *string* ; `precision?`: *undefined* \| *number* ; `type`: *bar* \| *line* ; `valueField`: *string* ; `visible?`: *undefined* \| *boolean*  }[]

Series of data

Defined in: [statistic.ts:136](https://github.com/frankball/ballware-meta-interface/blob/6b9dc3f/src/statistic.ts#L136)

___

### valueAxis

• `Optional` **valueAxis**: *undefined* \| { `lines?`: *undefined* \| { `color`: *string* ; `dashStyle`: *dash* \| *dot* \| *longDash* \| *solid* ; `labelText?`: *undefined* \| *string* ; `value`: *number*  }[]  }

Options for value axis

Defined in: [statistic.ts:88](https://github.com/frankball/ballware-meta-interface/blob/6b9dc3f/src/statistic.ts#L88)
