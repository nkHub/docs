# monogoDB

[下载](http://dl.mongodb.org/dl/win32/x86_64)

#### 1. 创建与删除数据库

使用和创建数据库：use 数据库名称

删除数据库: db.dropDatabase()

显示所有数据库：show dbs

#### 2. 创建与删除集合

创建集合: db.createCollection(集合名称,参数)

![create_options](http://nikai.site/docs/monogoDB_create_options.png)

显示数据库所有集合: show collections

删除集合:db.集合名称.drop()

#### 3. 增删改查集合数据

集合中插入数据：
    - db.集合名称.insert(数据)
    - db.集合名称.insertOne()单条数据
    - db.集合名称.insertMany()多条数据(数组)

集合中删除数据：
    - db.集合名称.deleteOne(条件)
    - db.集合名称.deleteMany(条件)

集合中修改数据:
    - db.集合名称.update(查询条件,{$set:更新的数据},参数)
    - db.集合名称.updateOne(同上)
    - db.集合名称.updateMany(同上)
    - db.集合名称.save(更新的数据)

    返回的错误

![error_return](http://nikai.site/docs/monogoDB_modify_error.png)

集合中查找数据:
    - db.集合名称.find(条件,显示与否部分数据)
    - db.集合名称.find().pretty()显示所有数据
    - db.集合名称.find().limit(n)限制数量
    - db.集合名称.find().skip(n)跳过数量（小数据可用）
    - db.集合名称.find().sort({key：-1/1})排序(1升)
    - db.集合名称.find().ensureIndex({key：-1/1},参数)索引(1升)设置唯一、权重和语言等。
    - db.集合名称.aggregate()处理数据(统计平均值、求和等)

![data_detail](http://nikai.site/docs/monogoDB_data_detail.png)

连写优先级：sort>skip>limit

操作符:

```
    $gt 大于   $gte 大于等于    $lt 小于    $lte 小于等于
    $eq 等于   $ne 不等于       $type 数据类型
```