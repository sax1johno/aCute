{"filter":false,"title":"testApp.js","tooltip":"/plugins/acute-express-app/tests/testApp.js","undoManager":{"mark":100,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":37,"column":21},"end":{"row":37,"column":22},"action":"remove","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":37,"column":21},"end":{"row":37,"column":22},"action":"insert","lines":["j"]}]}],[{"group":"doc","deltas":[{"start":{"row":37,"column":25},"end":{"row":37,"column":26},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":37,"column":26},"end":{"row":37,"column":27},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":37,"column":27},"end":{"row":37,"column":28},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":37,"column":28},"end":{"row":37,"column":29},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":22},"end":{"row":24,"column":38},"action":"remove","lines":["thisApp.services"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":22},"end":{"row":24,"column":23},"action":"remove","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":22},"end":{"row":24,"column":23},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":23},"end":{"row":24,"column":24},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":24},"end":{"row":24,"column":25},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":25},"end":{"row":24,"column":26},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":26},"end":{"row":24,"column":27},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":27},"end":{"row":24,"column":28},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":28},"end":{"row":24,"column":29},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":29},"end":{"row":24,"column":30},"action":"insert","lines":["O"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":30},"end":{"row":24,"column":31},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":31},"end":{"row":24,"column":32},"action":"insert","lines":["j"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":32},"end":{"row":24,"column":33},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":33},"end":{"row":24,"column":34},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":34},"end":{"row":24,"column":35},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":35},"end":{"row":24,"column":36},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":36},"end":{"row":24,"column":39},"action":"remove","lines":["app"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":35},"end":{"row":24,"column":36},"action":"remove","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":33,"column":40},"end":{"row":33,"column":41},"action":"remove","lines":[")"]}]}],[{"group":"doc","deltas":[{"start":{"row":33,"column":39},"end":{"row":33,"column":40},"action":"remove","lines":["("]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":37},"end":{"row":43,"column":40},"action":"remove","lines":["app"]},{"start":{"row":43,"column":37},"end":{"row":43,"column":38},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":38},"end":{"row":43,"column":39},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":39},"end":{"row":43,"column":40},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":40},"end":{"row":43,"column":41},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":41},"end":{"row":43,"column":42},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":42},"end":{"row":43,"column":43},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":0},"end":{"row":48,"column":0},"action":"remove","lines":["            var serviceObject = thisApp.getService(\"app\");","            var router = thisApp.services.app.router();","            console.log(sutil.inspect(router));","            done();",""]},{"start":{"row":44,"column":0},"end":{"row":53,"column":0},"action":"insert","lines":["            var serviceObject = thisApp.getService(\"app\");","            var subapp = serviceObject.subapp();","            var app = serviceObject.app;","            subapp.get(\"/test\", function(req, res, next) {","                console.log(\"Test get request\");","            });","            serviceObject.app.use(subapp)","            console.log(sutil.inspect(app));","            done();",""]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":16},"end":{"row":45,"column":22},"action":"remove","lines":["subapp"]},{"start":{"row":45,"column":16},"end":{"row":45,"column":17},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":17},"end":{"row":45,"column":18},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":18},"end":{"row":45,"column":19},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":19},"end":{"row":45,"column":20},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":20},"end":{"row":45,"column":21},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":21},"end":{"row":45,"column":22},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":39},"end":{"row":45,"column":45},"action":"remove","lines":["subapp"]},{"start":{"row":45,"column":39},"end":{"row":45,"column":40},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":40},"end":{"row":45,"column":41},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":41},"end":{"row":45,"column":42},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":42},"end":{"row":45,"column":43},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":43},"end":{"row":45,"column":44},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":44},"end":{"row":45,"column":45},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":12},"end":{"row":47,"column":18},"action":"remove","lines":["subapp"]},{"start":{"row":47,"column":12},"end":{"row":47,"column":13},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":13},"end":{"row":47,"column":14},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":14},"end":{"row":47,"column":15},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":15},"end":{"row":47,"column":16},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":16},"end":{"row":47,"column":17},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":17},"end":{"row":47,"column":18},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":12},"end":{"row":50,"column":25},"action":"remove","lines":["serviceObject"]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":12},"end":{"row":50,"column":13},"action":"remove","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":20},"end":{"row":50,"column":26},"action":"remove","lines":["subapp"]},{"start":{"row":50,"column":20},"end":{"row":50,"column":21},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":21},"end":{"row":50,"column":22},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":22},"end":{"row":50,"column":23},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":23},"end":{"row":50,"column":24},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":24},"end":{"row":50,"column":25},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":25},"end":{"row":50,"column":26},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":25},"end":{"row":47,"column":29},"action":"remove","lines":["test"]},{"start":{"row":47,"column":25},"end":{"row":47,"column":26},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":26},"end":{"row":47,"column":27},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":27},"end":{"row":47,"column":28},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":28},"end":{"row":47,"column":29},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":29},"end":{"row":47,"column":30},"action":"insert","lines":["R"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":30},"end":{"row":47,"column":31},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":31},"end":{"row":47,"column":32},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":32},"end":{"row":47,"column":33},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":33},"end":{"row":47,"column":34},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":20},"end":{"row":50,"column":21},"action":"insert","lines":["'"]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":21},"end":{"row":50,"column":22},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":22},"end":{"row":50,"column":23},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":23},"end":{"row":50,"column":24},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":24},"end":{"row":50,"column":25},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":25},"end":{"row":50,"column":26},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":26},"end":{"row":50,"column":27},"action":"insert","lines":["'"]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":27},"end":{"row":50,"column":28},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":28},"end":{"row":50,"column":29},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":36},"end":{"row":50,"column":37},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":46,"column":40},"end":{"row":47,"column":0},"action":"insert","lines":["",""]},{"start":{"row":47,"column":0},"end":{"row":47,"column":12},"action":"insert","lines":["            "]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":12},"end":{"row":47,"column":13},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":13},"end":{"row":47,"column":14},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":14},"end":{"row":47,"column":15},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":15},"end":{"row":47,"column":16},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":16},"end":{"row":47,"column":17},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":17},"end":{"row":47,"column":18},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":18},"end":{"row":47,"column":19},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":19},"end":{"row":47,"column":20},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":20},"end":{"row":47,"column":21},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":20},"end":{"row":47,"column":21},"action":"remove","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":19},"end":{"row":47,"column":20},"action":"remove","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":18},"end":{"row":47,"column":19},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":17},"end":{"row":47,"column":18},"action":"remove","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":16},"end":{"row":47,"column":17},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":15},"end":{"row":47,"column":16},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":14},"end":{"row":47,"column":15},"action":"remove","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":13},"end":{"row":47,"column":14},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":12},"end":{"row":47,"column":13},"action":"remove","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":8},"end":{"row":47,"column":12},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":4},"end":{"row":47,"column":8},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":0},"end":{"row":47,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":46,"column":40},"end":{"row":47,"column":0},"action":"remove","lines":["",""]}]}]]},"ace":{"folds":[],"scrolltop":122,"scrollleft":0,"selection":{"start":{"row":36,"column":15},"end":{"row":36,"column":15},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":6,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1420245780818,"hash":"cd6b97e477166b250e1cae40588ae9993f8f3d12"}