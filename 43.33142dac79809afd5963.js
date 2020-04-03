(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{858:function(n,e,t){"use strict";t.r(e),e.default="import { NewWindow } from '@lunit/new-window';\nimport { Button, TextField } from '@material-ui/core';\nimport React, { useState } from 'react';\n\nexport function MainContent() {\n  // window open\n  const [open, setOpen] = useState<boolean>(false);\n\n  // values\n  const [a, setA] = useState<number>(1);\n  const [b, setB] = useState<number>(2);\n\n  return (\n    <div>\n      <div>\n        <TextField value={a} onChange={({ target }) => setA(+target.value)} /> +{' '}\n        <TextField value={b} onChange={({ target }) => setB(+target.value)} /> = <span>{a + b}</span>\n      </div>\n\n      {open ? (\n        <>\n          <div style={{ marginTop: 20 }}>\n            {/* Window\ub97c \ub2eb\ub294\ub2e4 */}\n            <Button variant=\"contained\" color=\"primary\" onClick={() => setOpen(false)}>\n              Close Window\n            </Button>\n          </div>\n\n          {/* Window */}\n          <NewWindow\n            url=\"/window\"\n            value={{\n              a,\n              b,\n              updateA: setA,\n              updateB: setB,\n            }}\n            features={{ width: 500, height: 400 }}\n            onOpen={(popupWindow: Window) => console.log(popupWindow)}\n            onClose={() => setOpen(false)}\n            onBlock={() => {\n              alert('Browser Pop-up \uc81c\ud55c\uc744 \ud574\uc81c\ud574\uc8fc\uc138\uc694.');\n              setOpen(false);\n            }}\n          />\n        </>\n      ) : (\n        <div style={{ marginTop: 20 }}>\n          {/* Window\ub97c \uc5f0\ub2e4 */}\n          <Button variant=\"contained\" color=\"primary\" onClick={() => setOpen(true)}>\n            Open Window\n          </Button>\n        </div>\n      )}\n    </div>\n  );\n}\n"},859:function(n,e,t){"use strict";t.r(e),e.default="import { useWindowValue } from '@lunit/new-window';\nimport { Button, TextField } from '@material-ui/core';\nimport React from 'react';\nimport { WindowValue } from '../model/window-value';\n\nexport function WindowContent() {\n  // <NewWindow value={}> \uc5d0\uc11c \uc804\ub2ec\ud55c \uac12\ub4e4\uc744 \ubc1b\ub294\ub2e4\n  const value: WindowValue | undefined = useWindowValue<WindowValue>();\n\n  return value ? (\n    <div>\n      <div>\n        <TextField value={value.a} onChange={({ target }) => value.updateA(+target.value)} /> +{' '}\n        <TextField value={value.b} onChange={({ target }) => value.updateB(+target.value)} /> ={' '}\n        <span>{value.a + value.b}</span>\n      </div>\n\n      <div style={{ marginTop: 20 }}>\n        {/* Window\ub97c \ub2eb\ub294\ub2e4 */}\n        <Button variant=\"contained\" color=\"primary\" onClick={() => window.close()}>\n          Close Window\n        </Button>\n      </div>\n    </div>\n  ) : null;\n}\n"},917:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return l}));t(0);var o=t(62),a=t(7),i=t(89);t(665);const p={};function l({components:n,...e}){return Object(o.b)("wrapper",Object.assign({},p,e,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",null,Object(o.b)("inlineCode",{parentName:"h1"},"@lunit/new-window")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"window.open()"),"\uc744 \ub300\uccb4\ud558\ub294 \uc6a9\ub3c4\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."),Object(o.b)("p",null,"Main Window\uc640 Popup Window\uc758 Data\uac00 React Hook\uc73c\ub85c \uc5f0\uacb0\ub418\uae30 \ub54c\ubb38\uc5d0,",Object(o.b)("br",{parentName:"p"}),"\n","Main Window\ub97c \ubcf4\uc870\ud558\ub294 Popup\uc744 \ub9cc\ub4dc\ub294 \uc6a9\ub3c4\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("inlineCode",{parentName:"p"},"window.open()")," \uc73c\ub85c Window\ub97c \uc5f0 \ub2e4\uc74c ",Object(o.b)("inlineCode",{parentName:"p"},"createPortal()"),"\uc744 \uc0ac\uc6a9\ud574\uc11c \uc81c\uc5b4\ud558\ub294 \ubc29\ubc95\ub3c4 \uc788\uc9c0\ub9cc,",Object(o.b)("br",{parentName:"p"}),"\n","\uc591\uce21\uc758 ",Object(o.b)("inlineCode",{parentName:"p"},"window")," \uac1d\uccb4\uac00 \ub2e4\ub974\ub2e4\ub294 \uac83\uc5d0 \uc758\ud574 \uc5ec\ub7ec\uac00\uc9c0 \ubb38\uc81c\ub4e4\uc774 \ubc1c\uc0dd\ud558\uac8c \ub41c\ub2e4.",Object(o.b)("br",{parentName:"p"}),"\n","\uc591\uce21\uc744 \ubd84\ub9ac\ub41c \ubcc4\uac1c\uc758 Window\ub85c \uad6c\uc131\ud558\uace0, \ub2e8\uc21c\ud788 Data\ub85c\ub9cc \uc5f0\uacb0\ud558\ub294 \uac83\uc774 \ub354 \uc548\uc815\uc801\uc778 \ubc29\ubc95\uc774\uc5c8\ub2e4.")),Object(o.b)("h1",null,"Usage"),Object(o.b)("p",null,Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://dist-handbook-new-window-sample.d2vum99qvuarsy.amplifyapp.com/"}),"Sample Site")),Object(o.b)("p",null,"\uc544\ub798\uc640 \uac19\uc774 Main Window\uc5d0\uc11c ",Object(o.b)("inlineCode",{parentName:"p"},"<NewWindow>"),"\ub97c \uc0ac\uc6a9\ud574\uc11c Window\ub97c \uc5f4 \uc218 \uc788\ub2e4."),Object(o.b)(i.Example,{example:Object(a.d)("../../../../handbook-new-window-sample/components/MainContent",{source:t(858),filename:"src/handbook-new-window-sample/components/MainContent.tsx"}),mdxType:"Example"}),Object(o.b)("p",null,"\uc5f4\ub824\uc9c4 Window\uc5d0\uc11c\ub294 ",Object(o.b)("inlineCode",{parentName:"p"},"useWindowValue()"),"\ub97c \uc0ac\uc6a9\ud574\uc11c Main Window\uc5d0\uc11c \uc804\ub2ec\ud55c Data\ub97c \ubc1b\uc744 \uc218 \uc788\ub2e4."),Object(o.b)(i.Example,{example:Object(a.d)("../../../../handbook-new-window-sample/components/WindowContent",{source:t(859),filename:"src/handbook-new-window-sample/components/WindowContent.tsx"}),mdxType:"Example"}))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=43.33142dac79809afd5963.js.map