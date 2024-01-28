import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,d as t}from"./app-20U34SQp.js";const e={},p=t(`<h2 id="creating-slices" tabindex="-1"><a class="header-anchor" href="#creating-slices" aria-hidden="true">#</a> Creating Slices</h2><p>There are three ways to create slices.</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// First way: Declare directly</span>
	<span class="token keyword">var</span> dataSlice <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>

	<span class="token comment">// Second way: Initialize directly</span>
	dataSlice1 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

	<span class="token comment">// Third way: Use make</span>
	dataSlice2 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>dataSlice<span class="token punctuation">,</span> dataSlice1<span class="token punctuation">,</span> dataSlice2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can initialize data directly when creating it.</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>dataSlice1 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;Jack&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Mike&quot;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="slicing-slices" tabindex="-1"><a class="header-anchor" href="#slicing-slices" aria-hidden="true">#</a> Slicing Slices</h2><p><code>arr[beginIndex:endIndex]</code> can slice the slice, including the data of the beginIndex and excluding the data of the endIndex.</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>data <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">}</span>

fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">// Result</span>
<span class="token comment">// [2 3]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="length-and-capacity" tabindex="-1"><a class="header-anchor" href="#length-and-capacity" aria-hidden="true">#</a> Length and Capacity</h2><p>Use <code>len()</code> to get the length of the slice and <code>cap()</code> to get the capacity of the slice.</p><details class="hint-container details"><summary>Example</summary><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// Create a slice with a length of 5 and a capacity of 9</span>
	data <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// Result:</span>
<span class="token comment">// [0 0 0 0 0] 5 9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="appending-data" tabindex="-1"><a class="header-anchor" href="#appending-data" aria-hidden="true">#</a> Appending Data</h2><p>Use the <code>append()</code> function to append data.</p><details class="hint-container details"><summary>Example</summary><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	data <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">}</span>

	<span class="token comment">// Append one piece of data</span>
	data1 <span class="token operator">:=</span> <span class="token function">append</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>

	<span class="token comment">// Append multiple pieces of data</span>
	data2 <span class="token operator">:=</span> <span class="token function">append</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>data1<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>data2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// Result:</span>
<span class="token comment">// [0 1 2]</span>
<span class="token comment">// [0 1 2 3]</span>
<span class="token comment">// [0 1 2 4 5 6]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="cloning-slices" tabindex="-1"><a class="header-anchor" href="#cloning-slices" aria-hidden="true">#</a> Cloning Slices</h2><p>We know that slices are reference types. If you assign a slice to another variable, the data sharing the same memory address is actually shared. If you want to create two slices with the same data, you can use the <code>copy()</code> method.</p><details class="hint-container details"><summary>Example</summary><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	data <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">}</span>

	<span class="token comment">// Create a slice with the same length</span>
	data1 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>

	<span class="token comment">// Copy data to data1</span>
	<span class="token function">copy</span><span class="token punctuation">(</span>data1<span class="token punctuation">,</span> data<span class="token punctuation">)</span>

	<span class="token comment">// Add data to data1</span>
	data1 <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>data1<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>data1<span class="token punctuation">)</span>
	
	<span class="token comment">// You will find that data has not been changed.</span>
<span class="token punctuation">}</span>

<span class="token comment">// Result:</span>
<span class="token comment">// [0 1 2]</span>
<span class="token comment">// [0 1 2 3 4 5]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,17),i=[p];function c(o,l){return s(),a("div",null,i)}const r=n(e,[["render",c],["__file","6-slice.html.vue"]]);export{r as default};
