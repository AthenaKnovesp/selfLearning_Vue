# Vue

## CDN

```javascript
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.min.js"></script>
```



## 创建项目

1.安装脚手架

```shell
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

2.创建项目

```shell
vue create my-project
```

3.运行项目

```sh
cd my-project
npm run serve
```

Vue模板

```json
{
    "Print to console": {
        "prefix": "vue",
        "body": [
            "<template>",
            "    <div class=\"\">\n",
            "    </div>",
            "</template>\n",
            "<script>",
            "export default {",
            "    data () {",
            "        return {}",
            "    },",
            "    created () { },",
            "    mounted () { },",
            "    methods: {},",
            "    components: {}",
            "}",
            "</script>\n",
            "<style>\n",
            "</style>"
        ],
        "description": "Log output to console"
    }
}
```

