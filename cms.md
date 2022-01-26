---
title: cms v1.0.0
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
code_clipboard: true
highlight_theme: darkula
headingLevel: 2
generator: "@tarslib/widdershins v4.0.4"

---

# cms

> v1.0.0

# cms/cms-server

## POST 登录

POST /manage/login

> Body 请求参数

```yaml
username: lxxxxx
password: "123456"

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|
|» username|body|string|true|none|
|» password|body|string|true|none|

> 返回示例

> 成功

```json
{
  "errCode": 0,
  "message": "登录成功",
  "data": {
    "username": "lxxxxx",
    "cms-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imx4eHh4eCIsInBhc3N3b3JkIjoiMTIzNDU2IiwiaWF0IjoxNjQzMTY3Mjg1LCJleHAiOjE2NDMxNzA4ODV9.c2ledHj7vpYzk-IQ69DFwdcEr9416tLrt9-csYs9tP4",
    "avatar": "avatar.jpg",
    "player": "normal",
    "editable": 0
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» errCode|integer|true|none|none|
|» message|string|true|none|none|
|» data|object|true|none|none|
|»» username|string|true|none|none|
|»» cms-token|string|true|none|none|
|»» avatar|string|true|none|none|
|»» player|string|true|none|none|
|»» editable|integer|true|none|none|

## POST 修改文章

POST /manage/article/edit

> Body 请求参数

```yaml
title: 修改过的标题
subTitle: 修改过的副标题
content: <p>修改过的内容</p>
date: 2022-01-27 12:12:12
author: 修改过的lxxxxx

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|query|string|true|none|
|cms-token|header|string|true|none|
|body|body|object|false|none|
|» title|body|string|true|none|
|» subTitle|body|string|true|none|
|» content|body|string|true|none|
|» date|body|string|true|none|
|» author|body|string|true|none|

> 返回示例

> 成功

```json
{
  "errCode": 1,
  "message": "未填写必要参数",
  "data": {}
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» errCode|integer|true|none|none|
|» message|string|true|none|none|
|» data|object|true|none|none|

## POST 修改用户权限

POST /manage/namelist

> Body 请求参数

```yaml
id: "5"
open: "1"

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|cms-token|header|string|true|none|
|body|body|object|false|none|
|» id|body|string|true|none|
|» open|body|string|true|none|

> 返回示例

> 成功

```json
{
  "errCode": 0,
  "message": "用户编辑权限修改成功",
  "data": {}
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» errCode|integer|true|none|none|
|» message|string|true|none|none|
|» data|object|true|none|none|

## GET 获取权限列表

GET /manage/namelist

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|cms-token|header|string|true|none|

> 返回示例

> 成功

```json
{
  "errCode": 0,
  "message": "列表请求成功",
  "data": [
    {
      "avatar": "avatar-17e9440da25.jpg",
      "editable": 1,
      "id": 4,
      "username": "lxx"
    },
    {
      "avatar": "avatar-17e94694581.jpg",
      "editable": 0,
      "id": 5,
      "username": "lxxxxx"
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» errCode|integer|true|none|none|
|» message|string|true|none|none|
|» data|[object]|true|none|none|
|»» avatar|string|true|none|none|
|»» editable|integer|true|none|none|
|»» id|integer|true|none|none|
|»» username|string|true|none|none|

## POST 添加文章

POST /manage/article/add

> Body 请求参数

```yaml
id: "13"
title: 测试表题
subTitle: 测试副标题
author: lxxxxx
date: 2022-01-26 12:12:12
content: <p>测试内容</p>

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|cms-token|header|string|true|none|
|body|body|object|false|none|
|» id|body|string|true|none|
|» title|body|string|true|none|
|» subTitle|body|string|true|none|
|» author|body|string|true|none|
|» date|body|string|true|none|
|» content|body|string|true|none|

> 返回示例

> 成功

```json
{
  "errCode": 0,
  "message": "文章添加成功",
  "data": {}
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» errCode|integer|true|none|none|
|» message|string|true|none|none|
|» data|object|true|none|none|

## GET id获取文章

GET /manage/article/info/13

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|cms-token|header|string|true|none|

> 返回示例

> 成功

```json
{
  "errCode": 0,
  "message": "文章获取成功",
  "data": {
    "id": 13,
    "title": "测试表题",
    "subTitle": "测试副标题",
    "author": "lxxxxx",
    "date": "2022-01-26T03:31:19.000Z",
    "content": "<p>测试内容</p>"
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» errCode|integer|true|none|none|
|» message|string|true|none|none|
|» data|object|true|none|none|
|»» id|integer|true|none|none|
|»» title|string|true|none|none|
|»» subTitle|string|true|none|none|
|»» author|string|true|none|none|
|»» date|string|true|none|none|
|»» content|string|true|none|none|

## POST 上传头像

POST /manage/upload

> Body 请求参数

```yaml
avatar: file://C:\Users\Fr\Desktop\20220114102224.jpg

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|cms-token|header|string|true|none|
|body|body|object|false|none|
|» avatar|body|string|true|none|

> 返回示例

> 成功

```json
{
  "errCode": 0,
  "message": "修改成功",
  "data": {
    "username": "lxxxxx",
    "cms-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imx4eHh4eCIsInBhc3N3b3JkIjoiMTIzNDU2IiwiaWF0IjoxNjQzMTY3MzI2LCJleHAiOjE2NDMxNzA5MjZ9.ygxEtSF75LwpWOglSpbvGzk5eyQ-0zI57GN-v3D6sMY",
    "avatar": "avatar-17e94694581.jpg"
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» errCode|integer|true|none|none|
|» message|string|true|none|none|
|» data|object|true|none|none|
|»» username|string|true|none|none|
|»» cms-token|string|true|none|none|
|»» avatar|string|true|none|none|

## POST 注册

POST /manage/register

> Body 请求参数

```yaml
username: lxxx
password: "123456"

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|
|» username|body|string|true|none|
|» password|body|string|true|none|

> 返回示例

> 成功

```json
{
  "errCode": 0,
  "message": "注册成功",
  "data": []
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» errCode|integer|true|none|none|
|» message|string|true|none|none|
|» data|[string]|true|none|none|

## GET 获取个人信息

GET /manage/info

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|cms-token|header|string|true|none|

> 返回示例

> 成功

```json
{
  "username": "lxxx",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imx4eHgiLCJwYXNzd29yZCI6IjEyMzQ1NiIsImlhdCI6MTY0MzE2NTQxNiwiZXhwIjoxNjQzMTY5MDE2fQ.QtTUOVgzudTzoYOkdhD0hBpHs0738UspVRMcXAQtO6I",
  "avatar": "avatar.jpg"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» username|string|true|none|none|
|» token|string|true|none|none|
|» avatar|string|true|none|none|

## POST 修改个人信息

POST /manage/info

> Body 请求参数

```yaml
username: lxxxxx
password: "123456"

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|cms-token|header|string|true|none|
|body|body|object|false|none|
|» username|body|string|true|none|
|» password|body|string|true|none|

> 返回示例

> 成功

```json
{
  "errCode": 0,
  "message": "修改成功",
  "data": {
    "username": "lxxxxx",
    "cms-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imx4eHgiLCJwYXNzd29yZCI6IjEyMzQ1NiIsImlhdCI6MTY0MzE2NTk2NCwiZXhwIjoxNjQzMTY5NTY0fQ.G3lK6MzPtkrDaMvnmVdis8SZfuuSNJ98lwRyW6D822s",
    "avatar": "avatar.jpg"
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» errCode|integer|true|none|none|
|» message|string|true|none|none|
|» data|object|true|none|none|
|»» username|string|true|none|none|
|»» cms-token|string|true|none|none|
|»» avatar|string|true|none|none|

## POST 删除文章

POST /manage/article/delete

> Body 请求参数

```yaml
id: "12"

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|cms-token|header|string|true|none|
|body|body|object|false|none|
|» id|body|string|true|none|

> 返回示例

> 成功

```json
{
  "errCode": 0,
  "message": "删除成功",
  "data": {}
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» errCode|integer|true|none|none|
|» message|string|true|none|none|
|» data|object|true|none|none|

# cms/cms-web

## GET 获取文章内容

GET /web/article

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|query|string|true|none|

> 返回示例

> 成功

```json
{
  "errCode": 0,
  "message": "请求成功",
  "data": {
    "id": 13,
    "title": "测试表题",
    "subTitle": "测试副标题",
    "author": "lxxxxx",
    "date": "2022-01-26T03:31:19.000Z",
    "content": "<p>测试内容</p>"
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» errCode|integer|true|none|none|
|» message|string|true|none|none|
|» data|object|true|none|none|
|»» id|integer|true|none|none|
|»» title|string|true|none|none|
|»» subTitle|string|true|none|none|
|»» author|string|true|none|none|
|»» date|string|true|none|none|
|»» content|string|true|none|none|

## GET 获取文章列表

GET /web/list

> 返回示例

> 成功

```json
{
  "errCode": 0,
  "message": "请求成功",
  "data": [
    {
      "id": 1,
      "title": "1",
      "author": "1",
      "date": "2022-01-25T05:14:30.000Z"
    },
    {
      "id": 2,
      "title": "2",
      "author": "2",
      "date": "2022-01-26T04:12:12.000Z"
    },
    {
      "id": 3,
      "title": "3",
      "author": "3",
      "date": "2022-12-12T04:12:12.000Z"
    },
    {
      "id": 4,
      "title": "4",
      "author": "4",
      "date": "2022-12-12T04:12:12.000Z"
    },
    {
      "id": 5,
      "title": "5",
      "author": "5",
      "date": "2022-12-12T04:12:12.000Z"
    },
    {
      "id": 6,
      "title": "6",
      "author": "6",
      "date": "2022-12-12T04:12:12.000Z"
    },
    {
      "id": 7,
      "title": "7",
      "author": "7",
      "date": "2022-12-12T04:12:12.000Z"
    },
    {
      "id": 8,
      "title": "8",
      "author": "7",
      "date": "2022-12-12T04:12:12.000Z"
    },
    {
      "id": 9,
      "title": "9",
      "author": "7",
      "date": "2022-12-12T04:12:12.000Z"
    },
    {
      "id": 10,
      "title": "10",
      "author": "7",
      "date": "2022-12-12T04:12:12.000Z"
    },
    {
      "id": 11,
      "title": "11",
      "author": "7",
      "date": "2022-12-12T04:12:12.000Z"
    },
    {
      "id": 13,
      "title": "测试表题",
      "author": "lxxxxx",
      "date": "2022-01-26T03:31:19.000Z"
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» errCode|integer|true|none|none|
|» message|string|true|none|none|
|» data|[object]|true|none|none|
|»» id|integer|true|none|none|
|»» title|string|true|none|none|
|»» author|string|true|none|none|
|»» date|string|true|none|none|

## GET 获取导航栏

GET /web/nav

> 返回示例

> 成功

```json
{
  "errCode": 0,
  "message": "请求成功",
  "data": [
    {
      "id": 1,
      "title": "首页",
      "link": "/home",
      "active": 1,
      "disable": 0
    },
    {
      "id": 2,
      "title": "企业讯息",
      "link": "/info",
      "active": 0,
      "disable": 1
    },
    {
      "id": 3,
      "title": "文章列表",
      "link": "/list",
      "active": 0,
      "disable": 0
    },
    {
      "id": 4,
      "title": "联系我们",
      "link": "/call",
      "active": 0,
      "disable": 0
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» errCode|integer|true|none|none|
|» message|string|true|none|none|
|» data|[object]|true|none|none|
|»» id|integer|true|none|none|
|»» title|string|true|none|none|
|»» link|string|true|none|none|
|»» active|integer|true|none|none|
|»» disable|integer|true|none|none|

## GET 获取轮播图

GET /web/banner

> 返回示例

> 成功

```json
{
  "errCode": 0,
  "message": "请求成功",
  "data": [
    {
      "id": 1,
      "imgSrc": "banner1.jpg"
    },
    {
      "id": 2,
      "imgSrc": "banner2.jpg"
    },
    {
      "id": 3,
      "imgSrc": "banner3.jpg"
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» errCode|integer|true|none|none|
|» message|string|true|none|none|
|» data|[object]|true|none|none|
|»» id|integer|true|none|none|
|»» imgSrc|string|true|none|none|

# 数据模型

