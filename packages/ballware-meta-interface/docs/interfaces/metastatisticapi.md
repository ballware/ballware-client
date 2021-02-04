[@ballware/meta-interface](../README.md) / [Exports](../modules.md) / MetaStatisticApi

# Interface: MetaStatisticApi

Interface for statistic data operations

## Hierarchy

* **MetaStatisticApi**

## Table of contents

### Properties

- [dataForStatistic](metastatisticapi.md#dataforstatistic)
- [metadataForStatistic](metastatisticapi.md#metadataforstatistic)

## Properties

### dataForStatistic

• **dataForStatistic**: (`token`: *string*, `identifier`: *string*, `params`: *Record*<*string*, *unknown*\>) => *Promise*<*Record*<*string*, *unknown*\>[]\>

Fetch content data for statistic

**`param`** Access token required for authentication

**`param`** Unique identifier of statistic item

**`returns`** Promise containing statistic content

Defined in: [statistic.ts:442](https://github.com/frankball/ballware-meta-interface/blob/d19dcf1/src/statistic.ts#L442)

___

### metadataForStatistic

• **metadataForStatistic**: (`token`: *string*, `identifier`: *string*) => *Promise*<[*CompiledStatistic*](compiledstatistic.md)\>

Fetch metadata for statistic

**`param`** Access token required for authentication

**`param`** Unique identifier of statistic item

**`returns`** Promise containing statistic metadata

Defined in: [statistic.ts:431](https://github.com/frankball/ballware-meta-interface/blob/d19dcf1/src/statistic.ts#L431)
