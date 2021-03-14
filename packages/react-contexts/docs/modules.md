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

Defined in: [src/lookupcontext.ts:73](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/lookupcontext.ts#L73)

___

### LookupCreator

Ƭ **LookupCreator**: (`param`: *string* \| *string*[]) => [*LookupDescriptor*](interfaces/lookupdescriptor.md)

Creator for getting lookup descriptor with additional query param

**`param`** Param attached to lookup query

Defined in: [src/lookupcontext.ts:67](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/lookupcontext.ts#L67)

## Variables

### AttachmentContext

• `Const` **AttachmentContext**: *Context*<[*AttachmentContextState*](interfaces/attachmentcontextstate.md)\>

Defined in: [src/attachmentcontext.ts:46](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/attachmentcontext.ts#L46)

___

### CrudContext

• `Const` **CrudContext**: *Context*<[*CrudContextState*](interfaces/crudcontextstate.md)\>

Defined in: [src/crudcontext.ts:151](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/crudcontext.ts#L151)

___

### EditContext

• `Const` **EditContext**: *Context*<[*EditContextState*](interfaces/editcontextstate.md)\>

Defined in: [src/editcontext.ts:61](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/editcontext.ts#L61)

___

### LookupContext

• `Const` **LookupContext**: *Context*<[*LookupContextState*](interfaces/lookupcontextstate.md)\>

Defined in: [src/lookupcontext.ts:160](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/lookupcontext.ts#L160)

___

### MetaContext

• `Const` **MetaContext**: *Context*<[*MetaContextState*](interfaces/metacontextstate.md)\>

Defined in: [src/metacontext.ts:352](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/metacontext.ts#L352)

___

### NotificationContext

• `Const` **NotificationContext**: *Context*<[*NotificationContextState*](interfaces/notificationcontextstate.md)\>

Defined in: [src/notificationcontext.ts:58](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/notificationcontext.ts#L58)

___

### NotificationDisplayContext

• `Const` **NotificationDisplayContext**: *Context*<[*NotificationDisplayContextState*](interfaces/notificationdisplaycontextstate.md)\>

Defined in: [src/notificationcontext.ts:61](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/notificationcontext.ts#L61)

___

### PageContext

• `Const` **PageContext**: *Context*<[*PageContextState*](interfaces/pagecontextstate.md)\>

Defined in: [src/pagecontext.ts:90](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/pagecontext.ts#L90)

___

### ProviderFactoryContext

• `Const` **ProviderFactoryContext**: *Context*<[*ProviderFactoryContextState*](interfaces/providerfactorycontextstate.md)\>

Defined in: [src/providerfactorycontext.ts:89](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/providerfactorycontext.ts#L89)

___

### RightsContext

• `Const` **RightsContext**: *Context*<[*RightsContextState*](interfaces/rightscontextstate.md)\>

Defined in: src/rightscontext.ts:103

___

### SettingsContext

• `Const` **SettingsContext**: *Context*<[*SettingsContextState*](interfaces/settingscontextstate.md)\>

Defined in: [src/settingscontext.ts:113](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/settingscontext.ts#L113)

___

### StatisticContext

• `Const` **StatisticContext**: *Context*<[*StatisticContextState*](interfaces/statisticcontextstate.md)\>

Defined in: [src/statisticcontext.ts:48](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/statisticcontext.ts#L48)

___

### TenantContext

• `Const` **TenantContext**: *Context*<[*TenantContextState*](interfaces/tenantcontextstate.md)\>

Defined in: [src/tenantcontext.ts:41](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/tenantcontext.ts#L41)
