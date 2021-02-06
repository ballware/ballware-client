[@ballware/meta-interface](../README.md) / [Exports](../modules.md) / CompiledStatistic

# Interface: CompiledStatistic

Compiled metadta for statistic container

## Hierarchy

* **CompiledStatistic**

## Table of contents

### Properties

- [customScripts](compiledstatistic.md#customscripts)
- [identifier](compiledstatistic.md#identifier)
- [layout](compiledstatistic.md#layout)
- [mappingScript](compiledstatistic.md#mappingscript)
- [name](compiledstatistic.md#name)

## Properties

### customScripts

• `Optional` **customScripts**: *undefined* \| [*CompiledStatisticCustomScripts*](compiledstatisticcustomscripts.md)

Compiled custom scripts for statistic layout

Defined in: [statistic.ts:419](https://github.com/frankball/ballware-meta-interface/blob/157bdb2/src/statistic.ts#L419)

___

### identifier

• **identifier**: *string*

Unique identifier of statistic container

Defined in: [statistic.ts:381](https://github.com/frankball/ballware-meta-interface/blob/157bdb2/src/statistic.ts#L381)

___

### layout

• `Optional` **layout**: *undefined* \| [*StatisticLayout*](statisticlayout.md)

Layout of statistic container

Defined in: [statistic.ts:391](https://github.com/frankball/ballware-meta-interface/blob/157bdb2/src/statistic.ts#L391)

___

### mappingScript

• `Optional` **mappingScript**: *undefined* \| (`data`: *Record*<*string*, *unknown*\>[], `layout`: [*StatisticLayout*](statisticlayout.md), `customParam`: *Record*<*string*, *unknown*\>, `params`: *Record*<*string*, *unknown*\>, `lookups`: *Record*<*string*, *unknown*\>, `util`: [*ScriptUtil*](scriptutil.md), `callback`: (`layout`: [*StatisticLayout*](statisticlayout.md), `data`: *Record*<*string*, *unknown*\>[]) => *void*) => *void*

Mapping script to prepare fetched data for statistic display

**`param`** Fetched raw data

**`param`** Layout for display statistic

**`param`** Custom param prepared by containing page

**`param`** Head params by containing page

**`param`** Lookups prepared by containing page

**`param`** Util for misc operations in scripts

**`param`** Callback executed after preparation of layout and data

Defined in: [statistic.ts:403](https://github.com/frankball/ballware-meta-interface/blob/157bdb2/src/statistic.ts#L403)

___

### name

• **name**: *string*

Display name of statistic container

Defined in: [statistic.ts:386](https://github.com/frankball/ballware-meta-interface/blob/157bdb2/src/statistic.ts#L386)
