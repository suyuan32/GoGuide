import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,b as e}from"./app-C2DD7JW7.js";const t={},o=e(`<h2 id="interface" tabindex="-1"><a class="header-anchor" href="#interface"><span>Interface</span></a></h2><p>Golang provides an interface type <code>error</code>:</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">type</span> <span class="token builtin">error</span> <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Any structure that implements the <code>Error()</code> method belongs to the <code>error</code> type.</p><h2 id="creating-errors" tabindex="-1"><a class="header-anchor" href="#creating-errors"><span>Creating Errors</span></a></h2><p>Golang provides several ways to create an <code>error</code>.</p><p>We can use <code>errors.New()</code> or <code>fmt.Errorf()</code> to create errors.</p><details class="hint-container details"><summary>Example</summary><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;errors&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Create error using New</span>
	err1 <span class="token operator">:=</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;first error&quot;</span><span class="token punctuation">)</span>

    <span class="token comment">// Create error using fmt</span>
	err2 <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;second %s&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err1<span class="token punctuation">,</span> err2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="errors-join" tabindex="-1"><a class="header-anchor" href="#errors-join"><span>errors.Join</span></a></h2><p>In Go 1.20, <code>errors.Join</code> was introduced to combine multiple <code>error</code>s into one array.</p><details class="hint-container details"><summary>Example</summary><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;errors&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// Create error using New</span>
	err1 <span class="token operator">:=</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;first error&quot;</span><span class="token punctuation">)</span>

	<span class="token comment">// Create error using fmt</span>
	err2 <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;second %s&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">)</span>

	<span class="token comment">// Use join to combine multiple errors</span>
	err3 <span class="token operator">:=</span> errors<span class="token punctuation">.</span><span class="token function">Join</span><span class="token punctuation">(</span>err1<span class="token punctuation">,</span> err2<span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err1<span class="token punctuation">,</span> err2<span class="token punctuation">)</span> 
	<span class="token comment">// Output: first error second error</span>
	
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err3<span class="token punctuation">)</span> 
	<span class="token comment">// Output: </span>
	<span class="token comment">// first error</span>
	<span class="token comment">// second error</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="errors-is" tabindex="-1"><a class="header-anchor" href="#errors-is"><span>errors.Is</span></a></h2><p>We can use <code>errors.Is()</code> to determine whether the current <code>error</code> contains the target type of <code>error</code>.</p><details class="hint-container details"><summary>Example</summary><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;errors&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// Create error using New</span>
	err1 <span class="token operator">:=</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;first error&quot;</span><span class="token punctuation">)</span>

	<span class="token comment">// Create error using fmt</span>
	err2 <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;second %s&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">)</span>

	<span class="token comment">// Use join to combine multiple errors</span>
	err3 <span class="token operator">:=</span> errors<span class="token punctuation">.</span><span class="token function">Join</span><span class="token punctuation">(</span>err1<span class="token punctuation">,</span> err2<span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err1<span class="token punctuation">,</span> err2<span class="token punctuation">)</span> 
	<span class="token comment">// Output: first error second error</span>
	
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err3<span class="token punctuation">)</span> 
	<span class="token comment">// Output: </span>
	<span class="token comment">// first error</span>
	<span class="token comment">// second error</span>

	<span class="token comment">// Use errors.Is() to determine whether the error is the target error. Since err3 contains err1, it is true.</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>errors<span class="token punctuation">.</span><span class="token function">Is</span><span class="token punctuation">(</span>err1<span class="token punctuation">,</span> err2<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token comment">// Output: false</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>errors<span class="token punctuation">.</span><span class="token function">Is</span><span class="token punctuation">(</span>err3<span class="token punctuation">,</span> err1<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token comment">// Output: true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="errors-as" tabindex="-1"><a class="header-anchor" href="#errors-as"><span>errors.As</span></a></h2><p>We can use <code>errors.As()</code> to assign the first error in the error that matches the target type to the target object.</p><details class="hint-container details"><summary>Example</summary><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
	<span class="token comment">// Create error using New</span>
	err1 <span class="token operator">:=</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;first error&quot;</span><span class="token punctuation">)</span>

	<span class="token comment">// Create T</span>
	err2 <span class="token operator">:=</span> NormalErr<span class="token punctuation">{</span><span class="token string">&quot;second error&quot;</span><span class="token punctuation">}</span>

	<span class="token comment">// Use join to combine multiple errors</span>
	err3 <span class="token operator">:=</span> errors<span class="token punctuation">.</span><span class="token function">Join</span><span class="token punctuation">(</span>err1<span class="token punctuation">,</span> err2<span class="token punctuation">)</span>

	<span class="token keyword">var</span> err4 NormalErr

	errors<span class="token punctuation">.</span><span class="token function">As</span><span class="token punctuation">(</span>err3<span class="token punctuation">,</span> <span class="token operator">&amp;</span>err4<span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err4<span class="token punctuation">)</span>
	<span class="token comment">// Output： second error</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,17),r=[o];function i(p,c){return s(),a("div",null,r)}const d=n(t,[["render",i],["__file","4-errorhandling.html.vue"]]),m=JSON.parse('{"path":"/en/guide/concepts/golang/4-errorhandling.html","title":"Error Handling","lang":"en-US","frontmatter":{"order":4,"title":"Error Handling","description":"Interface Golang provides an interface type error: Any structure that implements the Error() method belongs to the error type. Creating Errors Golang provides several ways to cr...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://goguide.ryansu.tech/guide/concepts/golang/4-errorhandling.html"}],["meta",{"property":"og:url","content":"https://goguide.ryansu.tech/en/guide/concepts/golang/4-errorhandling.html"}],["meta",{"property":"og:site_name","content":"Go Guide"}],["meta",{"property":"og:title","content":"Error Handling"}],["meta",{"property":"og:description","content":"Interface Golang provides an interface type error: Any structure that implements the Error() method belongs to the error type. Creating Errors Golang provides several ways to cr..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-28T05:09:46.000Z"}],["meta",{"property":"article:author","content":"Go Guide"}],["meta",{"property":"article:modified_time","content":"2024-01-28T05:09:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Error Handling\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-28T05:09:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Go Guide\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]]},"headers":[{"level":2,"title":"Interface","slug":"interface","link":"#interface","children":[]},{"level":2,"title":"Creating Errors","slug":"creating-errors","link":"#creating-errors","children":[]},{"level":2,"title":"errors.Join","slug":"errors-join","link":"#errors-join","children":[]},{"level":2,"title":"errors.Is","slug":"errors-is","link":"#errors-is","children":[]},{"level":2,"title":"errors.As","slug":"errors-as","link":"#errors-as","children":[]}],"git":{"createdTime":1705569723000,"updatedTime":1706418586000,"contributors":[{"name":"Ryan Su","email":"yuansu.china.work@gmail.com","commits":2}]},"readingTime":{"minutes":1.16,"words":349},"filePathRelative":"en/guide/concepts/golang/4-errorhandling.md","localizedDate":"January 18, 2024","autoDesc":true,"excerpt":"<h2>Interface</h2>\\n<p>Golang provides an interface type <code>error</code>:</p>\\n<div class=\\"language-go\\" data-ext=\\"go\\" data-title=\\"go\\"><pre class=\\"language-go\\"><code><span class=\\"token keyword\\">type</span> <span class=\\"token builtin\\">error</span> <span class=\\"token keyword\\">interface</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token function\\">Error</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token builtin\\">string</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>"}');export{d as comp,m as data};
