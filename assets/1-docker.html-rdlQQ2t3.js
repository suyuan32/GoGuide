import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as o,b as r}from"./app-BdjIfOK_.js";const l={},c=r('<h2 id="docker-介绍" tabindex="-1"><a class="header-anchor" href="#docker-介绍"><span>Docker 介绍</span></a></h2><p>Docker 是一个开源的应用容器引擎，基于 Go 语言并遵从 Apache2.0 协议开源。Docker 可以让开发者打包他们的应用以及依赖包到一个可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。容器是完全使用沙箱机制，相互之间不会有任何接口，与虚拟机相似，但是占用资源更少。一台主机一般只能运行几十台虚拟机，但是可以同时运行几百上千个容器。</p><div class="hint-container info"><p class="hint-container-title">什么是容器？(Container)</p><p>容器就是将应用程序及其依赖，打包在一个文件系统中，包含了一切运行所需的东西，如代码、运行时、系统工具、系统库等，保证应用在任何环境下都能运行。容器是独立于平台的，可以在开发环境、测试环境、生产环境中运行。</p></div><h3 id="为什么使用-docker" tabindex="-1"><a class="header-anchor" href="#为什么使用-docker"><span>为什么使用 Docker？</span></a></h3><p>在没有容器之前，开发人员在开发环境中编写代码，然后将代码部署到测试环境，最后再部署到生产环境。这种方式存在很多问题，如环境不一致、部署麻烦、开发环境和生产环境不一致等。Docker 的出现解决了这些问题，使得开发、测试、生产环境一致，提高了开发效率。</p><div class="hint-container info"><p class="hint-container-title">Docker 的优势</p><ul><li><strong>快速交付</strong>：Docker 可以快速部署，可以在几秒或者几十秒内启动或停止容器。</li><li><strong>一致运行环境</strong>：Docker 可以保证开发环境、测试环境、生产环境一致。</li><li><strong>高效利用系统资源</strong>：Docker 可以在一台主机上运行多个容器，提高资源利用率。</li><li><strong>轻量级</strong>：Docker 利用容器共享主机内核，不需要运行完整的操作系统，因此比虚拟机更轻量级。</li><li><strong>易于维护</strong>：Docker 可以快速部署、快速启动、快速停止，维护成本低。</li><li><strong>可移植性</strong>：Docker 可以在任何平台上运行。</li><li><strong>开源</strong>：Docker 是开源的，社区活跃，有大量的镜像可以使用。</li><li><strong>安全</strong>：Docker 使用沙箱机制，相互之间不会有任何接口，提高了安全性。</li><li><strong>生态丰富</strong>：Docker 生态丰富，有大量的工具可以使用。</li><li><strong>持续集成</strong>：Docker 可以与持续集成工具结合，实现持续集成。</li><li><strong>快速扩展</strong>：Docker 可以快速扩展，可以根据需求快速增加或减少容器。</li></ul></div><h3 id="常用-docker-命令" tabindex="-1"><a class="header-anchor" href="#常用-docker-命令"><span>常用 Docker 命令</span></a></h3><table><thead><tr><th style="text-align:left;">描述</th><th style="text-align:left;">命令</th></tr></thead><tbody><tr><td style="text-align:left;">查看 Docker 版本</td><td style="text-align:left;"><code>docker --version</code></td></tr><tr><td style="text-align:left;">查看 Docker 信息</td><td style="text-align:left;"><code>docker info</code></td></tr><tr><td style="text-align:left;">查看 Docker 镜像</td><td style="text-align:left;"><code>docker images</code></td></tr><tr><td style="text-align:left;">查看 Docker 容器</td><td style="text-align:left;"><code>docker ps</code> 或 <code>docker ps -a</code></td></tr><tr><td style="text-align:left;">拉取镜像</td><td style="text-align:left;"><code>docker pull 镜像名称</code></td></tr><tr><td style="text-align:left;">运行容器</td><td style="text-align:left;"><code>docker run -it 镜像名称</code></td></tr><tr><td style="text-align:left;">启动容器</td><td style="text-align:left;"><code>docker start 容器ID</code></td></tr><tr><td style="text-align:left;">停止容器</td><td style="text-align:left;"><code>docker stop 容器ID</code></td></tr><tr><td style="text-align:left;">重启容器</td><td style="text-align:left;"><code>docker restart 容器ID</code></td></tr><tr><td style="text-align:left;">进入容器</td><td style="text-align:left;"><code>docker exec -it 容器ID /bin/bash</code></td></tr><tr><td style="text-align:left;">删除容器</td><td style="text-align:left;"><code>docker rm 容器ID</code></td></tr><tr><td style="text-align:left;">删除镜像</td><td style="text-align:left;"><code>docker rmi 镜像ID</code></td></tr><tr><td style="text-align:left;">查看容器日志</td><td style="text-align:left;"><code>docker logs -f 容器ID</code></td></tr></tbody></table>',8),d=[c];function n(i,a){return e(),o("div",null,d)}const g=t(l,[["render",n],["__file","1-docker.html.vue"]]),p=JSON.parse('{"path":"/guide/devtools/Docker/1-docker.html","title":"Docker","lang":"zh-CN","frontmatter":{"order":1,"title":"Docker","icon":"mdi:docker","description":"Docker 介绍 Docker 是一个开源的应用容器引擎，基于 Go 语言并遵从 Apache2.0 协议开源。Docker 可以让开发者打包他们的应用以及依赖包到一个可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。容器是完全使用沙箱机制，相互之间不会有任何接口，与虚拟机相似，但是占用资源更少。一台主机一般只能运行几十台虚...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://goguide.ryansu.tech/en/guide/devtools/Docker/1-docker.html"}],["meta",{"property":"og:url","content":"https://goguide.ryansu.tech/guide/devtools/Docker/1-docker.html"}],["meta",{"property":"og:site_name","content":"Go 面试宝典"}],["meta",{"property":"og:title","content":"Docker"}],["meta",{"property":"og:description","content":"Docker 介绍 Docker 是一个开源的应用容器引擎，基于 Go 语言并遵从 Apache2.0 协议开源。Docker 可以让开发者打包他们的应用以及依赖包到一个可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。容器是完全使用沙箱机制，相互之间不会有任何接口，与虚拟机相似，但是占用资源更少。一台主机一般只能运行几十台虚..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-04-26T14:58:51.000Z"}],["meta",{"property":"article:author","content":"Go Guide"}],["meta",{"property":"article:modified_time","content":"2024-04-26T14:58:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Docker\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-26T14:58:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Go Guide\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]]},"headers":[{"level":2,"title":"Docker 介绍","slug":"docker-介绍","link":"#docker-介绍","children":[{"level":3,"title":"为什么使用 Docker？","slug":"为什么使用-docker","link":"#为什么使用-docker","children":[]},{"level":3,"title":"常用 Docker 命令","slug":"常用-docker-命令","link":"#常用-docker-命令","children":[]}]}],"git":{"createdTime":1714143531000,"updatedTime":1714143531000,"contributors":[{"name":"Ryan Su","email":"yuansu.china.work@gmail.com","commits":1}]},"readingTime":{"minutes":2.57,"words":771},"filePathRelative":"guide/devtools/Docker/1-docker.md","localizedDate":"2024年4月26日","autoDesc":true,"excerpt":"<h2>Docker 介绍</h2>\\n<p>Docker 是一个开源的应用容器引擎，基于 Go 语言并遵从 Apache2.0 协议开源。Docker 可以让开发者打包他们的应用以及依赖包到一个可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。容器是完全使用沙箱机制，相互之间不会有任何接口，与虚拟机相似，但是占用资源更少。一台主机一般只能运行几十台虚拟机，但是可以同时运行几百上千个容器。</p>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">什么是容器？(Container)</p>\\n<p>容器就是将应用程序及其依赖，打包在一个文件系统中，包含了一切运行所需的东西，如代码、运行时、系统工具、系统库等，保证应用在任何环境下都能运行。容器是独立于平台的，可以在开发环境、测试环境、生产环境中运行。</p>\\n</div>"}');export{g as comp,p as data};
