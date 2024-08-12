import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,d as n}from"./app-DLqeUa4U.js";const t={},e=n(`<h2 id="atomic-operations" tabindex="-1"><a class="header-anchor" href="#atomic-operations"><span>Atomic Operations</span></a></h2><div class="hint-container info"><p class="hint-container-title">What are Atomic Operations?</p><p>Atomic operations are indivisible operations that either succeed completely or fail completely. When performing operations on a value in memory, atomic operations ensure that there are no data races in a concurrent environment, preventing other goroutines from reading or writing to the value while the operation is in progress.</p></div><p>In Go, for atomic operations, we can use the functions provided by the <code>sync/atomic</code> package. These functions guarantee safe read and write access to shared resources in a concurrent environment.</p><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>In practice, atomic operations can also be implemented using locks. However, locking involves context switches in the <strong>kernel mode</strong>, resulting in significant performance overhead. Atomic operations, on the other hand, are performed in <strong>user mode</strong>, making them more efficient and potentially several times faster.</p><p><strong>Differences Between Mutex Locks and Atomic Operations</strong></p><ul><li>Mutex locks are typically used to protect a section of code, ensuring that only one goroutine can access that code at a time. In contrast, atomic operations are commonly used to protect a single variable, ensuring safe read and write access in a concurrent environment.</li><li>Mutex locks are pessimistic; they assume that concurrent access is common and therefore lock before accessing. Atomic operations are optimistic; they assume that concurrent access is rare and attempt the operation first. If it fails, they retry.</li><li>Mutex locks are heavyweight, involving kernel-level context switches. Atomic operations are lightweight, executed in user mode, resulting in better performance.</li><li>Mutex locks rely on the operating system&#39;s scheduler, while atomic operations use hardware-provided atomic instructions, avoiding the need for locks.</li></ul></div><details class="hint-container details"><summary>Implementation Details</summary><p>The implementation of atomic operations relies on the atomic instructions provided by the CPU. These instructions ensure that the operation cannot be interrupted during execution, guaranteeing atomicity. Since most CPUs support atomic operations on 32-bit or 64-bit registers, Go&#39;s atomic operations are limited to these types.</p><p><strong>Assembly Code for <code>AddInt32</code> Atomic Operation</strong></p><div class="language-asm line-numbers-mode" data-highlighter="shiki" data-ext="asm" data-title="asm" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">TEXT ·AddInt32(SB), </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">NOSPLIT</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">$0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#C678DD;">12</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    MOVQ</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> ptr+</span><span style="--shiki-light:#005CC5;--shiki-dark:#C678DD;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(FP), </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">AX</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    MOVQ</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> old+</span><span style="--shiki-light:#005CC5;--shiki-dark:#C678DD;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(FP), </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">BX</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    MOVQ</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> new+</span><span style="--shiki-light:#005CC5;--shiki-dark:#C678DD;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(FP), </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">CX</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    LOCK</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    XADDL </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">CX</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, (</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">AX</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    CMP</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> CX</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">BX</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    JNE</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> fail</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    MOVQ</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> $1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">AX</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    RET</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">fail:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    MOVQ</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> $0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">AX</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    RET</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In this example, the <code>AddInt32</code> function converts <code>XADDL</code> into an atomic operation using the <code>LOCK</code> prefix, ensuring that it cannot be interrupted during execution.</p></details><h3 id="atomic-operations-functions" tabindex="-1"><a class="header-anchor" href="#atomic-operations-functions"><span>Atomic Operations Functions</span></a></h3><table><thead><tr><th>Operation</th><th>Functions</th></tr></thead><tbody><tr><td>Read</td><td><code>LoadInt32</code>, <code>LoadInt64</code>, <code>LoadUint32</code>, <code>LoadUint64</code>, <code>LoadPointer</code>, <code>LoadUintptr</code></td></tr><tr><td>Write</td><td><code>StoreInt32</code>, <code>StoreInt64</code>, <code>StoreUint32</code>, <code>StoreUint64</code>, <code>StorePointer</code>, <code>StoreUintptr</code></td></tr><tr><td>Swap</td><td><code>SwapInt32</code>, <code>SwapInt64</code>, <code>SwapUint32</code>, <code>SwapUint64</code>, <code>SwapPointer</code>, <code>SwapUintptr</code></td></tr><tr><td>Compare and Swap</td><td><code>CompareAndSwapInt32</code>, <code>CompareAndSwapInt64</code>, <code>CompareAndSwapUint32</code>, <code>CompareAndSwapUint64</code>, <code>CompareAndSwapPointer</code>, <code>CompareAndSwapUintptr</code></td></tr><tr><td>Increment/Decrement</td><td><code>AddInt32</code>, <code>AddInt64</code>, <code>AddUint32</code>, <code>AddUint64</code>, <code>AddUintptr</code></td></tr></tbody></table><div class="hint-container tip"><p class="hint-container-title">Efficiency Comparison</p><p>Let&#39;s take the example of accumulating to 10,000 and compare the efficiency of locking and atomic operations.</p><ul><li><strong>Without Locking and Atomic Operations</strong></li></ul><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">package</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> main</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">	&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#98C379;">fmt</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">	&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#98C379;">sync</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">	&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#98C379;">time</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> count</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">func</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">	wg</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> sync</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">WaitGroup</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">	start</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> time</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Now</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">	for</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> _</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> range</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 10000</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">		wg</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Add</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">		go</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> func</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">			count</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">++</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">			wg</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Done</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">		}()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">	wg</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Wait</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">	fmt</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Printf</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;time cost: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">%v</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">, count: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">%d</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">time</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Since</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">start</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">), </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">count</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container important"><p class="hint-container-title">Important</p><p>Time cost: 2.5907ms, count: 9663 <br><strong>As you can see, due to the lack of locking, the value of <code>count</code> did not accumulate to 10,000.</strong></p></div><ul><li><strong>With Locking</strong></li></ul><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">package</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> main</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">	&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#98C379;">fmt</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">	&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#98C379;">sync</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">	&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#98C379;">time</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> count</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">func</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">	wg</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> sync</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">WaitGroup</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">	lock</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> sync</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Mutex</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">	start</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> time</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Now</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">	for</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> _</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> range</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 10000</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">		wg</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Add</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">		go</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> func</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">			lock</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Lock</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">			count</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> ++</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">			lock</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Unlock</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">			wg</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Done</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">		}()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">	wg</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Wait</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">	fmt</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Printf</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;time cost: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">%v</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">, count: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">%d</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">time</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Since</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">start</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">), </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">count</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container important"><p class="hint-container-title">Important</p><p>time cost: 3.2373ms, count: 10000 <br><strong>You can see that the time consumption is 3.2373 milliseconds and the cumulative value is 10000</strong></p></div><ul><li><strong>Atomic Operations</strong></li></ul><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">package</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> main</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">	&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#98C379;">fmt</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">	&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#98C379;">sync</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">	&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#98C379;">sync/atomic</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">	&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#98C379;">time</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> count</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> int64</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">func</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">	wg</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> sync</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">WaitGroup</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">	start</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> time</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Now</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">	for</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> _</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> range</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 10000</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">		wg</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Add</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">		go</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> func</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">			atomic</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">AddInt64</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">count</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">			wg</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Done</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">		}()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">	wg</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Wait</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">	fmt</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Printf</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;time cost: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">%v</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">, count: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">%d</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">time</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Since</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">start</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">), </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">count</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container important"><p class="hint-container-title">Important</p><p>time cost: 2.6217ms, count: 10000 <br><strong>You can see that the time consumption is 2.6217 milliseconds and the cumulative value is 10000</strong></p></div></div>`,8),l=[e];function h(p,k){return a(),s("div",null,l)}const o=i(t,[["render",h],["__file","23-atomic.html.vue"]]),c=JSON.parse('{"path":"/en/guide/concepts/golang/23-atomic.html","title":"Atomic Operations","lang":"en-US","frontmatter":{"order":23,"title":"Atomic Operations","icon":"line-md:sunny-filled-loop-to-moon-filled-loop-transition","head":[["meta",{"name":"keywords","content":"Go, Golang, atomic, Atomic Operations, sync"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://goguide.ryansu.tech/guide/concepts/golang/23-atomic.html"}],["meta",{"property":"og:url","content":"https://goguide.ryansu.tech/en/guide/concepts/golang/23-atomic.html"}],["meta",{"property":"og:site_name","content":"Go Guide"}],["meta",{"property":"og:title","content":"Atomic Operations"}],["meta",{"property":"og:description","content":"Atomic Operations What are Atomic Operations? Atomic operations are indivisible operations that either succeed completely or fail completely. When performing operations on a val..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-05T12:51:23.000Z"}],["meta",{"property":"article:author","content":"Go Guide"}],["meta",{"property":"article:modified_time","content":"2024-05-05T12:51:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Atomic Operations\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-05T12:51:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Go Guide\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]],"description":"Atomic Operations What are Atomic Operations? Atomic operations are indivisible operations that either succeed completely or fail completely. When performing operations on a val..."},"headers":[{"level":2,"title":"Atomic Operations","slug":"atomic-operations","link":"#atomic-operations","children":[{"level":3,"title":"Atomic Operations Functions","slug":"atomic-operations-functions","link":"#atomic-operations-functions","children":[]}]}],"git":{"createdTime":1714913483000,"updatedTime":1714913483000,"contributors":[{"name":"Ryan Su","email":"yuansu.china.work@gmail.com","commits":1}]},"readingTime":{"minutes":2.23,"words":670},"filePathRelative":"en/guide/concepts/golang/23-atomic.md","localizedDate":"May 5, 2024","autoDesc":true,"excerpt":"<h2>Atomic Operations</h2>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">What are Atomic Operations?</p>\\n<p>Atomic operations are indivisible operations that either succeed completely or fail completely. When performing operations on a value in memory, atomic operations ensure that there are no data races in a concurrent environment, preventing other goroutines from reading or writing to the value while the operation is in progress.</p>\\n</div>"}');export{o as comp,c as data};