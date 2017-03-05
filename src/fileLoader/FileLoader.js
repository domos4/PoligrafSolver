import React from "react";
import FileInput from "react-file-input";

class FileLoader extends React.Component {
    inputFile;

    handleChange(event) {
        this.inputFile = event.target.files[0];
    }

    render() {
        return (
            <form>
                <FileInput name="inputFile"
                           accept=".txt,.json"
                           placeholder="Load File"
                           className="inputClass"
                           onChange={this.handleChange}/>
            </form>
        );
    }
}

export default FileLoader;