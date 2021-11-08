module.exports.templateTags = [
  {
    name: 'conditionalVariable',
    displayName: 'ConditionalVariable',
    description: 'conditional evaluation of variables',
    args: [
      {
        displayName: 'Expression',
        type: 'string',
		placeholder: 'true'
      },
      {
        displayName: 'Value when True',
        type: 'string',
        placeholder: 'True Result',
      },
      {
        displayName: 'Value when False',
        type: 'string',
        placeholder: 'False Result',
      },
    ],
    run(context, expression, trueResult, falseResult) {
      return eval(expression) ? trueResult : falseResult;
    },
  },
];