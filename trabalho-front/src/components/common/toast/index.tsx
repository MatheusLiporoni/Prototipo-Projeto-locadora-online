import {Toast , ToastBody} from "reactstrap"

interface props {
    isOpen: boolean;
    message: string;
    color: string

}
const ToastComponent = function ({isOpen,message,color}: props){
    return <>
        <Toast className={`${color}`} isOpen={isOpen}>
            <ToastBody className="text-center">{message}</ToastBody>
        </Toast>
    </>;
}


export default ToastComponent