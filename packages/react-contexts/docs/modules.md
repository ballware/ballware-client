[@ballware/react-contexts](README.md) / Exports

# @ballware/react-contexts

## Table of contents

### Enumerations

- [EditModes](enums/editmodes.md)

### Interfaces

- [AttachmentContextState](interfaces/attachmentcontextstate.md)
- [AutocompleteStoreDescriptor](interfaces/autocompletestoredescriptor.md)
- [CrudContextState](interfaces/crudcontextstate.md)
- [EditContextState](interfaces/editcontextstate.md)
- [LookupContextState](interfaces/lookupcontextstate.md)
- [LookupDescriptor](interfaces/lookupdescriptor.md)
- [LookupRequest](interfaces/lookuprequest.md)
- [LookupStoreDescriptor](interfaces/lookupstoredescriptor.md)
- [MetaContextState](interfaces/metacontextstate.md)
- [NotificationContextState](interfaces/notificationcontextstate.md)
- [NotificationDisplayContextState](interfaces/notificationdisplaycontextstate.md)
- [PageContextState](interfaces/pagecontextstate.md)
- [PersistedRightsState](interfaces/persistedrightsstate.md)
- [ProviderFactoryContextState](interfaces/providerfactorycontextstate.md)
- [RightsContextState](interfaces/rightscontextstate.md)
- [SettingsContextState](interfaces/settingscontextstate.md)
- [StatisticContextState](interfaces/statisticcontextstate.md)
- [TenantContextState](interfaces/tenantcontextstate.md)

### Type aliases

