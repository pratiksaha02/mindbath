"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[653], {
    5920: function(t, e, i) {
        i.d(e, {
            Z: function() {
                return s
            }
        });
        var n, r = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, s = (n = {},
        function(t) {
            return void 0 === n[t] && (n[t] = r.test(t) || 111 === t.charCodeAt(0) && 110 === t.charCodeAt(1) && 91 > t.charCodeAt(2)),
            n[t]
        }
        )
    },
    6307: function(t, e, i) {
        i.d(e, {
            _: function() {
                return _tagged_template_literal
            }
        });
        function _tagged_template_literal(t, e) {
            return e || (e = t.slice(0)),
            Object.freeze(Object.defineProperties(t, {
                raw: {
                    value: Object.freeze(e)
                }
            }))
        }
    },
    4190: function(t, e, i) {
        i.d(e, {
            y: function() {
                return animateValue
            }
        });
        var n = i(4783);
        let calcBezier = (t, e, i) => (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
        function cubicBezier(t, e, i, r) {
            if (t === e && i === r)
                return n.Z;
            let getTForX = e => (function(t, e, i, n, r) {
                let s, a;
                let o = 0;
                do
                    (s = calcBezier(a = e + (i - e) / 2, n, r) - t) > 0 ? i = a : e = a;
                while (Math.abs(s) > 1e-7 && ++o < 12);
                return a
            }
            )(e, 0, 1, t, i);
            return t => 0 === t || 1 === t ? t : calcBezier(getTForX(t), e, r)
        }
        let r = cubicBezier(.42, 0, 1, 1)
          , s = cubicBezier(0, 0, .58, 1)
          , a = cubicBezier(.42, 0, .58, 1)
          , isEasingArray = t => Array.isArray(t) && "number" != typeof t[0];
        var o = i(9956)
          , l = i(5570)
          , u = i(9065)
          , c = i(6390);
        let h = cubicBezier(.33, 1.53, .69, .99)
          , d = (0,
        c.M)(h)
          , p = (0,
        u.o)(d)
          , m = {
            linear: n.Z,
            easeIn: r,
            easeInOut: a,
            easeOut: s,
            circIn: l.Z7,
            circInOut: l.X7,
            circOut: l.Bn,
            backIn: d,
            backInOut: p,
            backOut: h,
            anticipate: t => (t *= 2) < 1 ? .5 * d(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        }
          , easingDefinitionToFunction = t => {
            if (Array.isArray(t)) {
                (0,
                o.k)(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                let[e,i,n,r] = t;
                return cubicBezier(e, i, n, r)
            }
            return "string" == typeof t ? ((0,
            o.k)(void 0 !== m[t], `Invalid easing type '${t}'`),
            m[t]) : t
        }
        ;
        var f = i(1499)
          , g = i(5329)
          , y = i(1242);
        function hueToRgb(t, e, i) {
            return (i < 0 && (i += 1),
            i > 1 && (i -= 1),
            i < 1 / 6) ? t + (e - t) * 6 * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
        }
        var v = i(1012)
          , x = i(8584)
          , P = i(8504);
        let mixLinearColor = (t, e, i) => {
            let n = t * t;
            return Math.sqrt(Math.max(0, i * (e * e - n) + n))
        }
          , T = [v.$, x.m, P.J]
          , getColorType = t => T.find(e => e.test(t));
        function asRGBA(t) {
            let e = getColorType(t);
            (0,
            o.k)(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`);
            let i = e.parse(t);
            return e === P.J && (i = function({hue: t, saturation: e, lightness: i, alpha: n}) {
                t /= 360,
                i /= 100;
                let r = 0
                  , s = 0
                  , a = 0;
                if (e /= 100) {
                    let n = i < .5 ? i * (1 + e) : i + e - i * e
                      , o = 2 * i - n;
                    r = hueToRgb(o, n, t + 1 / 3),
                    s = hueToRgb(o, n, t),
                    a = hueToRgb(o, n, t - 1 / 3)
                } else
                    r = s = a = i;
                return {
                    red: Math.round(255 * r),
                    green: Math.round(255 * s),
                    blue: Math.round(255 * a),
                    alpha: n
                }
            }(i)),
            i
        }
        let mixColor = (t, e) => {
            let i = asRGBA(t)
              , n = asRGBA(e)
              , r = {
                ...i
            };
            return t => (r.red = mixLinearColor(i.red, n.red, t),
            r.green = mixLinearColor(i.green, n.green, t),
            r.blue = mixLinearColor(i.blue, n.blue, t),
            r.alpha = (0,
            y.C)(i.alpha, n.alpha, t),
            x.m.transform(r))
        }
        ;
        var A = i(1934)
          , b = i(9547);
        let mixImmediate = (t, e) => i => `${i > 0 ? e : t}`;
        function getMixer(t, e) {
            return "number" == typeof t ? i => (0,
            y.C)(t, e, i) : f.$.test(t) ? mixColor(t, e) : t.startsWith("var(") ? mixImmediate(t, e) : mixComplex(t, e)
        }
        let mixArray = (t, e) => {
            let i = [...t]
              , n = i.length
              , r = t.map( (t, i) => getMixer(t, e[i]));
            return t => {
                for (let e = 0; e < n; e++)
                    i[e] = r[e](t);
                return i
            }
        }
          , mixObject = (t, e) => {
            let i = {
                ...t,
                ...e
            }
              , n = {};
            for (let r in i)
                void 0 !== t[r] && void 0 !== e[r] && (n[r] = getMixer(t[r], e[r]));
            return t => {
                for (let e in n)
                    i[e] = n[e](t);
                return i
            }
        }
          , mixComplex = (t, e) => {
            let i = b.P.createTransformer(e)
              , n = (0,
            b.V)(t)
              , r = (0,
            b.V)(e)
              , s = n.numVars === r.numVars && n.numColors === r.numColors && n.numNumbers >= r.numNumbers;
            return s ? (0,
            A.z)(mixArray(n.values, r.values), i) : ((0,
            o.K)(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),
            mixImmediate(t, e))
        }
        ;
        var V = i(8644);
        let mixNumber = (t, e) => i => (0,
        y.C)(t, e, i);
        function interpolate(t, e, {clamp: i=!0, ease: r, mixer: s}={}) {
            let a = t.length;
            if ((0,
            o.k)(a === e.length, "Both input and output ranges must be the same length"),
            1 === a)
                return () => e[0];
            t[0] > t[a - 1] && (t = [...t].reverse(),
            e = [...e].reverse());
            let l = function(t, e, i) {
                let r = []
                  , s = i || function(t) {
                    if ("number" == typeof t)
                        ;
                    else if ("string" == typeof t)
                        return f.$.test(t) ? mixColor : mixComplex;
                    else if (Array.isArray(t))
                        return mixArray;
                    else if ("object" == typeof t)
                        return mixObject;
                    return mixNumber
                }(t[0])
                  , a = t.length - 1;
                for (let i = 0; i < a; i++) {
                    let a = s(t[i], t[i + 1]);
                    if (e) {
                        let t = Array.isArray(e) ? e[i] || n.Z : e;
                        a = (0,
                        A.z)(t, a)
                    }
                    r.push(a)
                }
                return r
            }(e, r, s)
              , u = l.length
              , interpolator = e => {
                let i = 0;
                if (u > 1)
                    for (; i < t.length - 2 && !(e < t[i + 1]); i++)
                        ;
                let n = (0,
                V.Y)(t[i], t[i + 1], e);
                return l[i](n)
            }
            ;
            return i ? e => interpolator((0,
            g.u)(t[0], t[a - 1], e)) : interpolator
        }
        function keyframes({duration: t=300, keyframes: e, times: i, ease: n="easeInOut"}) {
            let r = isEasingArray(n) ? n.map(easingDefinitionToFunction) : easingDefinitionToFunction(n)
              , s = {
                done: !1,
                value: e[0]
            }
              , o = (i && i.length === e.length ? i : function(t) {
                let e = [0];
                return function(t, e) {
                    let i = t[t.length - 1];
                    for (let n = 1; n <= e; n++) {
                        let r = (0,
                        V.Y)(0, e, n);
                        t.push((0,
                        y.C)(i, 1, r))
                    }
                }(e, t.length - 1),
                e
            }(e)).map(e => e * t)
              , l = interpolate(o, e, {
                ease: Array.isArray(r) ? r : e.map( () => r || a).splice(0, e.length - 1)
            });
            return {
                calculatedDuration: t,
                next: e => (s.value = l(e),
                s.done = e >= t,
                s)
            }
        }
        var S = i(6540)
          , D = i(4646);
        function calcGeneratorVelocity(t, e, i) {
            let n = Math.max(e - 5, 0);
            return (0,
            D.R)(i - t(n), e - n)
        }
        function calcAngularFreq(t, e) {
            return t * Math.sqrt(1 - e * e)
        }
        let C = ["duration", "bounce"]
          , w = ["stiffness", "damping", "mass"];
        function isSpringType(t, e) {
            return e.some(e => void 0 !== t[e])
        }
        function spring({keyframes: t, restDelta: e, restSpeed: i, ...n}) {
            let r;
            let s = t[0]
              , a = t[t.length - 1]
              , l = {
                done: !1,
                value: s
            }
              , {stiffness: u, damping: c, mass: h, velocity: d, duration: p, isResolvedFromDuration: m} = function(t) {
                let e = {
                    velocity: 0,
                    stiffness: 100,
                    damping: 10,
                    mass: 1,
                    isResolvedFromDuration: !1,
                    ...t
                };
                if (!isSpringType(t, w) && isSpringType(t, C)) {
                    let i = function({duration: t=800, bounce: e=.25, velocity: i=0, mass: n=1}) {
                        let r, s;
                        (0,
                        o.K)(t <= (0,
                        S.w)(10), "Spring duration must be 10 seconds or less");
                        let a = 1 - e;
                        a = (0,
                        g.u)(.05, 1, a),
                        t = (0,
                        g.u)(.01, 10, (0,
                        S.X)(t)),
                        a < 1 ? (r = e => {
                            let n = e * a
                              , r = n * t
                              , s = calcAngularFreq(e, a);
                            return .001 - (n - i) / s * Math.exp(-r)
                        }
                        ,
                        s = e => {
                            let n = e * a
                              , s = n * t
                              , o = Math.pow(a, 2) * Math.pow(e, 2) * t
                              , l = calcAngularFreq(Math.pow(e, 2), a)
                              , u = -r(e) + .001 > 0 ? -1 : 1;
                            return u * ((s * i + i - o) * Math.exp(-s)) / l
                        }
                        ) : (r = e => {
                            let n = Math.exp(-e * t)
                              , r = (e - i) * t + 1;
                            return -.001 + n * r
                        }
                        ,
                        s = e => {
                            let n = Math.exp(-e * t)
                              , r = (i - e) * (t * t);
                            return n * r
                        }
                        );
                        let l = 5 / t
                          , u = function(t, e, i) {
                            let n = i;
                            for (let i = 1; i < 12; i++)
                                n -= t(n) / e(n);
                            return n
                        }(r, s, l);
                        if (t = (0,
                        S.w)(t),
                        isNaN(u))
                            return {
                                stiffness: 100,
                                damping: 10,
                                duration: t
                            };
                        {
                            let e = Math.pow(u, 2) * n;
                            return {
                                stiffness: e,
                                damping: 2 * a * Math.sqrt(n * e),
                                duration: t
                            }
                        }
                    }(t);
                    (e = {
                        ...e,
                        ...i,
                        velocity: 0,
                        mass: 1
                    }).isResolvedFromDuration = !0
                }
                return e
            }(n)
              , f = d ? -(0,
            S.X)(d) : 0
              , y = c / (2 * Math.sqrt(u * h))
              , v = a - s
              , x = (0,
            S.X)(Math.sqrt(u / h))
              , P = 5 > Math.abs(v);
            if (i || (i = P ? .01 : 2),
            e || (e = P ? .005 : .5),
            y < 1) {
                let t = calcAngularFreq(x, y);
                r = e => {
                    let i = Math.exp(-y * x * e);
                    return a - i * ((f + y * x * v) / t * Math.sin(t * e) + v * Math.cos(t * e))
                }
            } else if (1 === y)
                r = t => a - Math.exp(-x * t) * (v + (f + x * v) * t);
            else {
                let t = x * Math.sqrt(y * y - 1);
                r = e => {
                    let i = Math.exp(-y * x * e)
                      , n = Math.min(t * e, 300);
                    return a - i * ((f + y * x * v) * Math.sinh(n) + t * v * Math.cosh(n)) / t
                }
            }
            return {
                calculatedDuration: m && p || null,
                next: t => {
                    let n = r(t);
                    if (m)
                        l.done = t >= p;
                    else {
                        let s = f;
                        0 !== t && (s = y < 1 ? calcGeneratorVelocity(r, t, n) : 0);
                        let o = Math.abs(s) <= i
                          , u = Math.abs(a - n) <= e;
                        l.done = o && u
                    }
                    return l.value = l.done ? a : n,
                    l
                }
            }
        }
        function inertia({keyframes: t, velocity: e=0, power: i=.8, timeConstant: n=325, bounceDamping: r=10, bounceStiffness: s=500, modifyTarget: a, min: o, max: l, restDelta: u=.5, restSpeed: c}) {
            let h, d;
            let p = t[0]
              , m = {
                done: !1,
                value: p
            }
              , isOutOfBounds = t => void 0 !== o && t < o || void 0 !== l && t > l
              , nearestBoundary = t => void 0 === o ? l : void 0 === l ? o : Math.abs(o - t) < Math.abs(l - t) ? o : l
              , f = i * e
              , g = p + f
              , y = void 0 === a ? g : a(g);
            y !== g && (f = y - p);
            let calcDelta = t => -f * Math.exp(-t / n)
              , calcLatest = t => y + calcDelta(t)
              , applyFriction = t => {
                let e = calcDelta(t)
                  , i = calcLatest(t);
                m.done = Math.abs(e) <= u,
                m.value = m.done ? y : i
            }
              , checkCatchBoundary = t => {
                isOutOfBounds(m.value) && (h = t,
                d = spring({
                    keyframes: [m.value, nearestBoundary(m.value)],
                    velocity: calcGeneratorVelocity(calcLatest, t, m.value),
                    damping: r,
                    stiffness: s,
                    restDelta: u,
                    restSpeed: c
                }))
            }
            ;
            return checkCatchBoundary(0),
            {
                calculatedDuration: null,
                next: t => {
                    let e = !1;
                    return (d || void 0 !== h || (e = !0,
                    applyFriction(t),
                    checkCatchBoundary(t)),
                    void 0 !== h && t > h) ? d.next(t - h) : (e || applyFriction(t),
                    m)
                }
            }
        }
        var E = i(696);
        let frameloopDriver = t => {
            let passTimestamp = ({timestamp: e}) => t(e);
            return {
                start: () => E.Wi.update(passTimestamp, !0),
                stop: () => (0,
                E.Pn)(passTimestamp),
                now: () => E.frameData.isProcessing ? E.frameData.timestamp : performance.now()
            }
        }
        ;
        function calcGeneratorDuration(t) {
            let e = 0
              , i = t.next(e);
            for (; !i.done && e < 2e4; )
                e += 50,
                i = t.next(e);
            return e >= 2e4 ? 1 / 0 : e
        }
        let M = {
            decay: inertia,
            inertia: inertia,
            tween: keyframes,
            keyframes: keyframes,
            spring: spring
        };
        function animateValue({autoplay: t=!0, delay: e=0, driver: i=frameloopDriver, keyframes: n, type: r="keyframes", repeat: s=0, repeatDelay: a=0, repeatType: o="loop", onPlay: l, onStop: u, onComplete: c, onUpdate: h, ...d}) {
            let p, m, f, y, v, x = 1, P = !1, updateFinishedPromise = () => {
                m = new Promise(t => {
                    p = t
                }
                )
            }
            ;
            updateFinishedPromise();
            let T = M[r] || keyframes;
            T !== keyframes && "number" != typeof n[0] && (y = interpolate([0, 100], n, {
                clamp: !1
            }),
            n = [0, 100]);
            let A = T({
                ...d,
                keyframes: n
            });
            "mirror" === o && (v = T({
                ...d,
                keyframes: [...n].reverse(),
                velocity: -(d.velocity || 0)
            }));
            let b = "idle"
              , V = null
              , D = null
              , C = null;
            null === A.calculatedDuration && s && (A.calculatedDuration = calcGeneratorDuration(A));
            let {calculatedDuration: w} = A
              , E = 1 / 0
              , k = 1 / 0;
            null !== w && (k = (E = w + a) * (s + 1) - a);
            let R = 0
              , tick = t => {
                if (null === D)
                    return;
                x > 0 && (D = Math.min(D, t)),
                x < 0 && (D = Math.min(t - k / x, D)),
                R = null !== V ? V : Math.round(t - D) * x;
                let i = R - e * (x >= 0 ? 1 : -1)
                  , r = x >= 0 ? i < 0 : i > k;
                R = Math.max(i, 0),
                "finished" === b && null === V && (R = k);
                let l = R
                  , u = A;
                if (s) {
                    let t = R / E
                      , e = Math.floor(t)
                      , i = t % 1;
                    !i && t >= 1 && (i = 1),
                    1 === i && e--,
                    e = Math.min(e, s + 1);
                    let n = !!(e % 2);
                    n && ("reverse" === o ? (i = 1 - i,
                    a && (i -= a / E)) : "mirror" === o && (u = v));
                    let r = (0,
                    g.u)(0, 1, i);
                    R > k && (r = "reverse" === o && n ? 1 : 0),
                    l = r * E
                }
                let c = r ? {
                    done: !1,
                    value: n[0]
                } : u.next(l);
                y && (c.value = y(c.value));
                let {done: d} = c;
                r || null === w || (d = x >= 0 ? R >= k : R <= 0);
                let p = null === V && ("finished" === b || "running" === b && d);
                return h && h(c.value),
                p && finish(),
                c
            }
              , stopAnimationDriver = () => {
                f && f.stop(),
                f = void 0
            }
              , cancel = () => {
                b = "idle",
                stopAnimationDriver(),
                p(),
                updateFinishedPromise(),
                D = C = null
            }
              , finish = () => {
                b = "finished",
                c && c(),
                stopAnimationDriver(),
                p()
            }
              , play = () => {
                if (P)
                    return;
                f || (f = i(tick));
                let t = f.now();
                l && l(),
                null !== V ? D = t - V : D && "finished" !== b || (D = t),
                "finished" === b && updateFinishedPromise(),
                C = D,
                V = null,
                b = "running",
                f.start()
            }
            ;
            t && play();
            let B = {
                then: (t, e) => m.then(t, e),
                get time() {
                    return (0,
                    S.X)(R)
                },
                set time(newTime) {
                    R = newTime = (0,
                    S.w)(newTime),
                    null === V && f && 0 !== x ? D = f.now() - newTime / x : V = newTime
                },
                get duration() {
                    let t = null === A.calculatedDuration ? calcGeneratorDuration(A) : A.calculatedDuration;
                    return (0,
                    S.X)(t)
                },
                get speed() {
                    return x
                },
                set speed(newSpeed) {
                    if (newSpeed === x || !f)
                        return;
                    x = newSpeed,
                    B.time = (0,
                    S.X)(R)
                },
                get state() {
                    return b
                },
                play,
                pause: () => {
                    b = "paused",
                    V = R
                }
                ,
                stop: () => {
                    P = !0,
                    "idle" !== b && (b = "idle",
                    u && u(),
                    cancel())
                }
                ,
                cancel: () => {
                    null !== C && tick(C),
                    cancel()
                }
                ,
                complete: () => {
                    b = "finished"
                }
                ,
                sample: t => (D = 0,
                tick(t))
            };
            return B
        }
    },
    6565: function(t, e, i) {
        i.d(e, {
            _: function() {
                return r
            }
        });
        var n = i(7515);
        let r = (0,
        n.createContext)({
            transformPagePoint: t => t,
            isStatic: !1,
            reducedMotion: "never"
        })
    },
    5570: function(t, e, i) {
        i.d(e, {
            Bn: function() {
                return s
            },
            X7: function() {
                return a
            },
            Z7: function() {
                return circIn
            }
        });
        var n = i(9065)
          , r = i(6390);
        let circIn = t => 1 - Math.sin(Math.acos(t))
          , s = (0,
        r.M)(circIn)
          , a = (0,
        n.o)(s)
    },
    9065: function(t, e, i) {
        i.d(e, {
            o: function() {
                return mirrorEasing
            }
        });
        let mirrorEasing = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
    },
    6390: function(t, e, i) {
        i.d(e, {
            M: function() {
                return reverseEasing
            }
        });
        let reverseEasing = t => e => 1 - t(1 - e)
    },
    696: function(t, e, i) {
        i.d(e, {
            Pn: function() {
                return a
            },
            Wi: function() {
                return s
            },
            frameData: function() {
                return o
            },
            S6: function() {
                return l
            }
        });
        var n = i(4783);
        let Queue = class Queue {
            constructor() {
                this.order = [],
                this.scheduled = new Set
            }
            add(t) {
                if (!this.scheduled.has(t))
                    return this.scheduled.add(t),
                    this.order.push(t),
                    !0
            }
            remove(t) {
                let e = this.order.indexOf(t);
                -1 !== e && (this.order.splice(e, 1),
                this.scheduled.delete(t))
            }
            clear() {
                this.order.length = 0,
                this.scheduled.clear()
            }
        }
        ;
        let r = ["prepare", "read", "update", "preRender", "render", "postRender"]
          , {schedule: s, cancel: a, state: o, steps: l} = function(t, e) {
            let i = !1
              , n = !0
              , s = {
                delta: 0,
                timestamp: 0,
                isProcessing: !1
            }
              , a = r.reduce( (t, e) => (t[e] = function(t) {
                let e = new Queue
                  , i = new Queue
                  , n = 0
                  , r = !1
                  , s = !1
                  , a = new WeakSet
                  , o = {
                    schedule: (t, s=!1, o=!1) => {
                        let l = o && r
                          , u = l ? e : i;
                        return s && a.add(t),
                        u.add(t) && l && r && (n = e.order.length),
                        t
                    }
                    ,
                    cancel: t => {
                        i.remove(t),
                        a.delete(t)
                    }
                    ,
                    process: l => {
                        if (r) {
                            s = !0;
                            return
                        }
                        if (r = !0,
                        [e,i] = [i, e],
                        i.clear(),
                        n = e.order.length)
                            for (let i = 0; i < n; i++) {
                                let n = e.order[i];
                                n(l),
                                a.has(n) && (o.schedule(n),
                                t())
                            }
                        r = !1,
                        s && (s = !1,
                        o.process(l))
                    }
                };
                return o
            }( () => i = !0),
            t), {})
              , processStep = t => a[t].process(s)
              , processBatch = () => {
                let a = performance.now();
                i = !1,
                s.delta = n ? 1e3 / 60 : Math.max(Math.min(a - s.timestamp, 40), 1),
                s.timestamp = a,
                s.isProcessing = !0,
                r.forEach(processStep),
                s.isProcessing = !1,
                i && e && (n = !1,
                t(processBatch))
            }
              , wake = () => {
                i = !0,
                n = !0,
                s.isProcessing || t(processBatch)
            }
              , o = r.reduce( (t, e) => {
                let n = a[e];
                return t[e] = (t, e=!1, r=!1) => (i || wake(),
                n.schedule(t, e, r)),
                t
            }
            , {});
            return {
                schedule: o,
                cancel: t => r.forEach(e => a[e].cancel(t)),
                state: s,
                steps: a
            }
        }("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : n.Z, !0)
    },
    6402: function(t, e, i) {
        let n;
        i.d(e, {
            E: function() {
                return t5
            }
        });
        var r, s, a = i(7515), o = i(6565);
        let l = (0,
        a.createContext)({})
          , u = (0,
        a.createContext)(null);
        var c = i(4356);
        let h = (0,
        a.createContext)({
            strict: !1
        });
        function isRefObject(t) {
            return "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
        }
        function isVariantLabel(t) {
            return "string" == typeof t || Array.isArray(t)
        }
        function isAnimationControls(t) {
            return "object" == typeof t && "function" == typeof t.start
        }
        let d = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
          , p = ["initial", ...d];
        function isControllingVariants(t) {
            return isAnimationControls(t.animate) || p.some(e => isVariantLabel(t[e]))
        }
        function isVariantNode(t) {
            return !!(isControllingVariants(t) || t.variants)
        }
        function variantLabelsAsDependency(t) {
            return Array.isArray(t) ? t.join(" ") : t
        }
        let m = {
            animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
            exit: ["exit"],
            drag: ["drag", "dragControls"],
            focus: ["whileFocus"],
            hover: ["whileHover", "onHoverStart", "onHoverEnd"],
            tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
            pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
            inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
            layout: ["layout", "layoutId"]
        }
          , f = {};
        for (let t in m)
            f[t] = {
                isEnabled: e => m[t].some(t => !!e[t])
            };
        var g = i(5843);
        let y = (0,
        a.createContext)({})
          , v = (0,
        a.createContext)({})
          , x = Symbol.for("motionComponentSymbol")
          , P = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
        function isSVGComponent(t) {
            if ("string" != typeof t || t.includes("-"))
                ;
            else if (P.indexOf(t) > -1 || /[A-Z]/.test(t))
                return !0;
            return !1
        }
        let T = {}
          , A = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
          , b = new Set(A);
        function isForcedMotionValue(t, {layout: e, layoutId: i}) {
            return b.has(t) || t.startsWith("origin") || (e || void 0 !== i) && (!!T[t] || "opacity" === t)
        }
        var V = i(1357);
        let S = {
            x: "translateX",
            y: "translateY",
            z: "translateZ",
            transformPerspective: "perspective"
        }
          , D = A.length;
        var C = i(8406);
        let getValueAsType = (t, e) => e && "number" == typeof t ? e.transform(t) : t;
        var w = i(4412)
          , E = i(2050);
        let M = {
            ...w.Rx,
            transform: Math.round
        }
          , k = {
            borderWidth: E.px,
            borderTopWidth: E.px,
            borderRightWidth: E.px,
            borderBottomWidth: E.px,
            borderLeftWidth: E.px,
            borderRadius: E.px,
            radius: E.px,
            borderTopLeftRadius: E.px,
            borderTopRightRadius: E.px,
            borderBottomRightRadius: E.px,
            borderBottomLeftRadius: E.px,
            width: E.px,
            maxWidth: E.px,
            height: E.px,
            maxHeight: E.px,
            size: E.px,
            top: E.px,
            right: E.px,
            bottom: E.px,
            left: E.px,
            padding: E.px,
            paddingTop: E.px,
            paddingRight: E.px,
            paddingBottom: E.px,
            paddingLeft: E.px,
            margin: E.px,
            marginTop: E.px,
            marginRight: E.px,
            marginBottom: E.px,
            marginLeft: E.px,
            rotate: E.RW,
            rotateX: E.RW,
            rotateY: E.RW,
            rotateZ: E.RW,
            scale: w.bA,
            scaleX: w.bA,
            scaleY: w.bA,
            scaleZ: w.bA,
            skew: E.RW,
            skewX: E.RW,
            skewY: E.RW,
            distance: E.px,
            translateX: E.px,
            translateY: E.px,
            translateZ: E.px,
            x: E.px,
            y: E.px,
            z: E.px,
            perspective: E.px,
            transformPerspective: E.px,
            opacity: w.Fq,
            originX: E.$C,
            originY: E.$C,
            originZ: E.px,
            zIndex: M,
            fillOpacity: w.Fq,
            strokeOpacity: w.Fq,
            numOctaves: M
        };
        function buildHTMLStyles(t, e, i, n) {
            let {style: r, vars: s, transform: a, transformOrigin: o} = t
              , l = !1
              , u = !1
              , c = !0;
            for (let t in e) {
                let i = e[t];
                if ((0,
                C.f9)(t)) {
                    s[t] = i;
                    continue
                }
                let n = k[t]
                  , h = getValueAsType(i, n);
                if (b.has(t)) {
                    if (l = !0,
                    a[t] = h,
                    !c)
                        continue;
                    i !== (n.default || 0) && (c = !1)
                } else
                    t.startsWith("origin") ? (u = !0,
                    o[t] = h) : r[t] = h
            }
            if (!e.transform && (l || n ? r.transform = function(t, {enableHardwareAcceleration: e=!0, allowTransformNone: i=!0}, n, r) {
                let s = "";
                for (let e = 0; e < D; e++) {
                    let i = A[e];
                    if (void 0 !== t[i]) {
                        let e = S[i] || i;
                        s += `${e}(${t[i]}) `
                    }
                }
                return e && !t.z && (s += "translateZ(0)"),
                s = s.trim(),
                r ? s = r(t, n ? "" : s) : i && n && (s = "none"),
                s
            }(t.transform, i, c, n) : r.transform && (r.transform = "none")),
            u) {
                let {originX: t="50%", originY: e="50%", originZ: i=0} = o;
                r.transformOrigin = `${t} ${e} ${i}`
            }
        }
        let createHtmlRenderState = () => ({
            style: {},
            transform: {},
            transformOrigin: {},
            vars: {}
        });
        function copyRawValuesOnly(t, e, i) {
            for (let n in e)
                (0,
                V.i)(e[n]) || isForcedMotionValue(n, i) || (t[n] = e[n])
        }
        function useHTMLProps(t, e, i) {
            let n = {}
              , r = function(t, e, i) {
                let n = t.style || {}
                  , r = {};
                return copyRawValuesOnly(r, n, t),
                Object.assign(r, function({transformTemplate: t}, e, i) {
                    return (0,
                    a.useMemo)( () => {
                        let n = createHtmlRenderState();
                        return buildHTMLStyles(n, e, {
                            enableHardwareAcceleration: !i
                        }, t),
                        Object.assign({}, n.vars, n.style)
                    }
                    , [e])
                }(t, e, i)),
                t.transformValues ? t.transformValues(r) : r
            }(t, e, i);
            return t.drag && !1 !== t.dragListener && (n.draggable = !1,
            r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none",
            r.touchAction = !0 === t.drag ? "none" : `pan-${"x" === t.drag ? "y" : "x"}`),
            void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0),
            n.style = r,
            n
        }
        let R = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "ignoreStrict", "viewport"]);
        function isValidMotionProp(t) {
            return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || R.has(t)
        }
        let shouldForward = t => !isValidMotionProp(t);
        try {
            (r = i(5920).Z) && (shouldForward = t => t.startsWith("on") ? !isValidMotionProp(t) : r(t))
        } catch (t) {}
        function calcOrigin(t, e, i) {
            return "string" == typeof t ? t : E.px.transform(e + i * t)
        }
        let B = {
            offset: "stroke-dashoffset",
            array: "stroke-dasharray"
        }
          , L = {
            offset: "strokeDashoffset",
            array: "strokeDasharray"
        };
        function buildSVGAttrs(t, {attrX: e, attrY: i, attrScale: n, originX: r, originY: s, pathLength: a, pathSpacing: o=1, pathOffset: l=0, ...u}, c, h, d) {
            if (buildHTMLStyles(t, u, c, d),
            h) {
                t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
                return
            }
            t.attrs = t.style,
            t.style = {};
            let {attrs: p, style: m, dimensions: f} = t;
            p.transform && (f && (m.transform = p.transform),
            delete p.transform),
            f && (void 0 !== r || void 0 !== s || m.transform) && (m.transformOrigin = function(t, e, i) {
                let n = calcOrigin(e, t.x, t.width)
                  , r = calcOrigin(i, t.y, t.height);
                return `${n} ${r}`
            }(f, void 0 !== r ? r : .5, void 0 !== s ? s : .5)),
            void 0 !== e && (p.x = e),
            void 0 !== i && (p.y = i),
            void 0 !== n && (p.scale = n),
            void 0 !== a && function(t, e, i=1, n=0, r=!0) {
                t.pathLength = 1;
                let s = r ? B : L;
                t[s.offset] = E.px.transform(-n);
                let a = E.px.transform(e)
                  , o = E.px.transform(i);
                t[s.array] = `${a} ${o}`
            }(p, a, o, l, !1)
        }
        let createSvgRenderState = () => ({
            ...createHtmlRenderState(),
            attrs: {}
        })
          , isSVGTag = t => "string" == typeof t && "svg" === t.toLowerCase();
        function useSVGProps(t, e, i, n) {
            let r = (0,
            a.useMemo)( () => {
                let i = createSvgRenderState();
                return buildSVGAttrs(i, e, {
                    enableHardwareAcceleration: !1
                }, isSVGTag(n), t.transformTemplate),
                {
                    ...i.attrs,
                    style: {
                        ...i.style
                    }
                }
            }
            , [e]);
            if (t.style) {
                let e = {};
                copyRawValuesOnly(e, t.style, t),
                r.style = {
                    ...e,
                    ...r.style
                }
            }
            return r
        }
        let camelToDash = t => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
        function renderHTML(t, {style: e, vars: i}, n, r) {
            for (let s in Object.assign(t.style, e, r && r.getProjectionStyles(n)),
            i)
                t.style.setProperty(s, i[s])
        }
        let F = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
        function renderSVG(t, e, i, n) {
            for (let i in renderHTML(t, e, void 0, n),
            e.attrs)
                t.setAttribute(F.has(i) ? i : camelToDash(i), e.attrs[i])
        }
        function scrapeMotionValuesFromProps(t, e) {
            let {style: i} = t
              , n = {};
            for (let r in i)
                ((0,
                V.i)(i[r]) || e.style && (0,
                V.i)(e.style[r]) || isForcedMotionValue(r, t)) && (n[r] = i[r]);
            return n
        }
        function scrape_motion_values_scrapeMotionValuesFromProps(t, e) {
            let i = scrapeMotionValuesFromProps(t, e);
            for (let n in t)
                if ((0,
                V.i)(t[n]) || (0,
                V.i)(e[n])) {
                    let e = -1 !== A.indexOf(n) ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n;
                    i[e] = t[n]
                }
            return i
        }
        function resolveVariantFromProps(t, e, i, n={}, r={}) {
            return "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, n, r)),
            "string" == typeof e && (e = t.variants && t.variants[e]),
            "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, n, r)),
            e
        }
        var j = i(2713);
        let isKeyframesTarget = t => Array.isArray(t)
          , isCustomValue = t => !!(t && "object" == typeof t && t.mix && t.toValue)
          , resolveFinalValueInKeyframes = t => isKeyframesTarget(t) ? t[t.length - 1] || 0 : t;
        function resolveMotionValue(t) {
            let e = (0,
            V.i)(t) ? t.get() : t;
            return isCustomValue(e) ? e.toValue() : e
        }
        let makeUseVisualState = t => (e, i) => {
            let n = (0,
            a.useContext)(l)
              , r = (0,
            a.useContext)(u)
              , make = () => (function({scrapeMotionValuesFromProps: t, createRenderState: e, onMount: i}, n, r, s) {
                let a = {
                    latestValues: function(t, e, i, n) {
                        let r = {}
                          , s = n(t, {});
                        for (let t in s)
                            r[t] = resolveMotionValue(s[t]);
                        let {initial: a, animate: o} = t
                          , l = isControllingVariants(t)
                          , u = isVariantNode(t);
                        e && u && !l && !1 !== t.inherit && (void 0 === a && (a = e.initial),
                        void 0 === o && (o = e.animate));
                        let c = !!i && !1 === i.initial;
                        c = c || !1 === a;
                        let h = c ? o : a;
                        if (h && "boolean" != typeof h && !isAnimationControls(h)) {
                            let e = Array.isArray(h) ? h : [h];
                            e.forEach(e => {
                                let i = resolveVariantFromProps(t, e);
                                if (!i)
                                    return;
                                let {transitionEnd: n, transition: s, ...a} = i;
                                for (let t in a) {
                                    let e = a[t];
                                    if (Array.isArray(e)) {
                                        let t = c ? e.length - 1 : 0;
                                        e = e[t]
                                    }
                                    null !== e && (r[t] = e)
                                }
                                for (let t in n)
                                    r[t] = n[t]
                            }
                            )
                        }
                        return r
                    }(n, r, s, t),
                    renderState: e()
                };
                return i && (a.mount = t => i(n, t, a)),
                a
            }
            )(t, e, n, r);
            return i ? make() : (0,
            j.h)(make)
        }
        ;
        var O = i(696);
        let I = {
            useVisualState: makeUseVisualState({
                scrapeMotionValuesFromProps: scrape_motion_values_scrapeMotionValuesFromProps,
                createRenderState: createSvgRenderState,
                onMount: (t, e, {renderState: i, latestValues: n}) => {
                    O.Wi.read( () => {
                        try {
                            i.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
                        } catch (t) {
                            i.dimensions = {
                                x: 0,
                                y: 0,
                                width: 0,
                                height: 0
                            }
                        }
                    }
                    ),
                    O.Wi.render( () => {
                        buildSVGAttrs(i, n, {
                            enableHardwareAcceleration: !1
                        }, isSVGTag(e.tagName), t.transformTemplate),
                        renderSVG(e, i)
                    }
                    )
                }
            })
        }
          , N = {
            useVisualState: makeUseVisualState({
                scrapeMotionValuesFromProps: scrapeMotionValuesFromProps,
                createRenderState: createHtmlRenderState
            })
        };
        function addDomEvent(t, e, i, n={
            passive: !0
        }) {
            return t.addEventListener(e, i, n),
            () => t.removeEventListener(e, i)
        }
        let isPrimaryPointer = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary;
        function extractEventInfo(t, e="page") {
            return {
                point: {
                    x: t[e + "X"],
                    y: t[e + "Y"]
                }
            }
        }
        let addPointerInfo = t => e => isPrimaryPointer(e) && t(e, extractEventInfo(e));
        function addPointerEvent(t, e, i, n) {
            return addDomEvent(t, e, addPointerInfo(i), n)
        }
        var U = i(1934);
        function createLock(t) {
            let e = null;
            return () => null === e && (e = t,
            () => {
                e = null
            }
            )
        }
        let W = createLock("dragHorizontal")
          , z = createLock("dragVertical");
        function getGlobalLock(t) {
            let e = !1;
            if ("y" === t)
                e = z();
            else if ("x" === t)
                e = W();
            else {
                let t = W()
                  , i = z();
                t && i ? e = () => {
                    t(),
                    i()
                }
                : (t && t(),
                i && i())
            }
            return e
        }
        function isDragActive() {
            let t = getGlobalLock(!0);
            return !t || (t(),
            !1)
        }
        let Feature = class Feature {
            constructor(t) {
                this.isMounted = !1,
                this.node = t
            }
            update() {}
        }
        ;
        function addHoverEvent(t, e) {
            let i = "pointer" + (e ? "enter" : "leave")
              , n = "onHover" + (e ? "Start" : "End");
            return addPointerEvent(t.current, i, (i, r) => {
                if ("touch" === i.type || isDragActive())
                    return;
                let s = t.getProps();
                t.animationState && s.whileHover && t.animationState.setActive("whileHover", e),
                s[n] && O.Wi.update( () => s[n](i, r))
            }
            , {
                passive: !t.getProps()[n]
            })
        }
        let isNodeOrChild = (t, e) => !!e && (t === e || isNodeOrChild(t, e.parentElement));
        var $ = i(4783);
        function fireSyntheticPointerEvent(t, e) {
            if (!e)
                return;
            let i = new PointerEvent("pointer" + t);
            e(i, extractEventInfo(i))
        }
        let H = new WeakMap
          , X = new WeakMap
          , fireObserverCallback = t => {
            let e = H.get(t.target);
            e && e(t)
        }
          , fireAllObserverCallbacks = t => {
            t.forEach(fireObserverCallback)
        }
          , G = {
            some: 0,
            all: 1
        };
        function shallowCompare(t, e) {
            if (!Array.isArray(e))
                return !1;
            let i = e.length;
            if (i !== t.length)
                return !1;
            for (let n = 0; n < i; n++)
                if (e[n] !== t[n])
                    return !1;
            return !0
        }
        function resolveVariant(t, e, i) {
            let n = t.getProps();
            return resolveVariantFromProps(n, e, void 0 !== i ? i : n.custom, function(t) {
                let e = {};
                return t.values.forEach( (t, i) => e[i] = t.get()),
                e
            }(t), function(t) {
                let e = {};
                return t.values.forEach( (t, i) => e[i] = t.getVelocity()),
                e
            }(t))
        }
        let Z = "data-" + camelToDash("framerAppearId");
        var q = i(9956)
          , Y = i(6540);
        let _ = {
            current: !1
        }
          , isBezierDefinition = t => Array.isArray(t) && "number" == typeof t[0]
          , cubicBezierAsString = ([t,e,i,n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`
          , K = {
            linear: "linear",
            ease: "ease",
            easeIn: "ease-in",
            easeOut: "ease-out",
            easeInOut: "ease-in-out",
            circIn: cubicBezierAsString([0, .65, .55, 1]),
            circOut: cubicBezierAsString([.55, 0, 1, .45]),
            backIn: cubicBezierAsString([.31, .01, .66, -.59]),
            backOut: cubicBezierAsString([.33, 1.53, .69, .99])
        };
        var Q = i(4190);
        let J = (s = () => Object.hasOwnProperty.call(Element.prototype, "animate"),
        () => (void 0 === n && (n = s()),
        n))
          , tt = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"])
          , requiresPregeneratedKeyframes = (t, e) => "spring" === e.type || "backgroundColor" === t || !function isWaapiSupportedEasing(t) {
            return !!(!t || "string" == typeof t && K[t] || isBezierDefinition(t) || Array.isArray(t) && t.every(isWaapiSupportedEasing))
        }(e.ease)
          , te = {
            type: "spring",
            stiffness: 500,
            damping: 25,
            restSpeed: 10
        }
          , criticallyDampedSpring = t => ({
            type: "spring",
            stiffness: 550,
            damping: 0 === t ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10
        })
          , ti = {
            type: "keyframes",
            duration: .8
        }
          , tn = {
            type: "keyframes",
            ease: [.25, .1, .35, 1],
            duration: .3
        }
          , getDefaultTransition = (t, {keyframes: e}) => e.length > 2 ? ti : b.has(t) ? t.startsWith("scale") ? criticallyDampedSpring(e[1]) : te : tn;
        var tr = i(9547);
        let isAnimatable = (t, e) => "zIndex" !== t && !!("number" == typeof e || Array.isArray(e) || "string" == typeof e && (tr.P.test(e) || "0" === e) && !e.startsWith("url("));
        var ts = i(820);
        let ta = new Set(["brightness", "contrast", "saturate", "opacity"]);
        function applyDefaultFilter(t) {
            let[e,i] = t.slice(0, -1).split("(");
            if ("drop-shadow" === e)
                return t;
            let[n] = i.match(ts.KP) || [];
            if (!n)
                return t;
            let r = i.replace(n, "")
              , s = ta.has(e) ? 1 : 0;
            return n !== i && (s *= 100),
            e + "(" + s + r + ")"
        }
        let to = /([a-z-]*)\(.*?\)/g
          , tl = {
            ...tr.P,
            getAnimatableNone: t => {
                let e = t.match(to);
                return e ? e.map(applyDefaultFilter).join(" ") : t
            }
        };
        var tu = i(1499);
        let tc = {
            ...k,
            color: tu.$,
            backgroundColor: tu.$,
            outlineColor: tu.$,
            fill: tu.$,
            stroke: tu.$,
            borderColor: tu.$,
            borderTopColor: tu.$,
            borderRightColor: tu.$,
            borderBottomColor: tu.$,
            borderLeftColor: tu.$,
            filter: tl,
            WebkitFilter: tl
        }
          , getDefaultValueType = t => tc[t];
        function getAnimatableNone(t, e) {
            let i = getDefaultValueType(t);
            return i !== tl && (i = tr.P),
            i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        }
        let isZeroValueString = t => /^0[^.\s]+$/.test(t);
        function getValueTransition(t, e) {
            return t[e] || t.default || t
        }
        let animateMotionValue = (t, e, i, n={}) => r => {
            let s = getValueTransition(n, t) || {}
              , a = s.delay || n.delay || 0
              , {elapsed: o=0} = n;
            o -= (0,
            Y.w)(a);
            let l = function(t, e, i, n) {
                let r, s;
                let a = isAnimatable(e, i);
                r = Array.isArray(i) ? [...i] : [null, i];
                let o = void 0 !== n.from ? n.from : t.get()
                  , l = [];
                for (let t = 0; t < r.length; t++) {
                    var u;
                    null === r[t] && (r[t] = 0 === t ? o : r[t - 1]),
                    ("number" == typeof (u = r[t]) ? 0 === u : null !== u ? "none" === u || "0" === u || isZeroValueString(u) : void 0) && l.push(t),
                    "string" == typeof r[t] && "none" !== r[t] && "0" !== r[t] && (s = r[t])
                }
                if (a && l.length && s)
                    for (let t = 0; t < l.length; t++) {
                        let i = l[t];
                        r[i] = getAnimatableNone(e, s)
                    }
                return r
            }(e, t, i, s)
              , u = l[0]
              , c = l[l.length - 1]
              , h = isAnimatable(t, u)
              , d = isAnimatable(t, c);
            (0,
            q.K)(h === d, `You are trying to animate ${t} from "${u}" to "${c}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${c} via the \`style\` property.`);
            let p = {
                keyframes: l,
                velocity: e.getVelocity(),
                ease: "easeOut",
                ...s,
                delay: -o,
                onUpdate: t => {
                    e.set(t),
                    s.onUpdate && s.onUpdate(t)
                }
                ,
                onComplete: () => {
                    r(),
                    s.onComplete && s.onComplete()
                }
            };
            if (!function({when: t, delay: e, delayChildren: i, staggerChildren: n, staggerDirection: r, repeat: s, repeatType: a, repeatDelay: o, from: l, elapsed: u, ...c}) {
                return !!Object.keys(c).length
            }(s) && (p = {
                ...p,
                ...getDefaultTransition(t, p)
            }),
            p.duration && (p.duration = (0,
            Y.w)(p.duration)),
            p.repeatDelay && (p.repeatDelay = (0,
            Y.w)(p.repeatDelay)),
            !h || !d || _.current || !1 === s.type)
                return function({keyframes: t, delay: e, onUpdate: i, onComplete: n}) {
                    let setValue = () => (i && i(t[t.length - 1]),
                    n && n(),
                    {
                        time: 0,
                        speed: 1,
                        duration: 0,
                        play: $.Z,
                        pause: $.Z,
                        stop: $.Z,
                        then: t => (t(),
                        Promise.resolve()),
                        cancel: $.Z,
                        complete: $.Z
                    });
                    return e ? (0,
                    Q.y)({
                        keyframes: [0, 1],
                        duration: 0,
                        delay: e,
                        onComplete: setValue
                    }) : setValue()
                }(_.current ? {
                    ...p,
                    delay: 0
                } : p);
            if (e.owner && e.owner.current instanceof HTMLElement && !e.owner.getProps().onUpdate) {
                let i = function(t, e, {onUpdate: i, onComplete: n, ...r}) {
                    let s, a;
                    let o = J() && tt.has(e) && !r.repeatDelay && "mirror" !== r.repeatType && 0 !== r.damping && "inertia" !== r.type;
                    if (!o)
                        return !1;
                    let l = !1
                      , updateFinishedPromise = () => {
                        a = new Promise(t => {
                            s = t
                        }
                        )
                    }
                    ;
                    updateFinishedPromise();
                    let {keyframes: u, duration: c=300, ease: h, times: d} = r;
                    if (requiresPregeneratedKeyframes(e, r)) {
                        let t = (0,
                        Q.y)({
                            ...r,
                            repeat: 0,
                            delay: 0
                        })
                          , e = {
                            done: !1,
                            value: u[0]
                        }
                          , i = []
                          , n = 0;
                        for (; !e.done && n < 2e4; )
                            e = t.sample(n),
                            i.push(e.value),
                            n += 10;
                        d = void 0,
                        u = i,
                        c = n - 10,
                        h = "linear"
                    }
                    let p = function(t, e, i, {delay: n=0, duration: r, repeat: s=0, repeatType: a="loop", ease: o, times: l}={}) {
                        let u = {
                            [e]: i
                        };
                        l && (u.offset = l);
                        let c = function mapEasingToNativeEasing(t) {
                            if (t)
                                return isBezierDefinition(t) ? cubicBezierAsString(t) : Array.isArray(t) ? t.map(mapEasingToNativeEasing) : K[t]
                        }(o);
                        return Array.isArray(c) && (u.easing = c),
                        t.animate(u, {
                            delay: n,
                            duration: r,
                            easing: Array.isArray(c) ? "linear" : c,
                            fill: "both",
                            iterations: s + 1,
                            direction: "reverse" === a ? "alternate" : "normal"
                        })
                    }(t.owner.current, e, u, {
                        ...r,
                        duration: c,
                        ease: h,
                        times: d
                    });
                    r.syncStart && (p.startTime = O.frameData.isProcessing ? O.frameData.timestamp : document.timeline ? document.timeline.currentTime : performance.now());
                    let cancelAnimation = () => p.cancel()
                      , safeCancel = () => {
                        O.Wi.update(cancelAnimation),
                        s(),
                        updateFinishedPromise()
                    }
                    ;
                    return p.onfinish = () => {
                        t.set(function(t, {repeat: e, repeatType: i="loop"}) {
                            let n = e && "loop" !== i && e % 2 == 1 ? 0 : t.length - 1;
                            return t[n]
                        }(u, r)),
                        n && n(),
                        safeCancel()
                    }
                    ,
                    {
                        then: (t, e) => a.then(t, e),
                        attachTimeline: t => (p.timeline = t,
                        p.onfinish = null,
                        $.Z),
                        get time() {
                            return (0,
                            Y.X)(p.currentTime || 0)
                        },
                        set time(newTime) {
                            p.currentTime = (0,
                            Y.w)(newTime)
                        },
                        get speed() {
                            return p.playbackRate
                        },
                        set speed(newSpeed) {
                            p.playbackRate = newSpeed
                        },
                        get duration() {
                            return (0,
                            Y.X)(c)
                        },
                        play: () => {
                            l || (p.play(),
                            (0,
                            O.Pn)(cancelAnimation))
                        }
                        ,
                        pause: () => p.pause(),
                        stop: () => {
                            if (l = !0,
                            "idle" === p.playState)
                                return;
                            let {currentTime: e} = p;
                            if (e) {
                                let i = (0,
                                Q.y)({
                                    ...r,
                                    autoplay: !1
                                });
                                t.setWithVelocity(i.sample(e - 10).value, i.sample(e).value, 10)
                            }
                            safeCancel()
                        }
                        ,
                        complete: () => p.finish(),
                        cancel: safeCancel
                    }
                }(e, t, p);
                if (i)
                    return i
            }
            return (0,
            Q.y)(p)
        }
        ;
        function isWillChangeMotionValue(t) {
            return !!((0,
            V.i)(t) && t.add)
        }
        let isNumericalString = t => /^\-?\d*\.?\d+$/.test(t);
        var th = i(3209);
        let testValueType = t => e => e.test(t)
          , td = [w.Rx, E.px, E.aQ, E.RW, E.vw, E.vh, {
            test: t => "auto" === t,
            parse: t => t
        }]
          , findDimensionValueType = t => td.find(testValueType(t))
          , tp = [...td, tu.$, tr.P]
          , findValueType = t => tp.find(testValueType(t));
        function animateTarget(t, e, {delay: i=0, transitionOverride: n, type: r}={}) {
            let {transition: s=t.getDefaultTransition(), transitionEnd: a, ...o} = t.makeTargetAnimatable(e)
              , l = t.getValue("willChange");
            n && (s = n);
            let u = []
              , c = r && t.animationState && t.animationState.getState()[r];
            for (let e in o) {
                let n = t.getValue(e)
                  , r = o[e];
                if (!n || void 0 === r || c && function({protectedKeys: t, needsAnimating: e}, i) {
                    let n = t.hasOwnProperty(i) && !0 !== e[i];
                    return e[i] = !1,
                    n
                }(c, e))
                    continue;
                let a = {
                    delay: i,
                    elapsed: 0,
                    ...s
                };
                if (window.HandoffAppearAnimations && !n.hasAnimated) {
                    let i = t.getProps()[Z];
                    i && (a.elapsed = window.HandoffAppearAnimations(i, e, n, O.Wi),
                    a.syncStart = !0)
                }
                n.start(animateMotionValue(e, n, r, t.shouldReduceMotion && b.has(e) ? {
                    type: !1
                } : a));
                let h = n.animation;
                isWillChangeMotionValue(l) && (l.add(e),
                h.then( () => l.remove(e))),
                u.push(h)
            }
            return a && Promise.all(u).then( () => {
                a && function(t, e) {
                    let i = resolveVariant(t, e)
                      , {transitionEnd: n={}, transition: r={}, ...s} = i ? t.makeTargetAnimatable(i, !1) : {};
                    for (let e in s = {
                        ...s,
                        ...n
                    }) {
                        let i = resolveFinalValueInKeyframes(s[e]);
                        t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, (0,
                        th.BX)(i))
                    }
                }(t, a)
            }
            ),
            u
        }
        function animateVariant(t, e, i={}) {
            let n = resolveVariant(t, e, i.custom)
              , {transition: r=t.getDefaultTransition() || {}} = n || {};
            i.transitionOverride && (r = i.transitionOverride);
            let s = n ? () => Promise.all(animateTarget(t, n, i)) : () => Promise.resolve()
              , a = t.variantChildren && t.variantChildren.size ? (n=0) => {
                let {delayChildren: s=0, staggerChildren: a, staggerDirection: o} = r;
                return function(t, e, i=0, n=0, r=1, s) {
                    let a = []
                      , o = (t.variantChildren.size - 1) * n
                      , l = 1 === r ? (t=0) => t * n : (t=0) => o - t * n;
                    return Array.from(t.variantChildren).sort(sortByTreeOrder).forEach( (t, n) => {
                        t.notify("AnimationStart", e),
                        a.push(animateVariant(t, e, {
                            ...s,
                            delay: i + l(n)
                        }).then( () => t.notify("AnimationComplete", e)))
                    }
                    ),
                    Promise.all(a)
                }(t, e, s + n, a, o, i)
            }
            : () => Promise.resolve()
              , {when: o} = r;
            if (!o)
                return Promise.all([s(), a(i.delay)]);
            {
                let[t,e] = "beforeChildren" === o ? [s, a] : [a, s];
                return t().then( () => e())
            }
        }
        function sortByTreeOrder(t, e) {
            return t.sortNodePosition(e)
        }
        let tm = [...d].reverse()
          , tf = d.length;
        function createTypeState(t=!1) {
            return {
                isActive: t,
                protectedKeys: {},
                needsAnimating: {},
                prevResolvedValues: {}
            }
        }
        let tg = 0
          , distance = (t, e) => Math.abs(t - e);
        let PanSession = class PanSession {
            constructor(t, e, {transformPagePoint: i}={}) {
                if (this.startEvent = null,
                this.lastMoveEvent = null,
                this.lastMoveEventInfo = null,
                this.handlers = {},
                this.updatePoint = () => {
                    if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                        return;
                    let t = getPanInfo(this.lastMoveEventInfo, this.history)
                      , e = null !== this.startEvent
                      , i = function(t, e) {
                        let i = distance(t.x, e.x)
                          , n = distance(t.y, e.y);
                        return Math.sqrt(i ** 2 + n ** 2)
                    }(t.offset, {
                        x: 0,
                        y: 0
                    }) >= 3;
                    if (!e && !i)
                        return;
                    let {point: n} = t
                      , {timestamp: r} = O.frameData;
                    this.history.push({
                        ...n,
                        timestamp: r
                    });
                    let {onStart: s, onMove: a} = this.handlers;
                    e || (s && s(this.lastMoveEvent, t),
                    this.startEvent = this.lastMoveEvent),
                    a && a(this.lastMoveEvent, t)
                }
                ,
                this.handlePointerMove = (t, e) => {
                    this.lastMoveEvent = t,
                    this.lastMoveEventInfo = transformPoint(e, this.transformPagePoint),
                    O.Wi.update(this.updatePoint, !0)
                }
                ,
                this.handlePointerUp = (t, e) => {
                    if (this.end(),
                    !(this.lastMoveEvent && this.lastMoveEventInfo))
                        return;
                    let {onEnd: i, onSessionEnd: n} = this.handlers
                      , r = getPanInfo("pointercancel" === t.type ? this.lastMoveEventInfo : transformPoint(e, this.transformPagePoint), this.history);
                    this.startEvent && i && i(t, r),
                    n && n(t, r)
                }
                ,
                !isPrimaryPointer(t))
                    return;
                this.handlers = e,
                this.transformPagePoint = i;
                let n = extractEventInfo(t)
                  , r = transformPoint(n, this.transformPagePoint)
                  , {point: s} = r
                  , {timestamp: a} = O.frameData;
                this.history = [{
                    ...s,
                    timestamp: a
                }];
                let {onSessionStart: o} = e;
                o && o(t, getPanInfo(r, this.history)),
                this.removeListeners = (0,
                U.z)(addPointerEvent(window, "pointermove", this.handlePointerMove), addPointerEvent(window, "pointerup", this.handlePointerUp), addPointerEvent(window, "pointercancel", this.handlePointerUp))
            }
            updateHandlers(t) {
                this.handlers = t
            }
            end() {
                this.removeListeners && this.removeListeners(),
                (0,
                O.Pn)(this.updatePoint)
            }
        }
        ;
        function transformPoint(t, e) {
            return e ? {
                point: e(t.point)
            } : t
        }
        function subtractPoint(t, e) {
            return {
                x: t.x - e.x,
                y: t.y - e.y
            }
        }
        function getPanInfo({point: t}, e) {
            return {
                point: t,
                delta: subtractPoint(t, lastDevicePoint(e)),
                offset: subtractPoint(t, e[0]),
                velocity: function(t, e) {
                    if (t.length < 2)
                        return {
                            x: 0,
                            y: 0
                        };
                    let i = t.length - 1
                      , n = null
                      , r = lastDevicePoint(t);
                    for (; i >= 0 && (n = t[i],
                    !(r.timestamp - n.timestamp > (0,
                    Y.w)(.1))); )
                        i--;
                    if (!n)
                        return {
                            x: 0,
                            y: 0
                        };
                    let s = (0,
                    Y.X)(r.timestamp - n.timestamp);
                    if (0 === s)
                        return {
                            x: 0,
                            y: 0
                        };
                    let a = {
                        x: (r.x - n.x) / s,
                        y: (r.y - n.y) / s
                    };
                    return a.x === 1 / 0 && (a.x = 0),
                    a.y === 1 / 0 && (a.y = 0),
                    a
                }(e, 0)
            }
        }
        function lastDevicePoint(t) {
            return t[t.length - 1]
        }
        var ty = i(8644)
          , tv = i(1242);
        function calcLength(t) {
            return t.max - t.min
        }
        function isNear(t, e=0, i=.01) {
            return Math.abs(t - e) <= i
        }
        function calcAxisDelta(t, e, i, n=.5) {
            t.origin = n,
            t.originPoint = (0,
            tv.C)(e.min, e.max, t.origin),
            t.scale = calcLength(i) / calcLength(e),
            (isNear(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
            t.translate = (0,
            tv.C)(i.min, i.max, t.origin) - t.originPoint,
            (isNear(t.translate) || isNaN(t.translate)) && (t.translate = 0)
        }
        function calcBoxDelta(t, e, i, n) {
            calcAxisDelta(t.x, e.x, i.x, n ? n.originX : void 0),
            calcAxisDelta(t.y, e.y, i.y, n ? n.originY : void 0)
        }
        function calcRelativeAxis(t, e, i) {
            t.min = i.min + e.min,
            t.max = t.min + calcLength(e)
        }
        function calcRelativeAxisPosition(t, e, i) {
            t.min = e.min - i.min,
            t.max = t.min + calcLength(e)
        }
        function calcRelativePosition(t, e, i) {
            calcRelativeAxisPosition(t.x, e.x, i.x),
            calcRelativeAxisPosition(t.y, e.y, i.y)
        }
        var tx = i(5329);
        function calcRelativeAxisConstraints(t, e, i) {
            return {
                min: void 0 !== e ? t.min + e : void 0,
                max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0
            }
        }
        function calcViewportAxisConstraints(t, e) {
            let i = e.min - t.min
              , n = e.max - t.max;
            return e.max - e.min < t.max - t.min && ([i,n] = [n, i]),
            {
                min: i,
                max: n
            }
        }
        function resolveAxisElastic(t, e, i) {
            return {
                min: resolvePointElastic(t, e),
                max: resolvePointElastic(t, i)
            }
        }
        function resolvePointElastic(t, e) {
            return "number" == typeof t ? t : t[e] || 0
        }
        let createAxisDelta = () => ({
            translate: 0,
            scale: 1,
            origin: 0,
            originPoint: 0
        })
          , createDelta = () => ({
            x: createAxisDelta(),
            y: createAxisDelta()
        })
          , createAxis = () => ({
            min: 0,
            max: 0
        })
          , createBox = () => ({
            x: createAxis(),
            y: createAxis()
        });
        function eachAxis(t) {
            return [t("x"), t("y")]
        }
        function convertBoundingBoxToBox({top: t, left: e, right: i, bottom: n}) {
            return {
                x: {
                    min: e,
                    max: i
                },
                y: {
                    min: t,
                    max: n
                }
            }
        }
        function isIdentityScale(t) {
            return void 0 === t || 1 === t
        }
        function hasScale({scale: t, scaleX: e, scaleY: i}) {
            return !isIdentityScale(t) || !isIdentityScale(e) || !isIdentityScale(i)
        }
        function hasTransform(t) {
            return hasScale(t) || has2DTranslate(t) || t.z || t.rotate || t.rotateX || t.rotateY
        }
        function has2DTranslate(t) {
            var e, i;
            return (e = t.x) && "0%" !== e || (i = t.y) && "0%" !== i
        }
        function applyPointDelta(t, e, i, n, r) {
            return void 0 !== r && (t = n + r * (t - n)),
            n + i * (t - n) + e
        }
        function applyAxisDelta(t, e=0, i=1, n, r) {
            t.min = applyPointDelta(t.min, e, i, n, r),
            t.max = applyPointDelta(t.max, e, i, n, r)
        }
        function applyBoxDelta(t, {x: e, y: i}) {
            applyAxisDelta(t.x, e.translate, e.scale, e.originPoint),
            applyAxisDelta(t.y, i.translate, i.scale, i.originPoint)
        }
        function snapToDefault(t) {
            return Number.isInteger(t) ? t : t > 1.0000000000001 || t < .999999999999 ? t : 1
        }
        function translateAxis(t, e) {
            t.min = t.min + e,
            t.max = t.max + e
        }
        function transformAxis(t, e, [i,n,r]) {
            let s = void 0 !== e[r] ? e[r] : .5
              , a = (0,
            tv.C)(t.min, t.max, s);
            applyAxisDelta(t, e[i], e[n], a, e.scale)
        }
        let tP = ["x", "scaleX", "originX"]
          , tT = ["y", "scaleY", "originY"];
        function transformBox(t, e) {
            transformAxis(t.x, e, tP),
            transformAxis(t.y, e, tT)
        }
        function measureViewportBox(t, e) {
            return convertBoundingBoxToBox(function(t, e) {
                if (!e)
                    return t;
                let i = e({
                    x: t.left,
                    y: t.top
                })
                  , n = e({
                    x: t.right,
                    y: t.bottom
                });
                return {
                    top: i.y,
                    left: i.x,
                    bottom: n.y,
                    right: n.x
                }
            }(t.getBoundingClientRect(), e))
        }
        let tA = new WeakMap;
        let VisualElementDragControls = class VisualElementDragControls {
            constructor(t) {
                this.openGlobalLock = null,
                this.isDragging = !1,
                this.currentDirection = null,
                this.originPoint = {
                    x: 0,
                    y: 0
                },
                this.constraints = !1,
                this.hasMutatedConstraints = !1,
                this.elastic = createBox(),
                this.visualElement = t
            }
            start(t, {snapToCursor: e=!1}={}) {
                let {presenceContext: i} = this.visualElement;
                i && !1 === i.isPresent || (this.panSession = new PanSession(t,{
                    onSessionStart: t => {
                        this.stopAnimation(),
                        e && this.snapToCursor(extractEventInfo(t, "page").point)
                    }
                    ,
                    onStart: (t, e) => {
                        let {drag: i, dragPropagation: n, onDragStart: r} = this.getProps();
                        if (i && !n && (this.openGlobalLock && this.openGlobalLock(),
                        this.openGlobalLock = getGlobalLock(i),
                        !this.openGlobalLock))
                            return;
                        this.isDragging = !0,
                        this.currentDirection = null,
                        this.resolveConstraints(),
                        this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
                        this.visualElement.projection.target = void 0),
                        eachAxis(t => {
                            let e = this.getAxisMotionValue(t).get() || 0;
                            if (E.aQ.test(e)) {
                                let {projection: i} = this.visualElement;
                                if (i && i.layout) {
                                    let n = i.layout.layoutBox[t];
                                    if (n) {
                                        let t = calcLength(n);
                                        e = t * (parseFloat(e) / 100)
                                    }
                                }
                            }
                            this.originPoint[t] = e
                        }
                        ),
                        r && O.Wi.update( () => r(t, e), !1, !0);
                        let {animationState: s} = this.visualElement;
                        s && s.setActive("whileDrag", !0)
                    }
                    ,
                    onMove: (t, e) => {
                        let {dragPropagation: i, dragDirectionLock: n, onDirectionLock: r, onDrag: s} = this.getProps();
                        if (!i && !this.openGlobalLock)
                            return;
                        let {offset: a} = e;
                        if (n && null === this.currentDirection) {
                            this.currentDirection = function(t, e=10) {
                                let i = null;
                                return Math.abs(t.y) > e ? i = "y" : Math.abs(t.x) > e && (i = "x"),
                                i
                            }(a),
                            null !== this.currentDirection && r && r(this.currentDirection);
                            return
                        }
                        this.updateAxis("x", e.point, a),
                        this.updateAxis("y", e.point, a),
                        this.visualElement.render(),
                        s && s(t, e)
                    }
                    ,
                    onSessionEnd: (t, e) => this.stop(t, e)
                },{
                    transformPagePoint: this.visualElement.getTransformPagePoint()
                }))
            }
            stop(t, e) {
                let i = this.isDragging;
                if (this.cancel(),
                !i)
                    return;
                let {velocity: n} = e;
                this.startAnimation(n);
                let {onDragEnd: r} = this.getProps();
                r && O.Wi.update( () => r(t, e))
            }
            cancel() {
                this.isDragging = !1;
                let {projection: t, animationState: e} = this.visualElement;
                t && (t.isAnimationBlocked = !1),
                this.panSession && this.panSession.end(),
                this.panSession = void 0;
                let {dragPropagation: i} = this.getProps();
                !i && this.openGlobalLock && (this.openGlobalLock(),
                this.openGlobalLock = null),
                e && e.setActive("whileDrag", !1)
            }
            updateAxis(t, e, i) {
                let {drag: n} = this.getProps();
                if (!i || !shouldDrag(t, n, this.currentDirection))
                    return;
                let r = this.getAxisMotionValue(t)
                  , s = this.originPoint[t] + i[t];
                this.constraints && this.constraints[t] && (s = function(t, {min: e, max: i}, n) {
                    return void 0 !== e && t < e ? t = n ? (0,
                    tv.C)(e, t, n.min) : Math.max(t, e) : void 0 !== i && t > i && (t = n ? (0,
                    tv.C)(i, t, n.max) : Math.min(t, i)),
                    t
                }(s, this.constraints[t], this.elastic[t])),
                r.set(s)
            }
            resolveConstraints() {
                let {dragConstraints: t, dragElastic: e} = this.getProps()
                  , {layout: i} = this.visualElement.projection || {}
                  , n = this.constraints;
                t && isRefObject(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && i ? this.constraints = function(t, {top: e, left: i, bottom: n, right: r}) {
                    return {
                        x: calcRelativeAxisConstraints(t.x, i, r),
                        y: calcRelativeAxisConstraints(t.y, e, n)
                    }
                }(i.layoutBox, t) : this.constraints = !1,
                this.elastic = function(t=.35) {
                    return !1 === t ? t = 0 : !0 === t && (t = .35),
                    {
                        x: resolveAxisElastic(t, "left", "right"),
                        y: resolveAxisElastic(t, "top", "bottom")
                    }
                }(e),
                n !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && eachAxis(t => {
                    this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
                        let i = {};
                        return void 0 !== e.min && (i.min = e.min - t.min),
                        void 0 !== e.max && (i.max = e.max - t.min),
                        i
                    }(i.layoutBox[t], this.constraints[t]))
                }
                )
            }
            resolveRefConstraints() {
                var t;
                let {dragConstraints: e, onMeasureDragConstraints: i} = this.getProps();
                if (!e || !isRefObject(e))
                    return !1;
                let n = e.current;
                (0,
                q.k)(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                let {projection: r} = this.visualElement;
                if (!r || !r.layout)
                    return !1;
                let s = function(t, e, i) {
                    let n = measureViewportBox(t, i)
                      , {scroll: r} = e;
                    return r && (translateAxis(n.x, r.offset.x),
                    translateAxis(n.y, r.offset.y)),
                    n
                }(n, r.root, this.visualElement.getTransformPagePoint())
                  , a = {
                    x: calcViewportAxisConstraints((t = r.layout.layoutBox).x, s.x),
                    y: calcViewportAxisConstraints(t.y, s.y)
                };
                if (i) {
                    let t = i(function({x: t, y: e}) {
                        return {
                            top: e.min,
                            right: t.max,
                            bottom: e.max,
                            left: t.min
                        }
                    }(a));
                    this.hasMutatedConstraints = !!t,
                    t && (a = convertBoundingBoxToBox(t))
                }
                return a
            }
            startAnimation(t) {
                let {drag: e, dragMomentum: i, dragElastic: n, dragTransition: r, dragSnapToOrigin: s, onDragTransitionEnd: a} = this.getProps()
                  , o = this.constraints || {}
                  , l = eachAxis(a => {
                    if (!shouldDrag(a, e, this.currentDirection))
                        return;
                    let l = o && o[a] || {};
                    s && (l = {
                        min: 0,
                        max: 0
                    });
                    let u = {
                        type: "inertia",
                        velocity: i ? t[a] : 0,
                        bounceStiffness: n ? 200 : 1e6,
                        bounceDamping: n ? 40 : 1e7,
                        timeConstant: 750,
                        restDelta: 1,
                        restSpeed: 10,
                        ...r,
                        ...l
                    };
                    return this.startAxisValueAnimation(a, u)
                }
                );
                return Promise.all(l).then(a)
            }
            startAxisValueAnimation(t, e) {
                let i = this.getAxisMotionValue(t);
                return i.start(animateMotionValue(t, i, 0, e))
            }
            stopAnimation() {
                eachAxis(t => this.getAxisMotionValue(t).stop())
            }
            getAxisMotionValue(t) {
                let e = "_drag" + t.toUpperCase()
                  , i = this.visualElement.getProps()
                  , n = i[e];
                return n || this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0)
            }
            snapToCursor(t) {
                eachAxis(e => {
                    let {drag: i} = this.getProps();
                    if (!shouldDrag(e, i, this.currentDirection))
                        return;
                    let {projection: n} = this.visualElement
                      , r = this.getAxisMotionValue(e);
                    if (n && n.layout) {
                        let {min: i, max: s} = n.layout.layoutBox[e];
                        r.set(t[e] - (0,
                        tv.C)(i, s, .5))
                    }
                }
                )
            }
            scalePositionWithinConstraints() {
                if (!this.visualElement.current)
                    return;
                let {drag: t, dragConstraints: e} = this.getProps()
                  , {projection: i} = this.visualElement;
                if (!isRefObject(e) || !i || !this.constraints)
                    return;
                this.stopAnimation();
                let n = {
                    x: 0,
                    y: 0
                };
                eachAxis(t => {
                    let e = this.getAxisMotionValue(t);
                    if (e) {
                        let i = e.get();
                        n[t] = function(t, e) {
                            let i = .5
                              , n = calcLength(t)
                              , r = calcLength(e);
                            return r > n ? i = (0,
                            ty.Y)(e.min, e.max - n, t.min) : n > r && (i = (0,
                            ty.Y)(t.min, t.max - r, e.min)),
                            (0,
                            tx.u)(0, 1, i)
                        }({
                            min: i,
                            max: i
                        }, this.constraints[t])
                    }
                }
                );
                let {transformTemplate: r} = this.visualElement.getProps();
                this.visualElement.current.style.transform = r ? r({}, "") : "none",
                i.root && i.root.updateScroll(),
                i.updateLayout(),
                this.resolveConstraints(),
                eachAxis(e => {
                    if (!shouldDrag(e, t, null))
                        return;
                    let i = this.getAxisMotionValue(e)
                      , {min: r, max: s} = this.constraints[e];
                    i.set((0,
                    tv.C)(r, s, n[e]))
                }
                )
            }
            addListeners() {
                if (!this.visualElement.current)
                    return;
                tA.set(this.visualElement, this);
                let t = this.visualElement.current
                  , e = addPointerEvent(t, "pointerdown", t => {
                    let {drag: e, dragListener: i=!0} = this.getProps();
                    e && i && this.start(t)
                }
                )
                  , measureDragConstraints = () => {
                    let {dragConstraints: t} = this.getProps();
                    isRefObject(t) && (this.constraints = this.resolveRefConstraints())
                }
                  , {projection: i} = this.visualElement
                  , n = i.addEventListener("measure", measureDragConstraints);
                i && !i.layout && (i.root && i.root.updateScroll(),
                i.updateLayout()),
                measureDragConstraints();
                let r = addDomEvent(window, "resize", () => this.scalePositionWithinConstraints())
                  , s = i.addEventListener("didUpdate", ({delta: t, hasLayoutChanged: e}) => {
                    this.isDragging && e && (eachAxis(e => {
                        let i = this.getAxisMotionValue(e);
                        i && (this.originPoint[e] += t[e].translate,
                        i.set(i.get() + t[e].translate))
                    }
                    ),
                    this.visualElement.render())
                }
                );
                return () => {
                    r(),
                    e(),
                    n(),
                    s && s()
                }
            }
            getProps() {
                let t = this.visualElement.getProps()
                  , {drag: e=!1, dragDirectionLock: i=!1, dragPropagation: n=!1, dragConstraints: r=!1, dragElastic: s=.35, dragMomentum: a=!0} = t;
                return {
                    ...t,
                    drag: e,
                    dragDirectionLock: i,
                    dragPropagation: n,
                    dragConstraints: r,
                    dragElastic: s,
                    dragMomentum: a
                }
            }
        }
        ;
        function shouldDrag(t, e, i) {
            return (!0 === e || e === t) && (null === i || i === t)
        }
        let asyncHandler = t => (e, i) => {
            t && O.Wi.update( () => t(e, i))
        }
          , tb = {
            hasAnimatedSinceResize: !0,
            hasEverUpdated: !1
        };
        function pixelsToPercent(t, e) {
            return e.max === e.min ? 0 : t / (e.max - e.min) * 100
        }
        let tV = {
            correct: (t, e) => {
                if (!e.target)
                    return t;
                if ("string" == typeof t) {
                    if (!E.px.test(t))
                        return t;
                    t = parseFloat(t)
                }
                let i = pixelsToPercent(t, e.target.x)
                  , n = pixelsToPercent(t, e.target.y);
                return `${i}% ${n}%`
            }
        };
        let MeasureLayoutWithContext = class MeasureLayoutWithContext extends a.Component {
            componentDidMount() {
                let {visualElement: t, layoutGroup: e, switchLayoutGroup: i, layoutId: n} = this.props
                  , {projection: r} = t;
                Object.assign(T, tS),
                r && (e.group && e.group.add(r),
                i && i.register && n && i.register(r),
                r.root.didUpdate(),
                r.addEventListener("animationComplete", () => {
                    this.safeToRemove()
                }
                ),
                r.setOptions({
                    ...r.options,
                    onExitComplete: () => this.safeToRemove()
                })),
                tb.hasEverUpdated = !0
            }
            getSnapshotBeforeUpdate(t) {
                let {layoutDependency: e, visualElement: i, drag: n, isPresent: r} = this.props
                  , s = i.projection;
                return s && (s.isPresent = r,
                n || t.layoutDependency !== e || void 0 === e ? s.willUpdate() : this.safeToRemove(),
                t.isPresent === r || (r ? s.promote() : s.relegate() || O.Wi.postRender( () => {
                    let t = s.getStack();
                    t && t.members.length || this.safeToRemove()
                }
                ))),
                null
            }
            componentDidUpdate() {
                let {projection: t} = this.props.visualElement;
                t && (t.root.didUpdate(),
                queueMicrotask( () => {
                    !t.currentAnimation && t.isLead() && this.safeToRemove()
                }
                ))
            }
            componentWillUnmount() {
                let {visualElement: t, layoutGroup: e, switchLayoutGroup: i} = this.props
                  , {projection: n} = t;
                n && (n.scheduleCheckAfterUnmount(),
                e && e.group && e.group.remove(n),
                i && i.deregister && i.deregister(n))
            }
            safeToRemove() {
                let {safeToRemove: t} = this.props;
                t && t()
            }
            render() {
                return null
            }
        }
        ;
        function MeasureLayout(t) {
            let[e,i] = function() {
                let t = (0,
                a.useContext)(u);
                if (null === t)
                    return [!0, null];
                let {isPresent: e, onExitComplete: i, register: n} = t
                  , r = (0,
                a.useId)();
                return (0,
                a.useEffect)( () => n(r), []),
                !e && i ? [!1, () => i && i(r)] : [!0]
            }()
              , n = (0,
            a.useContext)(y);
            return a.createElement(MeasureLayoutWithContext, {
                ...t,
                layoutGroup: n,
                switchLayoutGroup: (0,
                a.useContext)(v),
                isPresent: e,
                safeToRemove: i
            })
        }
        let tS = {
            borderRadius: {
                ...tV,
                applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
            },
            borderTopLeftRadius: tV,
            borderTopRightRadius: tV,
            borderBottomLeftRadius: tV,
            borderBottomRightRadius: tV,
            boxShadow: {
                correct: (t, {treeScale: e, projectionDelta: i}) => {
                    let n = tr.P.parse(t);
                    if (n.length > 5)
                        return t;
                    let r = tr.P.createTransformer(t)
                      , s = "number" != typeof n[0] ? 1 : 0
                      , a = i.x.scale * e.x
                      , o = i.y.scale * e.y;
                    n[0 + s] /= a,
                    n[1 + s] /= o;
                    let l = (0,
                    tv.C)(a, o, .5);
                    return "number" == typeof n[2 + s] && (n[2 + s] /= l),
                    "number" == typeof n[3 + s] && (n[3 + s] /= l),
                    r(n)
                }
            }
        };
        var tD = i(4380)
          , tC = i(5570);
        let tw = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
          , tE = tw.length
          , asNumber = t => "string" == typeof t ? parseFloat(t) : t
          , isPx = t => "number" == typeof t || E.px.test(t);
        function getRadius(t, e) {
            return void 0 !== t[e] ? t[e] : t.borderRadius
        }
        let tM = compress(0, .5, tC.Bn)
          , tk = compress(.5, .95, $.Z);
        function compress(t, e, i) {
            return n => n < t ? 0 : n > e ? 1 : i((0,
            ty.Y)(t, e, n))
        }
        function copyAxisInto(t, e) {
            t.min = e.min,
            t.max = e.max
        }
        function copyBoxInto(t, e) {
            copyAxisInto(t.x, e.x),
            copyAxisInto(t.y, e.y)
        }
        function removePointDelta(t, e, i, n, r) {
            return t -= e,
            t = n + 1 / i * (t - n),
            void 0 !== r && (t = n + 1 / r * (t - n)),
            t
        }
        function removeAxisTransforms(t, e, [i,n,r], s, a) {
            !function(t, e=0, i=1, n=.5, r, s=t, a=t) {
                if (E.aQ.test(e)) {
                    e = parseFloat(e);
                    let t = (0,
                    tv.C)(a.min, a.max, e / 100);
                    e = t - a.min
                }
                if ("number" != typeof e)
                    return;
                let o = (0,
                tv.C)(s.min, s.max, n);
                t === s && (o -= e),
                t.min = removePointDelta(t.min, e, i, o, r),
                t.max = removePointDelta(t.max, e, i, o, r)
            }(t, e[i], e[n], e[r], e.scale, s, a)
        }
        let tR = ["x", "scaleX", "originX"]
          , tB = ["y", "scaleY", "originY"];
        function removeBoxTransforms(t, e, i, n) {
            removeAxisTransforms(t.x, e, tR, i ? i.x : void 0, n ? n.x : void 0),
            removeAxisTransforms(t.y, e, tB, i ? i.y : void 0, n ? n.y : void 0)
        }
        function isAxisDeltaZero(t) {
            return 0 === t.translate && 1 === t.scale
        }
        function isDeltaZero(t) {
            return isAxisDeltaZero(t.x) && isAxisDeltaZero(t.y)
        }
        function boxEqualsRounded(t, e) {
            return Math.round(t.x.min) === Math.round(e.x.min) && Math.round(t.x.max) === Math.round(e.x.max) && Math.round(t.y.min) === Math.round(e.y.min) && Math.round(t.y.max) === Math.round(e.y.max)
        }
        function aspectRatio(t) {
            return calcLength(t.x) / calcLength(t.y)
        }
        var tL = i(1172);
        let NodeStack = class NodeStack {
            constructor() {
                this.members = []
            }
            add(t) {
                (0,
                tL.y4)(this.members, t),
                t.scheduleRender()
            }
            remove(t) {
                if ((0,
                tL.cl)(this.members, t),
                t === this.prevLead && (this.prevLead = void 0),
                t === this.lead) {
                    let t = this.members[this.members.length - 1];
                    t && this.promote(t)
                }
            }
            relegate(t) {
                let e;
                let i = this.members.findIndex(e => t === e);
                if (0 === i)
                    return !1;
                for (let t = i; t >= 0; t--) {
                    let i = this.members[t];
                    if (!1 !== i.isPresent) {
                        e = i;
                        break
                    }
                }
                return !!e && (this.promote(e),
                !0)
            }
            promote(t, e) {
                let i = this.lead;
                if (t !== i && (this.prevLead = i,
                this.lead = t,
                t.show(),
                i)) {
                    i.instance && i.scheduleRender(),
                    t.scheduleRender(),
                    t.resumeFrom = i,
                    e && (t.resumeFrom.preserveOpacity = !0),
                    i.snapshot && (t.snapshot = i.snapshot,
                    t.snapshot.latestValues = i.animationValues || i.latestValues),
                    t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                    let {crossfade: n} = t.options;
                    !1 === n && i.hide()
                }
            }
            exitAnimationComplete() {
                this.members.forEach(t => {
                    let {options: e, resumingFrom: i} = t;
                    e.onExitComplete && e.onExitComplete(),
                    i && i.options.onExitComplete && i.options.onExitComplete()
                }
                )
            }
            scheduleRender() {
                this.members.forEach(t => {
                    t.instance && t.scheduleRender(!1)
                }
                )
            }
            removeLeadSnapshot() {
                this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
            }
        }
        ;
        function buildProjectionTransform(t, e, i) {
            let n = ""
              , r = t.x.translate / e.x
              , s = t.y.translate / e.y;
            if ((r || s) && (n = `translate3d(${r}px, ${s}px, 0) `),
            (1 !== e.x || 1 !== e.y) && (n += `scale(${1 / e.x}, ${1 / e.y}) `),
            i) {
                let {rotate: t, rotateX: e, rotateY: r} = i;
                t && (n += `rotate(${t}deg) `),
                e && (n += `rotateX(${e}deg) `),
                r && (n += `rotateY(${r}deg) `)
            }
            let a = t.x.scale * e.x
              , o = t.y.scale * e.y;
            return (1 !== a || 1 !== o) && (n += `scale(${a}, ${o})`),
            n || "none"
        }
        let compareByDepth = (t, e) => t.depth - e.depth;
        let FlatTree = class FlatTree {
            constructor() {
                this.children = [],
                this.isDirty = !1
            }
            add(t) {
                (0,
                tL.y4)(this.children, t),
                this.isDirty = !0
            }
            remove(t) {
                (0,
                tL.cl)(this.children, t),
                this.isDirty = !0
            }
            forEach(t) {
                this.isDirty && this.children.sort(compareByDepth),
                this.isDirty = !1,
                this.children.forEach(t)
            }
        }
        ;
        let tF = ["", "X", "Y", "Z"]
          , tj = 0
          , tO = {
            type: "projectionFrame",
            totalNodes: 0,
            resolvedTargetDeltas: 0,
            recalculatedProjection: 0
        };
        function createProjectionNode({attachResizeListener: t, defaultParent: e, measureScroll: i, checkIsScrollRoot: n, resetTransform: r}) {
            return class {
                constructor(t={}, i=null == e ? void 0 : e()) {
                    this.id = tj++,
                    this.animationId = 0,
                    this.children = new Set,
                    this.options = {},
                    this.isTreeAnimating = !1,
                    this.isAnimationBlocked = !1,
                    this.isLayoutDirty = !1,
                    this.isProjectionDirty = !1,
                    this.isSharedProjectionDirty = !1,
                    this.isTransformDirty = !1,
                    this.updateManuallyBlocked = !1,
                    this.updateBlockedByResize = !1,
                    this.isUpdating = !1,
                    this.isSVG = !1,
                    this.needsReset = !1,
                    this.shouldResetTransform = !1,
                    this.treeScale = {
                        x: 1,
                        y: 1
                    },
                    this.eventHandlers = new Map,
                    this.hasTreeAnimated = !1,
                    this.updateScheduled = !1,
                    this.checkUpdateFailed = () => {
                        this.isUpdating && (this.isUpdating = !1,
                        this.clearAllSnapshots())
                    }
                    ,
                    this.updateProjection = () => {
                        tO.totalNodes = tO.resolvedTargetDeltas = tO.recalculatedProjection = 0,
                        this.nodes.forEach(propagateDirtyNodes),
                        this.nodes.forEach(resolveTargetDelta),
                        this.nodes.forEach(calcProjection),
                        this.nodes.forEach(cleanDirtyNodes),
                        window.MotionDebug && window.MotionDebug.record(tO)
                    }
                    ,
                    this.hasProjected = !1,
                    this.isVisible = !0,
                    this.animationProgress = 0,
                    this.sharedNodes = new Map,
                    this.latestValues = t,
                    this.root = i ? i.root || i : this,
                    this.path = i ? [...i.path, i] : [],
                    this.parent = i,
                    this.depth = i ? i.depth + 1 : 0;
                    for (let t = 0; t < this.path.length; t++)
                        this.path[t].shouldResetTransform = !0;
                    this.root === this && (this.nodes = new FlatTree)
                }
                addEventListener(t, e) {
                    return this.eventHandlers.has(t) || this.eventHandlers.set(t, new tD.L),
                    this.eventHandlers.get(t).add(e)
                }
                notifyListeners(t, ...e) {
                    let i = this.eventHandlers.get(t);
                    i && i.notify(...e)
                }
                hasListeners(t) {
                    return this.eventHandlers.has(t)
                }
                mount(e, i=this.root.hasTreeAnimated) {
                    if (this.instance)
                        return;
                    this.isSVG = e instanceof SVGElement && "svg" !== e.tagName,
                    this.instance = e;
                    let {layoutId: n, layout: r, visualElement: s} = this.options;
                    if (s && !s.current && s.mount(e),
                    this.root.nodes.add(this),
                    this.parent && this.parent.children.add(this),
                    i && (r || n) && (this.isLayoutDirty = !0),
                    t) {
                        let i;
                        let resizeUnblockUpdate = () => this.root.updateBlockedByResize = !1;
                        t(e, () => {
                            this.root.updateBlockedByResize = !0,
                            i && i(),
                            i = function(t, e) {
                                let i = performance.now()
                                  , checkElapsed = ({timestamp: n}) => {
                                    let r = n - i;
                                    r >= e && ((0,
                                    O.Pn)(checkElapsed),
                                    t(r - e))
                                }
                                ;
                                return O.Wi.read(checkElapsed, !0),
                                () => (0,
                                O.Pn)(checkElapsed)
                            }(resizeUnblockUpdate, 250),
                            tb.hasAnimatedSinceResize && (tb.hasAnimatedSinceResize = !1,
                            this.nodes.forEach(finishAnimation))
                        }
                        )
                    }
                    n && this.root.registerSharedNode(n, this),
                    !1 !== this.options.animate && s && (n || r) && this.addEventListener("didUpdate", ({delta: t, hasLayoutChanged: e, hasRelativeTargetChanged: i, layout: n}) => {
                        if (this.isTreeAnimationBlocked()) {
                            this.target = void 0,
                            this.relativeTarget = void 0;
                            return
                        }
                        let r = this.options.transition || s.getDefaultTransition() || tI
                          , {onLayoutAnimationStart: a, onLayoutAnimationComplete: o} = s.getProps()
                          , l = !this.targetLayout || !boxEqualsRounded(this.targetLayout, n) || i
                          , u = !e && i;
                        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || u || e && (l || !this.currentAnimation)) {
                            this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                            this.resumingFrom.resumingFrom = void 0),
                            this.setAnimationOrigin(t, u);
                            let e = {
                                ...getValueTransition(r, "layout"),
                                onPlay: a,
                                onComplete: o
                            };
                            (s.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0,
                            e.type = !1),
                            this.startAnimation(e)
                        } else
                            e || finishAnimation(this),
                            this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                        this.targetLayout = n
                    }
                    )
                }
                unmount() {
                    this.options.layoutId && this.willUpdate(),
                    this.root.nodes.remove(this);
                    let t = this.getStack();
                    t && t.remove(this),
                    this.parent && this.parent.children.delete(this),
                    this.instance = void 0,
                    (0,
                    O.Pn)(this.updateProjection)
                }
                blockUpdate() {
                    this.updateManuallyBlocked = !0
                }
                unblockUpdate() {
                    this.updateManuallyBlocked = !1
                }
                isUpdateBlocked() {
                    return this.updateManuallyBlocked || this.updateBlockedByResize
                }
                isTreeAnimationBlocked() {
                    return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                }
                startUpdate() {
                    !this.isUpdateBlocked() && (this.isUpdating = !0,
                    this.nodes && this.nodes.forEach(resetRotation),
                    this.animationId++)
                }
                getTransformTemplate() {
                    let {visualElement: t} = this.options;
                    return t && t.getProps().transformTemplate
                }
                willUpdate(t=!0) {
                    if (this.root.hasTreeAnimated = !0,
                    this.root.isUpdateBlocked()) {
                        this.options.onExitComplete && this.options.onExitComplete();
                        return
                    }
                    if (this.root.isUpdating || this.root.startUpdate(),
                    this.isLayoutDirty)
                        return;
                    this.isLayoutDirty = !0;
                    for (let t = 0; t < this.path.length; t++) {
                        let e = this.path[t];
                        e.shouldResetTransform = !0,
                        e.updateScroll("snapshot"),
                        e.options.layoutRoot && e.willUpdate(!1)
                    }
                    let {layoutId: e, layout: i} = this.options;
                    if (void 0 === e && !i)
                        return;
                    let n = this.getTransformTemplate();
                    this.prevTransformTemplateValue = n ? n(this.latestValues, "") : void 0,
                    this.updateSnapshot(),
                    t && this.notifyListeners("willUpdate")
                }
                update() {
                    this.updateScheduled = !1;
                    let t = this.isUpdateBlocked();
                    if (t) {
                        this.unblockUpdate(),
                        this.clearAllSnapshots(),
                        this.nodes.forEach(clearMeasurements);
                        return
                    }
                    this.isUpdating || this.nodes.forEach(clearIsLayoutDirty),
                    this.isUpdating = !1,
                    this.nodes.forEach(resetTransformStyle),
                    this.nodes.forEach(updateLayout),
                    this.nodes.forEach(notifyLayoutUpdate),
                    this.clearAllSnapshots();
                    let e = performance.now();
                    O.frameData.delta = (0,
                    tx.u)(0, 1e3 / 60, e - O.frameData.timestamp),
                    O.frameData.timestamp = e,
                    O.frameData.isProcessing = !0,
                    O.S6.update.process(O.frameData),
                    O.S6.preRender.process(O.frameData),
                    O.S6.render.process(O.frameData),
                    O.frameData.isProcessing = !1
                }
                didUpdate() {
                    this.updateScheduled || (this.updateScheduled = !0,
                    queueMicrotask( () => this.update()))
                }
                clearAllSnapshots() {
                    this.nodes.forEach(clearSnapshot),
                    this.sharedNodes.forEach(removeLeadSnapshots)
                }
                scheduleUpdateProjection() {
                    O.Wi.preRender(this.updateProjection, !1, !0)
                }
                scheduleCheckAfterUnmount() {
                    O.Wi.postRender( () => {
                        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                    }
                    )
                }
                updateSnapshot() {
                    !this.snapshot && this.instance && (this.snapshot = this.measure())
                }
                updateLayout() {
                    if (!this.instance || (this.updateScroll(),
                    !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                        return;
                    if (this.resumeFrom && !this.resumeFrom.instance)
                        for (let t = 0; t < this.path.length; t++) {
                            let e = this.path[t];
                            e.updateScroll()
                        }
                    let t = this.layout;
                    this.layout = this.measure(!1),
                    this.layoutCorrected = createBox(),
                    this.isLayoutDirty = !1,
                    this.projectionDelta = void 0,
                    this.notifyListeners("measure", this.layout.layoutBox);
                    let {visualElement: e} = this.options;
                    e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
                }
                updateScroll(t="measure") {
                    let e = !!(this.options.layoutScroll && this.instance);
                    this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1),
                    e && (this.scroll = {
                        animationId: this.root.animationId,
                        phase: t,
                        isRoot: n(this.instance),
                        offset: i(this.instance)
                    })
                }
                resetTransform() {
                    if (!r)
                        return;
                    let t = this.isLayoutDirty || this.shouldResetTransform
                      , e = this.projectionDelta && !isDeltaZero(this.projectionDelta)
                      , i = this.getTransformTemplate()
                      , n = i ? i(this.latestValues, "") : void 0
                      , s = n !== this.prevTransformTemplateValue;
                    t && (e || hasTransform(this.latestValues) || s) && (r(this.instance, n),
                    this.shouldResetTransform = !1,
                    this.scheduleRender())
                }
                measure(t=!0) {
                    var e;
                    let i = this.measurePageBox()
                      , n = this.removeElementScroll(i);
                    return t && (n = this.removeTransform(n)),
                    roundAxis((e = n).x),
                    roundAxis(e.y),
                    {
                        animationId: this.root.animationId,
                        measuredBox: i,
                        layoutBox: n,
                        latestValues: {},
                        source: this.id
                    }
                }
                measurePageBox() {
                    let {visualElement: t} = this.options;
                    if (!t)
                        return createBox();
                    let e = t.measureViewportBox()
                      , {scroll: i} = this.root;
                    return i && (translateAxis(e.x, i.offset.x),
                    translateAxis(e.y, i.offset.y)),
                    e
                }
                removeElementScroll(t) {
                    let e = createBox();
                    copyBoxInto(e, t);
                    for (let i = 0; i < this.path.length; i++) {
                        let n = this.path[i]
                          , {scroll: r, options: s} = n;
                        if (n !== this.root && r && s.layoutScroll) {
                            if (r.isRoot) {
                                copyBoxInto(e, t);
                                let {scroll: i} = this.root;
                                i && (translateAxis(e.x, -i.offset.x),
                                translateAxis(e.y, -i.offset.y))
                            }
                            translateAxis(e.x, r.offset.x),
                            translateAxis(e.y, r.offset.y)
                        }
                    }
                    return e
                }
                applyTransform(t, e=!1) {
                    let i = createBox();
                    copyBoxInto(i, t);
                    for (let t = 0; t < this.path.length; t++) {
                        let n = this.path[t];
                        !e && n.options.layoutScroll && n.scroll && n !== n.root && transformBox(i, {
                            x: -n.scroll.offset.x,
                            y: -n.scroll.offset.y
                        }),
                        hasTransform(n.latestValues) && transformBox(i, n.latestValues)
                    }
                    return hasTransform(this.latestValues) && transformBox(i, this.latestValues),
                    i
                }
                removeTransform(t) {
                    let e = createBox();
                    copyBoxInto(e, t);
                    for (let t = 0; t < this.path.length; t++) {
                        let i = this.path[t];
                        if (!i.instance || !hasTransform(i.latestValues))
                            continue;
                        hasScale(i.latestValues) && i.updateSnapshot();
                        let n = createBox()
                          , r = i.measurePageBox();
                        copyBoxInto(n, r),
                        removeBoxTransforms(e, i.latestValues, i.snapshot ? i.snapshot.layoutBox : void 0, n)
                    }
                    return hasTransform(this.latestValues) && removeBoxTransforms(e, this.latestValues),
                    e
                }
                setTargetDelta(t) {
                    this.targetDelta = t,
                    this.root.scheduleUpdateProjection(),
                    this.isProjectionDirty = !0
                }
                setOptions(t) {
                    this.options = {
                        ...this.options,
                        ...t,
                        crossfade: void 0 === t.crossfade || t.crossfade
                    }
                }
                clearMeasurements() {
                    this.scroll = void 0,
                    this.layout = void 0,
                    this.snapshot = void 0,
                    this.prevTransformTemplateValue = void 0,
                    this.targetDelta = void 0,
                    this.target = void 0,
                    this.isLayoutDirty = !1
                }
                forceRelativeParentToResolveTarget() {
                    this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== O.frameData.timestamp && this.relativeParent.resolveTargetDelta(!0)
                }
                resolveTargetDelta(t=!1) {
                    var e, i, n, r;
                    let s = this.getLead();
                    this.isProjectionDirty || (this.isProjectionDirty = s.isProjectionDirty),
                    this.isTransformDirty || (this.isTransformDirty = s.isTransformDirty),
                    this.isSharedProjectionDirty || (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
                    let a = !!this.resumingFrom || this !== s
                      , o = !(t || a && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty) || this.attemptToResolveRelativeTarget);
                    if (o)
                        return;
                    let {layout: l, layoutId: u} = this.options;
                    if (this.layout && (l || u)) {
                        if (this.resolvedRelativeTargetAt = O.frameData.timestamp,
                        !this.targetDelta && !this.relativeTarget) {
                            let t = this.getClosestProjectingParent();
                            t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t,
                            this.forceRelativeParentToResolveTarget(),
                            this.relativeTarget = createBox(),
                            this.relativeTargetOrigin = createBox(),
                            calcRelativePosition(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox),
                            copyBoxInto(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                        }
                        if (this.relativeTarget || this.targetDelta) {
                            if ((this.target || (this.target = createBox(),
                            this.targetWithTransforms = createBox()),
                            this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) ? (this.forceRelativeParentToResolveTarget(),
                            i = this.target,
                            n = this.relativeTarget,
                            r = this.relativeParent.target,
                            calcRelativeAxis(i.x, n.x, r.x),
                            calcRelativeAxis(i.y, n.y, r.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : copyBoxInto(this.target, this.layout.layoutBox),
                            applyBoxDelta(this.target, this.targetDelta)) : copyBoxInto(this.target, this.layout.layoutBox),
                            this.attemptToResolveRelativeTarget) {
                                this.attemptToResolveRelativeTarget = !1;
                                let t = this.getClosestProjectingParent();
                                t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t,
                                this.forceRelativeParentToResolveTarget(),
                                this.relativeTarget = createBox(),
                                this.relativeTargetOrigin = createBox(),
                                calcRelativePosition(this.relativeTargetOrigin, this.target, t.target),
                                copyBoxInto(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            tO.resolvedTargetDeltas++
                        }
                    }
                }
                getClosestProjectingParent() {
                    return !this.parent || hasScale(this.parent.latestValues) || has2DTranslate(this.parent.latestValues) ? void 0 : this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
                }
                isProjecting() {
                    return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                }
                calcProjection() {
                    var t;
                    let e = this.getLead()
                      , i = !!this.resumingFrom || this !== e
                      , n = !0;
                    if ((this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty)) && (n = !1),
                    i && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1),
                    this.resolvedRelativeTargetAt === O.frameData.timestamp && (n = !1),
                    n)
                        return;
                    let {layout: r, layoutId: s} = this.options;
                    if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
                    this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
                    !this.layout || !(r || s))
                        return;
                    copyBoxInto(this.layoutCorrected, this.layout.layoutBox);
                    let a = this.treeScale.x
                      , o = this.treeScale.y;
                    !function(t, e, i, n=!1) {
                        let r, s;
                        let a = i.length;
                        if (a) {
                            e.x = e.y = 1;
                            for (let o = 0; o < a; o++) {
                                s = (r = i[o]).projectionDelta;
                                let a = r.instance;
                                (!a || !a.style || "contents" !== a.style.display) && (n && r.options.layoutScroll && r.scroll && r !== r.root && transformBox(t, {
                                    x: -r.scroll.offset.x,
                                    y: -r.scroll.offset.y
                                }),
                                s && (e.x *= s.x.scale,
                                e.y *= s.y.scale,
                                applyBoxDelta(t, s)),
                                n && hasTransform(r.latestValues) && transformBox(t, r.latestValues))
                            }
                            e.x = snapToDefault(e.x),
                            e.y = snapToDefault(e.y)
                        }
                    }(this.layoutCorrected, this.treeScale, this.path, i),
                    e.layout && !e.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (e.target = e.layout.layoutBox);
                    let {target: l} = e;
                    if (!l) {
                        this.projectionTransform && (this.projectionDelta = createDelta(),
                        this.projectionTransform = "none",
                        this.scheduleRender());
                        return
                    }
                    this.projectionDelta || (this.projectionDelta = createDelta(),
                    this.projectionDeltaWithTransform = createDelta());
                    let u = this.projectionTransform;
                    calcBoxDelta(this.projectionDelta, this.layoutCorrected, l, this.latestValues),
                    this.projectionTransform = buildProjectionTransform(this.projectionDelta, this.treeScale),
                    (this.projectionTransform !== u || this.treeScale.x !== a || this.treeScale.y !== o) && (this.hasProjected = !0,
                    this.scheduleRender(),
                    this.notifyListeners("projectionUpdate", l)),
                    tO.recalculatedProjection++
                }
                hide() {
                    this.isVisible = !1
                }
                show() {
                    this.isVisible = !0
                }
                scheduleRender(t=!0) {
                    if (this.options.scheduleRender && this.options.scheduleRender(),
                    t) {
                        let t = this.getStack();
                        t && t.scheduleRender()
                    }
                    this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                }
                setAnimationOrigin(t, e=!1) {
                    let i;
                    let n = this.snapshot
                      , r = n ? n.latestValues : {}
                      , s = {
                        ...this.latestValues
                    }
                      , a = createDelta();
                    this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0),
                    this.attemptToResolveRelativeTarget = !e;
                    let o = createBox()
                      , l = n ? n.source : void 0
                      , u = this.layout ? this.layout.source : void 0
                      , c = l !== u
                      , h = this.getStack()
                      , d = !h || h.members.length <= 1
                      , p = !!(c && !d && !0 === this.options.crossfade && !this.path.some(hasOpacityCrossfade));
                    this.animationProgress = 0,
                    this.mixTargetDelta = e => {
                        let n = e / 1e3;
                        if (mixAxisDelta(a.x, t.x, n),
                        mixAxisDelta(a.y, t.y, n),
                        this.setTargetDelta(a),
                        this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                            var l, u, h, m;
                            calcRelativePosition(o, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                            h = this.relativeTarget,
                            m = this.relativeTargetOrigin,
                            mixAxis(h.x, m.x, o.x, n),
                            mixAxis(h.y, m.y, o.y, n),
                            i && (l = this.relativeTarget,
                            u = i,
                            l.x.min === u.x.min && l.x.max === u.x.max && l.y.min === u.y.min && l.y.max === u.y.max) && (this.isProjectionDirty = !1),
                            i || (i = createBox()),
                            copyBoxInto(i, this.relativeTarget)
                        }
                        c && (this.animationValues = s,
                        function(t, e, i, n, r, s) {
                            r ? (t.opacity = (0,
                            tv.C)(0, void 0 !== i.opacity ? i.opacity : 1, tM(n)),
                            t.opacityExit = (0,
                            tv.C)(void 0 !== e.opacity ? e.opacity : 1, 0, tk(n))) : s && (t.opacity = (0,
                            tv.C)(void 0 !== e.opacity ? e.opacity : 1, void 0 !== i.opacity ? i.opacity : 1, n));
                            for (let r = 0; r < tE; r++) {
                                let s = `border${tw[r]}Radius`
                                  , a = getRadius(e, s)
                                  , o = getRadius(i, s);
                                if (void 0 === a && void 0 === o)
                                    continue;
                                a || (a = 0),
                                o || (o = 0);
                                let l = 0 === a || 0 === o || isPx(a) === isPx(o);
                                l ? (t[s] = Math.max((0,
                                tv.C)(asNumber(a), asNumber(o), n), 0),
                                (E.aQ.test(o) || E.aQ.test(a)) && (t[s] += "%")) : t[s] = o
                            }
                            (e.rotate || i.rotate) && (t.rotate = (0,
                            tv.C)(e.rotate || 0, i.rotate || 0, n))
                        }(s, r, this.latestValues, n, p, d)),
                        this.root.scheduleUpdateProjection(),
                        this.scheduleRender(),
                        this.animationProgress = n
                    }
                    ,
                    this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
                }
                startAnimation(t) {
                    this.notifyListeners("animationStart"),
                    this.currentAnimation && this.currentAnimation.stop(),
                    this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
                    this.pendingAnimation && ((0,
                    O.Pn)(this.pendingAnimation),
                    this.pendingAnimation = void 0),
                    this.pendingAnimation = O.Wi.update( () => {
                        tb.hasAnimatedSinceResize = !0,
                        this.currentAnimation = function(t, e, i) {
                            let n = (0,
                            V.i)(t) ? t : (0,
                            th.BX)(t);
                            return n.start(animateMotionValue("", n, 1e3, i)),
                            n.animation
                        }(0, 0, {
                            ...t,
                            onUpdate: e => {
                                this.mixTargetDelta(e),
                                t.onUpdate && t.onUpdate(e)
                            }
                            ,
                            onComplete: () => {
                                t.onComplete && t.onComplete(),
                                this.completeAnimation()
                            }
                        }),
                        this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                        this.pendingAnimation = void 0
                    }
                    )
                }
                completeAnimation() {
                    this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
                    this.resumingFrom.preserveOpacity = void 0);
                    let t = this.getStack();
                    t && t.exitAnimationComplete(),
                    this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
                    this.notifyListeners("animationComplete")
                }
                finishAnimation() {
                    this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3),
                    this.currentAnimation.stop()),
                    this.completeAnimation()
                }
                applyTransformsToTarget() {
                    let t = this.getLead()
                      , {targetWithTransforms: e, target: i, layout: n, latestValues: r} = t;
                    if (e && i && n) {
                        if (this !== t && this.layout && n && shouldAnimatePositionOnly(this.options.animationType, this.layout.layoutBox, n.layoutBox)) {
                            i = this.target || createBox();
                            let e = calcLength(this.layout.layoutBox.x);
                            i.x.min = t.target.x.min,
                            i.x.max = i.x.min + e;
                            let n = calcLength(this.layout.layoutBox.y);
                            i.y.min = t.target.y.min,
                            i.y.max = i.y.min + n
                        }
                        copyBoxInto(e, i),
                        transformBox(e, r),
                        calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, e, r)
                    }
                }
                registerSharedNode(t, e) {
                    this.sharedNodes.has(t) || this.sharedNodes.set(t, new NodeStack);
                    let i = this.sharedNodes.get(t);
                    i.add(e);
                    let n = e.options.initialPromotionConfig;
                    e.promote({
                        transition: n ? n.transition : void 0,
                        preserveFollowOpacity: n && n.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(e) : void 0
                    })
                }
                isLead() {
                    let t = this.getStack();
                    return !t || t.lead === this
                }
                getLead() {
                    var t;
                    let {layoutId: e} = this.options;
                    return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                }
                getPrevLead() {
                    var t;
                    let {layoutId: e} = this.options;
                    return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                }
                getStack() {
                    let {layoutId: t} = this.options;
                    if (t)
                        return this.root.sharedNodes.get(t)
                }
                promote({needsReset: t, transition: e, preserveFollowOpacity: i}={}) {
                    let n = this.getStack();
                    n && n.promote(this, i),
                    t && (this.projectionDelta = void 0,
                    this.needsReset = !0),
                    e && this.setOptions({
                        transition: e
                    })
                }
                relegate() {
                    let t = this.getStack();
                    return !!t && t.relegate(this)
                }
                resetRotation() {
                    let {visualElement: t} = this.options;
                    if (!t)
                        return;
                    let e = !1
                      , {latestValues: i} = t;
                    if ((i.rotate || i.rotateX || i.rotateY || i.rotateZ) && (e = !0),
                    !e)
                        return;
                    let n = {};
                    for (let e = 0; e < tF.length; e++) {
                        let r = "rotate" + tF[e];
                        i[r] && (n[r] = i[r],
                        t.setStaticValue(r, 0))
                    }
                    for (let e in t.render(),
                    n)
                        t.setStaticValue(e, n[e]);
                    t.scheduleRender()
                }
                getProjectionStyles(t={}) {
                    var e, i;
                    let n = {};
                    if (!this.instance || this.isSVG)
                        return n;
                    if (!this.isVisible)
                        return {
                            visibility: "hidden"
                        };
                    n.visibility = "";
                    let r = this.getTransformTemplate();
                    if (this.needsReset)
                        return this.needsReset = !1,
                        n.opacity = "",
                        n.pointerEvents = resolveMotionValue(t.pointerEvents) || "",
                        n.transform = r ? r(this.latestValues, "") : "none",
                        n;
                    let s = this.getLead();
                    if (!this.projectionDelta || !this.layout || !s.target) {
                        let e = {};
                        return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1,
                        e.pointerEvents = resolveMotionValue(t.pointerEvents) || ""),
                        this.hasProjected && !hasTransform(this.latestValues) && (e.transform = r ? r({}, "") : "none",
                        this.hasProjected = !1),
                        e
                    }
                    let a = s.animationValues || s.latestValues;
                    this.applyTransformsToTarget(),
                    n.transform = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, a),
                    r && (n.transform = r(a, n.transform));
                    let {x: o, y: l} = this.projectionDelta;
                    for (let t in n.transformOrigin = `${100 * o.origin}% ${100 * l.origin}% 0`,
                    s.animationValues ? n.opacity = s === this ? null !== (i = null !== (e = a.opacity) && void 0 !== e ? e : this.latestValues.opacity) && void 0 !== i ? i : 1 : this.preserveOpacity ? this.latestValues.opacity : a.opacityExit : n.opacity = s === this ? void 0 !== a.opacity ? a.opacity : "" : void 0 !== a.opacityExit ? a.opacityExit : 0,
                    T) {
                        if (void 0 === a[t])
                            continue;
                        let {correct: e, applyTo: i} = T[t]
                          , r = "none" === n.transform ? a[t] : e(a[t], s);
                        if (i) {
                            let t = i.length;
                            for (let e = 0; e < t; e++)
                                n[i[e]] = r
                        } else
                            n[t] = r
                    }
                    return this.options.layoutId && (n.pointerEvents = s === this ? resolveMotionValue(t.pointerEvents) || "" : "none"),
                    n
                }
                clearSnapshot() {
                    this.resumeFrom = this.snapshot = void 0
                }
                resetTree() {
                    this.root.nodes.forEach(t => {
                        var e;
                        return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                    }
                    ),
                    this.root.nodes.forEach(clearMeasurements),
                    this.root.sharedNodes.clear()
                }
            }
        }
        function updateLayout(t) {
            t.updateLayout()
        }
        function notifyLayoutUpdate(t) {
            var e;
            let i = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
            if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
                let {layoutBox: e, measuredBox: n} = t.layout
                  , {animationType: r} = t.options
                  , s = i.source !== t.layout.source;
                "size" === r ? eachAxis(t => {
                    let n = s ? i.measuredBox[t] : i.layoutBox[t]
                      , r = calcLength(n);
                    n.min = e[t].min,
                    n.max = n.min + r
                }
                ) : shouldAnimatePositionOnly(r, i.layoutBox, e) && eachAxis(n => {
                    let r = s ? i.measuredBox[n] : i.layoutBox[n]
                      , a = calcLength(e[n]);
                    r.max = r.min + a,
                    t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0,
                    t.relativeTarget[n].max = t.relativeTarget[n].min + a)
                }
                );
                let a = createDelta();
                calcBoxDelta(a, e, i.layoutBox);
                let o = createDelta();
                s ? calcBoxDelta(o, t.applyTransform(n, !0), i.measuredBox) : calcBoxDelta(o, e, i.layoutBox);
                let l = !isDeltaZero(a)
                  , u = !1;
                if (!t.resumeFrom) {
                    let n = t.getClosestProjectingParent();
                    if (n && !n.resumeFrom) {
                        let {snapshot: r, layout: s} = n;
                        if (r && s) {
                            let a = createBox();
                            calcRelativePosition(a, i.layoutBox, r.layoutBox);
                            let o = createBox();
                            calcRelativePosition(o, e, s.layoutBox),
                            boxEqualsRounded(a, o) || (u = !0),
                            n.options.layoutRoot && (t.relativeTarget = o,
                            t.relativeTargetOrigin = a,
                            t.relativeParent = n)
                        }
                    }
                }
                t.notifyListeners("didUpdate", {
                    layout: e,
                    snapshot: i,
                    delta: o,
                    layoutDelta: a,
                    hasLayoutChanged: l,
                    hasRelativeTargetChanged: u
                })
            } else if (t.isLead()) {
                let {onExitComplete: e} = t.options;
                e && e()
            }
            t.options.transition = void 0
        }
        function propagateDirtyNodes(t) {
            tO.totalNodes++,
            t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)),
            t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
        }
        function cleanDirtyNodes(t) {
            t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
        }
        function clearSnapshot(t) {
            t.clearSnapshot()
        }
        function clearMeasurements(t) {
            t.clearMeasurements()
        }
        function clearIsLayoutDirty(t) {
            t.isLayoutDirty = !1
        }
        function resetTransformStyle(t) {
            let {visualElement: e} = t.options;
            e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"),
            t.resetTransform()
        }
        function finishAnimation(t) {
            t.finishAnimation(),
            t.targetDelta = t.relativeTarget = t.target = void 0,
            t.isProjectionDirty = !0
        }
        function resolveTargetDelta(t) {
            t.resolveTargetDelta()
        }
        function calcProjection(t) {
            t.calcProjection()
        }
        function resetRotation(t) {
            t.resetRotation()
        }
        function removeLeadSnapshots(t) {
            t.removeLeadSnapshot()
        }
        function mixAxisDelta(t, e, i) {
            t.translate = (0,
            tv.C)(e.translate, 0, i),
            t.scale = (0,
            tv.C)(e.scale, 1, i),
            t.origin = e.origin,
            t.originPoint = e.originPoint
        }
        function mixAxis(t, e, i, n) {
            t.min = (0,
            tv.C)(e.min, i.min, n),
            t.max = (0,
            tv.C)(e.max, i.max, n)
        }
        function hasOpacityCrossfade(t) {
            return t.animationValues && void 0 !== t.animationValues.opacityExit
        }
        let tI = {
            duration: .45,
            ease: [.4, 0, .1, 1]
        }
          , userAgentContains = t => "undefined" != typeof navigator && navigator.userAgent.toLowerCase().includes(t)
          , tN = userAgentContains("applewebkit/") && !userAgentContains("chrome/") ? Math.round : $.Z;
        function roundAxis(t) {
            t.min = tN(t.min),
            t.max = tN(t.max)
        }
        function shouldAnimatePositionOnly(t, e, i) {
            return "position" === t || "preserve-aspect" === t && !isNear(aspectRatio(e), aspectRatio(i), .2)
        }
        let tU = createProjectionNode({
            attachResizeListener: (t, e) => addDomEvent(t, "resize", e),
            measureScroll: () => ({
                x: document.documentElement.scrollLeft || document.body.scrollLeft,
                y: document.documentElement.scrollTop || document.body.scrollTop
            }),
            checkIsScrollRoot: () => !0
        })
          , tW = {
            current: void 0
        }
          , tz = createProjectionNode({
            measureScroll: t => ({
                x: t.scrollLeft,
                y: t.scrollTop
            }),
            defaultParent: () => {
                if (!tW.current) {
                    let t = new tU({});
                    t.mount(window),
                    t.setOptions({
                        layoutScroll: !0
                    }),
                    tW.current = t
                }
                return tW.current
            }
            ,
            resetTransform: (t, e) => {
                t.style.transform = void 0 !== e ? e : "none"
            }
            ,
            checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
        })
          , t$ = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
        function getVariableValue(t, e, i=1) {
            (0,
            q.k)(i <= 4, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
            let[n,r] = function(t) {
                let e = t$.exec(t);
                if (!e)
                    return [, ];
                let[,i,n] = e;
                return [i, n]
            }(t);
            if (!n)
                return;
            let s = window.getComputedStyle(e).getPropertyValue(n);
            if (s) {
                let t = s.trim();
                return isNumericalString(t) ? parseFloat(t) : t
            }
            return (0,
            C.tm)(r) ? getVariableValue(r, e, i + 1) : r
        }
        let tH = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"])
          , isPositionalKey = t => tH.has(t)
          , hasPositionalKey = t => Object.keys(t).some(isPositionalKey)
          , isNumOrPxType = t => t === w.Rx || t === E.px
          , getPosFromMatrix = (t, e) => parseFloat(t.split(", ")[e])
          , getTranslateFromMatrix = (t, e) => (i, {transform: n}) => {
            if ("none" === n || !n)
                return 0;
            let r = n.match(/^matrix3d\((.+)\)$/);
            if (r)
                return getPosFromMatrix(r[1], e);
            {
                let e = n.match(/^matrix\((.+)\)$/);
                return e ? getPosFromMatrix(e[1], t) : 0
            }
        }
          , tX = new Set(["x", "y", "z"])
          , tG = A.filter(t => !tX.has(t))
          , tZ = {
            width: ({x: t}, {paddingLeft: e="0", paddingRight: i="0"}) => t.max - t.min - parseFloat(e) - parseFloat(i),
            height: ({y: t}, {paddingTop: e="0", paddingBottom: i="0"}) => t.max - t.min - parseFloat(e) - parseFloat(i),
            top: (t, {top: e}) => parseFloat(e),
            left: (t, {left: e}) => parseFloat(e),
            bottom: ({y: t}, {top: e}) => parseFloat(e) + (t.max - t.min),
            right: ({x: t}, {left: e}) => parseFloat(e) + (t.max - t.min),
            x: getTranslateFromMatrix(4, 13),
            y: getTranslateFromMatrix(5, 14)
        };
        tZ.translateX = tZ.x,
        tZ.translateY = tZ.y;
        let convertChangedValueTypes = (t, e, i) => {
            let n = e.measureViewportBox()
              , r = e.current
              , s = getComputedStyle(r)
              , {display: a} = s
              , o = {};
            "none" === a && e.setStaticValue("display", t.display || "block"),
            i.forEach(t => {
                o[t] = tZ[t](n, s)
            }
            ),
            e.render();
            let l = e.measureViewportBox();
            return i.forEach(i => {
                let n = e.getValue(i);
                n && n.jump(o[i]),
                t[i] = tZ[i](l, s)
            }
            ),
            t
        }
          , checkAndConvertChangedValueTypes = (t, e, i={}, n={}) => {
            e = {
                ...e
            },
            n = {
                ...n
            };
            let r = Object.keys(e).filter(isPositionalKey)
              , s = []
              , a = !1
              , o = [];
            if (r.forEach(r => {
                let l;
                let u = t.getValue(r);
                if (!t.hasValue(r))
                    return;
                let c = i[r]
                  , h = findDimensionValueType(c)
                  , d = e[r];
                if (isKeyframesTarget(d)) {
                    let t = d.length
                      , e = null === d[0] ? 1 : 0;
                    h = findDimensionValueType(c = d[e]);
                    for (let i = e; i < t && null !== d[i]; i++)
                        l ? (0,
                        q.k)(findDimensionValueType(d[i]) === l, "All keyframes must be of the same type") : (l = findDimensionValueType(d[i]),
                        (0,
                        q.k)(l === h || isNumOrPxType(h) && isNumOrPxType(l), "Keyframes must be of the same dimension as the current value"))
                } else
                    l = findDimensionValueType(d);
                if (h !== l) {
                    if (isNumOrPxType(h) && isNumOrPxType(l)) {
                        let t = u.get();
                        "string" == typeof t && u.set(parseFloat(t)),
                        "string" == typeof d ? e[r] = parseFloat(d) : Array.isArray(d) && l === E.px && (e[r] = d.map(parseFloat))
                    } else
                        (null == h ? void 0 : h.transform) && (null == l ? void 0 : l.transform) && (0 === c || 0 === d) ? 0 === c ? u.set(l.transform(c)) : e[r] = h.transform(d) : (a || (s = function(t) {
                            let e = [];
                            return tG.forEach(i => {
                                let n = t.getValue(i);
                                void 0 !== n && (e.push([i, n.get()]),
                                n.set(i.startsWith("scale") ? 1 : 0))
                            }
                            ),
                            e.length && t.render(),
                            e
                        }(t),
                        a = !0),
                        o.push(r),
                        n[r] = void 0 !== n[r] ? n[r] : e[r],
                        u.jump(d))
                }
            }
            ),
            !o.length)
                return {
                    target: e,
                    transitionEnd: n
                };
            {
                let i = o.indexOf("height") >= 0 ? window.pageYOffset : null
                  , r = convertChangedValueTypes(e, t, o);
                return s.length && s.forEach( ([e,i]) => {
                    t.getValue(e).set(i)
                }
                ),
                t.render(),
                g.j && null !== i && window.scrollTo({
                    top: i
                }),
                {
                    target: r,
                    transitionEnd: n
                }
            }
        }
          , parseDomVariant = (t, e, i, n) => {
            var r, s;
            let a = function(t, {...e}, i) {
                let n = t.current;
                if (!(n instanceof Element))
                    return {
                        target: e,
                        transitionEnd: i
                    };
                for (let r in i && (i = {
                    ...i
                }),
                t.values.forEach(t => {
                    let e = t.get();
                    if (!(0,
                    C.tm)(e))
                        return;
                    let i = getVariableValue(e, n);
                    i && t.set(i)
                }
                ),
                e) {
                    let t = e[r];
                    if (!(0,
                    C.tm)(t))
                        continue;
                    let s = getVariableValue(t, n);
                    s && (e[r] = s,
                    i || (i = {}),
                    void 0 === i[r] && (i[r] = t))
                }
                return {
                    target: e,
                    transitionEnd: i
                }
            }(t, e, n);
            return e = a.target,
            n = a.transitionEnd,
            r = e,
            s = n,
            hasPositionalKey(r) ? checkAndConvertChangedValueTypes(t, r, i, s) : {
                target: r,
                transitionEnd: s
            }
        }
          , tq = {
            current: null
        }
          , tY = {
            current: !1
        }
          , t_ = new WeakMap
          , tK = Object.keys(f)
          , tQ = tK.length
          , tJ = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"]
          , t0 = p.length;
        let VisualElement = class VisualElement {
            constructor({parent: t, props: e, presenceContext: i, reducedMotionConfig: n, visualState: r}, s={}) {
                this.current = null,
                this.children = new Set,
                this.isVariantNode = !1,
                this.isControllingVariants = !1,
                this.shouldReduceMotion = null,
                this.values = new Map,
                this.features = {},
                this.valueSubscriptions = new Map,
                this.prevMotionValues = {},
                this.events = {},
                this.propEventSubscriptions = {},
                this.notifyUpdate = () => this.notify("Update", this.latestValues),
                this.render = () => {
                    this.current && (this.triggerBuild(),
                    this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                }
                ,
                this.scheduleRender = () => O.Wi.render(this.render, !1, !0);
                let {latestValues: a, renderState: o} = r;
                this.latestValues = a,
                this.baseTarget = {
                    ...a
                },
                this.initialValues = e.initial ? {
                    ...a
                } : {},
                this.renderState = o,
                this.parent = t,
                this.props = e,
                this.presenceContext = i,
                this.depth = t ? t.depth + 1 : 0,
                this.reducedMotionConfig = n,
                this.options = s,
                this.isControllingVariants = isControllingVariants(e),
                this.isVariantNode = isVariantNode(e),
                this.isVariantNode && (this.variantChildren = new Set),
                this.manuallyAnimateOnMount = !!(t && t.current);
                let {willChange: l, ...u} = this.scrapeMotionValuesFromProps(e, {});
                for (let t in u) {
                    let e = u[t];
                    void 0 !== a[t] && (0,
                    V.i)(e) && (e.set(a[t], !1),
                    isWillChangeMotionValue(l) && l.add(t))
                }
            }
            scrapeMotionValuesFromProps(t, e) {
                return {}
            }
            mount(t) {
                this.current = t,
                t_.set(t, this),
                this.projection && !this.projection.instance && this.projection.mount(t),
                this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
                this.values.forEach( (t, e) => this.bindToMotionValue(e, t)),
                tY.current || function() {
                    if (tY.current = !0,
                    g.j) {
                        if (window.matchMedia) {
                            let t = window.matchMedia("(prefers-reduced-motion)")
                              , setReducedMotionPreferences = () => tq.current = t.matches;
                            t.addListener(setReducedMotionPreferences),
                            setReducedMotionPreferences()
                        } else
                            tq.current = !1
                    }
                }(),
                this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || tq.current),
                this.parent && this.parent.children.add(this),
                this.update(this.props, this.presenceContext)
            }
            unmount() {
                for (let t in t_.delete(this.current),
                this.projection && this.projection.unmount(),
                (0,
                O.Pn)(this.notifyUpdate),
                (0,
                O.Pn)(this.render),
                this.valueSubscriptions.forEach(t => t()),
                this.removeFromVariantTree && this.removeFromVariantTree(),
                this.parent && this.parent.children.delete(this),
                this.events)
                    this.events[t].clear();
                for (let t in this.features)
                    this.features[t].unmount();
                this.current = null
            }
            bindToMotionValue(t, e) {
                let i = b.has(t)
                  , n = e.on("change", e => {
                    this.latestValues[t] = e,
                    this.props.onUpdate && O.Wi.update(this.notifyUpdate, !1, !0),
                    i && this.projection && (this.projection.isTransformDirty = !0)
                }
                )
                  , r = e.on("renderRequest", this.scheduleRender);
                this.valueSubscriptions.set(t, () => {
                    n(),
                    r()
                }
                )
            }
            sortNodePosition(t) {
                return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
            }
            loadFeatures({children: t, ...e}, i, n, r) {
                let s, a;
                for (let t = 0; t < tQ; t++) {
                    let i = tK[t]
                      , {isEnabled: n, Feature: r, ProjectionNode: o, MeasureLayout: l} = f[i];
                    o && (s = o),
                    n(e) && (!this.features[i] && r && (this.features[i] = new r(this)),
                    l && (a = l))
                }
                if (!this.projection && s) {
                    this.projection = new s(this.latestValues,this.parent && this.parent.projection);
                    let {layoutId: t, layout: i, drag: n, dragConstraints: a, layoutScroll: o, layoutRoot: l} = e;
                    this.projection.setOptions({
                        layoutId: t,
                        layout: i,
                        alwaysMeasureLayout: !!n || a && isRefObject(a),
                        visualElement: this,
                        scheduleRender: () => this.scheduleRender(),
                        animationType: "string" == typeof i ? i : "both",
                        initialPromotionConfig: r,
                        layoutScroll: o,
                        layoutRoot: l
                    })
                }
                return a
            }
            updateFeatures() {
                for (let t in this.features) {
                    let e = this.features[t];
                    e.isMounted ? e.update() : (e.mount(),
                    e.isMounted = !0)
                }
            }
            triggerBuild() {
                this.build(this.renderState, this.latestValues, this.options, this.props)
            }
            measureViewportBox() {
                return this.current ? this.measureInstanceViewportBox(this.current, this.props) : createBox()
            }
            getStaticValue(t) {
                return this.latestValues[t]
            }
            setStaticValue(t, e) {
                this.latestValues[t] = e
            }
            makeTargetAnimatable(t, e=!0) {
                return this.makeTargetAnimatableFromInstance(t, this.props, e)
            }
            update(t, e) {
                (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
                this.prevProps = this.props,
                this.props = t,
                this.prevPresenceContext = this.presenceContext,
                this.presenceContext = e;
                for (let e = 0; e < tJ.length; e++) {
                    let i = tJ[e];
                    this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](),
                    delete this.propEventSubscriptions[i]);
                    let n = t["on" + i];
                    n && (this.propEventSubscriptions[i] = this.on(i, n))
                }
                this.prevMotionValues = function(t, e, i) {
                    let {willChange: n} = e;
                    for (let r in e) {
                        let s = e[r]
                          , a = i[r];
                        if ((0,
                        V.i)(s))
                            t.addValue(r, s),
                            isWillChangeMotionValue(n) && n.add(r);
                        else if ((0,
                        V.i)(a))
                            t.addValue(r, (0,
                            th.BX)(s, {
                                owner: t
                            })),
                            isWillChangeMotionValue(n) && n.remove(r);
                        else if (a !== s) {
                            if (t.hasValue(r)) {
                                let e = t.getValue(r);
                                e.hasAnimated || e.set(s)
                            } else {
                                let e = t.getStaticValue(r);
                                t.addValue(r, (0,
                                th.BX)(void 0 !== e ? e : s, {
                                    owner: t
                                }))
                            }
                        }
                    }
                    for (let n in i)
                        void 0 === e[n] && t.removeValue(n);
                    return e
                }(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues),
                this.handleChildMotionValue && this.handleChildMotionValue()
            }
            getProps() {
                return this.props
            }
            getVariant(t) {
                return this.props.variants ? this.props.variants[t] : void 0
            }
            getDefaultTransition() {
                return this.props.transition
            }
            getTransformPagePoint() {
                return this.props.transformPagePoint
            }
            getClosestVariantNode() {
                return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
            }
            getVariantContext(t=!1) {
                if (t)
                    return this.parent ? this.parent.getVariantContext() : void 0;
                if (!this.isControllingVariants) {
                    let t = this.parent && this.parent.getVariantContext() || {};
                    return void 0 !== this.props.initial && (t.initial = this.props.initial),
                    t
                }
                let e = {};
                for (let t = 0; t < t0; t++) {
                    let i = p[t]
                      , n = this.props[i];
                    (isVariantLabel(n) || !1 === n) && (e[i] = n)
                }
                return e
            }
            addVariantChild(t) {
                let e = this.getClosestVariantNode();
                if (e)
                    return e.variantChildren && e.variantChildren.add(t),
                    () => e.variantChildren.delete(t)
            }
            addValue(t, e) {
                e !== this.values.get(t) && (this.removeValue(t),
                this.bindToMotionValue(t, e)),
                this.values.set(t, e),
                this.latestValues[t] = e.get()
            }
            removeValue(t) {
                this.values.delete(t);
                let e = this.valueSubscriptions.get(t);
                e && (e(),
                this.valueSubscriptions.delete(t)),
                delete this.latestValues[t],
                this.removeValueFromRenderState(t, this.renderState)
            }
            hasValue(t) {
                return this.values.has(t)
            }
            getValue(t, e) {
                if (this.props.values && this.props.values[t])
                    return this.props.values[t];
                let i = this.values.get(t);
                return void 0 === i && void 0 !== e && (i = (0,
                th.BX)(e, {
                    owner: this
                }),
                this.addValue(t, i)),
                i
            }
            readValue(t) {
                var e;
                return void 0 === this.latestValues[t] && this.current ? null !== (e = this.getBaseTargetFromProps(this.props, t)) && void 0 !== e ? e : this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t]
            }
            setBaseTarget(t, e) {
                this.baseTarget[t] = e
            }
            getBaseTarget(t) {
                var e;
                let {initial: i} = this.props
                  , n = "string" == typeof i || "object" == typeof i ? null === (e = resolveVariantFromProps(this.props, i)) || void 0 === e ? void 0 : e[t] : void 0;
                if (i && void 0 !== n)
                    return n;
                let r = this.getBaseTargetFromProps(this.props, t);
                return void 0 === r || (0,
                V.i)(r) ? void 0 !== this.initialValues[t] && void 0 === n ? void 0 : this.baseTarget[t] : r
            }
            on(t, e) {
                return this.events[t] || (this.events[t] = new tD.L),
                this.events[t].add(e)
            }
            notify(t, ...e) {
                this.events[t] && this.events[t].notify(...e)
            }
        }
        ;
        let DOMVisualElement = class DOMVisualElement extends VisualElement {
            sortInstanceNodePosition(t, e) {
                return 2 & t.compareDocumentPosition(e) ? 1 : -1
            }
            getBaseTargetFromProps(t, e) {
                return t.style ? t.style[e] : void 0
            }
            removeValueFromRenderState(t, {vars: e, style: i}) {
                delete e[t],
                delete i[t]
            }
            makeTargetAnimatableFromInstance({transition: t, transitionEnd: e, ...i}, {transformValues: n}, r) {
                let s = function(t, e, i) {
                    let n = {};
                    for (let r in t) {
                        let t = function(t, e) {
                            if (!e)
                                return;
                            let i = e[t] || e.default || e;
                            return i.from
                        }(r, e);
                        if (void 0 !== t)
                            n[r] = t;
                        else {
                            let t = i.getValue(r);
                            t && (n[r] = t.get())
                        }
                    }
                    return n
                }(i, t || {}, this);
                if (n && (e && (e = n(e)),
                i && (i = n(i)),
                s && (s = n(s))),
                r) {
                    !function(t, e, i) {
                        var n, r;
                        let s = Object.keys(e).filter(e => !t.hasValue(e))
                          , a = s.length;
                        if (a)
                            for (let o = 0; o < a; o++) {
                                let a = s[o]
                                  , l = e[a]
                                  , u = null;
                                Array.isArray(l) && (u = l[0]),
                                null === u && (u = null !== (r = null !== (n = i[a]) && void 0 !== n ? n : t.readValue(a)) && void 0 !== r ? r : e[a]),
                                null != u && ("string" == typeof u && (isNumericalString(u) || isZeroValueString(u)) ? u = parseFloat(u) : !findValueType(u) && tr.P.test(l) && (u = getAnimatableNone(a, l)),
                                t.addValue(a, (0,
                                th.BX)(u, {
                                    owner: t
                                })),
                                void 0 === i[a] && (i[a] = u),
                                null !== u && t.setBaseTarget(a, u))
                            }
                    }(this, i, s);
                    let t = parseDomVariant(this, i, s, e);
                    e = t.transitionEnd,
                    i = t.target
                }
                return {
                    transition: t,
                    transitionEnd: e,
                    ...i
                }
            }
        }
        ;
        let HTMLVisualElement = class HTMLVisualElement extends DOMVisualElement {
            readValueFromInstance(t, e) {
                if (b.has(e)) {
                    let t = getDefaultValueType(e);
                    return t && t.default || 0
                }
                {
                    let i = window.getComputedStyle(t)
                      , n = ((0,
                    C.f9)(e) ? i.getPropertyValue(e) : i[e]) || 0;
                    return "string" == typeof n ? n.trim() : n
                }
            }
            measureInstanceViewportBox(t, {transformPagePoint: e}) {
                return measureViewportBox(t, e)
            }
            build(t, e, i, n) {
                buildHTMLStyles(t, e, i, n.transformTemplate)
            }
            scrapeMotionValuesFromProps(t, e) {
                return scrapeMotionValuesFromProps(t, e)
            }
            handleChildMotionValue() {
                this.childSubscription && (this.childSubscription(),
                delete this.childSubscription);
                let {children: t} = this.props;
                (0,
                V.i)(t) && (this.childSubscription = t.on("change", t => {
                    this.current && (this.current.textContent = `${t}`)
                }
                ))
            }
            renderInstance(t, e, i, n) {
                renderHTML(t, e, i, n)
            }
        }
        ;
        let SVGVisualElement = class SVGVisualElement extends DOMVisualElement {
            constructor() {
                super(...arguments),
                this.isSVGTag = !1
            }
            getBaseTargetFromProps(t, e) {
                return t[e]
            }
            readValueFromInstance(t, e) {
                if (b.has(e)) {
                    let t = getDefaultValueType(e);
                    return t && t.default || 0
                }
                return e = F.has(e) ? e : camelToDash(e),
                t.getAttribute(e)
            }
            measureInstanceViewportBox() {
                return createBox()
            }
            scrapeMotionValuesFromProps(t, e) {
                return scrape_motion_values_scrapeMotionValuesFromProps(t, e)
            }
            build(t, e, i, n) {
                buildSVGAttrs(t, e, i, this.isSVGTag, n.transformTemplate)
            }
            renderInstance(t, e, i, n) {
                renderSVG(t, e, i, n)
            }
            mount(t) {
                this.isSVGTag = isSVGTag(t.tagName),
                super.mount(t)
            }
        }
        ;
        let create_visual_element_createDomVisualElement = (t, e) => isSVGComponent(t) ? new SVGVisualElement(e,{
            enableHardwareAcceleration: !1
        }) : new HTMLVisualElement(e,{
            enableHardwareAcceleration: !0
        })
          , t1 = {
            animation: {
                Feature: class extends Feature {
                    constructor(t) {
                        super(t),
                        t.animationState || (t.animationState = function(t) {
                            let animate = e => Promise.all(e.map( ({animation: e, options: i}) => (function(t, e, i={}) {
                                let n;
                                if (t.notify("AnimationStart", e),
                                Array.isArray(e)) {
                                    let r = e.map(e => animateVariant(t, e, i));
                                    n = Promise.all(r)
                                } else if ("string" == typeof e)
                                    n = animateVariant(t, e, i);
                                else {
                                    let r = "function" == typeof e ? resolveVariant(t, e, i.custom) : e;
                                    n = Promise.all(animateTarget(t, r, i))
                                }
                                return n.then( () => t.notify("AnimationComplete", e))
                            }
                            )(t, e, i)))
                              , e = {
                                animate: createTypeState(!0),
                                whileInView: createTypeState(),
                                whileHover: createTypeState(),
                                whileTap: createTypeState(),
                                whileDrag: createTypeState(),
                                whileFocus: createTypeState(),
                                exit: createTypeState()
                            }
                              , i = !0
                              , buildResolvedTypeValues = (e, i) => {
                                let n = resolveVariant(t, i);
                                if (n) {
                                    let {transition: t, transitionEnd: i, ...r} = n;
                                    e = {
                                        ...e,
                                        ...r,
                                        ...i
                                    }
                                }
                                return e
                            }
                            ;
                            function animateChanges(n, r) {
                                let s = t.getProps()
                                  , a = t.getVariantContext(!0) || {}
                                  , o = []
                                  , l = new Set
                                  , u = {}
                                  , c = 1 / 0;
                                for (let d = 0; d < tf; d++) {
                                    var h;
                                    let p = tm[d]
                                      , m = e[p]
                                      , f = void 0 !== s[p] ? s[p] : a[p]
                                      , g = isVariantLabel(f)
                                      , y = p === r ? m.isActive : null;
                                    !1 === y && (c = d);
                                    let v = f === a[p] && f !== s[p] && g;
                                    if (v && i && t.manuallyAnimateOnMount && (v = !1),
                                    m.protectedKeys = {
                                        ...u
                                    },
                                    !m.isActive && null === y || !f && !m.prevProp || isAnimationControls(f) || "boolean" == typeof f)
                                        continue;
                                    let x = (h = m.prevProp,
                                    "string" == typeof f ? f !== h : !!Array.isArray(f) && !shallowCompare(f, h))
                                      , P = x || p === r && m.isActive && !v && g || d > c && g
                                      , T = Array.isArray(f) ? f : [f]
                                      , A = T.reduce(buildResolvedTypeValues, {});
                                    !1 === y && (A = {});
                                    let {prevResolvedValues: b={}} = m
                                      , V = {
                                        ...b,
                                        ...A
                                    }
                                      , markToAnimate = t => {
                                        P = !0,
                                        l.delete(t),
                                        m.needsAnimating[t] = !0
                                    }
                                    ;
                                    for (let t in V) {
                                        let e = A[t]
                                          , i = b[t];
                                        u.hasOwnProperty(t) || (e !== i ? isKeyframesTarget(e) && isKeyframesTarget(i) ? !shallowCompare(e, i) || x ? markToAnimate(t) : m.protectedKeys[t] = !0 : void 0 !== e ? markToAnimate(t) : l.add(t) : void 0 !== e && l.has(t) ? markToAnimate(t) : m.protectedKeys[t] = !0)
                                    }
                                    m.prevProp = f,
                                    m.prevResolvedValues = A,
                                    m.isActive && (u = {
                                        ...u,
                                        ...A
                                    }),
                                    i && t.blockInitialAnimation && (P = !1),
                                    P && !v && o.push(...T.map(t => ({
                                        animation: t,
                                        options: {
                                            type: p,
                                            ...n
                                        }
                                    })))
                                }
                                if (l.size) {
                                    let e = {};
                                    l.forEach(i => {
                                        let n = t.getBaseTarget(i);
                                        void 0 !== n && (e[i] = n)
                                    }
                                    ),
                                    o.push({
                                        animation: e
                                    })
                                }
                                let d = !!o.length;
                                return i && !1 === s.initial && !t.manuallyAnimateOnMount && (d = !1),
                                i = !1,
                                d ? animate(o) : Promise.resolve()
                            }
                            return {
                                animateChanges,
                                setActive: function(i, n, r) {
                                    var s;
                                    if (e[i].isActive === n)
                                        return Promise.resolve();
                                    null === (s = t.variantChildren) || void 0 === s || s.forEach(t => {
                                        var e;
                                        return null === (e = t.animationState) || void 0 === e ? void 0 : e.setActive(i, n)
                                    }
                                    ),
                                    e[i].isActive = n;
                                    let a = animateChanges(r, i);
                                    for (let t in e)
                                        e[t].protectedKeys = {};
                                    return a
                                },
                                setAnimateFunction: function(e) {
                                    animate = e(t)
                                },
                                getState: () => e
                            }
                        }(t))
                    }
                    updateAnimationControlsSubscription() {
                        let {animate: t} = this.node.getProps();
                        this.unmount(),
                        isAnimationControls(t) && (this.unmount = t.subscribe(this.node))
                    }
                    mount() {
                        this.updateAnimationControlsSubscription()
                    }
                    update() {
                        let {animate: t} = this.node.getProps()
                          , {animate: e} = this.node.prevProps || {};
                        t !== e && this.updateAnimationControlsSubscription()
                    }
                    unmount() {}
                }
            },
            exit: {
                Feature: class extends Feature {
                    constructor() {
                        super(...arguments),
                        this.id = tg++
                    }
                    update() {
                        if (!this.node.presenceContext)
                            return;
                        let {isPresent: t, onExitComplete: e, custom: i} = this.node.presenceContext
                          , {isPresent: n} = this.node.prevPresenceContext || {};
                        if (!this.node.animationState || t === n)
                            return;
                        let r = this.node.animationState.setActive("exit", !t, {
                            custom: null != i ? i : this.node.getProps().custom
                        });
                        e && !t && r.then( () => e(this.id))
                    }
                    mount() {
                        let {register: t} = this.node.presenceContext || {};
                        t && (this.unmount = t(this.id))
                    }
                    unmount() {}
                }
            },
            inView: {
                Feature: class extends Feature {
                    constructor() {
                        super(...arguments),
                        this.hasEnteredView = !1,
                        this.isInView = !1
                    }
                    startObserver() {
                        this.unmount();
                        let {viewport: t={}} = this.node.getProps()
                          , {root: e, margin: i, amount: n="some", once: r} = t
                          , s = {
                            root: e ? e.current : void 0,
                            rootMargin: i,
                            threshold: "number" == typeof n ? n : G[n]
                        };
                        return function(t, e, i) {
                            let n = function({root: t, ...e}) {
                                let i = t || document;
                                X.has(i) || X.set(i, {});
                                let n = X.get(i)
                                  , r = JSON.stringify(e);
                                return n[r] || (n[r] = new IntersectionObserver(fireAllObserverCallbacks,{
                                    root: t,
                                    ...e
                                })),
                                n[r]
                            }(e);
                            return H.set(t, i),
                            n.observe(t),
                            () => {
                                H.delete(t),
                                n.unobserve(t)
                            }
                        }(this.node.current, s, t => {
                            let {isIntersecting: e} = t;
                            if (this.isInView === e || (this.isInView = e,
                            r && !e && this.hasEnteredView))
                                return;
                            e && (this.hasEnteredView = !0),
                            this.node.animationState && this.node.animationState.setActive("whileInView", e);
                            let {onViewportEnter: i, onViewportLeave: n} = this.node.getProps()
                              , s = e ? i : n;
                            s && s(t)
                        }
                        )
                    }
                    mount() {
                        this.startObserver()
                    }
                    update() {
                        if ("undefined" == typeof IntersectionObserver)
                            return;
                        let {props: t, prevProps: e} = this.node
                          , i = ["amount", "margin", "root"].some(function({viewport: t={}}, {viewport: e={}}={}) {
                            return i => t[i] !== e[i]
                        }(t, e));
                        i && this.startObserver()
                    }
                    unmount() {}
                }
            },
            tap: {
                Feature: class extends Feature {
                    constructor() {
                        super(...arguments),
                        this.removeStartListeners = $.Z,
                        this.removeEndListeners = $.Z,
                        this.removeAccessibleListeners = $.Z,
                        this.startPointerPress = (t, e) => {
                            if (this.removeEndListeners(),
                            this.isPressing)
                                return;
                            let i = this.node.getProps()
                              , n = addPointerEvent(window, "pointerup", (t, e) => {
                                if (!this.checkPressEnd())
                                    return;
                                let {onTap: i, onTapCancel: n} = this.node.getProps();
                                O.Wi.update( () => {
                                    isNodeOrChild(this.node.current, t.target) ? i && i(t, e) : n && n(t, e)
                                }
                                )
                            }
                            , {
                                passive: !(i.onTap || i.onPointerUp)
                            })
                              , r = addPointerEvent(window, "pointercancel", (t, e) => this.cancelPress(t, e), {
                                passive: !(i.onTapCancel || i.onPointerCancel)
                            });
                            this.removeEndListeners = (0,
                            U.z)(n, r),
                            this.startPress(t, e)
                        }
                        ,
                        this.startAccessiblePress = () => {
                            let t = addDomEvent(this.node.current, "keydown", t => {
                                "Enter" !== t.key || this.isPressing || (this.removeEndListeners(),
                                this.removeEndListeners = addDomEvent(this.node.current, "keyup", t => {
                                    "Enter" === t.key && this.checkPressEnd() && fireSyntheticPointerEvent("up", (t, e) => {
                                        let {onTap: i} = this.node.getProps();
                                        i && O.Wi.update( () => i(t, e))
                                    }
                                    )
                                }
                                ),
                                fireSyntheticPointerEvent("down", (t, e) => {
                                    this.startPress(t, e)
                                }
                                ))
                            }
                            )
                              , e = addDomEvent(this.node.current, "blur", () => {
                                this.isPressing && fireSyntheticPointerEvent("cancel", (t, e) => this.cancelPress(t, e))
                            }
                            );
                            this.removeAccessibleListeners = (0,
                            U.z)(t, e)
                        }
                    }
                    startPress(t, e) {
                        this.isPressing = !0;
                        let {onTapStart: i, whileTap: n} = this.node.getProps();
                        n && this.node.animationState && this.node.animationState.setActive("whileTap", !0),
                        i && O.Wi.update( () => i(t, e))
                    }
                    checkPressEnd() {
                        this.removeEndListeners(),
                        this.isPressing = !1;
                        let t = this.node.getProps();
                        return t.whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1),
                        !isDragActive()
                    }
                    cancelPress(t, e) {
                        if (!this.checkPressEnd())
                            return;
                        let {onTapCancel: i} = this.node.getProps();
                        i && O.Wi.update( () => i(t, e))
                    }
                    mount() {
                        let t = this.node.getProps()
                          , e = addPointerEvent(this.node.current, "pointerdown", this.startPointerPress, {
                            passive: !(t.onTapStart || t.onPointerStart)
                        })
                          , i = addDomEvent(this.node.current, "focus", this.startAccessiblePress);
                        this.removeStartListeners = (0,
                        U.z)(e, i)
                    }
                    unmount() {
                        this.removeStartListeners(),
                        this.removeEndListeners(),
                        this.removeAccessibleListeners()
                    }
                }
            },
            focus: {
                Feature: class extends Feature {
                    constructor() {
                        super(...arguments),
                        this.isActive = !1
                    }
                    onFocus() {
                        let t = !1;
                        try {
                            t = this.node.current.matches(":focus-visible")
                        } catch (e) {
                            t = !0
                        }
                        t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0),
                        this.isActive = !0)
                    }
                    onBlur() {
                        this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1),
                        this.isActive = !1)
                    }
                    mount() {
                        this.unmount = (0,
                        U.z)(addDomEvent(this.node.current, "focus", () => this.onFocus()), addDomEvent(this.node.current, "blur", () => this.onBlur()))
                    }
                    unmount() {}
                }
            },
            hover: {
                Feature: class extends Feature {
                    mount() {
                        this.unmount = (0,
                        U.z)(addHoverEvent(this.node, !0), addHoverEvent(this.node, !1))
                    }
                    unmount() {}
                }
            },
            pan: {
                Feature: class extends Feature {
                    constructor() {
                        super(...arguments),
                        this.removePointerDownListener = $.Z
                    }
                    onPointerDown(t) {
                        this.session = new PanSession(t,this.createPanHandlers(),{
                            transformPagePoint: this.node.getTransformPagePoint()
                        })
                    }
                    createPanHandlers() {
                        let {onPanSessionStart: t, onPanStart: e, onPan: i, onPanEnd: n} = this.node.getProps();
                        return {
                            onSessionStart: asyncHandler(t),
                            onStart: asyncHandler(e),
                            onMove: i,
                            onEnd: (t, e) => {
                                delete this.session,
                                n && O.Wi.update( () => n(t, e))
                            }
                        }
                    }
                    mount() {
                        this.removePointerDownListener = addPointerEvent(this.node.current, "pointerdown", t => this.onPointerDown(t))
                    }
                    update() {
                        this.session && this.session.updateHandlers(this.createPanHandlers())
                    }
                    unmount() {
                        this.removePointerDownListener(),
                        this.session && this.session.end()
                    }
                }
            },
            drag: {
                Feature: class extends Feature {
                    constructor(t) {
                        super(t),
                        this.removeGroupControls = $.Z,
                        this.removeListeners = $.Z,
                        this.controls = new VisualElementDragControls(t)
                    }
                    mount() {
                        let {dragControls: t} = this.node.getProps();
                        t && (this.removeGroupControls = t.subscribe(this.controls)),
                        this.removeListeners = this.controls.addListeners() || $.Z
                    }
                    unmount() {
                        this.removeGroupControls(),
                        this.removeListeners()
                    }
                }
                ,
                ProjectionNode: tz,
                MeasureLayout: MeasureLayout
            },
            layout: {
                ProjectionNode: tz,
                MeasureLayout: MeasureLayout
            }
        }
          , t5 = function(t) {
            function custom(e, i={}) {
                return function({preloadedFeatures: t, createVisualElement: e, useRender: i, useVisualState: n, Component: r}) {
                    t && function(t) {
                        for (let e in t)
                            f[e] = {
                                ...f[e],
                                ...t[e]
                            }
                    }(t);
                    let s = (0,
                    a.forwardRef)(function(s, d) {
                        var p;
                        let m;
                        let f = {
                            ...(0,
                            a.useContext)(o._),
                            ...s,
                            layoutId: function({layoutId: t}) {
                                let e = (0,
                                a.useContext)(y).id;
                                return e && void 0 !== t ? e + "-" + t : t
                            }(s)
                        }
                          , {isStatic: x} = f
                          , P = function(t) {
                            let {initial: e, animate: i} = function(t, e) {
                                if (isControllingVariants(t)) {
                                    let {initial: e, animate: i} = t;
                                    return {
                                        initial: !1 === e || isVariantLabel(e) ? e : void 0,
                                        animate: isVariantLabel(i) ? i : void 0
                                    }
                                }
                                return !1 !== t.inherit ? e : {}
                            }(t, (0,
                            a.useContext)(l));
                            return (0,
                            a.useMemo)( () => ({
                                initial: e,
                                animate: i
                            }), [variantLabelsAsDependency(e), variantLabelsAsDependency(i)])
                        }(s)
                          , T = n(s, x);
                        if (!x && g.j) {
                            P.visualElement = function(t, e, i, n) {
                                let {visualElement: r} = (0,
                                a.useContext)(l)
                                  , s = (0,
                                a.useContext)(h)
                                  , d = (0,
                                a.useContext)(u)
                                  , p = (0,
                                a.useContext)(o._).reducedMotion
                                  , m = (0,
                                a.useRef)();
                                n = n || s.renderer,
                                !m.current && n && (m.current = n(t, {
                                    visualState: e,
                                    parent: r,
                                    props: i,
                                    presenceContext: d,
                                    blockInitialAnimation: !!d && !1 === d.initial,
                                    reducedMotionConfig: p
                                }));
                                let f = m.current;
                                (0,
                                a.useInsertionEffect)( () => {
                                    f && f.update(i, d)
                                }
                                );
                                let g = (0,
                                a.useRef)(!!window.HandoffAppearAnimations);
                                return (0,
                                c.L)( () => {
                                    f && (f.render(),
                                    g.current && f.animationState && f.animationState.animateChanges())
                                }
                                ),
                                (0,
                                a.useEffect)( () => {
                                    f && (f.updateFeatures(),
                                    !g.current && f.animationState && f.animationState.animateChanges(),
                                    window.HandoffAppearAnimations = void 0,
                                    g.current = !1)
                                }
                                ),
                                f
                            }(r, T, f, e);
                            let i = (0,
                            a.useContext)(v)
                              , n = (0,
                            a.useContext)(h).strict;
                            P.visualElement && (m = P.visualElement.loadFeatures(f, n, t, i))
                        }
                        return a.createElement(l.Provider, {
                            value: P
                        }, m && P.visualElement ? a.createElement(m, {
                            visualElement: P.visualElement,
                            ...f
                        }) : null, i(r, s, (p = P.visualElement,
                        (0,
                        a.useCallback)(t => {
                            t && T.mount && T.mount(t),
                            p && (t ? p.mount(t) : p.unmount()),
                            d && ("function" == typeof d ? d(t) : isRefObject(d) && (d.current = t))
                        }
                        , [p])), T, x, P.visualElement))
                    });
                    return s[x] = r,
                    s
                }(t(e, i))
            }
            if ("undefined" == typeof Proxy)
                return custom;
            let e = new Map;
            return new Proxy(custom,{
                get: (t, i) => (e.has(i) || e.set(i, custom(i)),
                e.get(i))
            })
        }( (t, e) => (function(t, {forwardMotionProps: e=!1}, i, n) {
            let r = isSVGComponent(t) ? I : N;
            return {
                ...r,
                preloadedFeatures: i,
                useRender: function(t=!1) {
                    return (e, i, n, {latestValues: r}, s) => {
                        let o = isSVGComponent(e) ? useSVGProps : useHTMLProps
                          , l = o(i, r, s, e)
                          , u = function(t, e, i) {
                            let n = {};
                            for (let r in t)
                                ("values" !== r || "object" != typeof t.values) && (shouldForward(r) || !0 === i && isValidMotionProp(r) || !e && !isValidMotionProp(r) || t.draggable && r.startsWith("onDrag")) && (n[r] = t[r]);
                            return n
                        }(i, "string" == typeof e, t)
                          , c = {
                            ...u,
                            ...l,
                            ref: n
                        }
                          , {children: h} = i
                          , d = (0,
                        a.useMemo)( () => (0,
                        V.i)(h) ? h.get() : h, [h]);
                        return (0,
                        a.createElement)(e, {
                            ...c,
                            children: d
                        })
                    }
                }(e),
                createVisualElement: n,
                Component: t
            }
        }
        )(t, e, t1, create_visual_element_createDomVisualElement))
    },
    8406: function(t, e, i) {
        i.d(e, {
            Xp: function() {
                return s
            },
            f9: function() {
                return n
            },
            tm: function() {
                return r
            }
        });
        let checkStringStartsWith = t => e => "string" == typeof e && e.startsWith(t)
          , n = checkStringStartsWith("--")
          , r = checkStringStartsWith("var(--")
          , s = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g
    },
    1172: function(t, e, i) {
        function addUniqueItem(t, e) {
            -1 === t.indexOf(e) && t.push(e)
        }
        function removeItem(t, e) {
            let i = t.indexOf(e);
            i > -1 && t.splice(i, 1)
        }
        i.d(e, {
            cl: function() {
                return removeItem
            },
            y4: function() {
                return addUniqueItem
            }
        })
    },
    5329: function(t, e, i) {
        i.d(e, {
            u: function() {
                return clamp
            }
        });
        let clamp = (t, e, i) => Math.min(Math.max(i, t), e)
    },
    9956: function(t, e, i) {
        i.d(e, {
            K: function() {
                return r
            },
            k: function() {
                return s
            }
        });
        var n = i(4783);
        let r = n.Z
          , s = n.Z
    },
    5843: function(t, e, i) {
        i.d(e, {
            j: function() {
                return n
            }
        });
        let n = "undefined" != typeof document
    },
    1242: function(t, e, i) {
        i.d(e, {
            C: function() {
                return mix
            }
        });
        let mix = (t, e, i) => -i * t + i * e + t
    },
    4783: function(t, e, i) {
        i.d(e, {
            Z: function() {
                return noop
            }
        });
        let noop = t => t
    },
    1934: function(t, e, i) {
        i.d(e, {
            z: function() {
                return pipe
            }
        });
        let combineFunctions = (t, e) => i => e(t(i))
          , pipe = (...t) => t.reduce(combineFunctions)
    },
    8644: function(t, e, i) {
        i.d(e, {
            Y: function() {
                return progress
            }
        });
        let progress = (t, e, i) => {
            let n = e - t;
            return 0 === n ? 1 : (i - t) / n
        }
    },
    4380: function(t, e, i) {
        i.d(e, {
            L: function() {
                return SubscriptionManager
            }
        });
        var n = i(1172);
        let SubscriptionManager = class SubscriptionManager {
            constructor() {
                this.subscriptions = []
            }
            add(t) {
                return (0,
                n.y4)(this.subscriptions, t),
                () => (0,
                n.cl)(this.subscriptions, t)
            }
            notify(t, e, i) {
                let n = this.subscriptions.length;
                if (n) {
                    if (1 === n)
                        this.subscriptions[0](t, e, i);
                    else
                        for (let r = 0; r < n; r++) {
                            let n = this.subscriptions[r];
                            n && n(t, e, i)
                        }
                }
            }
            getSize() {
                return this.subscriptions.length
            }
            clear() {
                this.subscriptions.length = 0
            }
        }
    },
    6540: function(t, e, i) {
        i.d(e, {
            X: function() {
                return millisecondsToSeconds
            },
            w: function() {
                return secondsToMilliseconds
            }
        });
        let secondsToMilliseconds = t => 1e3 * t
          , millisecondsToSeconds = t => t / 1e3
    },
    2713: function(t, e, i) {
        i.d(e, {
            h: function() {
                return useConstant
            }
        });
        var n = i(7515);
        function useConstant(t) {
            let e = (0,
            n.useRef)(null);
            return null === e.current && (e.current = t()),
            e.current
        }
    },
    4356: function(t, e, i) {
        i.d(e, {
            L: function() {
                return s
            }
        });
        var n = i(7515)
          , r = i(5843);
        let s = r.j ? n.useLayoutEffect : n.useEffect
    },
    4646: function(t, e, i) {
        i.d(e, {
            R: function() {
                return velocityPerSecond
            }
        });
        function velocityPerSecond(t, e) {
            return e ? t * (1e3 / e) : 0
        }
    },
    3209: function(t, e, i) {
        i.d(e, {
            BX: function() {
                return motionValue
            }
        });
        var n = i(4380)
          , r = i(4646)
          , s = i(696);
        let isFloat = t => !isNaN(parseFloat(t))
          , a = {
            current: void 0
        };
        let MotionValue = class MotionValue {
            constructor(t, e={}) {
                this.version = "10.16.4",
                this.timeDelta = 0,
                this.lastUpdated = 0,
                this.canTrackVelocity = !1,
                this.events = {},
                this.updateAndNotify = (t, e=!0) => {
                    this.prev = this.current,
                    this.current = t;
                    let {delta: i, timestamp: n} = s.frameData;
                    this.lastUpdated !== n && (this.timeDelta = i,
                    this.lastUpdated = n,
                    s.Wi.postRender(this.scheduleVelocityCheck)),
                    this.prev !== this.current && this.events.change && this.events.change.notify(this.current),
                    this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()),
                    e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
                }
                ,
                this.scheduleVelocityCheck = () => s.Wi.postRender(this.velocityCheck),
                this.velocityCheck = ({timestamp: t}) => {
                    t !== this.lastUpdated && (this.prev = this.current,
                    this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
                }
                ,
                this.hasAnimated = !1,
                this.prev = this.current = t,
                this.canTrackVelocity = isFloat(this.current),
                this.owner = e.owner
            }
            onChange(t) {
                return this.on("change", t)
            }
            on(t, e) {
                this.events[t] || (this.events[t] = new n.L);
                let i = this.events[t].add(e);
                return "change" === t ? () => {
                    i(),
                    s.Wi.read( () => {
                        this.events.change.getSize() || this.stop()
                    }
                    )
                }
                : i
            }
            clearListeners() {
                for (let t in this.events)
                    this.events[t].clear()
            }
            attach(t, e) {
                this.passiveEffect = t,
                this.stopPassiveEffect = e
            }
            set(t, e=!0) {
                e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
            }
            setWithVelocity(t, e, i) {
                this.set(e),
                this.prev = t,
                this.timeDelta = i
            }
            jump(t) {
                this.updateAndNotify(t),
                this.prev = t,
                this.stop(),
                this.stopPassiveEffect && this.stopPassiveEffect()
            }
            get() {
                return a.current && a.current.push(this),
                this.current
            }
            getPrevious() {
                return this.prev
            }
            getVelocity() {
                return this.canTrackVelocity ? (0,
                r.R)(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
            }
            start(t) {
                return this.stop(),
                new Promise(e => {
                    this.hasAnimated = !0,
                    this.animation = t(e),
                    this.events.animationStart && this.events.animationStart.notify()
                }
                ).then( () => {
                    this.events.animationComplete && this.events.animationComplete.notify(),
                    this.clearAnimation()
                }
                )
            }
            stop() {
                this.animation && (this.animation.stop(),
                this.events.animationCancel && this.events.animationCancel.notify()),
                this.clearAnimation()
            }
            isAnimating() {
                return !!this.animation
            }
            clearAnimation() {
                delete this.animation
            }
            destroy() {
                this.clearListeners(),
                this.stop(),
                this.stopPassiveEffect && this.stopPassiveEffect()
            }
        }
        ;
        function motionValue(t, e) {
            return new MotionValue(t,e)
        }
    },
    1012: function(t, e, i) {
        i.d(e, {
            $: function() {
                return s
            }
        });
        var n = i(8584)
          , r = i(9613);
        let s = {
            test: (0,
            r.i)("#"),
            parse: function(t) {
                let e = ""
                  , i = ""
                  , n = ""
                  , r = "";
                return t.length > 5 ? (e = t.substring(1, 3),
                i = t.substring(3, 5),
                n = t.substring(5, 7),
                r = t.substring(7, 9)) : (e = t.substring(1, 2),
                i = t.substring(2, 3),
                n = t.substring(3, 4),
                r = t.substring(4, 5),
                e += e,
                i += i,
                n += n,
                r += r),
                {
                    red: parseInt(e, 16),
                    green: parseInt(i, 16),
                    blue: parseInt(n, 16),
                    alpha: r ? parseInt(r, 16) / 255 : 1
                }
            },
            transform: n.m.transform
        }
    },
    8504: function(t, e, i) {
        i.d(e, {
            J: function() {
                return o
            }
        });
        var n = i(4412)
          , r = i(2050)
          , s = i(820)
          , a = i(9613);
        let o = {
            test: (0,
            a.i)("hsl", "hue"),
            parse: (0,
            a.d)("hue", "saturation", "lightness"),
            transform: ({hue: t, saturation: e, lightness: i, alpha: a=1}) => "hsla(" + Math.round(t) + ", " + r.aQ.transform((0,
            s.Nw)(e)) + ", " + r.aQ.transform((0,
            s.Nw)(i)) + ", " + (0,
            s.Nw)(n.Fq.transform(a)) + ")"
        }
    },
    1499: function(t, e, i) {
        i.d(e, {
            $: function() {
                return o
            }
        });
        var n = i(820)
          , r = i(1012)
          , s = i(8504)
          , a = i(8584);
        let o = {
            test: t => a.m.test(t) || r.$.test(t) || s.J.test(t),
            parse: t => a.m.test(t) ? a.m.parse(t) : s.J.test(t) ? s.J.parse(t) : r.$.parse(t),
            transform: t => (0,
            n.HD)(t) ? t : t.hasOwnProperty("red") ? a.m.transform(t) : s.J.transform(t)
        }
    },
    8584: function(t, e, i) {
        i.d(e, {
            m: function() {
                return l
            }
        });
        var n = i(5329)
          , r = i(4412)
          , s = i(820)
          , a = i(9613);
        let clampRgbUnit = t => (0,
        n.u)(0, 255, t)
          , o = {
            ...r.Rx,
            transform: t => Math.round(clampRgbUnit(t))
        }
          , l = {
            test: (0,
            a.i)("rgb", "red"),
            parse: (0,
            a.d)("red", "green", "blue"),
            transform: ({red: t, green: e, blue: i, alpha: n=1}) => "rgba(" + o.transform(t) + ", " + o.transform(e) + ", " + o.transform(i) + ", " + (0,
            s.Nw)(r.Fq.transform(n)) + ")"
        }
    },
    9613: function(t, e, i) {
        i.d(e, {
            d: function() {
                return splitColor
            },
            i: function() {
                return isColorString
            }
        });
        var n = i(820);
        let isColorString = (t, e) => i => !!((0,
        n.HD)(i) && n.mj.test(i) && i.startsWith(t) || e && Object.prototype.hasOwnProperty.call(i, e))
          , splitColor = (t, e, i) => r => {
            if (!(0,
            n.HD)(r))
                return r;
            let[s,a,o,l] = r.match(n.KP);
            return {
                [t]: parseFloat(s),
                [e]: parseFloat(a),
                [i]: parseFloat(o),
                alpha: void 0 !== l ? parseFloat(l) : 1
            }
        }
    },
    9547: function(t, e, i) {
        i.d(e, {
            P: function() {
                return h
            },
            V: function() {
                return analyseComplexValue
            }
        });
        var n = i(8406)
          , r = i(4783)
          , s = i(1499)
          , a = i(4412)
          , o = i(820);
        let l = {
            regex: n.Xp,
            countKey: "Vars",
            token: "${v}",
            parse: r.Z
        }
          , u = {
            regex: o.dA,
            countKey: "Colors",
            token: "${c}",
            parse: s.$.parse
        }
          , c = {
            regex: o.KP,
            countKey: "Numbers",
            token: "${n}",
            parse: a.Rx.parse
        };
        function tokenise(t, {regex: e, countKey: i, token: n, parse: r}) {
            let s = t.tokenised.match(e);
            s && (t["num" + i] = s.length,
            t.tokenised = t.tokenised.replace(e, n),
            t.values.push(...s.map(r)))
        }
        function analyseComplexValue(t) {
            let e = t.toString()
              , i = {
                value: e,
                tokenised: e,
                values: [],
                numVars: 0,
                numColors: 0,
                numNumbers: 0
            };
            return i.value.includes("var(--") && tokenise(i, l),
            tokenise(i, u),
            tokenise(i, c),
            i
        }
        function parseComplexValue(t) {
            return analyseComplexValue(t).values
        }
        function createTransformer(t) {
            let {values: e, numColors: i, numVars: n, tokenised: r} = analyseComplexValue(t)
              , a = e.length;
            return t => {
                let e = r;
                for (let r = 0; r < a; r++)
                    e = r < n ? e.replace(l.token, t[r]) : r < n + i ? e.replace(u.token, s.$.transform(t[r])) : e.replace(c.token, (0,
                    o.Nw)(t[r]));
                return e
            }
        }
        let convertNumbersToZero = t => "number" == typeof t ? 0 : t
          , h = {
            test: function(t) {
                var e, i;
                return isNaN(t) && (0,
                o.HD)(t) && ((null === (e = t.match(o.KP)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (i = t.match(o.dA)) || void 0 === i ? void 0 : i.length) || 0) > 0
            },
            parse: parseComplexValue,
            createTransformer,
            getAnimatableNone: function(t) {
                let e = parseComplexValue(t)
                  , i = createTransformer(t);
                return i(e.map(convertNumbersToZero))
            }
        }
    },
    4412: function(t, e, i) {
        i.d(e, {
            Fq: function() {
                return s
            },
            Rx: function() {
                return r
            },
            bA: function() {
                return a
            }
        });
        var n = i(5329);
        let r = {
            test: t => "number" == typeof t,
            parse: parseFloat,
            transform: t => t
        }
          , s = {
            ...r,
            transform: t => (0,
            n.u)(0, 1, t)
        }
          , a = {
            ...r,
            default: 1
        }
    },
    2050: function(t, e, i) {
        i.d(e, {
            $C: function() {
                return u
            },
            RW: function() {
                return r
            },
            aQ: function() {
                return s
            },
            px: function() {
                return a
            },
            vh: function() {
                return o
            },
            vw: function() {
                return l
            }
        });
        var n = i(820);
        let createUnitType = t => ({
            test: e => (0,
            n.HD)(e) && e.endsWith(t) && 1 === e.split(" ").length,
            parse: parseFloat,
            transform: e => `${e}${t}`
        })
          , r = createUnitType("deg")
          , s = createUnitType("%")
          , a = createUnitType("px")
          , o = createUnitType("vh")
          , l = createUnitType("vw")
          , u = {
            ...s,
            parse: t => s.parse(t) / 100,
            transform: t => s.transform(100 * t)
        }
    },
    820: function(t, e, i) {
        i.d(e, {
            HD: function() {
                return isString
            },
            KP: function() {
                return n
            },
            Nw: function() {
                return sanitize
            },
            dA: function() {
                return r
            },
            mj: function() {
                return s
            }
        });
        let sanitize = t => Math.round(1e5 * t) / 1e5
          , n = /(-)?([\d]*\.?[\d])+/g
          , r = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi
          , s = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
        function isString(t) {
            return "string" == typeof t
        }
    },
    9851: function(t, e, i) {
        i.d(e, {
            Y: function() {
                return useMotionTemplate
            }
        });
        var n = i(7544)
          , r = i(4356)
          , s = i(696)
          , a = i(1357);
        function useMotionTemplate(t, ...e) {
            let i = t.length;
            return function(t, e) {
                let i = (0,
                n.c)(e())
                  , updateValue = () => i.set(e());
                return updateValue(),
                (0,
                r.L)( () => {
                    let scheduleUpdate = () => s.Wi.update(updateValue, !1, !0)
                      , e = t.map(t => t.on("change", scheduleUpdate));
                    return () => {
                        e.forEach(t => t()),
                        (0,
                        s.Pn)(updateValue)
                    }
                }
                ),
                i
            }(e.filter(a.i), function() {
                let n = "";
                for (let r = 0; r < i; r++) {
                    n += t[r];
                    let i = e[r];
                    i && (n += (0,
                    a.i)(i) ? i.get() : i)
                }
                return n
            })
        }
    },
    7544: function(t, e, i) {
        i.d(e, {
            c: function() {
                return useMotionValue
            }
        });
        var n = i(7515)
          , r = i(3209)
          , s = i(6565)
          , a = i(2713);
        function useMotionValue(t) {
            let e = (0,
            a.h)( () => (0,
            r.BX)(t))
              , {isStatic: i} = (0,
            n.useContext)(s._);
            if (i) {
                let[,i] = (0,
                n.useState)(t);
                (0,
                n.useEffect)( () => e.on("change", i), [])
            }
            return e
        }
    },
    7117: function(t, e, i) {
        i.d(e, {
            q: function() {
                return useSpring
            }
        });
        var n = i(7515)
          , r = i(1357)
          , s = i(7544)
          , a = i(6565)
          , o = i(4356)
          , l = i(4190)
          , u = i(6540)
          , c = i(696);
        function useSpring(t, e={}) {
            let {isStatic: i} = (0,
            n.useContext)(a._)
              , h = (0,
            n.useRef)(null)
              , d = (0,
            s.c)((0,
            r.i)(t) ? t.get() : t)
              , stopAnimation = () => {
                h.current && h.current.stop()
            }
            ;
            return (0,
            n.useInsertionEffect)( () => d.attach( (t, n) => {
                if (i)
                    return n(t);
                if (stopAnimation(),
                h.current = (0,
                l.y)({
                    keyframes: [d.get(), t],
                    velocity: d.getVelocity(),
                    type: "spring",
                    restDelta: .001,
                    restSpeed: .01,
                    ...e,
                    onUpdate: n
                }),
                !c.frameData.isProcessing) {
                    let t = performance.now() - c.frameData.timestamp;
                    t < 30 && (h.current.time = (0,
                    u.X)(t))
                }
                return d.get()
            }
            , stopAnimation), [JSON.stringify(e)]),
            (0,
            o.L)( () => {
                if ((0,
                r.i)(t))
                    return t.on("change", t => d.set(parseFloat(t)))
            }
            , [d]),
            d
        }
    },
    1357: function(t, e, i) {
        i.d(e, {
            i: function() {
                return isMotionValue
            }
        });
        let isMotionValue = t => !!(t && t.getVelocity)
    }
}]);
