[@ballware/meta-interface](../README.md) / [Exports](../modules.md) / MetaStatisticApi

# Interface: MetaStatisticApi

Interface for statistic data operations

## Table of contents

### Properties

- [dataForStatistic](metastatisticapi.md#dataforstatistic)
- [metadataForStatistic](metastatisticapi.md#metadataforstatistic)

## Properties

### dataForStatistic

• **dataForStatistic**: (`token`: *string*, `identifier`: *string*, `params?`: [*QueryParams*](../modules.md#queryparams)) => *Promise*<Record<string, unknown\>[]\>

Fetch content data for statistic

**`param`** Access token required for authentication

**`param`** Unique identifier of statistic item

**`param`** Optional parameters for query

**`returns`** Promise containing statistic content

#### Type declaration:

▸ (`token`: *string*, `identifier`: *string*, `params?`: [*QueryParams*](../modules.md#queryparams)): *Promise*<Record<string, unknown\>[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`token` | *string* |
`identifier` | *string* |
`params?` | [*QueryParams*](../modules.md#queryparams) |

**Returns:** *Promise*<Record<string, unknown\>[]\>

Defined in: [statistic.ts:443](https://github.com/ballware/ballware-client/blob/88ab695/packages/meta-interface/src/statistic.ts#L443)

Defined in: [statistic.ts:443](https://github.com/ballware/ballware-client/blob/88ab695/packages/meta-interface/src/statistic.ts#L443)

___

### metadataForStatistic

• **metadataForStatistic**: (`token`: *string*, `identifier`: *string*) => *Promise*<[*CompiledStatistic*](compiledstatistic.md)\>

Fetch metadata for statistic

**`param`** Access token required for authentication

**`param`** Unique identifier of statistic item

**`returns`** Promise containing statistic metadata

#### Type declaration:

▸ (`token`: *string*, `identifier`: *string*): *Promise*<[*CompiledStatistic*](compiledstatistic.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`token` | *string* |
`identifier` | *string* |

**Returns:** *Promise*<[*CompiledStatistic*](compiledstatistic.md)\>

Defined in: [statistic.ts:431](https://github.com/ballware/ballware-client/blob/88ab695/packages/meta-interface/src/statistic.ts#L431)

Defined in: [statistic.ts:431](https://github.com/ballware/ballware-client/blob/88ab695/packages/meta-interface/src/statistic.ts#L431)
