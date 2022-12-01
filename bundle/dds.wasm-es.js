var YA = (() => {
  var f = import.meta.url;
  return function(A) {
    A = A || {};
    var A = typeof A < "u" ? A : {}, w, t;
    A.ready = new Promise(function(I, g) {
      w = I, t = g;
    });
    var F = Object.assign({}, A), u = typeof window == "object", D = typeof importScripts == "function", d = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string", a = "";
    function BA(I) {
      return A.locateFile ? A.locateFile(I, a) : a + I;
    }
    var J, H, m;
    if (d) {
      D ? a = require("path").dirname(a) + "/" : a = __dirname + "/";
      var L, k, X = () => {
        k || (L = require("fs"), k = require("path"));
      };
      J = (I, g) => (X(), I = k.normalize(I), L.readFileSync(I, g ? void 0 : "utf8")), m = (I) => {
        var g = J(I, !0);
        return g.buffer || (g = new Uint8Array(g)), g;
      }, H = (I, g, C) => {
        X(), I = k.normalize(I), L.readFile(I, function(E, n) {
          E ? C(E) : g(n.buffer);
        });
      }, process.argv.length > 1 && process.argv[1].replace(/\\/g, "/"), process.argv.slice(2), process.on("uncaughtException", function(I) {
        if (!(I instanceof uA))
          throw I;
      }), process.on("unhandledRejection", function(I) {
        throw I;
      }), A.inspect = function() {
        return "[Emscripten Module object]";
      };
    } else
      (u || D) && (D ? a = self.location.href : typeof document < "u" && document.currentScript && (a = document.currentScript.src), f && (a = f), a.indexOf("blob:") !== 0 ? a = a.substr(0, a.replace(/[?#].*/, "").lastIndexOf("/") + 1) : a = "", J = (I) => {
        var g = new XMLHttpRequest();
        return g.open("GET", I, !1), g.send(null), g.responseText;
      }, D && (m = (I) => {
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
    var S = A.printErr || console.warn.bind(console);
    Object.assign(A, F), F = null, A.arguments && A.arguments, A.thisProgram && A.thisProgram, A.quit && A.quit;
    var G;
    A.wasmBinary && (G = A.wasmBinary), A.noExitRuntime, typeof WebAssembly != "object" && U("no native wasm support detected");
    var v, _ = !1, x = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0;
    function QA(I, g, C) {
      for (var E = g + C, n = g; I[n] && !(n >= E); )
        ++n;
      if (n - g > 16 && I.buffer && x)
        return x.decode(I.subarray(g, n));
      for (var i = ""; g < n; ) {
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
        var o = I[g++] & 63;
        if ((B & 240) == 224 ? B = (B & 15) << 12 | Q << 6 | o : B = (B & 7) << 18 | Q << 12 | o << 6 | I[g++] & 63, B < 65536)
          i += String.fromCharCode(B);
        else {
          var h = B - 65536;
          i += String.fromCharCode(55296 | h >> 10, 56320 | h & 1023);
        }
      }
      return i;
    }
    function EA(I, g) {
      return I ? QA(p, I, g) : "";
    }
    function iA(I, g, C, E) {
      if (!(E > 0))
        return 0;
      for (var n = C, i = C + E - 1, B = 0; B < I.length; ++B) {
        var Q = I.charCodeAt(B);
        if (Q >= 55296 && Q <= 57343) {
          var o = I.charCodeAt(++B);
          Q = 65536 + ((Q & 1023) << 10) | o & 1023;
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
      return g[C] = 0, C - n;
    }
    function eA(I, g, C) {
      return iA(I, p, g, C);
    }
    var T, p;
    function nA(I) {
      A.HEAP8 = T = new Int8Array(I), A.HEAP16 = new Int16Array(I), A.HEAP32 = new Int32Array(I), A.HEAPU8 = p = new Uint8Array(I), A.HEAPU16 = new Uint16Array(I), A.HEAPU32 = new Uint32Array(I), A.HEAPF32 = new Float32Array(I), A.HEAPF64 = new Float64Array(I);
    }
    A.INITIAL_MEMORY;
    var j = [], W = [], Z = [];
    function tA() {
      if (A.preRun)
        for (typeof A.preRun == "function" && (A.preRun = [A.preRun]); A.preRun.length; )
          oA(A.preRun.shift());
      K(j);
    }
    function rA() {
      K(W);
    }
    function aA() {
      if (A.postRun)
        for (typeof A.postRun == "function" && (A.postRun = [A.postRun]); A.postRun.length; )
          cA(A.postRun.shift());
      K(Z);
    }
    function oA(I) {
      j.unshift(I);
    }
    function sA(I) {
      W.unshift(I);
    }
    function cA(I) {
      Z.unshift(I);
    }
    var R = 0, Y = null;
    function DA(I) {
      R++, A.monitorRunDependencies && A.monitorRunDependencies(R);
    }
    function fA(I) {
      if (R--, A.monitorRunDependencies && A.monitorRunDependencies(R), R == 0 && Y) {
        var g = Y;
        Y = null, g();
      }
    }
    function U(I) {
      A.onAbort && A.onAbort(I), I = "Aborted(" + I + ")", S(I), _ = !0, I += ". Build with -sASSERTIONS for more info.";
      var g = new WebAssembly.RuntimeError(I);
      throw t(g), g;
    }
    var NA = "data:application/octet-stream;base64,";
    function P(I) {
      return I.startsWith(NA);
    }
    function V(I) {
      return I.startsWith("file://");
    }
    var e;
    A.locateFile ? (e = "dds.wasm", P(e) || (e = BA(e))) : e = new URL("data:application/wasm;base64,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", self.location).toString();
    function O(I) {
      try {
        if (I == e && G)
          return new Uint8Array(G);
        if (m)
          return m(I);
        throw "both async and sync fetching of the wasm failed";
      } catch (g) {
        U(g);
      }
    }
    function wA() {
      if (!G && (u || D)) {
        if (typeof fetch == "function" && !V(e))
          return fetch(e, { credentials: "same-origin" }).then(function(I) {
            if (!I.ok)
              throw "failed to load wasm binary file at '" + e + "'";
            return I.arrayBuffer();
          }).catch(function() {
            return O(e);
          });
        if (H)
          return new Promise(function(I, g) {
            H(e, function(C) {
              I(new Uint8Array(C));
            }, g);
          });
      }
      return Promise.resolve().then(function() {
        return O(e);
      });
    }
    function FA() {
      var I = { a: GA };
      function g(B, Q) {
        var o = B.exports;
        A.asm = o, v = A.asm.c, nA(v.buffer), A.asm.m, sA(A.asm.d), fA();
      }
      DA();
      function C(B) {
        g(B.instance);
      }
      function E(B) {
        return wA().then(function(Q) {
          return WebAssembly.instantiate(Q, I);
        }).then(function(Q) {
          return Q;
        }).then(B, function(Q) {
          S("failed to asynchronously prepare wasm: " + Q), U(Q);
        });
      }
      function n() {
        return !G && typeof WebAssembly.instantiateStreaming == "function" && !P(e) && !V(e) && !d && typeof fetch == "function" ? fetch(e, { credentials: "same-origin" }).then(function(B) {
          var Q = WebAssembly.instantiateStreaming(B, I);
          return Q.then(C, function(o) {
            return S("wasm streaming compile failed: " + o), S("falling back to ArrayBuffer instantiation"), E(C);
          });
        }) : E(C);
      }
      if (A.instantiateWasm)
        try {
          var i = A.instantiateWasm(I, g);
          return i;
        } catch (B) {
          S("Module.instantiateWasm callback failed with error: " + B), t(B);
        }
      return n().catch(t), {};
    }
    function uA(I) {
      this.name = "ExitStatus", this.message = "Program terminated with exit(" + I + ")", this.status = I;
    }
    function K(I) {
      for (; I.length > 0; )
        I.shift()(A);
    }
    function RA(I, g) {
      T.set(I, g);
    }
    function hA(I, g, C) {
      p.copyWithin(I, g, g + C);
    }
    function yA(I) {
      U("OOM");
    }
    function dA(I) {
      p.length, yA();
    }
    function z(I) {
      var g = A["_" + I];
      return g;
    }
    function lA(I, g, C, E, n) {
      var i = { string: (r) => {
        var l = 0;
        if (r != null && r !== 0) {
          var CA = (r.length << 2) + 1;
          l = b(CA), eA(r, l, CA);
        }
        return l;
      }, array: (r) => {
        var l = b(r.length);
        return RA(r, l), l;
      } };
      function B(r) {
        return g === "string" ? EA(r) : g === "boolean" ? Boolean(r) : r;
      }
      var Q = z(I), o = [], h = 0;
      if (E)
        for (var y = 0; y < E.length; y++) {
          var gA = i[C[y]];
          gA ? (h === 0 && (h = $()), o[y] = gA(E[y])) : o[y] = E[y];
        }
      var q = Q.apply(null, o);
      function pA(r) {
        return h !== 0 && AA(h), B(r);
      }
      return q = pA(q), q;
    }
    function SA(I, g, C, E) {
      C = C || [];
      var n = C.every((B) => B === "number" || B === "boolean"), i = g !== "string";
      return i && n && !E ? z(I) : function() {
        return lA(I, g, C, arguments);
      };
    }
    var GA = { b: hA, a: dA };
    FA(), A.___wasm_call_ctors = function() {
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
    var $ = A.stackSave = function() {
      return ($ = A.stackSave = A.asm.n).apply(null, arguments);
    }, AA = A.stackRestore = function() {
      return (AA = A.stackRestore = A.asm.o).apply(null, arguments);
    }, b = A.stackAlloc = function() {
      return (b = A.stackAlloc = A.asm.p).apply(null, arguments);
    };
    A.cwrap = SA;
    var M;
    Y = function I() {
      M || IA(), M || (Y = I);
    };
    function IA(I) {
      if (R > 0 || (tA(), R > 0))
        return;
      function g() {
        M || (M = !0, A.calledRun = !0, !_ && (rA(), w(A), A.onRuntimeInitialized && A.onRuntimeInitialized(), aA()));
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
    return IA(), A.ready;
  };
})();
let s, c;
const mA = new Promise((f) => {
  YA().then(
    async (N) => {
      c = N, s = {
        alloc: c.cwrap("create_buffer", "number", ["number"]),
        load: c.cwrap("call_load_wrapper", "", ["array", "number"]),
        getPointer: c.cwrap("get_pointer", "number", []),
        getSize: c.cwrap("get_size", "number", []),
        getWidth: c.cwrap("get_width", "number", []),
        getHeight: c.cwrap("get_height", "number", []),
        getDepth: c.cwrap("get_depth", "number", []),
        clean: c.cwrap("destroy_buffer", "", ["number"])
      }, f();
    }
  );
});
async function kA(f, N = { outputFormat: "url", fixTransparency: !0 }) {
  let A = await fetch(f);
  A = await A.arrayBuffer(), A = new Uint8Array(A);
  const w = s.alloc(A.length);
  c.HEAPU8.set(A, w), s.load(w, A.length);
  const t = { width: s.getWidth(), height: s.getHeight(), depth: s.getDepth() };
  let F = new Uint8Array(
    c.HEAPU8.buffer,
    s.getPointer(),
    s.getSize()
  );
  t.depth === 0 && N.fixTransparency && (F = F.map((D, d) => d > 0 && d % 4 === 3 ? 255 : D));
  const u = await HA(F, t.width, t.height, s.getSize());
  return s.clean(w), s.clean(s.getPointer()), u ? N.outputFormat === "url" ? URL.createObjectURL(u) : { blob: u, ...t } : !1;
}
async function HA(f, N, A, w) {
  if (!N)
    return !1;
  const t = document.createElement("canvas");
  t.width = N, t.height = A;
  const F = t.getContext("2d"), u = new ImageData(new Uint8ClampedArray(f.slice(0, w)), N, A);
  return F.drawImage(await createImageBitmap(u, { imageOrientation: "flipY" }), 0, 0), new Promise((D, d) => t.toBlob(D));
}
export {
  kA as getDDSImage,
  mA as isReady
};
