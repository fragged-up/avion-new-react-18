const customRules = {
  'blank-line-from-line-50': {
    meta: {
      type: 'layout',
      docs: {
        description: 'Add a blank line before and after each statement starting from line 50',
        recommended: false,
      },
      fixable: 'whitespace',
    },
    create(context) {
      return {
        Program(node) {
          const sourceCode = context.getSourceCode();
          const lines = sourceCode.lines;

          // התחל את הבדיקה רק משורה 50 (אינדקס 49)
          for (let index = 49; index < lines.length - 1; index++) {
            const currentLine = lines[index].trim();
            const nextLine = lines[index + 1].trim();

            // בדוק אם השורה הנוכחית והשורה הבאה אינן ריקות ודורשות שורה ריקה ביניהן
            if (index >= 49 && currentLine && nextLine) { // וידוא שהאינדקס הוא לפחות 49
              context.report({
                loc: {
                  start: { line: index + 1, column: 0 },
                  end: { line: index + 1, column: currentLine.length },
                },
                message: 'Add a blank line before and after this line',
                fix(fixer) {
                  return fixer.insertTextAfterRange(
                    [sourceCode.getIndexFromLoc({ line: index + 1, column: currentLine.length }), 0],
                    '\n'
                  );
                },
              });
            }
          }
        },
      };
    },
  },
};

export default { rules: customRules };