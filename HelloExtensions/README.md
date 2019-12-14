### HelloExtensions

该项目来源于官方文档，通过该项目学到的知识点：

1. chrome 扩展使用HTML、CSS、JavaScript进行开发。
2. 每个扩展都必须有manifest.json，可理解为该文件是整个扩展的配置文件。
3. manifest.json必须含有这三个字段：
   - name：扩展名
   - version：扩展版本号，不能以0开头，随着版本更新，手动递增。
   - manifest_version：manifest文件版本，从chrome 18 开始必须2。
4. 其他manifest.json中的字段[manifest.md](../manifest.md)