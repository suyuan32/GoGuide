import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,d as e}from"./app-rHVAkiDZ.js";const t={},o=e(`<h2 id="interface" tabindex="-1"><a class="header-anchor" href="#interface" aria-hidden="true">#</a> Interface</h2><p>Golang provides an interface type <code>error</code>:</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> <span class="token builtin">error</span> <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Any structure that implements the <code>Error()</code> method belongs to the <code>error</code> type.</p><h2 id="creating-errors" tabindex="-1"><a class="header-anchor" href="#creating-errors" aria-hidden="true">#</a> Creating Errors</h2><p>Golang provides several ways to create an <code>error</code>.</p><p>We can use <code>errors.New()</code> or <code>fmt.Errorf()</code> to create errors.</p><details><summary>Example</summary><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="errors-join" tabindex="-1"><a class="header-anchor" href="#errors-join" aria-hidden="true">#</a> errors.Join</h2><p>In Go 1.20, <code>errors.Join</code> was introduced to combine multiple <code>error</code>s into one array.</p><details><summary>Example</summary><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="errors-is" tabindex="-1"><a class="header-anchor" href="#errors-is" aria-hidden="true">#</a> errors.Is</h2><p>We can use <code>errors.Is()</code> to determine whether the current <code>error</code> contains the target type of <code>error</code>.</p><details><summary>Example</summary><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="errors-as" tabindex="-1"><a class="header-anchor" href="#errors-as" aria-hidden="true">#</a> errors.As</h2><p>We can use <code>errors.As()</code> to assign the first error in the error that matches the target type to the target object.</p><details><summary>Example</summary><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,17),i=[o];function r(p,c){return s(),a("div",null,i)}const d=n(t,[["render",r],["__file","4-errorhanding.html.vue"]]);export{d as default};
