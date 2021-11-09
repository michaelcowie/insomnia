module.exports.templateTags = [
  {
    name: "conditionalVariable",
    displayName: "ConditionalVariable",
    description: "returns one of two values based on a true/false expression",
    args: [
      {
        displayName: "Expression to Evaluate",
        type: "string",
        placeholder: "\"ABC\" === \"DEF\""
      },
      {
        displayName: "Value when True",
        type: "string",
        placeholder: "it\'s true!",
      },
      {
        displayName: "Value when False",
        type: "string",
        placeholder: "it\'s false!",
      },
    ],
    run(context, expression, trueResult, falseResult) {
      if (expression === null || expression === "")
        throw("Missing expression!");
      if (trueResult === null)
        throw("Missing true result value!");
      if (falseResult === null)
        throw("Missing false result value!");
      try {
        return eval(expression) ? trueResult + "" : falseResult + "";
      }
      catch {
        throw("Unable to evaluate expression!");
      }
    }
  }
];