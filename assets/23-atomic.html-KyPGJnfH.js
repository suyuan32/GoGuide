import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,d as t}from"./app-BBtVOMpO.js";const e={},o=t(`<h2 id="原子操作-atomic" tabindex="-1"><a class="header-anchor" href="#原子操作-atomic"><span>原子操作 (Atomic)</span></a></h2><div class="hint-container info"><p class="hint-container-title">什么是原子操作?</p><p>原子操作是一种不可分割的操作，要么全部执行成功，要么全部执行失败。在针对内存中某个值的操作时，原子操作可以确保在并发环境下不会出现数据竞争，其他 goroutine 无法在操作进行中对该值进行读写。</p></div><p>在 Golang 中， 针对原子操作，我们可以使用 <code>sync/atomic</code> 包提供的原子操作函数。这些函数可以确保在并发环境下对共享资源进行安全的读写。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>实际上，原子操作也可以通过加锁来实现，但是加锁操作涉及到<strong>内核态</strong>的上下文切换，会有比较大的性能消耗，而原子操作是在<strong>用户态</strong>完成的，性能更高，效率可能相差几倍。</p><p><strong>互斥锁和原子操作的区别</strong></p><ul><li>互斥锁通常用于保护一段代码，只有一个 <code>goroutine</code> 可以访问这段代码，其他 <code>goroutine</code> 需要等待， 而原子操作通常用于保护一个变量，确保在并发环境下对变量的读写是安全的。</li><li>互斥锁是一种悲观锁，它认为并发访问是一种常态，所以会在访问前先加锁，而原子操作是一种乐观锁，它认为并发访问是一种特例，所以会先尝试进行操作，如果失败再进行重试。</li><li>互斥锁是一种重量级锁，它会涉及到内核态的上下文切换，性能消耗较大，而原子操作是一种轻量级锁，它是在用户态完成的，性能更高。</li><li>互斥锁有操作系统的调度器实现， 而原子操作则是有硬件提供的原子指令实现，无需加锁而实现并发安全。</li></ul></div><details class="hint-container details"><summary>实现原理</summary><p>原子操作的实现原理是通过 <code>CPU</code> 提供的原子指令来实现的，这些指令可以确保在执行过程中不会被中断，从而保证操作的原子性。由于大多数 <code>CPU</code> 的原子操作都是基于 <code>32</code> 位或 <code>64</code> 位的寄存器，所以 <code>Golang</code> 原子操作的范围也仅限于这两种类型。</p><p><strong>原子操作 AddInt32 的汇编代码</strong></p><div class="language-asm line-numbers-mode" data-ext="asm" data-title="asm"><pre class="language-asm"><code>TEXT ·AddInt32(SB), NOSPLIT, $0-12
    MOVQ ptr+0(FP), AX
    MOVQ old+8(FP), BX
    MOVQ new+0(FP), CX
    LOCK
    XADDL CX, (AX)
    CMP CX, BX
    JNE fail
    MOVQ $1, AX
    RET
fail:
    MOVQ $0, AX
    RET
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，<code>AddInt32</code> 函数的实现是通过 <code>LOCK</code> 将 <code>XADDL</code> 转为原子操作，可以确保在执行过程中不会被中断。</p></details><h3 id="原子操作函数" tabindex="-1"><a class="header-anchor" href="#原子操作函数"><span>原子操作函数</span></a></h3><table><thead><tr><th>操作</th><th>函数</th></tr></thead><tbody><tr><td>读取</td><td><code>LoadInt32</code>, <code>LoadInt64</code>, <code>LoadUint32</code>, <code>LoadUint64</code>, <code>LoadPointer</code>, <code>LoadUintptr</code></td></tr><tr><td>写入</td><td><code>StoreInt32</code>, <code>StoreInt64</code>, <code>StoreUint32</code>, <code>StoreUint64</code>, <code>StorePointer</code>, <code>StoreUintptr</code></td></tr><tr><td>交换</td><td><code>SwapInt32</code>, <code>SwapInt64</code>, <code>SwapUint32</code>, <code>SwapUint64</code>, <code>SwapPointer</code>, <code>SwapUintptr</code></td></tr><tr><td>比较并交换</td><td><code>CompareAndSwapInt32</code>, <code>CompareAndSwapInt64</code>, <code>CompareAndSwapUint32</code>, <code>CompareAndSwapUint64</code>, <code>CompareAndSwapPointer</code>, <code>CompareAndSwapUintptr</code></td></tr><tr><td>增减</td><td><code>AddInt32</code>, <code>AddInt64</code>, <code>AddUint32</code>, <code>AddUint64</code>, <code>AddUintptr</code></td></tr></tbody></table><div class="hint-container tip"><p class="hint-container-title">效率对比</p><p>我们以累加到 10000 为例，看下加锁和原子操作的效率对比</p><ul><li><strong>不加锁且不使用原子操作</strong></li></ul><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;sync&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> count <span class="token operator">=</span> <span class="token number">0</span>


<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	wg <span class="token operator">:=</span> sync<span class="token punctuation">.</span>WaitGroup<span class="token punctuation">{</span><span class="token punctuation">}</span>
	start <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span> <span class="token operator">=</span> <span class="token keyword">range</span> <span class="token number">10000</span> <span class="token punctuation">{</span>
		wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			count <span class="token operator">++</span>
			wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;time cost: %v, count: %d&quot;</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span><span class="token function">Since</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container important"><p class="hint-container-title">重要</p><p>time cost: 2.5907ms, count: 9663 <br><strong>可以看到，由于没有加锁，导致 count 的值并没有累加到 10000</strong></p></div><ul><li><strong>加锁</strong></li></ul><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;sync&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> count <span class="token operator">=</span> <span class="token number">0</span>


<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	wg <span class="token operator">:=</span> sync<span class="token punctuation">.</span>WaitGroup<span class="token punctuation">{</span><span class="token punctuation">}</span>
	lock <span class="token operator">:=</span> sync<span class="token punctuation">.</span>Mutex<span class="token punctuation">{</span><span class="token punctuation">}</span>
	start <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span> <span class="token operator">=</span> <span class="token keyword">range</span> <span class="token number">10000</span> <span class="token punctuation">{</span>
		wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			lock<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			count <span class="token operator">++</span>
			lock<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;time cost: %v, count: %d&quot;</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span><span class="token function">Since</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container important"><p class="hint-container-title">重要</p><p>time cost: 3.2373ms, count: 10000 <br><strong>可以看到时间消耗为 3.2373 毫秒，累加值为 10000</strong></p></div><ul><li><strong>原子操作</strong></li></ul><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;sync&quot;</span>
	<span class="token string">&quot;sync/atomic&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> count <span class="token builtin">int64</span> <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	wg <span class="token operator">:=</span> sync<span class="token punctuation">.</span>WaitGroup<span class="token punctuation">{</span><span class="token punctuation">}</span>
	start <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span> <span class="token operator">=</span> <span class="token keyword">range</span> <span class="token number">10000</span> <span class="token punctuation">{</span>
		wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			atomic<span class="token punctuation">.</span><span class="token function">AddInt64</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>count<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
			wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;time cost: %v, count: %d&quot;</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span><span class="token function">Since</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container important"><p class="hint-container-title">重要</p><p>time cost: 2.6217ms, count: 10000 <br><strong>可以看到时间消耗为 2.6217 毫秒，累加值为 10000</strong></p></div></div>`,8),c=[o];function i(p,l){return a(),s("div",null,c)}const r=n(e,[["render",i],["__file","23-atomic.html.vue"]]),k=JSON.parse('{"path":"/guide/concepts/golang/23-atomic.html","title":"原子操作","lang":"zh-CN","frontmatter":{"order":23,"title":"原子操作","icon":"line-md:sunny-filled-loop-to-moon-filled-loop-transition","head":[["meta",{"name":"keywords","content":"Go, Golang, atomic, 原子操作, sync"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://goguide.ryansu.tech/en/guide/concepts/golang/23-atomic.html"}],["meta",{"property":"og:url","content":"https://goguide.ryansu.tech/guide/concepts/golang/23-atomic.html"}],["meta",{"property":"og:site_name","content":"Go 面试宝典"}],["meta",{"property":"og:title","content":"原子操作"}],["meta",{"property":"og:description","content":"原子操作 (Atomic) 什么是原子操作? 原子操作是一种不可分割的操作，要么全部执行成功，要么全部执行失败。在针对内存中某个值的操作时，原子操作可以确保在并发环境下不会出现数据竞争，其他 goroutine 无法在操作进行中对该值进行读写。 在 Golang 中， 针对原子操作，我们可以使用 sync/atomic 包提供的原子操作函数。这些函数可..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-05T12:51:23.000Z"}],["meta",{"property":"article:author","content":"Go Guide"}],["meta",{"property":"article:modified_time","content":"2024-05-05T12:51:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"原子操作\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-05T12:51:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Go Guide\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]],"description":"原子操作 (Atomic) 什么是原子操作? 原子操作是一种不可分割的操作，要么全部执行成功，要么全部执行失败。在针对内存中某个值的操作时，原子操作可以确保在并发环境下不会出现数据竞争，其他 goroutine 无法在操作进行中对该值进行读写。 在 Golang 中， 针对原子操作，我们可以使用 sync/atomic 包提供的原子操作函数。这些函数可..."},"headers":[{"level":2,"title":"原子操作 (Atomic)","slug":"原子操作-atomic","link":"#原子操作-atomic","children":[{"level":3,"title":"原子操作函数","slug":"原子操作函数","link":"#原子操作函数","children":[]}]}],"git":{"createdTime":1714913483000,"updatedTime":1714913483000,"contributors":[{"name":"Ryan Su","email":"yuansu.china.work@gmail.com","commits":1}]},"readingTime":{"minutes":3.25,"words":974},"filePathRelative":"guide/concepts/golang/23-atomic.md","localizedDate":"2024年5月5日","autoDesc":true,"excerpt":"<h2>原子操作 (Atomic)</h2>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">什么是原子操作?</p>\\n<p>原子操作是一种不可分割的操作，要么全部执行成功，要么全部执行失败。在针对内存中某个值的操作时，原子操作可以确保在并发环境下不会出现数据竞争，其他 goroutine 无法在操作进行中对该值进行读写。</p>\\n</div>\\n<p>在 Golang 中， 针对原子操作，我们可以使用 <code>sync/atomic</code> 包提供的原子操作函数。这些函数可以确保在并发环境下对共享资源进行安全的读写。</p>"}');export{r as comp,k as data};
