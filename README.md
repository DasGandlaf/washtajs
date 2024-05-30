Language injection:

Webstorm:

Settings -> Editor -> Language Injections -> id: HTML -> prefix: <div class=" -> suffix: "></div> -> places patterns: 
+ jsLiteralExpression(jsArgument(jsReferenceExpression().withQualifiedName("d"), 0))
+ jsLiteralExpression(jsArgument(jsReferenceExpression().withQualifiedName("m"), 0))
