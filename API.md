## Classes

<dl>
<dt><a href="#UnRTF">UnRTF</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#OptionDetails">OptionDetails</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#UnRTFAcceptedOptions">UnRTFAcceptedOptions</a> : <code>Record.&lt;string, OptionDetails&gt;</code></dt>
<dd></dd>
<dt><a href="#UnRTFOptions">UnRTFOptions</a></dt>
<dd></dd>
</dl>

<a name="UnRTF"></a>

## UnRTF
**Kind**: global class  

* [UnRTF](#UnRTF)
    * [new UnRTF([binPath])](#new_UnRTF_new)
    * _instance_
        * [.unrtfAcceptedOptions](#UnRTF+unrtfAcceptedOptions) : [<code>UnRTFAcceptedOptions</code>](#UnRTFAcceptedOptions)
        * [.path](#UnRTF+path) ⇒ <code>string</code>
        * [.version](#UnRTF+version) ⇒ <code>string</code>
        * [.convert(file, [options])](#UnRTF+convert) ⇒ <code>Promise.&lt;string&gt;</code>
    * _static_
        * [.UnRTF](#UnRTF.UnRTF) : <code>string</code> \| <code>undefined</code>

<a name="new_UnRTF_new"></a>

### new UnRTF([binPath])

| Param | Type | Description |
| --- | --- | --- |
| [binPath] | <code>string</code> | Path of UnRTF binary. If not provided, the constructor will attempt to find the binary in the PATH environment variable. For `win32`, a binary is bundled with the package and will be used if a local installation is not found. |

<a name="UnRTF+unrtfAcceptedOptions"></a>

### unRTF.unrtfAcceptedOptions : [<code>UnRTFAcceptedOptions</code>](#UnRTFAcceptedOptions)
**Kind**: instance property of [<code>UnRTF</code>](#UnRTF)  
<a name="UnRTF+path"></a>

### unRTF.path ⇒ <code>string</code>
Returns the path of the UnRTF binary.

**Kind**: instance property of [<code>UnRTF</code>](#UnRTF)  
**Returns**: <code>string</code> - Path of UnRTF binary.  
<a name="UnRTF+version"></a>

### unRTF.version ⇒ <code>string</code>
Returns the version of the UnRTF binary.

**Kind**: instance property of [<code>UnRTF</code>](#UnRTF)  
**Returns**: <code>string</code> - Version of UnRTF binary.  
<a name="UnRTF+convert"></a>

### unRTF.convert(file, [options]) ⇒ <code>Promise.&lt;string&gt;</code>
Converts an RTF file to HTML/LaTeX/RTF/TXT.
Defaults to HTML output if no `output*` options are provided.
UnRTF will use the directory of the original file to store embedded pictures.

**Kind**: instance method of [<code>UnRTF</code>](#UnRTF)  
**Returns**: <code>Promise.&lt;string&gt;</code> - A promise that resolves with a stdout string, or rejects with an `Error` object.  
**Author**: Frazer Smith  

| Param | Type | Description |
| --- | --- | --- |
| file | <code>string</code> | Filepath of the RTF file to read. |
| [options] | [<code>UnRTFOptions</code>](#UnRTFOptions) | Options to pass to UnRTF binary. |

<a name="UnRTF.UnRTF"></a>

### UnRTF.UnRTF : <code>string</code> \| <code>undefined</code>
**Kind**: static property of [<code>UnRTF</code>](#UnRTF)  
<a name="OptionDetails"></a>

## OptionDetails : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| arg | <code>string</code> | The argument to pass to the binary. |
| type | <code>&#x27;boolean&#x27;</code> \| <code>&#x27;number&#x27;</code> \| <code>&#x27;string&#x27;</code> | The type of the option. |
| minVersion | <code>string</code> | The minimum version of the binary that supports this option. |
| [maxVersion] | <code>string</code> | The maximum version of the binary that supports this option (optional). |

<a name="UnRTFAcceptedOptions"></a>

## UnRTFAcceptedOptions : <code>Record.&lt;string, OptionDetails&gt;</code>
**Kind**: global typedef  
<a name="UnRTFOptions"></a>

## UnRTFOptions
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [noPictures] | <code>boolean</code> | Disable the automatic storing of embedded pictures to the current working directory. |
| [noRemap] | <code>boolean</code> | Disable charset conversion (only works for 8-bit charsets) (UnRTF v0.20.5 or later only). |
| [outputHtml] | <code>boolean</code> | Generate HTML output. |
| [outputLatex] | <code>boolean</code> | Generate LaTeX output. |
| [outputPs] | <code>boolean</code> | Generate PostScript (PS) output (UnRTF v0.19.4 or earlier only). |
| [outputRtf] | <code>boolean</code> | Generate RTF output. (UnRTF v0.21.3 or later only). |
| [outputText] | <code>boolean</code> | Generate ASCII text output. |
| [outputVt] | <code>boolean</code> | Generate text output with VT100 escape codes. |
| [outputWpml] | <code>boolean</code> | Generate WPML output (UnRTF v0.19.4 or earlier only). |
| [printVersionInfo] | <code>boolean</code> | Print copyright and version info. |
| [quiet] | <code>boolean</code> | Do not print any leading comments in output (UnRTF v0.21.3 or later only). |

