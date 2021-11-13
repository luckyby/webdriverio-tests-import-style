<h1>WebdriverIO tests 'import' style</h1>
<h3>by create local scope with "type":"module" in package.json</h3>
<hr>

The local file <strong>test/package.json</strong> realizes the local scope <strong>by change</strong> "type":"commonjs" to "type":"module".

File <strong>example.e2e_old.js</strong> utilizes the '<strong>require</strong>' style by test/package.json without anything (default) or with  "type":"<strong>commonjs</strong>".
<br>File <strong>example.e2e.js</strong> utilizes the '<strong>import</strong>' style by test/package.json with "type":"<strong>module</strong>".



