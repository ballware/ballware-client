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

Defined in: [page.ts:145](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/page.ts#L145)

___

### colSpan

• `Optional` **colSpan**: *number*

Number of cols occupied by editor in layout

Defined in: [page.ts:150](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/page.ts#L150)

___

### items

• `Optional` **items**: [*PageLayoutItem*](pagelayoutitem.md)[]

Child layout components (only for container types)

Defined in: [page.ts:156](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/page.ts#L156)

___

### options

• `Optional` **options**: [*PageLayoutItemOptions*](pagelayoutitemoptions.md)

Options for layout item

Defined in: [page.ts:140](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/page.ts#L140)

___

### type

• **type**: *tabs* \| *tabitem* \| *entitygrid* \| *statistic* \| *crudcontainer* \| *grid* \| *map*

Type identifier for layout item

Defined in: [page.ts:128](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/meta-interface/src/page.ts#L128)
