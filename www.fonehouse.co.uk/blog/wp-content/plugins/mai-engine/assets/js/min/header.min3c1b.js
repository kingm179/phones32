!function(){var e=document.documentElement,t=document.getElementsByTagName("body")[0],s=document.getElementsByClassName("genesis-skip-link")[0],n=document.getElementsByClassName("before-header")[0],a=document.getElementsByTagName("header")[0],r=document.getElementsByClassName("after-header")[0],i=document.getElementsByClassName("nav-after-header")[0],c=document.getElementsByClassName("page-header")[0],h=window.getComputedStyle(document.documentElement).getPropertyValue("--breakpoint-sm"),o=a&&t.classList.contains("has-dark-header"),l=a&&t.classList.contains("has-sticky-header"),d=a&&t.classList.contains("has-transparent-header"),g=a&&d&&t.classList.contains("has-dark-transparent-header"),m=c&&t.classList.contains("has-page-header"),u=!!a&&getComputedStyle(a),y=!!a&&1e3*parseFloat(u.getPropertyValue("transition-duration")),p=!1,f=!1,v=!1;m?f=c:(t.classList.contains("is-single")?v=document.querySelectorAll("#genesis-content > .entry-single:first-child > .entry-wrap-single:first-child > .entry-content:first-child > :not(:empty):first-of-type"):t.classList.contains("is-archive")&&(v=document.querySelectorAll("#genesis-content > :not(:empty):first-of-type")),v=!!(v&&v.length&&v[0].classList.contains("alignfull"))&&v[0],f=(p=v)?v:f);var L=new IntersectionObserver((function(e){e[0].isIntersecting?(t.classList.remove("header-stuck"),!d||o||g||t.classList.remove("has-dark-header")):(window.innerWidth||document.documentElement.clientWidth)>parseInt(h,10)&&(t.classList.add("header-stuck"),d&&o&&t.classList.add("has-dark-header"))}),{threshold:[0,1]}),b=new ResizeObserver(t=>{t.forEach(t=>{e.style.setProperty("--before-header-height",Math.ceil(t.contentRect.height)+"px")})}),E=0,R=0,k=0,w=new ResizeObserver(s=>{s.forEach(s=>{s.contentRect.width===E&&R&&k||(t.classList.contains("header-stuck")?(e.style.setProperty("--header-height-shrunk",Math.ceil(s.contentRect.height)+"px"),setTimeout((function(){e.style.setProperty("--header-height-shrunk",Math.ceil(s.contentRect.height)+"px"),k=1}),y)):(e.style.setProperty("--header-height-full",Math.ceil(s.contentRect.height)+"px"),setTimeout((function(){e.style.setProperty("--header-height-full",Math.ceil(s.contentRect.height)+"px"),R=1}),y)),E=s.contentRect.width),e.style.setProperty("--header-height",Math.ceil(s.contentRect.height)+"px")})}),P=new ResizeObserver(t=>{t.forEach(t=>{e.style.setProperty("--after-header-height",Math.ceil(t.contentRect.height)+"px")})}),x=new ResizeObserver(t=>{t.forEach(t=>{e.style.setProperty("--nav-after-header-height",Math.ceil(t.contentRect.height)+"px")})});n&&b.observe(n),a&&w.observe(a),r&&P.observe(r),i&&x.observe(i),l&&L.observe(n||s),p&&t.classList.add("has-alignfull-first"),f&&f.classList.add("is-alignfull-first")}();