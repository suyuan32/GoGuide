import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e}from"./app-rDFHbnhJ.js";const t={},o=e(`<h2 id="保留关键字" tabindex="-1"><a class="header-anchor" href="#保留关键字"><span>保留关键字</span></a></h2><p>golang 有 25 个保留的关键字，这些关键字不能用作程序标识符。</p><table><thead><tr><th>类型</th><th>关键字</th><th>介绍</th></tr></thead><tbody><tr><td>声明</td><td><code>const</code> <code>func</code> <code>import</code> <code>package</code> <code>type</code> <code>var</code></td><td>这些关键字用于声明代码中的各种元素</td></tr><tr><td>复合类型</td><td><code>chan</code> <code>interface</code> <code>map</code> <code>struct</code></td><td>这些关键字用于声明一些特殊的复合类型</td></tr><tr><td>流程控制</td><td><code>break</code> <code>case</code> <code>continue</code> <code>default</code> <code>else</code> <code>fallthrough</code> <code>for</code> <code>goto</code> <code>if</code> <code>range</code> <code>return</code> <code>select</code> <code>switch</code></td><td>这些关键字用于控制程序运行流程</td></tr><tr><td>功能修饰</td><td><code>defer</code> <code>go</code></td><td>用于修饰特殊的 function</td></tr></tbody></table><div class="hint-container warning"><p class="hint-container-title">注意</p><p>注意： 下面的例子中的 <code>T</code> 表示任意类型</p></div><h2 id="声明类型关键字" tabindex="-1"><a class="header-anchor" href="#声明类型关键字"><span>声明类型关键字</span></a></h2><h3 id="const" tabindex="-1"><a class="header-anchor" href="#const"><span><strong>const</strong></span></a></h3><p><code>const</code> 用于声明常量，常量一经声明就不能被更改，声明常量必须指定初始值。</p><details class="hint-container details"><summary>例子</summary><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">const</span> identifier T <span class="token operator">=</span> value  <span class="token comment">// T 为数据类型，可以省略，编译器会自己推断。</span>
<span class="token keyword">const</span> identifier1<span class="token punctuation">,</span> identifier2 <span class="token operator">=</span> value1<span class="token punctuation">,</span> value2 <span class="token comment">// 声明多个，如 const a, b, c = &quot;hello&quot;, 100, true</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
    FeMale <span class="token operator">=</span> <span class="token number">0</span>
    Male <span class="token operator">=</span> <span class="token number">1</span>
<span class="token punctuation">)</span> <span class="token comment">// 枚举</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
    a <span class="token operator">=</span> <span class="token boolean">iota</span>
    b
    c
<span class="token punctuation">)</span> <span class="token comment">// iota</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="func" tabindex="-1"><a class="header-anchor" href="#func"><span><strong>func</strong></span></a></h3><p><code>func</code> 用于声明函数，支持多个返回值，不支持默认参数。</p><details class="hint-container details"><summary>例子</summary><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token comment">// p 为参数， T 为类型</span>
<span class="token keyword">func</span> <span class="token function">Test</span><span class="token punctuation">(</span>p T<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> 
<span class="token keyword">func</span> <span class="token function">Test</span><span class="token punctuation">(</span>p T<span class="token punctuation">)</span> <span class="token punctuation">(</span>T1<span class="token punctuation">,</span> T2<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">func</span> Test <span class="token punctuation">(</span>p T<span class="token punctuation">,</span> p1<span class="token punctuation">,</span> T1<span class="token punctuation">,</span> list <span class="token operator">...</span>T3<span class="token punctuation">)</span> <span class="token punctuation">(</span>T4<span class="token punctuation">,</span> T5<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>  <span class="token comment">// 不定参数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="import" tabindex="-1"><a class="header-anchor" href="#import"><span><strong>import</strong></span></a></h3><p><code>import</code> 用于导入包，使用其公开的标识符。</p><p><code>import</code> 支持单行和多行导入。</p><details class="hint-container details"><summary>例子</summary><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token string">&quot;flag&quot;</span> <span class="token comment">// 单个导入</span>

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;flag&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span> <span class="token comment">// 多个导入</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>我们还可以使用 <code>.</code>, <code>_</code> 和别名修饰导入的包。</p><table><thead><tr><th>导入命令</th><th>使用方法</th><th>解析</th></tr></thead><tbody><tr><td><code>import &quot;lib/math&quot;</code></td><td>math.Sin</td><td>普通导入需要使用包名</td></tr><tr><td><code>import m &quot;lib/math&quot;</code></td><td>m.Sin</td><td>可以在导入时设置别名</td></tr><tr><td><code>import . &quot;lib/math&quot; </code></td><td>Sin</td><td>使用 <code>.</code> 导入本地可以直接使用函数，不需要包名</td></tr></tbody></table><p>我们还可以使用 <code>_</code> 来修饰导入的包，这样只会执行导入包的初始化函数 <code>init()</code></p><h3 id="package" tabindex="-1"><a class="header-anchor" href="#package"><span><strong>package</strong></span></a></h3><p><code>package</code> 用于定义包名</p><h4 id="type" tabindex="-1"><a class="header-anchor" href="#type"><span><strong>type</strong></span></a></h4><p><code>type</code> 用于定义变量类型</p><details class="hint-container details"><summary>例子</summary><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token comment">// 定义接口</span>
<span class="token keyword">type</span> Animal <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 定义结构</span>
<span class="token keyword">type</span> Tiger <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">// 定义等价类型</span>
<span class="token keyword">type</span> Num <span class="token builtin">int32</span> <span class="token comment">// 定义一个新的类型</span>
<span class="token keyword">type</span> Num <span class="token operator">=</span> <span class="token builtin">int32</span> <span class="token comment">// 仅定义别名</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="var" tabindex="-1"><a class="header-anchor" href="#var"><span><strong>var</strong></span></a></h3><p><code>var</code> 用于声明公开或者私有变量</p><details class="hint-container details"><summary>例子</summary><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">var</span> Name T  <span class="token comment">// 公开变量</span>
<span class="token keyword">var</span> name T  <span class="token comment">// 私有变量</span>

<span class="token keyword">var</span> name1<span class="token punctuation">,</span> name2 T <span class="token comment">// 声明多个相同类型的变量</span>
<span class="token keyword">var</span> name1<span class="token punctuation">,</span> name2 T <span class="token operator">=</span> val1<span class="token punctuation">,</span> val2 <span class="token comment">// 声明多个相同类型的变量, 并初始化</span>

<span class="token keyword">var</span> name1<span class="token punctuation">,</span> name2 <span class="token operator">=</span> val1<span class="token punctuation">,</span> val2 <span class="token comment">// 根据 val1, val2 自动推断类型并初始化</span>

<span class="token comment">// 使用括号</span>
<span class="token keyword">var</span> <span class="token punctuation">(</span>
    name1 <span class="token operator">=</span> val1
    name2 <span class="token operator">=</span> val2
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="复合类型" tabindex="-1"><a class="header-anchor" href="#复合类型"><span>复合类型</span></a></h2><h3 id="chan" tabindex="-1"><a class="header-anchor" href="#chan"><span><strong>chan</strong></span></a></h3><p><code>chan</code> (Channel) 用于声明信道。</p><details class="hint-container details"><summary>例子</summary><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token comment">// 用于发送和接收 T 类型的数据的信道</span>
<span class="token keyword">chan</span> T
<span class="token comment">// 用于发送 T 类型的数据的信道</span>
<span class="token operator">&lt;-</span><span class="token keyword">chan</span> T
<span class="token comment">// 用于接收 T 类型的数据的信道</span>
<span class="token keyword">chan</span><span class="token operator">&lt;-</span> T
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> T<span class="token punctuation">)</span> 		<span class="token comment">// 无缓冲信道</span>
ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> T<span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span>	<span class="token comment">// 带缓冲信道</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="interface" tabindex="-1"><a class="header-anchor" href="#interface"><span><strong>interface</strong></span></a></h3><p><code>interface</code> 用于声明接口</p><details class="hint-container details"><summary>例子</summary><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">type</span> File <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Read</span><span class="token punctuation">(</span>b Buffer<span class="token punctuation">)</span> <span class="token builtin">bool</span>
	<span class="token function">Write</span><span class="token punctuation">(</span>b Buffer<span class="token punctuation">)</span> <span class="token builtin">bool</span>
	<span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="map" tabindex="-1"><a class="header-anchor" href="#map"><span><strong>map</strong></span></a></h3><p><code>map</code> 用于声明集合，由无序的键值对组成，底层为 <code>hash map</code>. 虽然 <code>map</code> 会自动扩容，但是建议在初始化的时候就配置容量。</p><details class="hint-container details"><summary>例子</summary><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>m <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span>  <span class="token comment">// 空的 map</span>

m <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token comment">// 初始容量为 10 的 map</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="struct" tabindex="-1"><a class="header-anchor" href="#struct"><span><strong>struct</strong></span></a></h3><p><code>struct</code> 用于声明结构体</p><details class="hint-container details"><summary>例子</summary><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Name <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="流程控制" tabindex="-1"><a class="header-anchor" href="#流程控制"><span>流程控制</span></a></h2><h3 id="if-else" tabindex="-1"><a class="header-anchor" href="#if-else"><span><strong>if else</strong></span></a></h3><p><code>if</code> <code>else</code> 用于条件判断，可嵌套使用</p><details class="hint-container details"><summary>例子</summary><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">if</span> a <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;world&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="switch-fallthrough" tabindex="-1"><a class="header-anchor" href="#switch-fallthrough"><span><strong>switch fallthrough</strong></span></a></h3><p><code>switch</code> 用于根据不同条件执行不同的动作，默认每个 <code>case</code> 都带有 <code>break</code>, 执行完一个 <code>case</code> 会自动跳出，若希望继续执行下面的语句，需搭配 <code>fallthrough</code></p><details class="hint-container details"><summary>例子</summary><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>a <span class="token operator">:=</span> <span class="token string">&quot;2&quot;</span>
<span class="token keyword">switch</span> a <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;world&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span>  <span class="token comment">// 默认操作</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;default&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> 


<span class="token comment">// 结果： world</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>fallthrough</code> 可以在执行完对应 <code>case</code> 后直接执行下一个 <code>case</code> 的动作</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">var</span> dayOfWeek <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">4</span>

   <span class="token keyword">switch</span> dayOfWeek
 <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token number">1</span><span class="token punctuation">:</span>
         fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Monday&quot;</span><span class="token punctuation">)</span>
         <span class="token keyword">fallthrough</span>
      <span class="token keyword">case</span> <span class="token number">2</span><span class="token punctuation">:</span>
         fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Tuesday&quot;</span><span class="token punctuation">)</span>
         <span class="token keyword">fallthrough</span>
      <span class="token keyword">case</span> <span class="token number">3</span><span class="token punctuation">:</span>
         fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Wednesday&quot;</span><span class="token punctuation">)</span>
         <span class="token keyword">fallthrough</span>
      <span class="token keyword">case</span> <span class="token number">4</span><span class="token punctuation">:</span>
         fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Thursday&quot;</span><span class="token punctuation">)</span>
         <span class="token keyword">fallthrough</span>
      <span class="token keyword">case</span> <span class="token number">5</span><span class="token punctuation">:</span>
         fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Friday&quot;</span><span class="token punctuation">)</span>
         <span class="token keyword">fallthrough</span>
      <span class="token keyword">case</span> <span class="token number">6</span><span class="token punctuation">:</span>
         fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Saturday&quot;</span><span class="token punctuation">)</span>
      <span class="token keyword">case</span> <span class="token number">7</span><span class="token punctuation">:</span>
         fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Sunday&quot;</span><span class="token punctuation">)</span>
      <span class="token keyword">default</span><span class="token punctuation">:</span>
         fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Invalid Day&quot;</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 结果：</span>
<span class="token comment">// Thursday</span>
<span class="token comment">// Friday</span>
<span class="token comment">// Saturday</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="for-break-continue-range" tabindex="-1"><a class="header-anchor" href="#for-break-continue-range"><span><strong>for break continue range</strong></span></a></h3><p><code>for</code> 用于循环执行动作，使用 <code>break</code> 中断当前 <code>for</code> 循环， <code>continue</code> 用于跳过当前循环的剩余语句，继续执行下一轮循环</p><details class="hint-container details"><summary>例子</summary><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token comment">// 单个条件</span>
<span class="token keyword">for</span> i <span class="token operator">&lt;=</span> <span class="token number">10</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    i <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span>
<span class="token punctuation">}</span>

<span class="token comment">// 初始化并判断</span>
<span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// for range 遍历</span>
array <span class="token operator">:=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
<span class="token keyword">for</span> i<span class="token punctuation">,</span> v <span class="token operator">:=</span><span class="token keyword">range</span> array<span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span>v<span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token comment">// break</span>
<span class="token keyword">for</span> i<span class="token punctuation">,</span> v <span class="token operator">:=</span><span class="token keyword">range</span> array<span class="token punctuation">{</span>
    <span class="token keyword">if</span> i <span class="token operator">&gt;=</span> <span class="token number">2</span> <span class="token punctuation">{</span>
        <span class="token keyword">break</span>
    <span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span>v<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// continue</span>
<span class="token keyword">for</span> i<span class="token punctuation">,</span> v <span class="token operator">:=</span><span class="token keyword">range</span> array<span class="token punctuation">{</span>
    <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">2</span> <span class="token punctuation">{</span>
        <span class="token keyword">continue</span>
    <span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span>v<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="goto" tabindex="-1"><a class="header-anchor" href="#goto"><span><strong>goto</strong></span></a></h3><p><code>goto</code> 可以跳到指定位置继续执行动作</p><details class="hint-container details"><summary>例子</summary><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i <span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">5</span> <span class="token punctuation">{</span>
			<span class="token keyword">goto</span> end <span class="token comment">// 跳到 end 位置执行</span>
		<span class="token punctuation">}</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

end<span class="token punctuation">:</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;end&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token comment">// 结果： </span>
<span class="token comment">// 0</span>
<span class="token comment">// 1</span>
<span class="token comment">// 2</span>
<span class="token comment">// 3</span>
<span class="token comment">// 4</span>
<span class="token comment">// end</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="select" tabindex="-1"><a class="header-anchor" href="#select"><span><strong>select</strong></span></a></h3><p><code>select</code> 让 <code>goroutine</code> 等待多个通信操作，<code>select</code> 会阻塞直到一个 <code>case</code> 接收到信息，如果同时多个通道收到数据，则会随机执行一个 <code>case</code></p><details class="hint-container details"><summary>例子</summary><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> quit <span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	x<span class="token punctuation">,</span> y <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		<span class="token keyword">select</span> <span class="token punctuation">{</span>
		<span class="token keyword">case</span> c <span class="token operator">&lt;-</span> x<span class="token punctuation">:</span>
			x<span class="token punctuation">,</span> y <span class="token operator">=</span> y<span class="token punctuation">,</span> x<span class="token operator">+</span>y
		<span class="token keyword">case</span> <span class="token operator">&lt;-</span>quit<span class="token punctuation">:</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;quit&quot;</span><span class="token punctuation">)</span>
			<span class="token keyword">return</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	c <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
	quit <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">&lt;-</span>c<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		quit <span class="token operator">&lt;-</span> <span class="token number">0</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">fibonacci</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> quit<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="功能修饰" tabindex="-1"><a class="header-anchor" href="#功能修饰"><span>功能修饰</span></a></h2><h3 id="defer" tabindex="-1"><a class="header-anchor" href="#defer"><span><strong>defer</strong></span></a></h3><p><code>return</code> 用于终止函数的执行并返回0个或多个返回值， <code>defer</code> 用于函数 <code>return</code> 之前或执行完之后执行动作</p><details class="hint-container details"><summary>例子</summary><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">defer</span> fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;world&quot;</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 结果</span>
<span class="token comment">// hello</span>
<span class="token comment">// world</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p><ul><li><code>defer</code> 的执行顺序是后进先出</li><li><code>defer</code> 在 return 之前执行意味着可以使用 defer 获取 return 之前变量的最终结果</li></ul><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	num <span class="token operator">:=</span> <span class="token number">1</span>
	<span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> i <span class="token operator">++</span> <span class="token punctuation">{</span>
		num <span class="token operator">+=</span> i
	<span class="token punctuation">}</span>
	
<span class="token punctuation">}</span>

<span class="token comment">// 结果：</span>
<span class="token comment">// 7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go"><span><strong>go</strong></span></a></h3><p><code>go</code> 用于创建协程（goroutine）, 在程序后台执行动作</p><details class="hint-container details"><summary>例子</summary><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;no.1&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;no.2&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;start goroutine&quot;</span><span class="token punctuation">)</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token operator">*</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 结果：</span>
<span class="token comment">// start goroutine</span>
<span class="token comment">// no.1</span>
<span class="token comment">// no.2</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,62),c=[o];function p(i,l){return s(),a("div",null,c)}const r=n(t,[["render",p],["__file","1-keywords.html.vue"]]),k=JSON.parse('{"path":"/guide/concepts/golang/1-keywords.html","title":"保留关键字","lang":"zh-CN","frontmatter":{"order":1,"title":"保留关键字","head":[["meta",{"name":"keywords","content":"golang,保留关键字,const,func,import,package,type,var,chan,interface,map,struct,break,case,continue,default,else,fallthrough,for,goto,if,range,return,select,switch,defer"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://goguide.ryansu.tech/en/guide/concepts/golang/1-keywords.html"}],["meta",{"property":"og:url","content":"https://goguide.ryansu.tech/guide/concepts/golang/1-keywords.html"}],["meta",{"property":"og:site_name","content":"Go 面试宝典"}],["meta",{"property":"og:title","content":"保留关键字"}],["meta",{"property":"og:description","content":"保留关键字 golang 有 25 个保留的关键字，这些关键字不能用作程序标识符。 注意 注意： 下面的例子中的 T 表示任意类型 声明类型关键字 const const 用于声明常量，常量一经声明就不能被更改，声明常量必须指定初始值。 例子 func func 用于声明函数，支持多个返回值，不支持默认参数。 例子 import import 用于导入..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-04-27T13:22:38.000Z"}],["meta",{"property":"article:author","content":"Go Guide"}],["meta",{"property":"article:modified_time","content":"2024-04-27T13:22:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"保留关键字\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-27T13:22:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Go Guide\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]],"description":"保留关键字 golang 有 25 个保留的关键字，这些关键字不能用作程序标识符。 注意 注意： 下面的例子中的 T 表示任意类型 声明类型关键字 const const 用于声明常量，常量一经声明就不能被更改，声明常量必须指定初始值。 例子 func func 用于声明函数，支持多个返回值，不支持默认参数。 例子 import import 用于导入..."},"headers":[{"level":2,"title":"保留关键字","slug":"保留关键字","link":"#保留关键字","children":[]},{"level":2,"title":"声明类型关键字","slug":"声明类型关键字","link":"#声明类型关键字","children":[{"level":3,"title":"const","slug":"const","link":"#const","children":[]},{"level":3,"title":"func","slug":"func","link":"#func","children":[]},{"level":3,"title":"import","slug":"import","link":"#import","children":[]},{"level":3,"title":"package","slug":"package","link":"#package","children":[{"level":4,"title":"type","slug":"type","link":"#type","children":[]}]},{"level":3,"title":"var","slug":"var","link":"#var","children":[]}]},{"level":2,"title":"复合类型","slug":"复合类型","link":"#复合类型","children":[{"level":3,"title":"chan","slug":"chan","link":"#chan","children":[]},{"level":3,"title":"interface","slug":"interface","link":"#interface","children":[]},{"level":3,"title":"map","slug":"map","link":"#map","children":[]},{"level":3,"title":"struct","slug":"struct","link":"#struct","children":[]}]},{"level":2,"title":"流程控制","slug":"流程控制","link":"#流程控制","children":[{"level":3,"title":"if else","slug":"if-else","link":"#if-else","children":[]},{"level":3,"title":"switch fallthrough","slug":"switch-fallthrough","link":"#switch-fallthrough","children":[]},{"level":3,"title":"for break continue range","slug":"for-break-continue-range","link":"#for-break-continue-range","children":[]},{"level":3,"title":"goto","slug":"goto","link":"#goto","children":[]},{"level":3,"title":"select","slug":"select","link":"#select","children":[]}]},{"level":2,"title":"功能修饰","slug":"功能修饰","link":"#功能修饰","children":[{"level":3,"title":"defer","slug":"defer","link":"#defer","children":[]},{"level":3,"title":"go","slug":"go","link":"#go","children":[]}]}],"git":{"createdTime":1705244739000,"updatedTime":1714224158000,"contributors":[{"name":"Ryan Su","email":"yuansu.china.work@gmail.com","commits":3}]},"readingTime":{"minutes":5.2,"words":1561},"filePathRelative":"guide/concepts/golang/1-keywords.md","localizedDate":"2024年1月14日","autoDesc":true,"excerpt":"<h2>保留关键字</h2>\\n<p>golang 有 25 个保留的关键字，这些关键字不能用作程序标识符。</p>\\n<table>\\n<thead>\\n<tr>\\n<th>类型</th>\\n<th>关键字</th>\\n<th>介绍</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>声明</td>\\n<td><code>const</code>  <code>func</code> <code>import</code>  <code>package</code>  <code>type</code> <code>var</code></td>\\n<td>这些关键字用于声明代码中的各种元素</td>\\n</tr>\\n<tr>\\n<td>复合类型</td>\\n<td><code>chan</code> <code>interface</code> <code>map</code> <code>struct</code></td>\\n<td>这些关键字用于声明一些特殊的复合类型</td>\\n</tr>\\n<tr>\\n<td>流程控制</td>\\n<td><code>break</code> <code>case</code> <code>continue</code> <code>default</code> <code>else</code> <code>fallthrough</code> <code>for</code> <code>goto</code> <code>if</code> <code>range</code> <code>return</code> <code>select</code> <code>switch</code></td>\\n<td>这些关键字用于控制程序运行流程</td>\\n</tr>\\n<tr>\\n<td>功能修饰</td>\\n<td><code>defer</code> <code>go</code></td>\\n<td>用于修饰特殊的 function</td>\\n</tr>\\n</tbody>\\n</table>"}');export{r as comp,k as data};
