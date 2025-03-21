import{_ as e,c as s,a0 as i,o as t}from"./chunks/framework.DV-4xFRt.js";const g=JSON.parse('{"title":"Image Resizing","description":"","frontmatter":{},"headers":[],"relativePath":"resizing.md","filePath":"resizing.md"}'),n={name:"resizing.md"};function h(p,a,l,o,d,r){return t(),s("div",null,a[0]||(a[0]=[i(`<h1 id="image-resizing" tabindex="-1">Image Resizing <a class="header-anchor" href="#image-resizing" aria-label="Permalink to &quot;Image Resizing&quot;">​</a></h1><p>Skymage offers powerful resizing capabilities that allow you to dynamically adjust image dimensions while preserving quality.</p><h2 id="basic-resizing-parameters" tabindex="-1">Basic Resizing Parameters <a class="header-anchor" href="#basic-resizing-parameters" aria-label="Permalink to &quot;Basic Resizing Parameters&quot;">​</a></h2><h3 id="width-w" tabindex="-1">Width <code>w</code> <a class="header-anchor" href="#width-w" aria-label="Permalink to &quot;Width \`w\`&quot;">​</a></h3><p>Set the width of the image in pixels. The height will adjust automatically to maintain the aspect ratio.</p><p><strong>Example:</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=300</span></span></code></pre></div><p><img src="https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=300" alt="Width example"></p><h3 id="height-h" tabindex="-1">Height <code>h</code> <a class="header-anchor" href="#height-h" aria-label="Permalink to &quot;Height \`h\`&quot;">​</a></h3><p>Set the height of the image in pixels. The width will adjust automatically to maintain the aspect ratio.</p><p><strong>Example:</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>https://demo.skymage.net/v1/daudau.cc/images/crab.png?h=200</span></span></code></pre></div><p><img src="https://demo.skymage.net/v1/daudau.cc/images/crab.png?h=200" alt="Height example"></p><h3 id="width-and-height-w-h" tabindex="-1">Width and Height <code>w</code> &amp; <code>h</code> <a class="header-anchor" href="#width-and-height-w-h" aria-label="Permalink to &quot;Width and Height \`w\` &amp; \`h\`&quot;">​</a></h3><p>When specifying both dimensions, you should always include a <code>fit</code> parameter to control how the image should be resized. Without a <code>fit</code> parameter, the default behavior is <code>fit=clip</code>.</p><p><strong>Example:</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=300&amp;h=200</span></span></code></pre></div><p><img src="https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=300&amp;h=200" alt="Width and height example"></p><p>For detailed information about fit modes and positioning, see the <a href="./fit.html">Fit and Positioning Guide</a>.</p><h2 id="responsive-images" tabindex="-1">Responsive Images <a class="header-anchor" href="#responsive-images" aria-label="Permalink to &quot;Responsive Images&quot;">​</a></h2><p>For responsive web design, you can create multiple sizes of the same image:</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=400&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  srcset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=300 300w,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=600 600w,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=900 900w</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  sizes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;(max-width: 600px) 100vw, 50vw&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  alt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Responsive crab image&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre></div><h2 id="performance-tips" tabindex="-1">Performance Tips <a class="header-anchor" href="#performance-tips" aria-label="Permalink to &quot;Performance Tips&quot;">​</a></h2><ul><li>Specify only the dimensions you need to save bandwidth</li><li>Use WebP format (<code>f=webp</code>) together with resizing for optimal performance</li></ul>`,24)]))}const m=e(n,[["render",h]]);export{g as __pageData,m as default};
