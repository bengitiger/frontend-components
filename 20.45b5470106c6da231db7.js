(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{870:function(e,n,t){"use strict";t.r(n),n.default="import { BehaviorSubject, Observable } from 'rxjs';\n\ninterface Params {\n  url: string;\n  signal?: AbortSignal;\n  headers?: Headers | [string, string][] | { [key: string]: string };\n}\n\nexport function fetchBuffer({ url, signal, headers }: Params): Observable<number | ArrayBuffer> {\n  const subject = new BehaviorSubject<number | ArrayBuffer>(0);\n\n  const xhr: XMLHttpRequest = new XMLHttpRequest();\n\n  xhr.open('get', url, true);\n  xhr.responseType = 'arraybuffer';\n\n  if (headers instanceof Headers || Array.isArray(headers)) {\n    for (const [k, v] of headers) {\n      xhr.setRequestHeader(k, v);\n    }\n  } else if (headers) {\n    Object.keys(headers).forEach(key => {\n      xhr.setRequestHeader(key, headers[key]);\n    });\n  }\n\n  const abort = () => {\n    try {\n      xhr.abort();\n    } catch (error) {}\n\n    signal?.removeEventListener('abort', abort);\n  };\n\n  signal?.addEventListener('abort', abort);\n\n  xhr.onloadstart = () => {\n    subject.next(0);\n  };\n\n  xhr.onreadystatechange = () => {\n    if (xhr.readyState === 4 && xhr.status === 200) {\n      subject.next(xhr.response);\n\n      signal?.removeEventListener('abort', abort);\n    }\n  };\n\n  xhr.onprogress = ({ loaded, lengthComputable, total }: ProgressEvent) => {\n    if (lengthComputable) {\n      subject.next(loaded / total);\n    }\n  };\n\n  xhr.send();\n\n  return subject.asObservable();\n}\n"},871:function(e,n,t){"use strict";t.r(n);var r=t(666),s=t(0),a=t.n(s);n.default=()=>{const[e,n]=Object(s.useState)([]);return Object(s.useEffect)(()=>{const e=new AbortController,t=Object(r.fetchBuffer)({url:"https://opt-frontend.s3.ap-northeast-2.amazonaws.com/fixtures/npy/image.npy",signal:e.signal}).subscribe(e=>{n("number"===typeof e?n=>[...n,`[progress] ${e}`]:n=>[...n,`[done] bytes: ${e.byteLength}`])});return()=>{e.abort(),t.unsubscribe()}},[]),a.a.createElement("ul",{style:{fontSize:11}},e.map((e,n)=>a.a.createElement("li",{key:n},e)))}},872:function(e,n,t){"use strict";t.r(n),n.default="import { fetchBuffer } from '@lunit/insight-viewer';\nimport React, { useEffect, useState } from 'react';\n\nexport default () => {\n  const [log, setLog] = useState<string[]>([]);\n\n  useEffect(() => {\n    const abort = new AbortController();\n    const subscription = fetchBuffer({\n      url: 'https://opt-frontend.s3.ap-northeast-2.amazonaws.com/fixtures/npy/image.npy',\n      signal: abort.signal,\n    }).subscribe(progressOrBytes => {\n      if (typeof progressOrBytes === 'number') {\n        setLog(prev => [...prev, `[progress] ${progressOrBytes}`]);\n      } else {\n        setLog(prev => [...prev, `[done] bytes: ${progressOrBytes.byteLength}`]);\n      }\n    });\n\n    return () => {\n      abort.abort();\n      subscription.unsubscribe();\n    };\n  }, []);\n\n  return (\n    <ul style={{ fontSize: 11 }}>\n      {log.map((line, i) => (\n        <li key={i}>{line}</li>\n      ))}\n    </ul>\n  );\n};\n"},873:function(e,n,t){"use strict";t.r(n),n.default="import { BehaviorSubject, Observable } from 'rxjs';\n\ninterface Params {\n  blob: Blob;\n  signal?: AbortSignal;\n}\n\nexport function fileToBuffer({ blob, signal }: Params): Observable<number | ArrayBufferLike> {\n  const subject = new BehaviorSubject<number | ArrayBufferLike>(0);\n\n  const reader = new FileReader();\n\n  const abort = () => {\n    try {\n      reader.abort();\n    } catch (error) {}\n\n    signal?.removeEventListener('abort', abort);\n  };\n\n  signal?.addEventListener('abort', abort);\n\n  reader.onloadstart = () => {\n    subject.next(0);\n  };\n\n  reader.onloadend = () => {\n    subject.next(reader.result as ArrayBufferLike);\n\n    signal?.removeEventListener('abort', abort);\n  };\n\n  reader.onprogress = ({ loaded, lengthComputable, total }: ProgressEvent) => {\n    if (lengthComputable) {\n      subject.next(loaded / total);\n    }\n  };\n\n  reader.readAsArrayBuffer(blob);\n\n  return subject.asObservable();\n}\n"},874:function(e,n,t){"use strict";t.r(n);var r=t(666),s=t(0),a=t.n(s),o=t(36);n.default=()=>{const[e,n]=Object(s.useState)([]),[t,o]=Object(s.useState)(null);Object(s.useEffect)(()=>{if(t&&t.length>0){const e=new AbortController,s=Object(r.fileToBuffer)({signal:e.signal,blob:t[0].slice()}).subscribe(e=>{n("number"===typeof e?n=>[...n,`[progress] ${e}`]:n=>[...n,`[done] bytes: ${e.byteLength}`])});return()=>{e.abort(),s.unsubscribe()}}},[t]);const l=Object(s.useCallback)(e=>{e.preventDefault(),e.dataTransfer.dropEffect="copy"},[]),c=Object(s.useCallback)(e=>{e.preventDefault(),e.dataTransfer.files.length>0&&/.npy$/.test(e.dataTransfer.files[0].name)&&o(e.dataTransfer.files)},[]);return a.a.createElement(a.a.Fragment,null,a.a.createElement(i,{onDrop:c,onDragOver:l},"Drop CT npy File!"),a.a.createElement("ul",{style:{fontSize:11,marginLeft:220}},e.map((e,n)=>a.a.createElement("li",{key:n},e))))};const i=o.d.div`
  width: 200px;
  height: 200px;
  background-color: red;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 10px;
  top: 10px;
`},875:function(e,n,t){"use strict";t.r(n),n.default="import { fileToBuffer } from '@lunit/insight-viewer';\nimport React, { DragEvent, useCallback, useEffect, useState } from 'react';\nimport styled from 'styled-components';\n\nexport default () => {\n  const [log, setLog] = useState<string[]>([]);\n\n  const [files, setFiles] = useState<FileList | null>(null);\n\n  useEffect(() => {\n    if (files && files.length > 0) {\n      const abort = new AbortController();\n      const subscription = fileToBuffer({\n        signal: abort.signal,\n        blob: files[0].slice(),\n      }).subscribe(progressOrBytes => {\n        if (typeof progressOrBytes === 'number') {\n          setLog(prev => [...prev, `[progress] ${progressOrBytes}`]);\n        } else {\n          setLog(prev => [...prev, `[done] bytes: ${progressOrBytes.byteLength}`]);\n        }\n      });\n\n      return () => {\n        abort.abort();\n        subscription.unsubscribe();\n      };\n    }\n  }, [files]);\n\n  const onDragOver = useCallback((event: DragEvent<HTMLDivElement>) => {\n    event.preventDefault();\n    event.dataTransfer.dropEffect = 'copy';\n  }, []);\n\n  const onDrop = useCallback((event: DragEvent<HTMLDivElement>) => {\n    event.preventDefault();\n\n    if (event.dataTransfer.files.length > 0 && /.npy$/.test(event.dataTransfer.files[0].name)) {\n      setFiles(event.dataTransfer.files);\n    }\n  }, []);\n\n  return (\n    <>\n      <DropTarget onDrop={onDrop} onDragOver={onDragOver}>\n        Drop CT npy File!\n      </DropTarget>\n\n      <ul style={{ fontSize: 11, marginLeft: 220 }}>\n        {log.map((line, i) => (\n          <li key={i}>{line}</li>\n        ))}\n      </ul>\n    </>\n  );\n};\n\nconst DropTarget = styled.div`\n  width: 200px;\n  height: 200px;\n  background-color: red;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  left: 10px;\n  top: 10px;\n`;\n"},947:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return i}));t(0);var r=t(62),s=t(7),a=t(89);const o={};function i({components:e,...n}){return Object(r.b)("wrapper",Object.assign({},o,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h1",null,"Get ",Object(r.b)("inlineCode",{parentName:"h1"},"ArrayBuffer")),Object(r.b)("p",null,"CT \uad00\ub828 \uc774\ubbf8\uc9c0\ub294 Python NumPy (",Object(r.b)("inlineCode",{parentName:"p"},"*.npy"),") \ud615\uc2dd\uc73c\ub85c \ub118\uc5b4\uc624\uac8c \ub41c\ub2e4."),Object(r.b)("p",null,"NumPy Data\ub97c Bytes\ub85c \uc77d\uc5b4\ub4e4\uc5ec \uc0ac\uc6a9\ud574\uc57c \ud558\ubbc0\ub85c,"),Object(r.b)("p",null,"\uc77c\ub2e8 ",Object(r.b)("inlineCode",{parentName:"p"},"ArrayBuffer")," \ud615\ud0dc\uc758 \ub370\uc774\ud130\ub97c \uc5bb\uc744 \uc218 \uc788\ub294 \uc218\ub2e8\ub4e4\uc774 \ud544\uc694\ud558\ub2e4."),Object(r.b)("h1",null,Object(r.b)("inlineCode",{parentName:"h1"},"fetchBuffer()")),Object(r.b)("p",null,"URL \uc0c1\uc758 \ud30c\uc77c\uc744 ",Object(r.b)("inlineCode",{parentName:"p"},"ArrayBuffer"),"\ub85c \uac00\uc838\uc628\ub2e4."),Object(r.b)(a.Example,{example:Object(s.d)("@lunit/insight-viewer/image/fetchBuffer",{source:t(870),filename:"src/_packages/@lunit/insight-viewer/image/fetchBuffer.ts"}),api:!0,mdxType:"Example"}),Object(r.b)(a.Example,{example:Object(s.b)("./GetBytes/fetchBuffer",{component:t(871),source:t(872),filename:"src/_packages/@lunit/insight-viewer/__pages__/CT/GetBytes/fetchBuffer.tsx"}),mdxType:"Example"},Object(r.b)(a.Preview,{height:300,style:{overflowY:"auto"},mdxType:"Preview"})),Object(r.b)("h1",null,Object(r.b)("inlineCode",{parentName:"h1"},"fileToBuffer()")),Object(r.b)("p",null,"Drag and Drop\uc73c\ub85c \ub358\uc838\uc9c4 ",Object(r.b)("inlineCode",{parentName:"p"},"*.npy")," \ud30c\uc77c\uc744 ",Object(r.b)("inlineCode",{parentName:"p"},"ArrayBuffer"),"\ub85c \ubcc0\ud658\ud55c\ub2e4."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Download file here \u2192 ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://drive.google.com/file/d/16NtQKztrP6xRddscqtUigeW3--0FrhiH/view?usp=sharing"}),"https://drive.google.com/file/d/16NtQKztrP6xRddscqtUigeW3--0FrhiH/view?usp=sharing"))),Object(r.b)(a.Example,{example:Object(s.d)("@lunit/insight-viewer/image/fileToBuffer",{source:t(873),filename:"src/_packages/@lunit/insight-viewer/image/fileToBuffer.ts"}),api:!0,mdxType:"Example"}),Object(r.b)(a.Example,{example:Object(s.b)("./GetBytes/fileToBuffer",{component:t(874),source:t(875),filename:"src/_packages/@lunit/insight-viewer/__pages__/CT/GetBytes/fileToBuffer.tsx"}),mdxType:"Example"},Object(r.b)(a.Preview,{height:300,style:{overflowY:"auto"},mdxType:"Preview"})))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=20.45b5470106c6da231db7.js.map