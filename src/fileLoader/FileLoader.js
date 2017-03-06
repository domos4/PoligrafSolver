import React from "react";
import FileInput from "react-file-input";

class FileLoader extends React.Component {

    onChange(event) {
        const file = event.target.files[0];
        this.props.onChange(file);
    }

    render() {
        return (
            <div>
                <form>
                    <FileInput name="inputFile"
                               accept=".txt,.json"
                               placeholder="Load File"
                               className="inputClass"
                               onChange={ (e) => this.onChange(e) }
                    />
                </form>
                <button
                    onClick={ this.props.onClick }>
                    Solve
                </button>
            </div>
        );
    }
}

export default FileLoader;