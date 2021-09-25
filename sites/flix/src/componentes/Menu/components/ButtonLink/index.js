/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

function ButtonLink(props){
    return(
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a href={props.href} class={props.className}>
            {props.children}
        </a>
    );
}

export default ButtonLink;