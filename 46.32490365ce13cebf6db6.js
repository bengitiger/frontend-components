(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{872:function(e,t,n){"use strict";n.r(t),t.default="import { useCallback, useState } from 'react';\n\nexport interface ResetTimeState {\n  resetTime: number;\n  updateResetTime: () => void;\n}\n\nexport function useResetTime(): ResetTimeState {\n  const [resetTime, setResetTime] = useState<number>(Date.now());\n\n  const updateResetTime = useCallback(() => setResetTime(Date.now()), []);\n\n  return {\n    resetTime,\n    updateResetTime,\n  };\n}\n"},925:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r}));n(0);var s=n(62),i=n(7),a=n(89);const c={};function r({components:e,...t}){return Object(s.b)("wrapper",Object.assign({},c,t,{components:e,mdxType:"MDXLayout"}),Object(s.b)("h1",null,Object(s.b)("inlineCode",{parentName:"h1"},"@lunit/use-reset-time")),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"<InsightViewer>"),"\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 ",Object(s.b)("inlineCode",{parentName:"p"},"resetTime={}")," \uc744 \uad00\ub9ac\ud558\ub294\ub370 \uc0ac\uc6a9\ub41c\ub2e4."),Object(s.b)("p",null,"\uac04\ub2e8\ud558\uac8c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574\uc11c \ub9cc\ub4e4 Util\uc774\uace0, \ud544\uc694\ud55c \uacbd\uc6b0 \uc544\ub798\uc640 \uac19\uc774 \uc0ac\uc6a9\ud574\ub3c4 \ub41c\ub2e4."),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"function Component() {\n  const [resetTime, setResetTime] = useState<Date>(() => Date.now());\n\n  return <div>...</div>;\n}\n")),Object(s.b)("h1",null,"Source"),Object(s.b)(a.Example,{example:Object(i.d)("../index",{source:n(872),filename:"src/_packages/@lunit/use-reset-time/index.ts"}),mdxType:"Example"}))}r.isMDXComponent=!0}}]);
//# sourceMappingURL=46.32490365ce13cebf6db6.js.map