[@ballware/meta-interface](../README.md) / [Exports](../modules.md) / PageLayoutItem

# Interface: PageLayoutItem

Layout item tree element

## Table of contents

### Properties

- [colCount](pagelayoutitem.md#colcount)
- [colSpan](pagelayoutitem.md#colspan)
- [items](pagelayoutitem.md#items)
- [options](pagelayoutitem.md#options)
- [type](pagelayoutitem.md#type)

## Properties

### colCount

• `Optional` **colCount**: *number*

Number of cols for layouting child editor items (only for container types)

Defined in: [lib/page.ts:136](https://github.com/ballware/ballware-client/blob/69c8328/libs/meta-interface/src/lib/page.ts#L136)

___

### colSpan

• `Optional` **colSpan**: *number*

Number of cols occupied by editor in layout

Defined in: [lib/page.ts:141](https://github.com/ballware/ballware-client/blob/69c8328/libs/meta-interface/src/lib/page.ts#L141)

___

### items

• `Optional` **items**: [*PageLayoutItem*](pagelayoutitem.md)[]

Child layout components (only for container types)

Defined in: [lib/page.ts:147](https://github.com/ballware/ballware-client/blob/69c8328/libs/meta-interface/src/lib/page.ts#L147)

___

### options

• `Optional` **options**: [*PageLayoutItemOptions*](pagelayoutitemoptions.md)

Options for layout item

Defined in: [lib/page.ts:131](https://github.com/ballware/ballware-client/blob/69c8328/libs/meta-interface/src/lib/page.ts#L131)

___

### type

• **type**: *tabs* \| *tabitem* \| *entitygrid* \| *statistic* \| *crudcontainer* \| *grid* \| *map*

Type identifier for layout item

Defined in: [lib/page.ts:119](https://github.com/ballware/ballware-client/blob/69c8328/libs/meta-interface/src/lib/page.ts#L119)
