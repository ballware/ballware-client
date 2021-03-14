[@ballware/meta-interface](README.md) / Exports

# @ballware/meta-interface

## Table of contents

### Enumerations

- [EntityRights](enums/entityrights.md)

### Interfaces

- [CompiledEntityCustomScripts](interfaces/compiledentitycustomscripts.md)
- [CompiledEntityMetadata](interfaces/compiledentitymetadata.md)
- [CompiledPageCustomScripts](interfaces/compiledpagecustomscripts.md)
- [CompiledPageData](interfaces/compiledpagedata.md)
- [CompiledStatistic](interfaces/compiledstatistic.md)
- [CompiledStatisticCustomScripts](interfaces/compiledstatisticcustomscripts.md)
- [CompiledTenant](interfaces/compiledtenant.md)
- [CrudContainerOptions](interfaces/crudcontaineroptions.md)
- [CrudItem](interfaces/cruditem.md)
- [DetailLayout](interfaces/detaillayout.md)
- [DocumentSelectEntry](interfaces/documentselectentry.md)
- [EditLayout](interfaces/editlayout.md)
- [EditLayoutItem](interfaces/editlayoutitem.md)
- [EditLayoutItemOptions](interfaces/editlayoutitemoptions.md)
- [EditUtil](interfaces/editutil.md)
- [EntityCustomFunction](interfaces/entitycustomfunction.md)
- [EntityGridOptions](interfaces/entitygridoptions.md)
- [EntityMapOptions](interfaces/entitymapoptions.md)
- [GridLayout](interfaces/gridlayout.md)
- [GridLayoutColumn](interfaces/gridlayoutcolumn.md)
- [MetaAttachmentApi](interfaces/metaattachmentapi.md)
- [MetaDocumentApi](interfaces/metadocumentapi.md)
- [MetaDocumentationApi](interfaces/metadocumentationapi.md)
- [MetaEntityApi](interfaces/metaentityapi.md)
- [MetaGenericEntityApi](interfaces/metagenericentityapi.md)
- [MetaLookupApi](interfaces/metalookupapi.md)
- [MetaPageApi](interfaces/metapageapi.md)
- [MetaPickvalueApi](interfaces/metapickvalueapi.md)
- [MetaProcessingstateApi](interfaces/metaprocessingstateapi.md)
- [MetaStatisticApi](interfaces/metastatisticapi.md)
- [MetaTenantApi](interfaces/metatenantapi.md)
- [NavigationLayout](interfaces/navigationlayout.md)
- [NavigationLayoutItem](interfaces/navigationlayoutitem.md)
- [PageLayout](interfaces/pagelayout.md)
- [PageLayoutItem](interfaces/pagelayoutitem.md)
- [PageLayoutItemOptions](interfaces/pagelayoutitemoptions.md)
- [PageToolbarItem](interfaces/pagetoolbaritem.md)
- [Rights](interfaces/rights.md)
- [ScriptActions](interfaces/scriptactions.md)
- [ScriptUtil](interfaces/scriptutil.md)
- [StatisticChartOptions](interfaces/statisticchartoptions.md)
- [StatisticLayout](interfaces/statisticlayout.md)
- [StatisticMapOptions](interfaces/statisticmapoptions.md)
- [StatisticOptions](interfaces/statisticoptions.md)
- [StatisticPivotOptions](interfaces/statisticpivotoptions.md)
- [TabItemOptions](interfaces/tabitemoptions.md)

### Type aliases

