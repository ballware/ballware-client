[@ballware/meta-interface](../README.md) / [Exports](../modules.md) / NavigationLayoutItem

# Interface: NavigationLayoutItem

Navigation tree item

## Table of contents

### Properties

- [items](navigationlayoutitem.md#items)
- [options](navigationlayoutitem.md#options)
- [type](navigationlayoutitem.md#type)

## Properties

### items

• `Optional` **items**: [*NavigationLayoutItem*](navigationlayoutitem.md)[]

Collection of child items (only for 'group' and 'section')

Defined in: [tenant.ts:40](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/tenant.ts#L40)

___

### options

• **options**: *object*

Options

#### Type declaration:

Name | Type | Description |
:------ | :------ | :------ |
`caption`? | *string* | Caption for navigation item type 'page' and 'group'   |
`page`? | *string* | Page identifier if item type is 'page'   |
`url`? | *string* | Optional url for external page not part of application   |

Defined in: [tenant.ts:20](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/tenant.ts#L20)

___

### type

• **type**: *page* \| *group* \| *section*

Type of navigation item

Defined in: [tenant.ts:15](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/tenant.ts#L15)
