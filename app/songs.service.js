System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SongService;
    return {
        setters:[],
        execute: function() {
            SongService = (function () {
                function SongService() {
                }
                SongService.prototype.getSongs = function () {
                    return ["sidewalk", "road"];
                };
                return SongService;
            }());
            exports_1("SongService", SongService);
        }
    }
});
//# sourceMappingURL=songs.service.js.map