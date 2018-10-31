angular.module("mainModule")
	.controller("mainController", ["$scope",
	    function ($scope) {
	        $scope.question = {
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
	        	text: 'test',
	        	type: 'scale',
	        	varlabel: null,
	        	responseListSrc: null,
	        	rows: [
	        		{	
	        			config: {
	        				isCustomReferenceName: true,
	        				referenceName: null,
        				    fixed: false,
                            otherSpecify: false,
                            xor: false,
                            otherSpecifyText: 'Please specify',
	        			},
	        			text: 'ans 1'
	        		},
	        		{	
	        			config: {
	        				isCustomReferenceName: true,
	        				referenceName: null,
    						fixed: false,
                            otherSpecify: false,
                            xor: false,
                            otherSpecifyText: 'Please specify',
	        			},
	        			text: 'ans 2'
	        		},
	        		{	
	        			config: {
	        				isCustomReferenceName: true,
	        				referenceName: null,
    						fixed: false,
                            otherSpecify: false,
                            xor: false,
                            otherSpecifyText: 'Please specify',
	        			},
	        			text: 'ans 3'
	        		},
	        		{	
	        			config: {
	        				isCustomReferenceName: true,
	        				referenceName: null,
    						fixed: false,
                            otherSpecify: false,
                            xor: false,
                            otherSpecifyText: 'Please specify',
	        			},
	        			text: 'ans 4'
	        		},
	        		{	
	        			config: {
	        				isCustomReferenceName: true,
	        				referenceName: null,
    						fixed: false,
                            otherSpecify: false,
                            xor: false,
                            otherSpecifyText: 'Please specify',
	        			},
	        			text: 'ans 5'
	        		},
	        	],
	        	columns: [
	        		{	
	        			config: {
	        				isCustomReferenceName: true,
	        				referenceName: null,
    						fixed: false,
                            otherSpecify: false,
                            xor: false,
                            otherSpecifyText: 'Please specify',
	        			},
	        			text: 'ans 6'
	        		},
	        		{	
	        			config: {
	        				isCustomReferenceName: true,
	        				referenceName: null,
	        				fixed: false,
	                        otherSpecify: false,
	                        xor: false,
                            otherSpecifyText: 'Please specify',
	        			},
	        			text: 'ans 7'
	        		},
	        		{	
	        			config: {
	        				isCustomReferenceName: true,
	        				referenceName: null,
	        				fixed: false,
	                        otherSpecify: false,
	                        xor: false,
                            otherSpecifyText: 'Please specify',
	        			},
	        			text: 'ans 8'
	        		},
	        		{	
	        			config: {
	        				isCustomReferenceName: true,
	        				referenceName: null,
    						fixed: false,
                            otherSpecify: false,
                            xor: false,
                            otherSpecifyText: 'Please specify',
	        			},
	        			text: 'ans 9'
	        		},
	        		{	
	        			config: {
	        				isCustomReferenceName: true,
	        				referenceName: null,
    						fixed: false,
                            otherSpecify: false,
                            xor: false,
                            otherSpecifyText: 'Please specify',
	        			},
	        			text: 'ans 10'
	        		},
	        	],
	        };
	    }
	]);