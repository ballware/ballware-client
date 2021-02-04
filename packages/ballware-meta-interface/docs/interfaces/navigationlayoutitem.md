[@ballware/meta-interface](../README.md) / [Exports](../modules.md) / NavigationLayoutItem

# Interface: NavigationLayoutItem

Navigation tree item

## Hierarchy

* **NavigationLayoutItem**

## Table of contents

### Properties

- [items](navigationlayoutitem.md#items)
- [options](navigationlayoutitem.md#options)
- [type](navigationlayoutitem.md#type)

## Properties

### items

• `Optional` **items**: *undefined* \| [*NavigationLayoutItem*](navigationlayoutitem.md)[]

Collection of child items (only for 'group' and 'section')

Defined in: [tenant.ts:42](https://github.com/frankball/ballware-meta-interface/blob/6b9dc3f/src/tenant.ts#L42)

___

### options

• **options**: { `caption?`: *undefined* \| *string* ; `page?`: *undefined* \| *string* ; `url?`: *undefined* \| *string*  }

Options

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`caption?` | *undefined* \| *string* | Caption for navigation item type 'page' and 'group'   |
`page?` | *undefined* \| *string* | Page identifier if item type is 'page'   |
`url?` | *undefined* \| *string* | Optional url for external page not part of application   |

Defined in: [tenant.ts:22](https://github.com/frankball/ballware-meta-interface/blob/6b9dc3f/src/tenant.ts#L22)

___

### type

• **type**: *page* \| *group* \| *section*

Type of navigation item

Defined in: [tenant.ts:17](https://github.com/frankball/ballware-meta-interface/blob/6b9dc3f/src/tenant.ts#L17)
