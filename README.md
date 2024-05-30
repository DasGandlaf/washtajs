Language injection:

Webstorm:

Settings -> Editor -> Language Injections -> id: HTML -> prefix: <div class=" -> suffix: "></div> -> places patterns: 
+ jsArgument(jsReferenceExpression().withReferenceNames("d", "m", "c"), 0)
+ jsLiteralExpression(jsArgument(jsReferenceExpression().withQualifiedName("c"), 0))
+ jsLiteralExpression(jsArgument(jsReferenceExpression().withQualifiedName("d"), 0))
+ jsLiteralExpression(jsArgument(jsReferenceExpression().withQualifiedName("m"), 0))
