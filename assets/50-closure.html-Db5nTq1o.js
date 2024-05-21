import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,d as t}from"./app-xeMo94cu.js";const p={},e=t(`<h2 id="什么是闭包" tabindex="-1"><a class="header-anchor" href="#什么是闭包"><span>什么是闭包?</span></a></h2><div class="hint-container info"><p class="hint-container-title">什么是闭包?</p><p>闭包是由函数和与其相关的引用环境组合而成的实体。简单来说，闭包就是一个引用了作用域之外的变量的函数（Func），该函数的存在时间可以超过创建他的作用域。</p><p>例子</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	count <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
		i <span class="token operator">:=</span> <span class="token number">0</span> <span class="token comment">// 初始化函数内变量</span>
		<span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
			i <span class="token operator">++</span> <span class="token comment">// 函数内变量加 1</span>
			<span class="token keyword">return</span> i
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 结果</span>
<span class="token comment">// 1</span>
<span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们会注意到 <code>i</code> 是 <code>count</code> 的局部变量，执行两次函数感觉上应该是都输出 <code>1</code>， 实际上输出的是 <code>1， 2</code>， 原因是在赋值时 <code>count</code> 保留着对 <code>i</code> 的指针，因此 <code>i</code> 在逃逸分析后被保留，没有随着函数的执行完毕而结束。<strong>如果函数没有赋值给变量，则执行多次结果会保持不变。</strong></p></div><h2 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景"><span>使用场景</span></a></h2><h3 id="中间件" tabindex="-1"><a class="header-anchor" href="#中间件"><span>中间件</span></a></h3><p>我们在定义 web 中间件时经常会看到以下形式的代码:</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">makeHandler</span><span class="token punctuation">(</span>fn <span class="token keyword">func</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">)</span> http<span class="token punctuation">.</span>HandlerFunc <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        m <span class="token operator">:=</span> validPath<span class="token punctuation">.</span><span class="token function">FindStringSubmatch</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span>URL<span class="token punctuation">.</span>Path<span class="token punctuation">)</span>
        <span class="token keyword">if</span> m <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            http<span class="token punctuation">.</span><span class="token function">NotFound</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> r<span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        <span class="token function">fn</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> r<span class="token punctuation">,</span> m<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 如果没问题则继续执行 fn</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到, 我们返回了一个 <code>http.HandlerFunc</code>, 这个函数里面调用了 fn, 这样的话我们就可以实现链式操作，既执行了中间件代码，又可以继续执行函数，非常方便。</p><h2 id="状态共享" tabindex="-1"><a class="header-anchor" href="#状态共享"><span>状态共享</span></a></h2><p>闭包可以用来共享多次执行函数的状态， 常见的例子是迭代器:</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	num <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span>

	iterator <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>arr <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		i <span class="token operator">:=</span> <span class="token operator">-</span><span class="token number">1</span>
		<span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>arr <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			i <span class="token operator">++</span>
			<span class="token keyword">if</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">return</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token boolean">true</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token boolean">false</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	iter <span class="token operator">:=</span> <span class="token function">iterator</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>

	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		value<span class="token punctuation">,</span> ok <span class="token operator">:=</span> <span class="token function">iter</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
		<span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
			<span class="token keyword">return</span>
		<span class="token punctuation">}</span>

		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 结果</span>
<span class="token comment">//1</span>
<span class="token comment">//2</span>
<span class="token comment">//3</span>
<span class="token comment">//4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="回调函数" tabindex="-1"><a class="header-anchor" href="#回调函数"><span>回调函数</span></a></h2><p>我们也可以通过传参，实现传入回调函数</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">GetData</span><span class="token punctuation">(</span>data <span class="token builtin">int</span><span class="token punctuation">,</span> callback <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result <span class="token operator">:=</span> data <span class="token operator">+</span> <span class="token number">2</span>
        <span class="token function">callback</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的例子可以看到， 我们传入 <code>data</code> 后， <code>callback</code> 可以获取到 <code>result</code> 进行额外回调操作。</p><h2 id="函数工厂" tabindex="-1"><a class="header-anchor" href="#函数工厂"><span>函数工厂</span></a></h2><p>通过闭包我们还可以构造函数工厂，通过传入参数返回对应函数。</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">CalculationFactory</span><span class="token punctuation">(</span>operation <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span> operation <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&quot;add&quot;</span><span class="token punctuation">:</span>
       <span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> a <span class="token operator">+</span> b
       <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token string">&quot;subtract&quot;</span><span class="token punctuation">:</span>
       <span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> a <span class="token operator">-</span> b
       <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token string">&quot;multiply&quot;</span><span class="token punctuation">:</span>
       <span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> a <span class="token operator">*</span> b
       <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token string">&quot;divide&quot;</span><span class="token punctuation">:</span>
       <span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> b <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
             <span class="token keyword">return</span> a <span class="token operator">/</span> b
          <span class="token punctuation">}</span>
          <span class="token keyword">return</span> <span class="token number">0</span>
       <span class="token punctuation">}</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span>
       <span class="token keyword">return</span> <span class="token boolean">nil</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以传入 <code>add</code> 获取加法函数，<code>divide</code> 获取除法函数。</p>`,18),o=[e];function c(i,l){return a(),s("div",null,o)}const k=n(p,[["render",c],["__file","50-closure.html.vue"]]),d=JSON.parse('{"path":"/guide/concepts/golang/50-closure.html","title":"闭包","lang":"zh-CN","frontmatter":{"order":50,"title":"闭包","icon":"line-md:sun-rising-twotone-loop","head":[["meta",{"name":"keywords","content":"Go, Golang, closure, 闭包, 函数工厂, 迭代器, 中间件, 回调函数"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://goguide.ryansu.tech/en/guide/concepts/golang/50-closure.html"}],["meta",{"property":"og:url","content":"https://goguide.ryansu.tech/guide/concepts/golang/50-closure.html"}],["meta",{"property":"og:site_name","content":"Go 面试宝典"}],["meta",{"property":"og:title","content":"闭包"}],["meta",{"property":"og:description","content":"什么是闭包? 什么是闭包? 闭包是由函数和与其相关的引用环境组合而成的实体。简单来说，闭包就是一个引用了作用域之外的变量的函数（Func），该函数的存在时间可以超过创建他的作用域。 例子 我们会注意到 i 是 count 的局部变量，执行两次函数感觉上应该是都输出 1， 实际上输出的是 1， 2， 原因是在赋值时 count 保留着对 i 的指针，因此..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-21T12:50:27.000Z"}],["meta",{"property":"article:author","content":"Go Guide"}],["meta",{"property":"article:modified_time","content":"2024-05-21T12:50:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"闭包\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-21T12:50:27.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Go Guide\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]],"description":"什么是闭包? 什么是闭包? 闭包是由函数和与其相关的引用环境组合而成的实体。简单来说，闭包就是一个引用了作用域之外的变量的函数（Func），该函数的存在时间可以超过创建他的作用域。 例子 我们会注意到 i 是 count 的局部变量，执行两次函数感觉上应该是都输出 1， 实际上输出的是 1， 2， 原因是在赋值时 count 保留着对 i 的指针，因此..."},"headers":[{"level":2,"title":"什么是闭包?","slug":"什么是闭包","link":"#什么是闭包","children":[]},{"level":2,"title":"使用场景","slug":"使用场景","link":"#使用场景","children":[{"level":3,"title":"中间件","slug":"中间件","link":"#中间件","children":[]}]},{"level":2,"title":"状态共享","slug":"状态共享","link":"#状态共享","children":[]},{"level":2,"title":"回调函数","slug":"回调函数","link":"#回调函数","children":[]},{"level":2,"title":"函数工厂","slug":"函数工厂","link":"#函数工厂","children":[]}],"git":{"createdTime":1716295827000,"updatedTime":1716295827000,"contributors":[{"name":"Ryan Su","email":"yuansu.china.work@gmail.com","commits":1}]},"readingTime":{"minutes":2.23,"words":669},"filePathRelative":"guide/concepts/golang/50-closure.md","localizedDate":"2024年5月21日","autoDesc":true,"excerpt":"<h2>什么是闭包?</h2>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">什么是闭包?</p>\\n<p>闭包是由函数和与其相关的引用环境组合而成的实体。简单来说，闭包就是一个引用了作用域之外的变量的函数（Func），该函数的存在时间可以超过创建他的作用域。</p>\\n<p>例子</p>\\n<div class=\\"language-go\\" data-ext=\\"go\\" data-title=\\"go\\"><pre class=\\"language-go\\"><code><span class=\\"token keyword\\">package</span> main\\n\\n<span class=\\"token keyword\\">import</span> <span class=\\"token string\\">\\"fmt\\"</span>\\n\\n<span class=\\"token keyword\\">func</span> <span class=\\"token function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n\\tcount <span class=\\"token operator\\">:=</span> <span class=\\"token keyword\\">func</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">func</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token builtin\\">int</span> <span class=\\"token punctuation\\">{</span>\\n\\t\\ti <span class=\\"token operator\\">:=</span> <span class=\\"token number\\">0</span> <span class=\\"token comment\\">// 初始化函数内变量</span>\\n\\t\\t<span class=\\"token keyword\\">return</span> <span class=\\"token keyword\\">func</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token builtin\\">int</span> <span class=\\"token punctuation\\">{</span>\\n\\t\\t\\ti <span class=\\"token operator\\">++</span> <span class=\\"token comment\\">// 函数内变量加 1</span>\\n\\t\\t\\t<span class=\\"token keyword\\">return</span> i\\n\\t\\t<span class=\\"token punctuation\\">}</span>\\n\\t<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n\\n\\tfmt<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Println</span><span class=\\"token punctuation\\">(</span><span class=\\"token function\\">count</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n\\tfmt<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Println</span><span class=\\"token punctuation\\">(</span><span class=\\"token function\\">count</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token comment\\">// 结果</span>\\n<span class=\\"token comment\\">// 1</span>\\n<span class=\\"token comment\\">// 2</span>\\n</code></pre></div><p>我们会注意到 <code>i</code> 是 <code>count</code> 的局部变量，执行两次函数感觉上应该是都输出 <code>1</code>， 实际上输出的是 <code>1， 2</code>， 原因是在赋值时 <code>count</code> 保留着对 <code>i</code> 的指针，因此 <code>i</code> 在逃逸分析后被保留，没有随着函数的执行完毕而结束。<strong>如果函数没有赋值给变量，则执行多次结果会保持不变。</strong></p>\\n</div>"}');export{k as comp,d as data};
