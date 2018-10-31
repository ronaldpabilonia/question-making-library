angular.module("mainModule")
    .service("questionService", [
        function () {
            var me = this;
            this.optionOrder = function () {
                return ['normal', 'rotate', 'randomize', 'reverse'];
            };
            this.questionTypes = function () {
                return [
                    {type: "single", text: 'Single choice'},
                    {type: "multiple", text: 'Multiple choice'},
                    {type: "grid-check", text: 'Multiple choice grid'},
                    {type: "grid", text: 'Single choice grid'},
                    {type: "single-colorpicker", text: 'Single-colorpicker'},
                    {type: "multiple-colorpicker", text: 'Multiple-colorpicker'},
                    {type: "dyngrid-check", text: 'Dynamic checkbox grids'},
                    {type: "dyngrid", text: 'Dynamic grids'},
                    {type: "grid-open", text: 'Grid open'},
                    {type: "dropdown", text: 'Dropdown'},
                    {type: "rank", text: 'Ranking'},
                    {type: "scale", text: 'Scale'},
                    {type: "text", text: 'Text description'},
                    {type: "open", text: 'Open-ended'},
                    // {type: "pdl", text: 'PDL question'},
                ];
            };
            this.questionValidations = function () {
                return [
                    {type: "hard", text: 'Required'},
                    {type: "none", text: 'Optional'},
                    {type: "soft", text: 'Soft'},
                ];
            };
            this.singleChoice = function () {
                return {
                    config: {
                        dontKnow: false,
                        isScript: false,
                        isCustomReferenceName: true,
                        dontKnowText: null,
                        referenceName: null,
                        qslSnippet: null,
                        basedesc: null,
                        scriptAssistNote: null,
                        defaultText: null,
                        columns: null,
                        scalePairIndex: 0,
                        min: 1,
                        max: 1,
                        exactly: 1,
                        colsum: 1,
                        slots: 1,
                        intRangeMin: 1,
                        intRangeMax: 1,
                        textBoxHeight: 1,
                        textBoxWidth: 30,
                        textBoxWidthMax: null,
                        order: 'normal',
                        colorder: 'normal',
                        required: 'hard',
                        mcoption: 'minmax',
                        colorPickerColor: 'blue',
                        optionsLayout: 'vertical',
                        scriptType: 'JAVASCRIPT',
                        openType: 'open',
                        decimal_sep: '.',
                        scalepairs: [{
                            left: null,
                            right: null
                        }],
                    },
                    type: 'single',
                    text: 'What is your gender?',
                    varlabel: null,
                    responseListSrc: null,
                    rows: [
                        new Option({
                            config: {
                                isCustomReferenceName: true,
                                referenceName: null,
                                fixed: false,
                                otherSpecify: false,
                                xor: false,
                                otherSpecifyText: 'Please specify',
                            },
                            text: "Male",
                            ui: {
                                type: 'option',
                                active: false,
                                editing: false,
                            }
                        }),
                        new Option({
                            config: {
                                isCustomReferenceName: true,
                                referenceName: null,
                                fixed: false,
                                otherSpecify: false,
                                xor: false,
                                otherSpecifyText: 'Please specify',
                            },
                            text: "Female",
                            ui: {
                                type: 'option',
                                active: false,
                                editing: false,
                            }
                        })
                    ],
                    ui: {
                        type: 'question',
                        active: false,
                        editing: false
                    }
                };
            };
        }
    ]);