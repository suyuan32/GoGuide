import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,o as a,d as n}from"./app-DLqeUa4U.js";const o={},r=n('<p>Translate to English:</p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction"><span>Introduction</span></a></h2><p>The Network Address Translation (NAT) protocol is mainly used for mutual conversion between Wide Area Network (WAN) IP addresses and Local Area Network (LAN) IP addresses.</p><details class="hint-container details"><summary>Details</summary><p>A home router has a WAN IP address, and all other devices connected to the router share this WAN IP address. At this time, the NAT protocol needs to be used for conversion.</p></details><div class="hint-container important"><p class="hint-container-title">Private Network Segments</p><table><thead><tr><th>Network Type</th><th>Range</th></tr></thead><tbody><tr><td>Class A</td><td>10.0.0.0～10.255.255.255</td></tr><tr><td>Class B</td><td>172.16.0.0～172.31.255.255</td></tr><tr><td>Class C</td><td>192.168.0.0～192.168.255.255</td></tr></tbody></table><p>These three network segments are private network segments, used for internal LAN use.</p></div><h2 id="working-principle" tabindex="-1"><a class="header-anchor" href="#working-principle"><span>Working Principle</span></a></h2><img src="https://www.plantuml.com/plantuml/svg/PP313e8m38RlUug-00jbQfGJmaMl-WGab1DkoIW-lsNJZCcXsVztNxS_RMRkFI-lILat43pSmkIZlhcPhqcsINPHFic_1HR311ED36wCKpNWfT9uEkjZgQizq6Q0sGDT1Xno88QiuMxPzvPuY-BQ9H-wQ3IYt21AbVaRCRlyOWHAfLJ83qNnMqM8--UxZO_7slYkeo4xo3u_" alt=""><p>As shown in the above diagram, when Host A sends a packet to the server, the router will convert the source IP <code>192.168.50.2</code> to <code>113.112.111.110</code>, and then send it to the server <code>133.133.133.133</code> on port 80. When the server returns data, it needs to convert the target address back to the intranet address.</p><div class="hint-container info"><p class="hint-container-title">Conversion Process</p><ul><li>When Host A sends a request packet, a random port number such as <code>8888</code> is assigned to the request, that is, the request source is <code>192.168.50.2:8888</code></li><li>When the request reaches the router, the router will also assign a port to the request, such as <code>9999</code>, and change the source IP address of the request to <code>113.112.111.110</code>, the final request source address is <code>113.112.111.110:9999</code>, the router will save this mapping to the <strong>NAT conversion table</strong>: <code>192.168.50.2:8888 -- 113.112.111.110:9999</code>.</li><li>The target address of the data packet returned by the server is <code>113.112.111.110:9999</code>. When the data packet reaches the router, the router will convert the request target address to <code>192.168.50.2:8888</code> according to the records in the conversion table and send the data packet to the intranet host.</li></ul></div><h2 id="advantages-of-nat" tabindex="-1"><a class="header-anchor" href="#advantages-of-nat"><span>Advantages of NAT</span></a></h2><ul><li>Network Security: The NAT protocol shares a unified IP address for all network devices in the intranet, preventing intranet hosts from being directly exposed to the public network, which can enhance the security of intranet hosts.</li><li>Load Balancing: The NAT protocol can redirect external requests to different hosts internally, achieving load balancing.</li><li>Save IP Addresses: We know that IPV4 addresses are limited, and the NAT protocol allows a large number of intranet devices to connect to the internet, greatly alleviating the problem caused by the shortage of IPV4 addresses.</li></ul><h2 id="disadvantages-of-nat" tabindex="-1"><a class="header-anchor" href="#disadvantages-of-nat"><span>Disadvantages of NAT</span></a></h2><ul><li>Internal Shielding: External servers cannot directly access intranet devices</li><li>Performance Loss: Router maintenance of the NAT conversion table has performance loss</li><li>Link Loss: If the router restarts, all TCP connections will be disconnected</li></ul><div class="hint-container warning"><p class="hint-container-title">Solution</p><p>The emergence of the IPV6 protocol can make up for the shortcomings of NAT and is the main application in the future.</p></div>',14),s=[r];function i(d,l){return a(),t("div",null,s)}const p=e(o,[["render",i],["__file","6-nat.html.vue"]]),u=JSON.parse('{"path":"/en/guide/concepts/network/6-nat.html","title":"NAT","lang":"en-US","frontmatter":{"order":6,"title":"NAT","icon":"line-md:star-filled","head":[["meta",{"name":"keywords","content":"NAT, Network Address Translation"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://goguide.ryansu.tech/guide/concepts/network/6-nat.html"}],["meta",{"property":"og:url","content":"https://goguide.ryansu.tech/en/guide/concepts/network/6-nat.html"}],["meta",{"property":"og:site_name","content":"Go Guide"}],["meta",{"property":"og:title","content":"NAT"}],["meta",{"property":"og:description","content":"Translate to English: Introduction The Network Address Translation (NAT) protocol is mainly used for mutual conversion between Wide Area Network (WAN) IP addresses and Local Are..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-05T13:24:21.000Z"}],["meta",{"property":"article:author","content":"Go Guide"}],["meta",{"property":"article:modified_time","content":"2024-05-05T13:24:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"NAT\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-05T13:24:21.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Go Guide\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]],"description":"Translate to English: Introduction The Network Address Translation (NAT) protocol is mainly used for mutual conversion between Wide Area Network (WAN) IP addresses and Local Are..."},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Working Principle","slug":"working-principle","link":"#working-principle","children":[]},{"level":2,"title":"Advantages of NAT","slug":"advantages-of-nat","link":"#advantages-of-nat","children":[]},{"level":2,"title":"Disadvantages of NAT","slug":"disadvantages-of-nat","link":"#disadvantages-of-nat","children":[]}],"git":{"createdTime":1714030137000,"updatedTime":1714915461000,"contributors":[{"name":"Ryan Su","email":"yuansu.china.work@gmail.com","commits":3}]},"readingTime":{"minutes":1.68,"words":503},"filePathRelative":"en/guide/concepts/network/6-nat.md","localizedDate":"April 25, 2024","autoDesc":true,"excerpt":"<p>Translate to English:</p>\\n<h2>Introduction</h2>\\n<p>The Network Address Translation (NAT) protocol is mainly used for mutual conversion between Wide Area Network (WAN) IP addresses and Local Area Network (LAN) IP addresses.</p>\\n<details class=\\"hint-container details\\"><summary>Details</summary>\\n<p>A home router has a WAN IP address, and all other devices connected to the router share this WAN IP address. At this time, the NAT protocol needs to be used for conversion.</p>\\n</details>"}');export{p as comp,u as data};