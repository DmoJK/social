import { connect } from 'react-redux';
import { sendMessage } from '../../redux/messages-reducer';
import Dialogs from './Dialogs';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        dialogsData: state.messagesPage.dialogsData,
        messagesData: state.messagesPage.messagesData,
    }
};

const DialogsContainer = compose(
    connect(mapStateToProps,
        { sendMessage }),
    withAuthRedirect
)(Dialogs)

export default DialogsContainer;
