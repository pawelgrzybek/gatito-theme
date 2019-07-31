const theme = require("../theme");

module.exports = [
  {
    name: "Comments",
    scope: "comment, punctuation.definition.comment",
    settings: {
      foreground: "#7F7F7F",
      fontStyle: "italic"
    }
  },
  {
    name: "Variable",
    scope: "variable",
    settings: {
      foreground: "#D4D4D4"
    }
  },
  {
    name: "Keyword, Storage",
    scope: "keyword, storage.type, storage.modifier",
    settings: {
      foreground: "#C594C5"
    }
  },
  {
    name: "Operator, Misc",
    scope:
      "keyword.operator, constant.other.color, punctuation, punctuation.definition.tag, punctuation.separator.inheritance.php, punctuation.definition.tag.html, punctuation.definition.tag.begin.html, punctuation.definition.tag.end.html, punctuation.section.embedded, keyword.other.template, keyword.other.substitution",
    settings: {
      foreground: "#5FB3B3"
    }
  },
  {
    name: "Tag",
    scope: "entity.name.tag, meta.tag.sgml, markup.deleted.git_gutter",
    settings: {
      foreground: "#EB606B"
    }
  },
  {
    name: "Function, Special Method, Block Level",
    scope:
      "entity.name.function, meta.function-call, variable.function, support.function, keyword.other.special-method, meta.block-level",
    settings: {
      foreground: "#6699CC"
    }
  },
  {
    name: "Other Variable, String Link",
    scope: "support.other.variable, string.other.link",
    settings: {
      foreground: "#F2777A"
    }
  },
  {
    name: "Number, Constant, Function Argument, Tag Attribute, Embedded",
    scope:
      "constant.numeric, constant.language, support.constant, constant.character, variable.parameter, keyword.other.unit",
    settings: {
      foreground: "#F99157"
    }
  },
  {
    name: "String, Symbols, Inherited Class, Markup Heading",
    scope:
      "string, constant.other.symbol, constant.other.key, entity.other.inherited-class, markup.heading, markup.inserted.git_gutter, meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js",
    settings: {
      foreground: "#99C794"
    }
  },
  {
    name: "Class, Support",
    scope:
      "entity.name.class, entity.name.type.class, support.type, support.class, support.orther.namespace.use.php, meta.use.php, support.other.namespace.php, markup.changed.git_gutter",
    settings: {
      foreground: "#FAC863"
    }
  },
  {
    name: "Sub-methods",
    scope:
      "entity.name.module.js, variable.import.parameter.js, variable.other.class.js",
    settings: {
      foreground: "#E15A60"
    }
  },
  {
    name: "Language methods",
    scope: "variable.language",
    settings: {
      fontStyle: "italic",
      foreground: "#E15A60"
    }
  },
  {
    name: "entity.name.method.js",
    scope: "entity.name.method.js",
    settings: {
      foreground: "#D8DEE9"
    }
  },
  {
    name: "meta.method.js",
    scope:
      "meta.class-method.js entity.name.function.js, variable.function.constructor",
    settings: {
      foreground: "#D8DEE9"
    }
  },
  {
    name: "Attributes",
    scope: "entity.other.attribute-name",
    settings: {
      foreground: "#BB80B3"
    }
  },
  {
    name: "Inserted",
    scope: "markup.inserted",
    settings: {
      foreground: "#99C794"
    }
  },
  {
    name: "Deleted",
    scope: "markup.deleted",
    settings: {
      foreground: "#E15A60"
    }
  },
  {
    name: "Changed",
    scope: "markup.changed",
    settings: {
      foreground: "#BB80B3"
    }
  },
  {
    name: "Regular Expressions",
    scope: "string.regexp",
    settings: {
      foreground: "#5FB3B3"
    }
  },
  {
    name: "Escape Characters",
    scope: "constant.character.escape",
    settings: {
      foreground: "#5FB3B3"
    }
  },
  {
    name: "URL",
    scope: "*url*, *link*, *uri*",
    settings: {
      fontStyle: "underline"
    }
  },
  {
    name: "Search Results Nums",
    scope: "constant.numeric.line-number.find-in-files - match",
    settings: {
      foreground: "#AB7967"
    }
  },
  {
    name: "Search Results Lines",
    scope: "entity.name.filename.find-in-files",
    settings: {
      foreground: "#99C794"
    }
  },
  {
    name: "Decorators",
    scope:
      "tag.decorator.js entity.name.tag.js, tag.decorator.js punctuation.definition.tag.js",
    settings: {
      fontStyle: "italic",
      foreground: "#6699CC"
    }
  },
  {
    name: "ES7 Bind Operator",
    scope: "source.js constant.other.object.key.js string.unquoted.label.js",
    settings: {
      fontStyle: "italic",
      foreground: "#E15A60"
    }
  },
  {
    scope: "token.info-token",
    settings: {
      foreground: "#6796e6"
    }
  },
  {
    scope: "token.warn-token",
    settings: {
      foreground: "#cd9731"
    }
  },
  {
    scope: "token.error-token",
    settings: {
      foreground: "#f44747"
    }
  },
  {
    scope: "token.debug-token",
    settings: {
      foreground: "#b267e6"
    }
  },
  {
    scope: "source.js entity.other.attribute-name.js",
    settings: {
      fontStyle: "italic"
    }
  },
  {
    scope: "text.html.basic entity.other.attribute-name.html",
    settings: {
      fontStyle: "italic"
    }
  }
];
