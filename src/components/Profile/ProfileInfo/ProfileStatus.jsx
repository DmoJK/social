import React from 'react'
import s from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    editActivated = () => {
        this.setState({
            editMode: true
        })
    }
    editDisabled = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status != this.props.status) {
            this.setState({ status: this.props.status })
        }
    }

    render() {
        return (
            <div>
                {this.state.editMode ?
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.editDisabled} value={this.state.status || 'Not status'} />
                    </div>
                    :
                    <div className={s.status}>
                        <span onDoubleClick={this.editActivated}>{this.props.status}</span>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus