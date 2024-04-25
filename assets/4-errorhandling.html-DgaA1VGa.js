import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,b as e}from"./app-CZxvM7_o.js";const t={},o=e(`<h2 id="接口" tabindex="-1"><a class="header-anchor" href="#接口"><span>接口</span></a></h2><p>golang 提供了 <code>error</code> 类型的接口</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">type</span> <span class="token builtin">error</span> <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只要结构体实现了 <code>Error()</code> 方法就属于 <code>error</code> 类型</p><h2 id="创建错误" tabindex="-1"><a class="header-anchor" href="#创建错误"><span>创建错误</span></a></h2><p>golang 提供了多种创建 <code>error</code> 的方法</p><p>我们可以使用 <code>errors.New()</code> <code>fmt.Errorf()</code> 来创建错误</p><details class="hint-container details"><summary>例子</summary><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;errors&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 使用 New 创建错误</span>
	err1 <span class="token operator">:=</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;first error&quot;</span><span class="token punctuation">)</span>

    <span class="token comment">// 使用 fmt 创建错误</span>
	err2 <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;second %s&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err1<span class="token punctuation">,</span> err2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="errors-join" tabindex="-1"><a class="header-anchor" href="#errors-join"><span>errors.Join</span></a></h2><p>在 go 1.20 提供了 <code>errors.Join</code> 方法将多个 <code>error</code> 组合成一个数组</p><details class="hint-container details"><summary>例子</summary><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;errors&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 使用 New 创建错误</span>
	err1 <span class="token operator">:=</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;first error&quot;</span><span class="token punctuation">)</span>

	<span class="token comment">// 使用 fmt 创建错误</span>
	err2 <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;second %s&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">)</span>

	<span class="token comment">// 使用 join 将多个 error 合并</span>
	err3 <span class="token operator">:=</span> errors<span class="token punctuation">.</span><span class="token function">Join</span><span class="token punctuation">(</span>err1<span class="token punctuation">,</span> err2<span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err1<span class="token punctuation">,</span> err2<span class="token punctuation">)</span> 
	<span class="token comment">// 结果: first error second error</span>
	
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err3<span class="token punctuation">)</span> 
	<span class="token comment">// 结果： </span>
	<span class="token comment">// first error</span>
	<span class="token comment">// second error</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="errors-is" tabindex="-1"><a class="header-anchor" href="#errors-is"><span>errors.Is</span></a></h2><p>使用 <code>errors.Is()</code> 方法可以判断当前 <code>error</code> 是否包含目标类型的 <code>error</code></p><details class="hint-container details"><summary>例子</summary><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;errors&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 使用 New 创建错误</span>
	err1 <span class="token operator">:=</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;first error&quot;</span><span class="token punctuation">)</span>

	<span class="token comment">// 使用 fmt 创建错误</span>
	err2 <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;second %s&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">)</span>

	<span class="token comment">// 使用 join 将多个 error 合并</span>
	err3 <span class="token operator">:=</span> errors<span class="token punctuation">.</span><span class="token function">Join</span><span class="token punctuation">(</span>err1<span class="token punctuation">,</span> err2<span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err1<span class="token punctuation">,</span> err2<span class="token punctuation">)</span> 
	<span class="token comment">// 结果: first error second error</span>
	
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err3<span class="token punctuation">)</span> 
	<span class="token comment">// 结果： </span>
	<span class="token comment">// first error</span>
	<span class="token comment">// second error</span>

	<span class="token comment">// 使用 errors.Is() 判断错误是否是目标错误， err3 包含 err1 所以为 true</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>errors<span class="token punctuation">.</span><span class="token function">Is</span><span class="token punctuation">(</span>err1<span class="token punctuation">,</span> err2<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token comment">// 结果: false</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>errors<span class="token punctuation">.</span><span class="token function">Is</span><span class="token punctuation">(</span>err3<span class="token punctuation">,</span> err1<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token comment">// 结果： true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="errors-as" tabindex="-1"><a class="header-anchor" href="#errors-as"><span>errors.As</span></a></h2><p>使用 <code>errors.As()</code> 方法可以将 error 中第一个符合目标类型的错误赋值到目标对象</p><details class="hint-container details"><summary>例子</summary><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;errors&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> NormalErr <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	e <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>t NormalErr<span class="token punctuation">)</span> <span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> t<span class="token punctuation">.</span>e
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 使用 New 创建错误</span>
	err1 <span class="token operator">:=</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;first error&quot;</span><span class="token punctuation">)</span>

	<span class="token comment">// 创建 T</span>
	err2 <span class="token operator">:=</span> NormalErr<span class="token punctuation">{</span><span class="token string">&quot;second error&quot;</span><span class="token punctuation">}</span>

	<span class="token comment">// 使用 join 将多个 error 合并</span>
	err3 <span class="token operator">:=</span> errors<span class="token punctuation">.</span><span class="token function">Join</span><span class="token punctuation">(</span>err1<span class="token punctuation">,</span> err2<span class="token punctuation">)</span>

	<span class="token keyword">var</span> err4 NormalErr

	errors<span class="token punctuation">.</span><span class="token function">As</span><span class="token punctuation">(</span>err3<span class="token punctuation">,</span> <span class="token operator">&amp;</span>err4<span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err4<span class="token punctuation">)</span>
	<span class="token comment">// 结果： second error</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,17),r=[o];function i(p,c){return s(),a("div",null,r)}const d=n(t,[["render",i],["__file","4-errorhandling.html.vue"]]),m=JSON.parse('{"path":"/guide/concepts/golang/4-errorhandling.html","title":"错误处理","lang":"zh-CN","frontmatter":{"order":4,"title":"错误处理","description":"接口 golang 提供了 error 类型的接口 只要结构体实现了 Error() 方法就属于 error 类型 创建错误 golang 提供了多种创建 error 的方法 我们可以使用 errors.New() fmt.Errorf() 来创建错误 例子 errors.Join 在 go 1.20 提供了 errors.Join 方法将多个 err...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://goguide.ryansu.tech/en/guide/concepts/golang/4-errorhandling.html"}],["meta",{"property":"og:url","content":"https://goguide.ryansu.tech/guide/concepts/golang/4-errorhandling.html"}],["meta",{"property":"og:site_name","content":"Go 面试宝典"}],["meta",{"property":"og:title","content":"错误处理"}],["meta",{"property":"og:description","content":"接口 golang 提供了 error 类型的接口 只要结构体实现了 Error() 方法就属于 error 类型 创建错误 golang 提供了多种创建 error 的方法 我们可以使用 errors.New() fmt.Errorf() 来创建错误 例子 errors.Join 在 go 1.20 提供了 errors.Join 方法将多个 err..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-01-28T05:09:46.000Z"}],["meta",{"property":"article:author","content":"Go Guide"}],["meta",{"property":"article:modified_time","content":"2024-01-28T05:09:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"错误处理\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-28T05:09:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Go Guide\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]]},"headers":[{"level":2,"title":"接口","slug":"接口","link":"#接口","children":[]},{"level":2,"title":"创建错误","slug":"创建错误","link":"#创建错误","children":[]},{"level":2,"title":"errors.Join","slug":"errors-join","link":"#errors-join","children":[]},{"level":2,"title":"errors.Is","slug":"errors-is","link":"#errors-is","children":[]},{"level":2,"title":"errors.As","slug":"errors-as","link":"#errors-as","children":[]}],"git":{"createdTime":1705481186000,"updatedTime":1706418586000,"contributors":[{"name":"Ryan Su","email":"yuansu.china.work@gmail.com","commits":2}]},"readingTime":{"minutes":1.45,"words":435},"filePathRelative":"guide/concepts/golang/4-errorhandling.md","localizedDate":"2024年1月17日","autoDesc":true,"excerpt":"<h2>接口</h2>\\n<p>golang 提供了 <code>error</code> 类型的接口</p>\\n<div class=\\"language-go\\" data-ext=\\"go\\" data-title=\\"go\\"><pre class=\\"language-go\\"><code><span class=\\"token keyword\\">type</span> <span class=\\"token builtin\\">error</span> <span class=\\"token keyword\\">interface</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token function\\">Error</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token builtin\\">string</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>"}');export{d as comp,m as data};
