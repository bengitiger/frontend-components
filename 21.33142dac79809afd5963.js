(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{792:function(e,t,n){"use strict";n.r(t);var l=n(664),a=n(0),o=n.n(a);t.default=()=>o.a.createElement("ul",{style:{listStyle:"none"}},o.a.createElement("li",null,o.a.createElement(l.StrokeText,null,o.a.createElement("text",{fill:"#ffffff"},"SIMPLE"))),o.a.createElement("li",null,o.a.createElement(l.StrokeText,null,o.a.createElement("text",null,o.a.createElement("tspan",{fill:"#ffffff"},"SINGLE"),"\xa0 \xa0",o.a.createElement("tspan",{fill:"#8694B1"},"/"),"\xa0 \xa0",o.a.createElement("tspan",{fill:"#ffffff"},"TOP")))))},793:function(e,t,n){"use strict";n.r(t),t.default='import { StrokeText } from \'@lunit/insight-viewer\';\nimport React from \'react\';\n\nexport default () => (\n  <ul style={{ listStyle: \'none\' }}>\n    <li>\n      <StrokeText>\n        <text fill="#ffffff">SIMPLE</text>\n      </StrokeText>\n    </li>\n    <li>\n      <StrokeText>\n        <text>\n          <tspan fill="#ffffff">SINGLE</tspan>\n          &nbsp; &nbsp;\n          <tspan fill="#8694B1">/</tspan>\n          &nbsp; &nbsp;\n          <tspan fill="#ffffff">TOP</tspan>\n        </text>\n      </StrokeText>\n    </li>\n  </ul>\n);\n'},794:function(e,t,n){"use strict";n.r(t);var l=n(664),a=n(0),o=n.n(a);Object(l.installWADOImageLoader)();const r={width:[600,400,1e3],height:[700,400,1e3],control:["pan",["none","pan","adjust"]],wheel:["zoom",["none","zoom"]],flip:[!1],invert:[!1]};t.default=()=>{const e=Object(a.useMemo)(()=>new l.CornerstoneSingleImage("wadouri:https://fixtures.front.lunit.io/dcm-files/series/CT000010.dcm",{unload:l.unloadImage}),[]),[t,n]=Object(a.useState)(null);return o.a.createElement(l.InsightViewerTestController,{options:r},({width:a,height:r,invert:f,flip:i,control:s,wheel:p,resetTime:m})=>o.a.createElement(l.InsightViewerContainer,{ref:n,width:a,height:r},o.a.createElement(l.InsightViewer,{width:a,height:r,invert:f,flip:i,pan:"pan"===s&&t,adjust:"adjust"===s&&t,zoom:"zoom"===p&&t,resetTime:m,image:e,updateCornerstoneRenderData:()=>{}}),o.a.createElement(l.LeftTopHolder,null,o.a.createElement(l.StrokeText,null,o.a.createElement("text",null,o.a.createElement("tspan",{fill:"#ffffff"},"LEFT"),"\xa0 \xa0",o.a.createElement("tspan",{fill:"#8694B1"},"/"),"\xa0 \xa0",o.a.createElement("tspan",{fill:"#ffffff"},"TOP")))),o.a.createElement(l.RightTopHolder,null,o.a.createElement(l.StrokeText,null,o.a.createElement("text",null,o.a.createElement("tspan",{fill:"#ffffff"},"RIGHT"),"\xa0 \xa0",o.a.createElement("tspan",{fill:"#8694B1"},"/"),"\xa0 \xa0",o.a.createElement("tspan",{fill:"#ffffff"},"TOP")))),o.a.createElement(l.LeftBottomHolder,null,o.a.createElement(l.StrokeText,null,o.a.createElement("text",null,o.a.createElement("tspan",{fill:"#ffffff"},"LEFT"),"\xa0 \xa0",o.a.createElement("tspan",{fill:"#8694B1"},"/"),"\xa0 \xa0",o.a.createElement("tspan",{fill:"#ffffff"},"BOTTOM")))),o.a.createElement(l.RightBottomHolder,null,o.a.createElement(l.StrokeText,null,o.a.createElement("text",null,o.a.createElement("tspan",{fill:"#ffffff"},"RIGHT"),"\xa0 \xa0",o.a.createElement("tspan",{fill:"#8694B1"},"/"),"\xa0 \xa0",o.a.createElement("tspan",{fill:"#ffffff"},"BOTTOM"))))))}},795:function(e,t,n){"use strict";n.r(t),t.default="import {\n  CornerstoneImage,\n  CornerstoneSingleImage,\n  InsightViewer,\n  InsightViewerContainer,\n  InsightViewerControllerOptions,\n  InsightViewerTestController,\n  installWADOImageLoader,\n  LeftBottomHolder,\n  LeftTopHolder,\n  RightBottomHolder,\n  RightTopHolder,\n  StrokeText,\n  unloadImage,\n} from '@lunit/insight-viewer';\nimport React, { useMemo, useState } from 'react';\n\ninstallWADOImageLoader();\n\nconst controllerOptions: InsightViewerControllerOptions = {\n  width: [600, 400, 1000],\n  height: [700, 400, 1000],\n  control: ['pan', ['none', 'pan', 'adjust']],\n  wheel: ['zoom', ['none', 'zoom']],\n  flip: [false],\n  invert: [false],\n};\n\nexport default () => {\n  const image: CornerstoneImage = useMemo(\n    () =>\n      new CornerstoneSingleImage(`wadouri:https://fixtures.front.lunit.io/dcm-files/series/CT000010.dcm`, {\n        unload: unloadImage,\n      }),\n    [],\n  );\n\n  const [divElement, setDivElement] = useState<HTMLDivElement | null>(null);\n\n  return (\n    <InsightViewerTestController options={controllerOptions}>\n      {({ width, height, invert, flip, control, wheel, resetTime }) => (\n        <InsightViewerContainer ref={setDivElement} width={width} height={height}>\n          <InsightViewer\n            width={width}\n            height={height}\n            invert={invert}\n            flip={flip}\n            pan={control === 'pan' && divElement}\n            adjust={control === 'adjust' && divElement}\n            zoom={wheel === 'zoom' && divElement}\n            resetTime={resetTime}\n            image={image}\n            updateCornerstoneRenderData={() => {}}\n          />\n\n          <LeftTopHolder>\n            <StrokeText>\n              <text>\n                <tspan fill=\"#ffffff\">LEFT</tspan>\n                &nbsp; &nbsp;\n                <tspan fill=\"#8694B1\">/</tspan>\n                &nbsp; &nbsp;\n                <tspan fill=\"#ffffff\">TOP</tspan>\n              </text>\n            </StrokeText>\n          </LeftTopHolder>\n\n          <RightTopHolder>\n            <StrokeText>\n              <text>\n                <tspan fill=\"#ffffff\">RIGHT</tspan>\n                &nbsp; &nbsp;\n                <tspan fill=\"#8694B1\">/</tspan>\n                &nbsp; &nbsp;\n                <tspan fill=\"#ffffff\">TOP</tspan>\n              </text>\n            </StrokeText>\n          </RightTopHolder>\n\n          <LeftBottomHolder>\n            <StrokeText>\n              <text>\n                <tspan fill=\"#ffffff\">LEFT</tspan>\n                &nbsp; &nbsp;\n                <tspan fill=\"#8694B1\">/</tspan>\n                &nbsp; &nbsp;\n                <tspan fill=\"#ffffff\">BOTTOM</tspan>\n              </text>\n            </StrokeText>\n          </LeftBottomHolder>\n\n          <RightBottomHolder>\n            <StrokeText>\n              <text>\n                <tspan fill=\"#ffffff\">RIGHT</tspan>\n                &nbsp; &nbsp;\n                <tspan fill=\"#8694B1\">/</tspan>\n                &nbsp; &nbsp;\n                <tspan fill=\"#ffffff\">BOTTOM</tspan>\n              </text>\n            </StrokeText>\n          </RightBottomHolder>\n        </InsightViewerContainer>\n      )}\n    </InsightViewerTestController>\n  );\n};\n"},893:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));n(0);var l=n(62),a=n(7),o=n(89),r=n(665);const f={};function i({components:e,...t}){return Object(l.b)("wrapper",Object.assign({},f,t,{components:e,mdxType:"MDXLayout"}),Object(l.b)("h1",null,Object(l.b)("inlineCode",{parentName:"h1"},"<StrokeText>")),Object(l.b)("p",null,"\uba85\uc554 \ucc28\uc774\ub85c \uc778\ud55c \uac00\ub3c5\uc131 \uc800\ud558\ub97c \ubc29\uc9c0\ud558\uae30 \uc704\ud55c \uc880 \ub354 \ub69c\ub837\ud55c \uc678\uacfd\uc120\uc744 \uac00\uc9c4 Text Component."),Object(l.b)("p",null,"SVG Text\ub97c \uc0ac\uc6a9\ud55c\ub2e4. ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"https://www.w3schools.com/graphics/svg_text.asp"}),"https://www.w3schools.com/graphics/svg_text.asp")),Object(l.b)(o.Example,{example:Object(a.b)("./StrokeText/Basic",{component:n(792),source:n(793),filename:"src/_packages/@lunit/insight-viewer/__pages__/Components/StrokeText/Basic.tsx"}),mdxType:"Example"},Object(l.b)(o.Preview,{height:200,mdxType:"Preview"})),Object(l.b)("h1",null,Object(l.b)("inlineCode",{parentName:"h1"},"<InsightViewer>"),"\uc5d0 Holder\ub97c \uc0ac\uc6a9\ud574\uc11c \ubc30\uce58"),Object(l.b)(o.Example,{example:Object(a.b)("./StrokeText/WithHolders",{component:n(794),source:n(795),filename:"src/_packages/@lunit/insight-viewer/__pages__/Components/StrokeText/WithHolders.tsx"}),mdxType:"Example"},Object(l.b)(r.a,{height:720,mdxType:"InsightViewerPreview"})))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=21.33142dac79809afd5963.js.map