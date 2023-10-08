<a name="UnRTF"></a>

## UnRTF
**Kind**: global class  

* [UnRTF](#UnRTF)
    * [new UnRTF([binPath])](#new_UnRTF_new)
    * [.unrtfPath](#UnRTF+unrtfPath) : <code>string</code> \| <code>undefined</code>
    * [.unrtfVersion](#UnRTF+unrtfVersion) : <code>string</code> \| <code>undefined</code>
    * [.unrtfAcceptedOptions](#UnRTF+unrtfAcceptedOptions) : <code>object</code>
    * [.convert(file, [options])](#UnRTF+convert) ⇒ <code>Promise.&lt;string&gt;</code>

<a name="new_UnRTF_new"></a>

### new UnRTF([binPath])

| Param | Type | Description |
| --- | --- | --- |
| [binPath] | <code>string</code> | Path of UnRTF binary. If not provided, the constructor will attempt to find the binary in the PATH environment variable. For `win32`, a binary is bundled with the package and will be used if a local installation is not found. |

<a name="UnRTF+unrtfPath"></a>

### unRTF.unrtfPath : <code>string</code> \| <code>undefined</code>
**Kind**: instance property of [<code>UnRTF</code>](#UnRTF)  
<a name="UnRTF+unrtfVersion"></a>

### unRTF.unrtfVersion : <code>string</code> \| <code>undefined</code>
**Kind**: instance property of [<code>UnRTF</code>](#UnRTF)  
<a name="UnRTF+unrtfAcceptedOptions"></a>

### unRTF.unrtfAcceptedOptions : <code>object</code>
**Kind**: instance property of [<code>UnRTF</code>](#UnRTF)  
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
| [options] | <code>object</code> | Object containing options to pass to binary. |
| [options.noPictures] | <code>boolean</code> | Disable the automatic storing of embedded pictures to the directory of the original file. |
| [options.noRemap] | <code>boolean</code> | Disable charset conversion (only works for 8-bit charsets) (UnRTF v0.20.5 or later only). |
| [options.outputHtml] | <code>boolean</code> | Generate HTML output. |
| [options.outputLatex] | <code>boolean</code> | Generate LaTeX output. |
| [options.outputPs] | <code>boolean</code> | Generate PostScript (PS) output (UnRTF v0.19.4 or earlier only). |
| [options.outputRtf] | <code>boolean</code> | Generate RTF output. (UnRTF v0.21.3 or later only). |
| [options.outputText] | <code>boolean</code> | Generate ASCII text output. |
| [options.outputVt] | <code>boolean</code> | Generate text output with VT100 escape codes. |
| [options.outputWpml] | <code>boolean</code> | Generate WPML output (UnRTF v0.19.4 or earlier only). |
| [options.printVersionInfo] | <code>boolean</code> | Print copyright and version info. |
| [options.quiet] | <code>boolean</code> | Do not print any leading comments in output (UnRTF v0.21.3 or later only). |

