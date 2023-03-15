import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons'

export default function HHType(props) {
    return (
        <div>
            <div className="flex space-x-4 text-lg">
                <span className={props.nameStyle == undefined ? "flex justify-center items-center" : props.nameStyle}>Drinks {props.drinks ? <span className={props.checkSize}><FontAwesomeIcon className="pl-1 text-green-400" icon={faCheck}/></span> : <span className={props.xSize}><FontAwesomeIcon className="pl-1.5 text-red-400 pt-0.5 " icon={faX}/></span>}</span>
                <span className={props.nameStyle == undefined ? "flex justify-center items-center" : props.nameStyle}>Food {props.food ? <span className={props.checkSize}><FontAwesomeIcon className="pl-1 text-green-400" icon={faCheck}/></span> : <span className={props.xSize}><FontAwesomeIcon className="pl-1.5 text-red-400  pt-0.5" icon={faX}/></span>}</span>
            </div>
        </div>
        
    )
}