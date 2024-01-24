import{_ as n}from"./context-Zv-w9OUj.js";import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as t,d as e}from"./app-Fo3niZmw.js";const c={},p=e(`<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p><code>Context</code> 是 golang 中十分重要的接口，用于定义 <code>goroutine</code> 中的上下文信息，<code>context</code> 常用于以下几种情况：</p><ul><li>数据传递： 在多个 <code>goroutine</code> 中传递数据</li><li>超时管理： 通过配置超时时间，可以方便地配置协程的终止时间</li><li>终止协程： 通过使用 <code>cancel()</code> 方法，协程可以很方便地终止，可以批量管理多个协程的终止</li></ul><h3 id="context-接口" tabindex="-1"><a class="header-anchor" href="#context-接口" aria-hidden="true">#</a> Context 接口</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// A Context carries a deadline, a cancelation signal, and other values across</span>
<span class="token comment">// API boundaries.</span>
<span class="token comment">//</span>
<span class="token comment">// Context&#39;s methods may be called by multiple goroutines simultaneously.</span>
<span class="token keyword">type</span> Context <span class="token keyword">interface</span> <span class="token punctuation">{</span>

    <span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token function">Deadline</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>deadline time<span class="token punctuation">.</span>Time<span class="token punctuation">,</span> ok <span class="token builtin">bool</span><span class="token punctuation">)</span>
    
    <span class="token function">Err</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span>
    
    <span class="token function">Value</span><span class="token punctuation">(</span>key <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="根节点和派生节点" tabindex="-1"><a class="header-anchor" href="#根节点和派生节点" aria-hidden="true">#</a> 根节点和派生节点</h2><p>我们可以为 <code>context</code> 创建根节点和派生节点，为树形结构，当根节点被 <code>cancel()</code> 或超时终止时，它的所有派生节点也会被终止，根节点的数据也会被所有派生节点共享。</p><figure><img src="`+n+`" alt="context 结构" tabindex="0" loading="lazy"><figcaption>context 结构</figcaption></figure><h3 id="创建根节点" tabindex="-1"><a class="header-anchor" href="#创建根节点" aria-hidden="true">#</a> 创建根节点</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>ctx <span class="token operator">:=</span> context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 创建空白 context</span>

ctx2 <span class="token operator">:=</span> context<span class="token punctuation">.</span><span class="token function">TODO</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// TODO 同样是空白 context</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建派生节点" tabindex="-1"><a class="header-anchor" href="#创建派生节点" aria-hidden="true">#</a> 创建派生节点</h3><p>使用 <code>context.WithXXX()</code> 创建派生 <code>context</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;context&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	ctx <span class="token operator">:=</span> context<span class="token punctuation">.</span><span class="token function">WithValue</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;base&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;baseVal&quot;</span><span class="token punctuation">)</span>

	ctx1 <span class="token operator">:=</span> context<span class="token punctuation">.</span><span class="token function">WithValue</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token string">&quot;ctx1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ctx1Val&quot;</span><span class="token punctuation">)</span>
	ctx2 <span class="token operator">:=</span> context<span class="token punctuation">.</span><span class="token function">WithValue</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token string">&quot;ctx2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ctx2Val&quot;</span><span class="token punctuation">)</span>
	ctx3 <span class="token operator">:=</span> context<span class="token punctuation">.</span><span class="token function">WithValue</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token string">&quot;ctx3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ctx3Val&quot;</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>ctx1<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>ctx2<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>ctx3<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 结果：</span>
<span class="token comment">// context.Background.WithValue(type string, val baseVal)</span>
<span class="token comment">// context.Background.WithValue(type string, val baseVal).WithValue(type string, val ctx1Val)</span>
<span class="token comment">// context.Background.WithValue(type string, val baseVal).WithValue(type string, val ctx2Val)</span>
<span class="token comment">// context.Background.WithValue(type string, val baseVal).WithValue(type string, val ctx3Val)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="withvalue" tabindex="-1"><a class="header-anchor" href="#withvalue" aria-hidden="true">#</a> WithValue()</h2><p><code>context.WithValue()</code> 可以用于创建派生节点并添加键值数据，同时保留父级 context 所有的数据</p><h2 id="withdeadline-withtimeout" tabindex="-1"><a class="header-anchor" href="#withdeadline-withtimeout" aria-hidden="true">#</a> WithDeadline() WithTimeout()</h2><p><code>context.WithDeadline()</code> 和 <code>context.WithTimeout()</code> 可以用来创建带有超时控制的 <code>context</code></p><div class="hint-container warning"><p class="hint-container-title">注意</p><p><code>WithTimeout(1*time.Second)</code> 等同于 <code>WithDeadline(time.Now().Add(1*time.Second))</code></p></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;context&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	ctx<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> context<span class="token punctuation">.</span><span class="token function">WithTimeout</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token operator">*</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>

	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span>ctx1 context<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">{</span>
			<span class="token keyword">select</span> <span class="token punctuation">{</span>
			<span class="token keyword">case</span> <span class="token operator">&lt;-</span>ctx1<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
				fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;time out&quot;</span><span class="token punctuation">)</span>
				<span class="token keyword">return</span>
			<span class="token keyword">default</span><span class="token punctuation">:</span>
				fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;running...&quot;</span><span class="token punctuation">)</span>
				time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>

	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 结果：</span>
<span class="token comment">// running...</span>
<span class="token comment">// running...</span>
<span class="token comment">// running...</span>
<span class="token comment">// time out</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="withcancel" tabindex="-1"><a class="header-anchor" href="#withcancel" aria-hidden="true">#</a> WithCancel()</h2><p>使用 <code>WithCancel()</code> 可以创建手动终止的 <code>context</code> 执行 <code>cancel()</code> 即可手动终止</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;context&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	ctx<span class="token punctuation">,</span> cancel <span class="token operator">:=</span> context<span class="token punctuation">.</span><span class="token function">WithCancel</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span>ctx1 context<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">{</span>
			<span class="token keyword">select</span> <span class="token punctuation">{</span>
			<span class="token keyword">case</span> <span class="token operator">&lt;-</span>ctx1<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
				fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;canceled&quot;</span><span class="token punctuation">)</span>
				<span class="token keyword">return</span>
			<span class="token keyword">default</span><span class="token punctuation">:</span>
				fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;running...&quot;</span><span class="token punctuation">)</span>
				time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>

	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token operator">*</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
	<span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 结果：</span>
<span class="token comment">// running...</span>
<span class="token comment">// running...</span>
<span class="token comment">// running...</span>
<span class="token comment">// canceled</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),o=[p];function i(l,u){return a(),t("div",null,o)}const v=s(c,[["render",i],["__file","8-context.html.vue"]]);export{v as default};
