import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as i,d as a}from"./app-BhuDP04M.js";const e={},r=a('<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2><p><strong>Kratos</strong> 是一个 Go 语言编写的微服务框架，由 Bilibili 开源。Kratos 提供了一站式的微服务开发解决方案，包括接口定义、错误码生成、客户端代码生成、服务端代码生成、API 文档生成等功能。Kratos 的设计目标是提供一种简单、高效、可靠的微服务开发框架，让开发者可以专注于业务逻辑的实现，而不用花费过多精力在微服务的开发和维护上。</p><div class="hint-container tip"><p class="hint-container-title">优缺点</p><p><strong>优点</strong>：</p><ul><li><strong>简单易用</strong>：Kratos 提供了一站式的微服务开发解决方案，让开发者可以专注于业务逻辑的实现</li><li><strong>高效可靠</strong>：Kratos 的设计目标是提供一种简单、高效、可靠的微服务开发框架</li><li><strong>功能丰富</strong>：Kratos 集成了各种工程实践，包括接口定义、错误码生成、客户端代码生成、服务端代码生成、API 文档生成等功能</li><li><strong>文档完善</strong>：Kratos 的文档完善，提供了详细的使用说明和示例代码</li></ul><p><strong>缺点</strong>：</p><ul><li><strong>生态相对不完善</strong>：Kratos 的生态相对不完善，插件和工具相对较少</li><li><strong>社区相对小</strong>：Kratos 的社区相对小，可能会遇到一些问题无法解决</li></ul></div><h2 id="kratos-的使用" tabindex="-1"><a class="header-anchor" href="#kratos-的使用"><span>Kratos 的使用</span></a></h2><p>要使用 Kratos, 首先要安装命令行工具 kratos。kratos 是 Kratos 的命令行工具，提供了接口定义、错误码生成、客户端代码生成、服务端代码生成、API 文档生成等功能。</p><h3 id="安装-kratos" tabindex="-1"><a class="header-anchor" href="#安装-kratos"><span>安装 kratos</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">GO111MODULE</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">on</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> go</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> get</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -u</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> github.com/go-kratos/kratos/cmd/kratos/v2@latest</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="创建一个简单的微服务" tabindex="-1"><a class="header-anchor" href="#创建一个简单的微服务"><span>创建一个简单的微服务</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">kratos</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> new</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> kratos-demo</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>',9),o=[r];function n(l,h){return i(),s("div",null,o)}const p=t(e,[["render",n],["__file","2-kratos.html.vue"]]),g=JSON.parse('{"path":"/guide/library/Micro/2-kratos.html","title":"Kratos","lang":"zh-CN","frontmatter":{"order":2,"title":"Kratos","icon":"carbon:microservices-1","head":[["meta",{"name":"keywords","content":"Kratos, golang, microservice"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://goguide.ryansu.tech/en/guide/library/Micro/2-kratos.html"}],["meta",{"property":"og:url","content":"https://goguide.ryansu.tech/guide/library/Micro/2-kratos.html"}],["meta",{"property":"og:site_name","content":"Go 面试宝典"}],["meta",{"property":"og:title","content":"Kratos"}],["meta",{"property":"og:description","content":"介绍 Kratos 是一个 Go 语言编写的微服务框架，由 Bilibili 开源。Kratos 提供了一站式的微服务开发解决方案，包括接口定义、错误码生成、客户端代码生成、服务端代码生成、API 文档生成等功能。Kratos 的设计目标是提供一种简单、高效、可靠的微服务开发框架，让开发者可以专注于业务逻辑的实现，而不用花费过多精力在微服务的开发和维护..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-04-28T02:00:05.000Z"}],["meta",{"property":"article:author","content":"Go Guide"}],["meta",{"property":"article:modified_time","content":"2024-04-28T02:00:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Kratos\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-28T02:00:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Go Guide\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]],"description":"介绍 Kratos 是一个 Go 语言编写的微服务框架，由 Bilibili 开源。Kratos 提供了一站式的微服务开发解决方案，包括接口定义、错误码生成、客户端代码生成、服务端代码生成、API 文档生成等功能。Kratos 的设计目标是提供一种简单、高效、可靠的微服务开发框架，让开发者可以专注于业务逻辑的实现，而不用花费过多精力在微服务的开发和维护..."},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"Kratos 的使用","slug":"kratos-的使用","link":"#kratos-的使用","children":[{"level":3,"title":"安装 kratos","slug":"安装-kratos","link":"#安装-kratos","children":[]},{"level":3,"title":"创建一个简单的微服务","slug":"创建一个简单的微服务","link":"#创建一个简单的微服务","children":[]}]}],"git":{"createdTime":1714267264000,"updatedTime":1714269605000,"contributors":[{"name":"Ryan Su","email":"yuansu.china.work@gmail.com","commits":2}]},"readingTime":{"minutes":1.44,"words":432},"filePathRelative":"guide/library/Micro/2-kratos.md","localizedDate":"2024年4月28日","autoDesc":true,"excerpt":"<h2>介绍</h2>\\n<p><strong>Kratos</strong> 是一个 Go 语言编写的微服务框架，由 Bilibili 开源。Kratos 提供了一站式的微服务开发解决方案，包括接口定义、错误码生成、客户端代码生成、服务端代码生成、API 文档生成等功能。Kratos 的设计目标是提供一种简单、高效、可靠的微服务开发框架，让开发者可以专注于业务逻辑的实现，而不用花费过多精力在微服务的开发和维护上。</p>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">优缺点</p>\\n<p><strong>优点</strong>：</p>\\n<ul>\\n<li><strong>简单易用</strong>：Kratos 提供了一站式的微服务开发解决方案，让开发者可以专注于业务逻辑的实现</li>\\n<li><strong>高效可靠</strong>：Kratos 的设计目标是提供一种简单、高效、可靠的微服务开发框架</li>\\n<li><strong>功能丰富</strong>：Kratos 集成了各种工程实践，包括接口定义、错误码生成、客户端代码生成、服务端代码生成、API 文档生成等功能</li>\\n<li><strong>文档完善</strong>：Kratos 的文档完善，提供了详细的使用说明和示例代码</li>\\n</ul>\\n<p><strong>缺点</strong>：</p>\\n<ul>\\n<li><strong>生态相对不完善</strong>：Kratos 的生态相对不完善，插件和工具相对较少</li>\\n<li><strong>社区相对小</strong>：Kratos 的社区相对小，可能会遇到一些问题无法解决</li>\\n</ul>\\n</div>"}');export{p as comp,g as data};