- [AutocompleteCreator](modules.md#autocompletecreator)
- [LookupCreator](modules.md#lookupcreator)

### Variables

- [AttachmentContext](modules.md#attachmentcontext)
- [CrudContext](modules.md#crudcontext)
- [DefaultEditFunction](modules.md#defaulteditfunction)
- [EditContext](modules.md#editcontext)
- [LookupContext](modules.md#lookupcontext)
- [MetaContext](modules.md#metacontext)
- [NotificationContext](modules.md#notificationcontext)
- [NotificationDisplayContext](modules.md#notificationdisplaycontext)
- [PageContext](modules.md#pagecontext)
- [ProviderFactoryContext](modules.md#providerfactorycontext)
- [RightsContext](modules.md#rightscontext)
- [SettingsContext](modules.md#settingscontext)
- [StatisticContext](modules.md#statisticcontext)
- [TenantContext](modules.md#tenantcontext)

## Type aliases

### AutocompleteCreator

Ƭ **AutocompleteCreator**: (`param`: *string*) => [*AutocompleteStoreDescriptor*](interfaces/autocompletestoredescriptor.md)

Creator for getting autocomplete descriptor with additional query param

**`param`** Param attached to autocomplete query

#### Type declaration:

▸ (`param`: *string*): [*AutocompleteStoreDescriptor*](interfaces/autocompletestoredescriptor.md)

#### Parameters:

Name | Type |
:------ | :------ |
`param` | *string* |

**Returns:** [*AutocompleteStoreDescriptor*](interfaces/autocompletestoredescriptor.md)

Defined in: [packages/react-contexts/src/lookupcontext.ts:73](https://github.com/ballware/ballware-client/blob/d7ee5ae/packages/react-contexts/src/lookupcontext.ts#L73)

___

### LookupCreator

Ƭ **LookupCreator**: (`param`: *string* \| *string*[]) => [*LookupDescriptor*](interfaces/lookupdescriptor.md)

Creator for getting lookup descriptor with additional query param

**`param`** Param attached to lookup query

#### Type declaration:

▸ (`param`: *string* \| *string*[]): [*LookupDescriptor*](interfaces/lookupdescriptor.md)

#### Parameters:

Name | Type |
:------ | :------ |
`param` | *string* \| *string*[] |

**Returns:** [*LookupDescriptor*](interfaces/lookupdescriptor.md)

Defined in: [packages/react-contexts/src/lookupcontext.ts:67](https://github.com/ballware/ballware-client/blob/d7ee5ae/packages/react-contexts/src/lookupcontext.ts#L67)

## Variables

### AttachmentContext

• `Const` **AttachmentContext**: *Context*<[*AttachmentContextState*](interfaces/attachmentcontextstate.md)\>

Defined in: [packages/react-contexts/src/attachmentcontext.ts:46](https://github.com/ballware/ballware-client/blob/d7ee5ae/packages/react-contexts/src/attachmentcontext.ts#L46)

___

### CrudContext

• `Const` **CrudContext**: *Context*<[*CrudContextState*](interfaces/crudcontextstate.md)\>

Defined in: [packages/react-contexts/src/crudcontext.ts:192](https://github.com/ballware/ballware-client/blob/d7ee5ae/packages/react-contexts/src/crudcontext.ts#L192)

___

### DefaultEditFunction

• `Const` **DefaultEditFunction**: EntityCustomFunction

Defined in: [packages/react-contexts/src/editcontext.ts:31](https://github.com/ballware/ballware-client/blob/d7ee5ae/packages/react-contexts/src/editcontext.ts#L31)

___

### EditContext

• `Const` **EditContext**: *Context*<[*EditContextState*](interfaces/editcontextstate.md)\>

Defined in: [packages/react-contexts/src/editcontext.ts:68](https://github.com/ballware/ballware-client/blob/d7ee5ae/packages/react-contexts/src/editcontext.ts#L68)

___

### LookupContext

• `Const` **LookupContext**: *Context*<[*LookupContextState*](interfaces/lookupcontextstate.md)\>

Defined in: [packages/react-contexts/src/lookupcontext.ts:160](https://github.com/ballware/ballware-client/blob/d7ee5ae/packages/react-contexts/src/lookupcontext.ts#L160)

___

### MetaContext

• `Const` **MetaContext**: *Context*<[*MetaContextState*](interfaces/metacontextstate.md)\>

Defined in: [packages/react-contexts/src/metacontext.ts:371](https://github.com/ballware/ballware-client/blob/d7ee5ae/packages/react-contexts/src/metacontext.ts#L371)

___

### NotificationContext

• `Const` **NotificationContext**: *Context*<[*NotificationContextState*](interfaces/notificationcontextstate.md)\>

Defined in: [packages/react-contexts/src/notificationcontext.ts:58](https://github.com/ballware/ballware-client/blob/d7ee5ae/packages/react-contexts/src/notificationcontext.ts#L58)

___

### NotificationDisplayContext

• `Const` **NotificationDisplayContext**: *Context*<[*NotificationDisplayContextState*](interfaces/notificationdisplaycontextstate.md)\>

Defined in: [packages/react-contexts/src/notificationcontext.ts:61](https://github.com/ballware/ballware-client/blob/d7ee5ae/packages/react-contexts/src/notificationcontext.ts#L61)

___

### PageContext

• `Const` **PageContext**: *Context*<[*PageContextState*](interfaces/pagecontextstate.md)\>

Defined in: [packages/react-contexts/src/pagecontext.ts:90](https://github.com/ballware/ballware-client/blob/d7ee5ae/packages/react-contexts/src/pagecontext.ts#L90)

___

### ProviderFactoryContext

• `Const` **ProviderFactoryContext**: *Context*<[*ProviderFactoryContextState*](interfaces/providerfactorycontextstate.md)\>

Defined in: [packages/react-contexts/src/providerfactorycontext.ts:89](https://github.com/ballware/ballware-client/blob/d7ee5ae/packages/react-contexts/src/providerfactorycontext.ts#L89)

___

### RightsContext

• `Const` **RightsContext**: *Context*<[*RightsContextState*](interfaces/rightscontextstate.md)\>

Defined in: [packages/react-contexts/src/rightscontext.ts:103](https://github.com/ballware/ballware-client/blob/d7ee5ae/packages/react-contexts/src/rightscontext.ts#L103)

___

### SettingsContext

• `Const` **SettingsContext**: *Context*<[*SettingsContextState*](interfaces/settingscontextstate.md)\>

Defined in: [packages/react-contexts/src/settingscontext.ts:113](https://github.com/ballware/ballware-client/blob/d7ee5ae/packages/react-contexts/src/settingscontext.ts#L113)

___

### StatisticContext

• `Const` **StatisticContext**: *Context*<[*StatisticContextState*](interfaces/statisticcontextstate.md)\>

Defined in: [packages/react-contexts/src/statisticcontext.ts:48](https://github.com/ballware/ballware-client/blob/d7ee5ae/packages/react-contexts/src/statisticcontext.ts#L48)

___

### TenantContext

• `Const` **TenantContext**: *Context*<[*TenantContextState*](interfaces/tenantcontextstate.md)\>

Defined in: [packages/react-contexts/src/tenantcontext.ts:41](https://github.com/ballware/ballware-client/blob/d7ee5ae/packages/react-contexts/src/tenantcontext.ts#L41)
