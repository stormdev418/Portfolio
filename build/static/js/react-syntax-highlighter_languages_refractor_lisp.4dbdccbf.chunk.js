"use strict";(self.webpackChunklearn_react=self.webpackChunklearn_react||[]).push([[4916],{4979:e=>{function n(e){!function(e){function n(e){return RegExp("(\\()"+e+"(?=[\\s\\)])")}function a(e){return RegExp("([\\s([])"+e+"(?=[\\s)])")}var t="[-+*/_~!@$%^=<>{}\\w]+",r="&"+t,s="(\\()",i="(?=\\))",l="(?=\\s)",o={heading:{pattern:/;;;.*/,alias:["comment","title"]},comment:/;.*/,string:{pattern:/"(?:[^"\\]|\\.)*"/,greedy:!0,inside:{argument:/[-A-Z]+(?=[.,\s])/,symbol:RegExp("`"+t+"'")}},"quoted-symbol":{pattern:RegExp("#?'"+t),alias:["variable","symbol"]},"lisp-property":{pattern:RegExp(":"+t),alias:"property"},splice:{pattern:RegExp(",@?"+t),alias:["symbol","variable"]},keyword:[{pattern:RegExp(s+"(?:(?:lexical-)?let\\*?|(?:cl-)?letf|if|when|while|unless|cons|cl-loop|and|or|not|cond|setq|error|message|null|require|provide|use-package)"+l),lookbehind:!0},{pattern:RegExp(s+"(?:for|do|collect|return|finally|append|concat|in|by)"+l),lookbehind:!0}],declare:{pattern:n("declare"),lookbehind:!0,alias:"keyword"},interactive:{pattern:n("interactive"),lookbehind:!0,alias:"keyword"},boolean:{pattern:a("(?:t|nil)"),lookbehind:!0},number:{pattern:a("[-+]?\\d+(?:\\.\\d*)?"),lookbehind:!0},defvar:{pattern:RegExp(s+"def(?:var|const|custom|group)\\s+"+t),lookbehind:!0,inside:{keyword:/^def[a-z]+/,variable:RegExp(t)}},defun:{pattern:RegExp(s+"(?:cl-)?(?:defun\\*?|defmacro)\\s+"+t+"\\s+\\([\\s\\S]*?\\)"),lookbehind:!0,inside:{keyword:/^(?:cl-)?def\S+/,arguments:null,function:{pattern:RegExp("(^\\s)"+t),lookbehind:!0},punctuation:/[()]/}},lambda:{pattern:RegExp(s+"lambda\\s+\\((?:&?"+t+"\\s*)*\\)"),lookbehind:!0,inside:{keyword:/^lambda/,arguments:null,punctuation:/[()]/}},car:{pattern:RegExp(s+t),lookbehind:!0},punctuation:[/(['`,]?\(|[)\[\]])/,{pattern:/(\s)\.(?=\s)/,lookbehind:!0}]},p={"lisp-marker":RegExp(r),rest:{argument:{pattern:RegExp(t),alias:"variable"},varform:{pattern:RegExp(s+t+"\\s+\\S[\\s\\S]*"+i),lookbehind:!0,inside:{string:o.string,boolean:o.boolean,number:o.number,symbol:o.symbol,punctuation:/[()]/}}}},d="\\S+(?:\\s+\\S+)*",u={pattern:RegExp(s+"[\\s\\S]*"+i),lookbehind:!0,inside:{"rest-vars":{pattern:RegExp("&(?:rest|body)\\s+"+d),inside:p},"other-marker-vars":{pattern:RegExp("&(?:optional|aux)\\s+"+d),inside:p},keys:{pattern:RegExp("&key\\s+"+d+"(?:\\s+&allow-other-keys)?"),inside:p},argument:{pattern:RegExp(t),alias:"variable"},punctuation:/[()]/}};o.lambda.inside.arguments=u,o.defun.inside.arguments=e.util.clone(u),o.defun.inside.arguments.inside.sublist=u,e.languages.lisp=o,e.languages.elisp=o,e.languages.emacs=o,e.languages["emacs-lisp"]=o}(e)}e.exports=n,n.displayName="lisp",n.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_lisp.4dbdccbf.chunk.js.map