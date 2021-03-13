[@ballware/meta-interface](../README.md) / [Exports](../modules.md) / CompiledStatisticCustomScripts

# Interface: CompiledStatisticCustomScripts

Custom scripts for statistic layout

## Table of contents

### Properties

- [argumentAxisCustomizeText](compiledstatisticcustomscripts.md#argumentaxiscustomizetext)

## Properties

### argumentAxisCustomizeText

• `Optional` **argumentAxisCustomizeText**: (`layout`: [*StatisticLayout*](statisticlayout.md), `value`: *unknown*, `params`: *Record*<string, unknown\>, `customParam`: *Record*<string, unknown\>, `util`: [*ScriptUtil*](scriptutil.md)) => *string*

Customize display text for argument axis label

**`param`** Statistic layout

**`param`** Current axis value

**`param`** Head params of containing page

**`param`** Prepared custom param of containing page

**`param`** Util for misc script operations

**`returns`** Display text for label

#### Type declaration:

▸ (`layout`: [*StatisticLayout*](statisticlayout.md), `value`: *unknown*, `params`: *Record*<string, unknown\>, `customParam`: *Record*<string, unknown\>, `util`: [*ScriptUtil*](scriptutil.md)): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`layout` | [*StatisticLayout*](statisticlayout.md) |
`value` | *unknown* |
`params` | *Record*<string, unknown\> |
`customParam` | *Record*<string, unknown\> |
`util` | [*ScriptUtil*](scriptutil.md) |

**Returns:** *string*

Defined in: [lib/statistic.ts:364](https://github.com/ballware/ballware-client/blob/69c8328/libs/meta-interface/src/lib/statistic.ts#L364)

Defined in: [lib/statistic.ts:364](https://github.com/ballware/ballware-client/blob/69c8328/libs/meta-interface/src/lib/statistic.ts#L364)
