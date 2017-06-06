System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SongRoadService;
    return {
        setters:[],
        execute: function() {
            SongRoadService = (function () {
                function SongRoadService() {
                }
                SongRoadService.prototype.getRoadLyrics = function () {
                    return ["Two roads diverged in a yellow wood", "And sorry I could not travel both", "And be one traveler, long I stood",
                        "And looked down one as far as I could", "To where it bent in the undergrowth", "Then took the other, as just as fair",
                        "And having perhaps the better claim", "Because it was grassy and wanted wear", "Though as for that the passing there"];
                };
                return SongRoadService;
            }());
            exports_1("SongRoadService", SongRoadService);
        }
    }
});
//# sourceMappingURL=song-road.service.js.map