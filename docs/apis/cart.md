# 购物车（Support: 7.27）

> 此 API 是用来实现 H5 与 NA 之间购物车的同步。该模块下的 API 统一使用 `hybridAPI.cart` 命名空间<br>
> 所有的操作都会返回当前商家 id 相对应的购物车结果

## get()

> 获取某一个餐厅的购物车信息

``` js
/*
 * @param {String} id 商家 id
 * @return {Array} 购物车中该商家的信息，没有的时候为空数组
 * 返回示例：[item, item, item]
 * item: {
    "id": "706073024",
    "sku_id": "323378776352",
    "name": "(大杯)红茶玛奇朵",
    "stock": 20,
    "price": 15,
    "original_price": 15,
    "quantity": 1,
    "attrs": [
      { "name": "甜度", "value": "五分甜" },
      { "name": "加料1", "value": "珍波椰" },
      { "name": "冰块", "value": "去冰" }
    ]
  }
 */
hybridAPI.cart.get(id)
.then(response => {})
```

## add()

> 向购物车添加一个商品，数量最多可增加至当前商品的最大库存

``` js
/*
 * @param {String} shop_id 商家 id
 * @param {Number} count 需要进行操作的数量。比如一次对某个商品一次增加/减少 2 个，count 即为 2，默认为 1
 * @param {Object} item 要添加的商品信息
 *
 * 结构示例：{
    "shop_id": "51380",
    "count": 2,
    "item": {
      "id": "706068653",
      "sku_id": "323374300448",
      "quantity": 1,
      "name": "(大杯)红茶玛奇朵",
      "price": 15,
      "original_price": 15,
      "specs": [
        { "name": "规格", "value": "+免费配料" }
      ],
      "attrs": [
        { "name": "甜度", "value": "正常甜" },
        { "name": "加料1", "value": "x" }
      ]
    }
  }
 */
hybridAPI.cart.add({ shop_id, item })
.then(response => {})
```

## reduce()

``` js
// 数据结构同 `add` 方法，对指定商家 id 相对应的购物车进行减操作。当数量减少为 0 的时候会自动删除此商品
hybridAPI.cart.reduce({ shop_id, item })
.then(response => {})
```

## remove()

``` js
// 数据结构同 `add` 方法，对指定商家 id 相对应的购物车直接删除某个商品
// 该方法会忽略上面描述过的 count 属性
hybridAPI.cart.remove({ shop_id, item })
.then(response => {})
```

## clear()

``` js
// 同 `get` 方法，删除相对应商家 id 的购物车数据
hybridAPI.cart.clear(id)
.then(response => {})
```