- [ExtendedRightsCheckFunc](modules.md#extendedrightscheckfunc)
- [QueryParams](modules.md#queryparams)
- [ValueType](modules.md#valuetype)

### Functions

- [hasAnyRight](modules.md#hasanyright)
- [hasRight](modules.md#hasright)

## Type aliases

### ExtendedRightsCheckFunc

Ƭ **ExtendedRightsCheckFunc**: (`rights`: [*Rights*](interfaces/rights.md), `entity`: *string*, `right`: [*EntityRights*](enums/entityrights.md) \| *string*, `param`: *Record*<string, unknown\> \| *undefined*, `result`: *boolean*) => *boolean*

Definition for extended rights check function for custom script right checks

**`param`** Container with current user rights

**`param`** Requested business object type

**`param`** Requested right

**`param`** Extra param for custom rights check

**`param`** Rights check result from default function

**`returns`** true if access is allowed, false if not

#### Type declaration:

▸ (`rights`: [*Rights*](interfaces/rights.md), `entity`: *string*, `right`: [*EntityRights*](enums/entityrights.md) \| *string*, `param`: *Record*<string, unknown\> \| *undefined*, `result`: *boolean*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`rights` | [*Rights*](interfaces/rights.md) |
`entity` | *string* |
`right` | [*EntityRights*](enums/entityrights.md) \| *string* |
`param` | *Record*<string, unknown\> \| *undefined* |
`result` | *boolean* |

**Returns:** *boolean*

Defined in: [rights.ts:49](https://github.com/ballware/ballware-client/blob/c28ad0b/packages/meta-interface/src/rights.ts#L49)

___

### QueryParams

Ƭ **QueryParams**: *Record*<string, string \| number \| boolean \| (string \| number \| boolean)[]\>

Generic data container type containing parameter values for data queries

Defined in: [common.ts:11](https://github.com/ballware/ballware-client/blob/c28ad0b/packages/meta-interface/src/common.ts#L11)

___

### ValueType

Ƭ **ValueType**: *undefined* \| *Record*<string, unknown\> \| *string* \| *number* \| *boolean* \| Date \| (*string* \| *number* \| *Record*<string, unknown\>)[] \| { `lat`: *number* ; `lng`: *number*  }

Possible value types for business object properties

Defined in: [cruditem.ts:11](https://github.com/ballware/ballware-client/blob/c28ad0b/packages/meta-interface/src/cruditem.ts#L11)

## Functions

### hasAnyRight

▸ **hasAnyRight**(`rights`: [*Rights*](interfaces/rights.md), `application`: *string*, `entity`: *string*, `right`: [*EntityRights*](enums/entityrights.md)): *boolean*

Function for checking any access right for business object operations

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`rights` | [*Rights*](interfaces/rights.md) | Container with current user rights   |
`application` | *string* | Application scope the business object is nested in   |
`entity` | *string* | Business object type identifier   |
`right` | [*EntityRights*](enums/entityrights.md) | Requested right   |

**Returns:** *boolean*

true if access is allowed, false if not

Defined in: [rights.ts:95](https://github.com/ballware/ballware-client/blob/c28ad0b/packages/meta-interface/src/rights.ts#L95)

___

### hasRight

▸ **hasRight**(`rights`: [*Rights*](interfaces/rights.md), `application`: *string*, `entity`: *string*, `right`: [*EntityRights*](enums/entityrights.md) \| *string*, `extendedRightCheckFunc?`: [*ExtendedRightsCheckFunc*](modules.md#extendedrightscheckfunc), `param?`: *Record*<string, unknown\>): *boolean*

Function for checking specific access right for business object operations

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`rights` | [*Rights*](interfaces/rights.md) | Container with current user rights   |
`application` | *string* | Application scope the business object is nested in   |
`entity` | *string* | Business object type identifier   |
`right` | [*EntityRights*](enums/entityrights.md) \| *string* | Requested right   |
`extendedRightCheckFunc?` | [*ExtendedRightsCheckFunc*](modules.md#extendedrightscheckfunc) | Extended rights check function   |
`param?` | *Record*<string, unknown\> | Extra param for custom rights check   |

**Returns:** *boolean*

true if access is allowed, false if not

Defined in: [rights.ts:68](https://github.com/ballware/ballware-client/blob/c28ad0b/packages/meta-interface/src/rights.ts#L68)
