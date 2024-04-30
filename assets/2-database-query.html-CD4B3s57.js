import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as n,e}from"./app-BipP0Ue_.js";const t={},o=e(`<h2 id="select-选择" tabindex="-1"><a class="header-anchor" href="#select-选择"><span>SELECT 选择</span></a></h2><p>Select 命令主要用于限制返回结果</p><h3 id="返回所有字段" tabindex="-1"><a class="header-anchor" href="#返回所有字段"><span>返回所有字段</span></a></h3><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> 表名<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="返回指定字段" tabindex="-1"><a class="header-anchor" href="#返回指定字段"><span>返回指定字段</span></a></h3><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> 字段<span class="token number">1</span><span class="token punctuation">,</span>字段<span class="token number">2</span> <span class="token keyword">FROM</span> 表名<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="结果去重" tabindex="-1"><a class="header-anchor" href="#结果去重"><span>结果去重</span></a></h3><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span> 字段 <span class="token keyword">FROM</span> 表名<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="order-排序" tabindex="-1"><a class="header-anchor" href="#order-排序"><span>ORDER 排序</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> 表名 <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> 字段名 <span class="token punctuation">[</span><span class="token keyword">ASC</span><span class="token operator">|</span><span class="token keyword">DESC</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="limit-限制返回数量" tabindex="-1"><a class="header-anchor" href="#limit-限制返回数量"><span>LIMIT 限制返回数量</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> 表名 <span class="token keyword">LIMIT</span> 开始，数量<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>若只有数量则默认从第 0 行开始</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> 表名 <span class="token keyword">LIMIT</span> <span class="token number">7</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>表示第 0-6 行数据</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">// mysql</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> 表名 <span class="token keyword">LIMIT</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">;</span>

<span class="token comment">// postgresql</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> 表名 <span class="token keyword">LIMIT</span> <span class="token number">6</span> <span class="token keyword">OFFSET</span> <span class="token number">10</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>表示第 10 - 15 行数据</p><h2 id="where-条件" tabindex="-1"><a class="header-anchor" href="#where-条件"><span>WHERE 条件</span></a></h2><p>我们使用 Where 进行数据筛选</p><table><thead><tr><th>运算符</th><th>描述</th></tr></thead><tbody><tr><td>=</td><td>等于</td></tr><tr><td>&lt;&gt;</td><td>不等于</td></tr><tr><td>&gt;</td><td>大于</td></tr><tr><td>&lt;</td><td>小于</td></tr><tr><td>&gt;=</td><td>大于等于</td></tr><tr><td>&lt;=</td><td>小于等于</td></tr><tr><td>BETWEEN</td><td>在某个范围内</td></tr><tr><td>LIKE</td><td>符合模式定义的数据</td></tr><tr><td>IN</td><td>指定多个可能值</td></tr></tbody></table><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">// 姓名等于 Jack</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> users <span class="token keyword">WHERE</span> name <span class="token operator">=</span> <span class="token string">&quot;Jack&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 年龄大于 12</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> users <span class="token keyword">WHERE</span> age <span class="token operator">&gt;</span> <span class="token number">12</span><span class="token punctuation">;</span>

<span class="token comment">// 年龄在 12 - 18 之间</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> users <span class="token keyword">WHERE</span> age <span class="token operator">BETWEEN</span> <span class="token number">12</span> <span class="token operator">AND</span> <span class="token number">18</span><span class="token punctuation">;</span>

<span class="token comment">// 姓名以 J 开头</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> users <span class="token keyword">WHERE</span> name <span class="token operator">LIKE</span> <span class="token string">&quot;J%&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 年龄为 12, 15 或 18</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> users <span class="token keyword">WHERE</span> age <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">,</span><span class="token number">15</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>LIKE 支持两个通配符，<code>%</code> 表示任意个字符串, <code>_</code> 表示任意单个字符</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">// 名字以 J 开头，如 Jack, Jacky, Jim</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> users <span class="token keyword">WHERE</span> name <span class="token operator">LIKE</span> <span class="token string">&quot;J%&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 单个字符, 如 JA, Jc</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> users <span class="token keyword">WHERE</span> name <span class="token operator">LIKE</span> <span class="token string">&quot;J_&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="and-or-not" tabindex="-1"><a class="header-anchor" href="#and-or-not"><span>AND, OR, NOT</span></a></h3><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">// 年龄为 12 或 18</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> users <span class="token keyword">WHERE</span> age <span class="token operator">=</span> <span class="token number">12</span> <span class="token operator">OR</span> age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>

<span class="token comment">// 姓名为 Jack 且年龄为 12</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> users <span class="token keyword">WHERE</span> name <span class="token operator">=</span> <span class="token string">&quot;Jack&quot;</span> <span class="token operator">OR</span> age <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span>

<span class="token comment">// 年龄不为 12</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> users <span class="token keyword">WHERE</span> <span class="token operator">not</span> age <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="group-by-分组" tabindex="-1"><a class="header-anchor" href="#group-by-分组"><span>GROUP BY 分组</span></a></h2><p>GROUP BY 通常和聚合函数 （COUNT, AVG ...） 等搭配使用，使用 HAVING 做额外查询</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">// 查询对应年龄用户的数量, 且数量需大于 10</span>
<span class="token keyword">SELECT</span> age<span class="token punctuation">,</span> <span class="token function">COUNT</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span> <span class="token keyword">FROM</span> users <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> age <span class="token keyword">HAVING</span> <span class="token function">COUNT</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">10</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exists-存在" tabindex="-1"><a class="header-anchor" href="#exists-存在"><span>EXISTS 存在</span></a></h2><p>EXISTS 主要用于查询是否满足子查询返回的数据</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> age <span class="token keyword">FROM</span> users <span class="token keyword">WHERE</span> <span class="token keyword">EXISTS</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> age <span class="token keyword">FROM</span> users <span class="token keyword">WHERE</span> age <span class="token operator">&gt;</span> <span class="token number">2</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="常见的聚合函数" tabindex="-1"><a class="header-anchor" href="#常见的聚合函数"><span>常见的聚合函数</span></a></h2><table><thead><tr><th>函数</th><th>功能描述</th><th>备注</th></tr></thead><tbody><tr><td><strong>count()</strong></td><td>统计条数</td><td>只统计非空行, 使用 <code>count(*)</code> 或 <code>count(1)</code> 统计所有行包括空行</td></tr><tr><td><strong>sum()</strong></td><td>求和</td><td>只统计非空行，True 按 1 处理，False 按 0 处理</td></tr><tr><td><strong>max()</strong></td><td>最大值</td><td>时间字段表示查询最近的日期</td></tr><tr><td><strong>min()</strong></td><td>最小值</td><td>时间字段表示查询最远的日期</td></tr><tr><td><strong>avg()</strong></td><td>平均值</td><td>只统计非空行</td></tr></tbody></table>`,32),l=[o];function p(r,d){return a(),n("div",null,l)}const u=s(t,[["render",p],["__file","2-database-query.html.vue"]]),k=JSON.parse('{"path":"/guide/concepts/database/SQL/2-database-query.html","title":"查询","lang":"zh-CN","frontmatter":{"order":2,"title":"查询","head":[["meta",{"name":"keywords","content":"SQL, 查询, SELECT, ORDER, LIMIT, WHERE"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://goguide.ryansu.tech/en/guide/concepts/database/SQL/2-database-query.html"}],["meta",{"property":"og:url","content":"https://goguide.ryansu.tech/guide/concepts/database/SQL/2-database-query.html"}],["meta",{"property":"og:site_name","content":"Go 面试宝典"}],["meta",{"property":"og:title","content":"查询"}],["meta",{"property":"og:description","content":"SELECT 选择 Select 命令主要用于限制返回结果 返回所有字段 返回指定字段 结果去重 ORDER 排序 LIMIT 限制返回数量 若只有数量则默认从第 0 行开始 表示第 0-6 行数据 表示第 10 - 15 行数据 WHERE 条件 我们使用 Where 进行数据筛选 相关信息 LIKE 支持两个通配符，% 表示任意个字符串, _ 表示..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-04-27T13:22:38.000Z"}],["meta",{"property":"article:author","content":"Go Guide"}],["meta",{"property":"article:modified_time","content":"2024-04-27T13:22:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"查询\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-27T13:22:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Go Guide\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]],"description":"SELECT 选择 Select 命令主要用于限制返回结果 返回所有字段 返回指定字段 结果去重 ORDER 排序 LIMIT 限制返回数量 若只有数量则默认从第 0 行开始 表示第 0-6 行数据 表示第 10 - 15 行数据 WHERE 条件 我们使用 Where 进行数据筛选 相关信息 LIKE 支持两个通配符，% 表示任意个字符串, _ 表示..."},"headers":[{"level":2,"title":"SELECT 选择","slug":"select-选择","link":"#select-选择","children":[{"level":3,"title":"返回所有字段","slug":"返回所有字段","link":"#返回所有字段","children":[]},{"level":3,"title":"返回指定字段","slug":"返回指定字段","link":"#返回指定字段","children":[]},{"level":3,"title":"结果去重","slug":"结果去重","link":"#结果去重","children":[]}]},{"level":2,"title":"ORDER 排序","slug":"order-排序","link":"#order-排序","children":[]},{"level":2,"title":"LIMIT 限制返回数量","slug":"limit-限制返回数量","link":"#limit-限制返回数量","children":[]},{"level":2,"title":"WHERE 条件","slug":"where-条件","link":"#where-条件","children":[{"level":3,"title":"AND, OR, NOT","slug":"and-or-not","link":"#and-or-not","children":[]}]},{"level":2,"title":"GROUP BY 分组","slug":"group-by-分组","link":"#group-by-分组","children":[]},{"level":2,"title":"EXISTS 存在","slug":"exists-存在","link":"#exists-存在","children":[]},{"level":2,"title":"常见的聚合函数","slug":"常见的聚合函数","link":"#常见的聚合函数","children":[]}],"git":{"createdTime":1714045048000,"updatedTime":1714224158000,"contributors":[{"name":"Ryan Su","email":"yuansu.china.work@gmail.com","commits":4}]},"readingTime":{"minutes":2.03,"words":610},"filePathRelative":"guide/concepts/database/SQL/2-database-query.md","localizedDate":"2024年4月25日","autoDesc":true,"excerpt":"<h2>SELECT 选择</h2>\\n<p>Select 命令主要用于限制返回结果</p>\\n<h3>返回所有字段</h3>\\n<div class=\\"language-sql\\" data-ext=\\"sql\\" data-title=\\"sql\\"><pre class=\\"language-sql\\"><code><span class=\\"token keyword\\">SELECT</span> <span class=\\"token operator\\">*</span> <span class=\\"token keyword\\">FROM</span> 表名<span class=\\"token punctuation\\">;</span>\\n</code></pre></div>"}');export{u as comp,k as data};