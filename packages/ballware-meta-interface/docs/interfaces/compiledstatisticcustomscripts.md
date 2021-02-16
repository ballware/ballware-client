[@ballware/meta-interface](../README.md) / [Exports](../modules.md) / CompiledStatisticCustomScripts

# Interface: CompiledStatisticCustomScripts

Custom scripts for statistic layout

## Hierarchy

* **CompiledStatisticCustomScripts**

## Table of contents

### Properties

- [argumentAxisCustomizeText](compiledstatisticcustomscripts.md#argumentaxiscustomizetext)

## Properties

### argumentAxisCustomizeText

• `Optional` **argumentAxisCustomizeText**: *undefined* \| (`layout`: [*StatisticLayout*](statisticlayout.md), `value`: *unknown*, `params`: *Record*<*string*, *unknown*\>, `customParam`: *Record*<*string*, *unknown*\>, `util`: [*ScriptUtil*](scriptutil.md)) => *string*

Customize display text for argument axis label

**`param`** Statistic layout

**`param`** Current axis value

**`param`** Head params of containing page

**`param`** Prepared custom param of containing page

**`param`** Util for misc script operations

**`returns`** Display text for label

Defined in: [statistic.ts:364](https://github.com/frankball/ballware-meta-interface/blob/08dd5e4/src/statistic.ts#L364)
