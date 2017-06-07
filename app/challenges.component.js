System.register(['angular2/core', './challenge.service', './auto-grow.directive'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, challenge_service_1, auto_grow_directive_1;
    var ChallengesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (challenge_service_1_1) {
                challenge_service_1 = challenge_service_1_1;
            },
            function (auto_grow_directive_1_1) {
                auto_grow_directive_1 = auto_grow_directive_1_1;
            }],
        execute: function() {
            ChallengesComponent = (function () {
                function ChallengesComponent(challengeService) {
                    this.title = "The title of challenges page";
                    this.wordTest = "Can you type this?";
                    this.challenges = challengeService.getChallenges();
                }
                ChallengesComponent.prototype.onKeyUp = function ($event) {
                    var target = $event.target;
                    target.focus();
                    var input = $event.target.value;
                    var stringSize = input.length;
                    if (input.substring(0, stringSize) === this.wordTest.substring(0, stringSize)) {
                        if (!target.classList.contains('good-input')) {
                            target.classList.remove('bad-input');
                            target.classList.add('good-input');
                        }
                    }
                    else {
                        if (!target.classList.contains('bad-input'))
                            target.classList.remove('good-input');
                        target.classList.add('bad-input');
                    }
                };
                ChallengesComponent.prototype.onClick = function ($event) {
                    var target = $event.target;
                    target.classList.remove("choose");
                    var unwanted = document.querySelectorAll(".challenge:not(:hover)");
                    for (var i = 0; i < unwanted.length; i++) {
                        unwanted[i].style.height = 0;
                        unwanted[i].style.width = 0;
                        unwanted[i].style.border = 0;
                        unwanted[i].style.margin = 0;
                    }
                };
                ChallengesComponent = __decorate([
                    core_1.Component({
                        selector: 'challenge',
                        template: "\n    <h2>Choose your challenge</h2>\n    {{title}}<br>\n    {{wordTest}}<br>\n    <input type=\"text\" autofocus (keyup)=\"onKeyUp($event)\" autoGrow />\n    <section>\n        <div class=\"challenge choose\" *ngFor=\"#challenge of challenges\" (click)=\"onClick($event)\" id={{challenge}}></div>\n    </section>\n    ",
                        providers: [challenge_service_1.ChallengeService],
                        directives: [auto_grow_directive_1.AutoGrowDirective]
                    }), 
                    __metadata('design:paramtypes', [challenge_service_1.ChallengeService])
                ], ChallengesComponent);
                return ChallengesComponent;
            }());
            exports_1("ChallengesComponent", ChallengesComponent);
        }
    }
});
//# sourceMappingURL=challenges.component.js.map