angular.module("mainModule")
    .service("utilService", [
        function () {
            var me = this;
            this.months = function () {
                return {
                    Jan: '1',
                    Feb: '2',
                    Mar: '3',
                    Apr: '4',
                    May: '5',
                    Jun: '6',
                    Jul: '7',
                    Aug: '8',
                    Sep: '9',
                    Oct: '10',
                    Nov: '11',
                    Dec: '12',
                }
            };
            this.scriptTypes = function () {
                return [
                    {type: 'JAVASCRIPT', text: 'JavaScript'},
                    {type: 'GRYPHONSCRIPT', text: 'Gryphon Script'},
                ]
            };
        }
    ]);