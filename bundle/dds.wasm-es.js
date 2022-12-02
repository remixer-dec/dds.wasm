var YA = (() => {
  var R = import.meta.url;
  return function(A) {
    A = A || {};
    var A = typeof A < "u" ? A : {}, h, r;
    A.ready = new Promise(function(I, g) {
      h = I, r = g;
    });
    var w = Object.assign({}, A), y = typeof window == "object", f = typeof importScripts == "function", l = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string", o = "";
    function EA(I) {
      return A.locateFile ? A.locateFile(I, o) : o + I;
    }
    var K, H, Y;
    if (l) {
      f ? o = require("path").dirname(o) + "/" : o = __dirname + "/";
      var b, p, x = () => {
        p || (b = require("fs"), p = require("path"));
      };
      K = (I, g) => (x(), I = p.normalize(I), b.readFileSync(I, g ? void 0 : "utf8")), Y = (I) => {
        var g = K(I, !0);
        return g.buffer || (g = new Uint8Array(g)), g;
      }, H = (I, g, C) => {
        x(), I = p.normalize(I), b.readFile(I, function(E, e) {
          E ? C(E) : g(e.buffer);
        });
      }, process.argv.length > 1 && process.argv[1].replace(/\\/g, "/"), process.argv.slice(2), process.on("uncaughtException", function(I) {
        if (!(I instanceof yA))
          throw I;
      }), process.on("unhandledRejection", function(I) {
        throw I;
      }), A.inspect = function() {
        return "[Emscripten Module object]";
      };
    } else
      (y || f) && (f ? o = self.location.href : typeof document < "u" && document.currentScript && (o = document.currentScript.src), R && (o = R), o.indexOf("blob:") !== 0 ? o = o.substr(0, o.replace(/[?#].*/, "").lastIndexOf("/") + 1) : o = "", K = (I) => {
        var g = new XMLHttpRequest();
        return g.open("GET", I, !1), g.send(null), g.responseText;
      }, f && (Y = (I) => {
        var g = new XMLHttpRequest();
        return g.open("GET", I, !1), g.responseType = "arraybuffer", g.send(null), new Uint8Array(g.response);
      }), H = (I, g, C) => {
        var E = new XMLHttpRequest();
        E.open("GET", I, !0), E.responseType = "arraybuffer", E.onload = () => {
          if (E.status == 200 || E.status == 0 && E.response) {
            g(E.response);
            return;
          }
          C();
        }, E.onerror = C, E.send(null);
      });
    A.print || console.log.bind(console);
    var d = A.printErr || console.warn.bind(console);
    Object.assign(A, w), w = null, A.arguments && A.arguments, A.thisProgram && A.thisProgram, A.quit && A.quit;
    var k;
    A.wasmBinary && (k = A.wasmBinary), A.noExitRuntime, typeof WebAssembly != "object" && J("no native wasm support detected");
    var m, _ = !1, X = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0;
    function iA(I, g, C) {
      for (var E = g + C, e = g; I[e] && !(e >= E); )
        ++e;
      if (e - g > 16 && I.buffer && X)
        return X.decode(I.subarray(g, e));
      for (var i = ""; g < e; ) {
        var B = I[g++];
        if (!(B & 128)) {
          i += String.fromCharCode(B);
          continue;
        }
        var Q = I[g++] & 63;
        if ((B & 224) == 192) {
          i += String.fromCharCode((B & 31) << 6 | Q);
          continue;
        }
        var t = I[g++] & 63;
        if ((B & 240) == 224 ? B = (B & 15) << 12 | Q << 6 | t : B = (B & 7) << 18 | Q << 12 | t << 6 | I[g++] & 63, B < 65536)
          i += String.fromCharCode(B);
        else {
          var c = B - 65536;
          i += String.fromCharCode(55296 | c >> 10, 56320 | c & 1023);
        }
      }
      return i;
    }
    function eA(I, g) {
      return I ? iA(U, I, g) : "";
    }
    function nA(I, g, C, E) {
      if (!(E > 0))
        return 0;
      for (var e = C, i = C + E - 1, B = 0; B < I.length; ++B) {
        var Q = I.charCodeAt(B);
        if (Q >= 55296 && Q <= 57343) {
          var t = I.charCodeAt(++B);
          Q = 65536 + ((Q & 1023) << 10) | t & 1023;
        }
        if (Q <= 127) {
          if (C >= i)
            break;
          g[C++] = Q;
        } else if (Q <= 2047) {
          if (C + 1 >= i)
            break;
          g[C++] = 192 | Q >> 6, g[C++] = 128 | Q & 63;
        } else if (Q <= 65535) {
          if (C + 2 >= i)
            break;
          g[C++] = 224 | Q >> 12, g[C++] = 128 | Q >> 6 & 63, g[C++] = 128 | Q & 63;
        } else {
          if (C + 3 >= i)
            break;
          g[C++] = 240 | Q >> 18, g[C++] = 128 | Q >> 12 & 63, g[C++] = 128 | Q >> 6 & 63, g[C++] = 128 | Q & 63;
        }
      }
      return g[C] = 0, C - e;
    }
    function tA(I, g, C) {
      return nA(I, U, g, C);
    }
    var T, Z, U;
    function P(I) {
      T = I, A.HEAP8 = Z = new Int8Array(I), A.HEAP16 = new Int16Array(I), A.HEAP32 = new Int32Array(I), A.HEAPU8 = U = new Uint8Array(I), A.HEAPU16 = new Uint16Array(I), A.HEAPU32 = new Uint32Array(I), A.HEAPF32 = new Float32Array(I), A.HEAPF64 = new Float64Array(I);
    }
    A.INITIAL_MEMORY;
    var j = [], W = [], O = [];
    function rA() {
      if (A.preRun)
        for (typeof A.preRun == "function" && (A.preRun = [A.preRun]); A.preRun.length; )
          sA(A.preRun.shift());
      L(j);
    }
    function aA() {
      L(W);
    }
    function oA() {
      if (A.postRun)
        for (typeof A.postRun == "function" && (A.postRun = [A.postRun]); A.postRun.length; )
          DA(A.postRun.shift());
      L(O);
    }
    function sA(I) {
      j.unshift(I);
    }
    function cA(I) {
      W.unshift(I);
    }
    function DA(I) {
      O.unshift(I);
    }
    var F = 0, G = null;
    function fA(I) {
      F++, A.monitorRunDependencies && A.monitorRunDependencies(F);
    }
    function RA(I) {
      if (F--, A.monitorRunDependencies && A.monitorRunDependencies(F), F == 0 && G) {
        var g = G;
        G = null, g();
      }
    }
    function J(I) {
      A.onAbort && A.onAbort(I), I = "Aborted(" + I + ")", d(I), _ = !0, I += ". Build with -sASSERTIONS for more info.";
      var g = new WebAssembly.RuntimeError(I);
      throw r(g), g;
    }
    var uA = "data:application/octet-stream;base64,";
    function V(I) {
      return I.startsWith(uA);
    }
    function z(I) {
      return I.startsWith("file://");
    }
    var n;
    A.locateFile ? (n = "dds.wasm", V(n) || (n = EA(n))) : n = new URL("data:application/wasm;base64,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AiAbIQcgGiEICyAjICJCA36Ip0EHcSEEIAAoApABIANqIAI6AAAgACgCkAEgA0EBcmogBzoAACAAKAKQASADQQJyaiAIOgAAIAUgBk0EQEEAIQICQAJAIARBBmsOAgMAAQtB/wEhAgwCC0EGIARrIAVsIARBAWsgBmxqQQVtIQIMAQtBCCAEayAFbCAEQQFrIAZsakEHbSECCyAAKAKQASADQQNyaiACOgAAICJCAXwiIkIQUg0ACyAKQQFqIgogDkcNAAsgCUEBaiIJIAtHDQALIAEgFGohASAPIBVHDQALCwuABAEDfyACQYAETwRAIAAgASACEAEgAA8LIAAgAmohAwJAIAAgAXNBA3FFBEACQCAAQQNxRQRAIAAhAgwBCyACRQRAIAAhAgwBCyAAIQIDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAkEDcUUNASACIANJDQALCwJAIANBfHEiBEHAAEkNACACIARBQGoiBUsNAANAIAIgASgCADYCACACIAEoAgQ2AgQgAiABKAIINgIIIAIgASgCDDYCDCACIAEoAhA2AhAgAiABKAIUNgIUIAIgASgCGDYCGCACIAEoAhw2AhwgAiABKAIgNgIgIAIgASgCJDYCJCACIAEoAig2AiggAiABKAIsNgIsIAIgASgCMDYCMCACIAEoAjQ2AjQgAiABKAI4NgI4IAIgASgCPDYCPCABQUBrIQEgAkFAayICIAVNDQALCyACIARPDQEDQCACIAEoAgA2AgAgAUEEaiEBIAJBBGoiAiAESQ0ACwwBCyADQQRJBEAgACECDAELIAAgA0EEayIESwRAIAAhAgwBCyAAIQIDQCACIAEtAAA6AAAgAiABLQABOgABIAIgAS0AAjoAAiACIAEtAAM6AAMgAUEEaiEBIAJBBGoiAiAETQ0ACwsgAiADSQRAA0AgAiABLQAAOgAAIAFBAWohASACQQFqIgIgA0cNAAsLIAALCABBoAgoAgALCABBnAgoAgALCABBmAgoAgALCABBlAgoAgALCABBkAgoAgALDgAgABADQaQIKAIAEAMLBgAgABAECxAAIwAgAGtBcHEiACQAIAALBgAgACQACwQAIwALqRICI38CfgJ/AkACQAJAIABBCGoiAygAAEHEiM2CAkcNAEGUARAEIgQgA0EEakH8ABAHIgAoAgBB/ABHDQEg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", self.location).toString();
    function $(I) {
      try {
        if (I == n && k)
          return new Uint8Array(k);
        if (Y)
          return Y(I);
        throw "both async and sync fetching of the wasm failed";
      } catch (g) {
        J(g);
      }
    }
    function hA() {
      if (!k && (y || f)) {
        if (typeof fetch == "function" && !z(n))
          return fetch(n, { credentials: "same-origin" }).then(function(I) {
            if (!I.ok)
              throw "failed to load wasm binary file at '" + n + "'";
            return I.arrayBuffer();
          }).catch(function() {
            return $(n);
          });
        if (H)
          return new Promise(function(I, g) {
            H(n, function(C) {
              I(new Uint8Array(C));
            }, g);
          });
      }
      return Promise.resolve().then(function() {
        return $(n);
      });
    }
    function wA() {
      var I = { a: GA };
      function g(B, Q) {
        var t = B.exports;
        A.asm = t, m = A.asm.c, P(m.buffer), A.asm.m, cA(A.asm.d), RA();
      }
      fA();
      function C(B) {
        g(B.instance);
      }
      function E(B) {
        return hA().then(function(Q) {
          return WebAssembly.instantiate(Q, I);
        }).then(function(Q) {
          return Q;
        }).then(B, function(Q) {
          d("failed to asynchronously prepare wasm: " + Q), J(Q);
        });
      }
      function e() {
        return !k && typeof WebAssembly.instantiateStreaming == "function" && !V(n) && !z(n) && !l && typeof fetch == "function" ? fetch(n, { credentials: "same-origin" }).then(function(B) {
          var Q = WebAssembly.instantiateStreaming(B, I);
          return Q.then(C, function(t) {
            return d("wasm streaming compile failed: " + t), d("falling back to ArrayBuffer instantiation"), E(C);
          });
        }) : E(C);
      }
      if (A.instantiateWasm)
        try {
          var i = A.instantiateWasm(I, g);
          return i;
        } catch (B) {
          d("Module.instantiateWasm callback failed with error: " + B), r(B);
        }
      return e().catch(r), {};
    }
    function yA(I) {
      this.name = "ExitStatus", this.message = "Program terminated with exit(" + I + ")", this.status = I;
    }
    function L(I) {
      for (; I.length > 0; )
        I.shift()(A);
    }
    function FA(I, g) {
      Z.set(I, g);
    }
    function NA(I, g, C) {
      U.copyWithin(I, g, g + C);
    }
    function lA() {
      return 2147483648;
    }
    function SA(I) {
      try {
        return m.grow(I - T.byteLength + 65535 >>> 16), P(m.buffer), 1;
      } catch {
      }
    }
    function dA(I) {
      var g = U.length;
      I = I >>> 0;
      var C = lA();
      if (I > C)
        return !1;
      let E = (t, c) => t + (c - t % c) % c;
      for (var e = 1; e <= 4; e *= 2) {
        var i = g * (1 + 0.2 / e);
        i = Math.min(i, I + 100663296);
        var B = Math.min(C, E(Math.max(I, i), 65536)), Q = SA(B);
        if (Q)
          return !0;
      }
      return !1;
    }
    function AA(I) {
      var g = A["_" + I];
      return g;
    }
    function kA(I, g, C, E, e) {
      var i = { string: (a) => {
        var S = 0;
        if (a != null && a !== 0) {
          var QA = (a.length << 2) + 1;
          S = q(QA), tA(a, S, QA);
        }
        return S;
      }, array: (a) => {
        var S = q(a.length);
        return FA(a, S), S;
      } };
      function B(a) {
        return g === "string" ? eA(a) : g === "boolean" ? Boolean(a) : a;
      }
      var Q = AA(I), t = [], c = 0;
      if (E)
        for (var N = 0; N < E.length; N++) {
          var BA = i[C[N]];
          BA ? (c === 0 && (c = IA()), t[N] = BA(E[N])) : t[N] = E[N];
        }
      var v = Q.apply(null, t);
      function HA(a) {
        return c !== 0 && gA(c), B(a);
      }
      return v = HA(v), v;
    }
    function UA(I, g, C, E) {
      C = C || [];
      var e = C.every((B) => B === "number" || B === "boolean"), i = g !== "string";
      return i && e && !E ? AA(I) : function() {
        return kA(I, g, C, arguments);
      };
    }
    var GA = { b: NA, a: dA };
    wA(), A.___wasm_call_ctors = function() {
      return (A.___wasm_call_ctors = A.asm.d).apply(null, arguments);
    }, A._call_load_wrapper = function() {
      return (A._call_load_wrapper = A.asm.e).apply(null, arguments);
    }, A._create_buffer = function() {
      return (A._create_buffer = A.asm.f).apply(null, arguments);
    }, A._destroy_buffer = function() {
      return (A._destroy_buffer = A.asm.g).apply(null, arguments);
    }, A._get_pointer = function() {
      return (A._get_pointer = A.asm.h).apply(null, arguments);
    }, A._get_size = function() {
      return (A._get_size = A.asm.i).apply(null, arguments);
    }, A._get_width = function() {
      return (A._get_width = A.asm.j).apply(null, arguments);
    }, A._get_height = function() {
      return (A._get_height = A.asm.k).apply(null, arguments);
    }, A._get_depth = function() {
      return (A._get_depth = A.asm.l).apply(null, arguments);
    };
    var IA = A.stackSave = function() {
      return (IA = A.stackSave = A.asm.n).apply(null, arguments);
    }, gA = A.stackRestore = function() {
      return (gA = A.stackRestore = A.asm.o).apply(null, arguments);
    }, q = A.stackAlloc = function() {
      return (q = A.stackAlloc = A.asm.p).apply(null, arguments);
    };
    A.cwrap = UA;
    var M;
    G = function I() {
      M || CA(), M || (G = I);
    };
    function CA(I) {
      if (F > 0 || (rA(), F > 0))
        return;
      function g() {
        M || (M = !0, A.calledRun = !0, !_ && (aA(), h(A), A.onRuntimeInitialized && A.onRuntimeInitialized(), oA()));
      }
      A.setStatus ? (A.setStatus("Running..."), setTimeout(function() {
        setTimeout(function() {
          A.setStatus("");
        }, 1), g();
      }, 1)) : g();
    }
    if (A.preInit)
      for (typeof A.preInit == "function" && (A.preInit = [A.preInit]); A.preInit.length > 0; )
        A.preInit.pop()();
    return CA(), A.ready;
  };
})();
let s, D;
const mA = new Promise((R) => {
  YA().then(
    async (u) => {
      D = u, s = {
        alloc: D.cwrap("create_buffer", "number", ["number"]),
        load: D.cwrap("call_load_wrapper", "", ["array", "number"]),
        getPointer: D.cwrap("get_pointer", "number", []),
        getSize: D.cwrap("get_size", "number", []),
        getWidth: D.cwrap("get_width", "number", []),
        getHeight: D.cwrap("get_height", "number", []),
        getDepth: D.cwrap("get_depth", "number", []),
        clean: D.cwrap("destroy_buffer", "", ["number"])
      }, R();
    }
  );
});
async function MA(R, u = { outputFormat: "url", fixTransparency: !0 }) {
  let A = await fetch(R);
  A = await A.arrayBuffer(), A = new Uint8Array(A);
  const h = s.alloc(A.length);
  D.HEAPU8.set(A, h), s.load(h, A.length);
  const r = { width: s.getWidth(), height: s.getHeight(), depth: s.getDepth() };
  let w = new Uint8Array(
    D.HEAPU8.buffer,
    s.getPointer(),
    s.getSize()
  );
  r.depth === 0 && u.fixTransparency && (w = w.map((f, l) => l > 0 && l % 4 === 3 ? 255 : f));
  const y = await pA(w, r.width, r.height, s.getSize());
  return s.clean(h), s.clean(s.getPointer()), y ? u.outputFormat === "url" ? URL.createObjectURL(y) : { blob: y, ...r } : !1;
}
async function pA(R, u, A, h) {
  if (!u)
    return !1;
  const r = document.createElement("canvas");
  r.width = u, r.height = A;
  const w = r.getContext("2d"), y = new ImageData(new Uint8ClampedArray(R.slice(0, h)), u, A);
  return w.drawImage(await createImageBitmap(y, { imageOrientation: "flipY" }), 0, 0), new Promise((f, l) => r.toBlob(f));
}
export {
  MA as getDDSImage,
  mA as isReady
};
