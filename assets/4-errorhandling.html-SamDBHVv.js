import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,d as e}from"./app-c90xqmlT.js";const t={},o=e(`<h2 id="接口" tabindex="-1"><a class="header-anchor" href="#接口" aria-hidden="true">#</a> 接口</h2><p>golang 提供了 <code>error</code> 类型的接口</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> <span class="token builtin">error</span> <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只要结构体实现了 <code>Error()</code> 方法就属于 <code>error</code> 类型</p><h2 id="创建错误" tabindex="-1"><a class="header-anchor" href="#创建错误" aria-hidden="true">#</a> 创建错误</h2><p>golang 提供了多种创建 <code>error</code> 的方法</p><p>我们可以使用 <code>errors.New()</code> <code>fmt.Errorf()</code> 来创建错误</p><details><summary>例子</summary><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="errors-join" tabindex="-1"><a class="header-anchor" href="#errors-join" aria-hidden="true">#</a> errors.Join</h2><p>在 go 1.20 提供了 <code>errors.Join</code> 方法将多个 <code>error</code> 组合成一个数组</p><details><summary>例子</summary><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="errors-is" tabindex="-1"><a class="header-anchor" href="#errors-is" aria-hidden="true">#</a> errors.Is</h2><p>使用 <code>errors.Is()</code> 方法可以判断当前 <code>error</code> 是否包含目标类型的 <code>error</code></p><details><summary>例子</summary><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="errors-as" tabindex="-1"><a class="header-anchor" href="#errors-as" aria-hidden="true">#</a> errors.As</h2><p>使用 <code>errors.As()</code> 方法可以将 error 中第一个符合目标类型的错误赋值到目标对象</p><details><summary>例子</summary><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,17),i=[o];function p(c,r){return s(),a("div",null,i)}const d=n(t,[["render",p],["__file","4-errorhandling.html.vue"]]);export{d as default};
