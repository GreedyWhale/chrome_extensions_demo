每一个扩展都必须要有一个manifest.json文件，相当于扩展的配置。


### name
扩展的名字，必填

---
### version
扩展版本号，不能以0开头，必填。
以下都是合法值：
```
"version": "1"
"version": "1.0"
"version": "2.10.2"
"version": "3.1.2.4567"
```

每个区间取值范围是：0 到 65535。
每次更新都需要手动递增该值

---

### manifest_version
manifest的版本号，从 Chrome 18 开始必须为2，必填。

---

### description
扩展的描述

---

### browser_action
browser_action的值为一个对象，该字段规定扩展的图标放在Chrome的工具栏中（地址栏的左边）

```JSON
"browser_action": {
  "default_icon": {
    "16": "images/icon16.png",
    "24": "images/icon24.png",
    "32": "images/icon32.png"   
  },
  "default_title": "Google Mail",
  "default_popup": "popup.html"
}
```

- default_icon: 工具栏上的图标，可以提供不同尺寸，chrome会选择一个最合适的，推荐16 dips 的方形图标。（dips 为设备独立像素）

- default_title：鼠标悬停在工具栏上的图标时显示的文字
- default_popup：点击工具栏上的图标时弹出的页面路径

---

### commands
定义各种命令的字段：

```json
"commands": {
  "_execute_browser_action": {
    "suggested_key": {
      "default": "Ctrl+Shift+Y",
      "windows": "Ctrl+Shift+Y",
      "mac": "Command+Shift+Y",
      "chromeos": "Ctrl+Shift+U",
      "linux": "Ctrl+Shift+J"
    },
    "description": "open html"
  },
}
```

- _execute_browser_action：这里面定义的快捷键的效果和用鼠标点击工具栏上的扩展图标效果一样，这里面定义的快捷键不会产生事件。
个人在测试的时候发现，如果设置的快捷键和已有的有冲突，那么是不会生效的。

---






