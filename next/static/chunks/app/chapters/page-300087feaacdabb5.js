(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[67], {
    9515: function(e, t, n) {
        Promise.resolve().then(n.bind(n, 8528)),
        Promise.resolve().then(n.t.bind(n, 918, 23))
    },
    8528: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            Card: function() {
                return Card
            }
        });
        var i = n(6307)
          , r = n(3921)
          , a = n(7117)
          , s = n(9851)
          , o = n(6402);
        function _templateObject() {
            let e = (0,
            i._)(["radial-gradient(240px at ", "px ", "px, white, transparent)"]);
            return _templateObject = function() {
                return e
            }
            ,
            e
        }
        let Card = e => {
            let {children: t} = e
              , n = (0,
            a.q)(0, {
                stiffness: 500,
                damping: 100
            })
              , i = (0,
            a.q)(0, {
                stiffness: 500,
                damping: 100
            })
              , d = (0,
            s.Y)(_templateObject(), n, i)
              , l = {
                maskImage: d,
                WebkitMaskImage: d
            };
            return (0,
            r.jsxs)("div", {
                onMouseMove: function(e) {
                    let {currentTarget: t, clientX: r, clientY: a} = e
                      , {left: s, top: o} = t.getBoundingClientRect();
                    n.set(r - s),
                    i.set(a - o)
                },
                className: "overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 ",
                children: [(0,
                r.jsxs)("div", {
                    className: "pointer-events-none",
                    children: [(0,
                    r.jsx)("div", {
                        className: "absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]"
                    }), (0,
                    r.jsx)(o.E.div, {
                        className: "absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50 ",
                        style: l
                    }), (0,
                    r.jsx)(o.E.div, {
                        className: "absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100",
                        style: l
                    })]
                }), t]
            })
        }
    }
}, function(e) {
    e.O(0, [499, 653, 274, 83, 744], function() {
        return e(e.s = 9515)
    }),
    _N_E = e.O()
}
]);
