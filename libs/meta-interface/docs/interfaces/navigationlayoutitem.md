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

Defined in: [lib/tenant.ts:42](https://github.com/ballware/ballware-client/blob/69c8328/libs/meta-interface/src/lib/tenant.ts#L42)

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

Defined in: [lib/tenant.ts:22](https://github.com/ballware/ballware-client/blob/69c8328/libs/meta-interface/src/lib/tenant.ts#L22)

___

### type

• **type**: *page* \| *group* \| *section*

Type of navigation item

Defined in: [lib/tenant.ts:17](https://github.com/ballware/ballware-client/blob/69c8328/libs/meta-interface/src/lib/tenant.ts#L17)
