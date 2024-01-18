import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,d as e}from"./app-fwYxas4J.js";const t={},o=e(`<h2 id="keywords" tabindex="-1"><a class="header-anchor" href="#keywords" aria-hidden="true">#</a> Keywords</h2><p>Golang has 25 reserved keywords that cannot be used as program identifiers.</p><table><thead><tr><th>Type</th><th>Keywords</th><th>Introduction</th></tr></thead><tbody><tr><td>Declaration</td><td><code>const</code> <code>func</code> <code>import</code> <code>package</code> <code>type</code> <code>var</code></td><td>These keywords are used to declare various elements in the code.</td></tr><tr><td>Composite Types</td><td><code>chan</code> <code>interface</code> <code>map</code> <code>struct</code></td><td>These keywords are used to declare some special compound types.</td></tr><tr><td>Control Flow</td><td><code>break</code> <code>case</code> <code>continue</code> <code>default</code> <code>else</code> <code>fallthrough</code> <code>for</code> <code>goto</code> <code>if</code> <code>range</code> <code>return</code> <code>select</code> <code>switch</code></td><td>These keywords are used to control the flow of program execution.</td></tr><tr><td>Function Modifiers</td><td><code>defer</code> <code>go</code></td><td>Used to modify special functions.</td></tr></tbody></table><h2 id="declaration-types" tabindex="-1"><a class="header-anchor" href="#declaration-types" aria-hidden="true">#</a> Declaration Types</h2><h3 id="const" tabindex="-1"><a class="header-anchor" href="#const" aria-hidden="true">#</a> <strong>const</strong></h3><p><code>const</code> is used to declare constants, which once declared cannot be changed, and must specify an initial value when declaring a constant.</p><details><summary>Example</summary><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">const</span> identifier T <span class="token operator">=</span> value  <span class="token comment">// T is the data type, which can be omitted, and the compiler will infer it.</span>
<span class="token keyword">const</span> identifier1<span class="token punctuation">,</span> identifier2 <span class="token operator">=</span> value1<span class="token punctuation">,</span> value2 <span class="token comment">// Declare multiple, such as const a, b, c = &quot;hello&quot;, 100, true</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
    FeMale <span class="token operator">=</span> <span class="token number">0</span>
    Male <span class="token operator">=</span> <span class="token number">1</span>
<span class="token punctuation">)</span> <span class="token comment">// Enumeration</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
    a <span class="token operator">=</span> <span class="token boolean">iota</span>
    b
    c
<span class="token punctuation">)</span> <span class="token comment">// iota</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="func" tabindex="-1"><a class="header-anchor" href="#func" aria-hidden="true">#</a> <strong>func</strong></h3><p><code>func</code> is used to declare functions, supports multiple return values, and does not support default parameters.</p><details><summary>Example</summary><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// p is the parameter, T is the type</span>
<span class="token keyword">func</span> <span class="token function">Test</span><span class="token punctuation">(</span>p T<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">Test</span><span class="token punctuation">(</span>p T<span class="token punctuation">)</span> <span class="token punctuation">(</span>T1<span class="token punctuation">,</span> T2<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">Test</span><span class="token punctuation">(</span>p T<span class="token punctuation">,</span> p1 T1<span class="token punctuation">,</span> list <span class="token operator">...</span>T3<span class="token punctuation">)</span> <span class="token punctuation">(</span>T4<span class="token punctuation">,</span> T5<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>  <span class="token comment">// variadic parameters</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="import" tabindex="-1"><a class="header-anchor" href="#import" aria-hidden="true">#</a> <strong>import</strong></h3><p><code>import</code> is used to import packages to use their public identifiers.</p><p><code>import</code> supports single-line and multi-line imports.</p><details><summary>Example</summary><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token string">&quot;flag&quot;</span> <span class="token comment">// single import</span>

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;flag&quot;</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span> <span class="token comment">// multiple imports</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>We can also use <code>.</code>, <code>_</code>, and aliases to modify imported packages.</p><table><thead><tr><th>Import Command</th><th>Usage</th><th>Explanation</th></tr></thead><tbody><tr><td><code>import &quot;lib/math&quot;</code></td><td>math.Sin</td><td>Normal import requires the package name</td></tr><tr><td><code>import m &quot;lib/math&quot;</code></td><td>m.Sin</td><td>Aliases can be set during import</td></tr><tr><td><code>import . &quot;lib/math&quot;</code></td><td>Sin</td><td>Using <code>.</code> allows direct use of functions without the package name</td></tr></tbody></table><p>We can also use <code>_</code> to modify imported packages, which will only execute the package&#39;s initialization function <code>init()</code>.</p><h3 id="package" tabindex="-1"><a class="header-anchor" href="#package" aria-hidden="true">#</a> <strong>package</strong></h3><p><code>package</code> is used to define the package name.</p><h4 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> <strong>type</strong></h4><p><code>type</code> is used to define variable types.</p><details><summary>Example</summary><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// Define an interface</span>
<span class="token keyword">type</span> Animal <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// Define a structure</span>
<span class="token keyword">type</span> Tiger <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">// Define equivalent types</span>
<span class="token keyword">type</span> Num <span class="token builtin">int32</span> <span class="token comment">// Define a new type</span>
<span class="token keyword">type</span> Num <span class="token operator">=</span> <span class="token builtin">int32</span> <span class="token comment">// Only define an alias</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="var" tabindex="-1"><a class="header-anchor" href="#var" aria-hidden="true">#</a> <strong>var</strong></h3><p><code>var</code> is used to declare public or private variables.</p><details><summary>Example</summary><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> Name T  <span class="token comment">// public variable</span>
<span class="token keyword">var</span> name T  <span class="token comment">// private variable</span>

<span class="token keyword">var</span> name1<span class="token punctuation">,</span> name2 T <span class="token comment">// declare multiple variables of the same type</span>
<span class="token keyword">var</span> name1<span class="token punctuation">,</span> name2 T <span class="token operator">=</span> val1<span class="token punctuation">,</span> val2 <span class="token comment">// declare and initialize multiple variables of the same type</span>

<span class="token keyword">var</span> name1<span class="token punctuation">,</span> name2 <span class="token operator">=</span> val1<span class="token punctuation">,</span> val2 <span class="token comment">// infer types and initialize based on val1, val2</span>

<span class="token comment">// Using parentheses</span>
<span class="token keyword">var</span> <span class="token punctuation">(</span>
    name1 <span class="token operator">=</span> val1
    name2 <span class="token operator">=</span> val2
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="composite-types" tabindex="-1"><a class="header-anchor" href="#composite-types" aria-hidden="true">#</a> Composite Types</h2><h3 id="chan" tabindex="-1"><a class="header-anchor" href="#chan" aria-hidden="true">#</a> <strong>chan</strong></h3><p><code>chan</code> (Channel) is used to declare channels.</p><details><summary>Example</summary><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// Channel for sending and receiving data of type T</span>
<span class="token keyword">chan</span> T
<span class="token comment">// Channel for sending data of type T</span>
<span class="token operator">&lt;-</span><span class="token keyword">chan</span> T
<span class="token comment">// Channel for receiving data of type T</span>
<span class="token keyword">chan</span><span class="token operator">&lt;-</span> T
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> T<span class="token punctuation">)</span>       <span class="token comment">// unbuffered channel</span>
ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> T<span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span>   <span class="token comment">// buffered channel</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="interface" tabindex="-1"><a class="header-anchor" href="#interface" aria-hidden="true">#</a> <strong>interface</strong></h3><p><code>interface</code> is used to declare interfaces.</p><details><summary>Example</summary><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> File <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">Read</span><span class="token punctuation">(</span>b Buffer<span class="token punctuation">)</span> <span class="token builtin">bool</span>
    <span class="token function">Write</span><span class="token punctuation">(</span>b Buffer<span class="token punctuation">)</span> <span class="token builtin">bool</span>
    <span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> <strong>map</strong></h3><p><code>map</code> is used to declare collections, consisting of unordered key-value pairs, with an underlying <code>hash map</code>. Although <code>map</code> will automatically expand, it is recommended to configure the capacity at initialization.</p><details><summary>Example</summary><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>m <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span>  <span class="token comment">// empty map</span>

m <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token comment">// map with an initial capacity of 10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="struct" tabindex="-1"><a class="header-anchor" href="#struct" aria-hidden="true">#</a> <strong>struct</strong></h3><p><code>struct</code> is used to declare structures.</p><details><summary>Example</summary><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Name <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>Here is the translation into English:</p><h2 id="control-flow" tabindex="-1"><a class="header-anchor" href="#control-flow" aria-hidden="true">#</a> Control Flow</h2><h3 id="if-else" tabindex="-1"><a class="header-anchor" href="#if-else" aria-hidden="true">#</a> <strong>if else</strong></h3><p><code>if</code> <code>else</code> is used for conditional judgments and can be nested.</p><details><summary>Example</summary><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">if</span> a <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;world&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="switch-fallthrough" tabindex="-1"><a class="header-anchor" href="#switch-fallthrough" aria-hidden="true">#</a> <strong>switch fallthrough</strong></h3><p><code>switch</code> is used to perform different actions based on different conditions. By default, each <code>case</code> comes with a <code>break</code>, and after executing one <code>case</code>, it will automatically exit. If you want to continue executing the following statements, you need to use <code>fallthrough</code>.</p><details><summary>Example</summary><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>a <span class="token operator">:=</span> <span class="token string">&quot;2&quot;</span>
<span class="token keyword">switch</span> a <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;world&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span>  <span class="token comment">// default action</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;default&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> 


<span class="token comment">// Result: world</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Using <code>fallthrough</code>, you can directly execute the action of the next <code>case</code> after completing the corresponding <code>case</code>.</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">var</span> dayOfWeek <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">4</span>

   <span class="token keyword">switch</span> dayOfWeek <span class="token punctuation">{</span>
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

<span class="token comment">// Result:</span>
<span class="token comment">// Thursday</span>
<span class="token comment">// Friday</span>
<span class="token comment">// Saturday</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="for-break-continue-range" tabindex="-1"><a class="header-anchor" href="#for-break-continue-range" aria-hidden="true">#</a> <strong>for break continue range</strong></h3><p><code>for</code> is used to loop actions, using <code>break</code> to interrupt the current <code>for</code> loop, and <code>continue</code> to skip the remaining statements of the current loop and continue with the next round.</p><details><summary>Example</summary><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// Single condition</span>
<span class="token keyword">for</span> i <span class="token operator">&lt;=</span> <span class="token number">10</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    i <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span>
<span class="token punctuation">}</span>

<span class="token comment">// Initialization and judgment</span>
<span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// for range iteration</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="goto" tabindex="-1"><a class="header-anchor" href="#goto" aria-hidden="true">#</a> <strong>goto</strong></h3><p><code>goto</code> can jump to a specified location to continue executing actions.</p><details><summary>Example</summary><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i <span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">5</span> <span class="token punctuation">{</span>
			<span class="token keyword">goto</span> end <span class="token comment">// Jump to the end position to execute</span>
		<span class="token punctuation">}</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

end<span class="token punctuation">:</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;end&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token comment">// Result: </span>
<span class="token comment">// 0</span>
<span class="token comment">// 1</span>
<span class="token comment">// 2</span>
<span class="token comment">// 3</span>
<span class="token comment">// 4</span>
<span class="token comment">// end</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="select" tabindex="-1"><a class="header-anchor" href="#select" aria-hidden="true">#</a> <strong>select</strong></h3><p><code>select</code> allows <code>goroutine</code> to wait for multiple communication operations. <code>select</code> will block until one <code>case</code> receives information. If multiple channels receive data at the same time, a random <code>case</code> will be executed.</p><details><summary>Example</summary><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="function-modifiers" tabindex="-1"><a class="header-anchor" href="#function-modifiers" aria-hidden="true">#</a> Function Modifiers</h2><h3 id="defer" tabindex="-1"><a class="header-anchor" href="#defer" aria-hidden="true">#</a> <strong>defer</strong></h3><p><code>return</code> is used to terminate the execution of a function and return zero or more return values. <code>defer</code> is used to perform actions before the function&#39;s <code>return</code> or after it has finished executing.</p><details><summary>Example</summary><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">defer</span> fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;world&quot;</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// Result</span>
<span class="token comment">// hello</span>
<span class="token comment">// world</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note:</p><ul><li>The execution order of <code>defer</code> is last-in-first-out.</li><li><code>defer</code> executing before return means you can use defer to get the final result of variables before return.</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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

<span class="token comment">// Result:</span>
<span class="token comment">// 7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> <strong>go</strong></h3><p><code>go</code> is used to create a coroutine (goroutine) and perform actions in the background of the program.</p><details><summary>Example</summary><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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

<span class="token comment">// Result:</span>
<span class="token comment">// start goroutine</span>
<span class="token comment">// no.1</span>
<span class="token comment">// no.2</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,62),i=[o];function p(c,l){return s(),a("div",null,i)}const r=n(t,[["render",p],["__file","1-keywords.html.vue"]]);export{r as default};
