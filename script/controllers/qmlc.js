angular.module("mainModule")
    .controller("questionMakingLibraryController", ["$scope", "$filter", "questionService", "utilService",
        function ($scope, $filter, questionService, utilService) {

            $scope.ui = {
                general_notes: false,
            };

            $scope.init = function () {
                $scope.questionTypes = questionService.questionTypes();
                $scope.questionValidations = questionService.questionValidations();
                $scope.months = utilService.months();
                $scope.scriptTypes = utilService.scriptTypes();

                if (!$scope.question) {
                    $scope.question = questionService.singleChoice();
                    $scope.selectedQuestionType = $scope.question.type;
                    $scope.selectedValidationType = $scope.question.config.required;
                    $scope.selectedScriptType = $scope.question.config.scriptType;
                }

                $scope.selectedQuestionType = $scope.questionTypes[$scope.questionTypes.findIndex(p => p.type == $scope.question.type)];
                $scope.selectedValidationType = $scope.questionValidations[$scope.questionValidations.findIndex(p => p.type == $scope.question.config.required)];
                $scope.selectedScriptType = $scope.scriptTypes[$scope.scriptTypes.findIndex(p => p.type == $scope.question.config.scriptType)];
            };

            $scope.changeQuestionType = function (selectedQuestionType) {
                $scope.question.type = selectedQuestionType.type;
                console.log($scope.question.type)
            };

            $scope.changeValidationType = function (selectedValidationType) {
                $scope.question.config.required = selectedValidationType.type;
                console.log($scope.question)
            };

            $scope.changeScriptType = function (selectedScriptType) {
                $scope.question.config.scriptType = selectedScriptType.type;
                $scope.selectedScriptType = selectedScriptType;
                console.log($scope.question)
            };

            $scope.setOptionSetting = function (option, setting) {
                console.log(option.config[setting])
                if (setting === 'fixed' || setting === 'otherSpecify') {
                    option.config[setting] = option.config[setting] ? false : true;
                }
                else if (setting === 'xor') {
                    option.config.fixed = false;
                    option.config.otherSpecify = false;
                    option.config[setting] = option.config[setting] ? false : true;
                }
            };

            $scope.addBaseToBaseDesc = function () {
                var t = $scope.question.config.basedesc;
                if (t === 'B'
                    || t === 'Ba'
                    || t === 'Bas'
                    || t === 'Base'
                    || t === 'Base:'
                    || t.indexOf('Base:') == 0
                    || t.trim() === '') {
                    return;
                }
                else {
                    $scope.question.config.basedesc = 'Base: ' + $scope.question.config.basedesc;
                }
            };

            $scope.addTimestampToNote = function () {
                var arr = new Date().toUTCString().split(' ');
                var newDateStr = $scope.months[arr[2]] + '/' + arr[1] + '/' + arr[3] + ' ' + arr[4] + ' (UTC)\n' + '-------------------------------';
                if (!$scope.ui.general_notes) {
                    if ($scope.question.config.scriptAssistNote) {
                        $scope.question.config.scriptAssistNote += (($scope.question.config.scriptAssistNote.trim() !== '') ? '\n' : '') + newDateStr;
                    }
                    else {
                        $scope.question.config.scriptAssistNote = newDateStr;
                    }
                }
                else {
                    if ($scope.question.config.note) {
                        $scope.question.config.note += (($scope.question.config.note.trim() !== '') ? '\n' : '') + newDateStr;
                    }
                    else {
                        $scope.question.config.note = newDateStr;   
                    }
                }
            };


            $scope.addScalePair = function () {
                $scope.question.config.scalepairs.push({
                    left: null,
                    right: null
                });
                $scope.question.config.scalePairIndex = $scope.question.config.scalepairs.length - 1;
            };

            $scope.setScalePairIndex = function (index) {
                $scope.question.config.scalePairIndex = index;
                $scope.question.config.left = $scope.question.config.scalepairs[index].left;
                $scope.question.config.right = $scope.question.config.scalepairs[index].right;
            }

            $scope.removeScalePair = function (index) {
                $scope.question.config.scalepairs.splice(index, 1);
                $scope.question.config.scalePairIndex = $scope.question.config.scalepairs.length - 1;
                $scope.question.config.left = $scope.question.config.scalepairs[$scope.question.config.scalePairIndex].left;
                $scope.question.config.right = $scope.question.config.scalepairs[$scope.question.config.scalePairIndex].right;
            };

            $scope.init();


        }
    ]);