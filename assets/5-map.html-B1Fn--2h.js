import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,f as e,e as t}from"./app-DXjeXeWm.js";const p={},i=t(`<h2 id="creating-a-map" tabindex="-1"><a class="header-anchor" href="#creating-a-map"><span>Creating a Map</span></a></h2><p><code>map</code> is a key-value mapping table, where you can get the corresponding <code>value</code> by using the <code>key</code>.</p><p>The declaration of <code>map</code> is as follows:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>map[KeyType]ValueType
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>KeyType</code> is the data type of the key, and <code>ValueType</code> is the data type of the <code>value</code>.</p><details class="hint-container details"><summary>Example</summary><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token comment">// Declare a map</span>
<span class="token keyword">var</span> m <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span>

<span class="token comment">// Initialize the map using make</span>
m <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span>

<span class="token comment">//  Initialize the map using make and set capacity</span>
<span class="token comment">// m = make(map[string]int, 10)</span>

<span class="token comment">// Set the value</span>
m<span class="token punctuation">[</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">66</span>

<span class="token comment">// Print the value</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>m<span class="token punctuation">[</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="traversing-a-map" tabindex="-1"><a class="header-anchor" href="#traversing-a-map"><span>Traversing a Map</span></a></h2><p>Use <code>range</code> to traverse a map.</p><details class="hint-container details"><summary>Example</summary><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// Initialize the map</span>
	<span class="token keyword">var</span> dataMap <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span>
	dataMap <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span>

	<span class="token comment">// Alternatively, you can initialize like this</span>
	<span class="token comment">//dataMap := map[string]string{}</span>

    <span class="token comment">// Add key-value pairs</span>
	dataMap<span class="token punctuation">[</span><span class="token string">&quot;first&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;first value&quot;</span>
	dataMap<span class="token punctuation">[</span><span class="token string">&quot;second&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;second value&quot;</span>
	dataMap<span class="token punctuation">[</span><span class="token string">&quot;third&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;third value&quot;</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;print key and value: &quot;</span><span class="token punctuation">)</span>

	<span class="token comment">// Use range to traverse key-value pairs</span>
	<span class="token keyword">for</span> key<span class="token punctuation">,</span> val <span class="token operator">:=</span> <span class="token keyword">range</span> dataMap <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;key: %s  -  value: %s \\n&quot;</span><span class="token punctuation">,</span> key<span class="token punctuation">,</span> val<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;print key: &quot;</span><span class="token punctuation">)</span>

	<span class="token comment">// Use range to traverse keys</span>
	<span class="token keyword">for</span> key <span class="token operator">:=</span> <span class="token keyword">range</span> dataMap <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;key: %s \\n&quot;</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;print value: &quot;</span><span class="token punctuation">)</span>

	<span class="token comment">// Use range to traverse values</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> val <span class="token operator">:=</span> <span class="token keyword">range</span> dataMap <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Value: %s \\n&quot;</span><span class="token punctuation">,</span> val<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Result</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="deleting-key-value-pairs" tabindex="-1"><a class="header-anchor" href="#deleting-key-value-pairs"><span>Deleting Key-Value Pairs</span></a></h2><p>To delete a key-value pair in a map, use the <code>delete()</code> method.</p><details class="hint-container details"><summary>Example</summary><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// Initialize the map</span>
	<span class="token keyword">var</span> dataMap <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span>
	dataMap <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span>

    <span class="token comment">// Alternatively, you can initialize like this</span>
	<span class="token comment">//dataMap := map[string]string{}</span>

	dataMap<span class="token punctuation">[</span><span class="token string">&quot;first&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;first value&quot;</span>
	dataMap<span class="token punctuation">[</span><span class="token string">&quot;second&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;second value&quot;</span>
	dataMap<span class="token punctuation">[</span><span class="token string">&quot;third&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;third value&quot;</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>dataMap<span class="token punctuation">)</span>

    <span class="token comment">// Delete a key-value pair</span>
	<span class="token function">delete</span><span class="token punctuation">(</span>dataMap<span class="token punctuation">,</span> <span class="token string">&quot;first&quot;</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>dataMap<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// Result:</span>
<span class="token comment">// map[first:first value second:second value third:third value]</span>
<span class="token comment">// map[second:second value third:third value]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="check-if-a-key-exists" tabindex="-1"><a class="header-anchor" href="#check-if-a-key-exists"><span>Check if a key exists</span></a></h2><details class="hint-container details"><summary>Example</summary><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// Initialize Map</span>
	<span class="token keyword">var</span> dataMap <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span>
	dataMap <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span>

	dataMap<span class="token punctuation">[</span><span class="token string">&quot;first&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;first value&quot;</span>
	dataMap<span class="token punctuation">[</span><span class="token string">&quot;second&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;second value&quot;</span>
	dataMap<span class="token punctuation">[</span><span class="token string">&quot;third&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;third value&quot;</span>

	<span class="token comment">// Check if a key exists</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="get-the-length-of-a-map" tabindex="-1"><a class="header-anchor" href="#get-the-length-of-a-map"><span>Get the length of a Map</span></a></h2><p>Use <code>len()</code> to get the length of a Map</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token function">len</span><span class="token punctuation">(</span>dataMap<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="concurrency" tabindex="-1"><a class="header-anchor" href="#concurrency"><span>Concurrency</span></a></h2><p>Maps are not thread-safe in concurrent operations. You can use the official <code>sync.Map{}</code> to solve this problem.</p>`,19);function o(l,c){return a(),s("div",null,[i,e(` ::: tip Community Exclusive
[How to ensure Map thread safety?]()
::: `)])}const d=n(p,[["render",o],["__file","5-map.html.vue"]]),k=JSON.parse('{"path":"/en/guide/concepts/golang/5-map.html","title":"Map","lang":"en-US","frontmatter":{"order":5,"title":"Map","icon":"line-md:star-filled","head":[["meta",{"name":"keywords","content":"golang, map, collection, create map, traverse map, delete map"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://goguide.ryansu.tech/guide/concepts/golang/5-map.html"}],["meta",{"property":"og:url","content":"https://goguide.ryansu.tech/en/guide/concepts/golang/5-map.html"}],["meta",{"property":"og:site_name","content":"Go Guide"}],["meta",{"property":"og:title","content":"Map"}],["meta",{"property":"og:description","content":"Creating a Map map is a key-value mapping table, where you can get the corresponding value by using the key. The declaration of map is as follows: KeyType is the data type of th..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-28T02:45:37.000Z"}],["meta",{"property":"article:author","content":"Go Guide"}],["meta",{"property":"article:modified_time","content":"2024-04-28T02:45:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Map\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-28T02:45:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Go Guide\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]],"description":"Creating a Map map is a key-value mapping table, where you can get the corresponding value by using the key. The declaration of map is as follows: KeyType is the data type of th..."},"headers":[{"level":2,"title":"Creating a Map","slug":"creating-a-map","link":"#creating-a-map","children":[]},{"level":2,"title":"Traversing a Map","slug":"traversing-a-map","link":"#traversing-a-map","children":[]},{"level":2,"title":"Deleting Key-Value Pairs","slug":"deleting-key-value-pairs","link":"#deleting-key-value-pairs","children":[]},{"level":2,"title":"Check if a key exists","slug":"check-if-a-key-exists","link":"#check-if-a-key-exists","children":[]},{"level":2,"title":"Get the length of a Map","slug":"get-the-length-of-a-map","link":"#get-the-length-of-a-map","children":[]},{"level":2,"title":"Concurrency","slug":"concurrency","link":"#concurrency","children":[]}],"git":{"createdTime":1705562988000,"updatedTime":1714272337000,"contributors":[{"name":"Ryan Su","email":"yuansu.china.work@gmail.com","commits":5}]},"readingTime":{"minutes":1.72,"words":515},"filePathRelative":"en/guide/concepts/golang/5-map.md","localizedDate":"January 18, 2024","autoDesc":true,"excerpt":"<h2>Creating a Map</h2>\\n<p><code>map</code> is a key-value mapping table, where you can get the corresponding <code>value</code> by using the <code>key</code>.</p>\\n<p>The declaration of <code>map</code> is as follows:</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>map[KeyType]ValueType\\n</code></pre></div>"}');export{d as comp,k as data};
