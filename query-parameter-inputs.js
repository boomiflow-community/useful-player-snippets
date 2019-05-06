//This module allows input query parameters to be passed to a flow. There is default player context in this example, the context for which would start at Line 117 in default player as of 5/6/2019

...
initialize: function () {

                var queryParameters = manywho.utils.parseQueryString(window.location.search.substring(1));

                manywho.settings.initialize({
                    adminTenantId: 'da497693-4d02-45db-bc08-8ea16d2ccbdf',
                    playerUrl: [ location.protocol, '//', location.host, location.pathname ].join(''),
                    joinUrl: [ location.protocol, '//', location.host, location.pathname ].join('')
                });
                
                /*
                Above here is default player stuff, below here begins custom player mofidications to pass inputs into your flow at launch-time
                Part 1 Inputs... 
                Explaination: <var input1 = queryParameters['input1']> would be the bare-minimum code in this part to pass a value in via the query string, 
                but without the additional logic described in the comment on the line below the flow might hang if it doesn't receive the expected query parameter
                a valid input might be <my-normal-flow-url>&input1=nachos&inputEmail=capp@gmail.com&inputMode=autopopulate
                */
                
                var input1 = queryParameters['input1'] != null ? queryParameters['input1'] : 'noInput1';  //The additional logic in this line puts a placeholder 'noInput1' if someone doesn't add expected inputs
                var input2 = queryParameters['input2'] != null ? queryParameters['input2'] : 'noInput2';
                var input3 = queryParameters['input3'] != null ? queryParameters['input3'] : 'noInput3';
                var input4 = queryParameters['input4'] != null ? queryParameters['input4'] : 'noInput4';
                var input5 = queryParameters['input5'] != null ? queryParameters['input5'] : 'noInput5';
                var input6 = queryParameters['input6'] != null ? queryParameters['input6'] : 'noInput6';
                var input7 = queryParameters['input7'] != null ? queryParameters['input7'] : 'noInput7';
                
                //Part 2 This bit turns the many inputs from Part 1 above into a single variable called 'inputs', which can be attached to the generateFlowInputs mechanism in Part 3 below
                var inputs = [
                    {"input1": input1},  //the left part of this bracket ... "input1" in quotes ... is the name of the input/output access value in flow itself. The right part of the bracket is the variable we created above (sourced either from the query parameter, or the placeholder). They don't necessarily need to have the same name but it does make it more straightforward to work with.
                    
                    {"input2": input2},
                    {"input3": input3},
                    {"input4": input4},
                    {"input5": input5},
                    {"input6": input6},
                    {"input7": input7}
                ];
                
                var jsonInputs = manywho.json.generateFlowInputs(inputs); // Part 3 This jsonInputs variable comprises the result of everything in Part 1 and Part 2 above, and will be referenced a bit lower in the flow options section as THE input to flow in Part 4 
                //End bit for inputs ^^
                
                //Below here is default player code, aside from the commented 'inputs' line
                var options = {
                    authentication: {
                        sessionId: queryParameters['session-token'],
                        sessionUrl: queryParameters['session-url']
                    },
                    navigationElementId: queryParameters['navigation-element-id'],
                    mode: queryParameters['mode'],
                    reportingMode: queryParameters['reporting-mode'],
                    replaceUrl: true,
                    collaboration: {
                        isEnabled: false
                    },
                    inputs: jsonInputs  //Part 4 This takes everything from the inputs above and actually passes it into a flow
                    //inputs: null,
                    annotations: null,
                    navigation: {
                        isFixed: true,
                        isWizard: false
                    },
                    callbacks: [],
                    theme: queryParameters['theme']
                };
               ...
