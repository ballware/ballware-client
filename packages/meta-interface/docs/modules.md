[@ballware/meta-interface](README.md) / Exports

# @ballware/meta-interface

## Table of contents

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
- [ExportFunctionOptions](interfaces/exportfunctionoptions.md)
- [GridLayout](interfaces/gridlayout.md)
- [GridLayoutColumn](interfaces/gridlayoutcolumn.md)
- [ImportFunctionOptions](interfaces/importfunctionoptions.md)
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
- [ScriptActions](interfaces/scriptactions.md)
- [ScriptUtil](interfaces/scriptutil.md)
- [StatisticChartOptions](interfaces/statisticchartoptions.md)
- [StatisticLayout](interfaces/statisticlayout.md)
- [StatisticMapOptions](interfaces/statisticmapoptions.md)
- [StatisticOptions](interfaces/statisticoptions.md)
- [StatisticPivotOptions](interfaces/statisticpivotoptions.md)
- [TabItemOptions](interfaces/tabitemoptions.md)

### Type aliases

- [QueryParams](modules.md#queryparams)
- [RightsCheckFunc](modules.md#rightscheckfunc)
- [ValueType](modules.md#valuetype)

## Type aliases

### QueryParams

Ƭ **QueryParams**: *Record*<string, string \| number \| boolean \| (string \| number \| boolean)[]\>

Generic data container type containing parameter values for data queries

Defined in: [common.ts:11](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/common.ts#L11)

___

### RightsCheckFunc

Ƭ **RightsCheckFunc**: (`userinfo`: *Record*<string, unknown\>, `application`: *string*, `entity`: *string*, `readOnly`: *boolean*, `right`: *string*, `param`: *Record*<string, unknown\> \| *undefined*, `result`: *boolean*) => *boolean*

Definition for extended rights check function for custom script right checks

**`param`** Container with current user rights

**`param`** Requested business object application scope

**`param`** Requested business object type

**`param`** Object container in explicit readonly mode

**`param`** Requested right

**`param`** Extra param for custom rights check

**`param`** Rights check result from default function

**`returns`** true if access is allowed, false if not

#### Type declaration:

▸ (`userinfo`: *Record*<string, unknown\>, `application`: *string*, `entity`: *string*, `readOnly`: *boolean*, `right`: *string*, `param`: *Record*<string, unknown\> \| *undefined*, `result`: *boolean*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`userinfo` | *Record*<string, unknown\> |
`application` | *string* |
`entity` | *string* |
`readOnly` | *boolean* |
`right` | *string* |
`param` | *Record*<string, unknown\> \| *undefined* |
`result` | *boolean* |

**Returns:** *boolean*

Defined in: [rights.ts:20](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/rights.ts#L20)

___

### ValueType

Ƭ **ValueType**: *undefined* \| *Record*<string, unknown\> \| *string* \| *number* \| *boolean* \| Date \| (*string* \| *number* \| *Record*<string, unknown\>)[] \| { `lat`: *number* ; `lng`: *number*  }

Possible value types for business object properties

Defined in: [cruditem.ts:11](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/cruditem.ts#L11)
