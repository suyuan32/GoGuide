import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as a,d as t}from"./app-BhuDP04M.js";const e={},h=t(`<h2 id="select-选择" tabindex="-1"><a class="header-anchor" href="#select-选择"><span>SELECT 选择</span></a></h2><p>Select 命令主要用于限制返回结果</p><h3 id="返回所有字段" tabindex="-1"><a class="header-anchor" href="#返回所有字段"><span>返回所有字段</span></a></h3><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> 表名;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="返回指定字段" tabindex="-1"><a class="header-anchor" href="#返回指定字段"><span>返回指定字段</span></a></h3><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> 字段1,字段2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> 表名;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="结果去重" tabindex="-1"><a class="header-anchor" href="#结果去重"><span>结果去重</span></a></h3><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">SELECT DISTINCT</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> 字段 </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> 表名;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="order-排序" tabindex="-1"><a class="header-anchor" href="#order-排序"><span>ORDER 排序</span></a></h2><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> 表名 </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">ORDER BY</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> 字段名 </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">[ASC|DESC]</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="limit-限制返回数量" tabindex="-1"><a class="header-anchor" href="#limit-限制返回数量"><span>LIMIT 限制返回数量</span></a></h2><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> 表名 </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">LIMIT</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> 开始，数量;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>若只有数量则默认从第 0 行开始</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> 表名 </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">LIMIT</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 7</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>表示第 0-6 行数据</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">//</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> mysql</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> 表名 </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">LIMIT</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">//</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> postgresql</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> 表名 </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">LIMIT</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 6</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> OFFSET </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>表示第 10 - 15 行数据</p><h2 id="where-条件" tabindex="-1"><a class="header-anchor" href="#where-条件"><span>WHERE 条件</span></a></h2><p>我们使用 Where 进行数据筛选</p><table><thead><tr><th>运算符</th><th>描述</th></tr></thead><tbody><tr><td>=</td><td>等于</td></tr><tr><td>&lt;&gt;</td><td>不等于</td></tr><tr><td>&gt;</td><td>大于</td></tr><tr><td>&lt;</td><td>小于</td></tr><tr><td>&gt;=</td><td>大于等于</td></tr><tr><td>&lt;=</td><td>小于等于</td></tr><tr><td>BETWEEN</td><td>在某个范围内</td></tr><tr><td>LIKE</td><td>符合模式定义的数据</td></tr><tr><td>IN</td><td>指定多个可能值</td></tr></tbody></table><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">//</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> 姓名等于 Jack</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> users </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">WHERE</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> name</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;Jack&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">//</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> 年龄大于 </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">12</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> users </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">WHERE</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> age </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 12</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">//</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> 年龄在 </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">12</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 18</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> 之间</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> users </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">WHERE</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> age </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">BETWEEN</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 12</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> AND</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 18</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">//</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> 姓名以 J 开头</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> users </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">WHERE</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> name</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> LIKE</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;J%&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">//</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> 年龄为 </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">12</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">15</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> 或 </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">18</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> users </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">WHERE</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> age </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">IN</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">12</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">15</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">18</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>LIKE 支持两个通配符，<code>%</code> 表示任意个字符串, <code>_</code> 表示任意单个字符</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">//</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> 名字以 J 开头，如 Jack, Jacky, Jim</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> users </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">WHERE</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> name</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> LIKE</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;J%&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">//</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> 单个字符, 如 JA, Jc</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> users </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">WHERE</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> name</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> LIKE</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;J_&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="and-or-not" tabindex="-1"><a class="header-anchor" href="#and-or-not"><span>AND, OR, NOT</span></a></h3><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">//</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> 年龄为 </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">12</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> 或 </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">18</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> users </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">WHERE</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> age </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 12</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> OR</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> age </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 18</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">//</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> 姓名为 Jack 且年龄为 </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">12</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> users </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">WHERE</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> name</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;Jack&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> OR</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> age </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 12</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">//</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> 年龄不为 </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">12</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> users </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">WHERE</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> not</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> age </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 12</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="group-by-分组" tabindex="-1"><a class="header-anchor" href="#group-by-分组"><span>GROUP BY 分组</span></a></h2><p>GROUP BY 通常和聚合函数 （COUNT, AVG ...） 等搭配使用，使用 HAVING 做额外查询</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">//</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> 查询对应年龄用户的数量, 且数量需大于 </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">10</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> age, </span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">COUNT</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(age) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> users </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">GROUP BY</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> age </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">HAVING</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;"> COUNT</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(age) </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exists-存在" tabindex="-1"><a class="header-anchor" href="#exists-存在"><span>EXISTS 存在</span></a></h2><p>EXISTS 主要用于查询是否满足子查询返回的数据</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> age </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> users </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">WHERE</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> EXISTS</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> age </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> users </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">WHERE</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> age </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> );</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="常见的聚合函数" tabindex="-1"><a class="header-anchor" href="#常见的聚合函数"><span>常见的聚合函数</span></a></h2><table><thead><tr><th>函数</th><th>功能描述</th><th>备注</th></tr></thead><tbody><tr><td><strong>count()</strong></td><td>统计条数</td><td>只统计非空行, 使用 <code>count(*)</code> 或 <code>count(1)</code> 统计所有行包括空行</td></tr><tr><td><strong>sum()</strong></td><td>求和</td><td>只统计非空行，True 按 1 处理，False 按 0 处理</td></tr><tr><td><strong>max()</strong></td><td>最大值</td><td>时间字段表示查询最近的日期</td></tr><tr><td><strong>min()</strong></td><td>最小值</td><td>时间字段表示查询最远的日期</td></tr><tr><td><strong>avg()</strong></td><td>平均值</td><td>只统计非空行</td></tr></tbody></table>`,32),n=[h];function l(k,d){return a(),i("div",null,n)}const g=s(e,[["render",l],["__file","2-database-query.html.vue"]]),B=JSON.parse('{"path":"/guide/concepts/database/SQL/2-database-query.html","title":"查询","lang":"zh-CN","frontmatter":{"order":2,"title":"查询","icon":"line-md:star-filled","head":[["meta",{"name":"keywords","content":"SQL, 查询, SELECT, ORDER, LIMIT, WHERE"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://goguide.ryansu.tech/en/guide/concepts/database/SQL/2-database-query.html"}],["meta",{"property":"og:url","content":"https://goguide.ryansu.tech/guide/concepts/database/SQL/2-database-query.html"}],["meta",{"property":"og:site_name","content":"Go 面试宝典"}],["meta",{"property":"og:title","content":"查询"}],["meta",{"property":"og:description","content":"SELECT 选择 Select 命令主要用于限制返回结果 返回所有字段 返回指定字段 结果去重 ORDER 排序 LIMIT 限制返回数量 若只有数量则默认从第 0 行开始 表示第 0-6 行数据 表示第 10 - 15 行数据 WHERE 条件 我们使用 Where 进行数据筛选 相关信息 LIKE 支持两个通配符，% 表示任意个字符串, _ 表示..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-05T13:24:21.000Z"}],["meta",{"property":"article:author","content":"Go Guide"}],["meta",{"property":"article:modified_time","content":"2024-05-05T13:24:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"查询\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-05T13:24:21.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Go Guide\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]],"description":"SELECT 选择 Select 命令主要用于限制返回结果 返回所有字段 返回指定字段 结果去重 ORDER 排序 LIMIT 限制返回数量 若只有数量则默认从第 0 行开始 表示第 0-6 行数据 表示第 10 - 15 行数据 WHERE 条件 我们使用 Where 进行数据筛选 相关信息 LIKE 支持两个通配符，% 表示任意个字符串, _ 表示..."},"headers":[{"level":2,"title":"SELECT 选择","slug":"select-选择","link":"#select-选择","children":[{"level":3,"title":"返回所有字段","slug":"返回所有字段","link":"#返回所有字段","children":[]},{"level":3,"title":"返回指定字段","slug":"返回指定字段","link":"#返回指定字段","children":[]},{"level":3,"title":"结果去重","slug":"结果去重","link":"#结果去重","children":[]}]},{"level":2,"title":"ORDER 排序","slug":"order-排序","link":"#order-排序","children":[]},{"level":2,"title":"LIMIT 限制返回数量","slug":"limit-限制返回数量","link":"#limit-限制返回数量","children":[]},{"level":2,"title":"WHERE 条件","slug":"where-条件","link":"#where-条件","children":[{"level":3,"title":"AND, OR, NOT","slug":"and-or-not","link":"#and-or-not","children":[]}]},{"level":2,"title":"GROUP BY 分组","slug":"group-by-分组","link":"#group-by-分组","children":[]},{"level":2,"title":"EXISTS 存在","slug":"exists-存在","link":"#exists-存在","children":[]},{"level":2,"title":"常见的聚合函数","slug":"常见的聚合函数","link":"#常见的聚合函数","children":[]}],"git":{"createdTime":1714045048000,"updatedTime":1714915461000,"contributors":[{"name":"Ryan Su","email":"yuansu.china.work@gmail.com","commits":5}]},"readingTime":{"minutes":2.05,"words":615},"filePathRelative":"guide/concepts/database/SQL/2-database-query.md","localizedDate":"2024年4月25日","autoDesc":true,"excerpt":"<h2>SELECT 选择</h2>\\n<p>Select 命令主要用于限制返回结果</p>\\n<h3>返回所有字段</h3>\\n<div class=\\"language-sql line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"sql\\" data-title=\\"sql\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">SELECT</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#ABB2BF\\"> *</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\"> FROM</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> 表名;</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>"}');export{g as comp,B as data};
