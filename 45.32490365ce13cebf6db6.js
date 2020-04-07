(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{871:function(e,t,n){"use strict";n.r(t),t.default="import { act, renderHook } from '@testing-library/react-hooks';\nimport { useControl } from '../useControl';\n\ndescribe('useOPTControl()', () => {\n  test('\ucd08\uae43\uac12\uc740 control: pan, invert: false, invert: false\uc774\uc5b4\uc57c \ud55c\ub2e4.', () => {\n    const { result } = renderHook(() => useControl());\n\n    expect(result.current.control).toBe('pan');\n    expect(result.current.invert).toBeFalsy();\n    expect(result.current.flip).toBeFalsy();\n  });\n\n  test('\uc778\uc790\ub97c \ud1b5\ud574 \ucd08\uae43\uac12\uc744 \uc124\uc815\ud560 \uc218 \uc788\uc5b4\uc57c \ud55c\ub2e4.', () => {\n    const { result } = renderHook(() =>\n      useControl({\n        initialControl: 'adjust',\n        initialFlip: true,\n        initialInvert: true,\n      }),\n    );\n\n    expect(result.current.control).toBe('adjust');\n    expect(result.current.invert).toBeTruthy();\n    expect(result.current.flip).toBeTruthy();\n  });\n\n  test('state\uac12\uc740 \ubcc0\uacbd \uac00\ub2a5\ud558\uba70, \ubcc0\uacbd\ud558\uc9c0 \uc54a\uc740 \uac12\uc740 \uc601\ud5a5\uc744 \ubc1b\uc9c0 \uc54a\uc544\uc57c \ud55c\ub2e4.', () => {\n    const { result } = renderHook(() => useControl());\n\n    act(() => {\n      result.current.updateControl('pen');\n      result.current.updateFlip(true);\n    });\n\n    expect(result.current.control).toBe('pen');\n    expect(result.current.invert).toBeFalsy();\n    expect(result.current.flip).toBeTruthy();\n  });\n\n  test('resetControl()\ub97c \uc774\uc6a9\ud558\uc5ec \ucd08\uae43\uac12\uc73c\ub85c reset\uc774 \uac00\ub2a5\ud574\uc57c \ud55c\ub2e4.', () => {\n    const { result } = renderHook(() => useControl());\n\n    act(() => {\n      result.current.updateControl('adjust');\n      result.current.updateInvert(true);\n      result.current.updateFlip(true);\n    });\n\n    expect(result.current.control).toBe('adjust');\n    expect(result.current.invert).toBeTruthy();\n    expect(result.current.flip).toBeTruthy();\n\n    act(() => {\n      result.current.resetControl();\n    });\n\n    expect(result.current.control).toBe('pan');\n    expect(result.current.invert).toBeFalsy();\n    expect(result.current.flip).toBeFalsy();\n  });\n\n  test('\uc778\uc790\ub85c \ub118\uae34 \ucd08\uae43\uac12\uc740 reset\ud558\uba74 control\ub9cc \uc720\uc9c0\ub418\uace0 flip\uacfc invert\ub294 false\uac12\uc774\uc5b4\uc57c \ud55c\ub2e4.', () => {\n    const { result } = renderHook(() =>\n      useControl({\n        initialControl: 'adjust',\n        initialFlip: true,\n        initialInvert: true,\n      }),\n    );\n\n    act(() => {\n      result.current.resetControl();\n    });\n\n    expect(result.current.control).toBe('adjust');\n    expect(result.current.invert).toBeFalsy();\n    expect(result.current.flip).toBeFalsy();\n  });\n});\n"},924:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));n(0);var r=n(62),o=n(7),l=n(89);const s={};function u({components:e,...t}){return Object(r.b)("wrapper",Object.assign({},s,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h1",null,Object(r.b)("inlineCode",{parentName:"h1"},"@lunit/use-opt-control")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"<InsightViewer>"),"\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 ",Object(r.b)("inlineCode",{parentName:"p"},"control={}"),", ",Object(r.b)("inlineCode",{parentName:"p"},"flip={}"),", ",Object(r.b)("inlineCode",{parentName:"p"},"invert={}")," \uc0c1\ud0dc\ub97c \uad00\ub9ac\ud558\ub294\ub370 \uc0ac\uc6a9\ub41c\ub2e4."),Object(r.b)("p",null,"\uac04\ub2e8\ud558\uac8c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574\uc11c \ub9cc\ub4e4 Util\uc774\uace0, \ud544\uc694\ud55c \uacbd\uc6b0 \uc544\ub798\uc640 \uac19\uc774 \uc0ac\uc6a9\ud574\ub3c4 \ub41c\ub2e4."),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"import { Control } from '@lunit/use-opt-control';\n\nfunction Component() {\n  const [control, setControl] = useState<Control>('pen');\n  const [flip, setFlip] = useState<boolean>(false);\n  const [invert, setInvert] = useState<boolean>(false);\n\n  return <div>...</div>;\n}\n")),Object(r.b)("h1",null,"Test"),Object(r.b)(l.Example,{example:Object(o.d)("../__tests__/useOPTControl.test",{source:n(871),filename:"src/_packages/@lunit/use-opt-control/__tests__/useOPTControl.test.ts"}),mdxType:"Example"}))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=45.32490365ce13cebf6db6.js.map