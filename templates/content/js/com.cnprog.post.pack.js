var lanai={highlightSyntax:function(){var a=false;$("pre code").parent().each(function(){if(!$(this).hasClass("prettyprint")){$(this).addClass("prettyprint");a=true}});if(a){prettyPrint()}}};var Vote=function(){var M;var v;var ah;var O;var X="answer-container-";var V="vote-buttons";var s="answer-img-accept-";var T="question-img-favorite";var N="question-img-upvote-";var r="question-img-downvote-";var L="answer-img-upvote-";var ae="answer-img-downvote-";var ad="favorite-number";var j="comment-";var H="vote-number";var a="question-offensive-flag-";var t="answer-offensive-flag-";var x="offensive-flag";var aa="question-controls";var J="question-delete-link-";var b="answer-delete-link-";var o="User rights are not operating range";var w="Can not set up your own answer as the best answer";var g="Collection of anonymous users can not be the problem, please <a href='/accounts/login/?next=/questions/{{QuestionID}}'> register or login </a>";var aj="Anonymous users can not vote, please log in or <a href='/accounts/login/?next=/questions/{{QuestionID}}'> registration</a>";var K="+15 Points to the need to vote in favor. See <a href='/faq/'>faq</a>";var Y="+100 Points to the need to vote against it. See <a href='/faq/'> faq </ a>";var q="Can not vote for their own posts";var n="Sorry, you have used up all of the voting today. See <a href='/faq/'>faq</a>";var A="This vote is outdated and can not be revoked. See <a href='/faq/'>faq</a>";var u="Sure you want to classify the message as advertising, personal attacks, malicious remarks?";var ab="Anonymous users can not operate, please <a href='/accounts/login/?next=/questions/{{QuestionID}}'>register or login</a>";var C="Can not repeat the operation. See <a href='/faq/'>faq</a>";var B="Sorry, you have used up all 5 times today 'water with' the operation. View <a href='/faq/'>faq</a>";var af="+15 Points need to be classified 'spam'. View <a href='/faq/'>faq</a>";var p="Sure you want to delete/remove the withdrawal with it?";var W="Anonymous users can not delete or withdraw the deletion of posts";var Q="Operation successful! Has been the restoration of the post.";var i="Operation successful! The post has been deleted.";var h={acceptAnswer:0,questionUpVote:1,questionDownVote:2,favorite:4,answerUpVote:5,answerDownVote:6,offensiveQuestion:7,offensiveAnswer:8,removeQuestion:9,removeAnswer:10};var Z=function(){var ak="div."+V+" img[class="+T+"]";return $(ak)};var I=function(){var ak="#"+ad;return $(ak)};var e=function(){var ak="div."+V+" img[id^="+N+"]";return $(ak)};var E=function(){var ak="div."+V+" img[id^="+r+"]";return $(ak)};var l=function(){var ak="div."+V+" img[id^="+L+"]";return $(ak)};var k=function(){var ak="div."+V+" img[id^="+ae+"]";return $(ak)};var m=function(al){var ak="div."+V+" img[id="+L+al+"]";return $(ak)};var y=function(al){var ak="div."+V+" img[id="+ae+al+"]";return $(ak)};var z=function(){var ak="table[id=question-table] span[class="+x+"]";return $(ak)};var c=function(){var ak="div.answer span[class="+x+"]";return $(ak)};var R=function(){var ak="div#question-controls a[id^="+J+"]";return $(ak)};var f=function(){var ak="div.answer-controls a[id^="+b+"]";return $(ak)};var U=function(an,al,am){var ak=al?"":"-on";var ao=(an==h.questionUpVote||an==h.answerUpVote)?"up":"down";am.attr("src","/content/images/vote-arrow-"+ao+ak+".png");if(al){if(an==h.questionUpVote||an==h.questionDownVote){$(e()).attr("src","/content/images/vote-arrow-up.png");$(E()).attr("src","/content/images/vote-arrow-down.png")}else{$(m(v)).attr("src","/content/images/vote-arrow-up.png");$(y(v)).attr("src","/content/images/vote-arrow-down.png")}}};var P=function(al,am){var ak=al.parent("div."+V).find("div."+H);$(ak).text(am)};var ac=function(){if(ah==O){var am="div."+V+" img[id^="+s+"]";$(am).unbind("click").click(function(aq){Vote.accept($(aq.target))})}var ao=Z();ao.unbind("click").click(function(aq){Vote.favorite($(aq.target))});var an=e();an.unbind("click").click(function(aq){Vote.vote($(aq.target),h.questionUpVote)});var ak=E();ak.unbind("click").click(function(aq){Vote.vote($(aq.target),h.questionDownVote)});var al=l();al.unbind("click").click(function(aq){Vote.vote($(aq.target),h.answerUpVote)});var ap=k();ap.unbind("click").click(function(aq){Vote.vote($(aq.target),h.answerDownVote)});z().unbind("click").click(function(aq){Vote.offensive(this,h.offensiveQuestion)});c().unbind("click").click(function(aq){Vote.offensive(this,h.offensiveAnswer)});R().unbind("click").click(function(aq){Vote.remove(this,h.removeQuestion)});f().unbind("click").click(function(aq){Vote.remove(this,h.removeAnswer)})};var G=function(ak,al,am){$.ajax({type:"POST",cache:false,dataType:"json",url:"/questions/"+M+"/vote/",data:{type:al,postId:v},error:ai,success:function(an){am(ak,al,an)}})};var ai=function(al,ak){alert("Callback invoke error: "+ak)};var d=function(al,am,ao){if(ao.allowed=="0"&&ao.success=="0"){showMessage(al,o)}else{if(ao.allowed=="-1"){showMessage(al,w)}else{if(ao.status=="1"){al.attr("src","/content/images/vote-accepted.png");$("#"+X+v).removeClass("accepted-answer");$("#"+j+v).removeClass("comment-link-accepted")}else{if(ao.success=="1"){var an="div."+V+" img[id^="+s+"]";$(an).attr("src","/content/images/vote-accepted.png");var ap=("div[id^="+X+"]");$(ap).removeClass("accepted-answer");var ak=("div[id^="+X+"] div[id^="+j+"]");$(ak).removeClass("comment-link-accepted");al.attr("src","/content/images/vote-accepted-on.png");$("#"+X+v).addClass("accepted-answer");$("#"+j+v).addClass("comment-link-accepted")}else{showMessage(al,ao.message)}}}}};var F=function(ak,al,am){if(am.allowed=="0"&&am.success=="0"){showMessage(ak,g.replace("{{QuestionID}}",M))}else{if(am.status=="1"){ak.attr("src","/content/images/vote-favorite-off.png");var an=I();an.removeClass("my-favorite-number");if(am.count==0){am.count=""}an.text(am.count)}else{if(am.success=="1"){ak.attr("src","/content/images/vote-favorite-on.png");var an=I();an.text(am.count);an.addClass("my-favorite-number")}else{showMessage(ak,am.message)}}}};var S=function(ak,al,am){if(am.allowed=="0"&&am.success=="0"){showMessage(ak,aj.replace("{{QuestionID}}",M))}else{if(am.allowed=="-3"){showMessage(ak,n)}else{if(am.allowed=="-2"){if(al==h.questionUpVote||al==h.answerUpVote){showMessage(ak,K)}else{if(al==h.questionDownVote||al==h.answerDownVote){showMessage(ak,Y)}}}else{if(am.allowed=="-1"){showMessage(ak,q)}else{if(am.status=="2"){showMessage(ak,A)}else{if(am.status=="1"){U(al,true,ak);P(ak,am.count)}else{if(am.success=="1"){U(al,false,ak);P(ak,am.count);if(am.message.length>0){showMessage(ak,am.message)}}}}}}}}};var ag=function(ak,al,am){ak=$(ak);if(am.allowed=="0"&&am.success=="0"){showMessage(ak,ab.replace("{{QuestionID}}",M))}else{if(am.allowed=="-3"){showMessage(ak,B)}else{if(am.allowed=="-2"){showMessage(ak,af)}else{if(am.status=="1"){showMessage(ak,C)}else{if(am.success=="1"){$(ak).children("span[class=darkred]").text("("+am.count+")")}}}}}};var D=function(ak,al,am){if(am.allowed=="0"&&am.success=="0"){showMessage(ak,W.replace("{{QuestionID}}",M))}else{if(am.status=="1"){showMessage(ak,Q)}else{if(am.success=="1"){showMessage(ak,i)}}}};return{init:function(ak,al,am){M=ak;ah=al;O=am;ac()},accept:function(ak){v=ak.attr("id").substring(s.length);G(ak,h.acceptAnswer,d)},favorite:function(ak){if(!O||O.toUpperCase()=="NONE"){showMessage(ak,g.replace("{{QuestionID}}",M));return false}G(ak,h.favorite,F)},vote:function(ak,al){if(!O||O.toUpperCase()=="NONE"){showMessage(ak,aj.replace("{{QuestionID}}",M));return false}if(al==h.answerUpVote){v=ak.attr("id").substring(L.length)}else{if(al==h.answerDownVote){v=ak.attr("id").substring(ae.length)}}G(ak,al,S)},offensive:function(ak,al){if(!O||O.toUpperCase()=="NONE"){showMessage($(ak),ab.replace("{{QuestionID}}",M));return false}if(confirm(u)){v=ak.id.substr(ak.id.lastIndexOf("-")+1);G(ak,al,ag)}},remove:function(ak,al){if(!O||O.toUpperCase()=="NONE"){showMessage($(ak),W.replace("{{QuestionID}}",M));return false}if(confirm(p)){v=ak.id.substr(ak.id.lastIndexOf("-")+1);G($(ak),al,D)}}}}();function createComments(i){var d=i;var b=function(k){return $("#comments-"+d+"-"+k)};var j=function(k){appendLoader("#comments-"+d+"-"+k+" div.comments")};var h=function(m,l){var k=l.siblings("#can-post-comments-"+d+"-"+m);return k.val().toLowerCase()=="true"};var f=function(o,m){var n="form-comments-"+d+"-"+o;if(h(o,m)){if(m.find("#"+n).length==0){var l='<form id="'+n+'" class="post-comments"><div>';l+='<textarea name="comment" cols="60" rows="5" maxlength="300" onblur="'+d+'Comments.updateTextCounter(this)" ';l+='onfocus="'+d+'Comments.updateTextCounter(this)" onkeyup="'+d+'Comments.updateTextCounter(this)"></textarea>';l+='<input type="submit" value="Add a comment" /><br><span class="text-counter"></span>';l+='<span class="form-error"></span></div></form>';m.append(l);setupFormValidation("#"+n,{comment:{required:true,minlength:10}},"",function(){e(o,n)})}}else{var k="comments-rep-needed-"+d+"-"+o;if(m.find("#"+k).length==0){m.append('<div id="'+k+'" style="color:red">Comment on the need for '+repNeededForComments+' Community Points - <a href="/faq/" class="comment-user">See faq</a></span>')}}};var a=function(l,k){j(l);$.getJSON("/"+d+"s/"+l+"/comments/",function(m){c(l,m)})};var c=function(n,l){var m=b(n);m=m.find("div.comments");m.find("div[id^='comment-"+d+"-']").remove();removeLoader();if(l&&l.length>0){for(var k=0;k<l.length;k++){g(m,l[k])}m.children().show()}};var g=function(o,n){var m='<div id="comment-'+d+"-"+n.id+'" style="display:none">'+n.text;m+=n.user_url?'&nbsp;&ndash;&nbsp;<a href="'+n.user_url+'"':"<span";m+=' class="comment-user">'+n.user_display_name+(n.user_url?"</a>":"</span>");m+=' <span class="comment-date">('+n.add_date+")</span>";if(n.delete_url){var l="/content/images/close-small.png";var k="/content/images/close-small-hover.png";m+='<img onclick="'+d+"Comments.deleteComment($(this), "+n.object_id+", '"+n.delete_url+'\')" src="'+l;m+="\" onmouseover=\"$(this).attr('src', '"+k+"')\" onmouseout=\"$(this).attr('src', '"+l;m+='\')" title="Delete this comment" />'}m+="</div>";o.append(m)};var e=function(n,m){j(n);var l="#"+m;var k=$(l+" textarea");$.ajax({type:"POST",url:"/"+d+"s/"+n+"/comments/",dataType:"json",data:{comment:k.val()},success:function(o){c(n,o);k.val("");commentsFactory[d].updateTextCounter(k);enableSubmitButton(l)},error:function(o,q,p){removeLoader();showMessage(l,o.responseText);enableSubmitButton(l)}})};return{init:function(){$("a[id^='comments-link-"+d+"-']").unbind("click").click(function(){commentsFactory[d].show($(this).attr("id").substr(("comments-link-"+d+"-").length))})},show:function(l){var k=b(l);a(l,k);f(l,k);k.show();if(h(l,k)){k.find("textarea").get(0).focus()}k.siblings("a").unbind("click").click(function(){commentsFactory[d].hide(l)}).text("Hide comments")},hide:function(n){var m=b(n);var k=m.children("div.comments").children().length;var l=k==0?"Add a comment":"Comments (<b>"+k+"</b>)";m.hide();m.siblings("a").unbind("click").click(function(){commentsFactory[d].show(n)}).html(l);m.children("div.comments").children().hide()},deleteComment:function(m,l,k){if(confirm("Really want to delete this comment?")){m.hide();j(l);$.post(k,{dataNeeded:"forIIS7"},function(n){c(l,n)},"json")}},updateTextCounter:function(l){var n=l.value?l.value.length:0;var m=n>270?"#f00":n>200?"#f60":"#999";var k=$(l).siblings("span.text-counter");k.html("Maximum of "+(300-n)+" characters").css("color",m)}}}var questionComments=createComments("question");var answerComments=createComments("answer");$().ready(function(){questionComments.init();answerComments.init()});var commentsFactory={question:questionComments,answer:answerComments};var PR_SHOULD_USE_CONTINUATION=true;var PR_TAB_WIDTH=8;var PR_normalizedHtml;var PR;var prettyPrintOne;var prettyPrint;function _pr_isIE6(){var a=navigator&&navigator.userAgent&&/\bMSIE 6\./.test(navigator.userAgent);_pr_isIE6=function(){return a};return a}(function(){function W(av){av=av.split(/ /g);var aw={};for(var au=av.length;--au>=0;){var at=av[au];if(at){aw[at]=null}}return aw}var n="break continue do else for if return while ";var D=n+"auto case char const default double enum extern float goto int long register short signed sizeof static struct switch typedef union unsigned void volatile ";var w=D+"catch class delete false import new operator private protected public this throw true try ";var p=w+"alignof align_union asm axiom bool concept concept_map const_cast constexpr decltype dynamic_cast explicit export friend inline late_check mutable namespace nullptr reinterpret_cast static_assert static_cast template typeid typename typeof using virtual wchar_t where ";var G=w+"boolean byte extends final finally implements import instanceof null native package strictfp super synchronized throws transient ";var ap=G+"as base by checked decimal delegate descending event fixed foreach from group implicit in interface internal into is lock object out override orderby params readonly ref sbyte sealed stackalloc string select uint ulong unchecked unsafe ushort var ";var F=w+"debugger eval export function get null set undefined var with Infinity NaN ";var y="caller delete die do dump elsif eval exit foreach for goto if import last local my next no our print package redo require sub undef unless until use wantarray while BEGIN END ";var ab=n+"and as assert class def del elif except exec finally from global import in is lambda nonlocal not or pass print raise try with yield False True None ";var k=n+"alias and begin case class def defined elsif end ensure false in module next nil not or redo rescue retry self super then true undef unless until when yield BEGIN END ";var aa=n+"case done elif esac eval fi function in local set then until ";var M=(p+ap+F+y+ab+k+aa);var O="str";var L="kwd";var o="com";var al="typ";var Y="lit";var ah="pun";var V="pln";var q="tag";var U="dec";var ad="src";var ao="atn";var s="atv";var ak="nocode";function aq(at){return(at>="a"&&at<="z")||(at>="A"&&at<="Z")}function N(aw,au,at,av){aw.unshift(at,av||0);try{au.splice.apply(au,aw)}finally{aw.splice(0,2)}}var ai=function(){var av=["!","!=","!==","#","%","%=","&","&&","&&=","&=","(","*","*=","+=",",","-=","->","/","/=",":","::",";","<","<<","<<=","<=","=","==","===",">",">=",">>",">>=",">>>",">>>=","?","@","[","^","^=","^^","^^=","{","|","|=","||","||=","~","break","case","continue","delete","do","else","finally","instanceof","return","throw","try","typeof"];var aw="(?:(?:(?:^|[^0-9.])\\.{1,3})|(?:(?:^|[^\\+])\\+)|(?:(?:^|[^\\-])-)";for(var at=0;at<av.length;++at){var au=av[at];if(aq(au.charAt(0))){aw+="|\\b"+au}else{aw+="|"+au.replace(/([^=<>:&])/g,"\\$1")}}aw+="|^)\\s*$";return new RegExp(aw)}();var S=/&/g;var Z=/</g;var x=/>/g;var K=/\"/g;function E(at){return at.replace(S,"&amp;").replace(Z,"&lt;").replace(x,"&gt;").replace(K,"&quot;")}function r(at){return at.replace(S,"&amp;").replace(Z,"&lt;").replace(x,"&gt;")}var e=/&lt;/g;var C=/&gt;/g;var d=/&apos;/g;var i=/&quot;/g;var ar=/&amp;/g;var J=/&nbsp;/g;function t(aw){var ay=aw.indexOf("&");if(ay<0){return aw}for(--ay;(ay=aw.indexOf("&#",ay+1))>=0;){var at=aw.indexOf(";",ay);if(at>=0){var av=aw.substring(ay+3,at);var ax=10;if(av&&av.charAt(0)==="x"){av=av.substring(1);ax=16}var au=parseInt(av,ax);if(!isNaN(au)){aw=(aw.substring(0,ay)+String.fromCharCode(au)+aw.substring(at+1))}}}return aw.replace(e,"<").replace(C,">").replace(d,"'").replace(i,'"').replace(ar,"&").replace(J," ")}function R(at){return"XMP"===at.tagName}function an(ax,av){switch(ax.nodeType){case 1:var au=ax.tagName.toLowerCase();av.push("<",au);for(var aw=0;aw<ax.attributes.length;++aw){var at=ax.attributes[aw];if(!at.specified){continue}av.push(" ");an(at,av)}av.push(">");for(var ay=ax.firstChild;ay;ay=ay.nextSibling){an(ay,av)}if(ax.firstChild||!/^(?:br|link|img)$/.test(au)){av.push("</",au,">")}break;case 2:av.push(ax.name.toLowerCase(),'="',E(ax.value),'"');break;case 3:case 4:av.push(r(ax.nodeValue));break}}var am=null;function b(aw){if(null===am){var au=document.createElement("PRE");au.appendChild(document.createTextNode('<!DOCTYPE foo PUBLIC "foo bar">\n<foo />'));am=!/</.test(au.innerHTML)}if(am){var av=aw.innerHTML;if(R(aw)){av=r(av)}return av}var at=[];for(var ax=aw.firstChild;ax;ax=ax.nextSibling){an(ax,at)}return at.join("")}function ag(av){var at="                ";var au=0;return function(az){var ax=null;var aC=0;for(var ay=0,aB=az.length;ay<aB;++ay){var aA=az.charAt(ay);switch(aA){case"\t":if(!ax){ax=[]}ax.push(az.substring(aC,ay));var aw=av-(au%av);au+=aw;for(;aw>=0;aw-=at.length){ax.push(at.substring(0,aw))}aC=ay+1;break;case"\n":au=0;break;default:++au}}if(!ax){return az}ax.push(az.substring(aC));return ax.join("")}}var Q=/(?:[^<]+|<!--[\s\S]*?-->|<!\[CDATA\[([\s\S]*?)\]\]>|<\/?[a-zA-Z][^>]*>|<)/g;var v=/^<!--/;var T=/^<\[CDATA\[/;var u=/^<br\b/i;var h=/^<(\/?)([a-zA-Z]+)/;function B(aF){var aB=aF.match(Q);var aE=[];var aw=0;var at=[];if(aB){for(var aA=0,av=aB.length;aA<av;++aA){var aC=aB[aA];if(aC.length>1&&aC.charAt(0)==="<"){if(v.test(aC)){continue}if(T.test(aC)){aE.push(aC.substring(9,aC.length-3));aw+=aC.length-12}else{if(u.test(aC)){aE.push("\n");++aw}else{if(aC.indexOf(ak)>=0&&ac(aC)){var au=aC.match(h)[2];var az=1;end_tag_loop:for(var ay=aA+1;ay<av;++ay){var aD=aB[ay].match(h);if(aD&&aD[2]===au){if(aD[1]==="/"){if(--az===0){break end_tag_loop}}else{++az}}}if(ay<av){at.push(aw,aB.slice(aA,ay+1).join(""));aA=ay}else{at.push(aw,aC)}}else{at.push(aw,aC)}}}}else{var ax=t(aC);aE.push(ax);aw+=ax.length}}}return{source:aE.join(""),tags:at}}function ac(at){return !!at.replace(/\s(\w+)\s*=\s*(?:\"([^\"]*)\"|'([^\']*)'|(\S+))/g,' $1="$2$3$4"').match(/[cC][lL][aA][sS][sS]=\"[^\"]*\bnocode\b/)}function j(av,au){var at={};(function(){var ay=av.concat(au);for(var az=ay.length;--az>=0;){var aC=ay[az];var aA=aC[3];if(aA){for(var aB=aA.length;--aB>=0;){at[aA.charAt(aB)]=aC}}}})();var ax=au.length;var aw=/\S/;return function(aA,aH){aH=aH||0;var aB=[aH,V];var aC="";var aJ=0;var aI=aA;while(aI.length){var ay;var aD=null;var aG;var az=at[aI.charAt(0)];if(az){aG=aI.match(az[1]);aD=aG[0];ay=az[0]}else{for(var aE=0;aE<ax;++aE){az=au[aE];var aF=az[2];if(aF&&!aF.test(aC)){continue}aG=aI.match(az[1]);if(aG){aD=aG[0];ay=az[0];break}}if(!aD){ay=V;aD=aI.substring(0,1)}}aB.push(aH+aJ,ay);aJ+=aD.length;aI=aI.substring(aD.length);if(ay!==o&&aw.test(aD)){aC=aD}}return aB}}var a=j([],[[V,/^[^<]+/,null],[U,/^<!\w[^>]*(?:>|$)/,null],[o,/^<!--[\s\S]*?(?:-->|$)/,null],[ad,/^<\?[\s\S]*?(?:\?>|$)/,null],[ad,/^<%[\s\S]*?(?:%>|$)/,null],[ad,/^<(script|style|xmp)\b[^>]*>[\s\S]*?<\/\1\b[^>]*>/i,null],[q,/^<\/?\w[^<>]*>/,null]]);var z=/^(<[^>]*>)([\s\S]*)(<\/[^>]*>)$/;function ae(ay){var av=a(ay);for(var ax=0;ax<av.length;ax+=2){if(av[ax+1]===ad){var az,au;az=av[ax];au=ax+2<av.length?av[ax+2]:ay.length;var at=ay.substring(az,au);var aw=at.match(z);if(aw){av.splice(ax,2,az,q,az+aw[1].length,ad,az+aw[1].length+(aw[2]||"").length,q)}}}return av}var X=j([[s,/^\'[^\']*(?:\'|$)/,null,"'"],[s,/^\"[^\"]*(?:\"|$)/,null,'"'],[ah,/^[<>\/=]+/,null,"<>/="]],[[q,/^[\w:\-]+/,/^</],[s,/^[\w\-]+/,/^=/],[ao,/^[\w:\-]+/,null],[V,/^\s+/,null," \t\r\n"]]);function I(ay,au){for(var aw=0;aw<au.length;aw+=2){var ax=au[aw+1];if(ax===q){var aA,at;aA=au[aw];at=aw+2<au.length?au[aw+2]:ay.length;var av=ay.substring(aA,at);var az=X(av,aA);N(az,au,aw,2);aw+=az.length-2}}return au}function m(aw){var ay=[],av=[];if(aw.tripleQuotedStrings){ay.push([O,/^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,null,"'\""])}else{if(aw.multiLineStrings){ay.push([O,/^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,null,"'\"`"])}else{ay.push([O,/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,null,"\"'"])}}av.push([V,/^(?:[^\'\"\`\/\#]+)/,null," \r\n"]);if(aw.hashComments){ay.push([o,/^#[^\r\n]*/,null,"#"])}if(aw.cStyleComments){av.push([o,/^\/\/[^\r\n]*/,null]);av.push([o,/^\/\*[\s\S]*?(?:\*\/|$)/,null])}if(aw.regexLiterals){var aA=("^/(?=[^/*])(?:[^/\\x5B\\x5C]|\\x5C[\\s\\S]|\\x5B(?:[^\\x5C\\x5D]|\\x5C[\\s\\S])*(?:\\x5D|$))+(?:/|$)");av.push([O,new RegExp(aA),ai])}var ax=W(aw.keywords);aw=null;var au=j(ay,av);var az=j([],[[V,/^\s+/,null," \r\n"],[V,/^[a-z_$@][a-z_$@0-9]*/i,null],[Y,/^0x[a-f0-9]+[a-z]/i,null],[Y,/^(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d+)(?:e[+\-]?\d+)?[a-z]*/i,null,"123456789"],[ah,/^[^\s\w\.$@]+/,null]]);function at(aB,aF){for(var aJ=0;aJ<aF.length;aJ+=2){var aC=aF[aJ+1];if(aC===V){var aD,aH,aL,aK;aD=aF[aJ];aH=aJ+2<aF.length?aF[aJ+2]:aB.length;aL=aB.substring(aD,aH);aK=az(aL,aD);for(var aI=0,aE=aK.length;aI<aE;aI+=2){var aM=aK[aI+1];if(aM===V){var aO=aK[aI];var aN=aI+2<aE?aK[aI+2]:aL.length;var aG=aB.substring(aO,aN);if(aG==="."){aK[aI+1]=ah}else{if(aG in ax){aK[aI+1]=L}else{if(/^@?[A-Z][A-Z$]*[a-z][A-Za-z$]*$/.test(aG)){aK[aI+1]=aG.charAt(0)==="@"?Y:al}}}}}N(aK,aF,aJ,2);aJ+=aK.length-2}}return aF}return function(aC){var aB=au(aC);aB=at(aC,aB);return aB}}var af=m({keywords:M,hashComments:true,cStyleComments:true,multiLineStrings:true,regexLiterals:true});function aj(at,ax){for(var aA=0;aA<ax.length;aA+=2){var au=ax[aA+1];if(au===ad){var av,ay;av=ax[aA];ay=aA+2<ax.length?ax[aA+2]:at.length;var aB=af(at.substring(av,ay));for(var az=0,aw=aB.length;az<aw;az+=2){aB[az]+=av}N(aB,ax,aA,2);aA+=aB.length-2}}return ax}function c(at,aB){var aI=false;for(var aF=0;aF<aB.length;aF+=2){var av=aB[aF+1];var ax,aD;if(av===ao){ax=aB[aF];aD=aF+2<aB.length?aB[aF+2]:at.length;aI=/^on|^style$/i.test(at.substring(ax,aD))}else{if(av===s){if(aI){ax=aB[aF];aD=aF+2<aB.length?aB[aF+2]:at.length;var aG=at.substring(ax,aD);var au=aG.length;var aA=(au>=2&&/^[\"\']/.test(aG)&&aG.charAt(0)===aG.charAt(au-1));var aw;var ay;var aC;if(aA){ay=ax+1;aC=aD-1;aw=aG}else{ay=ax+1;aC=aD-1;aw=aG.substring(1,aG.length-1)}var aH=af(aw);for(var aE=0,az=aH.length;aE<az;aE+=2){aH[aE]+=ay}if(aA){aH.push(aC,s);N(aH,aB,aF+2,0)}else{N(aH,aB,aF,2)}}aI=false}}}return aB}function l(au){var at=ae(au);at=I(au,at);at=aj(au,at);at=c(au,at);return at}function P(aJ,au,ay){var aB=[];var aI=0;var ax=null;var aC=null;var av=0;var aH=0;var az=ag(PR_TAB_WIDTH);var aw=/([\r\n ]) /g;var aF=/(^| ) /gm;var aA=/\r\n?|\n/g;var aD=/[ \r\n]$/;var aE=true;function aG(aK){if(aK>aI){if(ax&&ax!==aC){aB.push("</span>");ax=null}if(!ax&&aC){ax=aC;aB.push('<span class="',ax,'">')}var aL=r(az(aJ.substring(aI,aK))).replace(aE?aF:aw,"$1&nbsp;");aE=aD.test(aL);aB.push(aL.replace(aA,"<br />"));aI=aK}}while(true){var at;if(av<au.length){if(aH<ay.length){at=au[av]<=ay[aH]}else{at=true}}else{at=false}if(at){aG(au[av]);if(ax){aB.push("</span>");ax=null}aB.push(au[av+1]);av+=2}else{if(aH<ay.length){aG(ay[aH]);aC=ay[aH+1];aH+=2}else{break}}}aG(aJ.length);if(ax){aB.push("</span>")}return aB.join("")}var A={};function g(av,aw){for(var at=aw.length;--at>=0;){var au=aw[at];if(!A.hasOwnProperty(au)){A[au]=av}else{if("console" in window){console.log("cannot override language handler %s",au)}}}}g(af,["default-code"]);g(l,["default-markup","html","htm","xhtml","xml","xsl"]);g(m({keywords:p,hashComments:true,cStyleComments:true}),["c","cc","cpp","cs","cxx","cyc"]);g(m({keywords:G,cStyleComments:true}),["java"]);g(m({keywords:aa,hashComments:true,multiLineStrings:true}),["bsh","csh","sh"]);g(m({keywords:ab,hashComments:true,multiLineStrings:true,tripleQuotedStrings:true}),["cv","py"]);g(m({keywords:y,hashComments:true,multiLineStrings:true,regexLiterals:true}),["perl","pl","pm"]);g(m({keywords:k,hashComments:true,multiLineStrings:true,regexLiterals:true}),["rb"]);g(m({keywords:F,cStyleComments:true,regexLiterals:true}),["js"]);function H(ay,aw){try{var az=B(ay);var av=az.source;var at=az.tags;if(!A.hasOwnProperty(aw)){aw=/^\s*</.test(av)?"default-markup":"default-code"}var au=A[aw].call({},av);return P(av,at,au)}catch(ax){if("console" in window){console.log(ax);console.trace()}return ay}}function f(az){var aA=_pr_isIE6();var au=[document.getElementsByTagName("pre"),document.getElementsByTagName("code"),document.getElementsByTagName("xmp")];var ay=[];for(var aw=0;aw<au.length;++aw){for(var av=0;av<au[aw].length;++av){ay.push(au[aw][av])}}au=null;var at=0;function ax(){var aG=(PR_SHOULD_USE_CONTINUATION?new Date().getTime()+250:Infinity);for(;at<ay.length&&new Date().getTime()<aG;at++){var aH=ay[at];if(aH.className&&aH.className.indexOf("prettyprint")>=0){var aD=aH.className.match(/\blang-(\w+)\b/);if(aD){aD=aD[1]}var aM=false;for(var aB=aH.parentNode;aB;aB=aB.parentNode){if((aB.tagName==="pre"||aB.tagName==="code"||aB.tagName==="xmp")&&aB.className&&aB.className.indexOf("prettyprint")>=0){aM=true;break}}if(!aM){var aJ=b(aH);aJ=aJ.replace(/(?:\r\n?|\n)$/,"");var aN=H(aJ,aD);if(!R(aH)){aH.innerHTML=aN}else{var aC=document.createElement("PRE");for(var aF=0;aF<aH.attributes.length;++aF){var aO=aH.attributes[aF];if(aO.specified){var aK=aO.name.toLowerCase();if(aK==="class"){aC.className=aO.value}else{aC.setAttribute(aO.name,aO.value)}}}aC.innerHTML=aN;aH.parentNode.replaceChild(aC,aH);aH=aC}if(aA&&aH.tagName==="PRE"){var aI=aH.getElementsByTagName("br");for(var aE=aI.length;--aE>=0;){var aL=aI[aE];aL.parentNode.replaceChild(document.createTextNode("\r\n"),aL)}}}}}if(at<ay.length){setTimeout(ax,250)}else{if(az){az()}}}ax()}window.PR_normalizedHtml=an;window.prettyPrintOne=H;window.prettyPrint=f;window.PR={createSimpleLexer:j,registerLangHandler:g,sourceDecorator:m,PR_ATTRIB_NAME:ao,PR_ATTRIB_VALUE:s,PR_COMMENT:o,PR_DECLARATION:U,PR_KEYWORD:L,PR_LITERAL:Y,PR_NOCODE:ak,PR_PLAIN:V,PR_PUNCTUATION:ah,PR_SOURCE:ad,PR_STRING:O,PR_TAG:q,PR_TYPE:al}})();
