[@ballware/meta-interface](../README.md) / [Exports](../modules.md) / StatisticChartOptions

# Interface: StatisticChartOptions

Options for line/bar chart

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

• `Optional` **argumentAxis**: *object*

Options for argument axis

#### Type declaration:

Name | Type | Description |
:------ | :------ | :------ |
`argumentType` | *string* \| *datetime* \| *numeric* | Data type of argument values   |
`lines`? | { `color`: *string* ; `dashStyle`: *dash* \| *dot* \| *longDash* \| *solid* ; `labelText?`: *string* ; `value`: *number*  }[] | Define constant lines on argument axis in chart   |
`tickInterval`? | *object* | Options for setting tick interval   |
`tickInterval.days`? | *any* | - |
`tickInterval.hours`? | *any* | - |
`tickInterval.milliseconds`? | *any* | - |
`tickInterval.minutes`? | *any* | - |
`tickInterval.months`? | *any* | - |
`tickInterval.quarters`? | *any* | - |
`tickInterval.seconds`? | *any* | - |
`tickInterval.weeks`? | *any* | - |
`tickInterval.years`? | *any* | - |
`visualRangeFrom`? | *number* | Start value of visual range displayed   |
`visualRangeTo`? | *number* | End value of visual range displayed   |

Defined in: lib/statistic.ts:28

___

### argumentField

• **argumentField**: *string*

Property in data containing argument value

Defined in: lib/statistic.ts:23

___

### legend

• `Optional` **legend**: *object*

Options for legend

#### Type declaration:

Name | Type | Description |
:------ | :------ | :------ |
`horizontalAlignment`? | *left* \| *right* \| *center* | Horizontal alignment of legend   |
`title`? | *string* | Optional title text in legend   |
`verticalAlignment`? | *bottom* \| *top* | Vertical alignment of legend   |

Defined in: lib/statistic.ts:117

___

### rotated

• `Optional` **rotated**: *boolean*

Horizontal value bars

Defined in: lib/statistic.ts:18

___

### series

• **series**: { `format?`: *billions* \| *currency* \| *day* \| *decimal* \| *exponential* \| *fixedPoint* \| *largeNumber* \| *longDate* \| *longTime* \| *millions* \| *millisecond* \| *month* \| *monthAndDay* \| *monthAndYear* \| *percent* \| *quarter* \| *quarterAndYear* \| *shortDate* \| *shortTime* \| *thousands* \| *trillions* \| *year* \| *dayOfWeek* \| *hour* \| *longDateLongTime* \| *minute* \| *second* \| *shortDateShortTime* ; `labelVisible?`: *boolean* ; `name`: *string* ; `precision?`: *number* ; `type`: *bar* \| *line* ; `valueField`: *string* ; `visible?`: *boolean*  }[]

Series of data

Defined in: lib/statistic.ts:136

___

### valueAxis

• `Optional` **valueAxis**: *object*

Options for value axis

#### Type declaration:

Name | Type | Description |
:------ | :------ | :------ |
`lines`? | { `color`: *string* ; `dashStyle`: *dash* \| *dot* \| *longDash* \| *solid* ; `labelText?`: *string* ; `value`: *number*  }[] | Define constant lines on value axis in chart   |

Defined in: lib/statistic.ts:88
