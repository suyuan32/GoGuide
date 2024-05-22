import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,f as a,d as t,o as e}from"./app-Du-TCu9s.js";const p={},i=t(`<h2 id="创建-map" tabindex="-1"><a class="header-anchor" href="#创建-map"><span>创建 Map</span></a></h2><p><code>map</code> 是一种键值映射表，通过 <code>key</code> 获取对应的 <code>value</code></p><p><code>map</code> 的声明方式</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>map[KeyType]ValueType
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>KeyType</code> 为 key 的数据类型 , <code>ValueType</code> 为 <code>value</code> 的数据类型</p><details class="hint-container details"><summary>例子</summary><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token comment">// 声明 map</span>
<span class="token keyword">var</span> m <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span>

<span class="token comment">// 使用 make 初始化 map</span>
m <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span>

<span class="token comment">// 使用 make 初始化 map, 并设置容量</span>
<span class="token comment">// m = make(map[string]int, 10)</span>

<span class="token comment">// 设置值</span>
m<span class="token punctuation">[</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">66</span>

<span class="token comment">// 输出值</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>m<span class="token punctuation">[</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="遍历-map" tabindex="-1"><a class="header-anchor" href="#遍历-map"><span>遍历 Map</span></a></h2><p>使用 range 遍历 map</p><details class="hint-container details"><summary>例子</summary><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 初始化 Map</span>
	<span class="token keyword">var</span> dataMap <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span>
	dataMap <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span>

    <span class="token comment">// 也可以这样初始化</span>
	<span class="token comment">//dataMap := map[string]string{}</span>


    <span class="token comment">// 添加键值</span>
	dataMap<span class="token punctuation">[</span><span class="token string">&quot;first&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;first value&quot;</span>
	dataMap<span class="token punctuation">[</span><span class="token string">&quot;second&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;second value&quot;</span>
	dataMap<span class="token punctuation">[</span><span class="token string">&quot;third&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;third value&quot;</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;print key and value: &quot;</span><span class="token punctuation">)</span>

	<span class="token comment">// 使用 range 遍历 key value</span>
	<span class="token keyword">for</span> key<span class="token punctuation">,</span> val <span class="token operator">:=</span> <span class="token keyword">range</span> dataMap <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;key: %s  -  value: %s \\n&quot;</span><span class="token punctuation">,</span> key<span class="token punctuation">,</span> val<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;print key: &quot;</span><span class="token punctuation">)</span>

	<span class="token comment">// 使用 range 遍历 key</span>
	<span class="token keyword">for</span> key <span class="token operator">:=</span> <span class="token keyword">range</span> dataMap <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;key: %s \\n&quot;</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;print value: &quot;</span><span class="token punctuation">)</span>

	<span class="token comment">// 使用 range 遍历 value</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> val <span class="token operator">:=</span> <span class="token keyword">range</span> dataMap <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Value: %s \\n&quot;</span><span class="token punctuation">,</span> val<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 结果</span>
<span class="token comment">// print key and value:</span>
<span class="token comment">// key: third  -  value: third value</span>
<span class="token comment">// key: first  -  value: first value</span>
<span class="token comment">// key: second  -  value: second value</span>
<span class="token comment">// print key:</span>
<span class="token comment">// key: first</span>
<span class="token comment">// key: second</span>
<span class="token comment">// key: third</span>
<span class="token comment">// print value:</span>
<span class="token comment">// Value: first value</span>
<span class="token comment">// Value: second value</span>
<span class="token comment">// Value: third value</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="删除键值" tabindex="-1"><a class="header-anchor" href="#删除键值"><span>删除键值</span></a></h2><p>在字典中删除键值需要使用 <code>delete()</code> 方法</p><details class="hint-container details"><summary>例子</summary><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 初始化 Map</span>
	<span class="token keyword">var</span> dataMap <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span>
	dataMap <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span>

    <span class="token comment">// 也可以这样初始化</span>
	<span class="token comment">//dataMap := map[string]string{}</span>

	dataMap<span class="token punctuation">[</span><span class="token string">&quot;first&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;first value&quot;</span>
	dataMap<span class="token punctuation">[</span><span class="token string">&quot;second&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;second value&quot;</span>
	dataMap<span class="token punctuation">[</span><span class="token string">&quot;third&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;third value&quot;</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>dataMap<span class="token punctuation">)</span>

    <span class="token comment">// 删除键值</span>
	<span class="token function">delete</span><span class="token punctuation">(</span>dataMap<span class="token punctuation">,</span> <span class="token string">&quot;first&quot;</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>dataMap<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 结果：</span>
<span class="token comment">// map[first:first value second:second value third:third value]</span>
<span class="token comment">// map[second:second value third:third value]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="判断-key-是否存在" tabindex="-1"><a class="header-anchor" href="#判断-key-是否存在"><span>判断 key 是否存在</span></a></h2><details class="hint-container details"><summary>例子</summary><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 初始化 Map</span>
	<span class="token keyword">var</span> dataMap <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span>
	dataMap <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span>

	dataMap<span class="token punctuation">[</span><span class="token string">&quot;first&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;first value&quot;</span>
	dataMap<span class="token punctuation">[</span><span class="token string">&quot;second&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;second value&quot;</span>
	dataMap<span class="token punctuation">[</span><span class="token string">&quot;third&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;third value&quot;</span>

	<span class="token comment">// 判断 key 是否存在</span>
	<span class="token keyword">if</span> val<span class="token punctuation">,</span> ok <span class="token operator">:=</span> dataMap<span class="token punctuation">[</span><span class="token string">&quot;first&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;key not exists&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> val<span class="token punctuation">,</span> ok <span class="token operator">:=</span> dataMap<span class="token punctuation">[</span><span class="token string">&quot;fourth&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;key not exists&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="获取-map-长度" tabindex="-1"><a class="header-anchor" href="#获取-map-长度"><span>获取 Map 长度</span></a></h2><p>使用 <code>len()</code> 获取 Map 的长度</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token function">len</span><span class="token punctuation">(</span>dataMap<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="并发" tabindex="-1"><a class="header-anchor" href="#并发"><span>并发</span></a></h2><p>在并发操作下 Map 不是线程安全的，可以使用官方的 <code>sync.Map{}</code> 解决</p>`,19);function o(l,c){return e(),s("div",null,[i,a(` ::: tip 社区专属
[如何保证 Map 线程安全?]()
::: `)])}const r=n(p,[["render",o],["__file","5-map.html.vue"]]),k=JSON.parse('{"path":"/guide/concepts/golang/5-map.html","title":"Map (集合)","lang":"zh-CN","frontmatter":{"order":5,"title":"Map (集合)","icon":"line-md:star-filled","head":[["meta",{"name":"keywords","content":"golang, map, 集合, 创建map, 遍历map, 删除map"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://goguide.ryansu.tech/en/guide/concepts/golang/5-map.html"}],["meta",{"property":"og:url","content":"https://goguide.ryansu.tech/guide/concepts/golang/5-map.html"}],["meta",{"property":"og:site_name","content":"Go 面试宝典"}],["meta",{"property":"og:title","content":"Map (集合)"}],["meta",{"property":"og:description","content":"创建 Map map 是一种键值映射表，通过 key 获取对应的 value map 的声明方式 KeyType 为 key 的数据类型 , ValueType 为 value 的数据类型 例子 遍历 Map 使用 range 遍历 map 例子 删除键值 在字典中删除键值需要使用 delete() 方法 例子 判断 key 是否存在 例子 获取 Ma..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-04-28T02:45:37.000Z"}],["meta",{"property":"article:author","content":"Go Guide"}],["meta",{"property":"article:modified_time","content":"2024-04-28T02:45:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Map (集合)\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-28T02:45:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Go Guide\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]],"description":"创建 Map map 是一种键值映射表，通过 key 获取对应的 value map 的声明方式 KeyType 为 key 的数据类型 , ValueType 为 value 的数据类型 例子 遍历 Map 使用 range 遍历 map 例子 删除键值 在字典中删除键值需要使用 delete() 方法 例子 判断 key 是否存在 例子 获取 Ma..."},"headers":[{"level":2,"title":"创建 Map","slug":"创建-map","link":"#创建-map","children":[]},{"level":2,"title":"遍历 Map","slug":"遍历-map","link":"#遍历-map","children":[]},{"level":2,"title":"删除键值","slug":"删除键值","link":"#删除键值","children":[]},{"level":2,"title":"判断 key 是否存在","slug":"判断-key-是否存在","link":"#判断-key-是否存在","children":[]},{"level":2,"title":"获取 Map 长度","slug":"获取-map-长度","link":"#获取-map-长度","children":[]},{"level":2,"title":"并发","slug":"并发","link":"#并发","children":[]}],"git":{"createdTime":1705562988000,"updatedTime":1714272337000,"contributors":[{"name":"Ryan Su","email":"yuansu.china.work@gmail.com","commits":5}]},"readingTime":{"minutes":1.85,"words":555},"filePathRelative":"guide/concepts/golang/5-map.md","localizedDate":"2024年1月18日","autoDesc":true,"excerpt":"<h2>创建 Map</h2>\\n<p><code>map</code> 是一种键值映射表，通过 <code>key</code> 获取对应的 <code>value</code></p>\\n<p><code>map</code> 的声明方式</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>map[KeyType]ValueType\\n</code></pre></div><p><code>KeyType</code> 为 key 的数据类型 , <code>ValueType</code> 为 <code>value</code> 的数据类型</p>"}');export{r as comp,k as data};
