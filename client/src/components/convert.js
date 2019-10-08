import React, { Component } from 'react'

class Convert extends Component {
   state = {
    convert: {
      names: '',
      namesSplit: [],
      output: []}
    }


  handleSubmit = name => {
    alert(`Submitted name: ${name}`)
  }
  handleTextChange = (evnt) => {
      let newState = {...this.state.convert}
      newState[evnt.target.name] = evnt.target.value;
      this.setState({convert: newState})
  }
  handleTextSubmit = (evnt) => {
    evnt.preventDefault();
    //let names = "test\ntest"
    this.convertTextArea(this.state.convert)

  }
  convertTextArea = (text) => {
    const { names, output } = text
    //const { output } = text
    console.log(names)
    //console.log('names type ', typeof names)
    let lines = names.split(/\r?\n/);
    //let output = []
    
    for (let i = 0; i < lines.length; i++) {
            const obj = {stepNum: i+1, stepDesc: lines[i].trim()}
            const trimmedLine = lines[i].trim()
            if (trimmedLine !== "") {
                output.push(obj);
            }
            //output.push(obj)
        }
    //console.log('output object type ', typeof output[0])
    console.log(output)
    //console.log(lines)
    this.setState({convert: {names, output}})
    this.state.convert.output.forEach(function (instruction){
        var x = instruction
        console.log(x)
    })

  }

  render() {
    return (
        <div>
            <form id="textConversion" onSubmit={this.handleTextSubmit}>
                <textarea onChange={this.handleTextChange} form="textConverstion" name="names" value={this.names}></textarea>
                <input type="submit" value="submit" />
            </form>
        </div>
    )
  }
}

export default Convert


//   conversionInput = (evnt) => {
//     let newOutput = {...this.state};
//     newOutput[evnt.target.name] = evnt.target.value;
//     this.setState({convert: newOutput})
// }

// handleConvertSubmit = (evnt) => {
//     evnt.preventDefault();
//     this.convertLines(this.state.convert)
// }
// convertLines = (convert) => {
//     var lines = convert.input.split(/\n/);
//     //let test;
//     var output = []
//     // for (var i = 0; i < lines.length; i++) {
//     //   // only push this line if it contains a non whitespace character.
//     //   if (/\S/.test(lines[i])) {
//     //     convert.outputText.push('{' + test.trim(lines[i]) + '}');
//     //     convert.output.push(test.trim(lines[i]));
//     //   }
//     // }
//     for (let i = 0; i < lines.length; i++) {
//         output.push('{'+ lines.trim(lines[i]) +'}')
//     }
//     console.log(output)
//     // this.setState({convert: convert})
//     //console.log(output);
//     //input.val('[' + outputText + ']');
   
//   }