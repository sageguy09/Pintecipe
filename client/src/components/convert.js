import React, { Component } from 'react'

class Convert extends Component {
   state = {
      names: '',
      namesSplit: [],
      output: []
    }


  handleSubmit = name => {
    alert(`Submitted name: ${name}`)
  }
  handleTextChange = (evnt) => {
      let newState = {...this.state}
      newState[evnt.target.name] = evnt.target.value;
      this.setState(newState)
  }
  handleTextSubmit = (evnt) => {
    evnt.preventDefault();
    //let names = "test\ntest"
    const { names } = this.state
    console.log(names)
    //console.log('names type ', typeof names)
    let lines = names.split(/\r?\n/);
    let output = []
    let obj = {}
    for (let i = 0; i < lines.length; i++) {
        obj["step"] = lines[i].trim()
            //output.push(lines[i].trim());
            output.push(obj)
        }
    //console.log('output object type ', typeof output[0])
    console.log(output)
    //console.log(lines)
    //this.setState({namesSplit: lines})
  }
 /* handleChange = e => {
    this.setState({
      names: e.target.value
    })
  }

  convertLines = (convert) => {
    var lines = convert.input.split(/\n/);
    //let test;
    var output = []
    // for (var i = 0; i < lines.length; i++) {
    //   // only push this line if it contains a non whitespace character.
    //   if (/\S/.test(lines[i])) {
    //     convert.outputText.push('{' + test.trim(lines[i]) + '}');
    //     convert.output.push(test.trim(lines[i]));
    //   }
    // }
    for (let i = 0; i < lines.length; i++) {
        output.push('{'+ lines.trim(lines[i]) +'}')
    }
    console.log(output)
    // this.setState({convert: convert})
    //console.log(output);
    //input.val('[' + outputText + ']');
   
  }
  */

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