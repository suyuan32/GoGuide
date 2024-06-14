import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,d as t}from"./app-BhuDP04M.js";const e={},n=t(`<h2 id="integers-int" tabindex="-1"><a class="header-anchor" href="#integers-int"><span>Integers (int)</span></a></h2><p>Integers come in two types:</p><table><thead><tr><th>Type</th><th>Range</th><th>Description</th></tr></thead><tbody><tr><td>Signed integers</td><td><code>-∞</code> ~ <code>+∞</code></td><td>Signed integers include positive and negative numbers</td></tr><tr><td>Unsigned integers</td><td><code>0</code> ~ <code>+∞</code></td><td>Unsigned integers include 0 and all positive numbers</td></tr></tbody></table><blockquote><p>In Golang, types starting with <code>int</code> are signed integers, and those starting with <code>uint</code> are unsigned integers.</p></blockquote><p>Integer types in Golang:</p><table><thead><tr><th>Bits</th><th>Type</th></tr></thead><tbody><tr><td>8</td><td><code>int8</code> <code>uint8</code></td></tr><tr><td>16</td><td><code>int16</code> <code>uint16</code></td></tr><tr><td>32</td><td><code>int32</code> <code>uint32</code></td></tr><tr><td>64</td><td><code>int64</code> <code>uint64</code></td></tr><tr><td>32 or 64 (based on system architecture)</td><td><code>int</code> <code>uint</code></td></tr></tbody></table><p>There are also two equivalent types:</p><ul><li><code>rune</code>: equivalent to <code>int32</code> , used to store <code>Unicode</code> characters</li><li><code>byte</code>: equivalent to <code>uint8</code> , used to store <code>ASCII</code> characters</li></ul><h2 id="floating-point-numbers-float" tabindex="-1"><a class="header-anchor" href="#floating-point-numbers-float"><span>Floating-point Numbers (float)</span></a></h2><p>Floating-point numbers are numbers that contain a decimal point.</p><table><thead><tr><th>Bits</th><th>Type</th></tr></thead><tbody><tr><td>32</td><td><code>float32</code></td></tr><tr><td>64</td><td><code>float64</code></td></tr></tbody></table><h2 id="complex-numbers-complex" tabindex="-1"><a class="header-anchor" href="#complex-numbers-complex"><span>Complex Numbers (complex)</span></a></h2><p>Complex numbers contain imaginary and real numbers, with the real part being a floating-point number.</p><table><thead><tr><th>Bits</th><th>Type</th></tr></thead><tbody><tr><td>32-bit float + imaginary</td><td><code>complex64</code></td></tr><tr><td>64-bit float + imaginary</td><td><code>complex128</code></td></tr></tbody></table><details class="hint-container details"><summary>Example</summary><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// Initialize a complex number</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> complexData</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> complex64</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> complex</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// Equals: 5 + 3i</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// Another way to initialize</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">complexData2</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 5</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 3</span><span style="--shiki-light:#D73A49;--shiki-dark:#E06C75;">i</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="strings-string" tabindex="-1"><a class="header-anchor" href="#strings-string"><span>Strings (string)</span></a></h2><p>Strings are composed of a sequence of characters, and the type name is <code>string</code>.</p><p><strong>Once a string is created, it cannot be modified.</strong></p><details class="hint-container details"><summary>Example</summary><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">package</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> main</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#98C379;">fmt</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">func</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  var</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> str</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;Hi! Jack&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // Cannot modify, the following commented code will cause an error</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // str[2] = &#39;c&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  fmt</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Printf</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">%s</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="booleans-bool" tabindex="-1"><a class="header-anchor" href="#booleans-bool"><span>Booleans (bool)</span></a></h2><p>The boolean type values are <code>true</code> or <code>false</code>, and the type name is <code>bool</code>.</p><details class="hint-container details"><summary>Example</summary><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> isNumber</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> bool</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">isNumber</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">isNumber</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> false</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="arrays-array" tabindex="-1"><a class="header-anchor" href="#arrays-array"><span>Arrays (array)</span></a></h2><p>Arrays are composed of a series of data, which can be accessed by index.</p><p><strong>The capacity of an array cannot be modified once created.</strong></p><details class="hint-container details"><summary>Example</summary><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">data</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></details><h2 id="slices-slices" tabindex="-1"><a class="header-anchor" href="#slices-slices"><span>Slices (slices)</span></a></h2><p>Slices are dynamic arrays that can automatically adjust their capacity size based on the data.</p><details class="hint-container details"><summary>Example</summary><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">package</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> main</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#98C379;">fmt</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">func</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">	var</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> data</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> []</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">int</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">	for</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> ++</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">		data</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> append</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">	fmt</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Println</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// Result</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// [0 1 2 3 4 5 6 7 8 9]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="map-map" tabindex="-1"><a class="header-anchor" href="#map-map"><span>Map (map)</span></a></h2><p>A <code>map</code> is a key-value mapping table, where you can get the corresponding <code>value</code> through the <code>key</code>.</p><p>The declaration of a <code>map</code> is as follows:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>map[KeyType]ValueType</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><code>KeyType</code> is the data type of the key, and <code>ValueType</code> is the data type of the value.</p><details class="hint-container details"><summary>Example</summary><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// Declare a map</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> m</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> map</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">int</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// Initialize the map using make</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">m</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> make</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// Set the value</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">m</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;path&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 66</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// Output the value</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">fmt</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Println</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">m</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;path&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">])</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="structures-struct" tabindex="-1"><a class="header-anchor" href="#structures-struct"><span>Structures (struct)</span></a></h2><p>Structures are composed of a series of custom fields, which can be accessed using <code>.</code>.</p><details class="hint-container details"><summary>Example</summary><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Animal</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> struct</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    Name</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> string</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Animal</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    Name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;Lucky&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">fmt</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Println</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="pointers-pointer" tabindex="-1"><a class="header-anchor" href="#pointers-pointer"><span>Pointers (pointer)</span></a></h2><p>Pointers store the memory address of a variable. Use <code>*</code> in front of a variable to define it as a pointer, and <code>&amp;</code> to get the variable&#39;s address. Pointers allow you to modify data outside of a function within the function.</p><details class="hint-container details"><summary>Example</summary><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> num</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> *int</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">n</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 10</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">num</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> &amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">n</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="zero-value-table" tabindex="-1"><a class="header-anchor" href="#zero-value-table"><span>Zero Value Table</span></a></h2><table><thead><tr><th><strong>Type</strong></th><th><strong>Zero Value</strong></th></tr></thead><tbody><tr><td>uint/uint8/uint16/uint32/uint64</td><td>0</td></tr><tr><td>int/int8/int16/int32/int64</td><td>0</td></tr><tr><td>float32/float64</td><td>0</td></tr><tr><td>complex64/complex128</td><td>0+0i</td></tr><tr><td>bool</td><td>false</td></tr><tr><td>uintptr</td><td>0</td></tr><tr><td>byte</td><td>0</td></tr><tr><td>rune</td><td>0</td></tr><tr><td>string</td><td>&quot;&quot;</td></tr><tr><td>struct</td><td>All internal attributes are their corresponding zero values</td></tr><tr><td>interface</td><td>nil</td></tr><tr><td>slice</td><td>nil</td></tr><tr><td>map</td><td>nil</td></tr><tr><td>chan</td><td>nil</td></tr><tr><td>func</td><td>nil</td></tr><tr><td>pointer</td><td>nil</td></tr></tbody></table>`,43),l=[n];function h(d,r){return a(),s("div",null,l)}const o=i(e,[["render",h],["__file","2-datatype.html.vue"]]),c=JSON.parse('{"path":"/en/guide/concepts/golang/2-datatype.html","title":"Data Type","lang":"en-US","frontmatter":{"order":2,"title":"Data Type","icon":"line-md:star-filled","head":[["meta",{"name":"keywords","content":"data type, golang, integer, float, complex, boolean, string, array, slice, map, channel, struct, interface, function"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://goguide.ryansu.tech/guide/concepts/golang/2-datatype.html"}],["meta",{"property":"og:url","content":"https://goguide.ryansu.tech/en/guide/concepts/golang/2-datatype.html"}],["meta",{"property":"og:site_name","content":"Go Guide"}],["meta",{"property":"og:title","content":"Data Type"}],["meta",{"property":"og:description","content":"Integers (int) Integers come in two types: In Golang, types starting with int are signed integers, and those starting with uint are unsigned integers. Integer types in Golang: T..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-28T02:45:37.000Z"}],["meta",{"property":"article:author","content":"Go Guide"}],["meta",{"property":"article:modified_time","content":"2024-04-28T02:45:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Data Type\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-28T02:45:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Go Guide\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]],"description":"Integers (int) Integers come in two types: In Golang, types starting with int are signed integers, and those starting with uint are unsigned integers. Integer types in Golang: T..."},"headers":[{"level":2,"title":"Integers (int)","slug":"integers-int","link":"#integers-int","children":[]},{"level":2,"title":"Floating-point Numbers (float)","slug":"floating-point-numbers-float","link":"#floating-point-numbers-float","children":[]},{"level":2,"title":"Complex Numbers (complex)","slug":"complex-numbers-complex","link":"#complex-numbers-complex","children":[]},{"level":2,"title":"Strings (string)","slug":"strings-string","link":"#strings-string","children":[]},{"level":2,"title":"Booleans (bool)","slug":"booleans-bool","link":"#booleans-bool","children":[]},{"level":2,"title":"Arrays (array)","slug":"arrays-array","link":"#arrays-array","children":[]},{"level":2,"title":"Slices (slices)","slug":"slices-slices","link":"#slices-slices","children":[]},{"level":2,"title":"Map (map)","slug":"map-map","link":"#map-map","children":[]},{"level":2,"title":"Structures (struct)","slug":"structures-struct","link":"#structures-struct","children":[]},{"level":2,"title":"Pointers (pointer)","slug":"pointers-pointer","link":"#pointers-pointer","children":[]},{"level":2,"title":"Zero Value Table","slug":"zero-value-table","link":"#zero-value-table","children":[]}],"git":{"createdTime":1705461319000,"updatedTime":1714272337000,"contributors":[{"name":"Ryan Su","email":"yuansu.china.work@gmail.com","commits":5}]},"readingTime":{"minutes":1.99,"words":596},"filePathRelative":"en/guide/concepts/golang/2-datatype.md","localizedDate":"January 17, 2024","autoDesc":true,"excerpt":"<h2>Integers (int)</h2>\\n<p>Integers come in two types:</p>\\n<table>\\n<thead>\\n<tr>\\n<th>Type</th>\\n<th>Range</th>\\n<th>Description</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>Signed integers</td>\\n<td><code>-∞</code> ~ <code>+∞</code></td>\\n<td>Signed integers include positive and negative numbers</td>\\n</tr>\\n<tr>\\n<td>Unsigned integers</td>\\n<td><code>0</code> ~ <code>+∞</code></td>\\n<td>Unsigned integers include 0 and all positive numbers</td>\\n</tr>\\n</tbody>\\n</table>"}');export{o as comp,c as data};
