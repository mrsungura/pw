jQuery(function(t){var n=t(".dsm-text-notation-middle");const o=RoughNotation.annotate;RoughNotation.annotationGroup;document.fonts.ready.then(function(){t(n).length&&t(n).each(function(n,a){var i=JSON.parse(t(this).attr("data-notation")),e=i[0].type,r=i[0].color,s=i[0]["stroke-width"],c=i[0].iterations,d=i[0].brackets.split("|"),u=i[0].viewport,h=i[0]["divi-animate"],p=(parseInt(i[0]["divi-animate-duration"],10),parseInt(i[0]["divi-animate-delay"],10)),f=parseInt(i[0].delay,10);"none"!==h&&(f=parseInt(p+1200,10));const l=o(this,{type:e,color:r,strokeWidth:s,iterations:c,brackets:d,animationDelay:f});t(this).waypoint(function(){setTimeout(function(){l.show()},f)},{offset:u,triggerOnce:!0})})})});