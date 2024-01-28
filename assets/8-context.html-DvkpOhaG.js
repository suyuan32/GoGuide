import{_ as n}from"./context-Zv-w9OUj.js";import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as t,d as e}from"./app-20U34SQp.js";const o={},c=e(`<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p><code>Context</code> is a very important interface in Golang, used to define the context information in <code>goroutine</code>. <code>Context</code> is commonly used in the following situations:</p><ul><li>Data transfer: Transfer data among multiple <code>goroutines</code>.</li><li>Timeout management: By setting a timeout, the termination time of the coroutine can be conveniently configured.</li><li>Terminate coroutine: By using the <code>cancel()</code> method, the coroutine can be easily terminated, and multiple coroutines can be managed in batches.</li></ul><h3 id="context-interface" tabindex="-1"><a class="header-anchor" href="#context-interface" aria-hidden="true">#</a> Context Interface</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// A Context carries a deadline, a cancelation signal, and other values across</span>
<span class="token comment">// API boundaries.</span>
<span class="token comment">//</span>
<span class="token comment">// Context&#39;s methods may be called by multiple goroutines simultaneously.</span>
<span class="token keyword">type</span> Context <span class="token keyword">interface</span> <span class="token punctuation">{</span>

    <span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token function">Deadline</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>deadline time<span class="token punctuation">.</span>Time<span class="token punctuation">,</span> ok <span class="token builtin">bool</span><span class="token punctuation">)</span>
    
    <span class="token function">Err</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span>
    
    <span class="token function">Value</span><span class="token punctuation">(</span>key <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="root-nodes-and-derived-nodes" tabindex="-1"><a class="header-anchor" href="#root-nodes-and-derived-nodes" aria-hidden="true">#</a> Root Nodes and Derived Nodes</h2><p>We can create root nodes and derived nodes for <code>context</code>, forming a tree structure. When the root node is <code>cancel()</code> or terminated due to timeout, all its derived nodes will also be terminated, and the data of the root node will be shared by all derived nodes.</p><figure><img src="`+n+`" alt="context structure" tabindex="0" loading="lazy"><figcaption>context structure</figcaption></figure><h3 id="creating-root-nodes" tabindex="-1"><a class="header-anchor" href="#creating-root-nodes" aria-hidden="true">#</a> Creating Root Nodes</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>ctx <span class="token operator">:=</span> context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Create a blank context</span>

ctx2 <span class="token operator">:=</span> context<span class="token punctuation">.</span><span class="token function">TODO</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// TODO is also a blank context</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="creating-derived-nodes" tabindex="-1"><a class="header-anchor" href="#creating-derived-nodes" aria-hidden="true">#</a> Creating Derived Nodes</h3><p>Use <code>context.WithXXX()</code> to create derived <code>context</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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

<span class="token comment">// Results：</span>
<span class="token comment">// context.Background.WithValue(type string, val baseVal)</span>
<span class="token comment">// context.Background.WithValue(type string, val baseVal).WithValue(type string, val ctx1Val)</span>
<span class="token comment">// context.Background.WithValue(type string, val baseVal).WithValue(type string, val ctx2Val)</span>
<span class="token comment">// context.Background.WithValue(type string, val baseVal).WithValue(type string, val ctx3Val)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="withvalue" tabindex="-1"><a class="header-anchor" href="#withvalue" aria-hidden="true">#</a> WithValue()</h2><p><code>context.WithValue()</code> can be used to create derived nodes and add key-value data, while retaining all data of the parent context.</p><h2 id="withdeadline-withtimeout" tabindex="-1"><a class="header-anchor" href="#withdeadline-withtimeout" aria-hidden="true">#</a> WithDeadline() WithTimeout()</h2><p><code>context.WithDeadline()</code> and <code>context.WithTimeout()</code> can be used to create a <code>context</code> with timeout control.</p><div class="hint-container warning"><p class="hint-container-title">Warning</p><p><code>WithTimeout(1*time.Second)</code> is equivalent to <code>WithDeadline(time.Now().Add(1*time.Second))</code></p></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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

<span class="token comment">// Results：</span>
<span class="token comment">// running...</span>
<span class="token comment">// running...</span>
<span class="token comment">// running...</span>
<span class="token comment">// time out</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="withcancel" tabindex="-1"><a class="header-anchor" href="#withcancel" aria-hidden="true">#</a> WithCancel()</h2><p>Using <code>WithCancel()</code> can create a manually terminated <code>context</code>. Executing <code>cancel()</code> can manually terminate it.</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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

<span class="token comment">// Results：</span>
<span class="token comment">// running...</span>
<span class="token comment">// running...</span>
<span class="token comment">// running...</span>
<span class="token comment">// canceled</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),i=[c];function p(l,u){return a(),t("div",null,i)}const v=s(o,[["render",p],["__file","8-context.html.vue"]]);export{v as default};
