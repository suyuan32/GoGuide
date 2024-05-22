import{_ as n}from"./panic-call-C9OxU7iz.js";import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,o as e,d as t}from"./app-Du-TCu9s.js";const c={},i=t(`<h2 id="panic-recover-异常处理" tabindex="-1"><a class="header-anchor" href="#panic-recover-异常处理"><span>Panic &amp; Recover | 异常处理</span></a></h2><p>在 Golang 中，<code>panic</code> 和 <code>recover</code> 是用于处理异常的两个关键字，<code>panic</code> 用于引发异常，<code>recover</code> 用于捕获异常。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><table><thead><tr><th>函数</th><th>描述</th></tr></thead><tbody><tr><td><code>panic(interface{})</code></td><td>引发异常，停止当前 <code>Goroutine</code> 的执行, 并递归执行当前 <code>Goroutine</code> 中的 <code>defer</code> 方法</td></tr><tr><td><code>recover() interface{}</code></td><td>捕获异常，返回异常信息，用于处理异常，防止异常导致的程序崩溃，仅可以在 <code>defer</code> 中调用</td></tr></tbody></table></div><h3 id="panic-的数据结构" tabindex="-1"><a class="header-anchor" href="#panic-的数据结构"><span>Panic 的数据结构</span></a></h3><p><code>panic</code> 的数据结构位于 <code>runtime._panic</code> 结构体中，其定义如下：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token comment">// _panic 保存有关活动 panic 的信息。</span>
<span class="token comment">//</span>
<span class="token comment">// _panic 值只能存在于堆栈上。</span>
<span class="token comment">//</span>
<span class="token comment">// argp 和 link 字段是堆栈指针，但在堆栈增长期间不需要特殊处理：</span>
<span class="token comment">// 因为它们是指针类型，而 _panic 值仅存在于堆栈上，所以常规的堆栈指针调整会处理它们。</span>
<span class="token keyword">type</span> _panic <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	argp unsafe<span class="token punctuation">.</span>Pointer <span class="token comment">// 指向在 panic 期间运行的延迟调用的参数；不能移动 - 已知于 liblink</span>
	arg  any            <span class="token comment">// panic 的参数</span>
	link <span class="token operator">*</span>_panic        <span class="token comment">// 指向先前 panic 的链接</span>

	<span class="token comment">// startPC 和 startSP 跟踪 _panic.start 被调用的位置。</span>
	startPC <span class="token builtin">uintptr</span>
	startSP unsafe<span class="token punctuation">.</span>Pointer

	<span class="token comment">// 我们正在运行延迟调用的当前堆栈帧。</span>
	sp unsafe<span class="token punctuation">.</span>Pointer
	lr <span class="token builtin">uintptr</span>
	fp unsafe<span class="token punctuation">.</span>Pointer

	<span class="token comment">// 如果最后由 _panic.next() 返回的函数恢复了 panic，retpc 存储 panic 应该跳回的 PC。</span>
	retpc <span class="token builtin">uintptr</span>

	<span class="token comment">// 用于处理内联 defer 的额外状态。</span>
	deferBitsPtr <span class="token operator">*</span><span class="token builtin">uint8</span>
	slotsPtr     unsafe<span class="token punctuation">.</span>Pointer

	recovered   <span class="token builtin">bool</span> <span class="token comment">// 此 panic 是否已被恢复</span>
	goexit      <span class="token builtin">bool</span>
	deferreturn <span class="token builtin">bool</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>_panic</code> 结构体用于保存有关活动 panic 的信息。</li><li><code>_panic</code> 值只能存在于堆栈上，不会分配到堆上。</li><li><code>argp</code> 和 <code>link</code> 字段是堆栈指针，但在堆栈增长期间不需要特殊处理。因为它们是指针类型，而 <code>_panic</code> 值仅存在于堆栈上，所以常规的堆栈指针调整会处理它们。</li><li><code>startPC</code> 和 <code>startSP</code> 跟踪 <code>_panic.start</code> 被调用的位置。</li><li><code>sp</code> 是当前运行延迟调用的堆栈帧的指针。</li><li><code>retpc</code> 存储 panic 应该跳回的 PC，如果最后由 <code>_panic.next()</code> 返回的函数恢复了 panic。</li><li><code>recovered</code> 表示此 panic 是否已被恢复。</li></ul><div class="hint-container important"><p class="hint-container-title">作用范围</p><ul><li><code>panic</code> 只会触发当前 <code>Goroutine</code> 的 <code>defer</code>。</li></ul><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> <span class="token number">4</span> <span class="token punctuation">{</span>
		<span class="token keyword">go</span> <span class="token function">testPanic</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>


	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">testPanic</span><span class="token punctuation">(</span>i <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> r <span class="token operator">:=</span> <span class="token function">recover</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> r <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;recover panic: &quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">{</span>
		<span class="token function">panic</span><span class="token punctuation">(</span>fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;panic %d&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;test panic: &quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 结果</span>
<span class="token comment">// test panic:  0</span>
<span class="token comment">// recover panic:  1</span>
<span class="token comment">// test panic:  3</span>
<span class="token comment">// test panic:  2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>recover</code> 用于捕获异常，返回异常信息，用于处理异常，防止异常导致的程序崩溃，仅在 <code>defer</code> 中调用有效，其他地方调用只会返回 <code>nil</code>。</li><li><code>panic</code> 也可以在 <code>defer</code> 中被调用</li></ul><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> <span class="token number">4</span> <span class="token punctuation">{</span>
		<span class="token keyword">go</span> <span class="token function">testPanic</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>


	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">testPanic</span><span class="token punctuation">(</span>i <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> r <span class="token operator">:=</span> <span class="token function">recover</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> r <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;recover panic: &quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
			<span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">&quot;panic in defer&quot;</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">{</span>
		<span class="token function">panic</span><span class="token punctuation">(</span>fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;panic %d&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;test panic: &quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 结果</span>
<span class="token comment">//	test panic:  3</span>
<span class="token comment">//	test panic:  0</span>
<span class="token comment">//	test panic:  2</span>
<span class="token comment">//	recover panic:  1</span>
<span class="token comment">//	panic: panic 1 [recovered]</span>
<span class="token comment">//	panic: panic in defer</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="panic-的执行流程" tabindex="-1"><a class="header-anchor" href="#panic-的执行流程"><span>Panic 的执行流程</span></a></h3><figure><img src="`+n+`" alt="Panic 执行流程" tabindex="0" loading="lazy"><figcaption>Panic 执行流程</figcaption></figure><div class="hint-container info"><p class="hint-container-title">执行流程</p><ol><li>编译器将 <code>panic</code> 转换成 <code>runtime</code> 包中的 <code>gopanic</code> 函数并调用</li><li>将 <code>Gorountine</code> 的 <code>defer</code> 链表逆序执行</li><li>如果 <code>defer</code> 中没有 <code>recover</code>，则执行 <code>defer</code> 中的代码</li><li>如果 <code>defer</code> 中有 <code>recover</code>，则会调用 <code>runtime.gorecover</code>, 将 <code>panic</code> 中的 <code>recovered</code> 置为 <code>true</code>，然后从 <code>runtime._defer</code> 中取出程序计数器 <code>pc</code> 和栈指针 <code>sp</code>，并执行 <code>runtime.recovery</code> 恢复程序，最后调用 <code>runtime.deferproc</code> 返回 <code>1</code>，表示 <code>recover</code> 成功。</li><li><code>panic</code> 的 <code>deferreturn</code> 字段置为 <code>true</code>，表示 <code>defer</code> 已经执行完毕</li><li>如果所有 <code>defer</code> 中都没有 <code>recover()</code>， 则程序会执行 <code>runtime.fatalpanic</code> 终止运行</li></ol><details class="hint-container details"><summary>例子</summary><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;func 1&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;func 2&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;func 3&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> r <span class="token operator">:=</span> <span class="token function">recover</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> r <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;recover&quot;</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">&quot;panic&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token comment">// 结果</span>
<span class="token comment">//	func 3</span>
<span class="token comment">//	recover</span>
<span class="token comment">//	func 2</span>
<span class="token comment">//	func 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><h3 id="异常捕获" tabindex="-1"><a class="header-anchor" href="#异常捕获"><span>异常捕获</span></a></h3><div class="hint-container warning"><p class="hint-container-title">难以捕获的异常类型, 无法通过 recover 捕获</p><ul><li><strong>内存溢出</strong>： 当预分配空间过大导致内存溢出时，会返回 <code>runtime: out of memory</code>, 无法通过 <code>recover</code> 捕获恢复</li><li><strong>map 并发读写</strong>: 当 map 并发读写时，会返回 <code>concurrent map read and map write</code>, 无法通过 <code>recover</code> 捕获恢复</li><li><strong>栈内存耗尽</strong>: 当栈内存耗尽时，会返回 <code>runtime: goroutine stack exceeds 1000000000-byte limit</code>, 无法通过 <code>recover</code> 捕获恢复</li><li><strong>Goroutine运行空函数</strong>: 当 Goroutine 运行空函数时，会返回 <code>runtime: goroutine running on NULL machine</code>, 无法通过 <code>recover</code> 捕获恢复</li><li><strong>全部Goroutine休眠</strong>: 当全部 Goroutine 休眠时，会返回 <code>all goroutines are asleep - deadlock!</code>, 无法通过 <code>recover</code> 捕获恢复</li></ul></div><div class="hint-container tip"><p class="hint-container-title">可以捕获的异常</p><ul><li><strong>数组越界</strong>: 当数组越界时，会返回 <code>panic: runtime error: index out of range</code>, 可以通过 <code>recover</code> 捕获恢复</li><li><strong>空指针引用</strong>: 当空指针引用时，会返回 <code>panic: runtime error: invalid memory address or nil pointer dereference</code>, 可以通过 <code>recover</code> 捕获恢复</li><li><strong>类型断言失败</strong>: 当类型断言失败时，会返回 <code>panic: interface conversion: interface {} is nil, not int</code>, 可以通过 <code>recover</code> 捕获恢复</li><li><strong>除数为0</strong>: 当除数为0时，会返回 <code>panic: runtime error: integer divide by zero</code>, 可以通过 <code>recover</code> 捕获恢复</li><li><strong>调用不存在的方法</strong>: 当调用不存在的方法时，会返回 <code>panic: runtime error: invalid memory address or nil pointer dereference</code>, 可以通过 <code>recover</code> 捕获恢复</li></ul></div>`,14),o=[i];function p(l,d){return e(),a("div",null,o)}const k=s(c,[["render",p],["__file","10-panic-recover.html.vue"]]),m=JSON.parse('{"path":"/guide/concepts/golang/10-panic-recover.html","title":"Panic & Recover","lang":"zh-CN","frontmatter":{"order":10,"title":"Panic & Recover","icon":"line-md:star-filled","head":[["meta",{"name":"keywords","content":"golang, panic, recover, 异常处理"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://goguide.ryansu.tech/en/guide/concepts/golang/10-panic-recover.html"}],["meta",{"property":"og:url","content":"https://goguide.ryansu.tech/guide/concepts/golang/10-panic-recover.html"}],["meta",{"property":"og:site_name","content":"Go 面试宝典"}],["meta",{"property":"og:title","content":"Panic & Recover"}],["meta",{"property":"og:description","content":"Panic & Recover | 异常处理 在 Golang 中，panic 和 recover 是用于处理异常的两个关键字，panic 用于引发异常，recover 用于捕获异常。 提示 Panic 的数据结构 panic 的数据结构位于 runtime._panic 结构体中，其定义如下： _panic 结构体用于保存有关活动 panic 的信息..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://goguide.ryansu.tech/assets/image/article/concept/panic-call.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-04T09:21:57.000Z"}],["meta",{"property":"article:author","content":"Go Guide"}],["meta",{"property":"article:modified_time","content":"2024-05-04T09:21:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Panic & Recover\\",\\"image\\":[\\"https://goguide.ryansu.tech/assets/image/article/concept/panic-call.png\\"],\\"dateModified\\":\\"2024-05-04T09:21:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Go Guide\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]],"description":"Panic & Recover | 异常处理 在 Golang 中，panic 和 recover 是用于处理异常的两个关键字，panic 用于引发异常，recover 用于捕获异常。 提示 Panic 的数据结构 panic 的数据结构位于 runtime._panic 结构体中，其定义如下： _panic 结构体用于保存有关活动 panic 的信息..."},"headers":[{"level":2,"title":"Panic & Recover | 异常处理","slug":"panic-recover-异常处理","link":"#panic-recover-异常处理","children":[{"level":3,"title":"Panic 的数据结构","slug":"panic-的数据结构","link":"#panic-的数据结构","children":[]},{"level":3,"title":"Panic 的执行流程","slug":"panic-的执行流程","link":"#panic-的执行流程","children":[]},{"level":3,"title":"异常捕获","slug":"异常捕获","link":"#异常捕获","children":[]}]}],"git":{"createdTime":1714814517000,"updatedTime":1714814517000,"contributors":[{"name":"Ryan Su","email":"yuansu.china.work@gmail.com","commits":1}]},"readingTime":{"minutes":4.42,"words":1325},"filePathRelative":"guide/concepts/golang/10-panic-recover.md","localizedDate":"2024年5月4日","autoDesc":true,"excerpt":"<h2>Panic &amp; Recover | 异常处理</h2>\\n<p>在 Golang 中，<code>panic</code> 和 <code>recover</code> 是用于处理异常的两个关键字，<code>panic</code> 用于引发异常，<code>recover</code> 用于捕获异常。</p>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">提示</p>\\n<table>\\n<thead>\\n<tr>\\n<th>函数</th>\\n<th>描述</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td><code>panic(interface{})</code></td>\\n<td>引发异常，停止当前 <code>Goroutine</code> 的执行, 并递归执行当前 <code>Goroutine</code> 中的 <code>defer</code> 方法</td>\\n</tr>\\n<tr>\\n<td><code>recover() interface{}</code></td>\\n<td>捕获异常，返回异常信息，用于处理异常，防止异常导致的程序崩溃，仅可以在 <code>defer</code> 中调用</td>\\n</tr>\\n</tbody>\\n</table>\\n</div>"}');export{k as comp,m as data};
