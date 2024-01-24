import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t,d as e}from"./app-aQj_lELc.js";const p={},i=e(`<h2 id="创建-map" tabindex="-1"><a class="header-anchor" href="#创建-map" aria-hidden="true">#</a> 创建 Map</h2><p><code>map</code> 是一种键值映射表，通过 <code>key</code> 获取对应的 <code>value</code></p><p><code>map</code> 的声明方式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>map[KeyType]ValueType
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>KeyType</code> 为 key 的数据类型 , <code>ValueType</code> 为 <code>value</code> 的数据类型</p><details><summary>例子</summary><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 声明 map</span>
<span class="token keyword">var</span> m <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span>

<span class="token comment">// 使用 make 初始化 map</span>
m <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span>

<span class="token comment">// 使用 make 初始化 map, 并设置容量</span>
<span class="token comment">// m = make(map[string]int, 10)</span>

<span class="token comment">// 设置值</span>
m<span class="token punctuation">[</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">66</span>

<span class="token comment">// 输出值</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>m<span class="token punctuation">[</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="遍历-map" tabindex="-1"><a class="header-anchor" href="#遍历-map" aria-hidden="true">#</a> 遍历 Map</h2><p>使用 range 遍历 map</p><details><summary>例子</summary><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="删除键值" tabindex="-1"><a class="header-anchor" href="#删除键值" aria-hidden="true">#</a> 删除键值</h2><p>在字典中删除键值需要使用 <code>delete()</code> 方法</p><details><summary>例子</summary><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="判断-key-是否存在" tabindex="-1"><a class="header-anchor" href="#判断-key-是否存在" aria-hidden="true">#</a> 判断 key 是否存在</h2><details><summary>例子</summary><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="获取-map-长度" tabindex="-1"><a class="header-anchor" href="#获取-map-长度" aria-hidden="true">#</a> 获取 Map 长度</h2><p>使用 <code>len()</code> 获取 Map 的长度</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token function">len</span><span class="token punctuation">(</span>dataMap<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="并发" tabindex="-1"><a class="header-anchor" href="#并发" aria-hidden="true">#</a> 并发</h2><p>在并发操作下 Map 不是线程安全的，可以使用官方的 <code>sync.Map{}</code> 解决</p>`,19);function o(c,l){return s(),a("div",null,[i,t(` ::: tip 社区专属
[如何保证 Map 线程安全?]()
::: `)])}const r=n(p,[["render",o],["__file","5-map.html.vue"]]);export{r as default};
