(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{691:function(n,e,t){"use strict";t.r(e),e.default="export interface CornerstoneRenderData {\n  /** cornerstone\uc774 \uadf8\ub9bc\uc744 \uadf8\ub9ac\uace0 \uc788\ub294 CanvasRenderingContext2D */\n  canvasContext: CanvasRenderingContext2D;\n\n  /** cornerstone\uc774 \uadf8\ub9bc\uc744 \uadf8\ub9ac\uace0 \uc788\ub294 HTMLElement */\n  element: HTMLElement;\n\n  /**\n   * cornerstone\uc758 Rendering\uc5d0 \uad00\ub828\ub41c \uc815\ubcf4\ub4e4\n   *\n   * - <HeatmapViewer>, <ContourViewer> \ub4f1 <InsightViewer>\uc640 \ud654\uba74\uc744 \ub3d9\uae30\ud654 \uc2dc\ud0a4\ub294 \uae30\ub2a5\uc744 \ub9cc\ub4e4 \ub54c \uc0ac\uc6a9\ub41c\ub2e4.\n   * - \uadf8 \uc678, \uc7a1\ub2e4\ud55c Rendering\uc5d0 \uad00\ub828\ub41c \uac70\uc758 \ub300\ubd80\ubd84\uc758 \uc815\ubcf4\ub4e4\uc744 \uc5bb\uc744 \uc218 \uc788\ub2e4\n   */\n  enabledElement: cornerstone.EnabledElement;\n\n  /**\n   * cornerstone\uc774 \ud654\uba74\uc5d0 \uadf8\ub9ac\uace0 \uc788\ub294 Image \uac1d\uccb4\n   * interface CornerstoneImage \uc640 \uc5f0\uad00\ub41c\ub2e4\n   *\n   * @see CornerstoneImage.image\n   */\n  image: cornerstone.Image;\n\n  renderTimeInMs: number;\n\n  /**\n   * cornerstone\uc774 \ud654\uba74\uc5d0 \uadf8\ub9ac\uace0 \uc788\ub294 Viewport \uc0c1\ud0dc\n   *\n   * - useViewportMirroring()\uacfc \uac19\uc774 <InsightViewer>\ub4e4\uc758 \ud654\uba74\uc744 \ub3d9\uae30\ud654 \uc2dc\ud0a4\ub294 \uae30\ub2a5\uc744 \ub9cc\ub4e4 \ub54c \uc0ac\uc6a9\ub41c\ub2e4.\n   * - \uadf8 \uc678, \ud604\uc7ac cornerstone \ud654\uba74 \uc0c1\ud0dc\uc5d0 \ub300\ud55c \uac70\uc758 \ub300\ubd80\ubd84\uc758 \uc815\ubcf4\ub4e4\uc73c \uc5bb\uc744 \uc218 \uc788\ub2e4\n   */\n  viewport: cornerstone.Viewport;\n}\n\n/** [x, y] */\nexport type Point = [number, number];\n\n/**\n * UserContoureViewer\uc640 \uac19\uc740 \uacf3\uc5d0\uc11c \uc0ac\uc6a9\ub41c\ub2e4\n *\n * Annotation Tool, OPT \ub4f1 Annotation\uc744 \ud574\uc57c \ud558\ub294 \uc0c1\ud669\uc5d0\uc11c \ub370\uc774\ud130\uac00 \ub41c\ub2e4.\n *\n * \uc9c1\uc811 \uc0ac\uc6a9\ud558\uc9c0 \ub9d0\uace0, \ub0b4\ubd80\uc801\uc73c\ub85c \uc0c1\uc18d\ud574\uc11c \uc0c8\ub85c\uc6b4 \ub370\uc774\ud130\ub97c \uc0dd\uc131\ud574\uc57c \ud55c\ub2e4.\n */\nexport interface Contour {\n  /** \uc77c\uc885\uc758 label \uc5ed\ud560\uc744 \ud55c\ub2e4 */\n  id: number;\n\n  /**\n   * Mode\uc5d0 \ub530\ub77c \uc0ac\uc6a9\ud558\ub294 \ubc29\uc2dd\uc774 \ub2e4\ub974\ub2e4\n   * - (mode: contour) = [[x, y], [x, y], [x, y]...]\n   * - (mode: circle) = [[centerX, centerY][radius, ]]\n   * - (mode: point) = [[x, y]]\n   */\n  polygon: Point[];\n\n  /** \uc874\uc7ac\ud558\ub294 \uacbd\uc6b0 id \ub300\uc2e0 \ucd9c\ub825\ub41c\ub2e4 */\n  label?: ((contour: this) => string) | string;\n\n  /**\n   * svg element\uc5d0 data-* \ud615\uc2dd\uc758 attribute\ub97c \ub123\uc5b4\uc8fc\uac8c \ub41c\ub2e4.\n   * \ud574\ub2f9 attribute\ub4e4\uc744 \uae30\uc900\uc73c\ub85c css styling\uacfc \uac19\uc740 \uae30\ub2a5\ub4e4\uc744 \uad6c\ud604\ud560 \uc218 \uc788\ub2e4.\n   */\n  dataAttrs?: { [attr: string]: string };\n}\n\nexport interface ViewportTransformParams {\n  element: HTMLElement;\n  minScale: number;\n  maxScale: number;\n  currentViewport: cornerstone.Viewport | null;\n}\n\nexport type ViewportTransform = (params: ViewportTransformParams) => Partial<cornerstone.Viewport> | undefined;\n\nexport interface CornerstoneViewerLike {\n  getMinScale: () => number;\n  getMaxScale: () => number;\n  getElement: () => HTMLElement;\n  getContentWindow: () => Window;\n  getCurrentViewport: () => cornerstone.Viewport;\n  updateViewport: (patch: Partial<cornerstone.Viewport>) => void;\n  getViewportTransformParams: () => ViewportTransformParams;\n}\n\nexport type Interaction = (viewer: CornerstoneViewerLike) => () => void;\n"},931:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return s}));t(0);var o=t(62),r=t(7),i=t(89);const a={};function s({components:n,...e}){return Object(o.b)("wrapper",Object.assign({},a,e,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",null,Object(o.b)("inlineCode",{parentName:"h1"},"interface Contour")),Object(o.b)("p",null,"Annotation \ub370\uc774\ud130\uac00 \ub41c\ub2e4."),Object(o.b)("p",null,"\uc9c1\uc811 \uc0ac\uc6a9\ud558\uc9c0 \ub9d0\uace0, \uc0c1\uc18d\ud574\uc11c \ud504\ub85c\uc81d\ud2b8 \ub0b4\uc6a9\uc5d0 \ub9de\ub294 Annotation\uc744 \uc815\uc758\ud55c \ub2e4\uc74c \uc0ac\uc6a9\ud558\ub3c4\ub85d \ud55c\ub2e4."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Application Data Modeling\uc5d0 \uad00\ub828\ub41c \ub0b4\uc6a9\uc774\uae30 \ub54c\ubb38\uc5d0 \uc27d\uc9c0 \uc54a\uc744 \uc218 \uc788\uc74c",Object(o.b)("br",{parentName:"p"}),"\n","Annotation Tool, OPT \ubaa8\ub450 \uc0ac\uc6a9\uc790\uac00 Pen Annotation\uc73c\ub85c \ud654\uba74\uc5d0 \ubcd1\ubcc0\uc744 \uadf8\ub9b0\ub2e4\ub294 \uc804\uc81c\ub97c \uac00\uc9c0\uace0 \uc788\uace0,",Object(o.b)("br",{parentName:"p"}),"\n","\ud574\ub2f9 Annotation (\ubcd1\ubcc0)\uc5d0 \ubd80\uac00 \uc815\ubcf4\ub97c \uc785\ub825\ud55c\ub2e4\ub294 \uad6c\uc131\uc744 \uac00\uc9c0\uace0 \uc788\uae30 \ub54c\ubb38\uc5d0",Object(o.b)("br",{parentName:"p"}),"\n","\uc0ac\uc6a9\uc790 Annotation\uc774 \ub4e4\uc5b4\uac00\ub294 \ud504\ub85c\uc81d\ud2b8\uc758 \uacbd\uc6b0 \uc774 ",Object(o.b)("inlineCode",{parentName:"p"},"Contour")," Type\uc744 \uc774\ud574\ud574\uc57c \ud568")),Object(o.b)(i.Example,{example:Object(r.d)("@lunit/insight-viewer/types",{source:t(691),filename:"src/_packages/@lunit/insight-viewer/types.ts"}),api:["Contour"],mdxType:"Example"}),Object(o.b)("h1",null,Object(o.b)("inlineCode",{parentName:"h1"},"polygon"),"\uc758 \uc720\ud615"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"<ContourViewer>")," \uc640 ",Object(o.b)("inlineCode",{parentName:"p"},"<CircleViewer>"),", ",Object(o.b)("inlineCode",{parentName:"p"},"<PointViewer>")," \ubaa8\ub450 \uc774 ",Object(o.b)("inlineCode",{parentName:"p"},"Contour")," \ub370\uc774\ud130\ub97c \uc0ac\uc6a9\ud558\uc9c0\ub9cc, ",Object(o.b)("inlineCode",{parentName:"p"},"[number, number][]")," \uad6c\uc870\uc758 \ubc30\uc5f4\uc744 \uc0ac\uc6a9\ud558\ub294 \ubc29\uc2dd\uc774 \ub2e4\ub974\ub2e4."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"<ContourViewer contours={[[x, y], [x, y], [x, y]...]}>")," Point(x, y)\uc758 \ubc30\uc5f4\ub85c\uc11c Polygon\uc744 \uc0ac\uc6a9\ud55c\ub2e4"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"<CircleViewer contours={[[centerX, centerY][radius, ]]}}>")," Center Point(x, y) \uc640 \ubc18\uc9c0\ub984 (Radius)\uc73c\ub85c Circle\uc744 \uc0ac\uc6a9\ud55c\ub2e4"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"<PointViewer contours={[[x, y]]}>")," Point(x, y) \ud558\ub098\ub9cc \uc874\uc7ac\ud558\ub294 \ubc30\uc5f4\uc744 \uc0ac\uc6a9\ud55c\ub2e4")),Object(o.b)("h1",null,"CXR OPT (MGH 2020 \uc5f0\uad6c)\uc758 Annotation Modeling \uc0ac\ub840"),Object(o.b)("p",null,Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/lunit-io/cxr-opt-frontend-2002-mgh/blob/develop/src/app/model/annotation.ts"}),"https://github.com/lunit-io/cxr-opt-frontend-2002-mgh/blob/develop/src/app/model/annotation.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"import { Contour } from '@lunit/insight-viewer';\n\n/** Classification\uc758 Enumeration Values */\nexport const classifications = ['TP', 'FP', 'FN'] as const;\n\n/** Lesion\uc758 Enumeration Values - MGH OPT \uc5f0\uad6c\uc5d0\uc11c\ub294 \ub2e8\uc21c\ud788 Nodule\uacfc Nodule\uc774 \uc544\ub2cc \uac83\uc73c\ub85c 2\uac00\uc9c0 \ubcd1\ubcc0\ub9cc \uad6c\ubd84\ud55c\ub2e4  */\nexport const lesions = ['nodule', 'non-nodule'] as const;\n\nexport type Classification = typeof classifications[number];\nexport type Lesion = typeof lesions[number];\n\nexport const classificationLabels = {\n  TP: 'True Positive',\n  FP: 'False Positive',\n  FN: 'False Negative',\n} as const;\n\nexport const lesionLabels = {\n  nodule: 'Nodule',\n  'non-nodule': 'Other findings',\n} as const;\n\n/**\n * Annotation\uc758 \ubd80\uac00 \uc815\ubcf4\n */\nexport interface AnnotationInfo {\n  /**\n   * GT, RT \ubaa8\ub450\uc5d0\uc11c Annotation\uc774 \uc5b4\ub5a4 \ubcd1\ubcc0\uc5d0 \uc18d\ud558\ub294\uc9c0\ub97c \uc9c0\uc815\ud558\ub294\ub370 \uc0ac\uc6a9\ud55c\ub2e4\n   * GT, RT \ubaa8\ub450\uc5d0\uc11c Pen\uc73c\ub85c Annotation\uc744 \uadf8\ub9ac\uace0 \ub09c \ub4a4, \ud654\uba74\uc5d0 \ub4f1\uc7a5\ud558\ub294 Dialog \ub85c \ud655\uc778\ud560 \uc218 \uc788\ub2e4.\n   */\n  lesion: Lesion;\n\n  /**\n   * GT \uc5d0\uc11c Annotation\uc758 \uc720\ud615\uc744 \uc9c0\uc815\ud558\ub294\ub370 \uc0ac\uc6a9\ub41c\ub2e4\n   * GT \uc5d0\uc11c Pen\uc73c\ub85c Annotation\uc744 \uadf8\ub9ac\uace0 \ub09c \ub4a4, \ud654\uba74\uc5d0 \ub4f1\uc7a5\ud558\ub294 Dialog \ub85c \ud655\uc778\ud560 \uc218 \uc788\ub2e4.\n   */\n  classification?: Classification;\n\n  /**\n   * RT \uc5d0\uc11c Annotation\uc5d0 \ub300\ud55c \uc758\uc0ac\uc758 \ud655\uc2e0\ub3c4\ub97c \uc9c0\uc815\ud558\ub294\ub370 \uc0ac\uc6a9\ub41c\ub2e4\n   * RT \uc5d0\uc11c Pen\uc73c\ub85c Annotation\uc744 \uadf8\ub9ac\uace0 \ub09c \ub4a4, \ud654\uba74\uc5d0 \ub4f1\uc7a5\ud558\ub294 Dialog \ub85c \ud655\uc778\ud560 \uc218 \uc788\ub2e4.\n   */\n  confidenceLevel?: number; // 0 ~ 1 // RT \uc5d0\uc11c\ub9cc \uc0ac\uc6a9\ub428\n}\n\n/**\n * \ud604\uc7ac Application\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 Annotation Model\n *\n * AnnotationInfo & Contour \uc758 \ud569\uc9d1\ud569 \uc720\ud615\uc774 \ub41c\ub2e4\n *\n * <ContourDrawer>, <ContourDrawer> \ub97c \ube44\ub86f\ud55c \ubaa8\ub4e0 Annotation \uad00\ub9ac Component\uc5d0\uc11c \uc0ac\uc6a9\ub41c\ub2e4.\n */\nexport interface Annotation extends AnnotationInfo, Contour {}\n")),Object(o.b)("p",null,"\uc704\uc640 \uac19\uc774 Application\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 Annotation\uc744 ",Object(o.b)("inlineCode",{parentName:"p"},"Contour")," \ub370\uc774\ud130\ub97c \uc0ac\uc6a9\ud574\uc11c \uc815\uc758\ud55c\ub2e4.",Object(o.b)("br",{parentName:"p"}),"\n","(",Object(o.b)("inlineCode",{parentName:"p"},"Contour")," \ub370\uc774\ud130\ub97c \uc9c1\uc811 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub3c4\ub85d \ud55c\ub2e4.)"),Object(o.b)("p",null,Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/lunit-io/cxr-opt-frontend-2002-mgh/blob/develop/src/app/pages/ground-truth/case/index.tsx#L71"}),"https://github.com/lunit-io/cxr-opt-frontend-2002-mgh/blob/develop/src/app/pages/ground-truth/case/index.tsx#L71")),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"  const {\n    contours,\n    addContour: _addContour,\n    addContours,\n    updateContour: _updatecontour,\n    removeContour: _removeContour,\n    removeAllContours: _removeAllContours,\n    focusContour,\n    focusedContour,\n  } = useUserContour<Annotation>();\n")),Object(o.b)("p",null,"\uadf8\ub9ac\uace0, \uc774\uc640 \uac19\uc774 ",Object(o.b)("inlineCode",{parentName:"p"},"useUserContour<T>()"),"\uc5d0 Generic\uc73c\ub85c Annotation \uc720\ud615\uc744 \ub118\uaca8\uc11c Application\uc774 \ub3d9\uc791\ub418\ub3c4\ub85d \ud55c\ub2e4."),Object(o.b)("p",null,"\uc774\uc640 \uac19\uc740 ",Object(o.b)("inlineCode",{parentName:"p"},"Annotation")," Data Modeling\uc740 Application \uc804\ubc18\uc801\uc73c\ub85c Type\uc744 \uc77c\uad00\ud654 \uc2dc\ud0b4\uc73c\ub85c\uc11c, \uac1c\ubc1c\uc790\uc758 Coding \uc2e4\uc218\ub85c \uc778\ud574 \ubc1c\uc0dd\ud560 \uc218 \uc788\ub294 \ubaa8\ub4e0 \uc885\ub958\uc758 Error \ubc1c\uc0dd\uc744 \ubc29\uc9c0\uc2dc\ud0ac \uc218 \uc788\ub2e4."),Object(o.b)("h1",null,"CXR Annotation Tool\uc758 Annotation Modeling \uc0ac\ub840"),Object(o.b)("ul",{className:"contains-task-list"},Object(o.b)("li",Object.assign({parentName:"ul"},{className:"task-list-item"}),Object(o.b)("input",Object.assign({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\ud504\ub85c\uc81d\ud2b8 \uc885\ub8cc \ud6c4 \ucd94\uac00 ")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=44.45b5470106c6da231db7.js.map